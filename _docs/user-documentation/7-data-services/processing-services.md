---
layout: classic-docs
title: Add processing services
short-title: Services
categories:
  - user-documentation
---


<i>Les services permettent d'appliquer des traitements légers sur les données de votre catalog.</i> 

{% include toc.md %}

*****************


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Configuration des services de traitement de données

La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ***Catalog Access*** et la carte ***Services***. 

Il n'existe actuellement que très peu de services de traitement de données, ils sont prévus pour des utilisations très spécifique comme le téléchargement de plusieurs données dans une archive zip. Enrichissez le catalogue REGARDS en développant vos propres services de traitement de données.

Une fois qu'il sera disponible dans votre instance de REGARDS, ajoutez-le en appuyant sur le bouton ***Add*** de la carte ***Catalog Access***.
Configurez-le selon votre utilisation prévue et choisissez si vous voulez l'activer pour tous les jeux de données au travers du paramètre ***Activate this service for datas of every datasets*** (par défaut la valeur n'est pas activée). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de données, suivez l'étape 5 de la [création d'un jeu de données](/user-documentation/3-data-organization/dataset-collection)

<div align="center">
  <img src="/assets/images/user-documentation/7-data-services/processing-services/service-create.png" alt="create service" width="800"> 
</div>

Une fois la configuration terminée, appuyez sur le bouton ***Add*** et retrouvez-le dans la liste des services applicables dans le catalogue. Vérifiez qu'il soit dans l'état actif.


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Application des services de traitement de données

Les services de traitements sont applicables sur les données du catalogue accessible depuis `http://<regards host>/user/<project>`.

Sur chaque donnée, vous pouvez appuyer sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="gear wheel" height="25"> pour voir les services associés. Cliquez ensuite sur le service de traitement que vous souhaitez exécuter. Vous pouvez également les appliquer sur un groupe en cochant plusieurs cases, puis en appuyant sur le bouton qui s'affichera dans la barre au-dessus des données. 

<div align="center">
  <img src="/assets/images/user-documentation/7-data-services/processing-services/catalog-processing-services.png" alt="services" width="800"> 
</div>