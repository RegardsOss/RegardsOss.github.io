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

* [Multitenant starter](multitenant-starter.md)

:::danger
Most REGARDS starters are designed to handle multitenancy and depends on this base starter.
:::

### Authentication and authorization

* [Authentication starter](authentication-starter.md)
* [Security starter](security-starter.md)

### Microservice communications

* [AMQP starter](amqp-starter.md)
* [Cloud starter](cloud-starter.md)
* [Feign starter](feign-starter.md)

### Microservice

* [Microservice starter](microservice-starter.md)
* [Microservice core starter](microservice-core-starter.md)
* [Module starter](module-starter.md)

:::note
Microservice logger artifact just centralizes logback default configuration.
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>microservice-logger</artifactId>
</dependency>
```

### Business starters

* [GeoJSON starter](geojson-starter.md)
* [OAIS starter](oais-starter.md)

### JPA starters

* [JPA instance starter](jpa-instance-starter.md)
* [JPA multitenant starter](jpa-multitenant-starter.md)

### Tools

* [GSON starter](gson-starter.md)
* [HATEOAS starter](hateoas-starter.md)
* [Swagger starter](swagger-starter.md)
* [Encryption](encryption-starter.md)
