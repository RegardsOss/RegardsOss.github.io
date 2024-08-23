---
id: backend-delivery-overview
title: RS-DELIVERY microservice
sidebar_label: Overview
slug: /development/backend/services/delivery/overview/
---


The rs-delivery microservice allows users to order products and retrieve these ordered files on a provided storage
location.

To achieve this task, this service:

- makes requested products available by making an order on
  the [rs-order microservice](../../backend/regards/order/order.md),
- downloads these products and saves them on the provided storage location,
- notifies the delivery request progress via AMQP protocol.

It is imperative to note that rs-delivery only supports AMQP communication (except for its configuration, which uses
REST).

:::info Current limitation
For now, the rs-delivery microservice can only :

- deliver **zip files** to a **S3-compatible storage server**.
- order products within a **single suborder**. Suborder limit size can be configured on **rs-order microservice**.
  :::

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

You can learn how the service works with the [conception section](./develiry-conception.md).

### How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :
- [Publish a delivery request](api-guides/amqp/amqp-publish-request.md) shows you how to create a *Delivery request*
  and sent it to REGARDS.
- [Monitor a delivery request](api-guides/amqp/amqp-subscribe-response.md)  shows you how to retrieve *Delivery
  request* updates.
- **Browse** all [REST API available endpoints](api-guides/rest/rs-delivery-api-swagger.mdx).

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/delivery-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/delivery-import-export.md).

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-delivery).
