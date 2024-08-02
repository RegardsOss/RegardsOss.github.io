---
id: backend-notifier-architecture
title: RS-NOTIFIER architecture
sidebar_label: Architecture
slug: /development/backend/services/notifier/architecture/
---

`Notifier` responsibilities:

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

Under the hood, all the real work is done by the **plugins**:

* Plugins to manage the rules for dispatching notifications by recipients,
* Plugins to make the notification.

:::note
Format of the notification is totally free as the notification is fully delegated to a plugin.
:::
