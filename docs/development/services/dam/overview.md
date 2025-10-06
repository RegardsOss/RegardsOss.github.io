---
id: backend-dam-overview
title: RS-DAM microservice
sidebar_label: Overview
sidebar_position: 1
slug: /development/services/dam/overview/
---

The **Data management** or **rs-dam** microservice is the main service used in
the [Functional overview - Meta catalog services](../../../overview/functional-overview/02-meta-catalog-services.md).

This microservice purpose is to :

- Manage [Data sources and Data models](../../../overview/concepts/02-meta-catalog.md).
- Manage [products](../../../overview/concepts/01-products.md) access rights for users.
- Populate [meta catalog](../../../overview/concepts/02-meta-catalog.md) with products crawled form data sources.

:::info
To populate the meta catalog, the **rs-dam** microservice inserts items in a highly performant **Elasticsearch** index.
The meta catalog is the **Elasticsearch index**.
:::

| Concept                                                                           | Compatibility | Description                                         |
| --------------------------------------------------------------------------------- | ------------- | --------------------------------------------------- |
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                |
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs                             |
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception section](./conception.md).

### How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- **Browse** all [REST API available endpoints](api-guides/rest/dam-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/dam-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/dam-import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-dam).
