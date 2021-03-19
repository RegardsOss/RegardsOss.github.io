---
id: backend-dam-events
title: Bus message events
slug: /development/backend/dam/events/
---



:::info
To know more about bus message mechanism look at [AMQP starter](../../framework/starters/amqp/)
:::

 | Event    | Target   | Mode    | Description     |
 | :----    | :----    | :------ | :-----------    |
 | [DatasetEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/DatasetEvent.java) | MICROSERVICE | Broadcast | Published For each event on a dataset entity (create, update, delete, index, error) |
 | [NotDatasetEntityEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/NotDatasetEntityEvent.java) | MICROSERVICE | Broadcast | Published For each event on object, collection and document entities (create, update, delete, index, error) |
 | [AccessGroupEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupEvent.java) | ALL | Broadcast | Published for user group creation, modification or deletion |
 | [AccessGroupPublicEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupPublicEvent.java) | ALL | Broadcast | Published when a public group is defined or removed |
 | [AccessGroupAssociationEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupAssociationEvent.java) | ALL | Broadcast | Published when a group is associated to a user |
 | [AccessGroupDissociationEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupDissociationEvent.java) | ALL | Broadcast | Published when a group is dissociated to a user |
  | [AccessRightEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/event/AccessRightEvent.java) | ALL | Broadcast | Published when for access right creation, modification or deletion |
 | [AttributeModelCreated](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/AttributeModelCreated.java) | ALL | Broadcast | Published when an attribute is created |
 | [AttributeModelDeleted](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/AttributeModelDeleted.java) | ALL | Broadcast | Published when an attribute is deleted |
 | [FragmentDeletedEvent](https://github.com/RegardsOss/regards-dam/blob/master/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/models/event/FragmentDeletedEvent.java) | ALL | Broadcast | Published when a fragment is deleted |

