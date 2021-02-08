---
layout: classic-docs
title: Configure the catalog à compléter
short-title: Services
categories:
  - user-documentation
---

<div style="text-align:center;">
  <h2></h2>
  <p> </p> <br/>
</div>

{% include toc.md %}

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Explorez le catalogue par défaut ***search-results***

#### Introduction 

Il existe un catalogue par défaut permettant de faire des recherches sur vos données. Il est visible depuis l'interface ***user*** et configurable depuis l'interface ***admin***. Dans cette section, vous apprendrez à comprendre ce module pour éventuellement l'adapter à vos besoins ou en créer un autre du même type.
 
- Connectez-vous à l'interface ***user***, observez la page ***Catalog***. Elle est composée de deux onglets ***Datasets*** et ***Data***.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-datasets.png" alt="datasets" width="800"> 
</div>
 
<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-data.png" alt="create data" width="800"> 
</div>
 
 - Dans un autre onglet de votre navigateur, connectez-vous à l'interface ***admin***. Puis rendez-vous dans la page ***UI modules*** accessible depuis le menu ***User Interface***, la carte ***UI modules*** et le bouton ***List***. Cliquez sur le bouton ***Edit*** <img src="/assets/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"> de la ligne ***Catalog*** pour configurer le catalogue de données.
 
`Note` : A chaque fois que vous modifierez un paramètre du module ***Catalog*** au travers de l'interface ***admin***, cliquez sur le bouton ***Update module*** pour que les changements soient pris en compte. Rendez-vous ensuite sur l'interface ***user***, rafraîchissez la page de votre navigateur et observez les changements induits par vos modifications.
N'hésitez à répéter ces opérations pour vous familiariser avec la configuration du module. 

Dans les parties qui vont suivre, le module ***Catalog*** et ses paramètres vont être détaillés. Avec ces explications vous serez à même de créer d'autres modules de type ***search-results***.

#### General

La première partie sert à l'identification du module, elle est commune à tous les modules, référez-vous à la ***[page d'introduction](/user-documentation/user/introduction-modules/)*** pour plus de détails.
 

#### Page Settings

 Vous réglez ici l'affichage de l'onglet ***Catalag*** dans l'interface ***user*** <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-tab.png" alt="catalog tab" height="25">.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/page-settings.png" alt="page settings" width="800"> 
</div>
 
- ***Define as site home page*** définit ***Catalog*** comme page d'accueil de l'interface ***user***. La page changera alors de nom pour <img src="/assets/images/user-documentation/regards-icons/user/home-page.png" alt="home-page" height="25"> ***Home page***. Par défaut, cette case est décochée.
 
- les options ***No icon***, ***Default module icon*** et ***Custom module icon*** définiront l'icône qui sera affichée à côté du nom de la page.
 Si vous choisissez ***Custom module icon*** vous devrez sur la ligne du dessous préciser l'adresse url pour y accéder.
 
- Pour finir, définissez le nom de la page affiché en anglais et en français.

#### Module settings

Dans cette partie, vous réglerez le contenu de la page ***Catalog***.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/settings.png" alt="module settings" width="800"> 
</div>

##### Main

- ***Presentation pane state*** paramètre l'affichage de la page
- ***Initially expanded*** la page ***Catalog*** sera ouverte lorsque vous accéderez à l'interface ***user***.
  Vous pouvez la refermer en cliquant sur la flèche haute. 
  
<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-arrow.png" alt="arrow" width="800"> 
</div>
  
- ***Initially collapsed*** la page ***Catalog*** sera fermée lorsque vous accéderez à l'interface ***user***. Vous pouvez rouvrir en cliquant sur la flèche basse. 
- ***Always expanded*** la page ***Catalog*** sera toujours ouverte.
- ***Result types to display*** 
  - ***Data*** affiche uniquement l'onglet ***Data*** dans ***user***
  - ***Data and datasets*** affiche les données et leurs jeux de données 

