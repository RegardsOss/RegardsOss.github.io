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

* [Catalog](../search-api/)

## Available Extension points

* [Catalog service](../service-plugins/)
* [Search engine](../search-engine-plugins/)

## Bus message events

 * [Events](../events/)

## Plugins

* [STAC plugin](../stac-plugin/)