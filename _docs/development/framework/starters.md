---
layout: classic-docs
title: REGARDS framework starters
short-title: Framework building blocks (aka starters)
wip: true
categories:
  - development
---

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
 
  - [AMQP starter](/development/framework/starters/amqp-starter/)
  - [AMQP monitoring starter](/development/framework/starters/amqp-monitoring-starter/)
  - [Authentication starter](/development/framework/starters/authentication-starter/)
  - [Cloud starter](/development/framework/starters/cloud-starter/)
  - [Feign starter](/development/framework/starters/feign-starter/)
  - [GeoJSON starter](/development/framework/starters/geojson-starter/)
  - [GSON starter](/development/framework/starters/gson-starter/)
  - [HATEOAS starter](/development/framework/starters/hateoas-starter/)
  - [JPA instance starter](/development/framework/starters/jpa-instance-starter/)
  - [JPA multitenant starter](/development/framework/starters/jpa-multitenant-starter/)
  - [Microservice starter](/development/framework/starters/microservice-starter/)
  - [Module starter](/development/framework/starters/module-starter/)
  - [Multitenant starter](/development/framework/starters/multitenant-starter/)
  - [OAIS starter](/development/framework/starters/oais-starter/)
  - [Security starter](/development/framework/starters/security-starter/)
  - [Plugins starter](/development/framework/starters/plugins-starter/)
  - [STAF starter](/development/framework/starters/staf-starter/)
  - [Swagger starter](/development/framework/starters/swagger-starter/)
  - [Web socket starter](/development/framework/starters/websocket-starter/)
