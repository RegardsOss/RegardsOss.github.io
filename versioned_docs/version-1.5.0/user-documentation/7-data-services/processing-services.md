---
id: data-services-processing-services
title: Add processing services
slug: /user-guide/data-services/processing-services/
---

*Les services permettent d'appliquer des traitements légers sur les données de votre catalogue.*

<img src="/images/user-documentation/6-catalog-consultation/protocols/catalog-access-menu.png" alt="user menu" height="200"/> 
<img src="/images/user-documentation/7-data-services/processing-services/processing-services-card.png" alt="user menu" height="200"/>

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Configuration des services de traitement de données

La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ***Catalog Access*** et la carte ***Services***.

Il n'existe actuellement pas de services de traitements de données métier dans REGARDS. Enrichissez l'utilisation de l'interface utilisateur en développant vos propres services de traitement de données. Une fois qu'il sera disponible dans votre projet, ajoutez-le en appuyant sur le bouton ***Add*** de la carte ***Catalog Access***.

Configurez-le selon votre utilisation :

- Si vos plugins nécessitent des paramètres, choisissez si vous souhaitez que leurs valeurs soient :
  - ***fixe***, l'administrateur décide d'une valeur qui sera utilisée pour tous les traitements
  - ***dynamique***, à chaque utilisation du plugin, il sera demandé de fournir une valeur. Il est possible de contraindre celle-ci parmi une liste de valeurs possibles.
- Choisissez si vous voulez l'activer pour tous les jeux de données au travers du paramètre ***Activate this service for datas of every datasets*** (par défaut la valeur n'est pas activée). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de données, suivez l'étape 5 de la [création d'un jeu de données](../../data-organization/collections-datasets/)

<div align="center">
  <img src="/images/user-documentation/7-data-services/processing-services/service-create.png" alt="create service" width="800"/> 
</div>

Une fois la configuration terminée, appuyez sur le bouton ***Add*** et retrouvez-le dans la liste des services applicables dans le catalogue. Vérifiez qu'il soit dans l'état actif.

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Application des services de traitement de données

Les services de traitements sont applicables sur les données du catalogue accessible depuis `http://<regards host>/user/<project>`.

Sur chaque donnée, vous pouvez appuyer sur le bouton <img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="gear wheel" height="25"/> ***Services*** pour voir les services associés. Cliquez ensuite sur le service de traitement que vous souhaitez exécuter. Vous pouvez également les appliquer sur un groupe en cochant plusieurs cases et en appuyant sur le bouton qui s'affichera dans la barre au-dessus des données. Cela est uniquement possible lorsque le service le permet.

<div align="center">
  <img src="/images/user-documentation/7-data-services/processing-services/catalog-processing-services.png" alt="services" width="800"/> 
</div>
