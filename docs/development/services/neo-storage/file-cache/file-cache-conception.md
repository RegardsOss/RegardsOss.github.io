---
id: backend-file-cache-conception
title: REGARDS file cache microservice
sidebar_label: How it works
sidebar_position: 2
slug: /development/backend/services/file-cache/conception/
---

## Introduction

The `file-cache` microservice is responsible for managing a file cache system. Unlike
[`file-catalog`](../file-catalog/file-catalog-conception.md), which manages file metadata and lifecycle, 
the `file-cache` microservice focuses exclusively on the cache. 
It does not physically access files outside of the cache: 
all interactions with storage systems are done through [`file-access`](../file-access/file-access-conception.md).

This separation of concerns enables:
- Better scalability
- Independent scaling of catalog management and physical storage operations

### Core Components

#### File Cache Microservice

The main microservice is responsible for:
- Managing the lifecycle of cached files
- Receiving retrieval requests from `file-catalog`
- Sending file retrieval requests to `file-access` when files are not available

#### Checksum based cache

Files stored in the cache are identified by their checksum. This prevents the `file-cache` service from having to 
download the same file again if its content is the same as a file already present in the cache.

#### External Cache

A nearline storage system can by configured to be used as an external cache. In this case, restored files are not downloaded to the cache but are accessed directly from the storage system.

#### Handling of duplicates

`File-cache` handles duplicate requests for the same file by putting subsequent request on wait until the first request succeeds or fails.

## Workflows

### Communication Flow

```
[file-catalog] 
    ↓ AMQP: RestoreRequestFromCatalogEvent
[file-cache]
    ↓ AMQP: RestoreRequestEvent
[file-access]
    ↓ Routes to appropriate plugin
[Storage plugin]
    ↓ Restores file on storage system
[file-access]
    ↓ Processes response
    ↓ AMQP: RestoreResponseFromAccessEvent
[file-cache]
    ↓ Processes response
    ↓ AMQP: RestoreResponseFromCacheEvent
[file-catalog] 
```

## Integration Points

### With File Catalog

- **Input**: `RestoreRequestFromCatalogEvent` requesting file restoration
- **Output**: `RestoreResponseFromCacheEvent` confirming restoration completion or failure

### With File Access

- **Input**: `RestoreResponseFromAccessEvent` response for restoration completion or failure
- **Output**: `RestoreRequestEvent` requesting file restoration

### With File Packager

- **Input**: `RestorePackageResponseEvent` response for small file restoration
- **Output**: `RestorePackageRequestEvent` requesting small file restoration