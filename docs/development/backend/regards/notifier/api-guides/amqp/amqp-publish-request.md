---
id: backend-amqp-publish-notifier-request
title: Publish a notifier request event
sidebar_label: Publish a request
slug: /development/backend/services/notifier/guides/amqp/publish-notifier
---

This section describes how to publish a new notification request event to Notifier with AMQP message.

### Send an event to notifier

Message has to be published on this
exchange : `regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationRequestEvent`

With following properties:

| Property |        Type         |
|:--------:|:-------------------:|
| metadata | A free JSON element |
| payload  | A free JSON element |

And following headers:

|        Header         |               Value               |
|:---------------------:|:---------------------------------:|
|    regards.tenant     |            The tenant             |
|  regards.request.id   | String of max 36 characters long  |
| regards.request.date  |           ISO 8601 date           |
| regards.request.owner | String of max 128 characters long |

### Integration with `Feature Manager` and `Ingest`

Creations, updates or deletions of features or AIPs are optionally sent to `Notifier`, this consist of the **payload**.

**metadata** is a field allowing `Ingest` or `Feature Manager` to send additional information to `Notifier` that rules
and notification plugins might use or require.

#### Template of notified feature

```json
{
  "metadata": "{whatEverIsNeededOrWanted}",
  "payload": "{feature}"
}
```

## Notification management

### How to retry notifications that failed

To retry notifications that failed, you need to send a new AMQP event with the same `regards.request.id` header.

- If your event does not contain anybody, it will retry the same event
- If you provide a body, it will be taken into account before retrying.
