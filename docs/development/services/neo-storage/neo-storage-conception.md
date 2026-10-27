---
id: backend-neo-storage-conception
title: REGARDS Neo-Storage
sidebar_label: How it works
sidebar_position: 2
slug: /development/backend/services/neo-storage/conception/
---

## Introduction

### Neo-storage 

**Neo-storage** is a set of microservices and workers aimed to replace the [rs-storage 
microservice](../storage/overview.md).
It is designed to be more efficient and easier to maintain, with a focus on scalability and performance, 
notably, every microservice and worker in **Neo-Storage** is scalable which was not the case for the storage 
microservice.

**Neo-Storage** is composed of the following microservices:
- file-catalog
- file-access
- file-packager
- file-cache

and access to the physical storage is handled with the help of plugins and workers:

| Plugin              | Worker                      | Storage type | Description              |
|---------------------|-----------------------------|--------------|--------------------------|
| fileaccess-local    | local-storage-worker        | Online       | Access the local file system |
| fileaccess-s3       | s3-online-storage-worker    | Online       | Access an S3-type server |
| fileaccess-s3-glacier | s3-glacier-storage-worker | Nearline     | Access an S3-type server |

Workers are responsible for storing and retrieving files from the physical storage, while plugins are responsible for
accessing the physical storage. For each storage location used in REGARDS, there needs to be a plugin and a worker to 
access it and store files on it.
Workers can be scaled to handle multiple requests at the same time, while plugins are not scalable and are used by 
the microservices to access the physical storage.


### File Reference vs Physical File

[Products](../../../overview/concepts/01-products.md) typically consist of one or more files when they are added to
REGARDS through the [Ingest](../ingest/overview.md) or [Feature Manager](../fem/overview.md) microservices. A file can
either be a **reference** or a **physical file** that needs to be stored.

