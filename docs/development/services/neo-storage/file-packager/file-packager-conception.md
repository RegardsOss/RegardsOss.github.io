---
id: backend-file-packager-conception
title: REGARDS file packager microservice
sidebar_label: How it works
sidebar_position: 2
slug: /development/backend/services/file-packager/conception/
---

## Introduction

The **file-packager** microservice is responsible for aggregating small files into archive packages for efficient storage.
Unlike [file-catalog](../file-catalog/file-catalog-conception.md), which manages file metadata and lifecycle, and
[file-access](../file-access/file-access-conception.md), which handles physical storage operations, **file-packager** focuses
exclusively on collecting, grouping, and packaging small files for optimized storage.

This separation of concerns enables:
- Efficient aggregation of small files to reduce storage overhead
- Optimized package sizing based on configurable limits
- Independent scaling of packaging operations from other storage services
- Coordinated lifecycle management between catalog, packager, and storage services

## Architecture Overview

File-packager follows a **scheduler-based architecture** where the microservice coordinates file aggregation through
multiple scheduling phases. This design enables reliable processing of file packaging requests while maintaining state
consistency.

### Core Components

#### File Packager Microservice

The main microservice is responsible for:
- Receiving file archival requests from **file-catalog** via AMQP
- Persisting incoming files to the file-in-building-package database
- Grouping files by storage location and target directory
- Managing package lifecycle and state transitions
- Coordinating with **file-access** for package storage
- Notifying the file-catalog of packaging completion
- Coordinating local file cleanup after successful archival

#### Building Packages

Building packages are temporary storage entities that accumulate files until they reach:
- **Maximum Size**: Configured maximum archive size in kilobytes
- **Maximum Age**: Configured maximum time a package can remain open before being forced to close

Multiple building packages can exist simultaneously, each representing a different combination of:
- Storage location (e.g., S3, local filesystem)
- Storage subdirectory (derived from parent URL)

#### Package References

Package references represent completed or archived packages and maintain:
- Archive metadata (checksum, size, storage path)
- Associated file listings
- Package lifecycle status
- Creation and completion timestamps
- Physical storage location information

## Workflows

### File Aggregation Workflow

When **file-catalog** sends a `FileArchiveRequestEvent`, **file-packager** receives the request and persists each file as a `FileInBuildingPackage` entity with status `TO_PACKAGE`. The packaging scheduler then groups files by storage location and subdirectory, associating them with the appropriate `PackageReference` (creating new ones as needed). As packages accumulate files, the scheduler monitors their size and closes packages that reach maximum capacity or maximum age, marking them `READY_TO_COMPLETE`.

### Package Archival Workflow

When a package is ready for completion, a `StoreCompletePackageJob` creates a ZIP archive containing all associated files, calculates its checksum, and stores it in the temporary archive directory. The job then publishes a `FileStorageRequestReadyToProcessEvent` to file-access with the archive metadata. Upon receiving a `StorageResponseEvent` from file-access, the package status is updated to `STORED`, associated files are marked `PACKAGED` and `TO_LOCAL_DELETE`, and `FileArchiveCompletionEvent` notifications are sent to **file-catalog** for each packaged file.

### Local File Cleanup Workflow

After successful archival, files marked `TO_LOCAL_DELETE` are processed by a `DeleteLocalFilesJob` which removes them from temporary storage locations and updates their status to `LOCAL_DELETED`. The package remains in the database as a historical record, allowing archive information to be queried for future file retrieval.

## Key Design Patterns

### Package-Based Aggregation

Files are never archived individually. Instead, they are collected into packages based on:
- **Storage Location**: Files targeting the same storage system are grouped together
- **Storage Path**: Files targeting the same subdirectory are grouped together
- **Size Optimization**: Packages are sized to balance storage efficiency with package count

### State Machine Pattern

Both files and packages follow defined state machines:

**FileInBuildingPackage States**:
- `WAITING_PACKAGE`: The file is waiting to be associated with a package
- `BUILDING`: The file has been associated to a package that is still in construction
- `BUILDING_ERROR`: There was an error during the file association to a package
- `TO_LOCAL_DELETE`: The package is stored and the local file can now be deleted
- `DELETING`: The file is being deleted
- `DELETION_ERROR`: There was an error during the file deletion

**PackageReference States**:
- `BUILDING`: Accumulating files
- `TO_STORE`: Closed, waiting for archival
- `STORE_IN_PROGRESS`: Archive created, waiting for storage completion
- `STORED`: Archive stored, all operations complete
- `STORE_ERROR`: There was an error during the storage process

## File Retrieval from Archives

Once files are packaged and stored:

1. **Archive Location**: Physical archive location is stored with the package reference
2. **File Path in Archive**: Each file maintains its path within the ZIP archive
3. **Retrieval**: When file-catalog needs to retrieve a file from an archive:
   - File reference indicates it's archived
   - Archive package reference is located
   - File access can retrieve from archive using path information
   - ZIP entry path is appended to archive URL for retrieval

## Integration Points

### With File Catalog

- **Input**: `FileArchiveRequestEvent` containing files to archive
- **Output**: `FileArchiveCompletionEvent` notifying of completion
- **Coordination**: File-catalog tracks archive status and notifies requesters

### With File Access

- **Input**: `StorageResponseEvent` confirming archive storage
- **Output**: `FileStorageRequestReadyToProcessEvent` requesting archive storage
- **Coordination**: File-access performs actual storage and reports results

### With Job System

- **Job Types**: `StoreCompletePackageJob`, `DeleteLocalFilesJob`
- **Priority**: Jobs use configurable priority levels
- **Monitoring**: Job status can be monitored through the framework
