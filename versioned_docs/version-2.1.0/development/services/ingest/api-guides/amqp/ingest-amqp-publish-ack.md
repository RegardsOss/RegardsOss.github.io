---
title: Acknowledge product dissemination
sidebar_label: Acknowledge product
slug: /development/backend/services/ingest/api-guides/amqp/ingest-amqp-publish-ack
sidebar_position: 2
---

## Introduction

As described in the [service conception of `rs-ingest` microservice](../../conception.md#notifications), the system
send notification events to external systems when a product status changes.  
This guide describe how an external system can send an acknowledgment to `rs-ingest` to inform it that the AIP
dissemination has been successfully handled.

:::caution
There is no way for an external system to inform the rs-ingest service that the AIP dissemination has not been
successfully handled yet.
:::

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Submission requests have to be published to REGARDS Rabbitmq exchange:

| Exchange                                                                                   | Virtual host                   |
|--------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent` | `regards.multitenant.manager`	 |

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
  "app_id": "{ID of app}",
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": [
    {
      "regards.tenant": "REGARDS",
      "regards.type": "fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent"
    }
  ]
}
```

#### Body

```json
{
  "urn": "URN:...",
  "recipientLabel": "xxx"
}
```

| Parameter      | Type   | Description                          |
|----------------|--------|--------------------------------------|
| urn            | String | Product URN to acknowledge           |
| recipientLabel | String | Name of the recipient to acknowledge |

:::info recipient Label
This is the identifier of the external service from which the acknowledgment message was sent. This
identifier matches one of the values that were added in the **recipientLabel** parameter when
manual configuration of the notification service plugin.
:::