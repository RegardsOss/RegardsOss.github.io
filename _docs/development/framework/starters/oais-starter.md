---
layout: classic-docs
title: OAIS starter
short-title: OAIS starter
---

* automatic table of content
{:toc}

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

# 4\. Structures...

## 4.1. ... of information packages

Information packages into REGARDS follow geojson structure, it has an id, a geometry and properties. Those properties has a specific structure: it is `InformationPackageProperties`.

It also has an extension `ipType` which represents the type of your information package (Collection, Dataset, Data, ...)

## 4.2. ... of Information package properties

`InformationPackageProperties` contains 4 sections:
 - contentInformations: set of content informations
 - pdi: PreservationDescriptionInformation
 - descriptiveInformation (optional)

## 4.3. ... of Content informations

Content informations by their structure allow to give some informations on the files associated to an information package.

Each `ContentInformation` contains 2 sections:
 - `OAISDataObject`: system metadata of a file
 - `RepresentationInformation`: other metadata that are some intelligence to be used (optional)

### 4.3.1 OAISDataObject

`OAISDataObject` contains minimal metadata to handle a file:
- its URL
- its type inside REGARDS(rawdata, quicklook_sd, other, ...) 
- its size
- its checksum and the algorithm used to compute it
- its name

### 4.3.2. RepresentationInformation

`RepresentationInformation` contains metadata on a file which require some intelligence to be used:
- its syntax (MIMEtype and its name and description )
- its semantic (optional)
- its environment description (optional, software and hardware environment)

## 4.4. ... of preservation and description informations

Unlike ContentInformation, preservation and description informations provides informations to an entire information package and not only the files associated to an information package.

`PreservationDescriptionInformation` contains 5 sections:
- contextInformation: it contains the tags and any key/value couple. (optional)
- referenceInformation: it contains key/value couple which key should be a system identifier and its value should be the said identifier into this system.
- provenanceInformation 
- fixityInformation: it is empty for now and still there to be compliant with the OAIS recommandations.
- accessRightInformation: it contains the level of access(public, secure, ...), an optional licence and an optional public release date.

### 4.4.1 Provenance informations

Provenance informations have an unorthodox structure, it contains informations on the life of your information package: the history.

In addition to the history, `ProvenanceInformation` contains optional informations:
- detector
- facility
- filter
- instrument
- proposal

and a field "additional" that allows to add any key/value couple on additional provenance information that are not already there.

## 4.5. ... of descriptive informations

Informations(key/value couple) which are publish, they do not have technical meaning, they are business related.
