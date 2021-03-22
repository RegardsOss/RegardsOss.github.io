---
id: backend-ingest-api
title: REGARDS Ingest API
sidebar_label: Ingest
slug: /development/backend/ingest/api/
---


# Overview

    This API allows to submit and search SIP (Submission Information Package).

# SIP management

## Ingestion of a SIP collection

Submit a SIP collection as a bulk POST request.

{@import generated-snippets/SIPControllerIT/ingestSips/http-request.md}



{@import generated-snippets/SIPControllerIT/ingestSips/request-body.md}

{@import generated-snippets/SIPControllerIT/ingestSips/request-fields.md}

{@import generated-snippets/SIPControllerIT/ingestSips/http-response.md}

## Import a SIP collection

Submit SIP collection to REGARDS by upload a file containing the SIP
collection in GeoJson format to REGARDS.

{@import generated-snippets/SIPControllerIT/importValidSips/http-request.md}

{@import generated-snippets/SIPControllerIT/importValidSips/request-parameters.md}

{@import generated-snippets/SIPControllerIT/importValidSips/http-response.md}

{@import generated-snippets/SIPControllerIT/importPartialInvalidSips/http-response.md}

{@import generated-snippets/SIPControllerIT/importAllInvalidSips/http-response.md}

## Search SIP

{@import generated-snippets/SIPControllerIT/getSips/http-request.md}

{@import generated-snippets/SIPControllerIT/getSips/request-parameters.md}

{@import generated-snippets/SIPControllerIT/getSips/http-response.md}

## Get one SIP

Retrieve one SIP by its sipId.

## Retry to store a SIP already submitted

A SIP can be retry to be stored via a `POST /sips/{sipId}/retry`
request.  
This action will be rejected if the SIP state is not
**AIP\_GEN\_ERROR**, **INVALID** or **DELETED**.  
This action consists to change the SIP state to **CREATED**.  

The response is the SIP in GeoJson format.

  - **URL params**

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
      <th>Constraints</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`sipId`</td>
      <td>String</td>
      <td>The REGARDS id of the SIP</td>
      <td>Must match the following format <strong>URN:OAISIdentifier:entityType:tenant:UUID(entityId):Vversion[,order][:REVrevision]</strong><br />
      with <strong>OAISIdentifier</strong> is <strong>SIP</strong>, <strong>AIP</strong>, <strong>DIP</strong>.<br />
      and <strong>entityTpe</strong> is <strong>COLLECTION</strong>, <strong>DOCUMENT</strong>, <strong>DATA</strong>, <strong>DATASET</strong>.</td>
    </tr>
  </tbody>
</table>

## Delete a SIP identified by sipId

A SIP can be deleted via a `DELETE /sips/{sipId}` request.  
The response is a set with the SIP that can not be deleted.

  - **URL params**

