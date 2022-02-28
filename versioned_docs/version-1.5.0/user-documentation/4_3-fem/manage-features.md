---
id: fem-manage-features
title: Manage features
slug: /user-guide/import-data/fem/manage-features/
---

*Gérez vos features par messages AMQP.*

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Créer des features

:::caution
Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir [créé un modèle de données](../../../data-organization/models/) de type ***Data*** pour qu'elles puissent être interprétées.
:::

Pour créer des features, il existe deux types de services proposés par le feature manager :

- ***feature*** permet de directement soumettre des fichiers contenant des features par messages AMQP.
- ***feature provider***, permet de créer des features à partir de scans de fichiers de données. Cette opération nécessite l'utilisation de plugins, qui seront ensuite référencés dans la configuration du microservice fem.

### Par le service feature

Pour envoyer des features dans REGARDS, suivez le tutoriel [Feature Manager AMQP API](../../../../development/backend/services/fem/api/amqp/).
Il vous expliquera comment :

- Créer des fichiers afin de stocker des features dans REGARDS. Ceux-ci sont composés de trois parties principales :
  - ***$headers*** :
    - ***regards.tenant***, le projet sur lequel vous souhaites ajouter des features
    - ***regards.request.id***, l'identifiant de la requête envoyée
    - ***regards.request.date***, la date à laquelle la demande est soumise au format ISO 8601
    - ***regards.request.owner***, le propriétaire de la donnée
  - ***metadata***
    - ***session*** le nom identifiant le groupe de données ajouté
    - ***sessionOwner***, le fournisseur de données
    - ***storages***, la liste des espaces de stockage sur lesquels vous souhaitez sauvegarder des fichiers supplémentaires. Cette liste peut être vide.
    - ***priority***, permet de prioriser la prise en compte de la requête de référencement (*HIGH*, _NORMAL_, ou _LOW_)
  - ***feature***, une liste de features au format GeoJSON
- Publier des requêtes de création de features
- Suivre le statut des requêtes envoyées

### Par le service feature provider

Pour développer des plugins de création de features par extraction de données, suivez le tutoriel [Feature Factory Plugins](../../../../development/backend/services/fem/plugins/feature-factory/)

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Gérez les features

Le tutoriel [Feature Manager AMQP API](../../../../development/backend/services/fem/api/amqp/) vous expliquera également comment modifier et supprimer des features par messages AMQP.

Par ailleurs, vous pouvez aussi gérer les features depuis le catalogue à l'aide de [plugins d'interface supplémentaires](../../../data-services/ui-services/). Notez que vous devrez obligatoirement avoir configuré une [aspiration de données depuis le feature manager](../../../crawler/configure-datasources/fem/).
