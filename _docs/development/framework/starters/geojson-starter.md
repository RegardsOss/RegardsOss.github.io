---
layout: classic-docs
title: GeoJSON starter
short-title: GeoJSON starter
---

* automatic table of content
{:toc}

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>geojson-starter</artifactId>
</dependency>
```

Dependency :
- [Gson starter](/regards-framework/starters/gson-starter/)

# 2\. Autoconfiguration

GeoJson starter is compliant with https://tools.ietf.org/html/rfc7946.

Starter autoconfigures Gson to (de)serialize base objects. 

# 3\. How to

## 3.1. How to use the starter

You can use default `Feature` class or implements your own feature extending `AbstractFeature` to customize your ID type and your properties wrapper.

## 3.2. How to build geometry

The interface and builder class `IGeometry` helps you building valid geometry objects.

