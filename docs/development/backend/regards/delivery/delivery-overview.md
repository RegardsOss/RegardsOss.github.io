---
id: backend-delivery-overview
title: RS-DELIVERY microservice
sidebar_label: Overview
slug: /development/backend/services/delivery/overview/
---


The rs-delivery microservice allows users to order products and retrieve these ordered files on a provided storage location.

To achieve this task, this service:
- makes requested products available by making an order on the [rs-order microservice](../order/order.md),
- downloads these products and saves them on the provided storage location,
- notifies the delivery request progress via AMQP protocol.

It is imperative to note that rs-delivery only supports AMQP communication (except for its configuration, which uses
REST).

:::info Current limitation
For now, the rs-delivery microservice can only :
 - deliver **zip files** to a **S3-compatible storage server**.
 - order products within a **single suborder**. Suborder limit size can be configured on **rs-order microservice**.
:::

**To discover how to use the microservice**, refer to the following guides:

### API Guides

- [Publish a delivery request](./api-guides/amqp/amqp-publish-request.md) shows you how to create a *Delivery request*
  and sent it to REGARDS.
- [Monitor a delivery request](./api-guides/amqp/amqp-subscribe-response.md)  shows you how to retrieve *Delivery
  request* updates.

### REST API

- The [microservice REST API](./api-guides/rest/rs-delivery-api-swagger.mdx) auto generated using OpenAPI.
- The [configuration REST API](./api-guides/rest/rest-configure-settings.md) to configure delivery settings.

### Architecture

**To learn more about how the microservice is designed**, refer to the following
documentation [delivery architecture](./architecture.md).
