{% comment %}
---
layout: classic-docs
title: JPA multitenant starter
short-title: JPA multitenant starter
---
{% endcomment %}

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [1\. Configuration](#1%5C-configuration)
- [2\. Autoconfiguration](#2%5C-autoconfiguration)
- [3\. How to](#3%5C-how-to)
  - [3.1. How to manage repository by tenant](#31-how-to-manage-repository-by-tenant)
  - [3.2. How to avoid transaction manager conflict](#32-how-to-avoid-transaction-manager-conflict)
  - [3.3. How to test datasource](#33-how-to-test-datasource)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>jpa-multitenant-starter</artifactId>
</dependency>
```

Dependency :
- [Multitenant starter](/regards-framework/starters/multitenant-starter/)
- [AMQP starter](/regards-framework/starters/amqp-starter/)

```properties
regards.jpa.multitenant.enabled=false # Disable JPA multitenant support
regards.jpa.multitenant.embedded=true # Activate embedded mode with HSQLDB
regards.jpa.multitenant.embeddedPath=target # Path for embedded databases files
regards.jpa.multitenant.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].tenant=example
regards.jpa.multitenant.tenants[<x>].url=jdbc:postgresql://localhost:5432/test1 # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].userName=postgres # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].password=postgres # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated

<x> : Integer value for tenant index starting with 0.
```

# 2\. Autoconfiguration

Starter :
- manages all tenant connections for the current microservice,

Following endpoints are supplied to monitor datasources :
- `/regards/{tenant}/datasource/test` to test tenant datasource,
- `/regards/{tenant}/datasource/status` to check in production datasource status (pooled connections).


# 3\. How to

## 3.1. How to manage repository by tenant

JPA repositories have no specifities in your source code. Starter purpose is only to route request to the right datasource.

To do so, multitenant router use `IRuntimeTenantResolver` from [Multitenant starter](/regards-framework/starters/multitenant-starter/) transparently.

## 3.2. How to avoid transaction manager conflict

You can annotated your service or test with the following meta annotation to manage transaction if multiple managers exist else you can use `RegardsTransactional`:
```java
@MultitenantTransactional
```

## 3.3. How to test datasource

TODO explain test module
