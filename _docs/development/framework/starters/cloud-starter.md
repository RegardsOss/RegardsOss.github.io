---
layout: classic-docs
title: Cloud starter
short-title: Cloud starter
---

{% include toc.md %}

## Purpose

This starter enables Eureka client discovery.

## Configuration

Add starter dependency to your POM (version depends on the BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>cloud-regards-starter</artifactId>
</dependency>
```

No business dependency.

```properties
# Disable cloud support
regards.cloud.enabled=false
```
