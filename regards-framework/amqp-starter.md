---
layout: classic-docs
title: AMQP starter
short-title: AMQP starter
categories:
  - regards-framework
---

# Configuration 

```properties
spring.rabbitmq.addresses= 172.26.47.52:5672 # spring property indicating the message broker addresses, the amqp starter only can handle one address
spring.rabbitmq.username=guest # spring property indicating the username used to connect and manage the broker, for the amqp starter, this user must have permissions to add virtual hosts and permissions
spring.rabbitmq.password=guest # password of the user

regards.amqp.microservice.typeIdentifier="TOTO" # property used to name exchanges and queues private to this type of microservices
regards.amqp.microservice.instanceIdentifier="TOTO_inst1" # property used to name exchanges and queues only related to an instance (mainly used in broadcast)

regards.amqp.management.host= 172.26.47.52 # address of the managing plugin of the broker
regards.amqp.management.port= 15672 # port of the managing plugin of the broker
```