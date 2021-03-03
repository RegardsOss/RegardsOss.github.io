---
id: backend-storage-api
title: REGARDS Storage API
sidebar_label: Storage
slug: /development/backend/storage/api
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-storage port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../authentication/api) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-storage port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-storage/api/v1/<endpoint>
```

# StorageLocationController

## Overview

    API to access REST Actions on storage locations.

## Configure location

{@import generated-snippets/StorageLocationControllerIT/configureLocation/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/configureLocation/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/configureLocation/http-response.md}

### Already exists response

{@import generated-snippets/StorageLocationControllerIT/configureLocation_alreadyExists/http-response.md}

## Copy files

{@import generated-snippets/StorageLocationControllerIT/copyFiles/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/copyFiles/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/copyFiles/http-response.md}

## Decrease priority

{@import generated-snippets/StorageLocationControllerIT/decreasePriority/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/decreasePriority/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/decreasePriority/http-response.md}

## Delete

{@import generated-snippets/StorageLocationControllerIT/delete/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/delete/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/delete/http-response.md}

## Delete files

{@import generated-snippets/StorageLocationControllerIT/deleteFiles/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/deleteFiles/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/deleteFiles/http-response.md}

## Increase priority

{@import generated-snippets/StorageLocationControllerIT/increasePriority/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/increasePriority/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/increasePriority/http-response.md}

## Retrieve all files

{@import generated-snippets/StorageLocationControllerIT/retreiveAll/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/retreiveAll/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/retreiveAll/http-response.md}

## Retrieve file

{@import generated-snippets/StorageLocationControllerIT/retreiveOne/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/retreiveOne/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/retreiveOne/http-response.md}

## Retry errors

{@import generated-snippets/StorageLocationControllerIT/retryErrors/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/retryErrors/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/retryErrors/http-response.md}

## Update location

{@import generated-snippets/StorageLocationControllerIT/updateLocation/http-request.md}

{@import generated-snippets/StorageLocationControllerIT/updateLocation/request-body.md}

{@import generated-snippets/StorageLocationControllerIT/updateLocation/http-response.md}