##### Filter

L'onglet ***Filters*** vous permet de créer vos propres filtres de données.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/filters.png" alt="module settings" width="800"> 
</div>

- Cochez les cases suivantes selon vos besoins :
   - ***Show filters in data view*** permet d'afficher les filtres sur l'onglet ***Data***
   - ***Show filters in datasets view*** permet d'afficher les filtres sur l'onglet ***Datasets***
   - ***Show filters initially*** ouvre ou ferme la ligne de filtre lorsque vous accédez à ***user***

- Ajoutez un filtre appuyant sur le bouton ***Add one*** ou plusieurs en appuyant sur ***Add many***. Une popup s'affichera ensuite en listant les attributs du modèle sur lesquels vous souhaitez filtrer.

Vos filtres s'afficheront ensuite sous la barre contenenant ***Datasets*** et ***Data***. Activez ou désactivez les filtres en appuyant sur le bouton ***Filters***.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-filters.png" alt="filters" width="800"> 
</div>

##### Result restriction

Dans cette rubrique vous pourrez restreindre les résultats de vos recherches. Il n'est pas très intéressant de restreindre les résultats dans le catalogue de recherche par défaut qui, selon vos droits d'accès, doit vous donner un aperçu global des données présentes.
En revanche, vous pouvez créer un autre catalogue selon les missions sur lesquelles vous travaillez. Vous pourrez resteindre le contenu du catalogue soit par :
- ***Data***
  - cochez la case ***Last version only*** pour afficher uniquement les dernières versions des données s'il y en a plusieurs.
- ***Dataset*** 
  - sélectionnez parmi la liste des jeux de données ceux que vous voulez inclure
- ***Dataset models***
  - sélectionnez les modèles que vous souhaitez conserver. Tous les jeux de données associés aux modèles choisi seront présents.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/restriction.png" alt="module settings" width="800"> 
</div>

##### Search tab

***Search tab*** est un outil puissant vous permettant de créer votre propre outil de recherche. Il peut être d'une grande utilité lorsque vous avez quantité importante de données. Selon les critères fournis, la recherche s'effectuera parmi les attributs des modèles présents dans le catalogue.

- Définissez d'abord votre premier groupe de recherche en appuyant sur le bouton ***Add***. Un groupe de recherche est une catégorie où vous pourrez trouver des critères de recherche se rapportant à la même thématique. Organisez vos propres groupes de recherches.
- Ajoutez ensuite des critères de recherche en appuyant sur le bouton ***Insert***, ***Insert criterion*** et ***First***.
- Cliquez sur le bouton ***Not set*** de la colonne ***Component*** pour définir votre critère de recherche. Vous pouvez en sélectionner parmi :
    - ***data-with-picture-only*** recherche uniquement des données qui ont des images
    - ***enumerated-criteria*** recherche des données parmi une liste de critères
    - ***full-text-criteria***
    - ***last-version-only*** recherche seulement les dernières versions des données
    - ***numerical-criteria*** recherche une valeur particulière dans un attribut numérique du modèle
    - ***string-criteria*** recherche une chaîne particulière dans un attribut texte du modèle
    - ***temporal-criteria*** 
    - ***two-numerical-criteria***
    - ***two-temporal-criteria*** base la recherche sur deux dates
- Donnez un nom au critère en anglais et en français au critère.
- Selon le plugin sélectionné, l'indication ***No configuration*** s'affichera en rouge ou pas si une configuration est nécessaire. Si tel est le cas, cliquez sur ce bouton et choisissez l'attribut du modèle sur lequel la recherche se fera puis appuyez sur ***Confirm***
- Ajoutez un critère supplémentaire au besoin en cliquant sur le bouton ***Insert*** de la ligne et ***Insert criterion before*** ou ***Insert criterion after***. Si vous souhaitez ajouter un groupe cliquez également sur ***Insert*** puis ***Insert group before*** ou ***Insert criterion after***.
- N'oubliez pas de donner un nom à votre ou vos groupes en anglais et en français

