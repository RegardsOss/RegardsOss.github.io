---
title: Subscribe to requests from rs-worker-manager
sidebar_label: Workers - Subscribe to requests
slug: /development/services/worker-manager/api-guides/amqp/subscribe-worker-request
sidebar_position: 4
---

## Introduction

This section describes how workers must subscribe to submission request events sent by the `rs-worker-manager`
microservice as described in the [publish guide](./amqp-publish-request.md).

Requests and responses are linked with a correlation identifier : **requestId** that is provided in submission
requests and added in service responses.

## Regards AMQP api

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

## Exchange

Requests must be published to REGARDS Rabbitmq exchange:

| Exchange (type topic)                  | Virtual host                  |
|----------------------------------------|-------------------------------|
| `regards.worker.<worker type>.request` | `regards.multitenant.manager` |

The exchange name is built for each worker with the worker type parameter.

## Queue

Every consumer of this
exchange [must create its own queue bound to this exchange](../../../../concepts/06-amqp-api.md#subscribe-to-regards-published-events).

## AMQP message format

### Headers

| Parameter                    | Type   | Description                                                    |
|------------------------------|--------|----------------------------------------------------------------|
| regards.tenant               | String | Tenant name depends on REGARDS instance project configuration. |
| regards.request.id           | String | Request identifier.                                            |
| regards.request.owner        | String | Name of the request provider                                   |
| regards.request.session      | String | Name of the session                                            |
| regards.request.content_type | String | Content type of request (content type accepted by the worker)  |

```json title="Example of the headers of a worker request event message"
"regards.tenant": "tenant"
"regards.request.id": "requestId"
"regards.request.owner": "owner"
"regards.request.session": "session"
"regards.request.content_type": "contentType"
```

### Body

The `rs-worker-manager` has saved the message body in Byte format; it doesn't deserialize it because
the body content is not used by the `rs-worker-manager` but by the worker during processing.

This message body is identical to the message body used when publishing a message to
the `rs-worker-manager` ([using AMQP API](./amqp-publish-request.md#tag/body)).


