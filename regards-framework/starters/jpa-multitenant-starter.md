---
layout: classic-docs
title: JPA multitenant starter
short-title: JPA multitenant starter
---

# Configuration

```properties
regards.jpa.multitenant.enabled=false # Disable JPA multitenant support
regards.jpa.multitenant.embedded=true # Activate embedded mode with HSQLDB
regards.jpa.multitenant.embeddedPath=target # Path for embedded databases files
regards.jpa.multitenant.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].name=example
regards.jpa.multitenant.tenants[<x>].url=jdbc:postgresql://localhost:5432/test1 # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].userName=postgres # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].password=postgres # Not mandatory if embedded mode is activated
regards.jpa.multitenant.tenants[<x>].driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated

<x> : Integer value for tenant index starting with 0.
```

# Customize tenant resolver

In a @Configuration file, define your bean as follow :

```java
@Bean
public ITenantResolver customTenantResolver() {
            return new CustomTenantResolver();
}
...
class CustomTenantResolver implements ITenantResolver {
...
}
```

# Use transaction with multitenant

You can annotated your service or test with the following meta annotation to manage transaction:
```java
@MultitenantTransactional
```

# Tests

TODO explain test module
