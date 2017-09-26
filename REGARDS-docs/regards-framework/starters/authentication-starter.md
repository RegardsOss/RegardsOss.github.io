---
layout: classic-docs
title: Authentication starter
short-title: Authentication starter
---

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>authentication-regards-starter</artifactId>
</dependency>
```

Dependency :
- None

Used by :
- [Security starter](/regards-framework/starters/security-starter/)

# 2\. Autoconfiguration

Starter autoconfigures beans :
- `IAuthenticationResolver` to retrieve current user and role at runtime,

```java
public interface IAuthenticationResolver {

    String getUser();

    String getRole();
}
```

Note : in production, the implementation of `IAuthenticationResolver` must be **thread safe**.

# 3\. How to

## 3.1. How to use

Just inject bean in your component.

## 3.2. How to override default behaviour

Create your own `IAuthenticationResolver` bean to implement your own authentication info retrieval.
