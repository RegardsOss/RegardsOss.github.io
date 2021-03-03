---
id: backend-dam-document-api
title: REGARDS Document API
sidebar_label: Document
slug: /development/backend/dam/api/document
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

# DocumentController

## Create a new doculent

{@import generated-snippets/DocumentControllerIT/testPostDocument/http-request.md}

{@import generated-snippets/DocumentControllerIT/testPostDocument/request-body.md}

{@import generated-snippets/DocumentControllerIT/testPostDocument/http-response.md}

## Update a document

{@import generated-snippets/DocumentControllerIT/testUpdateDocument/http-request.md}

{@import generated-snippets/DocumentControllerIT/testUpdateDocument/request-body.md}

{@import generated-snippets/DocumentControllerIT/testUpdateDocument/http-response.md}

## Delete document

{@import generated-snippets/DocumentControllerIT/testDeleteDocument/http-request.md}

{@import generated-snippets/DocumentControllerIT/testDeleteDocument/request-body.md}

{@import generated-snippets/DocumentControllerIT/testDeleteDocument/http-response.md}

## Retrieve one document

{@import generated-snippets/DocumentControllerIT/testGetDocumentById/http-request.md}

{@import generated-snippets/DocumentControllerIT/testGetDocumentById/request-body.md}

{@import generated-snippets/DocumentControllerIT/testGetDocumentById/http-response.md}

## Retrieve documents

{@import generated-snippets/DocumentControllerIT/testGetAllDocuments/http-request.md}

{@import generated-snippets/DocumentControllerIT/testGetAllDocuments/request-body.md}

{@import generated-snippets/DocumentControllerIT/testGetAllDocuments/http-response.md}
