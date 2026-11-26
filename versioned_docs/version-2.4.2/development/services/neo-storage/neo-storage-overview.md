---
id: backend-neo-storage-overview
title: REGARDS neo storage
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/neo-storage/overview/
---

Neo-storage is a set of microservices and workers aimed to replace the [Storage microservice](../storage/overview.md).
It is designed to be more efficient and easier to maintain, with a focus on scalability and performance, notably,
every microservice and worker in neo-storage are scalable which was not the case for the storage microservice.

Neo-storage is an integral part of the functional groups [OAIS Services (Functional overview)](../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../overview/functional-overview/05-product-restitution-services.md).

Neo-storage manages the physical storage and retrieval of files.
It can handle three types of storage locations: online, nearline, and offline.

## Storage Types

REGARDS supports three distinct storage types, each with different characteristics and use cases:

### Online Storage

**Online storage** refers to storage systems where files are **immediately available** for access. 
When a file is requested from online storage, it can be retrieved synchronously without any delay.

**Examples:**
- Local filesystem storage
- Amazon S3 Standard (Tier 2)

**Characteristics:**
- Immediate file availability
- Synchronous retrieval
- Recommended for frequently accessed files

### Nearline Storage

**Nearline storage** refers to archival storage systems where files **may not be immediately available** and need to be 
**restored before access**. Files are stored in an online buffer and periodically transferred to a long-term archival 
system that is not accessible synchronously.

**Examples:**
- Amazon S3 Glacier
- Tape archive systems

**Characteristics:**
- Files require restoration before access
- Asynchronous retrieval (restoration time varies)
- Lower cost per GB than online storage
- Recommended for infrequently accessed files

For nearline storage locations, the following additional functionalities are provided:
* Checking the availability of a file
* Requesting the restoration of a file

:::info
For more information on nearline storage concepts, see the Wikipedia articles
on [Nearline storage](https://en.wikipedia.org/wiki/Nearline_storage)
and [Amazon S3 Glacier](https://en.wikipedia.org/wiki/Amazon_S3_Glacier).
:::

### Offline Storage

**Offline storage** refers to files that are **only referenced by REGARDS** but not physically managed by the system.
These are external files accessible through URLs (typically HTTP/HTTPS), where REGARDS maintains metadata and 
references but does not control the actual file storage.

**Examples:**
- Files hosted on external web servers

**Characteristics:**
- No physical storage performed by REGARDS
- Files remain at their original location
- REGARDS only maintains references (URLs)
- If the external file is deleted or moved, REGARDS cannot retrieve it

:::warning
When using offline storage, REGARDS does not guarantee file availability. If the referenced file is altered or deleted 
at its source, REGARDS will not be able to retrieve the original file.
:::

:::info
Unlike online and nearline storage, **no plugin or worker is needed** to use offline storage, and **no storage location 
needs to be created** for it. REGARDS simply maintains references to external URLs without any infrastructure setup.
:::

## Main Responsibilities

Its main responsibilities are:

* Storing files (online and nearline)
* Retrieving files (online, nearline, and offline)
* Deleting files (online and nearline)
* Managing file references (offline)

Unlike other microservices, Neo-storage microservices are not intended to be accessed directly by users. The REST
APIs are mainly private and are intended for maintenance rather than for performing actual storage or retrieval
operations.
Instead, file storage requests are handled by the [Ingest](../ingest/overview.md)
or [Feature Manager](../fem/overview.md) microservices, while file retrieval requests are handled by
the [Order](../order/overview.md) microservice (to retrieve product files by order) or
the [Catalog](../catalog/overview.md) microservice (to retrieve product files by direct download).
The stored files cannot be accessed through the API because the files access rights are not managed by neo-storage
microservices but by the [Data Manager](../dam/overview.md) and [Catalog](../catalog/overview.md) microservices.

Neo storage depends on its plugins and workers, which serve as interfaces between the microservices and the storage
system in use (online, nearline, or offline).

You can learn about the different microservices composing Neo storage in
the [conception section](./neo-storage-conception.md).



