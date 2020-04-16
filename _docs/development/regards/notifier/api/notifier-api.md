---
layout: classic-docs
title: Notifier API
---

{% include toc.md %}

## Overview

`Notifier` reponsabilities:

* Manage rules and recipients configuration,
* Send notifications to external users or components according to its configuration.

At the moment, 2 API are available :

* A REST API to manage configuration,
* A messaging API ([AMQP](https://www.amqp.org/)) for the receipt of the features to be processed.

![Notifier architectural concepts](/assets/schemas/notification_management/architectural_concepts_notifier2.png)

This microservice receives feature from `Feature manager`.

All messages are then processed as they arrive:

* Rules is applied by type of feature to identify target recipients,
* Notifications are then sent to these recipients.

Under the hood, all the real work is done by the **plugins** :

* Plugins to manage the rules for dispatching notifications by recipients,
* Plugins to make the notification.

> Format of the notification is totally free as the notification is fully delegated to a plugin.
{: .tip .plus}

## AMQP API

### Send an event to notifier

Message has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationActionEvent`

With following properties:

|Property|Type|
|:--:|:---------:|
|action| A free string action.|
|element| A free JSON element|
{:.table.table-striped}

And following headers:

|Header|Value|
|:--:|:---------:|
|regards.converter| GSON|
|regards.tenant| The tenant|
|regards.type|fr.cnes.regards.modules.notifier.dto.in.NotificationActionEvent|
{:.table.table-striped}

### Integration with `Feature Manager`

Each time a feature is created, updated or deleted, this feature is propagated to `Notifier`.

Action is set according to reason of change : `CREATION`, `UPDATE` or `DELETION`.

#### Template of notified feature

```json
{
    "action": "{CREATION|UPDATE|DELETION}",
    "element": "{feature}"
}
```

