---
id: backend-dataprovider-api
title: REGARDS dataprovider API
sidebar_label: Dataprovider
slug: /development/backend/services/dataprovider/api/
---


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
