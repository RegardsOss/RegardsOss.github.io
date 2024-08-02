---
id: backend-amqp-publish-create-request
title: Publish a creation request event
sidebar_label: Publish product creation
slug: /development/backend/services/fem/guides/amqp/publish-a-creation-request-event
---

## AMQP API

### Feature creation request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|


And following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|

#### Example

```properties
# Headers
regards.tenant=project1
regards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563
regards.request.owner=owner
regards.request.date=2019-07-04T01:03:00
```

```json
{
    "metadata": {
        "sessionOwner": "owner",
        "session": "session",
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "feature": {
        "entityType": "DATA",
        "model": "FEATURE01",
        "files": [
            {
                "locations": [
                    {
                        "storage": null,
                        "url": "http://www.test.com/filename.xml"
                    }
                ],
                "attributes": {
                    "dataType": "RAWDATA",
                    "mimeType": "application/xml",
                    "filename": "filename",
                    "filesize": 100,
                    "algorithm": "MD5",
                    "checksum": "checksum"
                }
            }
        ],
        "id": "MyId",
        "geometry": {
            "coordinates": [
                10.0,
                20.0
            ],
            "type": "Point",
            "bbox": null,
            "crs": null
        },
        "normalizedGeometry": null,
        "properties": {
            "data_type": "TYPE01",
            "file_characterization": {
                "valid": true
            }
        },
        "type": "Feature"
    }
}
```

### Feature creation request by file reference

This API allows to generate feature by extracting metadata from the passed location.

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata|(look at [description above](#metadatappt))|
|parameters| Free JSON parameters to be used by related factory |
|factory|Plugin business identifier representing the feature factory to use| 


:::info
Factory must have been configured beforehand.
:::

And following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|


#### Example

```properties
# Headers
regards.tenant=project1
regards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563
regards.request.owner=owner
regards.request.date=2019-07-04T01:03:00
```

```json
{
    "metadata": {
        "sessionOwner": "owner",
        "session": "session",
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "factory": "{factory identifier}",
    "parameters": {
        "location":"my/file/location"
    }
}
```