---
title: Monitor a delivery request progress
sidebar_label: Subscribe to responses
slug: /development/backend/services/delivery/api-guides/amqp/subscribe-to-delivery-responses
sidebar_position: 2
---

## Introduction

This section describes how to subscribe to events sent by rs-delivery microservice about submitted delivery requests as
described in [Publish a delivery request event](amqp-publish-request.md).

## Regards AMQP api

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

## Exchange

Delivery requests responses from REGARDS are sent to exchange :

| Exchange                                                                                    | Virtual host                   |
|---------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.output.DeliveryResponseDtoEvent` | `regards.multitenant.manager`	 |

## Queue

Every consumer of this
exchange [must create its own queue bound to this exchange](../../../../concepts/06-amqp-api.md#subscribe-to-regards-published-events).

## Message format

### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| app_id           | String  | Standard RabbitMQ property to track message origin.                  |
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

### Headers

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
      "regards.type": "fr.cnes.regards.modules.delivery.amqp.output.DeliveryResponseDtoEvent"
    }
  ]
}
```

#### GRANTED body

REGARDS publishes a granted notification when the delivery request is valid and ready to be processed.

```json
{
  "correlationId": "xxx",
  "status": "GRANTED"
}
```

| Parameter     | Type   | Optional | Description             |
|---------------|--------|:--------:|-------------------------|
| correlationId | String |    No    | Request identifier.     |
| status        | String |    No    | The request is granted. |

#### DONE body

REGARDS publishes a done notification when the delivery has been processed successfully, i.e, the zip with files ordered
has been uploaded to the S3 server.

```json
{
  "correlationId": "xxx",
  "status": "DONE",
  "url": "xxx",
  "md5": "xxx"
}
```

| Parameter     | Type   | Optional | Description                                                        |
|---------------|--------|:--------:|--------------------------------------------------------------------|
| correlationId | String |    No    | Request identifier.                                                |
| status        | String |    No    | The delivery request has been processed successfully.              |
| url           | String |    No    | S3 formatted zip location (s3://bucket/correlationId/zipName.zip). |
| md5           | String |    No    | Zip checksum in MD5 format.                                        |

#### DENIED body

REGARDS publishes a denied notification when the request is not valid.

```json
{
  "correlationId": "xxx",
  "status": "DENIED",
  "message": "xxx",
  "errorType": "xxx"
}
```

| Parameter     | Type   | Optional | Description                      |
|---------------|--------|:--------:|----------------------------------|
| correlationId | String |    No    | Request identifier.              |
| status        | String |    No    | The request cannot be processed. |
| message       | String |   Yes    | Description of the error.        |
| errorType     | String |    No    | Associated error code.           |

A request can be invalid, if the delivery request is not well-formed.

:::info How to handle it?
See the [request format](amqp-publish-request.md), fix your payload and submit a new request.
:::

#### ERROR body

After request has been granted by REGARDS, internal errors may occur. In such case, an error response will be published
on the response exchange.

```json
{
  "correlationId": "xxx",
  "status": "ERROR",
  "message": "xxx",
  "errorType": "xxx"
}
```

| Parameter     | Type   | Optional | Description                      |
|---------------|--------|:--------:|----------------------------------|
| correlationId | String |    No    | Request identifier.              |
| status        | String |    No    | The request cannot be processed. |
| message       | String |   Yes    | Description of the error.        |
| errorType     | String |    No    | Associated error code.           |

There are several error types:

| Error Type          | Description                                                                                                    |
|---------------------|----------------------------------------------------------------------------------------------------------------|
| INVALID_CONTENT     | The delivery request is malformed.                                                                             |
| FORBIDDEN           | The provided user is not allowed to access delivery features.                                                  |
| ORDER_LIMIT_REACHED | The order requested is too big and cannot be performed.                                                        |
| TOO_MANY_SUBORDERS  | The order returns more than one sub-order for a given delivery request. Only one sub-order is allowed for now. |
| EMPTY_ORDER         | The order requested contains no data to order.                                                                 |
| EXPIRED             | The delivery request has expired.                                                                              |
| INTERNAL_ERROR      | An internal error occurred during the processing of the order.                                                 |

:::info How to handle it?
Retry later with a new request or contact REGARDS administrators.
:::
