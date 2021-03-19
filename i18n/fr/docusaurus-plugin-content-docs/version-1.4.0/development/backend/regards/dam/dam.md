---
id: backend-dam-overview
title: REGARDS data management microservice
sidebar_label: Overview
slug: /development/backend/dam/overview/
---


## Overview

`Dam` reponsabilities:

* Manage data models,
* Harvest and index data sources,
* Apply access rights.

![Ingest plugins](/schemas/microservices/dam.svg)

## Available APIs

* [Access rights api](../api/access-rights/)
* [Models api](../api/model/)
* [Collection api](../api/collection/)
* [Dataset api](../api/dataset/)
* [Datasource api](../api/datasource/)
* [Document api](../api/document/)

## Available Extension points

* [Access rights](../plugins/data-access-rights/)
* [Computed attributes](../plugins/computed-attribute/)
* [Data sources](../plugins/datasource/)

## Bus message events

 * [Events](../events/)

## Appendices

* [Geospatial behavior](../geo/)
