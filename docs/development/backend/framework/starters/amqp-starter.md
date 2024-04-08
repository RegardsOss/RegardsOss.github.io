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

To listen to AMQP events :

* `IHandler` interface to listen to single events.
* `IBatchHandler` interface to listen to batch of events.

## DLX / DLQ

In the AMQP usage implemented by REGARDS, a dead-letter queue is a special queue that contains **valid messages** that could not be
processed due to unexpected temporary errors (e.g. database not available). Messages from this queue can be later moved back
to their origin queues to be processed again.

There is one global DLQ named `regards.DLQ` and dedicated DLQs directly linked to specific queues. By default, all queues are linked
to dedicated DLQs.

## Retry functionality

The REGARDS AMQP framework provides the possibility to implement an automatic retry of valid batch messages that could
not be processed successfully. If the retry is enabled in the message batch handler and a temporary unexpected error
occurs (e.g. the database is not accessible temporarily) the messages will be sent back to their origin queue after several
attempts spaced out over time. If the number of attempts is exhausted, the message will be rejected to its
corresponding dead-letter queue (DLQ).

:::info
For the moment, the retry feature can only be activated on `IBatchHandler` implementations.
:::

#### Architecture

When a message is retried, it is sent to the global `retry-exchange` of type `x-delayed-message-exchange` (refer to
[rabbitmq-delayed-message-exchange plugin documentation](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange)) that
will retain it in its local database during a configurable delay. After that period, the message is sent back to its
origin queue with the corresponding routing key.

The number of retries and delays are configurable through the `regards.amqp.retry.delayAttempts` property, which is a
list of
`java.time.Duration`. The default value of the property is `regards.amqp.retry.delayAttempts=5s,30s,2m,10m`. Between each attempts, the `RetryBatchMessageHandler` service will
determine if the maximum number of attempts is reached by retrieving the `x-retries` header and compare it to the
size of the property mentioned. If the maximum is not reached, the message will be published again to the
`retry-exchange` with a delay that corresponds to its current retry number. If the maximum is reached, the message
will be published to the DLQ, it can be the global DLQ or a dedicated DLQ, depending on the value of
`IBatchHandler#isDedicatedDLQEnabled()` configured in the message handler.

![amqp architecture](/schemas/framework/amqp/amqp_routing_architecture.png)

:::danger
Make sure only **one transaction** is used when the retry option is enabled. In fact, all the
messages of the batch will be retried as it is not possible to know which message has failed. Multiple transactions may
lead to unpredictable behaviours because the same message would be processed several times in case of retry.
:::

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

### How to validate a message

The `IBatchHandler` interface provides a method named `validate()` to validate incoming messages individually. To use it, 
override the method and return the object `Errors` from the spring framework. 

If there are no errors, the message is considered as valid and continues its workflow. Otherwise, the message is 
denied and can eventually lead to the publishing of response messages if implementations of the methods 
`buildDeniedResponseForNotConvertedMessage` or `buildDeniedResponseForInvalidMessage` are provided.

### How to change the DLQ queue link

By default, all queues are linked to dedicated DLQs. To disable this feature, override the isDedicatedDLQEnabled() method available
from the `IBatchHandler` interface and set the return value to false.

:::danger
You will have to migrate the targetted queue if you change its DLQ queue link.
:::

### How to use the retry functionality

#### Implementation

To activate the retry system, you just have to override the `isRetryEnabled` method available from IHandler interface
and return `true`.
The failed messages will then be automatically handled in `RetryBatchMessageHandler`.

To customize the number of retries and the delay between them, add the property
`regards.amqp.retry.delayAttempts` in your spring boot configuration. It consists of a list of
`java.time.Duration`. For example, if you want to retry failed messages three times maximum with one minute between each
attempts define the property as following `regards.amqp.retry.delayAttempts=1m,2m,3m`.

Refer to the [Retry functionality section](#retry-functionality) to have more information on the retry system.

:::info
For the moment, the retry feature can only be activated on BatchHandler listeners.
:::

:::danger
As explained in the [Retry functionality section](#retry-functionality), make sure to use only **one transaction** when the retry option is enabled.
:::

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
