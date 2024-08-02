---
id: backend-rest-import-notifier-plugin-configuration
title: Import Notifier plugin configurations
sidebar_label: Import plugin conf
slug: /development/backend/notifier/guides/rest/import-plugin-configuration
---

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

:::danger
Be careful, import will overwrite an existing plugin configuration with same `business id`.
:::
### Import configuration

### Request

**URL**

`/microservice/configuration`

**URL template**

`/microservice/configuration`

**Method**

`POST`

**Headers**

`Authorization:Bearer {token}`  
`Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`  
`Accept:application/json`

**Data params**

Import your configuration file in multipart request using name `file`.

### Response

- **Code:** 201 CREATED


Configuration parameters :

- `resetBeforeImport`: You can configure to delete all previous configuration before import new one.
- `RuleMatcher`: Configuration of rules based on [plugins](../../plugins/rule-matcher-plugins.md). 
  Rules are used to define if a notification should be sent to associated RecipientSenders
- `RecipientSender`: Configuration of notification senders based on [plugins](../../plugins/recipient-sender-plugins.md). 
  Senders are used to define how to send notification to recipients.
- `Rule/RecipientSenders assocation` : Configuration to associates one RuleMatcher with one or many RecipientSenders

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
              {
                "name": "attributeToSeek", 
                "type": "STRING",
                "value": "type"
              }
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
### Export configuration

### Request

**URL**

`/microservice/configuration`

**URL template**

`/microservice/configuration`

**Method**

`GET`

**Headers**

`Authorization:Bearer {token}`  
`Content-Type:application/json;charset=UTF-8`  
`Accept:application/json`

**Data params**

None

### Response

- **Code:** 200 OK

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json`  
`Content-Disposition:attachment; filename="config-Test application.json"`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`

**Content:**

Template :

```json
{
  "microservice": "{microservice name}",
  "modules": [
    {
      "module": {
        "id": "{module id}",
        "name": "{module name}",
        "description": "{module description}",
        "version": "{module version}",
        "author": "{module author}",
        "legalOwner": "{module owner}",
        "documentation": "{module docu url}"
      },
      "configuration": [
        {
          "key": "{fully qualified class name}",
          "value": "{json}"
        }
      ]
    }
  ]
}
```

### Download configuration

To get configuration as a link, simply pass token in URL as follow :

**URL**

`/microservice/configuration?token={bearer}`

**Method**

`GET`
