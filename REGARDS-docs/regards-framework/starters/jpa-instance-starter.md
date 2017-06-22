---
layout: classic-docs
title: JPA instance starter
short-title: JPA instance starter
---

# Configuration

```properties
# Disable JPA instance support
regards.jpa.instance.enabled=false # disable JPA instance support
regards.jpa.instance.embedded=true # Activate embedded mode with HSQLDB
regards.jpa.instance.embeddedPath=target # Path for embedded databases files
regards.jpa.instance.dialect=org.hibernate.dialect.PostgreSQLDialect # Not mandatory if embedded mode is activated
regards.jpa.instance.datasource.url=jdbc:postgresql://localhost:5432/postgres # Not mandatory if embedded mode is activated
regards.jpa.instance.datasource.username=postgres # Not mandatory if embedded mode is activated
regards.jpa.instance.datasource.password=postgres # Not mandatory if embedded mode is activated
regards.jpa.instance.datasource.driverClassName=org.postgresql.Driver # Not mandatory if embedded mode is activated
regards.jpa.instance.disableInstanceEntityAnnotation # Used to use instance starter alone without jpa-multitenant-starter.
```

# Usage

To use Instance DAO, you have to annotate all your JPA Repositories and Entities with @InstanceEntity. Only those are used by the jpa-instance starter.

## Use transaction with instance