See [ipIP parameter description](#ip-parameter-description).

### Example response

See [SIP collection](#sip-collection-response).

## Delete SIP(s) identified by providerId

Several SIP can be deleted via a `DELETE /sips?providerId=XYZ` request.  
The response is a set of SIP that can not be deleted.

  - **Query
params**

| Parameter | Type   | Description                         | Constraints |
| --------- | ------ | ----------------------------------- | ----------- |
| `providerId`   | String | The id provided by the provider (i.e. id in the submitted feature) |             |

### Example response

See [SIP collection](#sip-collection-response).

# Ingestion session management

## Get an ingestion’s session

{@import generated-snippets/SIPControllerIT/getOneSession/http-request.md}

{@import generated-snippets/SIPControllerIT/getOneSession/path-parameters.md}

{@import generated-snippets/SIPControllerIT/getOneSession/request-body.md}

{@import generated-snippets/SIPControllerIT/getOneSession/http-response.md}

## Search ingestion’s sessions

{@import generated-snippets/SIPControllerIT/getSession/http-request.md}

{@import generated-snippets/SIPControllerIT/getSession/request-parameters.md}

{@import generated-snippets/SIPControllerIT/getSession/http-response.md}

## Delete all SIP for a session id

All the SIP of a session can be deleted via a `DELETE /sessions/{id}`
request.  

  - **URL params**

| Parameter | Type   | Description    | Constraints |
| --------- | ------ | -------------- | ----------- |
| `id`      | String | The session id |             |

# Ingestion processing chain management

## Create an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md}

{@import generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response.md}

## Update an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/path-parameters.md}

{@import generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/request-body.md}

{@import generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response.md}

## Get an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/path-parameters.md}

{@import generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/http-response.md}

## Delete an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/path-parameters.md}

{@import generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-response.md}

## Import an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/request-parameters.md}

{@import generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response.md}

## Export an Ingestion processing chain

{@import generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/http-request.md}

{@import generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/path-parameters.md}

{@import generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/http-response.md}

# AIP API


## Search AIPs

{@import generated-snippets/AIPControllerIT/searchAIPs/http-request.md}

{@import generated-snippets/AIPControllerIT/searchAIPs/request-fields.md}

{@import generated-snippets/AIPControllerIT/searchAIPs/request-body.md}

{@import generated-snippets/AIPControllerIT/searchAIPs/http-response.md}

{@import generated-snippets/AIPControllerIT/searchAIPs/response-fields.md}

## Search AIP categories

{@import generated-snippets/AIPControllerIT/searchAIPCategories/http-request.md}

{@import generated-snippets/AIPControllerIT/searchAIPCategories/request-fields.md}

{@import generated-snippets/AIPControllerIT/searchAIPCategories/request-body.md}

{@import generated-snippets/AIPControllerIT/searchAIPCategories/http-response.md}

{@import generated-snippets/AIPControllerIT/searchAIPCategories/response-fields.md}

## Search AIP storages

{@import generated-snippets/AIPControllerIT/searchAIPStorages/http-request.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/request-fields.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/request-body.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/http-response.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/response-fields.md}

## Search AIP tags

{@import generated-snippets/AIPControllerIT/searchAIPStorages/http-request.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/request-fields.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/request-body.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/http-response.md}

{@import generated-snippets/AIPControllerIT/searchAIPStorages/response-fields.md}

## Delete AIPs

{@import generated-snippets/AIPControllerIT/testDeleteAips/http-request.md}

{@import generated-snippets/AIPControllerIT/testDeleteAips/request-fields.md}

{@import generated-snippets/AIPControllerIT/testDeleteAips/request-body.md}

{@import generated-snippets/AIPControllerIT/testDeleteAips/http-response.md}


## Retrieve AIP version history

{@import generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-request.md}

{@import generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/request-fields.md}

{@import generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/request-body.md}

{@import generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/http-response.md}

{@import generated-snippets/AIPControllerIT/testRetrieveAIPVersionHistory/response-fields.md}

## Update AIP

{@import generated-snippets/AIPControllerIT/testUpdateAips/http-request.md}

{@import generated-snippets/AIPControllerIT/testUpdateAips/request-fields.md}

{@import generated-snippets/AIPControllerIT/testUpdateAips/request-body.md}

{@import generated-snippets/AIPControllerIT/testUpdateAips/http-response.md}


# Request API


## Search requests

{@import generated-snippets/RequestControllerIT/searchRequests/http-request.md}

{@import generated-snippets/RequestControllerIT/searchRequests/request-fields.md}

{@import generated-snippets/RequestControllerIT/searchRequests/request-body.md}

{@import generated-snippets/RequestControllerIT/searchRequests/http-response.md}

## Delete requests 

{@import generated-snippets/RequestControllerIT/deleteRequests/http-request.md}

{@import generated-snippets/RequestControllerIT/deleteRequests/request-fields.md}

{@import generated-snippets/RequestControllerIT/deleteRequests/request-body.md}

{@import generated-snippets/RequestControllerIT/deleteRequests/http-response.md}

## Retry requests 

{@import generated-snippets/RequestControllerIT/retryRequests/http-request.md}

{@import generated-snippets/RequestControllerIT/retryRequests/request-fields.md}

{@import generated-snippets/RequestControllerIT/retryRequests/request-body.md}

{@import generated-snippets/RequestControllerIT/retryRequests/http-response.md}
