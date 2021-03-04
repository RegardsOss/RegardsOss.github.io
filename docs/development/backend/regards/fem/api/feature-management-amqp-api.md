---
id: backend-fem-amqp-api
title: Feature Manager AMQP API
sidebar_label: Feature Manager AMQP
slug: /development/backend/fem/api/amqp
---


{@import feature-management-intro.md}

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


{@import amqp/migrations/migration-1.1.0-1.2.0.md}

#### Example

{@import amqp/creation-request.md}

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


{@import amqp/migrations/migration-1.1.0-1.2.0.md}

#### V1.3.0 to V1.4.0 migration

{% comment %}
FIXME this should not be duplicated and way to document migration should be decided and harmonized between each feature giving its migration issues or adding a global migration guide
{% endcomment %}

New extraction requests has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent` 
In previous version reference requests were sent to : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureReferenceRequestEvent`

#### Example

{@import amqp/reference-request.md}

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


{@import amqp/migrations/migration-1.1.0-1.2.0.md}

#### Example

{@import amqp/update-request.md}

### Feature deletion request

Request has to be published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent`

|Property|Type|
|----|-----------|
|priority|(look at [description above](#metadatappt))|
|urn|Unique identifier of the feature|


With following headers:

|Header|Value|
|----|-----------|
|regards.tenant| The tenant|
|regards.request.id| String of max 36 characters long|
|regards.request.date| ISO 8601 date|
|regards.request.owner| String of max 128 characters long|


{@import amqp/migrations/migration-1.1.0-1.2.0.md}

#### Example

{@import amqp/delete-request.md}

## AMQP monitoring API...

`Feature manager` microservice publishes AMQP messages to monitor request lifecycle.

Messages are published to two different exchanges because under the hood `Feature manager` is in reality composed of two modules: `feature` and `featureprovider`. Whatever the exchange to which those monitoring messages are comming from, they have the same structure, that is:

* The `requestId` (corresponds to `regards.request.id` header),
* The `requestOwner` (corresponds to `regards.request.owner` header),
* The related feature `id`,
* The related feature `urn`,
* The request type (`EXTRACTION`,`CREATION`,`PATCH`,`DELETION`,`NOTIFICATION`,`FILE_COPY`,`SAVE_METADATA`)
* The state of the request (`GRANTED`,`DENIED`,`ERROR` or `SUCCESS`),
* A list of `errors` if any.

:::info
To receive these messages, your have to subscribe to this exchange.
:::

:::caution
If AMQP virtual host mode is set to `SINGLE`, this exchange will receive all messages of all tenants! So the receiver may have to filter them according to the tenant he wishes to manage.
:::

:::caution
Requests without `requestId` can be routed to AMQP Dead Letter Queue (DLQ) so no response will be published. However, a notification is sent to the administrators of the project in order to tell them to inspect DLQ.
:::

#### Example of DENIED request
|:
```json
{
    "requestId": "{requestId}",
    "requestOwner": "{requestOwner}",
    "id": "{featureId}",
    "type": "{requestType}",
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
    "type": "{requestType}",
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
    "type": "{requestType}",
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
    "type": "{requestType}",
    "state": "ERROR",
    "errors": ["error1", "error2"]
}
```
### ...For feature module

Messages are published on this exchange : `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`

### ...For featureprovider module

Messages are published on this exchange : `regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent`

In other words, it means that to migrate from **V1.3.x** to **V1.4.0**, you need to change the exchange to which you subscribe to receive extraction monitoring messages. Or you might be able to configure your AMQP broker to automatically redirect messages from this exchange to the old one (`regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent`).


