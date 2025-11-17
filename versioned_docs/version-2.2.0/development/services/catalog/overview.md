---
id: backend-catalog-overview
title: REGARDS catalog microservice
sidebar_label: Overview
slug: /development/backend/services/catalog/overview/
sidebar_position: 1
---

## Overview

`Catalog` (or `rs-catalog`) microservice is used to consult the 
[meta-catalog](../../../overview/functional-overview/02-meta-catalog-services.md).

Several functionalities are enabled by this service:

* Searching for [products](../../../overview/concepts/01-products.md) with search criteria, respecting user access rights
* Downloading product files
* Retrieving datasets and collections information
* Compatibility with search standards like STAC or OpenSearch through dedicated plugins
* Performing operations on the products such as restoring, updating or deleting products through dedicated plugins

These functionalities ensure that user access rights are respected.

### Related REGARDS services

* **Storage** : Some operations eventually are under `Storage` service's responsibility. This is the case for 
  downloading, restoring or checking availability of products. When one of these operation is needed, `Catalog` 
  calls `Storage` through a Storage REST Client.

## Conception

| Concept                                                                        | Compatibility | Description                                     |
|--------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../../concepts/multitenant)                                   | Yes           | Can handle multiple tenants/projects            | 
| [Vertical scalability](../../../concepts/scalability#vertical-scalability)     | No            | Does not use jobs system                        |
| [Horizontal scalability](../../../concepts/scalability#horizontal-scalability) | Yes           | Service can be deployed with multiple instances | 

You can learn how the service works with the [How it works section](./conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- **Legacy** Search API [using REST API](./api-guides/rest/legacy-search-api.mdx) shows you how to make search requests
  with default REGARDS lucene based engine.
- **OpenSearch** API [using REST API](./api-guides/rest/opensearch-api.mdx) shows you how to make search requests
    with OpenSearch engine.
- **STAC** Search API [using REST API](./api-guides/rest/stac-search-api.mdx) shows you how to make search requests
  with STAC engine.
- Complex Search [using REST API](./api-guides/rest/complex-search-api.mdx) shows you how to elaborate complex requests 
  on the catalog with many search requests.
- **Download** products [using REST API](./api-guides/rest/download-product-file-api) 
- Product files **restoration** [using REST API](./api-guides/rest/file-restoration-api) shows you how to 
  make a product available for downloading if it is not.

## Plugins

## Plugins

See [Plugins section](./plugins/overview.md) to learn how to extend the functionality of the service.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/catalog-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/catalog-import-export.md).

## How to access through HMI

You can follow the **User manuel** to learn about the administrator HMI related functionalities :
- [how to use browse the catalog](../../../../user-guide/catalog/use).
- [How to configure the catalog](../../../../user-guide/catalog/configuration)
- [How to configure search protocols](../../../../user-guide/catalog/protocols/introduction)

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-catalog).