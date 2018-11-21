---
layout: classic-docs
title: REGARDS framework starters
short-title: Framework building blocks (aka starters)
wip: true
categories:
  - development
---

{% include toc.md %}

> All dependencies are expressed in term of **Maven dependencies**.

## Bill Of Materials (i.e. BOM)

To use REGARDS framework building blocks, you have to import its BOM in your pom.xml.

```xml
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>fr.cnes.regards</groupId>
                <artifactId>regards-dependencies</artifactId>
                <version>3.0.0-RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

## Available starters

Most of the time, starter depends on a business package. Sometimes, regarding the layer you implement, you may want to use directly the starter or just the business package.

The starter activates the related features and should only contains starter configuration properties and auto configuration bean(s). Business package contains all the logic and the business objects.

Sometimes, you have to provide your own bean to override default one. Simply create your own `Component` or `Configuration` bean! It will automatically have priority over starter one.

See latest [Spring documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-custom-starter) for further details.

### Multitenancy

* [Multitenant starter](/development/framework/starters/multitenant-starter/)

> Most REGARDS starters are designed to handle multitenancy and depends on this base starter.
{: .tip .important}

### Authentication and authorization

* [Authentication starter](/development/framework/starters/authentication-starter/)
* [Security starter](/development/framework/starters/security-starter/)

### Messaging

* [AMQP starter](/development/framework/starters/amqp-starter/)


* [Cloud starter](/development/framework/starters/cloud-starter/)
* [Feign starter](/development/framework/starters/feign-starter/)
* [GeoJSON starter](/development/framework/starters/geojson-starter/)
* [GSON starter](/development/framework/starters/gson-starter/)
* [HATEOAS starter](/development/framework/starters/hateoas-starter/)
* [JPA instance starter](/development/framework/starters/jpa-instance-starter/)
* [JPA multitenant starter](/development/framework/starters/jpa-multitenant-starter/)
* [Microservice starter](/development/framework/starters/microservice-starter/)
* [Module starter](/development/framework/starters/module-starter/)

* [OAIS starter](/development/framework/starters/oais-starter/)

* [Plugins starter](/development/framework/starters/plugins-starter/)
* [STAF starter](/development/framework/starters/staf-starter/)
* [Swagger starter](/development/framework/starters/swagger-starter/)
* [Web socket starter](/development/framework/starters/websocket-starter/)
