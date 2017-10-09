---
layout: classic-docs
title: GeoJSON starter
short-title: GeoJSON starter
---

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>oais-starter</artifactId>
</dependency>
```

Dependency :
- [Gson starter](/regards-framework/starters/gson-starter/)
- [GeoJSON starter](/regards-framework/starters/gsonjson-starter/)

# 2\. Autoconfiguration

OAIS starter is mostly compliant with [OAIS recomendation](https://public.ccsds.org/pubs/650x0m2.pdf)

Starter autoconfigures JPA to save UniformResourceName as string into databases 

# 3\. How to

## 3.1. How to use the starter

You can extend `AbstractInformationPackage` to make your own information package. `AbstractInformationPackage` respects GeoJSON by extending `AbstractFeature`. As consequences, information packages contains a geometry attribute, an id attribute and a properties attribute, the former being of type `InformationPackageProperties`.

## 3.2. How to build information packages

Information packages can be built thanks to extensions of abstract builder `IPBuilder`. `IPBuilder` allows to set the properties of the information package.

`InformationPackageProperties` can be built thanks to `InformationPackagePropertiesBuilder` which gives access to `ContentInformationBuilder` and `PDIBuilder` that has to be used to build `ContentInformation` and `PreservationDescriptionInformation`. With a specific action to actually add `ContentInformation` to your `InformationPackageProperties`: once a `ContentInformation` has been prepared, you have to use `InformationPackagePropertiesBuilder.addContentInformation` method to actually build and add a `ContentInformation` to your `InformationPackageProperties`. In addition to `ContentInformationBuilder` and `PDIBuilder`, `InformationPackagePropertiesBuilder` allows you to add descriptive informations.
