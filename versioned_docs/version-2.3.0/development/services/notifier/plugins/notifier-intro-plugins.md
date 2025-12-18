---
id: backend-notifier-plugins-intro
title: Notifier plugins overview
sidebar_label: Overview
slug: /development/backend/services/notifier/plugins/intro
sidebar_position: 1
---

This section introduces you how to configure the `Notifier` microservice to send messages depending on the product 
content.

- [Recipient sender plugins](#recipient-sender-plugins) generates the payload to send and send it
- [Recipients / Rules association](#recipients--rules-association) allows to link a matcher rule to a Recipient sender
- [Rule matcher plugins](#rule-matcher-plugins) permits or not to diffuse a product based on its product content and
  metadata


## Recipient sender plugins

Sender plugins are used to define:

* Notification content (aka the payload)
* Recipients to notify
* Can be directly notified

[Check Recipient sender plugins guide](./recipient-sender-plugins.md) to see available implementation and their
configuration of this kind of plugin.

## Recipients / Rules association

In order to have a functional notification system, you can :
* Associate your Recipient sender plugins to your Rule matcher plugins.  
  **and/or**
* allow direct notification from your recipient plugin configuration

To associate your Recipient plugin to a Rule matcher plugin, you need to write an association for each of your Rule
matcher plugin:
```json
{
  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",
  "value": {
    "ruleId": "{businessId of rule plugin configuration}",
    "recipientIds": [
      "{businessId of recipient plugin configuration}"
    ]
  }
}
```

:::note
You can associate one rule matcher plugin to many recipient sender plugins.
:::

## Rule matcher plugins

Rules matcher plugins are used to define if a product should be sent according to product content and metadata.

[Check Rule matcher plugins guide](./rule-matcher-plugins.md) to see available implementation and 
configuration of this kind of plugin.

:::info What's next?
If the rule matcher plugin accepts the product to notification, it will send it to each **Recipient sender plugin**
associated to the current rule matcher plugin, following [the association ** Recipients / Rules**](#recipients--rules-association).
:::

:::note Number of association
Rule matcher plugins can be associated to `0 to N` Recipient sender plugins
:::

:::danger Notify without checking rule matcher
A recipient sender plugins can be configured to accept direct notifications. By doing so, the message won't be 
tested against Rule matcher plugins.
:::

