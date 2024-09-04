---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/dataprovider/overview/
sidebar_position: 1
---

## Introduction

The **Data provider** or **rs-data-provider** service is used to detect files on disk, create products in SIP format
from these files and finally send these SIPs to the [rs-ingest microservice](../ingest/overview.md).

This service is part of the functional group
[OAIS Catalog services](../../functional-overview/03-oais-catalog-services.md).

`Dataprovider` responsibilities:

* Data discovery through a data driven mechanism,
* Products creation (which means group of consistent files, for more details,
  see [product page](/docs/development/concepts/04-products.md)),
* Metadata generation,
* Transform products to SIPs and send them to [rs-ingest microservice](../ingest/overview.md).

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception overview](./dataprovider-conception.md).

## How to use

This service has been designed to be used via the web user interface. However, you can
[browse all available REST endpoints](./api-guides/dataprovider-api-swagger.mdx).

## Plugins


See [Plugins section](./plugins/overview.md) to learn how the products creation is customizable for each mission or
project.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/dataprovider-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/dataprovider-import-export.md).

## How to access through UI

You can follow the **User manuel** to learn about the administrator UI related functionalities :

- [How to configure **Acquisition chains**](../../../user-documentation/4_2-dataprovider/acquisition-chain-configuration.md).

## Source code in java

* [rs-dataprovider](https://github.com/RegardsOss/regards-backend/tree/master/rs-dataprovider)