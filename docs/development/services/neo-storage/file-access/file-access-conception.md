---
id: backend-file-access-conception
title: REGARDS file access microservice
sidebar_label: How it works
sidebar_position: 2
slug: /development/backend/services/file-access/conception/
---

## Introduction

The **file-access** microservice is responsible for performing physical file operations on storage systems. Unlike
[RS-FILE-CATALOG](../file-catalog/file-catalog-conception.md), which manages file metadata and lifecycle, the **file-access** microservice focuses
exclusively on the actual interaction with storage backends.

This separation of concerns enables:
- Better scalability through distributed workers
- Support for multiple storage technologies through plugins
- Independent scaling of catalog management and physical storage operations

## Architecture Overview

File-access follows a **worker-based architecture** where the microservice coordinates operations but delegates
actual file transfers to specialized workers. This design enables horizontal scalability and isolates storage
operations from the main service to prevent performance degradation during periods of high file storage activity.

### Core Components

#### File Access Microservice

The main microservice is responsible for:
- Receiving storage/retrieval/deletion requests from **file-catalog** or **file-packager**
- Validating requests and determining the appropriate storage plugin
- Dispatching work to storage workers via AMQP for file storage operations
- Executing file retrieval, deletion, and availability checks directly through plugins
- Collecting worker responses and forwarding results to requesters
- Managing storage plugin configurations

For **storage operations**, the microservice delegates the work to workers (who download from source and upload to target).
For **retrieval, deletion, and availability checks**, the microservice handles these directly through its plugins.

#### Storage Workers

Storage workers are independent applications that:
- Listen for storage requests on dedicated AMQP queues
- Download files from source URLs
- Upload files to target storage locations
- Extract file metadata (size, checksum, dimensions for images)
- Report success or failure back to the file access microservice