This distinction corresponds to the three [storage types](./neo-storage-overview.md#storage-types) supported by REGARDS:

* A reference corresponds to [**offline storage**](./neo-storage-overview.md#offline-storage): it is an URL to a file located in a different storage system, 
  usually accessed via HTTP.
  Neither physical storage nor any check of the file's existence or integrity is performed by REGARDS.
  This means that if the actual referenced file is altered or deleted, 
  REGARDS will not be able to retrieve the original file.
* A physical file that needs to be stored will be downloaded (or copied) within the storage system of REGARDS and 
  will be entirely managed by the **Neo-Storage** microservices. 
  It corresponds to [**online storage**](./neo-storage-overview.md#online-storage) or [**nearline 
  storage**](./neo-storage-overview.md#nearline-storage).
  The file at the original location can then be safely deleted or altered.

### File Uniqueness

The storage system represents saved files by their checksum rather than by their name to ensure that files are
never duplicated, thereby preserving storage space. When a file request concerning an already existing file is received,
no physical storage is performed; instead, an **owner** is added to the existing file. This approach preserves an URL to
the stored file and all the products referencing it, and it is primarily used in the storage deletion process described
in the following sections.

### Group Identifier

All file requests submitted for a single product (whether storage, retrieval, or any other type of request) will share a
group identifier (**groupId**). This allows the microservice to track the progress for that product. When there are no
more requests with this group identifier waiting to be processed, a response is sent back to the service that submitted
the request, indicating that all requests were successful or that an error occurred.

**File-catalog** is responsible for cataloging files in regards database.

### Small Files

It's more efficient to manage large files than many small files on S3 servers. For this reason, Neo storage allows you
to store small files locally until they reach a certain size or age. Once this threshold is met, the small files are
grouped into an archive (package) and then stored in the physical storage location. This process can be activated for any
storage location through a worker configuration.

The process is monitored, so it's possible to see in the UI if a file was only stored locally and is waiting to be
packaged and stored in the physical storage location.

## Architecture Overview

Neo-storage is composed of several microservices and workers, each with its own responsibilities.

```mermaid
graph TB
    RM[Ingest, FEM, Order, Catalog]
    
    subgraph "Neo-Storage Microservices"
        FC[RS-FILE-CATALOG<br/>File metadata]
        subgraph FA[" "]
            direction TB
            FAM[RS-FILE-ACCESS<br/>Physical storage interface]
            P[Storage Plugins<br/>Local, S3 Glacier...]
        end
        FP[RS-FILE-PACKAGER<br/>Small files packaging]
        FCH[RS-FILE-CACHE<br/>File caching]
    end
    
    W[Storage Workers]
    S[Physical Storage<br/>Online & Nearline]
    
    RM -->|File requests| FC
    FC -->|Delegates storage and retrieval| FAM
    FC -->|Requests packaging| FP
    FCH -->|Retrieves files| FAM
    FP -->|Stores packages| FAM
    
    FAM -->|Acces through| P
    FAM -->|Sends requests| W
    
    W -->|Writes to| S
    P -->|Reads from| S
    
    style FC fill:#e1f5ff
    style FA fill:#e1f5ff
    style FAM fill:#e1f5ff
    style FP fill:#e1f5ff
    style FCH fill:#e1f5ff
    style P fill:#fff4e1
    style W fill:#f0ffe1
```

### File-catalog

**File-catalog** is responsible for cataloging files in regards database. It is the entry point for all
requests related to files. It's the microservice containing the File Reference database, but it is not able to
access the files on its own. It delegates the access to **file-access**.

### File-access

**File-access** is responsible for accessing files in the storage system. It is the interface between
**file-catalog** and the storage system (Local, S3..). It is responsible for retrieving, and deleting files.
**File-access** delegates the storage of files to dedicated workers to ensure scalability and performance.

### File-packager

**File-packager** is responsible for regrouping small files in archives (packages) before storing them.
It receives packaging requests from **file-catalog** and uses **file-access** to store the packages.

### File-cache

**File-cache** is responsible for caching files retrieved by file-access in order to
diminish the latency of file retrieval. It is the interface between **file-catalog** and **file-access**
for retrieval purposes.

### Plugins & Workers

**File-access** delegates the storage of files to dedicated workers and uses plugins to access the physical storage.
This means that each Storage Location used in REGARDS requires a dedicated plugin and a worker to access
it and store files on it.

## Neo-storage workflow

### Write flow (storage)

The following diagram describes the current store workflow as implemented by **file-catalog**, **file-access**, **file-packager** and **the storage workers**.
The term "Archive" or "Package" refers to a ZIP file containing small files that have been grouped together for storage.

```mermaid
---
config:
    theme: redux-color
    look: neo
---
sequenceDiagram
  autonumber
  
    actor User
    participant FCatalog as file-catalog
    participant FPackager as file-packager
    participant FAccess as file-access
    participant Worker as storage worker
    participant Storage as Storage Plugins

    User ->> FCatalog: Request to store file
    FCatalog ->> FCatalog: Create storage requests
    FCatalog ->> FAccess: FileStorageRequestReadyToProcessEvent

    FAccess ->> Worker: Store file
    Worker ->> Storage: Store
    Worker -->> FAccess: ResponseEvent
    FAccess -->> FCatalog: StorageResponseEvent

    alt STORED IN CACHE (SMALL FILES)
        FCatalog ->> FPackager: FileArchiveRequestEvent
        FPackager ->> FPackager: Build/close package
        FPackager -->> FCatalog: FileArchiveResponseEvent (final file URL)
        FPackager ->> FAccess: FileStorageRequestReadyToProcessEvent (package)
        FAccess ->> Worker: Store package    
        Worker --> Storage: Store
        Worker -->> FAccess: ResponseEvent    
        FAccess -->> FPackager: StorageResponseEvent (package)
        FPackager -->> FCatalog: FileArchiveCompletionEvent
    else FULLY STORED
        FCatalog ->> FCatalog: Update file reference
    end

    FCatalog ->> FCatalog: Notify request group
```


### Read flow (restoration)

The following diagram describes the current restoration workflow as implemented by:
- **file-catalog**, 
- **file-cache**, 
- **file-access**, 
- **file-packager**,
- **the storage plugins**.


#### Handling of a restoration request of a "small" file packaged in an archive

```mermaid
---
config:
    theme: redux-color
    look: neo
---
sequenceDiagram
    autonumber

    actor User
    participant FCatalog as file-catalog
    participant FCache as file-cache
    participant FPackager as file-packager
    participant FAccess as file-access
    participant Plugins as Storage Plugins

    User ->> FCatalog: Requests to restore files (via catalog or order)
    FCatalog ->> FCatalog: Saves the request to the database

    FCatalog ->> FCache: Requests to restore file references

    FCache ->> FCache: Analyzes restoration requests
    
    alt File is missing in the cache <br/>and is a small file packaged in an archive
        FCache ->> FCache: Request persisted
    
        FCache ->> FCache: Schedules the restorations to be performed
        FCache ->> FPackager: Requests restoration of the archive containing the file
    
        alt Archive being built
            FPackager ->> FPackager: Copy the file from the packaging workspace to the cache.
        else Archive stored
            FPackager ->> FAccess: Forwards the restoration request
            FAccess ->> FAccess: Creates the restoration request
            FAccess ->> Plugins: Starts the physical restoration
        
            loop till archive available in storage
                FAccess ->> FAccess: Periodically checks ongoing restorations
                FAccess ->> Plugins: Checks the archive availability
                Plugins -->> FAccess: Archive available in storage
            end
        end
        FAccess -->> FCache: Notifies that the restored archive is available
    
        FCache ->> FCache: Processes the archive restoration response
        FCache ->> FAccess: Requests download of the archive
    
        FAccess ->> Plugins: Downloads the archive from storage
        Plugins ->> Plugins: Copies the restored archive to the cache
        Plugins -->> FAccess: Download completed successfully
    
        FAccess -->> FCache: Confirms that the download is complete
    
        FCache ->> FCache: Updates the restoration status
    end
    
    FCache -->> FCatalog: Responds that the small file is available till expiration

    FCatalog ->> FCatalog: Updates the group and user session
    alt group files are restored
        FCatalog -->> User: Notifies the user that group restoration is complete
    end
```


#### Handling of a restoration request of a big file

```mermaid
---
config:
    theme: redux-color
    look: neo
---
sequenceDiagram
    autonumber

    actor User
    participant FCatalog as file-catalog
    participant FCache as file-cache
    participant FAccess as file-access
    participant Plugins as Storage Plugins

    User ->> FCatalog: Requests to restore files (via catalog or order)
    FCatalog ->> FCatalog: Saves the request to the database

    FCatalog ->> FCache: Requests to restore file references

    FCache ->> FCache: Analyzes restoration requests
    
    alt File is missing in the cache and is not a small file packaged in an archive
        FCache ->> FCache: Request persisted

        FCache ->> FCache: Schedules the restorations to be performed
        FCache -->> FAccess: Forwards the restoration request of the file
        
        FAccess ->> FAccess: Creates the restoration request
        FAccess ->> Plugins: Starts the physical restoration

        loop till file available in storage
            FAccess ->> FAccess: Periodically checks ongoing restorations
            FAccess ->> Plugins: Checks the file's availability
            Plugins -->> FAccess: File available in storage
        end
        FAccess -->> FCache: Notifies that the restored file is available

        FCache ->> FCache: Processes the file restoration response
        FCache ->> FAccess: Requests download of the restored file

        FAccess ->> Plugins: Downloads the file from storage
        Plugins ->> Plugins: Copies the restored file to the cache
        Plugins -->> FAccess: Download completed successfully

        FAccess -->> FCache: Confirms that the download is complete

        FCache ->> FCache: Updates the restoration status
    end

    FCache -->> FCatalog: File available till expiration

    FCatalog ->> FCatalog: Updates the group and user session
    alt group files are restored
        FCatalog -->> User: Notifies the user that group restoration is complete
    end
```
