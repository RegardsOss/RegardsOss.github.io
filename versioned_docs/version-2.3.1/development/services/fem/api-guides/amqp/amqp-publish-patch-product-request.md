---
title: Patch product
sidebar_label: Patch product
sidebar_position: 2
slug: /development/backend/services/fem/guides/amqp/publish-a-patch-request
---

This section describes how to **patch a product** with the `Feature manager` or `rs-fem` service of REGARDS with
**AMQP interfaces**.

## Introduction

To patch a product through AMQP API, you have to submit an existing product in GeoJson format with some additional
information. These additional information allows you to:

- Choose method to handle **product associated files**.
- **Recipient acknowledge**. A patch request can also be used by a notification recipient to acknowledge product
  dissemination.
- Add **meta information** about the creation process.

To identify the feature you want to patch, `Feature manager` or `rs-fem` microservice will use the provided unique
identifier of the product the **urn** parameter.

Patch requests allow you to provide **all or part of the product metadata** to be updated.
Only the metadata supplied will then be modified. Metadata not supplied will not be modified.

For the associated files, you can [replace or append files](../../conception.md) using the amqp
header **request.file_update_mode**.

The diagram below explains the global processing of a new Feature patch request by REGARDS system.  
For a REGARDS client using message queuing, responses are sent for each change of your request status:

- `DENIED` : Your request has been denied (possibly malformed request).
- `GRANTED` : Your request has been granted and will be processed soon
- `ERROR` : Processing of your granted request finished in error status.
- `SUCCESS` : Processing of your granted request finished with success. Your SIP as been successfully ingest, AIP
  generated and associated files stored.

![sequence](../../sources/feature-request-nominal.png)

Requests and responses are linked with a correlation identifier **requestId** provided into patch requests and
added in service responses.

:::caution
When you submit a Feature patch request you have to ensure that the provided **requestId** is unique. Service will
respond to your request with this identifier.
:::

## AMQP API

### How to

The [Regards AMQP API concept](../../../../../development/concepts/06-amqp-api.md) describe how AMQP interfaces must be
handled to
submit events or to subscribe to events.

### Exchange

Patch requests have to be published to this REGARDS RabbitMQ exchange:

| Exchange                                                                                   | Virtual host                   |
|--------------------------------------------------------------------------------------------|--------------------------------|
| `regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent` | `regards.multitenant.manager`	 |

### Request content

#### Properties

| Parameter        | Type    | Description                                                          |
|------------------|---------|----------------------------------------------------------------------|
| priority         | Integer | Standard RabbitMQ property to sort messages by priority order.       |
| content_encoding | String  | Standard RabbitMQ property for the encoding type of the message      |
| content_type     | String  | Standard RabbitMQ property for the MIME Type of the message sent     |
| delivery_mode    | Integer | Standard RabbitMQ property for the delivery mode (persistent or not) |

#### Headers

| Header                           | Value                                                                                                                                                                                |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| regards.tenant                   | The [tenant or project](../../../../concepts/03-multitenant.md) to request. It **must** be an existing Regards tenant.                                                               |
| regards.request.id               | String of max 36 characters long. **You must ensure that this id is unique**.                                                                                                        |
| regards.request.date             | ISO 8601 date (**can be in the future to delay request processing**). <br/>See [How it works section](../../conception.md#delaying-the-processing-of-requests) for more information. |
| regards.request.owner            | String of max 128 characters long                                                                                                                                                    |
| regards.request.file_update_mode | `REPLACE` or `APPEND`.<br/>See [How it works section](../../conception.md#product-associated-files) for more information.                                                            |

:::info
Use the request date parameter to delay the request processing if you need to by giving a date in the future.
The given date, will the execution date of our request.
If a past date is provided, request will be processed as soon as possible.
:::

#### Body

| Property | Type                                                               |
|----------|--------------------------------------------------------------------|
| metadata | (See below)                                                        |
| feature  | (look at [description here](../geojson-feature-format.md#feature)) |

:::info
Properties to be updated will be merged with existing ones.
:::

With metadata being described as this:

|            Path             |   Type   |                                                                                 Description                                                                                 | Optional |
|:---------------------------:|:--------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------:|
|          storages           | `Array`  | Target storages if there are files to store (**may be an empty list!**).<br/>See [How it works section](../../conception.md#product-associated-files) for more information. |  false   |
| storages[].pluginBusinessId | `String` |                                                  Storage plugin identifier (previously configured in `Storage Management`                                                   |  false   |
|   storages[].targetTypes    | `Array`  |                                                         List of data object types accepted by this storage location                                                         |   true   |
|    storages[].storePath     | `String` |                                                                    Directory in which to store the file                                                                     |   true   |
|          priority           | `String` |                            `HIGH`, `NORMAL`, `LOW`.<br/> See [How it works section](../../conception.md#request-priority) for more information.                             |   True   |
|    acknowledgedRecipient    | `String` |                                                          Identifier of the recipient that has to be acknowledged.                                                           |   true   |

### Example with only metadata update

With this example request you will update the feature identified with the given URN by overriding two parameters: 
 - properties_file_characterization.invalidation_date
 - properties_file_characterization.valid

```properties
# Headers
regards.tenant=project1
regards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563
regards.request.owner=owner
```

```json
{
  "metadata": {
    "storages": [],
    "priority": "NORMAL"
  },
  "feature": {
    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",
    "properties": {
      "file_characterization": {
        "invalidation_date": "2019-12-03T12:31:42.466Z",
        "valid": false
      }
    }
  }
}
```

### Example with associated files update

With this example request you will update the feature identified with the given URN by:
 - overriding two parameters 
 - Adding a file to the product

The file is added to an existing ones thanks to the `regards.request.file_update_mode=APPEND` header parameter.
`rs-fem` service can handle files update with [different methods](../../conception.md#product-associated-files).

```properties
# Headers
regards.tenant=project1
regards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563
regards.request.owner=owner
regards.request.date=2019-07-04T01:03:00
regards.request.file_update_mode=APPEND
```

```json
{
  "metadata": {
    "storages": [],
    "priority": "NORMAL"
  },
  "feature": {
    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",
    "files": [
      {
        "locations": [
          {
            "storage": "S3Server",
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
    "properties": {
      "file_characterization": {
        "invalidation_date": "2019-12-03T12:31:42.466Z",
        "valid": false
      }
    }
  }
}
```

:::info
To find an example of how to store or reference files associated with the product, please refer to the
[create product guide examples](./amqp-publish-create-product-request.md).
:::

### Responses format

To learn how to subscribe to your request responses as described in the introduction
diagram see [Subscribe to responses](./amqp-subscribe-request-response.md).