Each storage location type requires a corresponding worker implementation:
- **local-storage-worker**: For local filesystem ([online storage](../neo-storage-overview.md#online-storage))
- **s3-online-storage-worker**: For Amazon S3 standard ([online storage](../neo-storage-overview.md#online-storage))
- **s3-glacier-storage-worker**: For Amazon S3 Glacier ([nearline storage](../neo-storage-overview.md#nearline-storage))

Workers can be scaled independently based on workload. Multiple instances of the same worker type can process requests in parallel, ensuring high throughput for storage operations.

#### Storage Plugins

Storage plugins define **how to interact** with specific storage technologies. They implement the `IStorageLocation` interface and provide methods for:
- **Retrieving files**: Synchronously reading files from storage ([online storage](../neo-storage-overview.md#online-storage) only)
- **Deleting files**: Removing files from storage
- **Managing restoration**: Checking availability and restoring archived files ([nearline storage](../neo-storage-overview.md#nearline-storage) only)

Available plugins include:
- **LocalDataStorage**: Local filesystem ([online storage](../neo-storage-overview.md#online-storage))
- **S3OnlineStorage**: Amazon S3 standard ([online storage](../neo-storage-overview.md#online-storage))
- **S3GlacierStorage**: Amazon S3 Glacier ([nearline storage](../neo-storage-overview.md#nearline-storage))

:::info Storage vs Retrieval
**Storage operations** are delegated to workers for scalability, but **retrieval operations** (reading files) are
handled directly by plugins within the microservice for better response times.
:::

## Workflows

### File Storage Workflow

When **file-catalog** sends a `FileStorageRequestReadyToProcessEvent`, **file-access** identifies the target storage location and loads the corresponding plugin. The plugin generates worker configuration objects containing storage credentials, target paths, and file source URLs. The microservice publishes `StorageWorkerRequestEvent` messages to the worker manager, which routes them to available workers. Workers download files from source URLs, verify integrity (checksum), extract metadata, and upload files to target storage locations. Small files below the packaging threshold are stored locally instead of being uploaded immediately. Workers send `ResponseEvent` messages back with success/failure status, storage URLs, and extracted metadata. The microservice transforms these into `StorageResponseEvent` messages and sends them back to **file-catalog**.

## Plugin and Worker Coordination

The relationship between plugins and workers is crucial for understanding **file-access**:

### Plugin Responsibilities
- Run **inside the microservice JVM**
- Define storage-specific logic and configuration
- Handle retrieval operations (reading files from storage)
- Handle deletion operations (removing files from storage)
- Handle availability checks (for nearline storage)
- Generate worker configuration objects for storage operations

### Worker Responsibilities
- Run as **independent applications**
- Handle **storage operations only**
- Download files from source URLs
- Upload files to target storage locations
- Extract file metadata during storage
- Can be scaled horizontally based on workload
- Report results asynchronously via AMQP

### Communication Flow

```
[file-catalog] 
    ↓ AMQP: FileStorageRequestReadyToProcessEvent
[file-access]
    ↓ AMQP: StorageWorkerRequestEvent
[Worker Manager]
    ↓ Routes to appropriate worker
[Storage Worker]
    ↓ Downloads file from source
    ↓ Uploads file to storage
    ↓ AMQP: ResponseEvent
[file-access]
    ↓ Processes response
    ↓ AMQP: StorageResponseEvent
[file-catalog]
```

## Key Design Patterns

### Plugin-Based Storage Abstraction

Storage operations are abstracted through plugins that implement a common interface. This pattern:
- Enables support for multiple storage technologies (local, S3, S3 Glacier)
- Isolates storage-specific logic from the main microservice
- Allows adding new storage types without modifying core code
- Provides configuration management for each storage location

### Worker-Based Scalability

File storage is delegated to independent worker applications. This pattern:
- Enables horizontal scaling of storage operations
- Isolates storage activity from the main microservice JVM
- Allows independent deployment and scaling of worker types
- Prevents storage operations from degrading microservice performance

### Small File Optimization

Small files receive special handling before storage:
- Files below a threshold are stored locally first
- They are later packaged by **file-packager** for efficient storage
- Reduces API calls to expensive nearline storage systems
- Improves overall storage efficiency and cost

## Storage Location Configuration

Each storage location configured in REGARDS requires:

- **A Storage Plugin**: Configured in **file-access** with:
   - Plugin type (Local, S3, S3Glacier)
   - Storage endpoint and credentials
   - Root storage path
   - File naming strategy
   - Small file packaging settings
   - Deletion policy

- **One or More Workers**: Deployed as separate applications with:
   - Connection to AMQP for receiving requests
   - Access to the microservice configuration (for storage credentials)
   - Sufficient resources (CPU, memory, network bandwidth) for file operations

Workers must be compatible with their corresponding plugins. For example, the **s3-glacier-storage-worker** must be used with the **S3GlacierStorage** plugin.

## Error Handling and Retry Logic

**File-access** implements robust error handling:

### Storage Errors
- **Download failures**: Workers report errors if they cannot download source files
- **Upload failures**: Workers report errors if storage systems reject uploads
- **Checksum mismatches**: Workers verify file integrity and report checksum errors
- **Worker unavailability**: If no workers are active, requests are marked as errors

### Retry Mechanism
- Failed requests remain in the **file-catalog** database
- **File-catalog** can retry failed operations
- Workers implement exponential backoff for transient errors

### Response Types
- **SUCCESS**: File was successfully stored/deleted
- **ERROR**: Operation failed with specific error code and message
- **DELAYED**: Operation was accepted but will be processed later (for throttling)
- **SKIPPED**: Operation was skipped (e.g., worker inactive)


## Integration Points

### With File Catalog

- **Input**: `FileStorageRequestReadyToProcessEvent` requesting physical storage
- **Output**: `StorageResponseEvent` confirming storage completion or failure
- **Small Files**: Responses indicate if files were stored or deferred for packaging

### With File Packager

- **Input**: `FileStorageRequestReadyToProcessEvent` for archive storage
- **Output**: `StorageResponseEvent` confirming archive storage

### With Storage Workers

- **Input**: `ResponseEvent` messages from workers confirming operations
- **Output**: `StorageWorkerRequestEvent` dispatching storage operations
- **Metadata**: Workers extract and return file metadata during storage