---
id: backend-notifier-overview
title: Overview
sidebar_label: Overview
slug: /development/backend/services/notifier/overview/
sidebar_position: 1
---

**Notifier** (or **rs-notifier**) is the microservice responsible for broadcasting messages to configured recipients.

This microservice is an integral part of the functional groups
[OAIS catalog services](../../../overview/functional-overview/03-oais-catalog-services.md) and
[GeoJson catalog service](../../../overview/functional-overview/04-geojson-catalog-services.md). In these two functional groups,
the notifier microservice is used to distribute catalog products to internal or external components.

When a JSON notification is received, the message is dispatched to configured recipients according to matching rules
that are configured.

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances     |

You can learn how the service works with the [How it works section](conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- [Publish a notification request](./api-guides/amqp/amqp-publish-request.md) shows you how to create a *Notification
  request* and sent it to Notifier
- **Browse** all [REST API available endpoints](./api-guides/rest/rs-notifier-api-swagger.mdx).

## Plugins configuration

See the following sections to learn how to use the plugins:

* [Notifier plugins overview](./plugins/notifier-intro-plugins.md) shows you how to configure Notifier. **Highly
  recommended**
* [Rule matchers guide](./plugins/rule-matcher-plugins.md)
* [Recipient senders guide](./plugins/recipient-sender-plugins.md)

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/notifier-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/notifier-import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-notifier).