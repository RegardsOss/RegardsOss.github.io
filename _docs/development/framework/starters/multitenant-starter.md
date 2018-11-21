---
layout: classic-docs
title: Multitenant starter
short-title: Multitenant starter
---

{% include toc.md %}

## Purpose

This starter is used to manage multitenancy context.

## Configuration

For default behaviour, only available for test purpose :

```properties
# Static list of tenants
regards.tenants=tenant1,tenant2
# Static request tenant
regards.tenant=tenant1
```

To manage a list of tenant at bootstrap from static configuration :

```properties
# Static bootstrap tenants (comma separated)
regards.bootstrap-tenants=
```

## Autoconfiguration

Starter autoconfigures beans :

* `ITenantResolver` to retrieve list of tenants,

```java
@FunctionalInterface
public interface ITenantResolver {

    /**
     * @return all tenants regardless its configuration
     */
    Set<String> getAllTenants();

    /**
     * @return all tenants fully configured
     */
    Set<String> getAllActiveTenants();
}
```

* `IRuntimeTenantResolver` to retrieve request tenant at runtime.

```java
public interface IRuntimeTenantResolver {

    /**
     * @return runtime tenant
     */
    String getTenant();

    /**
     * Does the current tenant is instance
     * @return true|false
     */
    boolean isInstance();

    /**
     * Force runtime tenant to a specific value on current thread.<br/>
     * We recommend to use {@link IRuntimeTenantResolver#clearTenant()} to clean the thread in a finally clause.<br/>
     * It is mostly recommended for server threads as they are reused.
     * @param tenant tenant
     */
    void forceTenant(String tenant);

    /**
     * Clear forced tenant on current thread
     */
    void clearTenant();
}
```

> In production, the implementation of `IRuntimeTenantResolver` must be **thread safe**.
{: .tip .important}

## How to

### How to use

Just inject beans in your component.

### How to override default behaviour

Create your own `ITenantResolver` bean to implement your own tenant retrieval.
Create your own `IRuntimeTenantResolver` bean to implement your own **runtime** tenant retrieval.

## 3.3. How to handle bootstrap tenants

Just autowired following property class to access bootstrap tenants.

```java
@Autowired
private MultitenantBootstrapProperties bootstrapProperties;
```
