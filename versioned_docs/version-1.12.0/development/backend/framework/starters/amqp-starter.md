---
id: backend-framework-starters-amqp
title: AMQP starter
slug: /development/backend/framework/starters/amqp/
---



## Purpose

This starter is used to enable multitenant messaging.

## Configuration

Add starter dependency to your POM (version depends on the BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>amqp-regards-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>amqp-regards</artifactId>
</dependency>
```

Dependency :

* [Multitenant starter](./multitenant-starter.md)

Prerequisites :

* **AMQP starter needs admin access on the server to manage virtual host**. At the moment, it relies on [RabbitMQ](https://www.rabbitmq.com/)

Properties :

```properties
# From multitenant starter, optional set of tenants to initialize at bootstrap during bean construction.
regards.bootstrap-tenants=

# RabbitMQ host
spring.rabbitmq.host=localhost
# RabbitMQ port.
spring.rabbitmq.port=5672
# Property indicating the username used to connect and manage the broker, for the
# AMQP starter, this user must have permissions to add virtual hosts and permissions
spring.rabbitmq.username=
# Password of the user
spring.rabbitmq.password=

# Virtual host management host
regards.amqp.management.host=localhost
# Virtual host management port
regards.amqp.management.port=15672
# Multitenancy messaging strategy
# SINGLE means that a single virtual host will share all messages from all tenants.
# MULTI means a virtual host is created for each tenant guaranteeing a total partitioning but increasing significantly memory and cpu consumption.
regards.amqp.management.mode=SINGLE

# Identification
# Microservice type identifier (used to restrict event cast)
# We advise you to use ${spring.application.name}.
regards.amqp.microservice.type-identifier=
# Microservice instance identifier (used for event broadcasting).
# Must be unique by microservice type to ensure all instances will receive an event
regards.amqp.microservice.instance-identifier=

# Enable AMQP transaction manager if no external transaction manager is available
# This property is only useful if no {@link PlatformTransactionManager} is provided by a database or else.
regards.amqp.internal.transaction=false
```

## Autoconfiguration

Starter autoconfigures:

* `IRabbitVirtualHostAdmin` to manage virtual hosts. Only RabbitMQ implementation exists at the moment.
* `IAmqpAdmin` to administrate the message broker(create queues, exchanges, bindings with proper names)
* `RabbitAdmin` to send and receive message from the right tenant using `MultitenantSimpleRoutingConnectionFactory`
* `MultitenantSimpleRoutingConnectionFactory` to manage virtual host connections
* `AmqpEventHandler` to listen to tenant creation or deletion events

For working with tenant messages or events :

* `IPoller` responsible for any polling request from the message broker to the application. It is the bean to `Autowired` when you want to poll messages.
* `ISubscriber` responsible for any subscribing to the message broker. This is the bean to `Autowired` when you want to subscribe to an object.
* `IPublisher` responsible for any publishing from the application to the message broker. This is the bean to `Autowired` when you want to send messages to other microservices.

For working with instance messages or events, you have to use `IInstancePoller`, `IInstanceSubscriber` and `IInstancePublisher`.

## How to

AMQP starter runs in a multitenant context so it relies on multitenant tenant resolution :

* A subscriber automatically subscribes to each tenant for an event using `ITenantResolver`.
* A publisher automatically publishes an event on current tenant using `IRuntimeTenantResolver`.
* A poller automatically polls an event on current tenant using `IRuntimeTenantResolver`.

Elements below are used to describe AMQP functionalities in following schemas.

![AMQP legend](/schemas/framework/amqp/amqp_tuto_legend.png)

:::info
Queue names are generated using microservice identification properties when required where
- **µs** is equivalent to microservice identifier property.
- **µsi** is equivalent to microservice instance identifier property.
:::

### How to publish a message

To publish a message on the broker, you have to use the `IPublisher` interface and its `publish` methods.

#### Broadcast a subscribable message

First, create the message (i.e. a simple POJO) implementing `ISubscribable`.
Annotate this message with `@Event` and define the event **target** (see below).

:::caution
Queue whose name is built with a microservice instance identifier is not totally safe. Indeed, if the corresponding microservice instance is stopped and never restarted, queue may not be consumed anymore and its messages lost. Be sure to be resilient with these types of messages!
:::

![Broadcast message](/schemas/framework/amqp/amqp_tuto_subscription_broadcast.png)

```java
@Event(target = Target.ALL)
public class HelloMessage implements ISubscribable {
}
```

Then publish the message :

```java
@Autowired
private IPublisher publisher;

public void publishHello() {
   HelloMessage message = new HelloMessage();
   publisher.publish(message);
}
```

#### Unicast a subscribable message

Create the message implementing `ISubscribable`.
Annotate this message with `@Event`, set mode to **UNICAST** and define the event **target** (see below).

![Unicast message](/schemas/framework/amqp/amqp_tuto_subscription_unicast.png)

#### Working message (unicast)

Working message is stored in a working queue and is consumed synchronously on-demand.

First, create the message implementing `IPollable`.
Annotate this message with `@Event` and define the event **target** (see below).

![Worker queue](/schemas/framework/amqp/amqp_tuto_worker_queues.png)

**A message is only handled by a single poller (i.e. worker).**

```java
@Event(target = Target.ALL)
public class PollMessage implements IPollable {

}
```

Then publish the message :

```java
@Autowired
private IPublisher publisher;

public void publishHello() {
   PollMessage message = new PollMessage();
   publisher.publish(message);
}
```

:::note
`IPublish` manages **message priority**. Just define the priority in the publish method.
:::

### How to subscribe to a subscribable message

To subscribe to a message, you have to use the `ISubscriber` interface and its `subscribeTo` method.

First, create a message handler implementing `IHandler` to listen to the message:

```java
public class HelloHandler implements IHandler<HelloMessage> {

  @Override
  public void handle(TenantWrapper<HelloMessage> wrapper) {
      // Retrieve your message from tenant wrapper
      HelloMessage message = wrapper.getContent();
      // Do something
  }
}
```

Then subscribe to the message :

```java
@Autowired
private ISubscriber subscriber;

public void subscribeToHello() {
   subscriber.subscribeTo(HelloMessage.class, new HelloHandler());
}
```

You can stop listener using `unsubscribeFrom` method.

### How to poll a pollable message

To poll a message, you have to use the `IPoller` interface and its `poll` method.

:::caution
Polling process requires a tenant! So before polling, you must guarantee a tenant is properly set.
:::

```java
@Autowired
private IPoller poller;

public void simplePollMessage() {
  TenantWrapper<PollMessage> wrapper = poller.poll(PollMessage.class);
  // Do something with the message
}
```

### Transaction

Transaction is supported through classic Spring `Transactional` annotation.

If en error occurs in a transaction, a message to publish won't be published, a pollable or subscribable message will be unacked and turn back to its queue.

#### External transaction

If a `PlatformTransactionManager` is on the classpath, AMQP will automatically synchronize its behaviour with an existing transaction.

#### Internal transaction

If no external `PlatformTransactionManager` exists, you can enable internal one with related property.

## Constraints on the use of RabbitMQ

### Namespace

All virtual hosts defined and used by REGARDS are prefixed by "regards".

### Purpose of AMQP client

The only purpose of the AMQP client is to handle the multi tenancy communication with the message broker. That means creating virtual hosts on the broker dynamically to ensure that each tenant's communications are isolated from the others. Therefore, the user used by the application to interact with RabbitMQ has to have privileges to create and modify virtual hosts.
