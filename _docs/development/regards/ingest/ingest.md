---
layout: classic-docs
title: REGARDS ingest microservice
short-title: Ingest
categories:
  - development
---

## Overview

`Ingest` reponsabilities:

* Ingest SIP,
* Transform SIP to one or more AIPs,
* Submit AIPs to `Storage`

![](/assets/schemas/microservices/ingest.svg)

## Available APIs

 - [Ingest](/development/regards/ingest/api/ingest-api/)

## Available Extension points
 - [SIP Validation plugins](/development/regards/ingest/plugins/sip-validation-plugins/)
 - [SIP Pre processing plugins](/development/regards/ingest/plugins/sip-pre-processing-plugins/)
 - [AIP Generation plugins](/development/regards/ingest/plugins/aip-generation-plugins/)
 - [AIP Tagging plugins](/development/regards/ingest/plugins/aip-tagging-plugins/)
 - [SIP Post processing plugins](/development/regards/ingest/plugins/sip-post-processing-plugins/)
