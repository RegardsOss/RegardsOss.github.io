---
id: backend-dam-overview
title: REGARDS data management microservice
sidebar_label: Overview
slug: /development/backend/services/dam/overview/
---


## Overview

`Dam` reponsabilities:

* Manage data models,
* Harvest and index data sources,
* Apply access rights.

![Ingest plugins](/schemas/microservices/dam.svg)

## Available APIs

* [Access rights api](api/access-rights-api.md)
* [Models api](api/model-api.md)
* [Collection api](api/collection-api.md)
* [Dataset api](api/dataset-api.md)
* [Datasource api](api/datasource-api.md)
* [Document api](api/document-api.md)

## Available Extension points

* [Access rights](plugins/access-rights-plugins.md)
* [Computed attributes](plugins/computed-attribute-plugins.md)
* [Data sources](plugins/data-source-plugins.md)

## Bus message events

 * [Events](events/events.md)

## Appendices

* [Geospatial behavior](geo.md)
