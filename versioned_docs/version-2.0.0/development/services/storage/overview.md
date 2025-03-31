---
id: backend-storage-overview
title: REGARDS storage microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/storage/overview/
---

The RS-STORAGE microservice is an integral part of the functional
groups [OAIS Services (Functional overview)](../../../overview/functional-overview/03-oais-catalog-services.md),
[GeoJson services (Functional overview)](../../../overview/functional-overview/04-geojson-catalog-services.md) and
[Restitution services](../../../overview/functional-overview/05-product-restitution-services.md).

RS-STORAGE is the service that manages the physical storage and retrieval of files

The storage microservice can handle online, and nearline storage locations.

:::info
A nearline storage location stores files in an online buffer and periodically transfers the files from the buffer to a
long-term archival system that is not accessible synchronously. The files need to be restored to become available for
download. For more information, see the Wikipedia articles
on [Nearline storage](https://en.wikipedia.org/wiki/Nearline_storage)
and [Amazon S3 Glacier](https://en.wikipedia.org/wiki/Amazon_S3_Glacier), which is an example of nearline storage used
in REGARDS.
:::

Its main responsibilities are:

* Storing files
* Retrieving files
* Deleting files

For nearline locations, the following functionalities are also provided:

* Checking the availability of a file
* Requesting the restoration of a file

Unlike other microservices, the Storage microservice is not intended to be accessed directly by users. The REST APIs are
mainly private and are intended for maintenance rather than for performing actual storage or retrieval operations.
Instead, file storage requests are handled by the [Ingest](../ingest/overview.md)
or [Feature Manager](../fem/overview.md) microservices, while file retrieval requests are handled by
the [Order](../order/overview.md) microservice (to retrieve product files by **order*) or
the [Catalog](../catalog/overview.md) microservice (to retrieve product files by **direct download**)' .
The stored files cannot be accessed through the API because the files access rights are not managed by the storage
microservice but by the [Data Manager](../dam/overview.md) and [Catalog](../catalog/overview.md) microservices.

The storage microservice depends on its plugins, which serve as interfaces between the microservice and the storage
system in use (local, online, or nearline).

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                             | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception section](./conception.md).

## How to use

You can learn how to **operate** the microservice using the **API Guides** :

- **Browse** all [REST API available endpoints](api-guides/rest/storage-api-swagger.mdx).

## Plugins

A storage location plugin serves as the interface between the microservice and the actual storage space (COTS).
See the [Plugins section](./plugins/overview.md) to learn more about the available storage location plugins and how to
configure them.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see the [Configuration section](./configuration/storage-static-configuration.md).

To understand the **configuration of specific tenants** (projects),
see the [Import/export configuration section](./configuration/storage-import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-storage).
