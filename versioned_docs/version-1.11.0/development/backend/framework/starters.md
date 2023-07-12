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

* [Multitenant starter](./starters/multitenant-starter.md)

:::danger
Most REGARDS starters are designed to handle multitenancy and depends on this base starter.
:::

### Authentication and authorization

* [Authentication starter](./starters/authentication-starter.md)
* [Security starter](./starters/security-starter.md)

### Microservice communications

* [AMQP starter](./starters/amqp-starter.md)
* [Cloud starter](./starters/cloud-starter.md)
* [Feign starter](./starters/feign-starter.md)

### Microservice

* [Microservice starter](./starters/microservice-starter.md)
* [Microservice core starter](./starters/microservice-core-starter.md)
* [Module starter](./starters/module-starter.md)

:::note
Microservice logger artifact just centralizes logback default configuration.
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>microservice-logger</artifactId>
</dependency>
```

### Business starters

* [GeoJSON starter](./starters/geojson-starter.md)
* [OAIS starter](./starters/oais-starter.md)

### JPA starters

* [JPA instance starter](./starters/jpa-instance-starter.md)
* [JPA multitenant starter](./starters/jpa-multitenant-starter.md)

### Tools

* [GSON starter](./starters/gson-starter.md)
* [HATEOAS starter](./starters/hateoas-starter.md)
* [Swagger starter](./starters/swagger-starter.md)
* [Encryption](./starters/encryption-starter.md)
