---
id: backend-storage-overview
title: REGARDS storage microservice
sidebar_label: Overview
slug: /development/backend/services/storage/overview/
---


## Overview

`Storage` reponsabilities:
 * Store/Delete/Monitor AIPs.
 * Add/remove tag(s) on AIPs.
 * Makes AIP files available in cache system for retrieval.

 ![](/schemas/microservices/storage.svg)

### Store AIP

The schema here under shows the main process of AIP storing. [Allocation strategy](plugins/allocation-strategy-plugins.md) and [Data storages](plugins/data-storage-plugins.md) are designed as extension points to allow developer to create their own businness needs.

![](/schemas/storage/sto-store-aip-simple.png)


### Retrive AIP files

In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage [Online Data storages](plugins/data-storage-plugins.md) the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request.

## Available Extension points

- [Allocation strategy plugins](plugins/allocation-strategy-plugins.md) : Strategy to dispatch files in available storage systems.
- [Data storage plugins](plugins/data-storage-plugins.md) : Storage systems
- [Security delegation plugins](plugins/security-delegation-plugins.md) : Delegate access rights to stored files

## Bus message events

 * [Events](events/events.md)
