---
layout: classic-docs
title: REGARDS Ingest API
categories:
  - api
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Overview](#overview)
- [SIP management](#sip-management)
  - [Ingestion of a SIP collection](#ingestion-of-a-sip-collection)
  - [Import a SIP collection](#import-a-sip-collection)
  - [Search SIP](#search-sip)
  - [Get one SIP](#get-one-sip)
  - [Retry to store a SIP already submitted](#retry-to-store-a-sip-already-submitted)
  - [Delete a SIP identified by its sipId](#delete-a-sip-identified-by-sipid)
    - [Example response](#example-response)
  - [Delete SIP(s) identified by its providerId](#delete-sips-identified-by-providerid)
    - [Example response](#example-response-1)
- [Ingestion session management](#ingestion-session-management)
  - [Get an ingestion’s session](#get-an-ingestions-session)
  - [Search ingestion’s sessions](#search-ingestions-sessions)
  - [Delete all SIP for a session id](#delete-all-sip-for-a-session-id)
- [Ingestion processing chain management](#ingestion-processing-chain-management)
  - [Create an Ingestion processing chain](#create-an-ingestion-processing-chain)
  - [Update an Ingestion processing chain](#update-an-ingestion-processing-chain)
  - [Get an Ingestion processing chain](#get-an-ingestion-processing-chain)
  - [Delete an Ingestion processing chain](#delete-an-ingestion-processing-chain)
  - [Import an Ingestion processing chain](#import-an-ingestion-processing-chain)
  - [Export an Ingestion processing chain](#export-an-ingestion-processing-chain)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
# Overview

    This API allows to submit and search SIP (Submission Information Package).

# SIP management

## Ingestion of a SIP collection

Submit a SIP collection as a bulk POST request.

{% include_relative generated-snippets/SIPControllerIT/ingestSips/http-request.md %}

{% include_relative generated-snippets/SIPControllerIT/ingestSips/request-body.md %}

{% include_relative generated-snippets/SIPControllerIT/ingestSips/request-fields.md %}

{% include_relative generated-snippets/SIPControllerIT/ingestSips/http-response.md %}

## Import a SIP collection

Submit SIP collection to REGARDS by upload a file containing the SIP
collection in GeoJson format to REGARDS.

{% include_relative generated-snippets/SIPControllerIT/importValidSips/http-request.md %}

{% include_relative generated-snippets/SIPControllerIT/importValidSips/request-parameters.md %}

{% include_relative generated-snippets/SIPControllerIT/importValidSips/http-response.md %}

{% include_relative generated-snippets/SIPControllerIT/importPartialInvalidSips/http-response.md %}

{% include_relative generated-snippets/SIPControllerIT/importAllInvalidSips/http-response.md %}

## Search SIP

{% include_relative generated-snippets/SIPControllerIT/getSips/http-request.md %}

{% include_relative generated-snippets/SIPControllerIT/getSips/request-parameters.md %}

{% include_relative generated-snippets/SIPControllerIT/getSips/http-response.md %}

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
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
<th>Constraints</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><code>sipId</code></p></td>
<td><p>String</p></td>
<td><p>The REGARDS id of the SIP</p></td>
<td><p>Must match the following format <strong>URN:OAISIdentifier:entityType:tenant:UUID(entityId):Vversion[,order][:REVrevision]</strong><br />
with <strong>OAISIdentifier</strong> is <strong>SIP</strong>, <strong>AIP</strong>, <strong>DIP</strong>.<br />
and <strong>entityTpe</strong> is <strong>COLLECTION</strong>, <strong>DOCUMENT</strong>, <strong>DATA</strong>, <strong>DATASET</strong>.</p></td>
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

{% include_relative generated-snippets/SIPControllerIT/getOneSession/http-request.md %}

{% include_relative generated-snippets/SIPControllerIT/getOneSession/path-parameters.md %}

{% include_relative generated-snippets/SIPControllerIT/getOneSession/request-body.md %}

{% include_relative generated-snippets/SIPControllerIT/getOneSession/http-response.md %}

## Search ingestion’s sessions

{% include_relative generated-snippets/SIPControllerIT/getSession/http-request.md %}

{% include_relative generated-snippets/SIPControllerIT/getSession/request-parameters.md %}

{% include_relative generated-snippets/SIPControllerIT/getSession/http-response.md %}

## Delete all SIP for a session id

All the SIP of a session can be deleted via a `DELETE /sessions/{id}`
request.  

  - **URL params**

| Parameter | Type   | Description    | Constraints |
| --------- | ------ | -------------- | ----------- |
| `id`      | String | The session id |             |

# Ingestion processing chain management

## Create an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/request-body.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/createIngestProcessingChain/http-response.md %}

## Update an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/path-parameters.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/request-body.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/updateIngestProcessingChain/http-response.md %}

## Get an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/path-parameters.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/getOneIngestProcessingChain/http-response.md %}

## Delete an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/path-parameters.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/deleteIngestProcessingChain/http-response.md %}

## Import an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/request-parameters.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/importProcessingChain/http-response.md %}

## Export an Ingestion processing chain

{% include_relative generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/http-request.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/path-parameters.md %}

{% include_relative generated-snippets/IngestProcessingChainControllerIT/exportProcessingChain/http-response.md %}
