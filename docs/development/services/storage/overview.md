---
id: backend-storage-overview
title: REGARDS storage microservice
sidebar_label: Overview
slug: /development/backend/services/storage/overview/
---

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Do not uses Jobs system                             | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception section](./conception.md).

### How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- **Browse** all [REST API available endpoints](api-guides/rest/storage-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/storage-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/storage-import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-storage).
