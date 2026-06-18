---
id: backend-file-catalog-conception
title: REGARDS file catalog microservice
sidebar_label: How it works
sidebar_position: 2
slug: /development/backend/services/file-catalog/conception/
---

## Introduction

### File Reference vs Physical File

[Products](../../../../overview/concepts/01-products.md) typically consist of one or more files when they are added to
REGARDS through the [Ingest](../../ingest/overview.md) or [Feature Manager](../../fem/overview.md) microservices. A file can
either be a **reference** or a **physical file** that needs to be stored.

This distinction corresponds to the three [storage types](../neo-storage-overview.md#storage-types) supported by REGARDS:

* A reference corresponds to [**offline storage**](../neo-storage-overview.md#offline-storage): it is a link to a file located in a different storage system, usually accessed via HTTP. No physical storage is performed by REGARDS. This means that if the actual referenced file is altered or deleted, REGARDS will not be able to retrieve the original file.
* A physical file that needs to be stored uses either [**online storage**](../neo-storage-overview.md#online-storage) (immediately available) or [**nearline storage**](../neo-storage-overview.md#nearline-storage) (archived, requires restoration). The file will be downloaded (or copied) and will be entirely managed by the microservice. The file at the original location can then be safely deleted or altered.

### File Uniqueness

The file catalog represents files using a unique technical identifier derived from file metadata (such as checksum)
rather than relying on file names. This ensures that files are uniquely identified within the catalog and prevents
logical duplication.

When a file already exists in the catalog, additional products referencing the same file will be associated as
**owners** of that file rather than creating duplicate catalog entries. This ownership model is used throughout the
file lifecycle, particularly during deletion operations.

#### Group Identifier

All file-related requests submitted for a single product (such as registration, storage, reference, or deletion)
share a common group identifier (**groupId**).

This identifier allows the file catalog microservice to track the global progress of file operations for a given
product. Once all requests associated with a group identifier have been processed, a response is sent back to the
originating microservice, indicating success or failure.

## Architecture Overview

**The file catalog microservice** manages files from a **logical perspective**, coordinating requests, tracking lifecycle states, and delegating physical operations to **the file access microservice**. This architecture enables:
- Centralized file metadata and lifecycle management
- Asynchronous request processing without blocking requesters
- Comprehensive file ownership and deduplication tracking

### Core Components

#### File Catalog Microservice

The main microservice is responsible for:
- Receiving file requests from **the ingest** and **the feature manager** microservices
- Creating and managing file references with metadata
- Tracking file ownership across products
- Managing file status transitions and request lifecycle
- Coordinating with **the file access microservice** for physical storage operations
- Coordinating with **the file packager microservice** for small file packaging
- Emitting file lifecycle events for other services to consume
- Handling error reporting and retry logic

#### File References

File references represent logical files in the catalog and maintain:
- Metadata (name, checksum, size, type, MIME type)
- Storage location information (where is this file stored)
- Ownership information (which products reference this file)
- Archive status for small files regrouped in a package (referenced, to store, stored, available, archived)
- Creation and modification timestamps

##### Database Schema

The `t_file_reference` table is the core database table containing all files managed by REGARDS. Each row represents a unique file identified by its checksum and storage location combination.

| Column         | Type     | Description                                                                                 |
|----------------|----------|---------------------------------------------------------------------------------------------|
| `id`           | Integer  | Internal database unique identifier                                                         |
| `storage_date` | Date     | Timestamp when the file was stored in REGARDS                                               |
| `referenced`   | Boolean  | Indicates if the file is a reference only                                                   |
| `checksum`     | String   | File integrity checksum                                                                     |
| `algorithm`    | String   | Checksum algorithm used (e.g., MD5, SHA-256, SHA-512)                                       |
| `file_name`    | String   | Original file name                                                                          |
| `file_size`    | Integer  | File size in bytes                                                                          |
| `mime_type`    | MimeType | MIME type of the file (e.g., image/png, application/json)                                   |
| `type`         | String   | User-defined file type or category                                                          |
| `height`       | Integer  | Height in pixels (for image files)                                                          |
| `width`        | Integer  | Width in pixels (for image files)                                                           |
| `storage`      | String   | Name of the storage location where the file is stored                                       |
| `url`          | String   | Full URL to access the file                                                                 |
| `pending`      | Boolean  | Indicates if an asynchronous action is still pending for the file (e.g., nearline archival) |

The `ta_file_reference_owner` table maintains the many-to-many relationship between files and their owners (products):

| Column        | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| `file_ref_id` | Long   | Foreign key to `t_file_reference.id`                     |
| `owner`       | String | Identifier of the product or owner referencing this file |

#### File Requests

File requests represent individual operations on files and include:
- Request type (store, delete, restore, etc.)
- Associated group identifier for product-level tracking (the file requests associated with the same product have the same group identifier)
- Target file information
- Status and error details

## Workflows

### File Registration Workflow

When a product is ingested with files, **the file catalog microservice** receives file requests and creates `FileReference` entities. Each file is persisted with metadata (name, checksum, size, type). If the file is external, it is marked as **referenced** with no physical storage performed. If physical storage is needed, the file archive status is initialized as **TO_STORE**. Deduplication occurs at this stage, if a file already exists in the database (identified by its checksum), additional products become **owners** of that file rather than creating duplicate entries.

### File Storage Workflow

A scheduler periodically scans for pending file requests in **TO_STORE** status. Eligible requests are delegated to **the file access microservice** via `FileStorageRequestReadyToProcessEvent`. **The file catalog microservice** updates request and file reference statuses while tracking remaining actions for each group identifier. When storage completion events are received from **the file access microservice**, the file request status is updated to **STORED**, file references are marked as **AVAILABLE**. If some files require packaging (small files), they are tracked for later archival by **the file packager microservice**.

### File Lifecycle Coordination Workflow

Throughout the file lifecycle, **the file catalog microservice** coordinates operations with **the file access microservice** and **the file packager microservice**. The catalog maintains a logical view of file states while delegating physical operations to **the file access microservice**. Events are emitted to notify other microservices of state changes (file stored, file updated, file archived). This allows upstream services to react asynchronously to file lifecycle changes.

## Key Design Patterns

### Deduplication and Ownership

Files are identified by technical metadata (checksum) rather than file names. When a file already exists in the catalog, additional products become **owners** rather than creating duplicates. This pattern:
- Reduces logical duplication in the catalog
- Simplifies deletion operations (track ownership, not individual references)
- Optimizes storage by serving multiple products from a single physical file

### Group Identifier Pattern

All file-related requests for a single product share a common `groupId`. This enables:
- Tracking global progress of all file operations for a product
- Retry logic at the product level
- Simplified error handling and notification

### Asynchronous Request Processing

File operations are inherently asynchronous:
- Requests are persisted in the database
- A scheduler processes eligible requests periodically
- Results are communicated via AMQP events
- Requesters are notified when all operations complete

This pattern ensures:
- Non-blocking request handling
- Ability to retry failed operations
- Clear separation between request reception and processing

### Event-Driven Coordination

The microservice communicates with other services through AMQP events:
- **Input Events**: File requests from ingest and feature manager
- **Output Events**: File lifecycle changes to other microservices
- **Coordination Events**: With file-access and file-packager (both requests and responses)

## File Lifecycle Management

The file catalog microservice manages the complete logical lifecycle of files:

- **Registration**: Files are registered in the catalog with metadata
- **Deduplication**: Duplicate detection prevents logical duplication
- **Ownership Tracking**: Multiple products can own the same physical file
- **Status Transitions**: Files progress through defined states (stored, available, archived)
- **Physical Coordination**: Storage, retrieval, and deletion are delegated to **the file access microservice**
- **Packaging Coordination**: Small files are tracked for packaging by **the file packager microservice**
- **Error Handling**: Failed operations are tracked and can be retried
- **Lifecycle Events**: Changes are emitted for consumption by other services

**The file catalog microservice** ensures consistency between the logical view of files in the REGARDS catalog and the physical state managed by **the file access microservice** and **the file packager microservice**.

## Integration Points

### With Ingest and Feature Manager

- **Input**: `FilesStorageRequestEvent`
- **Output**: `FileRequestsGroupEvent` (group completion status) and `FileReferenceEvent` (per-file status)
- **Coordination**: Tracking product-level file operation progress via groupId

### With File Access

- **Input**: `StorageResponseEvent` confirming storage completion, availability status, or deletion results
- **Output**: `FileStorageRequestReadyToProcessEvent` requesting physical storage operations

### With File Packager

- **Input**: `FileArchiveCompletionEvent` notifying of packaging completion
- **Output**: `FileArchiveRequestEvent` requesting small file packaging
