---
id: backend-dam-dataset-api
title: REGARDS Dataset API
sidebar_label: Dataset
slug: /development/backend/dam/api/dataset
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../authentication/api) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>
```

# DatasetController


## Retrieve datasets

{@import generated-snippets/DatasetControllerIT/testGetAllDatasets/http-request.md}

{@import generated-snippets/DatasetControllerIT/testGetAllDatasets/request-body.md}

{@import generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response.md}

## Retrive dataset attributes

{@import generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-request.md}

{@import generated-snippets/DatasetControllerIT/testGetDataSetAttributes/request-body.md}

{@import generated-snippets/DatasetControllerIT/testGetDataSetAttributes/http-response.md}

## Create a new dataset

{@import generated-snippets/DatasetControllerIT/testPostDataset/http-request.md}

{@import generated-snippets/DatasetControllerIT/testPostDataset/request-body.md}

{@import generated-snippets/DatasetControllerIT/testPostDataset/http-response.md}

## Validate a dataset subsetting request

{@import generated-snippets/DatasetControllerIT/testSubsettingValidation/http-request.md}

{@import generated-snippets/DatasetControllerIT/testSubsettingValidation/request-body.md}

{@import generated-snippets/DatasetControllerIT/testSubsettingValidation/http-response.md}

## Update dataset

{@import generated-snippets/DatasetControllerIT/testUpdateDataset/http-request.md}

{@import generated-snippets/DatasetControllerIT/testUpdateDataset/request-body.md}

{@import generated-snippets/DatasetControllerIT/testUpdateDataset/http-response.md}

## Delete dataset

{@import generated-snippets/DatasetControllerIT/testDeleteDataset/http-request.md}

{@import generated-snippets/DatasetControllerIT/testDeleteDataset/request-body.md}

{@import generated-snippets/DatasetControllerIT/testDeleteDataset/http-response.md}

## Retrieve dataset includes data attributes

{@import generated-snippets/DatasetControllerIT/testGetDataAttributes/http-request.md}

{@import generated-snippets/DatasetControllerIT/testGetDataAttributes/request-body.md}

{@import generated-snippets/DatasetControllerIT/testGetDataAttributes/http-response.md}

## Retrieve one dataset

{@import generated-snippets/DatasetControllerIT/testGetDatasetById/http-request.md}

{@import generated-snippets/DatasetControllerIT/testGetDatasetById/request-body.md}

{@import generated-snippets/DatasetControllerIT/testGetDatasetById/http-response.md}
