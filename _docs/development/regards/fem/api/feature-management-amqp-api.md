---
layout: classic-docs
title: Feature Manager AMQP API
---

{% include_relative feature-management-intro.md %}

## AMQP API

### Feature creation request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|
{:.table.table-striped}

And following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|
{:.table.table-striped}

{% include_relative amqp/migration-1.2.0-1.3.0.md %}

#### Example

{% include_relative amqp/creation-request.md %}

### Feature creation request by file reference

This API allows to generate feature by extracting metadata from the passed location.

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata|(look at [description above](#metadatappt))|
|parameters| Free JSON parameters to be used by related factory |
|factory|Plugin business identifier representing the feature factory to use| 
{:.table.table-striped}

> Factory must have been configured beforehand.
{: .tip .info}

And following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|
{:.table.table-striped}

{% include_relative amqp/migration-1.2.0-1.3.0.md %}

#### Example

{% include_relative amqp/reference-request.md %}

### Feature patch request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent`

With following properties:

|Property|Type|
|----|-----------|
|metadata.priority|(look at [description above](#metadatappt))|
|metadata.storages|(look at [description above](#metadatappt))|
|feature|(look at [description above](#payloadppt))|
{:.table.table-striped}

> Only properties to be updated can be passed on ... they will be merged with existing ones.
{: .tip .info}

And following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|
{:.table.table-striped}

{% include_relative amqp/migration-1.2.0-1.3.0.md %}

#### Example

{% include_relative amqp/update-request.md %}

### Feature deletion request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent`

|Property|Type|
|----|-----------|
|priority|(look at [description above](#metadatappt))|
|urn|Unique identifier of the feature|
{:.table.table-striped}

With following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|
{:.table.table-striped}

{% include_relative amqp/migration-1.2.0-1.3.0.md %}

#### Example

{% include_relative amqp/delete-request.md %}

## AMQP monitoring API

`Feature manager` microservice publishes request messages to monitor request lifecycle.

Messages are published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`

Structure of the message is as follows :

* The `requestId` (corresponds to `regards.request.id` header),
* The `requestOwner` (corresponds to `regards.request.owner` header),
* The related feature `id`,
* The related feature `urn`,
* The state of the request (`GRANTED`,`DENIED`,`ERROR` or `SUCCESS`),
* A list of `errors` if any.

> To receive these messages, your have to subscribe to this exchange.
{: .tip .info}

> If AMQP virtual host mode is set to `SINGLE`, this exchange will receive all messages of all tenants! So the receiver may have to filter them according to the tenant he wishes to manage.
{: .tip .warning}

> Requests without `requestId` can be routed to AMQP Dead Letter Queue (DLQ) so no response will be published. However, a notification is sent to the administrators of the project in order to tell them to inspect DLQ.
{: .tip .warning}

#### Example of DENIED request
|:
```json
{
    "requestId": "{requestId}",
    "requestOwner": "{requestOwner}",
    "id": "{featureId}",
    "state": "DENIED",
    "errors": ["error1", "error2"]
}
```

#### Example of GRANTED request

```json
{
    "requestId": "{requestId}",
    "requestOwner": "{requestOwner}",
    "id": "{featureId}",
    "state": "GRANTED"
}
```

#### Example of SUCCESS request

```json
{
    "requestId": "{requestId}",
    "requestOwner": "{requestOwner}",
    "id": "{featureId}",
    "urn": "{featureGeneratedUrn}",
    "state": "SUCCESS"
}
```


#### Example of ERROR request

```json
{
    "requestId": "{requestId}",
    "requestOwner": "{requestOwner}",
    "id": "{featureId}",
    "urn": "{featureGeneratedUrn}",
    "state": "ERROR",
    "errors": ["error1", "error2"]
}
```


