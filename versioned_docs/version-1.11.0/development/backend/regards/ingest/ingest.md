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

* [Ingest](../api/)

## Available Extension points
* [SIP Pre processing plugins](../plugins/sip-pre-processing/)
* [SIP Validation plugins](../plugins/sip-validation/)
* [AIP Generation plugins](../plugins/aip-generation/)
* [AIP Tagging plugins](../plugins/aip-tagging/)
* [SIP Post processing plugins](../plugins/sip-post-processing/)

## Bus message events

 * [Events](../events/)
