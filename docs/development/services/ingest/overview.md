---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/ingest/overview/
sidebar_position: 1
---

**Ingest** (or **rs-ingest**) microservice is the service that manage
OAIS [products](../../../overview/concepts/01-products.md). It
is the main service of
the [set of OAIS Services (Functional overview)](../../../overview/functional-overview/03-oais-catalog-services.md).   
It is one of the many data sources that can be
crawled by **rs-dam** microservice to populate
the [meta-catalog](../../../overview/functional-overview/02-meta-catalog-services.md).

This microservice is designed to comply with
the [CCSDS OAIS recommendation](https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf).

In this recommendation :

- [Products](../../../overview/concepts/01-products.md) are submitted with **SIP** (Submission Information Package).
- SIP are converted into **AIP**  (Archival Information Package) thanks to a **Ingest chain**.
- Files are stored in one or many locations (functionality delegated
  to [rs-storage microservice](../../backend/regards/storage/storage.md))
- AIP are updated with files locations and preservation additional information.

The REGARDS implementation of the OAIS **SIP** format is describe in the
appendix [Regards OAIS](../../appendices/01-oais.md).

`rs-ingest` responsibilities :

* Ingest SIP,
* Transform SIP to AIP, with metadata enhancement thanks to an **Ingest chain**.
* Submit files to [rs-storage](../../backend/regards/storage/storage.md) microservice to be stored in one or several
  storage locations
* Listen for [rs-storage](../../backend/regards/storage/storage.md) responses and update AIP with new files information
* Delete AIP
* Handle SIP and AIP versioning
* Notify events on AIP products to subscribers

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [How it works section](conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- **Submit product** [using REST API](./api-guides/rest/submit-sip.mdx)
  or [using AMQP API](api-guides/amqp/ingest-amqp-publish-product.mdx) shows you how to submit SIP.
- **Search products** [using REST API](./api-guides/rest/search-aips.mdx)
- **Browse** all [REST API available endpoints](api-guides/rest/api-swagger.mdx).

## Plugins

See [Plugins section](./plugins/overview.md) to learn how the products creation is customizable for each mission or
project.

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/configurations.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/import-export.md).

## How to access through UI

You can follow the **User manuel** to learn about the administrator UI related functionalities :

- [How to configure **Ingest chains**](../../../user-documentation/4_1-ingest/ingestion-chain-configuration.md).
- [How to configure global settings](../../../user-documentation/4_1-ingest/settings-ingest.md)
- [How to submit a SIP](../../../user-documentation/4_1-ingest/submit-products.md)
- [How to notify products](../../../user-documentation/4_1-ingest/oais-dissemination.md)

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-ingest).