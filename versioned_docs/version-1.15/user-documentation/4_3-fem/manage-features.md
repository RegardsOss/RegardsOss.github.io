---
id: fem-manage-features
title: Manage features
slug: /user-guide/import-data/fem/manage-features/
---

*Gérez vos features par messages AMQP.*

---

## Créer des features

:::caution
Avant de pouvoir importer des features dans REGARDS, vous devrez obligatoirement avoir [créé un modèle de données](../3-data-organization/models.md) de type ***Data*** pour qu'elles puissent être interprétées.
:::

Pour créer des features, il existe deux types de services proposés par le feature manager :

- ***feature*** permet de directement soumettre des fichiers contenant des features par messages AMQP.
- ***feature provider***, permet de créer des features à partir de scans de fichiers de données. Cette opération nécessite l'utilisation de plugins, qui seront ensuite référencés dans la configuration du microservice fem.

### Par le service feature

Pour envoyer des features dans REGARDS, suivez le tutoriel [Feature Manager AMQP API](../../development/backend/regards/fem/api-guides/amqp/amqp-publish-create-product-request.md).
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

### Par upload

## Gérer des features

Les ***features*** aussi appelés ***produits GeoJson*** importés sont visibles dans l'IHM admin depuis le menu **Add data** et la carte **Products Manager (GeoJson)**.

<img src="/images/user-documentation/regards-icons/admin/menu-add-data.png" alt="menu" height="200"/>
<img src="/images/user-documentation/v1.6/4_3-fem/fem-card.png" alt="fem card" height="200"/>

---

Cet écran vous permettra de **consulter les features** importées, de les **renotifier** ou de les **supprimer**. Il vous permettra également d'avoir une **vision d'ensemble sur les différents types de requêtes** effectuées et de les relancer en cas d'erreur. A noter que seules les requêtes terminées en succès se supprimeront.

<div align="center">
    <img src="/images/user-documentation/v1.6/4_3-fem/fem-screen.png" alt="feature screen" width="800"/> 
</div>


L'écran est principalement découpé en deux parties :
- **en haut**, une barre permettant de filtrer les features ou les requêtes , 
- **sur la partie principale**, des onglets et leurs écrans associés. ***Products*** présente les features importées, les autres onglets correspondent aux différents types de requêtes associés aux services d'**extraction**, de **création**, de **mise à jour**, de **suppression** ou de **notification**.

:::caution
Pensez à appuyer régulièrement sur le bouton de rafraîchissement pour obtenir des informations à jour.
:::

### Les filtres

Vous pouvez filtrer les features ou les requêtes selon les critères suivants : 

***Sur les features***

- ***Source*** désigne le fournisseur de données
- ***Session*** identifie le groupe d'appartenance de la donnée
- ***Provider Id*** correspond à l'identifiant de la feature


***Sur les requêtes*** 

- ***From/To*** permet de filtrer sur la date de création de la requête
- ***State*** informe du status de la requête parmi ***Any status***, ***Granted***, ***Denied***, ***Error***. Pour rappel, les requêtes en succès sont supprimées.

### Les actions

***Sur les features***

Vous pouvez ***notifier*** ou ***supprimer*** une sélection de features. A noter que la notification est une étape déjà intégrée au workflow de traitement d'une requête de feature, cette action vous permettra donc d'en lancer une nouvelle si nécessaire. 

:::info 
La modification d'une feature uniquement se fait uniquement par requête, pour cela référez-vous au tutoriel [Publish a patch request event AMQP API](../../development/backend/regards/fem/api-guides/amqp/amqp-publish-patch-product-request.md)
::: 

Vous pouvez également consulter, supprimer ou notifier une feature individuellement.

***Sur les requêtes***

Lorsque une ou plusieurs requêtes sont en erreur, vous avez la possibilité de les relancer ou de les supprimer.
