---
id: backend-framework-starters-geojson
title: GeoJSON starter
slug: /development/backend/framework/starters/geojson/
---


## Purpose

This starter is an implementation of the [RFC 7946 -  The GeoJSON Format](https://tools.ietf.org/html/rfc7946).

## Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>geojson-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>geojson-starter</artifactId>
</dependency>
```

Dependency :

* [GSON starter](gson-starter.md)

## Autoconfiguration

Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly.

## How to

### How to use the starter

You can use default `Feature` class or implements your own feature extending `AbstractFeature` to customize your ID type and your properties wrapper.

### How to build geometry

The interface and builder class `IGeometry` helps you building valid geometry objects.
