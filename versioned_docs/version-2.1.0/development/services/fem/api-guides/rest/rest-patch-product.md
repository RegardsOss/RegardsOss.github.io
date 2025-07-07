---
title: Patch products
sidebar_label: Patch products
sidebar_position: 2
slug: /development/backend/services/fem/guides/rest/patch-product
---
This section describes how to patch a product with the `rs-fem` service using the REST interfaces.

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

The diagram below explains the global processing of a product patch request by REGARDS system.
For a REGARDS client using REST interface, the main steps are:

1. Authenticate to REGARDS in order to retrieve a valid token. See
   the [authenticate guide](../../../../services/authentication/api-guides/rest/authent-oauth2.mdx).
2. Send your product archive request containing product information to RS-FEM microservice
3. Retrieve information about your request status from RS-FEM microservice.

![sequence](../../sources/feature-request-rest-nominal.png)

## REST API

### How to

The [Regards REST API concept](../../../../concepts/05-rest-api.md) describe how REST interfaces must be handled to
submit requests.

### Endpoint

| Endpoint  | Verb  |
|-----------|-------|
| /features | PATCH |

### Request content

| Property |                | Type                                                               |
|----------|----------------|--------------------------------------------------------------------|
| metadata | `Object`       | (See below)                                                        |
| features | `List<Object>` | (look at [description here](../geojson-feature-format.md#feature)) |

:::info
Provided feature must only contains urn parameter to identify the feature to update.
Other provided parameters will be used to update.
:::

With metadata being described as this:

|            Path             |   Type   |                                                                                 Description                                                                                 | Optional |
|:---------------------------:|:--------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------:|
|          storages           | `Array`  | Target storages if there are files to store (**may be an empty list!**).<br/>See [How it works section](../../conception.md#product-associated-files) for more information. |  false   |
| storages[].pluginBusinessId | `String` |                                                  Storage plugin identifier (previously configured in `Storage Management`                                                   |  false   |
|   storages[].targetTypes    | `Array`  |                                                         List of data object types accepted by this storage location                                                         |   true   |
|    storages[].storePath     | `String` |                                                                    Directory in which to store the file                                                                     |   true   |
|          priority           | `String` |                            `HIGH`, `NORMAL`, `LOW`.<br/> See [How it works section](../../conception.md#request-priority) for more information.                             |  false   |
|    acknowledgedRecipient    | `String` |                                                          Identifier of the recipient that has to be acknowledged.                                                           |   true   |

### Example with only metadata update

With this exemple request you will update the feature identified with the given urn by overriding two parameters :
- properties_file_characterization.invalidation_date
- properties_file_characterization.valid

```bash
curl -X PATCH https://regards.com/api/v1/rs-fem/features --data "@request.json" \
 -H "Authorization: Bearer <token>" \
 -H "Content-Type: application/json"
```

```json title='Content of request.json file'
{
  "requestOwner": "test",
  "metadata": {
    "storages": [],
    "priority": "NORMAL"
  },
  "features": [
    {
      "urn": "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",
      "properties": {
        "file_characterization": {
          "valid": false
        }
      }
    }
  ],
  "type": "FeatureCollection"
}
```


### Example with associated files update

With this example request you will update the feature identified with the given URN by:
- overriding two parameters
- Adding a file to the product.

The file is added to an existing ones thanks to the `regards.request.file_update_mode=APPEND` header parameter.
`rs-fem` service can handle files update with [different methods](../../conception.md#product-associated-files).

```bash
curl -X PATCH https://regards.com/api/v1/rs-fem/features --data "@request.json" \
 -H "Authorization: Bearer <token>" \
 -H "Content-Type: application/json"
```

```json title='Content of request.json file'
{
  "requestOwner": "test",
  "metadata": {
    "storages": [],
    "priority": "NORMAL"
  },
  "features": [
    {
      "urn": "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",
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
          "valid": false
        }
      }
    }
  ],
  "type": "FeatureCollection"
}
```

### Response

* **Code:** 201 Created

:::info
The success return codes only means that your request has been granted and will be processed soon.
:::

**Response Body:**

| Name    | Type                  | Description                                      |
|---------|-----------------------|--------------------------------------------------|
| granted | `Map<String, String>` | Couples FeatureId/requestId for granted requests |
| denied  | `Map<String, String>` | Couples FeatureId/cause for denied requests      |
| message | `List<String>`        | Error messages information                       |

```json title='Example of creation response'

{
  "granted": {
    "ProductId001": "request-id-001"
  },
  "denied": {
    "ProductId002": "Missing parameter cloud_coverage"
  },
  "messages": []
}
```