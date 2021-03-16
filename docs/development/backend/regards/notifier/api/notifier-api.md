---
id: backend-notifier-api
title: Notifier API
sidebar_label: Notifier
slug: /development/backend/notifier/api
---


## Overview

`Notifier` reponsabilities:

* Manage rules and recipients configuration,
* Send notifications to external users or components according to its configuration.

At the moment, 2 API are available :

* A REST API to manage configuration,
* A messaging API ([AMQP](https://www.amqp.org/)) for the receipt of the requests to be processed.

![Notifier architectural concepts](/schemas/notification_management/architectural_concepts_notifier.png)

This microservice receives requests from `Feature manager` and `Ingest`.

All requests are then processed as they arrive:

* All rules are applied to all requests in order to identify target recipients,
* Notifications are then sent to these recipients.

Under the hood, all the real work is done by the **plugins** :

* Plugins to manage the rules for dispatching notifications by recipients,
* Plugins to make the notification.

:::note
Format of the notification is totally free as the notification is fully delegated to a plugin.
:::

## AMQP API

### Send an event to notifier

Message has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationRequestEvent`

With following properties:

|Property|Type|
|:--:|:---------:|
|metadata| A free JSON element|
|payload| A free JSON element|


And following headers:

|Header|Value|
|:--:|:---------:|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|


### Integration with `Feature Manager` and `Ingest`

Creations, updates or deletions of features or AIPs are optionnaly sent to `Notifier`, this consist of the **payload**.

**metadata** is a field allowing `Ingest` or `Feature Manager` to send additionnal information to `Notifier` that rules and notification plugins might use or require.

#### Template of notified feature

```json
{
    "metadata": "{whatEverIsNeededOrWanted}",
    "payload": "{feature}"
}
```

##### Migration from 1.4 to 1.5

Notification format using **RabbitMQSender** plugin has been updated between version 1.4 and 1.5:
1. `element` has been renamed to `payload`
1. `action` has been moved into objet `metadata` and is now located at `$.metadata.action` instead of `$.action`

{@import notifier-management-api.md}
