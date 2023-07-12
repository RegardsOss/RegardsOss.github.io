---
id: order-manage-orders
title: Manage orders
slug: /user-guide/order/manage-orders/
---

*Gérez les modules de commande et commandez des données*

<img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user-interface-menu.png" alt="user menu" height="200"/> 
<img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/ui-modules-card.png" alt="ui modules card" height="200"/>

---

Pour pouvoir commander des données, vous aurez besoin de configurer deux types de modules :

- ***order-cart***, un panier dans lequel vous pourrez ajouter les données que vous souhaitez commander et éventuellement décider de leur appliquer des traitements.
- ***order-history***, pour retrouver l'état d'avancement de la commande et l'historique de vos commandes

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configurer les modules de type ***order***

Depuis l'IHM d'administration du projet, cliquez sur l'onglet ***User Interface*** du menu, puis sur le bouton ***Add*** de la carte ***UI modules***.

Créer le module ***order-history***

- ***Module type*** : ***order-history***
- ***Description*** : elle apparaîtra dans la liste des modules configurés. Dans l'exemple suivant, il s'appellera ***My orders***.
- ***Layout container*** : ***page-content-module (dynamic)***
- ***Activate modules*** : cochée
- ***Page settings*** : choisissez ou non de définir ce module comme page d'accueil de l'interface utilisateur et configurez l'icône du module
- Donnez un titre en anglais et en français au module dans l'interface user.
- ***Module settings***
  - ***Initially expanded***, le module sera initialement ouvert
  - ***Initially collapsed***, le module sera initialement fermé
  - ***Always expanded***, le module sera toujours ouvert

Créer le module ***order-cart***

- ***Module type*** : ***order-cart***
- ***Description*** : elle apparaîtra dans la liste des modules configurés. Dans l'exemple suivant, il s'appellera ***My cart***.
- ***Layout container*** : ***page-content-module (dynamic)***
- case ***Activate modules*** : cochée
- ***Page settings*** : configurez l'icône du module et choisissez si vous souhaitez définir ce module comme page d'accueil dans l'interface user
- Donnez un titre en anglais et en français au module dans l'interface user.
- ***Module settings***
  - ***Initially expanded***, le module sera initialement ouvert
  - ***Initially collapsed***, le module sera initialement fermé
  - ***Always expanded***, le module sera toujours ouvert
- ***Display settings***
  - case ***Display datasets*** pour afficher les données par jeu de données dans le panier

Éditez le module ***Menu*** accessible depuis la liste des UI modules.

- Vérifiez que la case ***Display cart link*** est bien cochée. Si ce n'est pas le cas, cochez-la.
- Editez votre module de type ***order-cart*** et sélectionnez la visibilité cachée (***Display*** > ***Never***). Ainsi votre module s'affichera uniquement depuis l'icône cart <img src="/images/user-documentation/regards-icons/user/cart.png" alt="cart" height="25" width="25"/>
- Cliquez sur le bouton ***Update module***

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Commander des données

Accédez à l'interface user depuis l'adresse `http://<regards host>/user/<project>`, les modules ***order-history*** et ***order-cart*** sont à présent disponibles. Commandez les données depuis un module de type ***[search-result](../6-catalog-consultation/catalog-configuration.md)***, appelé ***Catalog*** dans l'image ci-dessous.

Pour commander des données, ajoutez les une par une à l'aide de l'icône ***Add item to my cart*** affiché sur chaque ligne ou sélectionnez un groupe de données et ajoutez-les en appuyant sur le bouton ***Add to Basket*** sur la barre principale du ***Catalog***.

<div align="center">
  <img src="/images/user-documentation/v1.4/8-order-data/order/order-data.png" alt="order data" width="800"/> 
</div>


:::caution
Vous ne pourrez pas ajouter de données au panier dans les cas suivants :

- Si vous n'êtes pas connecté. En suivant la configuration de base tout utilisateur ayant au moins un rôle ***REGISTERED USER*** peut se connecter
- Si vous avez un accès limité aux données
- S'il n'y pas d'accès permis à l'espace de stockage
:::

Une fois que vous aurez ajouté un élément, une icône s'affichera sur l'écran pour vous indiquer s'ils ont correctement été ajoutés.
Cliquez ensuite sur l'icône <img src="/images/user-documentation/regards-icons/user/cart.png" alt="cart" width="25"/> ***My cart*** , et préparez les données que vous souhaitez commander.

<div align="center">
  <img src="/images/user-documentation/v1.4/8-order-data/order/order-cart.png" alt="order cart" width="800"/> 
</div>

La sélection est triée par jeux de données (si vous avez coché la case ***Display datasets*** du module ***order-cart***), dans lesquels vous trouverez les données choisies, le nombre d'objets et la taille associée lorsque celle-ci est disponible. Appuyez sur le bouton en forme de loupe ***Shows added object list*** pour avoir le détail des données. Appliquez des [traitements](processing.md) si nécessaire en appuyant sur le bouton ***Process***. Vous pouvez retirer des éléments en appuyant sur le bouton ***Clear*** qui videra tout le panier, ou en appuyant sur les boutons de suppression des jeux de données ou des données.

Une fois que vous aurez terminé, appuyez sur le bouton ***Order***. Donnez éventuellement un nom de commande, que vous retrouverez dans l'historique des commandes ***My orders***.

<div align="center">
  <img src="/images/user-documentation/v1.4/8-order-data/order/order-action.png" alt="order action" width="800"/> 
</div>

Cliquez ensuite dans l'onglet ***My orders*** et observez la progression du téléchargement de vos données au travers des colonnes ***Progress*** et ***Status***. Vous pourrez le mettre en pause ou l'annuler en appuyant respectivement sur les boutons ***Pause order*** et ***Cancel order***. A la fin du téléchargement, cliquez sur le bouton ***Download available files order as zip*** pour sauvegarder vos données.

<div align="center">
  <img src="/images/user-documentation/v1.4/8-order-data/order/order-module.png" alt="order" width="800"/> 
</div>


:::caution
Il se peut que la commande soit automatiquement séparée en sous-commandes. Cela peut par exemple arriver lorsqu'il y a beaucoup de données à télécharger, ou si les données ne sont pas toutes accessibles immédiatement. Dans ce cas, la barre de progression s'arrêtera temporairement durant le téléchargement pour récupérer les données. Dès qu'elles seront disponibles, le statut prendra la valeur ***waiting user*** et vous pourrez cliquer sur le bouton <img src="/images/user-documentation/regards-icons/user/download.png" alt="download" width="25"/> ***Download available files order as zip***, qui vous précisera également le nombre d'objets dans le zip. La progression reprendra ensuite et s'arrêtera autant de fois que nécessaire.
:::

:::info
Pour éviter une solicitation régulière de l'utilisateur lors de sous-commandes, il existe un moyen automatique de gérer le téléchargement de données REGARDS en utilisant l'outil ***REGARDS Downloader***, que vous pouvez obtenir en suivant [ce lien](https://github.com/RegardsOss/RegardsDownloader). Une fois installé, vous n'aurez qu'à fournir le fichier Metalink que vous pouvez obtenir lors du lancement de la commande dans REGARDS en appuyant sur le bouton ***Download order metalink file*** depuis l'onglet ***My orders***.
:::

:::info
Il est recommandé d'utiliser l'outil ***REGARDS Downloader*** dans le cas de commandes volumineuses.
:::

:::info
Vous pourrez également retrouver toutes vos commandes depuis l'interface d'administration. Référez-vous à la page [Monitor orders](monitor-orders.md) pour en savoir plus.
:::
