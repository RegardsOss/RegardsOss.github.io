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

 * Online : Files are directly accessible. (**Synchronous** retrieval)
 * Nearline : Files are on a long term archive system and needs times to be extracted. (**Asynchronous** retrieval)

REGARDS provides many implementation of this extension point :
 - [LocalDataStorage](https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/local-storage-location/src/main/java/fr/cnes/regards/modules/storage/plugin/local/LocalDataStorage.java) : Local disk storage system.

## Interfaces

   - [IStorageLocation](https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IStorageLocation.java) : Main interface
   - [IOnlineStorageLocation](https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IOnlineStorageLocation.java) : Interface for `Online` systems.
   - [INearlineStorageLocation](https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/INearlineStorageLocation.java) : Interface for `Nearline` systems.


## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins.md)

