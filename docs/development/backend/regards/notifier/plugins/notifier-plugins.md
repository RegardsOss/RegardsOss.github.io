---
id: backend-notifier-plugins
title: Notifier plugins
sidebar_label: Notifier 
slug: /development/backend/services/notifier/plugins/
---

## Rule matcher plugins

Rules are used to define if a notification should be sent to associated RecipientSenders.

`DefaultRuleMatcher :`  
 This rule matcher allows to check into notification content if a json property match a specific value. If so,  the notification is sent to associated senders.  
 Configuration parameters are :
 - attributeToSeek : attribut name to search for the notification json content. 
 - attributeValueToSeek : attribut value to match.

 To configure this plugin use the here  under configuration block in import module [configuration](../api/configuration/)

```json
 {
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId":"DefaultRuleMatcher",
    "label":"{label}",
    "businessId":"{uniqueIdentifier}",
    "version":"1.0.0",
    "priorityOrder":0,
    "active":true,
    "parameters":[
      {"name":"attributeValueToSeek", "type":"STRING", "value":"{attribute to searh for}"},
      {"name":"attributeToSeek", "type":"STRING", "value":"{value to match}"}
    ]
  }
}      
```

`LuceneRuleMatcher :`  
This rule matcher allows to check the given lucene expression match the notification json object content. If so, the notification is sent to associated senders.
Configuration parameters are :
 - luceneRule : Lucene expression to seek [example](../../../../appendices/lucene-query)

 To configure this plugin use the here  under configuration block in import module [configuration](../api/configuration/)

```json
 {
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId":"LuceneRuleMatcher",
    "label":"{label}",
    "businessId":"{uniqueIdentifier}",
    "version":"1.0.0",
    "priorityOrder":0,
    "active":true,
    "parameters":[
      {"name":"luceneRule", "type":"STRING", "value":"{lucene rule}"},
    ]
  }
}      
```


## Recipient sender plugins

Senders are used to define how to send notification to recipients.

`RabbitMQSender :`  
This  sender is used to send notification on a specific RabbitMQ couple exchange/queue with no transformation applied to the input.  
Configuration parameters are :
 - exchange : Name  of the  exchange to use
 - queueName : Name of the queue to use

 To configure this plugin use the here  under configuration block in import module [configuration](../api/configuration/)

```json
 {
     "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
     "value": {
     "pluginId":"RabbitMQSender",
     "label":"{label}",
     "businessId":"{uniqueIdentifier}",
     "version":"1.0.0",
     "priorityOrder":0,
     "active":true,
     "parameters":[
       {"name":"exchange", "type":"STRING", "value":"{exchange name to use}"},
       {"name":"queueName", "type":"STRING", "value":"{queue name to use}"}
     ]
   }
},
```
## Recipients / Rules association

In order to have a functional notification system, the last configuration to make is to associate your recipients to your rules. You can associate one rule too many recipients.
To do so, please use the here under configuration block in import module [configuration](../api/configuration/)

```json
{
  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
  "value": {
     "ruleId": "{businessId of rule configuration}",
     "recipientIds" : ["{businessId of recipient configuration}"]
  }
}
```
