---
id: backend-file-access-overview
title: REGARDS file access microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/file-access/overview/
---

The **file-access** microservice is an integral part of the functional
groups [OAIS Services (Functional overview)](../../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../../overview/functional-overview/05-product-restitution-services.md).

**File-access** is part of the **Neo-Storage architecture** and replaces part of the former RS-STORAGE responsibilities.

**File-access** is responsible for physically interacting with storage systems to store, retrieve, and
delete files on behalf of the REGARDS catalog. It acts as the **interface between the file-catalog and physical storage systems**.

Its main responsibilities are:

* **Physically storing files** on configured storage locations via dedicated workers
* **Retrieving files** from storage systems through plugins
* **Deleting files** from storage systems
* **Coordinating with storage workers** to ensure scalability and performance
* **Managing storage plugin configurations** for different storage backends
* **Checking file availability** and requesting restoration for nearline storage

## Key Characteristics

The file access microservice is designed with the following principles:

### Separation of Concerns

**File-access** focuses exclusively on **physical file operations**. It does not maintain file metadata or track file
lifecycle — these responsibilities belong to [file-catalog](../file-catalog/file-catalog-overview.md).

This clear separation enables:
- Independent evolution of catalog management and storage technology
- Better scalability by distributing workload
- Support for multiple storage backends without affecting the catalog

### Worker-Based Architecture

Unlike the former storage microservice, **file-access** delegates CPU and I/O intensive operations to **dedicated
storage workers**. This architecture provides:
- **Horizontal scalability**: Workers can be scaled independently based on storage workload
- **Isolation**: Storage operations don't impact the microservice's responsiveness
- **Flexibility**: Different worker types for different storage technologies

### Plugin-Based Storage Access

Storage plugins provide a unified interface to interact with various storage technologies:
- Local filesystem storage
- Amazon S3 standard storage
- Amazon S3 Glacier nearline storage
- Other storage systems (extensible via plugins)

Each storage location requires both a **plugin** (running in the microservice) and one or more **workers** (running as
separate applications).

## How It Works

### Storage Operations

When files need to be stored:
1. **File-access** receives storage requests from **file-catalog**
2. Storage workers download files from source URLs and upload them to target storage
3. Workers report success or failure back to **file-access**
4. **File-access** forwards results to **file-catalog**

Storage operations are **asynchronous** and handled by workers to maximize throughput.

### Retrieval Operations

When files need to be retrieved:
1. **File-cache** (or another service) requests a file from **file-access**
2. The storage plugin directly retrieves the file from storage
3. **File-access** streams the file back to the requester

Retrieval operations are **synchronous** and handled directly by plugins for minimal latency.

### Deletion Operations

When files need to be deleted:
1. **File-catalog** sends deletion requests to **file-access**
2. The storage plugin directly removes files from storage (if physical deletion is enabled)
3. **File-access** reports deletion results to **file-catalog**

## Storage Types

**File-access** supports the three types of storage defined by REGARDS: **online**, **nearline**, and **offline** storage.

For detailed information about these storage types, see the [Storage Types section in the Neo-Storage overview](../neo-storage-overview.md#storage-types).

### Online Storage

[Online storage](../neo-storage-overview.md#online-storage) refers to storage systems where files are **immediately available** for access.

**File-access** provides for online storage:
- **Synchronous access**: Files can be retrieved immediately
- **Direct streaming**: Files can be streamed to clients
- **Physical storage management**: Writing and deleting files on storage systems

### Nearline Storage

[Nearline storage](../neo-storage-overview.md#nearline-storage) refers to archival storage systems where files **may not be immediately available** and need to be **restored before access**.

**File-access** provides for nearline storage:
- **Availability checking**: Query whether files are ready for download
- **Restoration workflow**: Request files to be moved from archive to buffer
- **Physical storage management**: Writing and deleting files on storage systems
- **Small file packaging**: Group small files into archives before storage to reduce costs

### Offline Storage

[Offline storage](../neo-storage-overview.md#offline-storage) refers to files that are **only referenced by REGARDS** but not physically managed by the system.

**File-access** provides for offline storage:
- **Reference retrieval**: Access to external file URLs for download by other services
- **No physical operations**: Files remain at their original location and are not stored, modified, or deleted by REGARDS

## Access Patterns

Unlike other microservices, **file-access** is **not intended to be accessed directly by end users**. Its REST APIs are
mainly internal and are used by other REGARDS microservices.

### Initiating Services

Physical file operations are initiated by:
- **[RS-FILE-CATALOG](../file-catalog/file-catalog-overview.md)**: For storage and deletion operations
- **[RS-FILE-PACKAGER](../file-packager/file-packager-overview.md)**: For packaging small files into archives

### Access Control

Access rights to files are **not managed** by **file-access** but by upstream services:
- **[Data Manager](../../dam/overview.md)**: Manages product-level access rights
- **[Catalog](../../catalog/overview.md)**: Enforces access control during catalog searches and downloads
- **[Order](../../order/overview.md)**: Controls access for ordered products

**File-access** trusts that requesters have already verified access rights before initiating file operations.

## Relationship with Other Neo-Storage Services

**File-access** is one component of the larger **Neo-Storage architecture**:

### File-catalog
Manages file metadata and lifecycle. It:
- Sends storage and deletion requests to **file-access**
- Receives operation results and updates file statuses
- Maintains the logical view of files in the REGARDS catalog

### File-cache
Improves retrieval performance. It:
- Requests files from **file-access** on cache misses
- Caches retrieved files to reduce latency for subsequent requests
- Manages nearline file restoration workflow

### File-packager
Optimizes nearline storage costs. It:
- Groups small files into archives
- Uses **file-access** to store packages
- Updates file references to point to package locations

## Scalability and Performance

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                |
| [Vertical scalability](../../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Can utilize more CPU and memory resources           |
| [Horizontal scalability](../../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Multiple instances can be deployed in parallel      |

**File-access** achieves horizontal scalability through:
- **Multiple microservice instances**: Can run in parallel to handle more requests
- **Independent workers**: Storage workers scale separately based on workload
- **Plugin architecture**: Storage plugins can optimize batching for throughput

## How to Use

You can learn how the service works in detail with the [conception section](./file-access-conception.md).

## How to Access Source Code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-file-access).