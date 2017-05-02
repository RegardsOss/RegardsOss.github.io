---
layout: classic-docs
title: AMQP starter
short-title: AMQP starter
---

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>amqp-regards-starter</artifactId>
</dependency>
```

Dependency :
- [Multitenant starter](/regards-framework/starters/multitenant-starter/)

Prerequisites :
- AMQP starts needs admin access on the server

```properties
# RabbitMQ host
spring.rabbitmq.host=localhost
# RabbitMQ port.
spring.rabbitmq.port=5672
# Property indicating the username used to connect and manage the broker, for the
# AMQP starter, this user must have permissions to add virtual hosts and permissions
spring.rabbitmq.username=
# Password of the user
spring.rabbitmq.password=

# Microservice type identifier (used to restrict event cast)
regards.amqp.microservice.type-identifier=
# Microservice instance identifier (used for event broadcasting).
# Must be unique by microservice type to ensure all instances will receive an event
regards.amqp.microservice.instance-identifier=

# Virtual host management host
regards.amqp.management.host=localhost
regards.amqp.management.port=15672

# Enable AMQP transaction manager if no  external transaction manager is available
regards.amqp.internal.transaction=false
```

# 2\. Autoconfiguration

Starter autoconfigures:

- `IRabbitVirtualHostAdmin` to manage virtual hosts. Only RabbitMQ implementation exists at the moment.
- `RegardsAmqpAdmin` to administrate the message broker(create queues, exchanges, bindings with proper names)
- `RabbitAdmin` to send and receive message from the right tenant using `MultitenantSimpleRoutingConnectionFactory`
- `MultitenantSimpleRoutingConnectionFactory` to manage virtual host connections

For working with tenant messages or events :

- `IPoller` responsible for any polling request from the message broker to the application. It is the bean to `Autowired` when you want to poll messages.
- `ISubscriber` responsible for any subscribing to the message broker. This is the bean to `Autowired` when you want to subscribe to an object.
- `IPublisher` responsible for any publishing from the application to the message broker. This is the bean to `Autowired` when you want to send messages to other microservices.

For working with instance messages or events, you have to use `IInstancePoller`, `IInstanceSubscriber` and `IInstancePublisher`.

# 3\. How to

AMQP starter runs in a multitenant context so it relies on multitenant tenant resolution :
- A subscriber automatically subscribes to each tenant for an event using `ITenantResolver`.
- A publisher automatically publishes an event on current tenant using `IRuntimeTenantResolver`.
- A poller automatically polls an event on current tenant using `IRuntimeTenantResolver`.

## 3.1\. How to publish a message

To publish a message on the broker, you have to use the `IPublisher` interface and its `publish` methods.

### Broadcast a message

First, create the message (i.e. a simple POJO) implementing `ISubscribable`.
Annotate this message with `@Event` and define the target of the event :
- ALL to broadcast to all subscribers,
- MICROSERVICE to only broadcast to instances of the same microservice type.

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
### Working message (unicast)

Working message is stored in a working queue and is consumed synchronously on-demand.

First, create the message implementing `IPollable`.
Annotate this message with `@Event` and define the target of the event :
- ALL to be polled by any microservice instance,
- MICROSERVICE to only be polled by an instance of the same microservice type.

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

NOTE: `IPublish` manages message priority. Just define the priority in the publish method.

## 3.2\. How to subscribe to an `ISubscribable` message

To subscribe to a message, you have to use the `ISubscriber` interface and its `subscribeTo` method.

First, create a message handler implementing `IHandler` to listen to the message:

```java
public class HelloHandler implements IHandler<HelloMessage> {

  @Override
  public void handle(TenantWrapper<HelloMessage> pWrapper) {
      // Retrieve your message
      HelloMessage message = pWrapper.getContent();
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

NOTE: you can stop listener using `unsubscribeFrom` method.

## 3.3\. How to poll an `IPollable` message

### Simple polling

To poll a message, you have to use the `IPoller` interface and its `poll` method.
While polling, you have to manage tenant connection resolution through `bind` and `unbind` methods.
In order to guarantee unbinding, you have to use a try-finally block.

NOTE : binding and unbinding are thread safe.

```java
@Autowired
private IPoller poller;

public void simplePollMessage() {
  TenantWrapper<PollMessage> wrapper = poller.poll(PollMessage.class);
  // Do something with the message
}
```

## 3.4. Transaction

Transaction is supported through classic Spring `Transactional` annotation while publishing and polling message.

If en error occurs in a transaction, a message to publish won't be published and a message to poll won't be acknowledge and will be returned to the broker.

### External transaction

If a `PlatformTransactionManager` is on the classpath, AMQP will automatically synchronize its behaviour with an existing transaction.

### Internal transaction

If no external `PlatformTransactionManager` exists, you can enable internal one with related property.

# 4\. Constraints on the used rabbitmq

## 4.1\. Regards namespace for rabbitmq

All virtual hosts defined and used by REGARDS are prefixed by "regards".

## 4.2\. Purpose of AMQP client

The only purpose of the AMQP client is to handle the multi tenancy communication with the message broker. That means creating virtual hosts on the broker dynamically to ensure that each tenant's communications are isolated from the others. Therefore, the user used by the application to interact with rabbitmq has to have privileges to create and modify virtual hosts.
