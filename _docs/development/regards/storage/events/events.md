---
layout: classic-docs
title: Bus message events
---

{% include toc.md %}

> To know more about bus message mechanism look at [AMQP starter](/development/framework/starters/amqp-starter/)

 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [AIPEvent](https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java) | ONE_PER_MICROSERVICE_TYPE | Broadcast | Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile. |
 | [DataFileEvent](https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java) | ALL | Broadcast | Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP. |
 | [DataStorageEvent](https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java) | MICROSERVICE | Unicast | Published when a file is stored, deleted or restored |

