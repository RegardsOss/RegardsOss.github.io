---
title: Subscribe to responses
sidebar_label: Subscribe to responses
slug: /development/services/worker-manager/api-guides/amqp/subscribe-to-responses
sidebar_position: 2
---

## Introduction

This section describes how to subscribe to submission events responses sent by the `rs-worker-manager` microservice as
described in the [publish guide](./amqp-publish-request.md).

Requests and responses are linked with a correlation identifier : **requestId** that is provided in submission
requests and added in the service responses.

## Regards AMQP api

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describes how AMQP interfaces must be handled to
submit events or to subscribe to events.

## Exchange

Responses from REGARDS are sent to exchange :

| Exchange (type fanout)                                                                  | Virtual host                   |
|-----------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.workermanager.amqp.events.out.ResponseEvent` | `regards.multitenant.manager`	 |

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
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the sent message     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

### Headers

| Parameter                    | Type   | Description                                                        |
|------------------------------|--------|--------------------------------------------------------------------|
| regards.tenant               | String | Tenant name depends on the REGARDS instance project configuration. |
| regards.request.id           | String | Request identifier.                                                |
| regards.request.owner        | String | Name of the request provider                                       |
| regards.request.session      | String | Name of the session                                                |
| regards.request.content_type | String | Content type of the request (content type accepted by the worker)  |
| regards.converter            | String | Converter type for body (GSON or JACKSON)                          | 
| regards.type                 | String | Event type                                                         |
| regards.worker_id            | String | Worker type                                                        |

```json title="Example of the properties and headers of a request event message"
{
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": [
    {
      "regards.tenant": "tenant"
      "regards.request.id": "requestId"
      "regards.request.owner": "owner"
      "regards.request.session": "session"
      "regards.request.content_type": "contentType"
      "regards.converter": "converter"
      "regards.type": "fr.cnes.regards.modules.workermanager.amqp.events.out.ResponseEvent"
      "regards.worker_id": "workerType"
    }
  }
```

### Body

```json
{
  "state": "...",
  "messages": [
    "xxx",
    "yyy"
  ],
  "requestId": "...",
  "content": "...",
  "type": "...",
  "requestOwner": "..."
}
```

| Parameter    | Type           | Description                                                                  |
|--------------|----------------|------------------------------------------------------------------------------|
| state        | String         | Response status (SKIPPED, GRANTED, DELAYED, INVALID_CONTENT, ERROR, SUCCESS) |
| messages     | List of String | Messages provided by the worker                                              |
| requestId    | String         | Request identifier                                                           |
| content      | byte           | Content provided by the worker                                               |
| type         | String         |                                                                              |
| requestOwner | String         | Request owner                                                                |

