---
title: REGARDS functional overview
sidebar_label: Overview
slug: /development/functional-overview/overview/
---

Welcome to REGARDS official documentation.
REGARDS is a highly configurable and customisable application. It is therefore essential to know which REGARDS features
you are interested in.

The **non-optional core** of REGARDS corresponds to the [meta catalog functional group](./02-meta-catalog-services.md),
which allows you to build and consult a homogeneous catalog of products from various product suppliers.

The diagram below shows these optional functional groups grouped around the meta catalog.
![](./img/overview.png)

:::info Use only what you need
REGARDS software has been designed to meet several use-cases, allowing you to use group of functionalities that
you need and ignoring others components.
:::

**Core REGARDS system** is the [Meta catalog services group](02-meta-catalog-services.md). You can then add the
functional groups below as required :

- [OAIS catalog services](03-oais-catalog-services.md) introduces you the internal catalog that stores **OAIS products
  **.
- [GeoJson catalog services](04-geojson-catalog-services.md) introduces you the internal catalog that stores **GeoJSON
  products**.
- [Product restitution services](05-product-restitution-services.md) introduces you how to retrieve stored products
  through the meta catalog.

## Difference between GeoJson and OAIS catalog

Here is the difference between these two internal catalogs:

|                                               |                                                                      OAIS Manager (Ingest)                                                                       |                                              GeoJSON Feature Manager (FEM)                                              |
|-----------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------:|
| Populate using REST                           |                                                                                Y                                                                                 |                                                            Y                                                            |
| Populate using AMQP (faster)                  |                                                                                Y                                                                                 |                                                            Y                                                            |
| Product deletion                              |                                                                                Y                                                                                 |                                                            Y                                                            |
| Product update                                |                                                        No<br/>To update a product, use product versioning                                                        |                                                            Y                                                            |
| Product versioning                            |                                                                                Y                                                                                 |                                                            Y                                                            |
| Product creation tools                        | Scan yours files using <br/>[Data acquisition chains](../../user-documentation/4_2-dataprovider/acquisition-chain-configuration.md)<br/>in order to generate SIP |                                                           DIY                                                           |
| Product creation feedback <br/>using AMQP     |                                                                                Y                                                                                 |                                                            Y                                                            |
| Product creation feedback<br/>using REST API  |                                                                                Y                                                                                 |                                                            Y                                                            |
| Product creation feedback<br/>using HMI       |                                                                                Y                                                                                 |                                                            Y                                                            |
| Creation payload format                       |                                  Strict<br/>List of SIP<br/> matching [OAIS standard](../../development/appendices/01-oais.md)                                   |                               Open<br/>List of Feature<br/>that are valid REGARDS feature                               |
| Creation payload validation                   |                                                                                Y                                                                                 |                                                            Y                                                            |
| Model validation                              |                                                          Feature may be validated against REGARDS model                                                          |                                       Feature must be valid against REGARDS model                                       |
| Product enhancement                           |                                                          Optional enhancement<br/>using custom plugins                                                           | Features can be enhancement by workers and then referenced or updated<br/>Enrichment is delegated to the worker system. |
| Sending product to <br/>microservice Notifier |                                                                                Y                                                                                 |                                                            Y                                                            |
| Goal                                          |                                                                          Perennisation                                                                           |               - A flow between many applications<br/>with complex product lifecycle<br />- Large catalog                |

