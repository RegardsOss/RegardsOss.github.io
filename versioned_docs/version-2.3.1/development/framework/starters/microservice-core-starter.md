---
id: backend-framework-starters-microservice-core
title: Microservice core starter
slug: /development/backend/framework/starters/microservice-core/
---


## Purpose

This starter is just an utility wrapper for all REGARDS microservice base dependencies.

## Configuration

Add starter dependency to your POM (version depends on the BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>microservice-core-starter</artifactId>
</dependency>
```

Dependencies :

* [Microservice starter](microservice-starter.md)
  * [Multitenant starter](multitenant-starter.md)
* [Module starter](module-starter.md)
* [GSON starter](gson-starter.md)
* [Security starter](security-starter.md)
  * [Multitenant starter](multitenant-starter.md)
  * [Authentication starter](authentication-starter.md)
  * [AMQP starter](amqp-starter.md)
* [Swagger starter](swagger-starter.md)
* [Cloud starter](cloud-starter.md)
