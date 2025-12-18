---
title: Subscribe to AMQP responses
sidebar_label: Subscribe to responses
sidebar_position: 6
slug: /development/backend/services/fem/guides/amqp/subscribe-to-requests-responses
---

## Introduction

This section describes how to subscribe to events sent by `rs-fem` microservice about submitted requests.

`Feature manager` or `rs-fem` microservice publishes AMQP messages to monitor request lifecycle.

## Regards AMQP api

To learn more about global description of REGARDS AMQP api see [Regards AMQP API](../../../../concepts/06-amqp-api.md).

## Exchange

Responses from REGARDS are sent to this exchange :

| Exchange                                                                              | Virtual host                   |
|---------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent` | `regards.multitenant.manager`	 |

## Queue

To subscribe to these messages, first you have to create your own queue and bind it to this exchange.
To learn how to subscribe to these messages with a custom queue,
see [Regards AMQP API](../../../../concepts/06-amqp-api.md).

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

| Parameter      | Type     | Description                                                                                                            |
|----------------|----------|------------------------------------------------------------------------------------------------------------------------|
| regards.tenant | `String` | The [tenant or project](../../../../concepts/03-multitenant.md) to request. It **must** be an existing Regards tenant. |

### Body

```json
{
  "requestId": "{requestId}",
  "type": "{requestType}",
  "id": "{featureId}",
  "urn": "{featureUrn}",
  "requestOwner": "{requestOwner}",
  "state": "{state}",
  "errors": [
    "error"
  ]
}
```

| Parameter    | Type          | Description                                                                                    |
|--------------|---------------|------------------------------------------------------------------------------------------------|
| requestId    | `String`        | Request unique identifier.                                                                     |
| type         | `String`        | Request type can be **CREATION**, **PATCH**, **DELETION** or **NOTIFICATION**                  |
| id           | `String`        | Feature id. This parameter is the same as the provided one in the submission request           |
| urn          | `String`        | The related feature `urn`. May not be provided if feature is not created yet.                  |
| state        | `String`        | State of the submitted request.<br/> Can be **GRANTED**, **DENIED**, **SUCCESS** or **ERROR**. |
| requestOwner | `String`        | Owner of the request (provided in the submitted request)                                       |
| errors       | `List<String>` | Optional error messages to inform about request process errors                                 |

### Example of DENIED request

```json
{
  "requestId": "request-exaple-001",
  "requestOwner": "example-owner",
  "id": "ProductExample001",
  "type": "CREATION",
  "state": "DENIED",
  "errors": [
    "Missing parameter in properties"
  ]
}
```

### Example of GRANTED request

```json
{
  "requestId": "request-exaple-001",
  "requestOwner": "example-owner",
  "id": "ProductExample001",
  "type": "CREATION",
  "state": "GRANTED"
}
```

### Example of SUCCESS request

```json
{
  "requestId": "request-exaple-001",
  "requestOwner": "example-owner",
  "id": "ProductExample001",
  "urn": "URN:FEATURE:DATA:tenant-example:1df31af9-ebcf-32b8-b8d8-8b0a586bc493:V1",
  "type": "CREATION",
  "state": "SUCCESS"
}
```

### Example of ERROR request

```json
{
  "requestId": "request-exaple-001",
  "requestOwner": "example-owner",
  "id": "ProductExample001",
  "type": "CREATION",
  "state": "ERROR",
  "errors": [
    "Unable to store associated file"
  ]
}
```
