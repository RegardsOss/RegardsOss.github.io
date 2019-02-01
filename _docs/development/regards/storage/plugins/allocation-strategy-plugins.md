---
layout: classic-docs
title: Allocation strategy plugins
---

{% include toc.md %}

## Overview

> This extension point allows to define how storage microservice decides which [Data storage plugin](/development/regards/storage/plugins/data-storage-plugins) to use to store a given AIP and its associated files.
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [DefaultAllocationStrategyPlugin](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/DefaultAllocationStrategyPlugin.java) : Store all AIP files in the data storage with the highter priority
 - [DefaultMultipleAllocationStrategy](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/DefaultMultipleAllocationStrategy.java) : Store all AIP files in the given data storage(s). If many data storages are provided then the file are stored many times.
 - [PropertyDataStorageMapping](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/PropertyDataStorageMapping.java) : Read into the AIP a property value and then find the data storage mapped to this value in the plugin configuration.

## Interface

   [IAllocationStrategy](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IAllocationStrategy.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IAllocationStrategy {

        @Override
        public Multimap<Long, StorageDataFile> dispatch(Collection<StorageDataFile> dataFilesToHandle,
            DispatchErrors dispatchErrors) {
                // return map with key=<data storage plugin id> and value=<StorageDataFile to store>
        }
}
```
