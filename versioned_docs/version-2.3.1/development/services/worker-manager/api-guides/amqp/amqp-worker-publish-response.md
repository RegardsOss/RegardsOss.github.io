---
title: Publish a response event from worker
sidebar_label: Workers - Send response
slug: /development/services/worker-manager/api-guides/amqp/publish-worker-response
sidebar_position: 5
---

## Introduction

This section describes how to publish a new response event to `rs-worker-manager` with an AMQP message from worker after
receiving a request from the `rs-worker-manager` microservice.

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describes how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Responses have to be published to REGARDS RabbitMQ exchange:

| Exchange (type topic)             | Virtual host                  |
|-----------------------------------|-------------------------------|
| `regards.worker.manager.response` | `regards.multitenant.manager` |

### Request content

#### Headers

| Parameter          | Type   | Description                                                    |
|--------------------|--------|----------------------------------------------------------------|
| regards.tenant     | String | Tenant name depends on REGARDS instance project configuration. |
| regards.request.id | String | Request identifier.                                            |

```json title="Example of headers of an response event message"
"regards.tenant": "tenant"
"regards.request.id": "requestId"
```

:::info request identifier
This identifier is the correlation identifier that is provided in submission requests from the `rs-worker-manager`
microservice.
:::

#### Body

```json
{
  "status": "...",
  "messages": [
    "xxx",
    "yyy"
  ],
  "additionalHeaders": {
    "key1": "value1",
    "key2": "value2"
  },
  "content": "..."
}
```

| Parameter         | Type              | Description                                                |
|-------------------|-------------------|------------------------------------------------------------|
| status            | String            | Response status (RUNNING, INVALID_CONTENT, ERROR, SUCCESS) |
| messages          | List of String    | Messages provided by the worker                            |
| additionalHeaders | List of key/value | Additional headers for this event                          |
| content           | byte              | The content supplied by the worker in response will be used in the case of a workflow of workers as the body of the message sent to the next worker. |


