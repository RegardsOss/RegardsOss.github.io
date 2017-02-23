---
layout: classic-docs
title: Multitenant starter
short-title: Multitenant starter
---

# 1\. Configuration

For default behaviour :

```properties
# Static list of tenants
regards.tenants=tenant1,tenant2
# Static request tenant
regards.tenant=tenant1
```

# 2\. Autoconfiguration

Starter autoconfigures beans :
- `ITenantResolver` to retrieve list of tenants,

```java
@FunctionalInterface
public interface ITenantResolver {

    Set<String> getAllTenants();
}
```
- `IThreadTenantResolver` to retrieve request tenant at runtime.

```java
public interface IRuntimeTenantResolver {

    /**
     *
     * @return runtime tenant
     */
    String getTenant();

    /**
     * Force runtime tenant to a specific value
     *
     * @param pTenant
     *            tenatn
     */
    void forceTenant(String pTenant);
}
```

Note : on production, the implementation of `IRuntimeTenantResolver` must be **thread safe**.

# 3\. How to

## 3.1. How to use

Just inject beans in your component.

## 3.2. How to override default behaviour

Create your own `ITenantResolver` bean to implement your own tenant retrieval.
Create your own `IThreadTenantResolver` bean to implement your own runtime tenant retrieval.
