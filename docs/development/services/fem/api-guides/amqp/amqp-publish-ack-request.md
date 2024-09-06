---
title: Acknowledge product
sidebar_label: Acknowledge product
sidebar_position: 5
slug: /development/backend/services/fem/guides/amqp/publish-acknowledge-request
---

This section describes how to publish an acknowledge request event to REGARDS with AMQP message.

## Introduction

Product acknowledgement by an external supplier is carried out as part of
[product distribution by the rs-fem service](../../conception.md#products-dissemination).

A recipient of a product broadcast by the `rs-fem` service can provide an acknowledgement information.
This guide explains how to send this acknowledgement to the `rs-fem` service.

This acknowledgement method is not the only way to acknowledge a product. 
It is also possible to acknowledge the distribution of a product with a [product update request](./amqp-publish-patch-product-request.md).

## Exchange

Acknowledge requests have to be published to this REGARDS RabbitMQ exchange:

| Exchange                                                             | Virtual host                   |
|----------------------------------------------------------------------|--------------------------------|
| `fr.cnes.regards.modules.feature.dto.event.in.DisseminationAckEvent` | `regards.multitenant.manager`	 |

## AMQP message format

### Properties

| Parameter | Type   | Optional | Description                                                    |
|-----------|--------|:--------:|----------------------------------------------------------------|
| app_id    | String |   Yes    | Standard RabbitMQ property to track message origin.            |
| priority  | String |   Yes    | Standard RabbitMQ property to sort messages by priority order. |

### Headers

```json
"regards.tenant": "tenant"
"regards.request.owner": "owner"
```

| Parameter             | Type                                                                                                                   | Optional | Description                   | Mandatory |
|-----------------------|------------------------------------------------------------------------------------------------------------------------|:--------:|-------------------------------|-----------|
| regards.tenant        | The [tenant or project](../../../../concepts/03-multitenant.md) to request. It **must** be an existing Regards tenant. |   True   |
| regards.request.owner | String                                                                                                                 |    No    | Name of the request provider. | True      |

### Body

```json
{
  "urn": "URN:...",
  "recipientLabel": "xxx"
}
```

| Parameter      | Type   | Description                | Mandatory |
|----------------|--------|----------------------------|-----------|
| urn            | String | Product URN to acknowledge | True      |
| recipientLabel | String | Name of the recipient      | True      |

:::caution
The name of the recipient or **recipientLabel** must be the same as the recipient name configured in rs-notifier service.
:::