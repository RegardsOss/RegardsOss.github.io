---
layout: classic-docs
title: AMQP starter
short-title: AMQP starter
---

# 1\. Configuration

```properties
spring.rabbitmq.addresses= 172.26.47.52:5672 # spring property indicating the message broker addresses, the amqp starter only can handle one address
spring.rabbitmq.username=guest # spring property indicating the username used to connect and manage the broker, for the amqp starter, this user must have permissions to add virtual hosts and permissions
spring.rabbitmq.password=guest # password of the user

regards.amqp.microservice.typeIdentifier="TOTO" # property used to name exchanges and queues private to this type of microservices
regards.amqp.microservice.instanceIdentifier="TOTO_inst1" # property used to name exchanges and queues only related to an instance (mainly used in broadcast)

regards.amqp.management.host= 172.26.47.52 # address of the managing plugin of the broker
regards.amqp.management.port= 15672 # port of the managing plugin of the broker
```

# 2\. Autoconfiguration

Starter autoconfigures:

- **IRabbitVirtualHostUtils** responsible for handling HTTP REST API of the message broker, for now only rabbitmq.
- **RegardsAmqpAdmin** responsible for administrating the message broker(create queues, exchanges, bindings)
- **RabbitAdmin** responsible for sending and receive message from the right tenant using **RegardsSimpleRoutingConnectionFactory**
- **RegardsSimpleRoutingConnectionFactory** responsible to administrate connections to the message broker
- **Poller** responsible for any polling request from the message broker to the application. It is the bean to `Autowired` when you want to poll messages.
- **Subscriber** responsible for any subscribing to the message broker. This is the bean to `Autowired` when you want to subscribe to an object.
- **IPublisher** responsible for any publishing from the application to the message broker. This is the bean to `Autowired` when you want to send messages to other microservices

# 3\. How to

## 3.1\. How to publish a message

To publish a message on the broker, you can use the **IPublisher** interface and it's **publish** method like so: `publisher.publish(foo, AmqpCommunicationMode.ONE_TO_ONE, AmqpCommunicationTarget.INTERNAL);`. Doing so, you will send a message representing the foo object to the exchange corresponding to the tenant parameterized in SecureContext at the time of invocation and with routing key set as the name of the parameter class for another module from the same microservice.

### Example

```java
 package fr.cnes.regards.example;

 public class Foo {
  private String content;

   public Foo(String content) {
     this.content=content;
   }
 }

 package fr.cnes.regards.example;

 import org.springframework.beans.factory.annotation.Autowired;
 import fr.cnes.regards.modules.core.amqp.IPublisher;

 public class Example {

    @Autowired
    private IPublisher publisher;

    public void publishExample() throws RabbitMQVhostException {
       Foo foo=new Foo("example");
       publisher.publish(foo, AmqpCommunicationMode.ONE_TO_ONE, AmqpCommunicationTarget.INTERNAL);
    }
 }
```

This example send a message, representing the foo object, on the broker with the routing key : `fr.cnes.regards.example.Foo`.

NOTE: you can also publish message with different priority thanks to `publish(T object, AmqpCommunicationMode amqpCommunicationMode, AmqpCommunicationTarget amqpCommunicationTarget, int priority)`

## 3.2\. How to subscribe to an object type

To subscribe to an object type, you can use the **Subcriber** class and it's **subscribeTo** method like so: `subscriber.subscribeTo(objectClass, handler, pAmqpCommunicationMode, pAmqpCommunicationTarget)`.

### Example