A tout moment vous pouvez modifier la position des groupes ou des critères en utilisant les flèches. Cela modifiera simplement l'ordre d'affichage dans l'interface ***user***. Vous pouvez également rééditer ou supprimer des groupes et, ou des critères à volonté.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/search.png" alt="search settings" width="800"> 
</div>

Le panneau ainsi configuré s'affichera à droite en cliquant sur le bouton ***Search*** de la barre d'outil du catalogue. 

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-search.png" alt="search" width="800"> 
</div>


##### Data
  
Dans l'onglet ***Data*** pouvez régler l'affichage de l'onglet ***Data*** du catalogue. Il est composé de cinq parties.

- ***View***
  - ***Initial display mode*** : ***List***, ***Table***, ***Quicklooks***, ***Map***. Configure la façon dont les données vont être affichées. Le paramètre ***Map*** n'est pas sélectionnable si vous n'avez pas configuré de carte.
  - ***View title***, l'onglet ***Data*** dans le catalogue peut porter un autre nom que celui défini par défaut. Il vous suffit de compléter les champs ***English*** et ***French*** pour changer cette valeur.
  - ***Option*** 
    - ***Show refresh button*** affiche le bouton ***Refresh*** dans la barre ***Data***, cliquez dessus afin d'actualiser le contenu du catalogue.
    - ***Show related files download option*** affiche sur chaque ligne de donnée une icône de téléchargement pour éventuellement télécharger les fichiers liés s'ils existent.
    - ***Show related services options*** affiche une icône en forme de roue crénelée sur chaque ligne de données pour exécuter des actions supplémentaires. Pour ajouter des services suivre [link]
-  ***Sorting*** choisissez le tri initial effectué sur les données. Ajoutez une ou plusieurs colonnes parmi celles affichées dans l'interface ***user*** et déterminez l'ordre d'affichage de celles-ci. La première ligne de la liste correspondra au premier tri effectué dans l'interface et ainsi de suite.
- ***List and table*** sélectionnez les colonnes qui seront affichées dans la vue ***List*** <img src="/assets/images/user-documentation/regards-icons/user/list.png" alt="list" height="25"> et ***Table*** <img src="/assets/images/user-documentation/regards-icons/user/table.png" alt="table" height="25">. 
- ***Quicklook*** de la même manière que dans ***List and table***, choisissez les informations qui seront affichées dans la vue ***Quicklooks*** <img src="/assets/images/user-documentation/regards-icons/user/quicklook.png" alt="quicklook" height="25">. A la différence de la vue ***List and table***, les informations s'afficheront dans des images associées aux données.
- ***Map*** la vue map n'est pas configurée par défaut dans le catalogue. Elle sert à afficher les informations géographiques sur un planisphère ou un globe. Pour apprendre à le configurer, lisez le chapitre suivant plus loin dans cette page [completer].


##### Dataset

Réglez également l'affichage de l'onglet ***Dataset*** de la même manière que l'onglet ***Data***.
 Veuillez toutefois noter qu'à la différence de l'onglet ***Data***, il n'y que deux vues permises ***List*** et ***Table***.

##### Map

Pour connaître entièrement le module de type ***search-results***, il ne vous manque plus qu'à savoir comment configurer l'onglet ***Map***, ce que vous allez découvrir dans la partie suivante. 

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Ajoutez des cartes à un module ***search-results***

Allez dans la page ***UI modules*** accessible depuis ***User Interface***, ***UI modules*** et le bouton ***List*** <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25">.

Depuis cette page, copiez le module ***Catalog*** en utilisant le bouton ***Duplicate*** <img src="/assets/images/user-documentation/regards-icons/admin/duplicate.png" alt="duplicate" height="25">.

