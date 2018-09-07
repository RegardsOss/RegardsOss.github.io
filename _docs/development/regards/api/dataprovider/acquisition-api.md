---
layout: classic-docs
title: REGARDS DataProvider API
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Overview](#overview)
- [Acquisition chain management API](#acquisition-chain-management-api)
  - [Create an acquisition chain](#create-an-acquisition-chain)
  - [Get all acquisition chain](#get-all-acquisition-chain)
  - [Get an acquisition chain](#get-an-acquisition-chain)
  - [Start and stop an acquisition chain](#start-and-stop-an-acquisition-chain)
  - [Update an acquisition chain](#update-an-acquisition-chain)
  - [Delete an acquisition chain](#delete-an-acquisition-chain)
- [Search files API](#search-files-api)
  - [Search all files](#search-all-files)
  - [Search files by state](#search-files-by-state)
- [Search product API](#search-product-api)
  - [Search all files](#search-all-files-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
# Overview

    This API allows to create, launch and monitor acquisition processing chains.

# Acquisition chain management API

## Create an acquisition chain

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-request.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-fields.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response.md %}

## Get all acquisition chain

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-request.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/request-body.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response.md %}

## Get an acquisition chain

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/http-request.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/path-parameters.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/request-body.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/getOneChain/http-response.md %}

## Start and stop an acquisition chain

An enabled acquisition chain can be started via a `GET
/chains/{chainId}/start` request,  

or stopped via a `GET /chains/{chainId}/stop` request.

See [Chain URL parameters](#chain-path-parameters).

## Update an acquisition chain

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-request.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/path-parameters.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/request-body.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/updateChain/http-response.md %}

## Delete an acquisition chain

Only disabled acquisition chain can be deleted.

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/http-request.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/path-parameters.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/request-body.md %}

{% include_relative generated-snippets/AcquisitionProcessingChainControllerIT/deleteChain/http-response.md %}

# Search files API

## Search all files

Retrieves all acquired files regardless the acquisition chain.

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-request.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-parameters.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchAllFiles/request-body.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchAllFiles/response-fields.md %}

## Search files by state

Retrieves all acquired files with the specified state.

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchFilesByState/http-request.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchFilesByState/request-parameters.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchFilesByState/request-body.md %}

{% include_relative generated-snippets/AcquisitionFileControllerIT/searchFilesByState/http-response.md %}

# Search product API

## Search all files

Retrieves all acquired files regardless the acquisition chain.

{% include_relative generated-snippets/ProductControllerTestIT/searchForProductsTest/http-request.md %}

{% include_relative generated-snippets/ProductControllerTestIT/searchForProductsTest/request-parameters.md %}

{% include_relative generated-snippets/ProductControllerTestIT/searchForProductsTest/request-body.md %}

{% include_relative generated-snippets/ProductControllerTestIT/searchForProductsTest/http-response.md %}

{% include_relative generated-snippets/ProductControllerTestIT/searchForProductsTest/response-fields.md %}
