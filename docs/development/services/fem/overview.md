---
title: Feature manager (rs-fem)
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/fem/overview/
---

## Overview

`Feature Manager` or **rs-fem**  is the service that manages [products](../../concepts/04-products.md) in
[GeoJSON format](https://geojson.org/). It is the main service of the
[Functional overview - GeoJson services](../../functional-overview/04-geojson-catalog-services.md).

It is one of the many data sources that can be
crawled by the **rs-dam** microservice to populate the [meta-catalog](../../concepts/09-meta-catalog.md) as described
in [Functional overview - Meta catalog Services](../../functional-overview/02-meta-catalog-services.md).

`Feature Manager` or `rs-fem` responsibilities:

* Create, update, patch or delete products in GeoJson format,
* Submit files to [rs-storage](../storage/overview) microservice to be stored on one or many storage locations
* Handle GeoJson products versioning
* Notify events on GeoJSON products to subscribers

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../../concepts/multitenant)                                      | Yes           | Can handle multiple tenants/projects            | 
| [Vertical scalability](../../../concepts/scalability#vertical-scalability)        | Yes           | Uses Jobs system                                | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

You can learn how the service works with the [conception section](./conception.md).

### How to use

You can learn how to **operate** with the microservice thanks to **API Guides**:

- Create product [using REST API](guides/rest/create-product)
  or [using AMQP API](guides/amqp/publish-a-creation-request-event) shows you how to submit **Feature requests** to
  create
  **new products** or create a **new version** of an existing one. Products versioning is explained in this
  [How it works section](./conception.md#versioning)
- Patch product [using REST API](guides/rest/patch-product) or [using AMQP API](guides/amqp/publish-a-patch-request)
  shows you how to patch a product.
- Delete product [using REST API](guides/rest/delete-product)
  or [using AMQP API](guides/amqp/publish-a-deletion-request) shows you how to delete a
  product.
- [Publish an acknowledge AMQP request](guides/amqp/publish-acknowledge-request) shows you how to create an 
  **Acknowledge request**
- Get requests [progress through AMQP API](guides/amqp/subscribe-to-requests-responses) shows you how to retrieve 
  **Feature requests** updates.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/fem-static-configuration.md).

To understand the **configuration of a specific tenant** (aka project)
see [Import/export configuration section](./configuration/fem-import-export.md).

## How to access through UI

You can follow the **User manuel** to learn about the administrator UI related functionalities :

- [How to configure global settings](../../../../user-guide/import-data/fem/manage-features-settings)
- [How to manage features](../../../../user-guide/import-data/fem/manage-features)
- [How to notify products](../../../../user-guide/import-data/fem/features-dissemination)

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-fem).

