---
layout: classic-docs
title: Configure order modules
short-title: Name
categories:
  - user-documentation
---


<i>Configurez les modules de commande</i>

{% include toc.md %}

*****************


Pour pouvoir commander des données, vous aurez besoin de configurer deux types de modules :
- ***order-cart***, un panier dans lequel vous pourrez ajouter les données que vous souhaitez commander et éventuellement décider de leur appliquer des traitements. 
- ***order-history***, pour retrouver l'état d'avancement de la commande et l'historique de vos commandes

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Configurez les modules de type ***order***

Depuis l'IHM d'administration du projet, cliquez sur l'onglet ***User Interface*** du menu, puis sur le bouton ***Add*** de la carte ***UI modules***.

Créer le module ***order-history***
- ***Module type*** : ***order-history***
- ***Description*** : elle apparaîtra dans la liste des modules configurés
- ***Layout container*** : ***page-content-module (dynamic)***
- case ***Activate modules*** : cochée
- ***Page settings*** : configurez l'icône du module et choisissez si vous souhaitez définir ce module comme page d'accueil dans l'interface user
- Donnez un titre en anglais et en français du module dans l'interface user.
- ***Module settings***
  - ***Initially expanded***
  - ***Initially collapsed***
  - ***Always expanded***


Créer le module ***order-cart***
- ***Module type*** : ***order-cart***
- ***Description*** : elle apparaîtra dans la liste des modules configurés
- ***Layout container*** : ***page-content-module (dynamic)***
- case ***Activate modules*** : cochée
- ***Page settings*** : configurez l'icône du module et choisissez si vous souhaitez définir ce module comme page d'accueil dans l'interface user
- Donnez un titre en anglais et en français du module dans l'interface user.
- ***Module settings***
  - ***Initially expanded***
  - ***Initially collapsed***
  - ***Always expanded***
- ***Display settings***
  - case ***Display datasets***


Éditez le module ***Menu*** accessible depuis la liste des UI modules et vérifiez que la case ***Display cart link*** est bien cochée. Si ce n'est pas le cas, cochez-la et cliquez sur le bouton ***Update module***

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Commandez des données

Accédez à l'interface user depuis l'adresse `http://<regards host>/user/<project>`, les modules ***order-history*** et ***order-cart*** sont à présent disponibles. Commandez les données depuis un module de type ***[search-result](/user-documentation/6-catalog-consultation/catalog/)***, appelé ***Catalog*** dans l'image ci-dessous.

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-modules.png" alt="order modules" width="800"> 
</div>


Pour commander des données, ajoutez les un par un à l'aide de l'icône ***Add item to my cart*** affiché sur chaque ligne ou sélectionnez un groupe de données et ajoutez-les en appuyant sur le bouton ***Add to Basket*** sur la barre principale du ***Catalog***.

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-data.png" alt="order data" width="800"> 
</div>

[completer dans quel cas on ne peut pas ajouter des données]

Une fois que vous aurez ajouté un élément, une icône s'affichera sur l'écran pour vous indiquer s'ils ont correctement été ajoutés.
Allez ensuite dans l'onglet ***My cart*** (le module ***order-cart*** que vous avez configuré précédemment, il peut porter un autre nom),
et préparez les données que vous souhaitez commander.

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-cart.png" alt="order cart" width="800"> 
</div>


La sélection est triée par jeu de donnée, dans lesquels les données choisies, le nombre d'objets et la taille associée lorsque celle-ci est disponible. Appuyez sur le bouton en forme de loupe ***Shows added object list*** pour avoir le détail des données. Appliquez des [traitements](/user-documentation/8-order-data/processing) si nécessaire en appuyant sur le bouton ***Process***. Vous pouvez retirer des éléments en appuyant sur le bouton ***Clear*** qui videra tout le panier, ou en appuyant sur les boutons de suppression des jeux de données ou des données.

Une fois que vous avez terminé, appuyez sur le bouton ***Order***. Donnez éventuellement un nom de commande, que vous retrouverez dans l'historique des commandes.

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-action.png" alt="order action" width="800"> 
</div>

Cliquez ensuite dans l'onglet ***My orders*** et observez la progression de téléchargement de vos données au travers des colonnes ***Progress*** et ***Status***. Vous pourrez le mettre en pause ou l'annuler en appuyant respectivement sur les boutons ***Pause order*** et ***Cancel order***.
 
A la fin du téléchargement, cliquez sur le bouton ***Download available files order as zip*** pour sauvegarder vos données. 
Vous pouvez également récuperer le fichier metalink en appuyant sur le bouton de lien ***Download order metalink file***.

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-action.png" alt="order action" width="800"> 
</div>
