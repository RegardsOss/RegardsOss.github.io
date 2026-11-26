---
title: Publish a request event
sidebar_label: Publish a request
slug: /development/services/worker-manager/api-guides/amqp/publish-request
sidebar_position: 1
---

## Introduction

This section describes how to publish a new request event to the `rs-worker-manager` microservice with an AMQP message
in order
to communicate with some workers.

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describes how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Requests must be published to the REGARDS RabbitMQ exchange:

| Exchange (type fanout)                                              | Virtual host                   |
|---------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.workermanager.amqp.events.in.RequestEvent` | `regards.multitenant.manager`	 |

### Request content

#### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| app_id           | String  | Standard RabbitMQ property for the application identifier            |
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

#### Headers

| Parameter                    | Type   | Optional | Description                                                        |
|------------------------------|--------|:--------:|--------------------------------------------------------------------|
| regards.tenant               | String |    No    | Tenant name depends on the REGARDS instance project configuration. |
| regards.request.id           | String |    No    | Request identifier.                                                |
| regards.request.owner        | String |    No    | Name of the request provider                                       |
| regards.request.session      | String |    No    | Name of the session                                                |
| regards.request.content_type | String |    No    | Content type of the request (content type accepted by the worker)  |

```json title="Example of the properties and headers of a request event message"
{
  "priority": 1,
  "delivery_mode": 2,
  "content_encoding": "UTF-8",
  "content_type": "application/json",
  "headers": [
    {
      "regards.tenant": "REGARDS",
      "regards.request.id": "requestId"
      "regards.request.owner": "owner"
      "regards.request.session": "session"
      "regards.request.content_type": "contentType"
    }
  ]
}
```

### Body

The content of a request for treatment depends on the worker to whom the request is made. To determine the format of the
message content, please refer to the documentation for the worker in question.


