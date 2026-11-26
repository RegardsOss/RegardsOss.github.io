---
id: backend-file-packager-overview
title: REGARDS file packager microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/file-packager/overview/
---

The RS-FILE-PACKAGER microservice is an integral part of the functional
groups [OAIS Services (Functional overview)](../../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../../overview/functional-overview/05-product-restitution-services.md).

The **file-packager** microservice is part of the **Neo-Storage architecture** and focuses on optimizing small file storage through
aggregation and packaging.

**File-packager** is responsible for aggregating small files into archive packages for efficient storage.
It acts as the **optimizer for small file storage** in REGARDS.

Its main responsibilities are:

* **Aggregating small files** into optimally-sized packages
* **Creating archive files** in standard formats (ZIP)
* **Managing package lifecycle** and state transitions
* **Coordinating archive storage** with **file-access**
* **Tracking file associations** within packages
* **Notifying the file catalog** of packaging completion
* **Cleaning up local files** after successful archival

## Key Characteristics

The file packager microservice is designed with the following principles:

### Separation of Concerns

**File-packager** focuses exclusively on **file aggregation and packaging**. It does not perform physical storage
operations or manage file metadata — these responsibilities belong to [file-catalog](../file-catalog/file-catalog-overview.md)
and [file-access](../file-access/file-access-overview.md).

This clear separation enables:
- Specialized optimization for small file storage
- Independent evolution of packaging strategies
- Better scalability by isolating aggregation operations
- Support for multiple storage backends without affecting packaging logic

### Database Persistence

The core of the file packager consists of two complementary database tables that work together to track small files and
packages:

**`t_package_info`** - Stores package metadata:
- Package state (building, ready, stored, etc.)
- Package size information
- Storage location and target directory
- Archive metadata (checksum, file URL)
- Creation and completion timestamps

**`t_file_in_building_package`** - Tracks files within packages:
- File metadata (checksum, size, filename)
- Association to parent package
- File processing state
- Storage request information
- Local cache path for temporary storage

Together, these tables form the **access information infrastructure** for small files in REGARDS, enabling efficient
retrieval of files from archives and proper lifecycle management.

## How It Works

### File Reception and Grouping

When **file-catalog** sends small files for archival:
1. Files are received and persisted in the local archive cache
2. Files are grouped by storage location and target directory
3. Files are associated with building packages (creating new packages as needed)

### Package Completion

When a package reaches size or age limits, it is closed and a ZIP archive containing all files is created

### Archive Storage

Once an archive is created, the archive is sent to **file-access** for physical storage

## File Packaging Strategy

**File-packager** implements an intelligent packaging strategy tailored for different storage types:

Small files receive special handling to reduce storage costs:
- Files below a configurable threshold are collected and packaged
- Multiple small files are combined into a single archive
- Reduces the number of API calls to storage backends
- Particularly beneficial for cost-sensitive storage systems

## Access Patterns

Unlike other microservices, **file-packager** is **not intended to be accessed directly by end users**. Its REST APIs
are mainly internal and are used by other REGARDS microservices.

### Initiating Services

File packaging operations are initiated by:
- **[RS-FILE-CATALOG](../file-catalog/file-catalog-overview.md)**: Sends files for archival, receives completion notifications

### Coordinating Services

File package storage is coordinated with:
- **[RS-FILE-ACCESS](../file-access/file-access-overview.md)**: Stores completed archives in physical storage

## Relationship with Other Neo-Storage Services

**File-packager** is one component of the larger **Neo-Storage architecture**:

### RS-FILE-CATALOG

Initiates packaging requests:
- Sends packaging requests to **file-packager**
- Receives completion notifications
- Updates file status to reflect archival

### RS-FILE-ACCESS

Handles archive storage:
- Receives storage requests for completed archives
- Stores archives on physical storage systems
- Reports storage completion to **file-packager**

## Scalability and Performance

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            |
| [Vertical scalability](../../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                |
| [Horizontal scalability](../../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

The scheduler-based architecture and package-based aggregation enable both vertical and horizontal scaling to handle
large volumes of small files requiring archival.

## How to Learn More

You can learn how the service works in the [conception section](./file-packager-conception.md).

## How to use

You can learn how to **operate** the microservice using the **API Guides**:

- **Browse** all available [REST API endpoints](./api-guides/rest/file-packager-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**,
see the [Configuration section](./configuration/file-packager-static-configuration.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-file-packager).
