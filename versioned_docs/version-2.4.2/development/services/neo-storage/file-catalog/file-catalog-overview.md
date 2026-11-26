---
id: backend-file-catalog-overview
title: REGARDS file catalog microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/file-catalog/overview/
---

**The file catalog microservice** is an integral part of the functional
groups [OAIS Services (Functional overview)](../../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../../overview/functional-overview/05-product-restitution-services.md).

**The file catalog microservice** is part of the **Neo-Storage architecture** and replaces part of the former **the storage microservice** responsibilities.

**The file catalog microservice** is the service responsible for managing file metadata, lifecycle, and logical state within the REGARDS
catalog.

Its main responsibilities are:

* **Managing file metadata** and lifecycle states
* **Tracking file ownership** across multiple products
* **Coordinating storage requests** with **the file access microservice**
* **Coordinating packaging operations** with **the file packager microservice** for small files
* **Handling deduplication** to prevent duplicate file storage
* **Emitting lifecycle events** to notify other services of file state changes
* **Managing file requests** (storage, reference, deletion, copy, restoration)

## Key Characteristics

The file catalog microservice is designed with the following principles:

### Separation of Concerns

**The file catalog microservice** focuses exclusively on **logical file management**. It does not perform physical storage operations —
these responsibilities belong to **the file access microservice** and
**the file packager microservice**.

This clear separation enables:
- Independent evolution of catalog management and storage technology
- Better scalability by distributing workload
- Support for multiple storage backends without affecting the catalog logic

### Database Persistence

The core of the file catalog is the **`t_file_reference`** database table, which persists all file metadata and
represents the complete logical view of files in the REGARDS catalog. This table contains:
- File metadata (name, checksum, size, MIME type)
- Storage location information
- Ownership information (which products reference each file)
- Archive status for small files
- Creation and modification timestamps

The `t_file_reference` table is the **central repository** for all file information in REGARDS and ensures consistency
between the logical catalog view and the physical state of files.

### Request-Based Architecture

File operations in **the file catalog microservice** are asynchronous and request-based:
- Each operation creates a file request entity
- Requests are grouped by product using a `groupId`
- A scheduler processes pending requests periodically
- Results are communicated via AMQP events

This architecture provides:
- **Non-blocking request handling**: Requesters receive immediate acknowledgment
- **Retry capability**: Failed operations can be retried
- **Progress tracking**: Group-level tracking of all file operations for a product
- **Resilience**: Operations are persisted and can survive restarts

### Deduplication and Ownership

Files are uniquely identified by their checksum rather than filename. When multiple products reference the same file:
- Only one file reference is created in the catalog
- Multiple products become **owners** of that file
- Storage operations are optimized (one physical file serves multiple products)
- Deletion operations respect ownership (file is deleted only when all owners are removed)

## How It Works

### File Registration

When a product is ingested with files:
1. **The file catalog** microservice receives storage request events from **the ingest** and **the feature manager** microservices
2. File references are created or updated in the `t_file_reference` table
3. Deduplication occurs automatically based on checksum
4. File requests are persisted with status tracking

### File Storage Coordination

For files requiring physical storage:
1. Eligible requests are delegated to **file-access**
2. Small files are identified and tracked for packaging by **file-packager**

Storage operations are **asynchronous** and orchestrated by **file-catalog**.

### File Packaging Coordination

For small files requiring packaging:
1. **File-catalog** sends archival request to **file-packager**
2. File statuses are updated to reflect archival completion

## File Types

**The file catalog microservice** manages files according to the three [storage types](../neo-storage-overview.md#storage-types) defined by REGARDS:

### Reference Files (Offline Storage)

Files that use [offline storage](../neo-storage-overview.md#offline-storage) are external references to existing locations:
- No physical storage is performed by REGARDS
- File metadata is registered in the catalog
- Original location must remain accessible
- Marked as **referenced** in the catalog

### Storage Files (Online and Nearline Storage)

Files that are physically managed by REGARDS using [online storage](../neo-storage-overview.md#online-storage) (immediately available) or [nearline storage](../neo-storage-overview.md#nearline-storage) (archived):
- Downloaded from source URLs
- Stored in configured storage locations
- Fully managed by the file access microservice
- Can be deleted when no longer needed

## Access Patterns

Unlike other microservices, **file-catalog** is **not intended to be accessed directly by end users**. Its REST APIs are
mainly internal and are used by other REGARDS microservices.

### Initiating Services

File operations are initiated by:
- **[Ingest](../../ingest/overview.md)**: For ingesting product files
- **[Feature Manager](../../fem/overview.md)**: For registering feature files
- **[Order](../../order/overview.md)**: For product file retrieval by order
- **[Catalog](../../catalog/overview.md)**: For product file retrieval by direct download

### Access Control

Access rights to files are **not managed** by **file-catalog** but by upstream services:
- **[Data Manager](../../dam/overview.md)**: Manages product-level access rights
- **[Catalog](../../catalog/overview.md)**: Enforces access control during catalog searches and downloads

**File-catalog** trusts that requesters have already verified access rights before initiating file operations.

## Relationship with Other Neo-Storage Services

**File-catalog** is one component of the larger **Neo-Storage architecture**:

### File-access

Handles all physical storage operations:
- Stores files on physical storage systems via workers
- Retrieves files from storage for download
- Deletes files from physical storage

**File-catalog** sends storage requests to **file-access** and receives completion events.

### File-packager

Handles small file aggregation:
- Groups small files into ZIP archives
- Optimizes storage costs for nearline storage
- Coordinates archive creation and storage

**File-catalog** identifies small files and delegates packaging to **file-packager**.

### File-cache

Handles file download requests:
- Receives download requests from users
- Checks file availability in the catalog
- Requests restoration for archived files if needed
- Streams files to users

**File-cache** queries **file-catalog** for file metadata and availability.

## Scalability and Performance

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            |
| [Vertical scalability](../../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                |
| [Horizontal scalability](../../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

The request-based architecture and scheduler-driven processing enable both vertical and horizontal scaling to handle
large volumes of file operations.

## How to Learn More

You can learn how the service works in the [conception section](./file-catalog-conception.md).

## How to use

You can learn how to **operate** the microservice using the **API Guides**:

- **Browse** all available [REST API endpoints](./api-guides/rest/file-catalog-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**,
see [Configuration section](./configuration/file-catalog-static-configuration.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-file-catalog).
