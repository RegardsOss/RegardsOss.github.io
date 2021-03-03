---
id: backend-framework-starters-authentication
title: Authentication starter
slug: /development/backend/framework/starters/authentication
---


## Purpose

This starter is used to retrieve current user properties regardless of the authentication management.

## Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>authentication-regards-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>authentication-regards</artifactId>
</dependency>
```

Dependency :

* None

Used by :

* [Security starter](security)

## Autoconfiguration

Starter autoconfigures beans **unless it already exists** :

* `IAuthenticationResolver` to retrieve current user and role at runtime,

:::danger
In production, the implementation of `IAuthenticationResolver` must be **thread safe**.
:::

## How to

### How to use

Just inject bean in your component.

### How to override default behaviour

Create your own `IAuthenticationResolver` bean to implement your own authentication info retrieval.
