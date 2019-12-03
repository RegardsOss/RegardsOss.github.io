---
layout: classic-docs
title: REGARDS Notification Management API
---

> Draft - Work in progess!
{: .tip .warning}

{% include toc.md %}

## Overview

`Notification Management` reponsabilities:

* Manage rules and recipients configuration,
* Send notifications to external users or components according to its configuration.

At the moment, 2 API are available :

* A REST API to manage configuration,
* A messaging API ([AMQP](https://www.amqp.org/)) for the receipt of the features to be processed.

![Notification management architectural concepts](/assets/schemas/notification_management/architectural_concepts_notifier2.png)

This microservice receives feature from `Feature management`.

All messages are then processed as they arrive:

* Rules is applied by type of feature to identify target recipients,
* Notifications are then sent to these recipients.

Under the hood, all the real work is done by the **plugins** :

* Plugins to manage the rules for dispatching notifications by recipients,
* Plugins to make the notification.

> Format of the notification is totally free as the notification is fully delegated to a plugin.
{: .tip .plus}

## Messaging API

To send a feature to the microservice, a message has to be published on this exchange : `TODO`

Structure of the message is as follows :

A wrapper to manage the tenant context where :

* `tenant` property must contain an existing tenant,
* `content` property must contain the payload.

And a payload with :

* A required `type`, a string that identifies a type of feature,
* A required `eventType`,
* A required `feature` in GeoJSON format.

```json
{
    "tenant": "tenant",
    "content": {
        "type": "My Feature",
        "eventType": "CREATION|UPDATE|DELETION",
        "feature": {
            "id": "FeatureId",
            "urn": "UniqueFeatureId",
            "model": "RelatedModelName",
            "entityType": "DATA",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "name": "Dinagat Islands"
            }
        }
    }
}
```

## How to manage recipients

> TODO
{: .tip .todo}

## How to manage rules

> TODO
{: .tip .todo}

## How to restart notifications that have failed

> TODO
{: .tip .todo}
