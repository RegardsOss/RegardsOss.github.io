---
id: backend-framework-starters-cloud
title: Cloud starter
slug: /development/backend/framework/starters/cloud/
---

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
