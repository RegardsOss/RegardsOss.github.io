---
id: backend-ingest-overview
title: REGARDS ingest microservice
sidebar_label: Overview
slug: /development/backend/services/ingest/overview/
---


## Overview

`Ingest` reponsabilities:

* Ingest SIP,
* Transform SIP to one or more AIPs,
* Submit AIPs to `Storage`

![Ingest plugins](/schemas/microservices/ingest.svg)

## Available APIs

* [Ingest](ingest-api-swagger.mdx)

## Available Extension points
* [SIP Pre processing plugins](plugins/sip-pre-processing-plugins.md)
* [SIP Validation plugins](plugins/sip-validation-plugins.md)
* [AIP Generation plugins](plugins/aip-generation-plugins.md)
* [AIP Tagging plugins](plugins/aip-tagging-plugins.md)
* [SIP Post processing plugins](plugins/sip-post-processing-plugins.md)

## Bus message events

 * [Events](events/events.md)
