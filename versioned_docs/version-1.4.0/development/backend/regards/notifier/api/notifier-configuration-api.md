---
id: backend-notifier-configuration-api
title: Notifier configuration
sidebar_label: Notifier configuration
slug: /development/backend/notifier/api/configuration/
---

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

:::danger
Be careful, import will overwrite an existing plugin configuration with same `business id`.
:::

{@import importexport/import-api.md}

Configuration parameters :

- `resetBeforeImport`: You can configure to delete all previous configuration before import new one.
- `RuleMatcher`: Configuration of rules based on [plugins](../../plugins#rule-matcher-plugins). Rules are used to define if a notification should be sent to associated RecipientSenders
- `RecipientSender`: Configuration of notification senders based on [plugins](../../plugins#recipient-sender-plugins). Senders are used to define how to send notification to recipients.
- `Rule/RecipientSenders assocation` : Configuration to associates one RuleMatcher to one or many RecipientSenders

```json
{
  "microservice": "rs-notifier",
  "modules": [
    {
      "module": {
        "id": "notifier"
      },
      "resetBeforeImport":  true,
      "configuration": [...]
    }
}
```

Configure global reset parameter :

Setting the `resetBeforeImport` parameter to true to reset all previous configuration of notifier before creating the imported one.

Configure plugins (Rule or RecipientSender) :

Add the here under part in the configuration property of the import configuration file :

```json
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId":"{pluginId}",
    "label":"{label}",
    "businessId":"{MyOwnPluginConfiguration}",
    "version":"1.0.0",
    "priorityOrder":0,
    "active":true,
    "parameters":[
      {"name":"{parameterName}", "type":"{parameterType}", "value":"{parameterValue}"}
    ]
  }
},
```

Configure RuleMatcher/RecipientSenders assocation :

Add the here under part in the configuration property of the import configuration file :

```json
{
  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
  "value": {
    "ruleId": "{MyRuleMatcher}",
    "recipientIds": ["{MyRecipient}"]
  }
}
```

#### Example of configuration file to import

```json
{
  "microservice": "rs-notifier",
  "modules": [
    {
      "module": {
        "id": "notifier"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "RabbitMQSender",
            "label": "RabbitMQ Sender",
            "businessId": "RabbitMQSender",
            "version": "1.0.0",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "exchange",
                "type": "STRING",
                "value": "regards.geode-validation"
              },
              {
                "name": "queueName",
                "type": "STRING",
                "value": "regards.geode-validation"
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "DefaultRuleMatcher",
            "label": "Rule by type",
            "businessId": "RuleByType",
            "version": "1.0.0",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "attributeValueToSeek",
                "type": "STRING",
                "value": "L0A_LR_Packet"
              },
              { "name": "attributeToSeek", "type": "STRING", "value": "type" }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
          "value": {
            "ruleId": "RuleByType",
            "recipientIds": ["RabbitMQSender"]
          }
        }
      ]
    }
  ]
}
```

#### Disable a configured rule

In order to disable a configured rule you can import the same configuration file changing the `active` value from true to false.

```json
{
  "microservice": "rs-notifier",
  "modules": [
    {
      "module": {
        "id": "notifier"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "DefaultRuleMatcher",
            "label": "Rule by type",
            "businessId": "RuleByType",
            "version": "1.0.0",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "attributeValueToSeek",
                "type": "STRING",
                "value": "L0A_LR_Packet"
              },
              { "name": "attributeToSeek", "type": "STRING", "value": "type" }
            ]
          }
        }
      ]
    }
  ]
}
```

{@import importexport/export-api.md}

{@import importexport/download-api.md}
