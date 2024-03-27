---
id: backend-notifier-overview
title: Notifier microservice
sidebar_label: Overview
slug: /development/backend/services/notifier/overview/
---

`Notifier` responsibilities:
*   Receive JSON notification,
*   Dispatch them to various recipients according to matching rules.

## Plugins configuration

* [Notifier plugins overview](plugins/notifier-intro-plugins.md) shows you how to configure Notifier. **Highly recommended**
* [Rule matchers guide](plugins/rule-matcher-plugins.md)
* [Recipient senders guide](plugins/recipient-sender-plugins.md)

### API Guides

- [Publish a notification request](./api-guides/amqp/amqp-publish-request.md) shows you how to create a *Notification 
  request* and sent it to Notifier

### REST API

- The [microservice REST API](./api-guides/rest/rs-notifier-api-swagger.mdx) auto generated using OpenAPI.
- The [import plugin configuration REST API](./api-guides/rest/rest-import-plugins-conf.md) to configure notifier 
  plugins.

### Architecture

**To learn more about how the microservice is designed**, refer to the following
documentation [notifier architecture](./architecture.md).
