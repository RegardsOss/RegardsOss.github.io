---
id: concepts-amqp-api
title: Microservices AMQP API
sidebar_label: AMQP API
slug: /development/concepts/amqp-api/
---

## Description

The Regards **AMQP API** should be used to **submit large volume of requests** or to **subscribe on events** that
appears on Regards system. Many REGARDS microservices provide an **AMQP API**.

You can connect to the [RabbitMQ](https://www.rabbitmq.com/) server used by the instance of REGARDS to interact with the
**AMQP API** of that instance.

:::info Service documentation
On every REGARDS service documentation, you will find **API GUIDES** that describes main interfaces with detailed
exemple of requests and responses messages.
:::

## How to use

### Things to get

To subscribe or to submit messages, you need to know :

- Which RabbitMQ **virtual Host** I need to connect to ?
- Which **exchange** I need to subscribe to ?
- Which **exchange** I need to submit messages to ?
- What is the **payload** I need to send or receive ?
- What is the **address** of the RabbitMQ server ? Does it use a **TLS** certificate ?

### Virtual Hosts

By default, Regards defines two main **Virtual Hosts** on its RabbitMQ server :

- `regards.instance.manager` is dedicated to [instance microservices](03-multitenant.md) (like
  [rs-admin-instance](../backend/regards/admin-instance/overview.md)).
- `regards.multitenant.manager` is dedicated to all tenants and used by [project microservices](03-multitenant.md) (like
  [rs-admin](../backend/regards/admin/admin.md)). This is the **main virtual host** that should be used by external
  systems and applications.

:::info
Most of the time, you will use `regards.multitenant.manager` virtual host.
:::

### Payload, exchange and queues informations

On the REGARDS Developers web documentation, you will find guides for main AMQP interfaces, with detailed exemple of
requests and responses to help you to interact with REGARDS.

Every guides provides:

- Payload and state machines
- Exchange names to submit messages to
- Exchange names where REGARDS sends response events, status events...
  see [Subscribe to Regards system events](#subscribe-to-regards-published-events).

For example, here
is [the guide to publish OAIS product to the OAIS service](../backend/regards/ingest/amqp/ingest-amqp-publish-product.mdx).

### Publish message to REGARDS

Published messages on `regards.multitenant.manager` Virtual Host must contain headers properties :

- `regards.tenant` : Define the tenant sender of the message.
- `regards.type` : Define the type of the message body (Java class of the Data Transfer Object or DTO)

Regards messages are all published with **Json** formatted content.

:::note
If you publish on `regards.instance.manager` Virtual Host, you do not need to define the `regards.tenant` parameter.
:::

### Subscribe to Regards published events

REGARDS microservices use AMQP api to send events to subscriber(s). For exemple, after a request is sent to a
microservice,
REGARDS will send back a AMQP event with request status.

To subscribe to those events, you need to refer to the service associated **AMQP Guide** to known on which **Exchange**
the service will send those events then subscribe to this exchange by :

- Creating a **custom queue** for your purpose
- **Bind** your custom queue to the related exchange

To do so, you can manually create your queue and bind it to the exchange through RabbitMQ administrator HMI or you can
use your Regards instance deployment inventory. To learn more about RabbitMQ additional queues and exchanges
configuration see [RabbitQ advanced setup](../../setup/advanced/swarm-rabbitmq.md)

### REGARDS published event exemple

Here under you can find an exemple of message sent by Regards in Json format.

`Properties section` contains main RabbitMQ mandatory messages properties as describe
on [RabbitMQ documentation](https://www.rabbitmq.com/docs/publishers#message-properties).  
`Headers section` contains Regards additional properties.  
`Payload section` is the message Body.

 ```json
 {
  "properties": {
    "app_id": "REGARDS",
    "timestamp": 1722267016,
    "priority": 1,
    "devivery_mode": 2,
    "content_encoding": "UTF-8",
    "content_type": "application/json",
    "headers": {
      "regards.tenant": "project1",
      "regards.type": "fr.cnes.regards.modules.workermanager.amqp.events.out.ResponseEvent"
    }
  },
  "payload": {
    "someAttribute": "someValue"
  }
}
 ```

## More

To learn more on how REGARDS microservice manages their **exchanges** and **queues**,
see [Regards AMQP Starter](../backend/framework/starters/amqp-starter.md).

To learn how to interface your application with RabbitMQ server
see [RabbitMQ tutorials](https://www.rabbitmq.com/tutorials).