```java

  public class TestReceiver implements IHandler<TestEvent> {

    /**
     * message recovered from the broker
     */
    private TestEvent message;

    public TestReceiver() {

    }

    @Override
    public void handle(TenantWrapper<TestEvent> pMessage) {
        message = pMessage.getContent();
    }

    public TestEvent getMessage() {
        return message;
    }
  }

  public class SubscriberIT {
    public void init() {
          receiverOneToMany = new TestReceiver();

          try {
              subscriberOneToManyExternal.subscribeTo(TestEvent.class, receiverOneToMany,
                                                      AmqpCommunicationMode.ONE_TO_MANY,
                                                      AmqpCommunicationTarget.EXTERNAL);

          } catch (RabbitMQVhostException e) {
              LOGGER.error(e.getMessage(), e);

          }
      }

      public void testSubscribeToOneToManyExternal() {
          final TestEvent toSend = new TestEvent("test one to many");
          final TenantWrapper<TestEvent> sended = new TenantWrapper<TestEvent>(toSend, TENANT);
          LOGGER.info(SENDED + sended);
          SimpleResourceHolder.bind(rabbitTemplate.getConnectionFactory(), TENANT);

          rabbitTemplate.convertAndSend(
                                        amqpConfiguration.getExchangeName(TestEvent.class.getName(),
                                                                          AmqpCommunicationTarget.EXTERNAL),
                                        amqpConfiguration.getRoutingKey("", AmqpCommunicationMode.ONE_TO_MANY), sended,
                                        pMessage -> {
                                            final MessageProperties propertiesWithPriority = pMessage
                                                    .getMessageProperties();
                                            propertiesWithPriority.setPriority(0);
                                            return new Message(pMessage.getBody(), propertiesWithPriority);
                                        });

          SimpleResourceHolder.unbind(rabbitTemplate.getConnectionFactory());

          try {
              Thread.sleep(SLEEP_TIME);
          } catch (InterruptedException e) {
              LOGGER.error(SLEEP_FAIL, e);

          }
          LOGGER.info(RECEIVED + receiverOneToMany.getMessage());
      }
  }
```

## 3.3\. How to poll an object

To poll an object from the message broker, you can use **Poller** class and it's **poll** method like so: `poller.poll(pTenant, objectClass, pAmqpCommunicationMode, pAmqpCommunicationTarget)`. That will give you a TenantWrapper containing the tenant, in whom behalf the message was sent, and the content.

### Example

```java
  public void testPollOneToOneExternal() {
        final TenantWrapper<TestEvent> wrapperReceived;
        try {
            TestEvent sended= new TestEvent("message");
            publisher.publish(sended, AmqpCommunicationMode.ONE_TO_ONE, AmqpCommunicationTarget.EXTERNAL);
            //Assuming that TENANT represent the actual tenant
            wrapperReceived = poller.poll(TENANT, TestEvent.class, AmqpCommunicationMode.ONE_TO_ONE,
                                          AmqpCommunicationTarget.EXTERNAL);
            final TestEvent received = wrapperReceived.getContent();
        } catch (RabbitMQVhostException e) {
            final String msg = "Polling one to one Test Failed";
            LOGGER.error(msg, e);
            Assert.fail(msg);
        }
    }
```

## 3.4\. How to choose AmqpCommunicationMode

`AmqpCommunicationMode` is an enumeration used to handle communications mode according to rabbitmq implementation of broadcast.

For broadcasting an message towards multiple instances of subscribers or pollers, you should use `AmqpCommunicationMode.ONE_TO_MANY`.

If you just want the message to be consumed by one of the subscribers/pollers, then you should use `AmqpCommunicationMode.ONE_TO_ONE`.

## 3.5\. How to choose AmqpCommunicationTarget

`AmqpCommunicationTarget` is an enumeration used to handle scope of the communications.

If you want to send a message to other modules from your microservice, you should use `AmqpCommunicationTarget.INTERNAL`.

If you want to send a message to other modules outside of your microservice, you should use `AmqpCommunicationTarget.EXTERNAL`.

# 4\. Constraints on the used rabbitmq

## 4.1\. Regards namespace for rabbitmq

all Vhost defined and used by regards by regards ar prefixed by "Regards.amqp"

## 4.2\. Purpose of AMQP client

The only purpose of the AMQP client is to handle the multi tenancy communication with the message broker. That means creating virtual hosts on the broker dynamicly to ensure that each tenant's communications are isolated from the others'. Therefor, the user used by the application to interact with rabbitmq has to have rprivileges to create and modify virtual hosts.
