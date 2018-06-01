{% comment %}
---
layout: classic-docs
title: GeoJSON starter
short-title: GeoJSON starter
---
{% endcomment %}
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [1\. Configuration](#1%5C-configuration)
- [2\. Autoconfiguration](#2%5C-autoconfiguration)
- [3\. How to](#3%5C-how-to)
  - [3.1. How to use the starter](#31-how-to-use-the-starter)
  - [3.2. How to build geometry](#32-how-to-build-geometry)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

