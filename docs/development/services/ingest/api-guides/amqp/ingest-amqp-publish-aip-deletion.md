---
title: Publish an AIP deletion request
sidebar_label: AIP deletion request
slug: /development/backend/services/ingest/api-guides/amqp/ingest-amqp-publish-aip-deletion
sidebar_position: 4
---

## Introduction

This guide describes the AMQP event used to request the deletion of one OAIS product.
The product is identified by the `providerId` of its AIP. All versions of this provider identifier are concerned.

The deletion request is processed asynchronously through the following steps:

1. The client publishes an `AipDeletionEvent` to the exchange described below, with the target tenant in the headers.
2. **rs-ingest** groups received events by deletion mode, applies a strict provider identifier filter to each group,
  and registers an OAIS deletion creator request.
3. The regular **rs-ingest** deletion workflow processes the request. Depending on `deletionMode`, it removes the SIP
  and its related AIPs from the database or marks them as `DELETED`. The AMQP handler does not delete them directly.
4. If `active_notifications` is enabled, **rs-ingest** sends an `OAIS_DELETION` product notification to **rs-notifier**.
  A configured notification rule and recipient can forward it to a queue consumed by the client.

Unlike [SIP submission requests](./ingest-amqp-publish-product.mdx), this event does not provide a client-supplied
`requestId` or dedicated request status responses. The notification mechanism is described in
[Responses format](#responses-format).

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Submission requests have to be published to REGARDS Rabbitmq exchange:

| Exchange                                                                                 | Virtual host                   |
|------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.ingest.dto.request.event.AipDeletionEvent` | `regards.multitenant.manager` |

### Request content

#### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| app_id           | String  | Standard RabbitMQ property to track message origin.                  |
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

#### Headers

| Parameter      | Type   | Description                                                    |
|----------------|--------|----------------------------------------------------------------|
| regards.tenant | String | Tenant name depends on REGARDS instance project configuration. |
| regards.type   | String | Type of content of the message                                 |

```json title="Example of the properties and headers of an Ingest request event message"
{
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": [
    {
      "regards.tenant": "REGARDS",
      "regards.type": "fr.cnes.regards.modules.ingest.dto.request.event.AipDeletionEvent"
    }
  ]
}
```

#### Body

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `providerId` | String |  | Exact provider identifier of the AIP to delete. All versions of the provider are concerned. |
| `deletionMode` | String | `IRREVOCABLY` | `IRREVOCABLY` removes the SIP and its related AIPs from the database. `BY_STATE` marks the SIP and its related AIPs as `DELETED`. |

```json
{
  "providerId": "DS_PHR1A_202604241011256_FR1_PX_E012N42_0307_00596",
  "deletionMode": "IRREVOCABLY"
}
```

The `rs-ingest` handler groups events by deletion mode, applies a strict provider identifier filter to each group,
and registers an OAIS deletion creator request. Deletion is then handled by the regular `rs-ingest` deletion workflow,
not directly by the AMQP handler.

The [OaisDeletionRequestSender Notifier plugin](/docs/next/development/backend/services/notifier/plugins/recipient-sender#oais-deletion-request-sender)
can generate these events from AIP notification requests.

### Responses format

No dedicated AMQP response is published for an `AipDeletionEvent`. To be informed when an AIP is deleted,
subscribe to the product notifications sent by **rs-ingest** through **rs-notifier**.

Configure the following settings on the target tenant:

1. Set the **rs-ingest** `active_notifications` parameter to `true`, as described in the
   [Ingest configuration](../../configuration/import-export.md).
2. In **rs-notifier**, create a [LuceneRuleMatcher](../../../notifier/plugins/rule-matcher-plugins.md#lucene-rule-matcher)
   rule with `metadata_rule=action:OAIS_DELETION` and no `payload_rule` filter to receive all deletion notifications.
3. Associate this rule with a [RabbitMQSender](../../../notifier/plugins/recipient-sender-plugins.md#rabbitmqsender)
   recipient configured with the parameters below.

| Parameter | Example value |
| --- | --- |
| `recipientLabel` | `aip-deletion-monitor` |
| `exchange` | `aip-deletion-notifications` |
| `queueName` | `aip-deletion-notifications` |
| `ackRequired` | `false` |

Subscribe to the `aip-deletion-notifications` queue in the `regards.multitenant.manager` virtual host.
This name is a configurable example, not a predefined REGARDS queue. The plugin creates the exchange and queue
when it sends the first notification. They can be created beforehand so the consumer can subscribe immediately.
Do not consume the internal **rs-notifier** queue, as this would remove messages intended for the service.

The message follows the [product notification format](../../conception.md#products-notification-format):
`metadata.action` is `OAIS_DELETION`, and `payload` contains the deleted AIP, including its `providerId`.
This is a product deletion notification, not a response correlated with the original event.
This mechanism does not provide `GRANTED`, `DENIED` or `ERROR` statuses for the deletion request.
