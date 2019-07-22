---
layout: classic-docs
title: REGARDS Storage API
---

{% include toc.md %}

{% include howto-api.md name="rs-storage" %}

# DocumentController

## Create a new doculent

{% include_relative generated-snippets/DocumentControllerIT/testPostDocument/http-request.md %}

{% include_relative generated-snippets/DocumentControllerIT/testPostDocument/request-body.md %}

{% include_relative generated-snippets/DocumentControllerIT/testPostDocument/http-response.md %}

## Update a document

{% include_relative generated-snippets/DocumentControllerIT/testUpdateDocument/http-request.md %}

{% include_relative generated-snippets/DocumentControllerIT/testUpdateDocument/request-body.md %}

{% include_relative generated-snippets/DocumentControllerIT/testUpdateDocument/http-response.md %}

## Delete document

{% include_relative generated-snippets/DocumentControllerIT/testDeleteDocument/http-request.md %}

{% include_relative generated-snippets/DocumentControllerIT/testDeleteDocument/request-body.md %}

{% include_relative generated-snippets/DocumentControllerIT/testDeleteDocument/http-response.md %}

## Retrieve one document

{% include_relative generated-snippets/DocumentControllerIT/testGetDocumentById/http-request.md %}

{% include_relative generated-snippets/DocumentControllerIT/testGetDocumentById/request-body.md %}

{% include_relative generated-snippets/DocumentControllerIT/testGetDocumentById/http-response.md %}

## Retrieve documents

{% include_relative generated-snippets/DocumentControllerIT/testGetAllDocuments/http-request.md %}

{% include_relative generated-snippets/DocumentControllerIT/testGetAllDocuments/request-body.md %}

{% include_relative generated-snippets/DocumentControllerIT/testGetAllDocuments/http-response.md %}
