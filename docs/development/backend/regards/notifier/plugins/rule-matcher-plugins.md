---
id: rule-matcher-notifier-plugins
title: Rule matcher plugins
sidebar_label: Rule matcher plugins
slug: /development/backend/services/notifier/plugins/rule-matcher
---

This guide introduces you how to configure Rule matcher plugins.  
These plugins allow to define if a product should be sent according to its content and metadata.

Here is the list of documented plugins:

- [Default Rule Matcher](#default-rule-matcher) allows sending a notification if its content json properties match 
  specific values
- [Lucene Rule Matcher](#lucene-rule-matcher) allows sending a notification if its content or its metadata match 
  given Lucene expressions

_To import your plugin configurations to Notifier, you
need [update microservice configuration using REST API](../api-guides/rest/rest-import-plugins-conf.md)_

### Default Rule Matcher

This rule matcher allows to check into notification content if a json property matches given specific value. If so, the
notification is sent to associated Recipient sender plugin(s).  
Configuration parameters are:

| Name                 | Type   | Description                                                |
|----------------------|--------|------------------------------------------------------------|
| attributeToSeek      | String | attribute name to search for the notification json content |
| attributeValueToSeek | String | attribute value to match                                   |

```json title='Default Rule Matcher plugin configuration example'
 {
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DefaultRuleMatcher",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "attributeToSeek",
        "type": "STRING",
        "value": "{value to match}"
      },
      {
        "name": "attributeValueToSeek",
        "type": "STRING",
        "value": "{attribute to search for}"
      }
    ]
  }
}
```

### Lucene Rule Matcher

This rule matcher allows to check if notification content or metadata matches given lucene expression. If so,
the notification is sent to associated Recipient sender plugin(s).
Configuration parameters are:

| Name          | Type   | Description                                                |
|---------------|--------|------------------------------------------------------------|
| payload_rule  | String | Lucene expression to seek inside the payload of the input  |
| metadata_rule | String | Lucene expression to seek inside the metadata of the input |

:::info Lucene queries
You can check the [Lucene guide](../../../../appendices/02-create-lucene-query.md) to create your lucene query
:::

```json title='Lucene Rule matcher plugin configuration example'
 {
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "LuceneRuleMatcher",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "payload_rule",
        "type": "STRING",
        "value": "{lucene rule}"
      },
      {
        "name": "metadata_rule",
        "type": "STRING",
        "value": "{lucene rule}"
      }
    ]
  }
}
```
