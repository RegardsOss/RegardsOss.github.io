---
id: backend-amqp-publish-delivery-request
title: Publish a delivery request event
sidebar_label: Publish a request
slug: /development/backend/services/delivery/guides/amqp/publish-a-delivery-request
---

## Introduction

This section describes how to publish a new delivery request event to REGARDS with AMQP message.

## AMQP API

### How to

The [Regards AMQP API concept](../../../../concepts/06-amqp-api.md) describe how AMQP interfaces must be handled to
submit events or to subscribe to events.

### Exchange

Delivery requests have to be published to REGARDS Rabbitmq exchange:

| Exchange                                                                                | Virtual host                   |
|-----------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.delivery.amqp.input.DeliveryRequestDtoEvent` | `regards.multitenant.manager`	 |

### Request content

#### Properties

| Parameter | Type   | Optional | Description                                                    |
|-----------|--------|:--------:|----------------------------------------------------------------|
| app_id    | String |   Yes    | Standard RabbitMQ property to track message origin.            |
| priority  | String |   Yes    | Standard RabbitMQ property to sort messages by priority order. |

#### Headers

```json
"regards.tenant": "tenant"
"regards.request.owner": "owner"
```

| Parameter             | Type   | Optional | Description                                                    |
|-----------------------|--------|:--------:|----------------------------------------------------------------|
| regards.tenant        | String |    No    | Tenant name depends on REGARDS instance project configuration. |
| regards.request.owner | String |    No    | Name of the request provider.                                  |

#### Body

```json
{
  "correlationId": "xxxxxx",
  "targetDelivery": "regards-s3-minio",
  "order": {
    "user": "xxxxxx",
    "queries": [
      "providerId:xxxxx"
    ],
    "filters": [
      {
        "dataTypes": [],
        "filenameRegExp": ""
      }
    ]
  }
}
```

| Parameter              | Type           | Optional | Description                                                                                                                                     |
|------------------------|----------------|:--------:|-------------------------------------------------------------------------------------------------------------------------------------------------|
| correlationId          | String         |    No    | Unique identifier to track the request.                                                                                                         |
| targetDelivery         | String         |   Yes    | Name of the S3 configuration to use. For now, provide the default value `regards-s3-minio`.                                                     |
| queries                | Lucene strings |    No    | List of lucene formatted queries to find products to order. (refer to [lucene documentation](../../../../appendices/02-create-lucene-query.md)) |
| user                   | String         |    No    | Email of your REGARDS user.                                                                                                                     |
| filters.datatypes      | String         |   Yes    | List of REGARDS datatypes to filter files from ordered products. Datatypes can be either `RAWDATA` or `QUICKLOOK`.                              |
| filters.filenameRegExp | String         |   Yes    | Regular expression to filter files by their names from ordered products.                                                                        |
