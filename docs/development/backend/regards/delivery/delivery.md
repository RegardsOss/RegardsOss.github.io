---
id: backend-delivery-overview
title: RS-DELIVERY microservice
sidebar_label: Overview
slug: /development/backend/services/delivery/overview/
---


The primary objective of rs-delivery microservice is to **zip and upload files** retrieved from REGARDS data catalog to
a **configured S3 server**.
To achieve this task, it relies extensively on [rs-order microservice](../order/order.md) to make requested data
available and communicates via AMQP protocol to notify the request progress.

It is imperative to note that rs-delivery:

- only supports AMQP communication (except for its configuration, which uses REST),
- can only deliver files to a S3-compatible storage server.

**To learn more about how the microservice is designed**, refer to the following
documentation [delivery architecture](./architecture.md).

**To discover how to use the microservice**, refer to the following guides:

- REST API:
    - [Configure the tenant settings](./api-guides/rest/rest-configure-settings.md)

- AMQP API:
    - [Publish a delivery request](./api-guides/amqp/amqp-publish-request.md)
    - [Monitor a delivery request](./api-guides/amqp/amqp-subscribe-response.md)
