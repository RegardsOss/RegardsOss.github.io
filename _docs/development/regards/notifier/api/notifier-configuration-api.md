---
layout: classic-docs
title: Notifier configuration API
---

{% include toc.md %}

## Notifier configuration

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

> Be careful, import will overwrite an existing plugin configuration with same `business id`.
{: .tip .important}

{% include development/api/importexport/import-api.md %}

Configuration parameters :
 - `Reset`: You can configure to delete all previous configuration before import new one.
 - `RuleMatcher`: Configuration of rules based on [plugins](/development/regards/notifier/api/notifier-plugins/). Rules are used to define if a notification should be sent to associated RecipientSenders
 - `RecipientSender`: Configuration of notification senders based on [plugins](/development/regards/notifier/api/notifier-plugins/). Senders are used to define how to send notification to recipients.
 - `Rule/RecipientSenders assocation` : Configuration to associates one RuleMatcher to one or many RecipientSenders

Configure global reset parameter :
```json
{
 "key": "fr.cnes.regards.modules.notifier.dto.conf.NotifierConfigurationCleaner",
  "value": {
    "clean":true
  }
},
```

Configure plugins (Rule or RecipientSender) :
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
Configure RuleMatcher/RecipientSenders  assocation :
```json
{
  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
  "value": {
    "ruleId": "{MyRuleMatcher}",
    "recipientIds" : ["{MyRecipient}"]
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
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId":"RabbitMQSender",
            "label":"RabbitMQ Sender",
            "businessId":"RabbitMQSender",
            "version":"1.0.0",
            "priorityOrder":0,
            "active":true,
            "parameters":[
              {"name":"exchange", "type":"STRING", "value":"regards.geode-validation"},
              {"name":"queueName", "type":"STRING", "value":"regards.geode-validation"}
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId":"DefaultRuleMatcher",
            "label":"Rule by type",
            "businessId":"RuleByType",
            "version":"1.0.0",
            "priorityOrder":0,
            "active":true,
            "parameters":[
              {"name":"attributeValueToSeek", "type":"STRING", "value":"L0A_LR_Packet"},
              {"name":"attributeToSeek", "type":"STRING", "value":"type"}
            ]
          }
        },
        {
          "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
          "value": {
            "ruleId": "RuleByType",
            "recipientIds" : ["RabbitMQSender"]
          }
        }
      ]
    }
  ]
}
```

{% include development/api/importexport/export-api.md %}

{% include development/api/importexport/download-api.md %}

