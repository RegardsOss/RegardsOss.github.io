---
id: backend-downloader-overview
title: REGARDS downloader microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/downloader/overview/
---

The **Downloader** or **rs-downloader** microservice is an integral part of the functional
group [Restitution services](../../../overview/functional-overview/05-product-restitution-services.md).

**rs-downloader** is the service that manages downloads of products files.

The downloader microservice can handle online and nearline storage locations. To do so, it uses the same plugins as the [storage microservices](../storage/overview.md).

Its main responsibilities are:

* Downloading files
* Manage user download quotas

Unlike other microservices, the Downloader microservice is not intended to be accessed directly by users. The REST APIs are
mainly private.
Instead, file download requests are handled by the [Order](../order/overview.md) microservice or
the [Catalog](../catalog/overview.md) microservice.
The stored files cannot be accessed through the API because the files access rights are not managed by the downloader
microservice but by the [Data Manager](../dam/overview.md) and [Catalog](../catalog/overview.md) microservices.

The **Downloader** microservice depends on [storage plugins](../storage/plugins/overview.md), which serve as interfaces between the microservice and the downloader
system in use (local, online, or nearline).

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Service does not use Jobs system                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances     |

You can learn how the service works with the [conception section](./conception.md).

## How to use

You can learn how to **operate** the microservice using the **API Guides** :

- **Browse** all [REST API available endpoints](./api-guides/rest/downloader-api-swagger.mdx).

## Plugins

A storage location plugin serves as the interface between the microservice and the actual storage space (COTS).
See the [Storage plugins section](../storage/plugins/overview.md) to learn more about the available storage location plugins and how to
configure them.

## How to configure

There is no configuration dedicated to the downloder microservice. Storages locations are configured through [storage microservice](../storage/overview.md#how-to-configure)

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-storage). The source code is the same as the storage service.
The only difference is the bootstrap module with a specific downloader active profile to enable or disable REST and AMQP controllers.
