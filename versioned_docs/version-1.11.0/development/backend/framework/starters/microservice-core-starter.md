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

* [Microservice starter](../microservice/)
  * [Multitenant starter](../multitenant/)
* [Module starter](../module/)
* [GSON starter](../gson/)
* [Security starter](../security/)
  * [Multitenant starter](../multitenant/)
  * [Authentication starter](../authentication/)
  * [AMQP starter](../amqp/)
* [Swagger starter](../swagger/)
* [Cloud starter](../cloud/)
