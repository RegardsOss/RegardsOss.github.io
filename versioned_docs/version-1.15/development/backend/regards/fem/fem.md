---
id: backend-fem-overview
title: REGARDS feature management microservice
sidebar_label: Overview
slug: /development/backend/services/fem/overview/
---

### API Guides
- Create product [using REST API](api-guides/rest/rest-create-product.md) or [using AMQP API](api-guides/amqp/amqp-publish-create-product-request.md) shows you how to create a *Feature request*.
- Patch product [using REST API](api-guides/rest/rest-patch-product.md) or [using AMQP API](api-guides/amqp/amqp-publish-patch-product-request.md) shows you how to patch a product.
- Delete product [using AMQP API](api-guides/amqp/amqp-publish-delete-product-request.md) shows you how to delete a product.
- [Publish an acknowledge AMQP request](./api-guides/amqp/amqp-publish-ack-request.md) shows you how to create an *Acknowledge request*
- Get requests [progress threw AMQP API](api-guides/amqp/amqp-subscribe-request-response.md) shows you how to retrieve *Feature requests* updates.

### REST API

- The [RS-LTA-MANAGER microservice REST API](api-guides/rest/rs-fem-api-swagger.mdx) auto generated using OpenAPI.

### Architecture

**To learn more about how the microservice is designed**, refer to the following
documentation [Feature Manager architecture](./architecture.md).
