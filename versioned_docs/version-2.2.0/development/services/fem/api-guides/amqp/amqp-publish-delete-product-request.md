---
title: Delete product
sidebar_label: Delete product
sidebar_position: 3
slug: /development/backend/services/fem/guides/amqp/publish-a-deletion-request
---

This section describes how to **delete a product** with the `Feature manager` or **rs-fem** service of REGARDS with 
**AMQP interfaces**.

## Introduction

The diagram below explains the global processing of a new Feature deletion request by REGARDS system.  
For a REGARDS client using message queuing, responses are sent for each change of your request status:

- `DENIED` : Your request has been denied (possibly malformed request).
- `GRANTED` : Your request has been granted and will be processed soon
- `ERROR` : Processing of your granted request finished in error status.
- `SUCCESS` : Processing of your granted request finished with success. Your SIP as been successfully ingest, AIP
  generated and associated files stored.

![sequence](../../sources/feature-request-nominal.png)

Requests and responses are linked with a correlation identifier : **requestId** provided into deletion requests and
added in service responses.

:::info
When you submit a Feature deletion request you have to ensure that the provided **requestId is unique**. Service will
respond to your request with this identifier.
:::

## AMQP API

### How to

The [Regards AMQP API concept](../../../../../development/concepts/06-amqp-api.md) describe how AMQP interfaces must be
handled to submit events or to subscribe to events.

### Exchange

Deletion requests have to be published to this REGARDS RabbitMQ exchange:

| Exchange                                                                                     | Virtual host                   |
|----------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent` | `regards.multitenant.manager`	 |

### Request content

#### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

### Headers

| Header                | Value                                                                                                                                                                                |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| regards.tenant        | The [tenant or project](../../../../concepts/03-multitenant.md) to request. It **must** be an existing Regards tenant.                                                               |
| regards.request.id    | String of max 36 characters long. **You must ensure that this id is unique**.                                                                                                        |
| regards.request.date  | ISO 8601 date (**can be in the future to delay request processing**). <br/>See [How it works section](../../conception.md#delaying-the-processing-of-requests) for more information. |
| regards.request.owner | String of max 128 characters long                                                                                                                                                    |

:::info
Use the request date parameter to delay the request processing if you need to by giving a date in the future.
The given date, will the execution date of our request.
If a past date is provided, request will be processed as soon as possible.
:::

#### Body

| Property | Type     | description                                                                                                          |
|----------|----------|----------------------------------------------------------------------------------------------------------------------|
| priority | `String` | `HIGH`, `NORMAL`, `LOW`.<br/> See [How it works section](../../conception.md#request-priority) for more information. |
| urn      | `String` | Unique identifier of the feature to delete                                                                           |

### Example

```properties
# Headers
regards.tenant=project1
regards.request.id=78938463-023a-4488-b58c-52af3f7e9446
regards.request.owner=owner
regards.request.date=2020-03-17T12:24:05.995Z
```

```json title='Example of feature deletion request body'
{
  "priority": "NORMAL",
  "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1"
}
```

### Responses format

To learn how to subscribe to your request responses as described in the introduction
diagram see [Subscribe to responses](./amqp-subscribe-request-response.md).