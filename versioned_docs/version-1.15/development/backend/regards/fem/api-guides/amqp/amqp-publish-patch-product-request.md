---
id: backend-amqp-publish-patch-request
title: Publish a patch request event
sidebar_label: Publish patch request
slug: /development/backend/services/fem/guides/amqp/publish-a-patch-request
---

### Feature patch request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata.priority|(look at [description above](#metadatappt))|
|metadata.storages|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|


:::info
Only properties to be updated can be passed on ... they will be merged with existing ones.
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
        "storages": [],
        "priority": "NORMAL"
    },
    "feature": {
        "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",
        "entityType": "DATA",
        "model": "FEATURE01",
        "files": [],
        "id": "MyId",
        "geometry": null,
        "normalizedGeometry": null,
        "properties": {
            "file_characterization": {
                "invalidation_date": "2019-12-03T12:31:42.466Z",
                "valid": false
            }
        },
        "type": "Feature"
    }
}
```
