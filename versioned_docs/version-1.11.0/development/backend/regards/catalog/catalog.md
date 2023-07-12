---
id: backend-catalog-overview
title: REGARDS catalog microservice
sidebar_label: Overview
slug: /development/backend/services/catalog/overview/
---

## Overview

`Catalog` reponsabilities:

* Fast metadata discovery through plugable search protocol,
* On the fly metadata transformation.

![Store plugins](/schemas/microservices/catalog.svg)

## Available APIs

### Search API

* [Catalog](catalog-api-swagger.mdx)

## Available Extension points

* [Catalog service](./plugins/catalog-service-plugins.md)
* [Search engine](./plugins/search-engine-plugins.md)

## Bus message events

 * [Events](events/events.md)

## Plugins

* [STAC plugin](plugins/stac-plugin.md)
