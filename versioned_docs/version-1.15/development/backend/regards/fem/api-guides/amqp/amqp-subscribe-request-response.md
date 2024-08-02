---
id: backend-amqp-subscribe-to-requests-response
title: Monitor FEM requests progress
sidebar_label: Subscribe to requests responses
slug: /development/backend/services/fem/guides/amqp/subscribe-to-requests-responses
---

## AMQP monitoring API...

`Feature manager` microservice publishes AMQP messages to monitor request lifecycle.

Messages are published to two different exchanges because under the hood `Feature manager` is in reality composed of two modules: `feature` and `featureprovider`. Whatever the exchange to which those monitoring messages are comming from, they have the same structure, that is:

* The `requestId` (corresponds to `regards.request.id` header),
* The `requestOwner` (corresponds to `regards.request.owner` header),
* The related feature `id` (not specified for `EXTRACTION` requests because feature is not yet created),
* The related feature `urn` (not specified for `EXTRACTION` requests because feature is not yet created),
* The request type (`EXTRACTION`,`CREATION`,`PATCH`,`DELETION`,`NOTIFICATION`,`FILE_COPY`,`SAVE_METADATA`)
* The state of the request (`GRANTED`,`DENIED`,`ERROR` or `SUCCESS`),
* A list of `errors` if any.

:::info
To receive these messages, your have to subscribe to this exchange.
:::

:::info
`EXTRACTION` process does not create features. So if you want to know the created feature id or urn, you have to listen to responses from the `CREATION` process which has the same `requestId` than the corresponding `EXTRACTION` request.
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
