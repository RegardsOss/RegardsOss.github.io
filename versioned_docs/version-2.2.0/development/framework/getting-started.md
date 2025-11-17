---
id: backend-framework-getting-started
title: Getting started with REGARDS framework
sidebar_label: Getting started
sidebar_position: 1
slug: /development/backend/framework/getting-started/
---

## Technology stack

REGARDS framework is built on top of [Spring projects](https://spring.io/):

At the moment, the framework relies on:
  * JDK Eclipse Temurin v17.0.3+
  * [Spring Boot](https://spring.io/projects/spring-boot#learn) `2.6.4`
  * [Spring Cloud](https://spring.io/projects/spring-cloud#learn) `2021.0.1`

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

REGARDS framework provides [building blocks (aka starters)](starters/starters.md) to ease modules and microservices development.

Go to the [dedicated section](starters/starters.md) to learn more.

## Modules

REGARDS framework provides common modules to manage [jobs](modules/jobs.md), [plugins](modules/plugins.md), templates and workspaces.
