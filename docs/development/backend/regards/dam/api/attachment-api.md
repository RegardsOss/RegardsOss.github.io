---
id: backend-dam-attachment-api
title: REGARDS Attachment API
sidebar_label: Attachment
slug: /development/backend/dam/api/attachment
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


# Attachment Controller

 Attachment controller allows to assiocate files to a given entity like document, collection or dataset. It used to add a description to an entity for exemple.

## Add an URL description to an entity

{@import generated-snippets/AttachmentControllerIT/attachUrlDescription/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachUrlDescription/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response.md}

## Attach a description to an entity

{@import generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response.md}

## Attach a document to an entity

{@import generated-snippets/AttachmentControllerIT/attachDocument/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachDocument/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachDocument/http-response.md}

## Attach a description file without name

{@import generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/http-response.md}

## Attach a description

{@import generated-snippets/AttachmentControllerIT/attachDescription/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachDescription/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachDescription/http-response.md}

### Bad content response

{@import generated-snippets/AttachmentControllerIT/attachDescriptionWithBadContentType/http-response.md}

## Remove attached file

{@import generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/http-request.md}

{@import generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/request-body.md}

{@import generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/http-response.md}

## Remove attached document

{@import generated-snippets/AttachmentControllerIT/removeDocument/http-request.md}

{@import generated-snippets/AttachmentControllerIT/removeDocument/request-body.md}

{@import generated-snippets/AttachmentControllerIT/removeDocument/http-response.md}
