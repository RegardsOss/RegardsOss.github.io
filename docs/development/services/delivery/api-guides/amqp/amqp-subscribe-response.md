---
id: backend-amqp-subscribe-to-delivery-response
title: Monitor a delivery request progress
sidebar_label: Subscribe to responses
slug: /development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses
---

This section describes how to subscribe to delivery response events with AMQP message.

To learn more about global description of REGARDS AMQP api see [Regards AMQP API](../../../../concepts/06-amqp-api.md)

## Exchange

Subscribe to the following exchange to receive delivery responses on vhost `regards.multitenant.manager`:  
`regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.output.DeliveryResponseDtoEvent`

:::info Get delivery requests response
The REGARDS administrator must create for you a dedicated queue bound to this exchange and allow your RabbitMQ user to
access to that queue. By doing so, it let you access to messages from that exchange.
:::

## AMQP message format

### Headers

Headers are the same for all type of responses.

```json
{
  "app_id": "xxx",
  "timestamp": "xxx",
  "correlation_id": "xxx",
  "priority": xxx,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": {
    "regards.tenant": "xxx"
  }
}
```

### GRANTED body

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

### DONE body

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

### DENIED body

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

### ERROR body

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
