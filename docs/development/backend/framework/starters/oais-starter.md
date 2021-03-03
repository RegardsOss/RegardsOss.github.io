---
id: backend-framework-starters-oais
title: OAIS starter
slug: /development/backend/framework/starters/oais
---


## Purpose

This starter is a REGARDS representation of an information package described by the [OAIS recommandation of the CCSDS](https://public.ccsds.org/pubs/650x0m2.pdf).

## Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>oais-starter</artifactId>
</dependency>
```

Business dependency :

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>oais-regards</artifactId>
</dependency>
```

Dependency :

* [GeoJSON starter](geojson)
* [GSON starter](gson)

## Autoconfiguration

Starter autoconfigures Gson to (de)serialize base objects. At the moment, only Gson can do this properly.

## How to

### How to use the starter

You can extend `AbstractInformationPackage` to make your own information package. `AbstractInformationPackage` is compliant with GeoJSON format by extending `AbstractFeature`. As consequences, information packages contain a geometry attribute, an id attribute and a property attribute, the former being of type `InformationPackageProperties`.

### How to build information packages

Information packages can be built thanks to extensions of abstract builder `IPBuilder`. `IPBuilder` allows to set the properties of the information package.

`InformationPackageProperties` can be built thanks to `InformationPackagePropertiesBuilder` which gives access to `ContentInformationBuilder` and `PDIBuilder` that has to be used to build `ContentInformation` and `PreservationDescriptionInformation`. With a specific action to actually add `ContentInformation` to your `InformationPackageProperties`: once a `ContentInformation` has been prepared, you have to use `InformationPackagePropertiesBuilder.addContentInformation` method to actually build and add a `ContentInformation` to your `InformationPackageProperties`. In addition to `ContentInformationBuilder` and `PDIBuilder`, `InformationPackagePropertiesBuilder` allows you to add descriptive informations.

## Structure

### Information packages

Information packages into REGARDS follow GeoJSON structure, it has an id, a geometry and properties. Those properties has a specific structure: it is `InformationPackageProperties`.

It also has an extension `ipType` which represents the type of your information package (Collection, Dataset, Data, ...)

### Information package properties

`InformationPackageProperties` contains many sections:

* contentInformations: set of content informations (data references)
* pdi: preservation and description information (minimal information to understand content informations for a long time)
* descriptiveInformation (optional) : set of description information to ease data discovery and retrieval
* miscInformation (optional) : miscellanous information

### Content informations

Content informations by their structure allow to give some informations on the files associated to an information package.

Each `ContentInformation` contains 2 sections:

* `OAISDataObject`: file reference
* `RepresentationInformation`: object describing how to handle, understand, etc. this data object.

#### OAISDataObject

`OAISDataObject` contains minimal metadata to handle a file :

* regardsDataType : the data type in term of REGARDS concept :

  * RAWDATA : the main data (at least one `ContentInformation` qualified as RAWDATA is required in one AIP)
  * QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD : optional RAWDATA quicklook with definition level (small, medium or high definition)
  * DOCUMENT : optional document related to the RAWDATA
  * THUMBNAIL : optional RAWDATA thumbnail
  * DESCRIPTION : optional description

AIP data type is also available for internal use in archival storage. Indeed, archival storage stores all referenced files described in all available `ContentInformation` of the AIP **plus itself**.

* reference : reference flag allows to just store reference to external data file, not store the physical file.
* urls : list of file URLs pointing to the same file
* filename : the filename
* algorithm : used to compute the checksum for data integrity control
* checksum : data checksum
* fileSize : optional file size

#### RepresentationInformation

`RepresentationInformation` contains metadata related to `OAISDataObject`:

* semantic : optional semantic description,
* syntax : required syntax with a least the data file MIME type plus eventually the MIME type name and description
* environmentDescription : optional software and hardware environment to handle data file

### Preservation and description informations

Unlike ContentInformation, preservation and description informations provides informations to an entire information package and not only the files associated to an information package.

`PreservationDescriptionInformation` contains 5 sections:

* contextInformation: contains the tags and any key/value couple. (optional)
* referenceInformation: contains key/value couple which key should be a system identifier and its value should be the said identifier into this system.
* provenanceInformation: see new section.
* fixityInformation: it is empty for now and still there to be compliant with the OAIS recommandations.
* accessRightInformation: it contains the access level (public, secure, ...), an optional licence and an optional public release date.

#### Provenance informations

Provenance informations have an unorthodox structure, it contains informations on the life of your information package: the history.

In addition to the history, `ProvenanceInformation` contains optional informations (related to spatial domain semantic, probably not useful for other domain):

* facility
* instrument
* filter
* detector
* proposal

and a field "additional" that allows to add any key/value couple on additional provenance information that are not already there.

### Descriptive informations

Informations (key/value pairs) which are publish, they do not have technical meaning, they are business related.
