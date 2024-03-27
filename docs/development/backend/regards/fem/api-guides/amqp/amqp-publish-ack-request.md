---
id: backend-amqp-publish-acknowledge-request
title: Publish an acknowledge request event
sidebar_label: Publish acknowledge
slug: /development/backend/services/fem/guides/amqp/publish-acknowledge-request
---

This section describes how to publish an acknowledge request event to REGARDS with AMQP message.

## Exchange

Acknowledge requests have to be published to REGARDS Rabbitmq exchange:

| Exchange                                                             | Virtual host                   |
|----------------------------------------------------------------------|--------------------------------|
| `fr.cnes.regards.modules.feature.dto.event.in.DisseminationAckEvent` | `regards.multitenant.manager`	 |

## AMQP message format

### Properties

| Parameter | Type   | Optional | Description                                                    |
|-----------|--------|:--------:|----------------------------------------------------------------|
| app_id    | String |   Yes    | Standard RabbitMQ property to track message origin.            |
| priority  | String |   Yes    | Standard RabbitMQ property to sort messages by priority order. |

### Headers

```json
"regards.tenant": "tenant"
"regards.request.owner": "owner"
```

| Parameter             | Type   | Optional | Description                                                    |
|-----------------------|--------|:--------:|----------------------------------------------------------------|
| regards.tenant        | String |    No    | Tenant name depends on REGARDS instance project configuration. |
| regards.request.owner | String |    No    | Name of the request provider.                                  |

### Body


```json
{
  "urn": "URN:...",
  "recipientLabel": "xxx"
}
```

| Parameter      | Type   | Description                          |
|----------------|--------|--------------------------------------|
| urn            | String | Product URN to acknowledge           |
| recipientLabel | String | Name of the recipient to acknowledge |
