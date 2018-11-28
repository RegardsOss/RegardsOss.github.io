---
layout: classic-docs
title: REGARDS framework starters
short-title: Framework building blocks (aka starters)
categories:
  - development
---

{% include toc.md %}

Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.

The starter enables the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects.

Sometimes, you have to provide your own bean to override default one. Simply create your own `Component` or `Configuration` bean! It will automatically have priority over starter one.

See latest [Spring documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter) for further details.

### Multitenancy

* [Multitenant starter](/development/framework/starters/multitenant-starter/)

> Most REGARDS starters are designed to handle multitenancy and depends on this base starter.
{: .tip .important}

### Authentication and authorization

* [Authentication starter](/development/framework/starters/authentication-starter/)
* [Security starter](/development/framework/starters/security-starter/)

### Microservice communications

* [AMQP starter](/development/framework/starters/amqp-starter/)
* [Cloud starter](/development/framework/starters/cloud-starter/)
* [Feign starter](/development/framework/starters/feign-starter/)

### Microservice

* [Microservice starter](/development/framework/starters/microservice-starter/)
* [Microservice core starter](/development/framework/starters/microservice-core-starter/)
* [Module starter](/development/framework/starters/module-starter/)

<!-- > Microservice logger artifact just centralizes logback default configuration.
> ```xml
> <dependency>
>  <groupId>fr.cnes.regards.framework</groupId>
>  <artifactId>microservice-logger</artifactId>
> </dependency>
> ```
{: .tip .plus} -->

### Business starters

* [GeoJSON starter](/development/framework/starters/geojson-starter/)
* [OAIS starter](/development/framework/starters/oais-starter/)

### JPA starters

* [JPA instance starter](/development/framework/starters/jpa-instance-starter/)
* [JPA multitenant starter](/development/framework/starters/jpa-multitenant-starter/)

### Tools

* [GSON starter](/development/framework/starters/gson-starter/)
* [HATEOAS starter](/development/framework/starters/hateoas-starter/)
* [Swagger starter](/development/framework/starters/swagger-starter/)
* [Encryption](/development/framework/starters/encryption-starter/)
