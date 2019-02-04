---
layout: classic-docs
title: REGARDS storage microservice
short-title: Storage
categories:
  - development
---

## Overview

Main storage functionalities :
 - `AIP Manager` : Store/Delete/Monitor AIPs.
 - `Tags Manager` : Add/remove tag(s) on AIPs.
 - `Cache system` : Makes AIP files available in cache system for retrieval.

 ![](/assets/schemas/microservices/storage.svg)

### Store AIP

The schema here under shows the main process of AIP storing. [Allocation strategy](/development/regards/storage/plugins/allocation-strategy-plugins) and [Data storages](/development/regards/storage/plugins/data-storage-plugins) are designed as extension points to allow developer to create their own businness needs.

![](/assets/schemas/storage/sto-store-aip-simple.png)

The schema here under describe the `AIP state diagram` and associated `files state diagram` when an AIP is submitted for storage.

![](/assets/schemas/storage/sto-store-aip-datafile-states.png)

### Retrive AIP files

In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage [Online Data storages](/development/regards/storage/plugins/data-storage-plugins) the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request.

## Available APIs

* [Storage](/development/regards/storage/api/storage-api/)

## Available Extension points

- [Allocation strategy plugins](/development/regards/storage/plugins/allocation-strategy-plugins) : Strategy to dispatch files in available storage systems.
- [Data storage plugins](/development/regards/storage/plugins/data-storage-plugins) : Storage systems
- [Security delegation plugins](/development/regards/storage/plugins/security-delegation-plugins) : Delegate access rights to stored files
