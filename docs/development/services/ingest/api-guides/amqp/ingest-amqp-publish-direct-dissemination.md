---
title: Publish a direct AIP dissemination request
sidebar_label: Direct AIP dissemination
slug: /development/backend/services/ingest/api-guides/amqp/ingest-amqp-publish-direct-dissemination
sidebar_position: 3
---

## Introduction

This guide describes the AMQP event used to request the direct dissemination of one AIP to one Notifier recipient.
The product is identified by its `providerId`.

The dissemination request is processed asynchronously through the following steps:

1. The client publishes an `AipDirectDisseminationEvent` with the product's `providerId` and the target `recipient`.
2. **rs-ingest** groups events received in the same batch by `recipient`, applies a strict provider identifier filter
  to each group, and registers one dissemination creator request per recipient.
3. The regular **rs-ingest** dissemination workflow retrieves the matching AIPs and sends them to **rs-notifier**
  for the specified recipient.
4. **rs-notifier** forwards each notification through the configured recipient sender plugin, without applying
  rule matcher filters.

The recipient must be configured in **rs-notifier** with a sender plugin whose `directNotificationEnabled` parameter
is `true`. See the [Notifier recipient sender plugins](../../../notifier/plugins/recipient-sender-plugins.md) guide.

Unlike [SIP submission requests](./ingest-amqp-publish-product.mdx), this event does not provide a client-supplied
`requestId` or dedicated request status responses. See [Responses format](#responses-format) for monitoring options.

## AMQP API

### How to

The [REGARDS AMQP API concept](../../../../concepts/06-amqp-api.md) describes how to submit events or subscribe
to events through AMQP interfaces.

### Exchange

Publish the event to the REGARDS RabbitMQ exchange below:

| Exchange | Virtual host |
| --- | --- |
| `regards.broadcast.fr.cnes.regards.modules.ingest.dto.request.event.AipDirectDisseminationEvent` | `regards.multitenant.manager` |

### Request content

#### Properties

| Parameter | Type | Description |
| --- | --- | --- |
| app_id | String | Standard RabbitMQ property to track message origin. |
| priority | Integer | Standard RabbitMQ property to sort messages by priority. |
| content_encoding | String | Standard RabbitMQ property for the message encoding. |
| content_type | String | Standard RabbitMQ property for the MIME type of the message. |
| delivery_mode | Integer | Standard RabbitMQ property for message persistence. |

#### Headers

| Parameter | Type | Description |
| --- | --- | --- |
| regards.tenant | String | Tenant on which the dissemination request must be processed. |
| regards.type | String | Fully qualified class name of the AMQP event. |

```json title="Example of the properties and headers of a direct AIP dissemination event"
{
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": [
    {
      "regards.tenant": "REGARDS",
      "regards.type": "fr.cnes.regards.modules.ingest.dto.request.event.AipDirectDisseminationEvent"
    }
  ]
}
```

#### Body

```json
{
  "providerId": "DS_PHR1A_202604241011256_FR1_PX_E012N42_0307_00596",
  "recipient": "reference"
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `providerId` | String | Exact provider identifier of the AIP to disseminate. |
| `recipient` | String | Notifier recipient label that must receive the dissemination request. |

### Responses format

No dedicated AMQP response is published for an `AipDirectDisseminationEvent`. This interface does not provide
`GRANTED`, `DENIED`, `ERROR` or `SUCCESS` responses correlated with the original event.

To receive the disseminated AIP, subscribe to the destination configured by the recipient sender plugin.
For a `RabbitMQSender` recipient, this is the queue configured by its `queueName` parameter, not a predefined
response queue for this event.

The AIP's dissemination information records the recipient, dissemination date and acknowledgement date, as described
in [Products dissemination](../../conception.md#products-dissemination). Whether an acknowledgement is expected
depends on the recipient sender configuration (`ackRequired`). This acknowledgement concerns the recipient's
processing of the notification, not a dedicated response to the initial `AipDirectDisseminationEvent`.
