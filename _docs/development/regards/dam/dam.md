---
layout: classic-docs
title: REGARDS data management microservice
short-title: Data Management
categories:
  - development
---

## Overview

`Dam` reponsabilities:

* Manage data models,
* Harvest and index data sources,
* Apply access rights.

![Ingest plugins](/assets/schemas/microservices/dam.svg)

## Available APIs

* [Access rights api](/development/regards/dam/api/access-rights-api/)
* [Models api](/development/regards/dam/api/model-api/)
* [Collection api](/development/regards/dam/api/collection-api/)
* [Dataset api](/development/regards/dam/api/dataset-api/)
* [Datasource api](/development/regards/dam/api/datasource-api/)
* [Document api](/development/regards/dam/api/document-api/)

## Available Extension points

* [Access rights](/development/regards/dam/plugins/access-rights-plugins/)
* [Computed attributes](/development/regards/dam/plugins/computed-attribute-plugins/)
* [Data sources](/development/regards/dam/plugins/data-source-plugins/)

## Bus message events

 * [Events](/development/regards/dam/events/events/)

## Appendices

* [Geospatial behavior](/development/regards/dam/geo/)
