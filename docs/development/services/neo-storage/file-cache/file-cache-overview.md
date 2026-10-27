---
id: backend-file-cache-overview
title: REGARDS file cache microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/file-cache/overview/
---

The `file-cache` microservice is an integral part of the functional
groups [OAIS Services (Functional overview)](../../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../../overview/functional-overview/05-product-restitution-services.md).

`File-cache` is part of the **Neo-Storage architecture** and replaces part of the former `rs-storage` responsibilities.

`File-cache` is responsible for managing a cache of retrieved files to improve retrieval performance. Subsequent requests for a file already in the cache don't need further work.

Its main responsibilities are:

* **Checking file availability** in the cache and requesting download from file-access for nearline storage
* **Deleting expired files** from the configured cache location
* **Managing references to files in external cache** for storage locations that use an external cache

## Key Characteristics

The `file-cache` microservice is designed with the following principles:

### Separation of Concerns

`File-cache` focuses exclusively on **file cache management**. It does not maintain file metadata or track file
lifecycle — these responsibilities belong to [file-catalog](../file-catalog/file-catalog-overview.md) and it does not download files from storage locations — these responsibilities belong to [file-access](../file-access/file-access-overview.md).

This clear separation enables:
- Independent evolution of cache management
- Better scalability by distributing workload

### Checksum based cache

Files stored in the cache are identified by their checksums ensuring that only one download is required when identical 
files are requested under different names or from different sources.

## Relationship with Other Neo-Storage Services

`File-cache` is one component of the larger **Neo-Storage architecture**. 
As part of **Neo-Storage** it interacts with the following services:

### File-catalog
`File-cache` provides a cache functionality to `file-catalog`, used when restoring files from a nearline storage. 
When restoring files, `file-catalog` queries `file-cache` to first check if the file is present in the cache.

### File-access
When a file is requested for restoration and is not present in the cache, `file-cache` queries `file-access` for the missing file and downloads it to the cache. 
In case of an external cache for **glacier** storage, the file is not downloaded to the cache.

### File-packager
In the case where the file to be restored is a small file stored in an archive, before requesting restoration and download from `file-access`, 
`file-cache` send a query to `file-packager` to check if the file is available in the workspace. 
If not available, the archive is then downloaded through `file-access`.

## Scalability and Performance

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                |
| [Vertical scalability](../../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Can utilize more CPU and memory resources           |
| [Horizontal scalability](../../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Multiple instances can be deployed in parallel      |

`File-cache` achieves horizontal scalability through **Multiple microservice instances**: Can run in parallel to handle more requests.

## How to Use

You can learn how the service works in detail with the [conception section](./file-cache-conception.md).

You can learn how to **operate** the microservice using the **API Guides**:
   - **Browse** all available [REST API endpoints](./api-guides/rest/file-cache-api-swagger.mdx).

## Access Patterns

Unlike other microservices, `file-cache` is **not intended to be accessed directly by end users**. Its REST APIs are
mainly internal and are used by other REGARDS microservices.

### Access Control

Access rights to files are **not managed** by `file-cache` but by upstream services:
- **[Data Manager](../../dam/overview.md)**: Manages product-level access rights
- **[Catalog](../../catalog/overview.md)**: Enforces access control during catalog searches and downloads
- **[Order](../../order/overview.md)**: Controls access for ordered products

`File-cache` assumes that requesters have already verified access rights before initiating file operations.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**,
see [Configuration section](./configuration/file-cache-static-configuration.md).

## How to Access Source Code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-file-cache).