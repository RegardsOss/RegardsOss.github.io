---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/notifier/configuration/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure `rs-notifier` settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/rs-notifier-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

## Plugins configuration

To find out how to configure plugins, and in particular how to associate a recipient with a rule, check these pages :

- [Configure recipient plugins](../plugins/recipient-sender-plugins.md)
- [Configure rule plugins](../plugins/rule-matcher-plugins.md)
- [Associate recipients and rules](../plugins/notifier-intro-plugins.md)

## Example

```json title='rs-notifier configuration file example'
{
  "microservice": "rs-ingest",
  "modules": [
    {
      "module": {
        "id": "notifier",
        "name": "Notifier module",
        "description": "Notification reception and dissemination",
        "version": "1.1.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "RecipientSender",
            "label": "Recipient sender",
            "businessId": "RecipientSender",
            "version": "1.0.0",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "exchange",
                "type": "STRING",
                "value": "exchange-name"
              },
              {
                "name": "queueName",
                "type": "STRING",
                "value": "queue-name"
              },
              {
                "name": "recipientLabel",
                "type": "STRING",
                "value": "recipient-label"
              },
              {
                "name": "ackRequired",
                "type": "BOOLEAN",
                "value": "false"
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
            "active": false,
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
            "recipientIds": [
              "RecipientSender"
            ]
          }
        }
      ]
    }
  ]
}
```