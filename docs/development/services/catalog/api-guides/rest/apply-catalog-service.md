---
title: Apply catalog service
sidebar_label: Apply catalog service
slug: /development/services/catalog/api-guides/rest/apply-catalog-service
sidebar_position: 7
---

## Introduction

This section describes how to run a **Catalog service** on `rs-catalog` microservice.

## REST API

### How to

The [Regards REST API concept](../../../../concepts/05-rest-api.md) describes how REST interfaces must be handled to
submit requests.

### Endpoint

| Endpoint                                               | Verb |
|--------------------------------------------------------|------|
| [/{pluginBusinessId}/apply](./catalog-api-swagger.mdx) | POST |

### Request body format

```json
{
  "entityType": "",
  "searchRequest": {
    "engineType": "",
    "datasetUrn": "",
    "searchParameters": {
    },
    "entityIdsToInclude": [],
    "entityIdsToExclude": [],
    "searchDateLimit": ""
  },
  "dynamicParamters": {
    "paramter": "value"
  }
}
```

| Parameter                        | Type           | Description                                                                                                          | Mandatory |
|----------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------|-----------|
| entityType                       | `String`       | Entity type on which apply service. Possible values are: <br/>-**DATA**<br/>-**DATASET**<br/>-**COLLECTION**<br/>    | True      |
| searchRequest                    | `Object`       | Search query to find products                                                                                        | True      |
| searchRequest.engineType         | `String`       | Search engine type depends on available plugins. Possible values are **legacy**, **stac** and **opensearch**         | True      |
| searchRequest.datasetUrn         | `String`       | Filter search on a specific dataset by passing its **URN**                                                           | False     |
| searchRequest.searchParameters   | `Object`       | Search parameters depnds on engine type selected                                                                     | True      |
| searchRequest.entityIdsToInclude | `List<String>` | List of unqiue identifiers to include in search                                                                      | False     |
| searchRequest.entityIdsToExclude | `List<String>` | List of unqiue identifiers to exclude from search                                                                    | False     |
| searchRequest.searchDateLimit    | `Date`         | Deadline for the creation of products to be searched.                                                                | False     |
| dynamicParameters                | `Object`       | List of key/values for specific plugin parameters. Key is the parameter name and value is the value of the parameter | False     |

```json title='Example to aplly a download plugin with legcy engine'
{
  "entityType": "DATA",
  "searchRequest": {
    "engineType": "legacy",
    "searchParameters": {
      "q": "properties.valid: true AND properties.data_type: type01"
    }
  }
}
```