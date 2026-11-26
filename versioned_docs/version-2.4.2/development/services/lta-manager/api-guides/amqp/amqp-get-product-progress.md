---
id: backend-amqp-get-product-progress
title: Subscribe to products events
sidebar_label: Subscribe to products events
sidebar_position: 2
slug: /development/backend/services/lta-manager/guides/get-product-progress-amqp
---

## Introduction

This section describes how to subscribe to events sent by rs-lta-manager microservice about submitted products
requests as described in [Create Product guide](./amqp-submit-product.md).

After your [Submission request](./amqp-submit-product.md) is sent, you will receive :

1. A **GRANTED** or a **DENIED** response to inform you if your request has been accepted or not.
2. A **SUCCESS** or an **ERROR** response to inform you that your request has been processed.

Requests and responses are linked with a correlation identifier **correlationId** that is provided into submission
requests and added in service responses.

## Regards AMQP api

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

## Exchange

Product submission responses from REGARDS are sent to exchange :

| Exchange                                                                                      | Virtual host                   |
|-----------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.ltamanager.amqp.output.SubmissionResponseDtoEvent` | `regards.multitenant.manager`	 |

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

Headers are the same for all kind of responses.

| Parameter      | Type   | Description                                                                                              |
|----------------|--------|----------------------------------------------------------------------------------------------------------|
| regards.tenant | String | [Tenant](../../../../concepts/03-multitenant.md) name depends on REGARDS instance project configuration. |

### Granted response

REGARDS will publish a granted notification on the response exchange when the request is validated.

```json
{
  "correlationId": "xxx",
  "productId": "xxx",
  "responseStatus": "GRANTED"
}
```

| Parameter      | Type   | Optional | Description                                |
|----------------|--------|:--------:|--------------------------------------------|
| correlationId  | String |    No    | Request identifier                         |
| productId      | String |    No    | Id of the product to create                |
| responseStatus | String |    No    | Status of the request. More details below. |

### Success response

REGARDS will publish a success notification on the response exchange when the request is terminated in success.

```json
{
  "correlationId": "xxx",
  "productId": "xxx",
  "responseStatus": "SUCCESS",
  "expires": "2022-12-22T10:25:52.243Z",
  "session": "xxx",
  "message": ""
}
```

| Parameter      | Type                 | Optional | Description                                                |
|----------------|----------------------|:--------:|------------------------------------------------------------|
| correlationId  | String               |    No    | Request identifier                                         |
| productId      | String               |    No    | Id of the product to create                                |
| responseStatus | String               |    No    | Status of the request. More details below.                 |
| expires        | String Date ISO 8601 |    No    | Request expiration date. Format yyyy-MM-dd'T'HH:mm:ss.SSSZ |
| session        | String               |    No    | Request session name                                       |
| message        | String               |   Yes    | Information message about your request                     |

### Invalid request responses

REGARDS will publish a denied notification on the response exchange when the request is not valid.

```json
{
  "correlationId": "xxx",
  "productId": "xxx",
  "responseStatus": "DENIED",
  "message": ""
}
```

| Parameter      | Type   | Optional | Description                                |
|----------------|--------|:--------:|--------------------------------------------|
| correlationId  | String |    No    | Request identifier                         |
| productId      | String |    No    | Id of the product to create                |
| responseStatus | String |    No    | Status of the request. More details below. |
| message        | String |   Yes    | Information message about your request     |

A request can be invalid, if :

- Request is not well formed
- Provided datatype is unknown or not configured.

:::info How to handle it?
Look at your request, fix it and submit a new one.
:::

### Internal error responses

After request has been granted by REGARDS, internal errors may occur. In such case, an error response will be published
on the response exchange.

```json
{
  "correlationId": "xxx",
  "productId": "xxx",
  "responseStatus": "ERROR",
  "expires": "2022-12-22T10:25:52.243Z",
  "session": "xxx",
  "message": "Cause of the internal error"
}
```

| Parameter      | Type                 | Optional | Description                                                |
|----------------|----------------------|:--------:|------------------------------------------------------------|
| correlationId  | String               |    No    | Request identifier                                         |
| productId      | String               |    No    | Id of the product to create                                |
| responseStatus | String               |    No    | Status of the request. More details below.                 |
| expires        | String Date ISO 8601 |    No    | Request expiration date. Format yyyy-MM-dd'T'HH:mm:ss.SSSZ |
| session        | String               |    No    | Request session name                                       |
| message        | String               |   Yes    | Information message about your request                     |

:::info How to handle it?
Retry later with new request or contact REGARDS administrators.
:::
