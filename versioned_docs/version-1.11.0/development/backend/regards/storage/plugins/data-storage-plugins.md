---
id: backend-storage-data-storage-plugins
title: Data storage plugins
sidebar_label: Data storage
slug: /development/backend/services/storage/plugins/data-storage/
---


## Overview

:::note
This extension point allows to define a new file storage system.
:::

<b>NOTE : </b> There is two types of storage system in REGARDS :
 - Online : Files are directly accessible. (Synchronous retrieval)
 - Nearline : Files are on a long term archive system and needs times to be extracted. (Asynchronous retrieval)

REGARDS provides many implementation of this extension point :
 - [LocalDataStorage](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/datastorage/local/LocalDataStorage.java) : Locak disk storage system.

## Interfaces

   - [IDataStorage](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IDataStorage.java) : Main interface
   - [IOnlineDataStorage](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IOnlineDataStorage.java) : Interface for `Online` systems.
   - [INearlineDataStorage](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/INearlineDataStorage.java) : Interface for `Nearline` systems.


## Implementation

To learn more about how to create your own plugin see [Plugins](../../../framework/modules/plugins.md)

