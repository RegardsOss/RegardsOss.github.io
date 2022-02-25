---
id: catalog-use
title: Use the catalog
slug: /user-guide/catalog/use/
---

*Utilisez le catalogue avec différentes vues.*

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Explorer le catalogue

:::info
L'ensemble du catalogue est configurable. Pour savoir en savoir plus, référez-vous à la page [Configure the catalog](../configuration/).
:::

Le catalogue se présente de cette manière :

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-datasets.png" alt="datasets" width="800"/> 
</div>

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-data.png" alt="data" width="800"/> 
</div>

Il y a deux onglets principaux :

- ***Datasets***, présente les jeux de données accessibles à l'utilisateur. Dans ce cas, il s'agit de données publiques car aucun utilisateur n'est connecté. Pour rappel, vous pouvez resteindre l'accès à certains jeux de données en suivant les instrutions indiquées dans <a href="../../data-organization/data-access-rights/">Configure data access rights</a>.
- ***Data***, présente les données aspirées dans le catalogue.

Dans le catalogue présent par défaut, deux vues vous sont proposées sur les ***Datasets***. L'onglet ***Data*** possède une vue supplémentaire :

- <img src="/images/user-documentation/regards-icons/user/list.png" alt="list" height="25"/> présente les éléments sous forme de liste
- <img src="/images/user-documentation/regards-icons/user/table.png" alt="table" height="25"/> présente les éléments sous forme de tableau
- <img src="/images/user-documentation/regards-icons/user/quicklook.png" alt="quicklook" height="25"/> présente les données par quicklook

Plusieurs outils vous assisteront dans vos recherches :

- Appuyez le bouton <img src="/images/user-documentation/regards-icons/user/search.png" alt="search" height="25"/> ***Show search pane*** afin d'effectuer des recherches sur vos données. Sa disposition dépendra de la configuration du module.
- Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/user/filters.png" alt="filters" height="25"/> ***Filters*** pour filtrer vos données. Vous pouvez également filtrer les données par jeu en cliquant sur le bouton <img src="/images/user-documentation/regards-icons/user/filter.png" alt="filter" height="25"/> ***Display data*** depuis l'onglet ***Datasets***.
- Triez vos données en utilisant le bouton <img src="/images/user-documentation/regards-icons/user/sort.png" alt="sort" height="25"/> ***Sort*** depuis la vue ***List*** et les flèches présentes sur les libellés des colonnes

Retrouvez les informations liées aux jeux de données et données en appuyant sur le bouton <img src="/images/user-documentation/regards-icons/user/info.png" alt="info" height="25"/> ***Details*** présent sur chaque ligne. Un onglet ***Description*** s'ouvrira pour présenter les informations de cet élément.

Choisissez les colonnes que vous souhaitez afficher une appuyant sur le bouton <img src="/images/user-documentation/regards-icons/user/columns.png" alt="columns" height="25"/> ***Columns***.

Il se peut que les onglets suivants apparaissent selon la configuration de vos modules d'interface :

- <img src="/images/user-documentation/regards-icons/user/cart.png" alt="cart" height="25"/> pour ajouter des données au panier afin de les <a href="../../order/introduction/">commander</a>
- <img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="gear-wheel" height="25"/> pour appliquer des services <a href="../../data-services/processing-services/">processing</a> ou de <a href="../../data-services/ui-services/">visualisation</a> aux données

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Utiliser la vue carte

Si vous avez configuré un module de type ***search-results*** disposant de cartes, vous verrez apparaître cette vue <img src="/images/user-documentation/regards-icons/user/map.png" alt="map" height="25"/> ***Display results over map***.

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-map-2D.png" alt="datasets" width="800"/> 
</div>

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-map-3D.png" alt="datasets" width="800"/> 
</div>

Vous observez :

- la carte dans la partie principale
- la liste des quicklooks correspondant à vos données sur la partie de droite
- une boîte à outils vous permettant d'effectuer plusieurs actions :
  - <img src="/images/user-documentation/regards-icons/user/pick.png" alt="pick" height="25"/> <b><i>Pick entities</i></b>, permet d'utiliser les simples et les doubles clics. Le simple clic sélectionne l'entité présente sur la carte à l'endroit du clic, zoome sur celle-ci, ajoute le libellé dans la barre d'outils et met en surbrillance le quicklook correspondant dans la liste des quicklooks. Le double clic sélectionne l'entité présente sur la carte à l'endroit du double clic et affiche uniquement les informations liées à cette entité.
  - <img src="/images/user-documentation/regards-icons/user/zone.png" alt="zone" height="25"/> sélectionne les entités contenues dans une zone géographique
  - <img src="/images/user-documentation/regards-icons/user/globe.png" alt="globe" height="25"/> affiche la vue 3D
  - <img src="/images/user-documentation/regards-icons/user/planisphere.png" alt="planisphere" height="25"/> affiche la vue 2D
  - <img src="/images/user-documentation/regards-icons/user/drop.png" alt="drop" height="25"/> en cliquant sur ce bouton un curseur apparaîtra pour régler la transparence des layers de superposition (seulement dans le cas où vous en avez configuré)
- une barre de recherche de toponyme qui permet de filter les résultats contenus dans une zone géographique
