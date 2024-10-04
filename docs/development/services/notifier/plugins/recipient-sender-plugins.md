---
id: recipient-sender-notifier-plugins
title: Recipient sender plugins
sidebar_label: Recipient sender plugins
slug: /development/backend/services/notifier/plugins/recipient-sender
sidebar_position: 3
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

All the plugins implements
the [IRecipientNotifier interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-notifier/notifier/notifier-domain/src/main/java/fr/cnes/regards/modules/notifier/domain/plugin/IRecipientNotifier.java).

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Common Sender configuration

:::info Abstract class extension
Most of REGARDS OSS Plugins sender are extending
the [AbstractRabbitMQSender](https://github.com/RegardsOss/regards-plugins/blob/master/notifier-plugins/common-plugins/src/main/java/fr/cnes/regards/common/notifier/plugins/AbstractRabbitMQSender.java)
abstract class.  
This abstraction above plugins implementation provides a common configuration to manage a plugin that sends event to
RabbitMQ exchange.
:::

:::info
AMQP senders will create the queue and exchange on RabbitMQ **on the first message posted on the exchange**.  
If you want the exchange and queue to exist before that, you need to explicitly create it on RabbitMQ through the
RabbitMQ admin interface or inside your playbook inventory.
:::

Configuration parameters are:

| Name                      | Type    | Default Value                              | Optional | Description                                                                                                                                                                                                                              |
|---------------------------|---------|--------------------------------------------|:--------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| recipientLabel            | String  |                                            |    Y     | External service identifier we want to notify the products to - this information is sent back to the emitter that contacted Notifier<br /> When not specified, the emitter wont know what's the recipient label that received its events |
| description               | String  |                                            |    Y     | Recipient plugin description displayed in the REGARDS HMI                                                                                                                                                                                |
| exchange                  | String  |                                            |          | RabbitMQ exchange name to publish message to                                                                                                                                                                                             |
| queueName                 | String  |                                            |    Y     | RabbitMQ queue name to initialize                                                                                                                                                                                                        |
| queueDeadLetterRoutingKey | String  | `regards.DLQ` if queue needs to be created |    Y     | RabbitMQ dead letter routing key on the queue                                                                                                                                                                                            |
| directNotificationEnabled | boolean | `false`                                    |    Y     | When `true`, indicates this plugin can be used to send to the recipient directly without checking product content against Rule matcher plugins                                                                                           |
| blockingRequired          | boolean | `false`                                    |    Y     | When `true`, the sender will be informed that the notified resource must be blocked until the sender receives acknowledge from the recipient. Only then, the notified resource can be unlocked.                                          |

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

This plugin is designed to submit received features to the `LTA manager` service.

This plugin received a GeoJSON feature as an input and then send
[submission request](../../lta-manager/api-guides/amqp/amqp-submit-product.md)
to the `LTA manager` through AMQP.

:::warning
This plugin only supports GeoJSON products as input
:::

This plugin lets you override the following configuration :

| Name               | Type    | Optional | Description                                                                                                                                                                                                                                                               |
|--------------------|---------|:--------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dataType           | string  |    N     | Product datatype of the generated DTOs                                                                                                                                                                                                                                    |
| sessionNamePattern | string  |    Y     | Pattern to name the session on the dashboard. A regular <br/>expression can be used, in the following way `{<jsonPathToAccessProductType>}-#day(.*)` where the parameter <jsonPathToAccessProductType\> has to be replaced with the json path to access the product type. |
| recipientTenant    | string  |    Y     | Value of the recipient tenant if this one is different from the one sending the message.                                                                                                                                                                                  |
| replaceMode        | boolean |    N     | If `true`, the request is replaced if it already exists                                                                                                                                                                                                                   |

```json title="LtaRequestSender example"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "LtaRequestSender",
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
        "name": "dataType",
        "type": "STRING",
        "value": "{product datatype}"
      },
      {
        "name": "sessionNamePattern",
        "type": "STRING",
        "value": "{properties.type}-#day-example"
      },
      {
        "name": "recipientTenant",
        "type": "STRING",
        "value": "{recipient tenant}"
      },
      {
        "name": "replaceMode",
        "type": "STRING",
        "value": "{true or false}"
      },
      {
        "name": "dataType",
        "type": "STRING",
        "value": "{datatype value}",
        "dynamic": false
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "{identifier of the recipient}",
        "dynamic": false
      }
    ]
  }
}
```

### Worker Manager Sender

This plugin is designed to send processing requests to the `worker manager` service.

This plugin let you override the following configuration :

| Name               | Type   | Optional | Description                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------|--------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| sessionNamePattern | string |    Y     | Pattern to name the session on the dashboard. A regular <br/>expression can be used, in the following way `{<jsonPathToAccessProductType>}-#day(.*)` where the parameter <jsonPathToAccessProductType\> has to be replaced with the json path to access to the product type.<br /> If the session pattern is not provided, session information are retrieved from the request metadata. |
| contentType        | string |    N     | Type of the processing that will be used by the Worker Manager to send this request to the right Worker type.                                                                                                                                                                                                                                                                           |
| recipientTenant    | string |    Y     | Value of the recipient tenant if this one is different from the one sending the message. If not provided, the current tenant is used.                                                                                                                                                                                                                                                   |

```json title="WorkerManagerSender example"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "WorkerManagerSender",
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
        "name": "contentType",
        "type": "STRING",
        "value": "{processed product type}"
      },
      {
        "name": "sessionNamePattern",
        "type": "STRING",
        "value": "{properties.type}-#day-example"
      },
      {
        "name": "recipientTenant",
        "type": "STRING",
        "value": "{recipient tenant}"
      }
    ]
  }
}
```

Here is an example that send a product to the WorkerManager on the same instance as the FEM:

- No acknowledge required
- No direct notification allowed

```json title="Send notification to WorkerManager"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "WorkerManagerSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "regards.broadcast.fr.cnes.regards.modules.workermanager.dto.events.in.RequestEvent"
      },
      {
        "name": "contentType",
        "type": "STRING",
        "value": "<content type defined in the worker manager>"
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "<label of the process done by the worker>",
        "dynamic": false
      }
    ]
  }
}
```

Here is an example that send a product to the WorkerManager on the same instance as the FEM:

- Send notification to the exchange used by the Worker Manager
- `ackRequired` is defined to `true`, so the worker will acknowledge the dissemination. Moreover, `blockingRequired` is
  defined to `true`, which means the notification should prevent the emitter to allow product modification or deletion
- Administrators can send any product to this worker through HMI, as `directNotificationEnabled` is true and an
  HMI `description` is provided

```json title="Send notification to WorkerManager with acknowledge required, direct notification allowed"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "WorkerManagerSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "exchange",
        "type": "STRING",
        "value": "regards.broadcast.fr.cnes.regards.modules.workermanager.dto.events.in.RequestEvent"
      },
      {
        "name": "contentType",
        "type": "STRING",
        "value": "<content type defined in the worker manager>"
      },
      {
        "name": "blockingRequired",
        "type": "BOOLEAN",
        "value": true,
        "dynamic": false
      },
      {
        "name": "description",
        "type": "STRING",
        "value": "Send notification to <do something using a worker>",
        "dynamic": false
      },
      {
        "name": "directNotificationEnabled",
        "type": "BOOLEAN",
        "value": true,
        "dynamic": false
      },
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "<label of the process done by the worker>",
        "dynamic": false
      },
      {
        "name": "ackRequired",
        "type": "BOOLEAN",
        "value": true,
        "dynamic": false
      }
    ]
  }
}
```

### Dissemination ACK Sender

This plugin is designed to send acknowledge messages to OAIS catalog and FEM catalog.

:::danger
This plugin does not inherit from
the [AbstractRabbitMQSender](https://github.com/RegardsOss/regards-plugins/blob/master/notifier-plugins/common-plugins/src/main/java/fr/cnes/regards/common/notifier/plugins/AbstractRabbitMQSender.java),
so [Common Sender config](#common-sender-configuration) parameters are not available.
:::

:::danger
You need to define either properties to send to FEM catalog either properties to send to OAIS catalog
:::

Configuration parameters, common to GeoJSON FEM catalog or OAIS catalog usage, are:

| Name           | Type   | Default Value | Optional | Description                                                                                                                                                                                                                              |
|----------------|--------|---------------|:--------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| senderLabel    | String |               |          | Acknowledge sender label. Used by destination system to identify the current system                                                                                                                                                      |
| recipientLabel | String |               |          | External service identifier we want to notify the products to - this information is sent back to the emitter that contacted Notifier<br /> When not specified, the emitter wont know what's the recipient label that received its events |

#### GeoJSON FEM catalog usage

This plugin let you override following configuration:

| Name                                | Type    | Optional | Description                                                                                                                                                   |
|-------------------------------------|---------|:--------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| featureDisseminationExchange        | string  |    Y     | Name of the AMQP exchange to store messages before shovel. <br /> **Only use when handling GeoJSON products.**                                                |
| featureDisseminationQueueName       | string  |    Y     | Name of the AMQP queue to store messages before shovel. <br /> **Only use when handling GeoJSON products.**                                                   |
| featureDisseminationUseDedicatedDlq | boolean |    Y     | When true, uses the `featureDisseminationQueueName` value and adds `.DLQ` at the end to use it as the DLQ name. When false (default value), use `regards.DLQ` |

```json title="FEM catalog DisseminationAckSender example"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DisseminationAckSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "2.0.0",
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
        "name": "senderLabel",
        "type": "STRING",
        "value": "{name of current platform used on destination system to acknowledge the dissemination}"
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

| Name                      | Type    | Optional | Description                                                                                                                                               |
|---------------------------|---------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| aipDisseminationExchange  | string  |    Y     | Name of the exchange to store messages before shovel. <br /> **Only use when handling OAIS products.**                                                    |
| aipDisseminationQueueName | string  |    Y     | Name of the AMQP queue to store messages before shovel. <br /> **Only use when handling OAIS products.**                                                  |
| aipQueueDedicatedDlq      | boolean |    Y     | When true, uses the `aipDisseminationQueueName` value and adds `.DLQ` at the end to use it as the DLQ name. When false (default value), use `regards.DLQ` |

```json title="Example de configuration de plugin pour acquitter une diffusion de produits OAIS"
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DisseminationAckSender",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "2.0.0",
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
        "name": "senderLabel",
        "type": "STRING",
        "value": "{name of current platform used on destination system to acknowledge the dissemination}"
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

## Common issue

### Error while sending notification to receiver

If the RabbitMQ sender plugin fails to send the notification with the error

```
Error while sending notification to receiver:
inequivalent arg 'x-dead-letter-routing-key' for queue 'xxxx' in vhost 'regards.multitenant.manager': received 'yyyy' but ...
```

It means that your Notifier configuration is wrong and does not match with the real queue. Check your queue and
specifically the DLX and DLK attributes and use these values inside the Notifier configuration. 