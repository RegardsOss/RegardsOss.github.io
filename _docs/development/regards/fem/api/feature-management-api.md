---
layout: classic-docs
title: REGARDS Feature Management API
---

{% include toc.md %}

{% include howto-api.md name="rs-fem" %}
    
# Getting Started

All features sended must to be formatted with a JSON format.  
And all messages, no matter if using REST or AMQP must contain the following attributes:
      
|Path|Type|Description|
|:--:|:--:|:---------:|
|metadata.storages| `Array` |Target storages if there are files to store||
|metadata.storages[].pluginBusinessId| `String` |Storage identifier||
|metadata.storages[].targetTypes| `Array` |List of data object types accepted by this storage location (when storing AIPs)||
|metadata.storages[].storePath| `String` |Directory to store the file||
|metadata.session| `String` |The session name||
|metadata.sessionOwner| `String` |The session owner||
|metadata.priority| `String` |HIGH, NORMAL, LOW||
|features[].entityType| `String` |COLLECTION, DATA, DATASET||
|features[].type| `String` |FEATURE||
|features[].urn| `String` |Unique feature identifer based on provider identifier with versionning||
|features[].model| `String` |Indicate which custom model will be used to validate properties||
|features[].id| `String` |Id from provider||
|features[].geometry| `Object` |GeoJson Coordinates||
|features[].properties| `Array` |Custom properties according model structure||
|features[].files[].locations[].storage| `String` |Storage||
|features[].files[].locations[].url| `String` |Url location||
|features[].files[].attributes.dataType| `String` |RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, OTHER, DESCRIPTION||
|features[].files[].attributes.mimeType| `String` |Media type||
|features[].files[].attributes.filename| `String` |File name||
|features[].files[].attributes.filesize| `Number` |File size||
|features[].files[].attributes.algorithm| `String` |Algorith for checksum computation||
|features[].files[].attributes.checksum| `String` |Checksum||
{:.table.table-striped}

Example of a formatted JSON payload: 

{% include_relative generated-snippets/FeatureAMQP/FeatureRequest/feature-request.md %}

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

|Path|Description|
|:--:|:---------:|
|Exchange|[PREFIX].broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent for a feature creation or [PREFIX].broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent for a feature update||
|Priority|Priority of the message 0 for instance||
|Headers.\__ctype__| The type of the payload (GSON)||
|Headers.\__tenant__| The tenant||
|Headers.\__gson\_wrapped\_type__|fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent for feature creation  and fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent for update||
{:.table.table-striped}

## Feature Creation request

In case of Feature creation the URN must not be setted.

## Feature Update request

In case of Feature update the URN have to be setted.
