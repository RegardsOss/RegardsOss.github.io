{% comment %}
---
layout: classic-docs
title: Authentication starter
short-title: Authentication starter
---
{% endcomment %}
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [1\. Configuration](#1%5C-configuration)
- [2\. Autoconfiguration](#2%5C-autoconfiguration)
- [3\. How to](#3%5C-how-to)
  - [3.1. How to use](#31-how-to-use)
  - [3.2. How to override default behaviour](#32-how-to-override-default-behaviour)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
