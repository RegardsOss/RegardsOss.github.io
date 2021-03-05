---
id: backend-framework-getting-started
title: Getting started with REGARDS framework
sidebar_label: Getting started
slug: /development/backend/framework/getting-started
---

## Technology stack

REGARDS framework is built on top of [Spring projects](https://spring.io/):

At the moment, the framework relies on:
  * OpenJDK 8
  * [Spring Boot](https://spring.io/projects/spring-boot#learn) `1.5.X.RELEASE`
  * [Spring Cloud](https://spring.io/projects/spring-cloud#learn) `Dalston SR5`


![](/schemas/architecture/microservice_architecture_spring.png)

## Bill Of Materials (i.e. BOM)

To use REGARDS framework building blocks, you have to import its BOM in your pom.xml.

:::note
All dependencies are expressed in term of **Maven dependencies**. 
:::

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

## Starters

REGARDS framework provides [building blocks (aka starters)](starters) to ease modules and microservices development.

Go to the [dedicated section](starters) to learn more.

## Modules

REGARDS framework provides common modules to manage [jobs](modules/jobs), [plugins](modules/plugins), [templates](modules/templates) and [workspace](modules/workspace).