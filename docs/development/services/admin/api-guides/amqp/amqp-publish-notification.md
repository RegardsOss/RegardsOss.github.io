---
title: Publish a notification event
sidebar_label: Publish a notification
slug: /development/services/admin/api-guides/amqp/publish-notification
sidebar_position: 1
---

This section describes how to publish a [notification](../../conception.md#module--notification) event
to `rs-admin` with AMQP message.

## Exchange

The notification have to be published to REGARDS Rabbitmq exchange:

| Exchange (type fanout)                                                                  | Virtual host                  |
|-----------------------------------------------------------------------------------------|-------------------------------|
| `regards.broadcast.fr.cnes.regards.framework.amqp.event.notification.NotificationEvent` | `regards.multitenant.manager` |

## AMQP message format

### Headers

```json
{
  "regards.tenant": "tenant"
}
```

| Parameter      | Type   | Optional | Description                                                    |
|----------------|--------|:--------:|----------------------------------------------------------------|
| regards.tenant | String |    No    | Tenant name depends on REGARDS instance project configuration. |

### Body

```json
{
  "message": "...",
  "projectUserRecipients": [],
  "roleRecipients": [],
  "sender": "...",
  "title": "...",
  "level": "...",
  "mimeType": "..."
}
```

| Parameter             | Type           | Optional | Description                                                   |
|-----------------------|----------------|:--------:|---------------------------------------------------------------|
| message               | String         |    No    | Notification message                                          |
| projectUserRecipients | List of String |    No    | List of recipients(=project users)                            |
| roleRecipients        | List of String |    No    | List of recipients(=role)                                     |
| sender                | String         |    No    | Notification sender (project user email or microservice name) |
| title                 | String         |    No    | Notification title                                            |
| level                 | String         |    No    | Notification level (INFO, WARNING, ERROR, FATAL)              |
| mimeType              | String         |   Yes    | Notification mime type (by default TEXT_PLAIN)                |




