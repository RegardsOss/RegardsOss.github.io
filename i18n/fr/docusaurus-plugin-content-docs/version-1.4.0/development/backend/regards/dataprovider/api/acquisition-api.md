---
id: backend-dataprovider-api
title: REGARDS dataprovider API
sidebar_label: Dataprovider
slug: /development/backend/dataprovider/api
---


## How to access API endpoints

You can access each endpoint of this API thanks to a `Curl` request.

You can request without auhentication by adding the REGARDS project in the request thanks to the parameter `scope`
```bash
curl http://localhost:<rs-dataprovider port>/<endpoint>?scope=<project>
```
Or you can authenticate to access admin endpoints. To do so, use the [authentication API](../authentication/api) to get a token and then add the token to the request headers.

```bash
curl http://localhost:<rs-dataprovider port>/<endpoint> -H 'Authorization: bearer <token>'
```

To access endpoints from `outside` the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.

```bash
curl http://<gateway host>:<gateway port>/rs-dataprovider/api/v1/<endpoint>
```

# Overview

    This API allows to create, launch and monitor acquisition processing chains.

# Acquisition chain management API

## Create an acquisition chain

{@import generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response.md}

## Get all acquisition chain

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response.md}

## Get an acquisition chain

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/path-parameters.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/http-response.md}

## Start and stop an acquisition chain

An enabled acquisition chain can be started via a `GET
/chains/{chainId}/start` request,  

or stopped via a `GET /chains/{chainId}/stop` request.

See [Chain URL parameters](#chain-path-parameters).

## Update an acquisition chain

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/path-parameters.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response.md}

## Update state and mode

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/path-parameters.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/updateStateAndMode/http-response.md}

## Delete an acquisition chain

Only disabled acquisition chain can be deleted.

{@import generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/path-parameters.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/http-response.md}

## Export a configuration

{@import generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-fields.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/exportConfiguration/http-response.md}

## Import a configuration

{@import generated-snippets/AcquisitionProcessingChainControllerIT/importConfiguration/http-request.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/importConfiguration/request-body.md}

{@import generated-snippets/AcquisitionProcessingChainControllerIT/importConfiguration/http-response.md}

# Search files API

## Search all files

Retrieves all acquired files regardless the acquisition chain.

{@import generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-request.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-body.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchAllFiles/response-fields.md}

## Search files by state

Retrieves all acquired files with the specified state.

{@import generated-snippets/AcquisitionFileControllerIT/searchFilesByState/http-request.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchFilesByState/request-parameters.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchFilesByState/request-body.md}

{@import generated-snippets/AcquisitionFileControllerIT/searchFilesByState/http-response.md}

# Search product API

## Search all files

Retrieves all acquired files regardless the acquisition chain.

{@import generated-snippets/ProductControllerTestIT/searchForProductsTest/http-request.md}

{@import generated-snippets/ProductControllerTestIT/searchForProductsTest/request-parameters.md}

{@import generated-snippets/ProductControllerTestIT/searchForProductsTest/request-body.md}

{@import generated-snippets/ProductControllerTestIT/searchForProductsTest/http-response.md}

{@import generated-snippets/ProductControllerTestIT/searchForProductsTest/response-fields.md}
