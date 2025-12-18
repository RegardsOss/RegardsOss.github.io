---
id: backend-notifier-architecture
title: How it works
sidebar_label: How it works
slug: /development/backend/services/notifier/architecture/
sidebar_position: 2
---

## Introduction

`Notifier` responsibilities:

* Manage rules and recipients configuration,
* Send notifications to external users or components according to its configuration.

The service only has one module. This one receives the notifications, mainly from GeoJSON and OAIS catalogs.
Then, these notifications pass through rules and, if they match the rules, jobs are launched to send notification
thanks to various plugins.

Configuration is an important part of this service, as the rules and the plugins are defined through the
`Notifier` service configuration.

At the moment, 2 API are available:

* A REST API to manage configuration
* A messaging API ([AMQP](https://www.amqp.org/)) for the receipt of the requests to be processed

![Notifier architectural concepts](/schemas/notification_management/architectural_concepts_notifier.png)

This microservice receives requests from `Feature manager` and `Ingest`.

All requests are then processed as they arrive:

* All rules are applied to all requests in order to identify target recipients
* Notifications are then sent to these recipients

Under the hood, all the real work is done by the [plugins](./plugins/notifier-intro-plugins.md).

## Notification format

The notifier microservice allows you to forward any type of notification with any type of content, as long as you 
comply with the specific format indicated below.

```json
{
  "metadata": {},
  "payload": {}
}
```

| Section  | Type   | Description                                                | Mandatory |
|----------|--------|------------------------------------------------------------|-----------|
| Metadata | Object | Set of metadata describing the notification (can be empty) | True      |
| Payload  | Object | Content of the notification to be distributed.             | True      |

For example, you can find the format of the notifications sent by the `FeatureManager` and `Ingest` microservices as 
part of the respective functional groups [GeoJson catalog services](../../../overview/functional-overview/04-geojson-catalog-services.md) 
and [OAIS Catalog services](../../../overview/functional-overview/03-oais-catalog-services.md) in the documentation for each of the 
two services:
 - [Products notification format sent by Feature manager service]
 - [Products notification format sent by Ingest service](../ingest/conception.md#products-notification-format)

## Configure recipients

The first thing to do when configuring the `rs-notifier` microservice is to define the recipients to whom notifications 
will be sent. To do this, you need to ask yourself:

- Which component do I want to notify?
- What notification format does the component expect?
- Is there a plugin available for this type of notification?
- Will the recipient acknowledge receipt of the notification?
- Do I authorise the system administrators to manually notify this recipient?

REGARDS provides plugins to :

- broadcast notifications without modification on
  a [RabbitMQ message bus](./plugins/recipient-sender-plugins.md#rabbitmqsender)
- broadcast notifications to internal components such
  as [WorkerManager](./plugins/recipient-sender-plugins.md#worker-manager-sender)
  or [LTAManager](./plugins/recipient-sender-plugins.md#lta-request-sender)

To learn more on plugins and configuration see [recipient plugins section](./plugins/recipient-sender-plugins.md) 
and [configuration section](./configuration/notifier-import-export.md).

### Example

Let's say we want to send notifications to a recipient named external-system-1 via a RabbitMQ message bus without 
modifying the content.

**Question**: Which component do I want to notify?  
**Response**: external-system-1

**Question**: What notification format does the component expect?  
**Response**: An event sent to Regards RabbitMQ server on a dedicated exchange named **external.system-1.dissemination**

**Question**: Is there a plugin available for this type of notification?  
**Response**: Yes, the [RabbitMQSender](./plugins/recipient-sender-plugins.md#rabbitmqsender)  

**Question**: Will the recipient acknowledge receipt of the notification?  
**Response**: No, my external system is unable to acknowledge.

**Question**:Do I authorise the system administrators to manually notify this recipient?  
**Response**:Yes

```json
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "RabbitMQSender",
    "label": "External system one",
    "businessId": "external-system-1",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "external.system-1.dissemination"
      },
      {
        "name": "queueName",
        "type": "STRING",
        "value": "external.system-1.dissemination"
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "external-system-1"
      },
      {
        "name": "ackRequired",
        "type": "BOOLEAN",
        "value": false
      },
      {
        "name": "description",
        "type": "STRING",
        "value": "Send notification to external-system-1"
      },
      {
        "name": "directNotificationEnabled",
        "type": "BOOLEAN",
        "value": true
      }
    ]
  }
}
```

## Configure dispatching rules

After determining who will receive the notifications sent by the `Notify` microservice, you then need to determine the 
rules
for selecting the notifications that will be broadcast.

To do this, you need to ask yourself:

- Which notifications do I want to forward to my recipient?
- Is there a rules plugin that allows me to select these notifications?

REGARDS provides two rule plugins [lucene](./plugins/rule-matcher-plugins.md#lucene-rule-matcher) and
[default](./plugins/rule-matcher-plugins.md#default-rule-matcher).

To learn more on plugins and configuration see [rules plugins section](./plugins/rule-matcher-plugins.md)
and [configuration section](./configuration/notifier-import-export.md).

### GeoJson Product rule configuration example

For example, let's imagine that we want to send to recipients all GeoJson product notifications indicating the creation
of a new product and whose is_valid property is equal to true.

**Question**: Which notifications do I want to forward to my recipient?  
**Response** : GeoJson (or rs-fem) product notification. Format of these notifications is defined in the
[Feature Manager documentation](../fem/conception.md).

**Question**: Is there a rules plugin that allows me to select these notifications?  
**Response** : Yes, the [lucene plugin](./plugins/rule-matcher-plugins.md#lucene-rule-matcher)
allows me to make a selection rule in the metadata section for the type of
notification indicating the creation of a new product and in the payload section to only notify products with
the is_valid attribute set to true.

```json title='Notifier rule configuration example'
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "LuceneRuleMatcher",
    "label": "FEM new created valid products rule",
    "businessId": "fem-valid-products-rule",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "payload_rule",
        "type": "STRING",
        "value": "properties.is_valid: true"
      },
      {
        "name": "metadata_rule",
        "type": "STRING",
        "value": "action: CREATED"
      }
    ]
  }
}
```

### OAIS Product rule configuration example

For example, let's imagine that we want to send to recipients all OAIS product notifications indicating the creation 
of a new product and whose is_valid property is equal to true. 

**Question**: Which notifications do I want to forward to my recipient ?  
**Response** : OAIS product notification. Format of these notifications is defined in the
[ingest documentation](../ingest/conception.md#products-notification-format).

**Question**: Is there a rules plugin that allows me to select these notifications?  
**Response** : Yes, the [lucene plugin](./plugins/rule-matcher-plugins.md#lucene-rule-matcher) 
allows me to make a selection rule in the metadata section for the type of 
notification indicating the creation of a new product and in the payload section to only notify products with 
the is_valid attribute set to true.

```json title='Notifier rule configuration example'
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "LuceneRuleMatcher",
    "label": "OAIS new created valid products rule",
    "businessId": "oais-valid-products-rule",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "payload_rule",
        "type": "STRING",
        "value": "aip.properties.descriptiveInformation.is_valid: true"
      },
      {
        "name": "metadata_rule",
        "type": "STRING",
        "value": "action: INGEST"
      }
    ]
  }
}
```

## Associate rules and recipients

The last thing to do to configure the `Notifier` microservice is to associate the broadcast rules with the recipients.
This means that any notification that respects a configured rule will be broadcast to one or more configured recipients.

To lean more on how to configure the service see [configuration section](./configuration/notifier-import-export.md).

### Example

Let's say I want to associate the rule in the example for distributing new valid OAIS products with 
the external-system-1 recipient presented in the previous examples.

```json title='Notifier configuration example'
{
  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
  "value": {
    "ruleId": "oais-valid-products-rule",
    "recipientIds": [
      "external-system-1"
    ]
  }
}
```
