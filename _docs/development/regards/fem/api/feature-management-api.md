---
layout: classic-docs
title: REGARDS Feature Management API
---

{% include toc.md %}

{% include howto-api.md name="rs-fem" %}
    
# Getting Started

All features sended must to be formated with a GJON format.
And all messages, no matter if using REST or AMQP must contain the following attributes:
      
|Path|Type|Description|Constraints| 
|:--:|:--:|:---------:|:---------:|
|metadata.storages| `Array` |Target storages if there are files to store||
|metadata.storages[].pluginBusinessId| `String` |Storage identifier||
|metadata.storages[].targetTypes| `Array` |List of data object types accepted by this storage location (when storing AIPs)||
|metadata.session| `String` |The session name||
|metadata.sessionOwner| `String` |The session owner||
|metadata.priority| `String` |HIGH, AVERAGE, LOW||
|features[].entityType| `String` |COLLECTION, DATA, DATASET||
|features[].type| `String` |FEATURE, FEATURE_COLLECTION, POINT, MULTIPOINT, LINESTRING, MULTILINESTRING, POLYGON, MULTIPOLYGON, GEOMETRY_COLLECTION, UNLOCATED||
|features[].urn| `String` |Unique feature identifer based on provider identifier with versionning||
|features[].model| `String` |Indicate which custom model will be used for properties||
|features[].id| `String` |Technical id||
|features[].geometry| `Object` |GeoJson Coordinates||
|features[].normalizedGeometry| `Object` |GeoJson Coordinates||
|features[].properties| `Array` |Custom properties||
|features[].files[].locations[].storage| `String` |Storage||
|features[].files[].locations[].url| `String` |Url location||
|features[].files[].attributes.dataType| `String` |RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, DESCRIPTION||
|features[].files[].attributes.mimeType| `String` |Media type||
|features[].files[].attributes.filename| `String` |File name||
|features[].files[].attributes.filesize| `Number` |File size||
|features[].files[].attributes.algorithm| `String` |Algorith for checksum computation||
|features[].files[].attributes.checksum| `String` |Checksum||
{:.table.table-striped}

# FeatureController

## Feature Creation request

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/http-request.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body-types.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/http-response.md %}

## Feature Update request

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/http-request.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/request-body.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/request-body-types.md %}

{% include_relative generated-snippets/FeatureControllerIT/testCreateValidFeatureUpdateRequest/http-response.md %}


# AMQP Messages

## Feature Creation request

{% include_relative generated-snippets/FeatureAMQP/FeatureCreationRequest/feature-creation-request.md %}

## Feature Update request

{% include_relative generated-snippets/FeatureAMQP/FeatureUpdateRequest/feature-update-request.md %}