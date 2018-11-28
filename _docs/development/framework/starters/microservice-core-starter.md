---
layout: classic-docs
title: Microservice core starter
short-title: Microservice core starter
---

{% include toc.md %}

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

* [Microservice starter](/development/framework/starters/microservice-starter/)
  * [Multitenant starter](/regards-framework/starters/multitenant-starter/)
* [Module starter](/development/framework/starters/module-starter/)
* [GSON starter](/development/framework/starters/gson-starter/)
* [Security starter](/development/framework/starters/security-starter/)
  * [Multitenant starter](/regards-framework/starters/multitenant-starter/)
  * [Authentication starter](/development/framework/starters/authentication-starter/)
  * [AMQP starter](/development/framework/starters/amqp-starter/)
* [Swagger starter](/development/framework/starters/swagger-starter/)
* [Cloud starter](/development/framework/starters/cloud-starter/)
