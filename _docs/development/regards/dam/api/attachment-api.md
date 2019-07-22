---
layout: classic-docs
title: REGARDS Attachment API
---

{% include toc.md %}

{% include howto-api.md name="rs-dam" %}


# AttachmentController

 Attachment controller allows to assiocate files to a given entity like document, collection or dataset. It used to add a description to an entity for exemple.

## Add an URL description to an entity

{% include_relative generated-snippets/AttachmentControllerIT/attachUrlDescription/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachUrlDescription/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachUrlDescription/http-response.md %}

## Attach a description to an entity

{% include_relative generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response.md %}

## Attach a dicument to an entity

{% include_relative generated-snippets/AttachmentControllerIT/attachDocument/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDocument/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDocument/http-response.md %}

## Attach a description file without name

{% include_relative generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDescriptionWithoutName/http-response.md %}

## Attach a description

{% include_relative generated-snippets/AttachmentControllerIT/attachDescription/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDescription/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachDescription/http-response.md %}

### Bad content response

{% include_relative generated-snippets/AttachmentControllerIT/attachDescriptionWithBadContentType/http-response.md %}

## Remove attached file

{% include_relative generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/attachGetAndRemoveDescription/http-response.md %}

## Remove attached document

{% include_relative generated-snippets/AttachmentControllerIT/removeDocument/http-request.md %}

{% include_relative generated-snippets/AttachmentControllerIT/removeDocument/request-body.md %}

{% include_relative generated-snippets/AttachmentControllerIT/removeDocument/http-response.md %}
