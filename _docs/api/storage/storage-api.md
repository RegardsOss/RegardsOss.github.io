---
layout: classic-docs
title: REGARDS Storage API
categories:
  - api
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [AIPController](#aipcontroller)
  - [Overview](#overview)
  - [Retrieve multiple AIP metadata](#retrieve-multiple-aip-metadata)
  - [Submit AIPs successfully](#submit-aips-successfully)
  - [Submit AIPs with partial fail](#submit-aips-with-partial-fail)
  - [Submit AIPs with no valid AIPs](#submit-aips-with-no-valid-aips)
  - [Submit AIPs that are already stored](#submit-aips-that-are-already-stored)
  - [Retrieve one AIP metadata](#retrieve-one-aip-metadata)
  - [Retrieve multiple AIP metadata](#retrieve-multiple-aip-metadata-1)
  - [Retrieve multiple AIP metadata associated to a specific tag](#retrieve-multiple-aip-metadata-associated-to-a-specific-tag)
  - [Retrieve the list of files associated to an AIP](#retrieve-the-list-of-files-associated-to-an-aip)
  - [Retrieve the history of an AIP](#retrieve-the-history-of-an-aip)
  - [Retrieve the different versions of an AIP](#retrieve-the-different-versions-of-an-aip)
  - [Require availability of files](#require-availability-of-files)
  - [Download AIP file](#download-aip-file)
  - [Delete AIP](#delete-aip)
- [PrioritizedDataStorageController](#prioritizeddatastoragecontroller)
  - [Overview](#overview-1)
  - [Retrieve multiple Prioritized Data Storage thanks to their type](#retrieve-multiple-prioritized-data-storage-thanks-to-their-type)
  - [Create a Prioritized Data Storage](#create-a-prioritized-data-storage)
  - [Retrieve a Prioritized Data Storage](#retrieve-a-prioritized-data-storage)
  - [Update the Data Storage associate to the Prioritzed Data Storage](#update-the-data-storage-associate-to-the-prioritzed-data-storage)
  - [Increase Prioritized Data Storage priority](#increase-prioritized-data-storage-priority)
  - [Decrease Prioritized Data Storage priority](#decrease-prioritized-data-storage-priority)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
# AIPController

## Overview

    This API allows to create, list, update, delete AIPs and extract some of its information.

## Retrieve multiple AIP metadata

    Allow to retrieve multiple aip metadata thanks to their state and submission date

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAips/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAips/request-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAips/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAips/http-response.md %}

## Submit AIPs successfully

    Validate and store the specified AIPs

{% include_relative generated-snippets/AIPControllerIT/testStore/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testStore/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testStore/http-response.md %}

## Submit AIPs with partial fail

    Validate and store the specified AIPs

{% include_relative generated-snippets/AIPControllerIT/testStoreFailPartial/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreFailPartial/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreFailPartial/http-response.md %}

## Submit AIPs with no valid AIPs

    Validate and store the specified AIPs

{% include_relative generated-snippets/AIPControllerIT/testStoreUnvalid/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreUnvalid/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreUnvalid/http-response.md %}

## Submit AIPs that are already stored

    Validate and store the specified AIPs

{% include_relative generated-snippets/AIPControllerIT/testStoreTotalFail/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreTotalFail/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testStoreTotalFail/http-response.md %}

## Retrieve one AIP metadata

    Allow to retrieve a given aip metadata thanks to its ipId

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAip/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAip/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAip/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAip/http-response.md %}

## Retrieve multiple AIP metadata

    Allow to retrieve a collection of aip corresponding to the given set of ids

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipBulk/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipBulk/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipBulk/http-response.md %}

## Retrieve multiple AIP metadata associated to a specific tag

    Retrieve a collection of AIP according to a tag

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipTag/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipTag/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipTag/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipTag/http-response.md %}

## Retrieve all AIP tags

  Retrieve a collection of all AIP tags

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAllAipsTags/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAllAipsTags/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAllAipsTags/http-response.md %}

## Retrieve all AIP tags of filtered AIPs

  Retrieve a collection of all tags of AIP described by an AIP filter

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipsTagsWithFilter/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipsTagsWithFilter/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAipsTagsWithFilter/http-response.md %}

## Retrieve the list of files associated to an AIP

    Send the list of files metadata of a specified aip

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPFiles/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPFiles/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPFiles/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPFiles/http-response.md %}

## Retrieve the history of an AIP

    Send the history of event occurred on each data file of the specified AIP

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPHistory/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPHistory/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPHistory/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPHistory/http-response.md %}

## Retrieve the different versions of an AIP

    Send the list of versions of an aip through their ip ids

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response.md %}

## Require availability of files

    Allow to request download availability for given files and return already available files

{% include_relative generated-snippets/AIPControllerIT/testMakeAvailable/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testMakeAvailable/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testMakeAvailable/http-response.md %}

## Download AIP file

    Download one file from a given AIP by checksum

{% include_relative generated-snippets/AIPControllerIT/testDownload/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testDownload/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testDownload/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testDownload/http-response.md %}

## Delete AIP

    Allow to delete a given aip

{% include_relative generated-snippets/AIPControllerIT/testDelete/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testDelete/path-parameters.md %}

{% include_relative generated-snippets/AIPControllerIT/testDelete/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testDelete/http-response.md %}

## Add tags to multiple AIPs

    Add given tags to AIPs following the given criteria

{% include_relative generated-snippets/AIPControllerIT/testAddTagToAIPsByQuery/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testAddTagToAIPsByQuery/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testAddTagToAIPsByQuery/http-response.md %}

## Remove tags to multiple AIPs

    Remove given tags from AIPs following the given criteria

{% include_relative generated-snippets/AIPControllerIT/testDeleteTagFromAIPsByQuery/http-request.md %}

{% include_relative generated-snippets/AIPControllerIT/testDeleteTagFromAIPsByQuery/request-body.md %}

{% include_relative generated-snippets/AIPControllerIT/testDeleteTagFromAIPsByQuery/http-response.md %}

# AIPSessionController

## Overview

    This AIP allows to retrieve AIPSessions

## Retrieve multiple AIP sessions

    Allow to retrieve a page of AIP sessions

{% include_relative generated-snippets/AIPSessionControllerIT/testRetrieveSessions/http-request.md %}

{% include_relative generated-snippets/AIPSessionControllerIT/testRetrieveSessions/request-parameters.md %}

{% include_relative generated-snippets/AIPSessionControllerIT/testRetrieveSessions/request-body.md %}

{% include_relative generated-snippets/AIPSessionControllerIT/testRetrieveSessions/http-response.md %}

# PrioritizedDataStorageController

## Overview

    This API allows to create, list, update, delete PrioritizedDataStorages.

## Retrieve multiple Prioritized Data Storage thanks to their type

    Allow to retrieve prioritized data storages by their type

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieveByType/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieveByType/request-parameters.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieveByType/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieveByType/http-response.md %}

## Create a Prioritized Data Storage

    Allow to create a prioritized data storage

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testCreate/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testCreate/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testCreate/request-fields.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testCreate/http-response.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testCreate/response-fields.md %}

## Retrieve a Prioritized Data Storage

    Allow to retrieve a prioritized data storage thanks to its id

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieve/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieve/path-parameters.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieve/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieve/http-response.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testRetrieve/response-fields.md %}

## Update the Data Storage associate to the Prioritzed Data Storage

    Allow to update a prioritized data storage thanks to its id

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/path-parameters.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/request-fields.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/http-response.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testUpdate/response-fields.md %}

## Increase Prioritized Data Storage priority

    Allow to increase a prioritized data storage priority thanks to its id

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testIncreasePriority/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testIncreasePriority/path-parameters.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testIncreasePriority/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testIncreasePriority/http-response.md %}

## Decrease Prioritized Data Storage priority

    Allow to decrease a prioritized data storage priority thanks to its id

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testDecreasePriority/http-request.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testDecreasePriority/path-parameters.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testDecreasePriority/request-body.md %}

{% include_relative generated-snippets/PrioritizedDataStorageControllerIT/testDecreasePriority/http-response.md %}
