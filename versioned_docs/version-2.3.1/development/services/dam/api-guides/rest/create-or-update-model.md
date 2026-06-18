---
id: dam-api-guides-amqp-create-or-update-model
title: Create or update a model
sidebar_label: Create or update a model
slug: /development/backend/services/dam/api-guides/amqp/am-api-guides-amqp-create-or-update-model
---

## Introduction

This endpoint allows you to create a new model or update an existing one.

To update an existing one, the XML model file provided must use the same **model->name** value.

To create your XML model file see [model description](../../../../appendices/03-create-model.md)

:::warning
In case of update, check for [model update restrictions](../../../../../user-documentation/3-data-organization/models.md)
:::

## REST API

### How to

The [Regards REST API concept](../../../../concepts/05-rest-api.md) describe how REST interfaces must be handled to
submit requests.

### Endpoint

| Endpoint  | Verb |
|-----------|------|
| /models/import | POST |

### Request content

To create or update an existing model you have to provide the XML file with the request as a "multipart/form-data" content.

### Example

```bash
curl -X POST https://regards.com/api/v1/rs-dam/models/import \
  -H "Accept: application/json" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@/path/to/your/file.xml"
```

### Response

* **Code: 201** Created : Model successfully created or updated.
* **Code: 403** Forbidden : You don't have permission to create or update a model.
* **Code: 400** Bad request : Your data model file is not valid. Check file model format [here](../../../../appendices/03-create-model.md)