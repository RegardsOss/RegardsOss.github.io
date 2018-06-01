---
layout: classic-docs
title: Microservice multitenant database
short-title: Multitenant Database
categories:
  - microservice-core
---

## Overall

![](/assets/images/jpa/jpa.png)

Every microservice generated with the "microservice-archetype" use the "jpa-multitenant-regards" module to handle connection to databases.

To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".  
The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.

At startup the "jpa-multitenant-regards" module is initialized with the here-under steps :
1. Retrieve all tenants
2. For each tenants retrieve microservices database connections.
3. Create the pool of connections.
4. Listen to tenant and connection event to handle a new project or an update on an existing connection.  

## Initial and static configuration

At startup if a microservice database connections are not configured in the administration microservice, then a default project is initialized with default database connections. This project and connections are defined in the main "application.properties "file of the microservice. The available configuration values are :

Disable JPA multitenant support  (default true if not present)  
**regards.jpa.multitenant.enabled**=true

Activate embedded mode with HSQLDB  
**regards.jpa.multitenant.embedded**=true

Path for embedded databases files  
**regards.jpa.multitenant.embeddedPath**=target

Not mandatory if embedded mode is activated  
**regards.jpa.multitenant.dialect**=org.hibernate.dialect.PostgreSQLDialect

database user name for tenant x<br>
**regards.jpa.multitenant.tenants[x].tenant**=example

database url for tenant x (Not mandatory if embedded mode is activated)
**regards.jpa.multitenant.tenants[x].url**=jdbc:postgresql://localhost:5432/test1

database user name for tenant x (Not mandatory if embedded mode is activated)  
**regards.jpa.multitenant.tenants[x].userName**=postgres

database user password for tenant x (Not mandatory if embedded mode is activated)  
**regards.jpa.multitenant.tenants[x].password**=postgres  

database driver for tenant x (Not mandatory if embedded mode is activated)  
**regards.jpa.multitenant.tenants[x].driverClassName**=org.postgresql.Driver

**x** : Integer value for tenant index starting with 0.
