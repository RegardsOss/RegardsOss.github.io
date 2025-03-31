---
title: Send heart beats from workers to rs-worker-manager
sidebar_label: Workers - Send heart beat
slug: /development/services/worker-manager/api-guides/amqp/publish-heartbeat
sidebar_position: 3
---

## Introduction

This section describes how to publish a heart beat event to the `rs-worker-manager` microservice with an AMQP message.  
This message is usually sent from a worker to the `rs-worker-manager` to indicates it is alive.

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describes how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Heart beats must be published to the REGARDS RabbitMQ exchange:

| Exchange (type topic)              | Virtual host                  |
|------------------------------------|-------------------------------|
| `regards.worker.manager.heartbeat` | `regards.multitenant.manager` |

### Request content

#### Headers

| Parameter      | Type   | Description                                                            |
|----------------|--------|------------------------------------------------------------------------|
| regards.tenant | String | The tenant name depends on the REGARDS instance project configuration. |
| content_type   | String | Content type of the body. Must be set to application/json              |

```json title="Example of the headers of a heartbeat request event message"
{
  "regards.tenant": "tenant",
  "content_type": "application/json"
}
```

#### Body

```json
{
  "id": "...",
  "type": "...",
  "heartBeatDate": "2024-08-02T09:45:10.662619355Z"
}
```

| Parameter     | Type   | Description                                              |
|---------------|--------|----------------------------------------------------------|
| id            | String | Worker instance identifier                               |
| type          | String | Worker type                                              |
| heartBeatDate | String | Date and hour of the heart beat, when the worker sent it |