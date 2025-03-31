---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/lta-manager/overview/
sidebar_position: 1
---

The `LTA Manager` or `rs-lta-manager` microservice (LTA : Long Term Archive request) has been designed to improve
interoperability between external applications and REGARDS OAIS catalog.
It provides a single service that let you create product and check creation progress and errors.

It is an optional service of
the [OAIS Services (Functional overview)](../../../overview/functional-overview/03-oais-catalog-services.md).

To do so, `LTA Manager` or `rs-lta-manager` provides these functionalities:

- OAIS Product creation
    - the payload is lighter than the one used by [OAIS catalog](../ingest/overview.md)
    - product can be enhancement by workers
- Get request status and errors - avoid you to connect to sub service used like `rs-worker-manager`, `rs-ingest`
  and `rs-storage`.

:::info Mandatory
`LTA Manager` or `rs-lta-manager` need a worker to transform LTA request to SIP.
This worker must be deployed and registered in
the [rs-worker-manager microservice](../../services/worker-manager/overview.md).
:::

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            |
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                |
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

You can learn how the service works with the [How it works section](./lta-manager-conception.md).

### How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- Create product [using REST API](api-guides/rest/rest-create-product.mdx)
  or [using AMQP API](api-guides/amqp/amqp-submit-product.md) shows you how to create a *Long Term Archive request* and
  sent it to REGARDS.
- Get product [status using REST API](api-guides/rest/rest-get-request-status.md)
  or [progress using AMQP API](api-guides/amqp/amqp-get-product-progress.md) shows you how to retrieve *Long Term
  Archive request* updates.
- Browse all [REST API available endpoints](api-guides/rest/lta-manager-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/lta-manager-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/lta-manager-import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-lta-manager).

 