Commencez par changer les noms suivants :
- dans ***Duplicate module***, changez la ***Description*** pour ***Data map***
- dans ***Page settings***, changez le nom ***Engligh page title*** pour ***Data map*** et ***French page title*** pour ***Carte des données***.
- dans ***Module settings***, changez ***Results types to display*** pour ***Data***
- dans ***Data***, sélectionnez ***Initial display mode*** pour ***Map***.

Vous pouvez désormais configurer l'onglet ***Map*** qui vous servira à afficher les données sur un planisphère ou un globe.
Les modes 2D ou 3D s'organisent en ***Layers***. 

Dans ***Layer Management***, ajoutez des cartes qui serviront de ***Backgrounds*** pour l'affichage de vos données.
Vous pouvez ensuite ajouter des ***Layers*** supplémentaires qui viendront se superposer aux ***Layers*** de base.

Voici un exemple qui vous permettra d'afficher un planisphère et un globe terrestre. 
- cochez la case ***Enable view*** pour activer le module
- ***Graphic engine*** sélectionnez parmi ***Mizar*** ou ***Cesium*** le moteur graphique utilisé pour visualiser les données géospatiales. Dans ce cas, ***Cesium*** a été choisi. [completer difference entre les 2] 
- ***Initial display mode***, lorsque vous accéderez à la vue ***Data map***, vous verrez soit le mode 2D soit le mode 3D. Prenez garde, vous devrez au moins avoir configuré un ***Layer*** correspondant au mode.
- ***Layers Management*** créez des ***Layers*** en appuyant sur le bouton ***Add***
  - pour ajouter un ***Layer*** 3D qui servira de ***Background***, donnez lui un ***Name***, cochez ***Enable***, ***Background***, ***Display mode*** 3D.
  Entrez ensuite une url pour vous connecter à une base de données géographique. Dans ce cas, les données sont extraites d'openstreetmap (*https://c.tile.openstreetmap.org*), le ***Type*** correspondant est donc *OSM*. Sélectionnez la combinaison URL/Type appropriée à vos besoins. Ajoutez si nécessaire une ***Configuration*** [completer]
  - pour ajouter un ***Layer*** 2D de ***Background***, donnez lui un ***Name***, cochez ***Enable***, ***Background***, ***Display mode*** 2D. Et de la même manière choisissez la combinaison URL/Type correspondant à vos besoins. Par exemple, *https://c.tile.openstreetmap.org* et le ***Type*** *OSM*. Puis complétez les configurations si nécessaire. 
  - ajoutez ensuite des ***Layers*** supplémentaires qui s'afficheront au-dessus des ***Layers*** de base. Pensez à ne pas cocher la case ***Background*** pour ce type de module.
  
<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/map-layers.png" alt="map layers" width="800"> 
</div>
  
En bas du tableau, ajoutez les attributs que vous souhaitez afficher sous chaque quicklook. 

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/admin/map-attributes.png" alt="map attributes" width="800"> 
</div>
  
`Note` : N'oubliez pas que vous pouvez restreindre les données affichées dans votre module **Carte*** depuis l'onglet ***Results restriction***.
  
Une fois tous les éléments complétés, cliquez sur le bouton ***Update module*** pour terminer la création du module.

Rendez-vous dans l'interface ***user*** et le module ***Data map*** nouvellement créé. Cliquez sur le bouton en forme de carte ***Display results over map*** depuis la barre principale.

Cliquez alternativement sur l'icône ***3D mode*** et ***2D mode*** pour voir les modes 2D ou 3D. L'icône en forme de goutte ***Change layer opacity*** sert à modifier l'opacité des ***Layers*** s'affichant en superposition sur les modes 2D ou 3D.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-map-3D.png" alt="2D" width="800"> 
</div>

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/user/catalog-map-2D.png" alt="3D" width="800"> 
</div>


*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Configurez le module par défaut ***description***