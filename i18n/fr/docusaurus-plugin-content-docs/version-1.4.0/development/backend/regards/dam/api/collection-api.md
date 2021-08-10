---
id: backend-dam-collection-api
title: REGARDS Collection API
sidebar_label: Collection
slug: /development/backend/dam/api/collection/
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../../../authentication/api/) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>
```


# CollectionController

## Associate a collection to an other one

{@import _generated-snippets/CollectionControllerNoTxIT/testDissociateCollections/http-request.md}

{@import _generated-snippets/CollectionControllerNoTxIT/testDissociateCollections/request-body.md}

{@import _generated-snippets/CollectionControllerNoTxIT/testDissociateCollections/http-response.md}

## Update a collection

{@import _generated-snippets/CollectionControllerIT/testUpdateCollection/http-request.md}

{@import _generated-snippets/CollectionControllerIT/testUpdateCollection/request-body.md}

{@import _generated-snippets/CollectionControllerIT/testUpdateCollection/http-response.md}

## Delete a collection

{@import _generated-snippets/CollectionControllerIT/testDeleteCollection/http-request.md}

{@import _generated-snippets/CollectionControllerIT/testDeleteCollection/request-body.md}

{@import _generated-snippets/CollectionControllerIT/testDeleteCollection/http-response.md}

## Retrieve a collection

{@import _generated-snippets/CollectionControllerIT/testGetCollectionById/http-request.md}

{@import _generated-snippets/CollectionControllerIT/testGetCollectionById/request-body.md}

{@import _generated-snippets/CollectionControllerIT/testGetCollectionById/http-response.md}

## Retrive collections

{@import _generated-snippets/CollectionControllerIT/testGetAllCollections/http-request.md}

{@import _generated-snippets/CollectionControllerIT/testGetAllCollections/request-body.md}

{@import _generated-snippets/CollectionControllerIT/testGetAllCollections/http-response.md}

## Create a new collection

{@import _generated-snippets/CollectionControllerIT/testPostCollection/http-request.md}

{@import _generated-snippets/CollectionControllerIT/testPostCollection/request-body.md}

{@import _generated-snippets/CollectionControllerIT/testPostCollection/http-response.md}
