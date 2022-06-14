---
id: backend-framework-starters
title: REGARDS framework starters 
sidebar_label: Introduction
slug: /development/backend/framework/starters/
---

Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.

The starter enables the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects.

Sometimes, you have to provide your own bean to override default one. Simply create your own `Component` or `Configuration` bean! It will automatically have priority over starter one.

See latest [Spring documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter) for further details.

### Multitenancy

* [Multitenant starter](../starters/multitenant/)

:::danger
Most REGARDS starters are designed to handle multitenancy and depends on this base starter.
:::

### Authentication and authorization

* [Authentication starter](../starters/authentication/)
* [Security starter](../starters/security/)

### Microservice communications

* [AMQP starter](../starters/amqp/)
* [Cloud starter](../starters/cloud/)
* [Feign starter](../starters/feign/)

### Microservice

* [Microservice starter](../starters/microservice/)
* [Microservice core starter](../starters/microservice-core/)
* [Module starter](../starters/module/)

:::note
Microservice logger artifact just centralizes logback default configuration.
```xml
<dependency>
<groupId>fr.cnes.regards.framework</groupId>
artifactId>microservice-logger</artifactId>
</dependency>
:::

### Business starters

* [GeoJSON starter](../starters/geojson/)
* [OAIS starter](../starters/oais/)

### JPA starters

* [JPA instance starter](../starters/jpa-instance/)
* [JPA multitenant starter](../starters/jpa-multitenant/)

### Tools

* [GSON starter](../starters/gson/)
* [HATEOAS starter](../starters/hateoas/)
* [Swagger starter](../starters/swagger/)
* [Encryption](../starters/encryption/)
