---
layout: classic-docs
title: Feature Manager AMQP API
---

{% include_relative feature-management-intro.md %}

## AMQP API

<!-- For creation and update requests, AMQP API is expected a message containing an edition request.

The structure is as follows :

* A required `requestId` for request monitoring (max 36 characters long),
* A required `requestDate` in ISO 8601 date format (a past date is required!),
* Required `metadata`,
* A required `feature` (look at [payload description above](#payloadppt))

```json
{
    "requestId": "70970463-0f6b-4488-b58c-52af3f7e9563",
    "requestDate": "2019-04-22T01:03:00",
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
        "id": "FeatureId",
        "urn": "UniqueFeatureId",
        "model": "RelatedModelName",
        "entityType": "DATA",
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                125.6,
                10.1
            ]
        },
        "properties": {
            "name": "Dinagat Islands"
        },
        "files": [
            {
                "locations": [
                    {
                        "storage": "DISK",
                        "url": "file://home/user/regards/file.zip"
                    }
                ],
                "attributes": {
                    "dataType": "RAWDATA",
                    "mimeType": "application/zip",
                    "filename": "file.zip",
                    "filesize": "8013",
                    "algorithm": "MD5",
                    "checksum": "4e188bd8a6288164c25c3728ce394927"
                }
            }
        ]
    }
}
``` -->

### Feature creation request

Message has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent`

With following properties:

|Property|Type|
|:--:|:---------:|
|requestId| String of max 36 characters long|
|requestDate| ISO 8601 date|
|metadata|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|
{:.table.table-striped}

And following headers:

|Header|Value|
|:--:|:---------:|
|regards.converter| GSON|
|regards.tenant| The tenant|
|regards.type|fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent|
{:.table.table-striped}

#### Example

{% include_relative amqp/creation-request.md %}

### Feature patch request

Message has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent`

With following properties:

|Property|Type|
|:--:|:---------:|
|requestId| String of max 36 characters long|
|requestDate| ISO 8601 date|
|metadata|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|
{:.table.table-striped}

> Only properties to be updated can be passed on ... they will be merged with existing ones.
{: .tip .important}

With following headers:

|Header|Value|
|:--:|:---------:|
|regards.converter| GSON|
|regards.tenant| The tenant|
|regards.type|fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent|
{:.table.table-striped}

#### Example

{% include_relative amqp/update-request.md %}

### Feature deletion request

Message has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent`

|Property|Type|
|:--:|:---------:|
|requestId| String of max 36 characters long|
|requestDate| ISO 8601 date|
|priority|(look at [description above](#metadatappt))|
|urn|Unique identifier of the feature|
{:.table.table-striped}

With following headers:

|Header|Value|
|:--:|:---------:|
|regards.converter| GSON|
|regards.tenant| The tenant|
|regards.type|fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent|
{:.table.table-striped}

#### Example

{% include_relative amqp/delete-request.md %}

## AMQP monitoring API

`Feature management` microservice publishes request messages to monitor request lifecycle.

Messages are published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`

Structure of the message is as follows :

* The `requestId`,
* The related feature `id`,
* The related feature `urn`,
* The state of the request (`GRANTED`,`DENIED`,`ERROR` or `SUCCESS`),
* A list of `errors` if any.

> To receive these messages, your have to subscribe to this exchange.
{: .tip .info}

> If AMQP virtual host mode is set to `SINGLE`, this exchange will receive all messages of all tenants! So the receiver may have to filter them according to the tenant he wishes to manage.
{: .tip .warning}

> Malformed requests can be routed to AMQP Dead Letter Queue (DLQ) so no response will be published. However, a notification is sent to the administrators of the project in order to tell them to inspect DLQ.
{: .tip .warning}

#### Example of DENIED request

```json
{
    "requestId": "{requestId}",
    "id": "{featureId}",
    "state": "DENIED",
    "errors": ["error1", "error2"]
}
```

#### Example of GRANTED request

```json
{
    "requestId": "{requestId}",
    "id": "{featureId}",
    "state": "GRANTED"
}
```

#### Example of SUCCESS request

```json
{
    "requestId": "{requestId}",
    "id": "{featureId}",
    "urn": "{featureGeneratedUrn}",
    "state": "SUCCESS"
}
```


#### Example of ERROR request

```json
{
    "requestId": "{requestId}",
    "id": "{featureId}",
    "urn": "{featureGeneratedUrn}",
    "state": "ERROR",
    "errors": ["error1", "error2"]
}
```


