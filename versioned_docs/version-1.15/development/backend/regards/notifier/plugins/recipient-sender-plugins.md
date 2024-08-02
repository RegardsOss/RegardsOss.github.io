---
id: recipient-sender-notifier-plugins
title: Recipient sender plugins
sidebar_label: Recipient sender plugins
slug: /development/backend/services/notifier/plugins/recipient-sender
---

This guide introduces you how to configure Recipient sender plugins.  
These plugins allow to generate a payload, using product content and metadata, and send it to another system named
**recipient**.

Here is the list of documented plugins:

- [RabbitMQSender plugin](#rabbitmqsender) allows to send payload to an RabbitMQ exchange, with no transformation
  applied to the input
- [LTA Request Sender](#lta-request-sender)
- [Worker Manager Sender](#worker-manager-sender)
- [Dissemination ACK Sender](#dissemination-ack-sender)

_To import your plugin configurations to Notifier, you
need [update microservice configuration using REST API](../api-guides/rest/rest-import-plugins-conf.md)_

## Common Sender configuration

:::info Abstract class extension
Most of REGARDS OSS Plugins sender are extending
the [AbstractRabbitMQSender](https://github.com/RegardsOss/regards-plugins/blob/master/notifier-plugins/common-plugins/src/main/java/fr/cnes/regards/common/notifier/plugins/AbstractRabbitMQSender.java)
abstract class.  
This abstraction above plugins implementation provides a common configuration to manage a plugin that sends event to
RabbitMQ exchange.
:::

Configuration parameters are:

| Name                      | Type    | Default Value | Optional | Description                                                                                                                                                                                                                              |
|---------------------------|---------|---------------|:--------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recipientLabel            | String  |               |    Y     | External service identifier we want to notify the products to - this information is sent back to the emitter that contacted Notifier<br /> When not specified, the emitter wont know what's the recipient label that received its events |
| description               | String  |               |    Y     | Recipient plugin description displayed in the REGARDS HMI                                                                                                                                                                                |
| exchange                  | String  |               |          | RabbitMQ exchange name to publish message to                                                                                                                                                                                             |
| queueName                 | String  |               |    Y     | RabbitMQ queue name to initialize                                                                                                                                                                                                        |
| queueDeadLetterRoutingKey | String  |               |    Y     | RabbitMQ dead letter routing key on the queue                                                                                                                                                                                            |
| directNotificationEnabled | boolean | `false`       |    Y     | When `true`, indicates this plugin can be used to send to the recipient directly without checking product content against Rule matcher plugins                                                                                           |
| blockingRequired          | boolean | `false`       |    Y     | When `true`, the sender will be informed that the notified resource must be blocked until the sender receives acknowledge from the recipient. Only then, the notified resource can be unlocked.                                          |

:::info Why providing RabbitMQ Queue and DLX?
This plugin creates a queue linked to the exchange, to ensure no message will be lost before the subscriber creates
its queue.
:::

This abstract class defines following default behavior:

| Name        | Type    | Value   | Description                                                                                  |
|-------------|---------|---------|----------------------------------------------------------------------------------------------|
| ackRequired | boolean | `false` | The emitter that contacted Notifier won't receive any acknowledgement from this notification |

## Plugin implementation

### RabbitMQSender

This plugin is used to send notifications to a specific RabbitMQ exchange with no transformation applied to the
input (what Notifier received).  
This plugin let you override following configuration:

| Name        | Type    | Default Value | Optional | Description                                                                                      |
|-------------|---------|---------------|:--------:|--------------------------------------------------------------------------------------------------|
| ackRequired | boolean | `false`       |    Y     | When `true`, the emitter that contacted Notifier will be awaiting for an acknowledgement message |

```json title='RabbitMqSender plugin configuration example'
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "RabbitMQSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "{exchange name to use}"
      },
      {
        "name": "queueName",
        "type": "STRING",
        "value": "{queue name to use}"
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "{identifier of the recipient}"
      },
      {
        "name": "ackRequired",
        "type": "BOOLEAN",
        "value": "{true or false}"
      },
      {
        "name": "description",
        "type": "STRING",
        "value": "{plugin description}"
      },
      {
        "name": "directNotificationEnabled",
        "type": "BOOLEAN",
        "value": "{true or false}"
      },
      {
        "name": "blockingRequired",
        "type": "BOOLEAN",
        "value": "{true or false}"
      }
    ]
  }
}
```

### LTA Request Sender

_There is no public documentation yet_

### Worker Manager Sender

_There is no public documentation yet_

### Dissemination ACK Sender

This plugin is designed to send acknowledge messages to OAIS catalog and FEM catalog.

:::danger
You need to define either properties to send to FEM catalog either properties to send to OAIS catalog
:::

#### GeoJSON FEM catalog usage

This plugin let you override following configuration:

| Name                          | Type   | Optional | Description                                                                                                    |
|-------------------------------|--------|:--------:|----------------------------------------------------------------------------------------------------------------|
| featureDisseminationExchange  | string |    Y     | Name of the AMQP exchange to store messages before shovel. <br /> **Only use when handling GeoJSON products.** |
| featureDisseminationQueueName | string |    Y     | Name of the AMQP queue to store messages before shovel. <br /> **Only use when handling GeoJSON products.**    |

```json title="FEM catalog DisseminationAckSender example"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DisseminationAckSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "{exchange name to use}"
      },
      {
        "name": "queueName",
        "type": "STRING",
        "value": "{queue name to use}"
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "{identifier of the recipient}"
      },
      {
        "name": "description",
        "type": "STRING",
        "value": "{plugin description}"
      },
      {
        "name": "directNotificationEnabled",
        "type": "BOOLEAN",
        "value": "{true or false}"
      },
      {
        "name": "featureDisseminationExchange",
        "type": "STRING",
        "value": "{exchange name to store ACK messages before shovel}"
      },
      {
        "name": "featureDisseminationQueueName",
        "type": "STRING",
        "value": "{queue name to store ACK messages before shovel}"
      }
    ]
  }
}
```

#### OAIS catalog usage

This plugin let you override following configuration:

| Name                      | Type   | Optional | Description                                                                                              |
|---------------------------|--------|:--------:|----------------------------------------------------------------------------------------------------------|
| aipDisseminationExchange  | string |    Y     | Name of the exchange to store messages before shovel. <br /> **Only use when handling OAIS products.**   |
| aipDisseminationQueueName | string |    Y     | Name of the AMQP queue to store messages before shovel. <br /> **Only use when handling OAIS products.** |

```json title="Example de configuration de plugin pour acquitter une diffusion de produits OAIS"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DisseminationAckSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "{exchange name to use}"
      },
      {
        "name": "queueName",
        "type": "STRING",
        "value": "{queue name to use}"
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "{identifier of the recipient}"
      },
      {
        "name": "description",
        "type": "STRING",
        "value": "{plugin description}"
      },
      {
        "name": "directNotificationEnabled",
        "type": "BOOLEAN",
        "value": "{true or false}"
      },
      {
        "name": "aipDisseminationExchange",
        "type": "STRING",
        "value": "{exchange name to store ACK messages before shovel}"
      },
      {
        "name": "aipDisseminationQueueName",
        "type": "STRING",
        "value": "{queue name to store ACK messages before shovel}"
      }
    ]
  }
}
```