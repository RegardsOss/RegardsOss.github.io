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

# 2\. Autoconfiguration

Starter autoconfigures beans :
- `ITenantResolver` to retrieve list of tenants,

```java
@FunctionalInterface
public interface ITenantResolver {

    Set<String> getAllTenants();
}
```
- `IRuntimeTenantResolver` to retrieve request tenant at runtime.

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
Create your own `IRuntimeTenantResolver` bean to implement your own runtime tenant retrieval.

## 3.3. How to handle bootstrap tenants

Just autowired following property class to access bootstrap tenants.

```java
@Autowired
private MultitenantBootstrapProperties bootstrapProperties;
```
