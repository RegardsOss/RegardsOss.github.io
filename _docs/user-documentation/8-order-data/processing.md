---
layout: classic-docs
title: Add data processing
short-title: Processing
categories:
  - user-documentation
---


<i>Ajoutez des traitements lors de la commande données</i>

{% include toc.md %}


Les traitements de données se configurent dans l'interface d'administration depuis le menu ***Commands*** et la carte ***Processing***.
Vous pourrez ajouter des traitements et surveiller leur déroulement lors de la commande de données.

Actuellement, il n'existe pas de plugin de traitement de données métier dans REGARDS. N'hésitez pas à en développer un pour enrichir la commande de données du catalogue. Vous pourriez par exemple transformer les données et les envoyer vers un autre système qui les traitera de manière différente.  
 
 
 Dans l'exemple suivant, vous serez en mesure d'ajouter un plugin de traitement de données et de l'appliquer lors d'une commande.
 Pour en savoir plus sur les commandes de données, cliquez [ici](/user-documentation/8-order-data/introduction-order/).
 
### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Ajoutez des plugins de traitement

Depuis la carte ***Processing***, cliquez sur le bouton ***Create a processing configuration*** <img src="/assets/images/user-documentation/regards-icons/add.png" alt="add" height="25">.

Sélectionnez le plugin que vous avez développé (*dans le cas suivant, il s'agira d'un plugin de test*), donnez un nom à cette configuration et remplissez tous les champs nécessaires. Choisissez ensuite quel type d'utilisateur aura le droit d'utiliser ce plugin. Pour rappel, il y a une section expliquant les rôles de REGARDS dans la page [Manage project users](/user-documentation/2-project-configuration/users) et la section ***Rôles des utilisateurs***.
 
 Cochez la case ***Associate this process to all datasets*** pour associer ce process à tous les jeux de données. Vous pouvez également activer ce plugin pour un ou plusieurs jeux de données directement depuis le jeu de données, pour cela suivez l'étape 5 de la section [création d'un jeu de données](/user-documentation/3-data-organization/dataset-collection).
 
 
 Une fois la configuration du module terminée, cliquez sur le bouton ***Create***. Vous serez alors redirigé vers l'écran listant tous les processing configurés.
 
 <div align="center">
   <img src="/assets/images/user-documentation/8-order-data/processing/processing-list.png/" alt="processing list" width="800"> 
 </div>
 
 ### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Appliquez des plugins de traitement

Accédez à l'interface user depuis l'adresse `http://<regards host>/user/<project>`. Vous devriez déjà avoir créé les modules ***order-history*** et ***order-cart*** et savoir comment commander des données, si ce n'est pas le cas, cliquez sur la page suivante [Configure order modules](/user-documentation/8-order-data/module-order/configuration/).

Ajoutez des données au panier depuis le catalogue de données. Avant de commander, vous pouvez ajouter des plugins de traitements à toutes les données contenues dans un jeu en cliquant sur le bouton ***+ Process***. 

<div align="center">
   <img src="/assets/images/user-documentation/8-order-data/processing/processing-apply.png/" alt="processing apply" width="800"> 
 </div>
 
 Retournez ensuite dans l'interface d'administration, et depuis le menu ***Commands*** et la carte ***Processing***, cliquez sur le bouton ***Monitor ongoing processing*** <img src="/assets/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="12">.
 
<div align="center">
   <img src="/assets/images/user-documentation/8-order-data/processing/processing-monitor.png/" alt="processing monitor" width="800"> 
 </div>
 
Depuis cette page, vous aurez une vision globale de tous les traitements ayant été traités dans votre projet. Il peut donc y en avoir énormément au sein de votre projet, les filtres vous aideront à retrouver des traitements soit par :
- ***Processing***, le type de traitement appliqué aux données
- ***User***, l'adresse mail de l'utilisateur ayant utilisé le plugin de traitement
- ***From*** / ***To***, période de temps
- ***Status***, l'état dans lequel se trouve le traitement. Par défaut tous les états sont cochés, décochez-les en cliquant simplement sur l'intutilé qui ne vous intéresse pas.

Appuyez sur ***Apply filters*** ou ***Clear filters*** pour utiliser les filtres.

Vous avez également à votre disposition un bouton ***Refresh*** pour actualiser l'état des traitements. 