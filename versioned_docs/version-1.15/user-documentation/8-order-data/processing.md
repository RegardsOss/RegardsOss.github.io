---
id: order-processing
title: Add data processing
slug: /user-guide/order/processing/
---

*Ajoutez des traitements lors de la commande données.*

<img src="/images/user-documentation/v1.4/8-order-data/command-menu.png" alt="user menu" height="200"/> 
<img src="/images/user-documentation/v1.4/8-order-data/processing-card.png" alt="user menu" height="200"/>

---

Les traitements de données se configurent dans l'interface d'administration depuis le menu ***Commands*** et la carte ***Processing***.
Vous pourrez ajouter des traitements et surveiller leur déroulement lors de la commande de données.

Actuellement, il n'existe pas de plugins de traitement de données métier dans REGARDS. N'hésitez pas à en développer un pour enrichir la commande de données du catalogue. Vous pourriez par exemple transformer les données et les envoyer vers un autre système qui les traitera de manière différente.

Dans l'exemple suivant, vous serez en mesure d'ajouter un plugin de traitement de données et de l'appliquer lors d'une commande.

## Ajouter des plugins de traitement

Depuis la carte ***Processing***, cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/> ***Create a processing configuration*** .

Sélectionnez le plugin que vous avez développé (_dans le cas suivant, il s'agira d'un plugin de test_), donnez un nom à cette configuration et remplissez tous les champs nécessaires. Choisissez ensuite quel type d'utilisateur aura le droit d'utiliser ce plugin. Pour rappel, il y a une section expliquant les rôles de REGARDS dans la page [Manage project users](../2-project-configuration/users.md) et la section ***Rôles des utilisateurs***.

Cochez la case ***Associate this process to all datasets*** pour associer ce process à tous les jeux de données. Vous pouvez également activer ce plugin pour un ou plusieurs jeux de données directement depuis le jeu de données, pour cela suivez l'étape 5 de la section [création d'un jeu de données](../3-data-organization/dataset-collection.md).

Une fois la configuration du module terminée, cliquez sur le bouton ***Create***. Vous serez alors redirigé vers l'écran listant tous les processing configurés.

<div align="center">
  <img src="/images/user-documentation/v1.4/8-order-data/processing/processing-list.png" alt="processing list" width="800"/> 
</div>

 
## Appliquer des plugins de traitement

Accédez à l'interface user depuis l'adresse `http://<regards host>/user/<project>`. Vous devriez déjà avoir créé les modules ***order-history*** et ***order-cart*** et savoir comment commander des données, si ce n'est pas le cas, cliquez sur la page suivante [Configure order modules](manage-orders.md).

Ajoutez des données au panier depuis le catalogue de données. Avant de commander, vous pouvez ajouter des plugins de traitements à toutes les données contenues dans un jeu en cliquant sur le bouton ***+ Process***.

<div align="center">
   <img src="/images/user-documentation/v1.4/8-order-data/processing/processing-apply.png" alt="processing apply" width="800"/> 
 </div>
 
 Retournez ensuite dans l'interface d'administration, et depuis le menu <b><i><i>Commands</i></i></b> et la carte <b><i><i>Processing</i></i></b> cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="monitor" height="25" width="25"/> <b><i><i>Monitor ongoing processing</i></i></b>.
 
<div align="center">
   <img src="/images/user-documentation/v1.4/8-order-data/processing/processing-monitor.png" alt="processing monitor" width="800"/> 
 </div>
 
Depuis cette page, vous aurez une vision globale de tous les traitements effectués dans votre projet. Il peut y en avoir énormément au sein de votre projet, les filtres vous aideront à retrouver des traitements particuliers soit par :

- ***Processing***, le type de traitement appliqué aux données
- ***User***, l'adresse mail de l'utilisateur ayant utilisé le plugin de traitement
- ***From*** / ***To***, période de temps
- ***Status***, l'état dans lequel se trouve le traitement. Par défaut tous les états sont cochés, décochez-les en cliquant simplement sur l'intitulé qui ne vous intéresse pas.

Appuyez sur ***Apply filters*** ou ***Clear filters*** pour utiliser les filtres.

Vous avez également à votre disposition un bouton ***Refresh*** pour actualiser l'état des traitements.
