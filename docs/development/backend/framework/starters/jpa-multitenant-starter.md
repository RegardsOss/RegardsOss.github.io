---
id: backend-framework-starters-jpa-multitenant
title: JPA multitenant starter
slug: /development/backend/framework/starters/jpa-multitenant/
---



# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>jpa-multitenant-starter</artifactId>
</dependency>
```

Dependency :
- [Multitenant starter](./multitenant-starter.md)
- [AMQP starter](amqp-starter.md)

```properties
regards.jpa.multitenant.enabled=true # Disable JPA multitenant support
regards.jpa.multitenant.embedded=false # Activate embedded mode with HSQLDB
regards.jpa.multitenant.embeddedPath= # Path for embedded databases files if enabled
regards.jpa.multitenant.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].tenant=
regards.jpa.multitenant.tenants[<x>].url= # Not mandatory if embedded mode is activated (e.g. jdbc:postgresql://localhost:5432/test1)
regards.jpa.multitenant.tenants[<x>].userName= # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].password= # Not mandatory if embedded mode is activated
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

To do so, multitenant router use `IRuntimeTenantResolver` from [Multitenant starter](./multitenant-starter.md) transparently.

## 3.2. How to avoid transaction manager conflict

You can annotated your service or test with the following meta annotation to manage transaction if multiple managers exist else you can use `RegardsTransactional`:
```java
@MultitenantTransactional
```

## 3.3. How to test datasource

TODO explain test module
