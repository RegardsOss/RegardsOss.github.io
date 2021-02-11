---
layout: classic-docs
title: Collections & Datasets
short-title: Datasets
categories:
  - user-documentation
---

<i>Les collections et les jeux de données sont incontournables dans REGARDS. Ils vous permettent de regrouper vos données par thématique, vous pourrez les utiliser pour identifier plus facilement des groupes de données dans le catalogue ou restreindre leur accès à certains groupes d'utilisateurs.</i>

<i>Une collection est un regroupement de données étroitement lié. C'est une information supplémentaire aidant à la compréhension de la donnée. Elle n'est pas obligatoire, mais il est recommandé d'en faire usage lorsque votre système commence à contenir une grande quantité de données, d'autant plus lorsqu'elles proviennent d'origines diverses et variées. Selon les recommandations OAIS, un système d'archivage doit fournir une méthode efficace de classification et d'organisation. Plus le système pourra compartimenter les informations, plus elles pourront être restituées de manière fiable et rapide.</i>

<i>Un jeu de données est basé sur le même principe, à la différence près que les données sont issues d'une même source. Référez-vous à la partie [Crawler](/user-documentation/5-crawler/introduction-crawler) pour en savoir plus sur les sources de données.</i>

<i>Il permet également de restreindre l'accès à toutes les données qu'il contient, en se basant sur l'utilisation de rôles. Pour en savoir plus, suivez la [Configure data access rights](/user-documentation/3-data-organization/data-access-rights/). Ce n'est pas le cas des collections.</i>


<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-menu.png" alt="dataset menu" width="800"> 
</div>

{% include toc.md %}


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer une collection

Avant de créer une collection, vous devez avoir créé un [modèle de données](/user-documentation/3-data-organization/models/) de type ***Collection***.

Accédez à l'onglet ***Collections & Datasets***, depuis la carte ***Collections***, appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"> ***Add*** pour créer votre première collection de données.

Il y a trois étapes principales.

**Etape 1. Configurer les paramètres de la collection**

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/collection-create-1.png" alt="step 1" width="800"> 
</div>

Renseignez les champs suivants :

- ***Supplier identifier*** *[Obligatoire]* l'identifiant unique de la collection
- ***Label*** *[Obligatoire]* désigne le nom donné à la collection
- ***Geometry*** *[Optionnel]* la zone géographique de la collection standardisée au format GeoJson
- ***Collection models*** *[Obligatoire]* étant le modèle associé à votre collection

Lorsque vous aurez choisi le modèle de données, il vous sera demandé de compléter les attributs si nécessaire comme dans l'exemple ci-dessous.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/collection-example.png" alt="step 1" width="800"> 
</div>

**Etape 2. Associer des fichiers**

Vous pouvez si vous le souhaitez, ajouter des informations liées à la collection. Ce n'est pas obligatoire. Celles-ci seront visibles lorsque vous accéderez à une donnée de la collection dans le catalogue.
- ***Thumbnail*** est une image miniature représentant la collection
- ***Description*** décrit la collection. Vous pouvez ajouter des fichiers au format pdf, html, markdown.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/collection-create-2.png" alt="step 2" width="800"> 
</div>

**Etape 3. Associer des collections**

Vous pourrez lier cette collection entre elles. Pour ce faire, recherchez dans la liste de gauche celles que vous voulez associer et ajoutez-les. Vous pouvez également ajouter des tags pour les identifier rapidement dans le catalogue.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/collection-create-3.png" alt="step 3" width="800"> 
</div>

Une fois que vous avez terminé, appuyez sur le bouton ***Save*** vous serez automatiquement redirigé vers l'écran ***Collection*** où vous retrouverez la collection que vous venez de créer.

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer un jeu de données

Avant de construire un jeu de données, vous devez avoir :
  - créé un [modèle de données](/user-documentation/3-data-organization/models/) de type ***Dataset***.
  - créé une [source de données](/user-documentation/5-crawler/introduction-crawler), les données contenues dans un jeu représente une sous-partie d'une source de données.

Une fois ces étapes effectuées, créez votre premier jeu de données en cliquant sur le bouton ***Add*** de la carte ***Datasets*** accessible depuis le menu ***Collections & Datasets***.

Commencez par lier la source de données à votre jeu dans la liste déroulante. Appuyez ensuite sur le bouton ***Next***.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-create-0.png" alt="step 0" width="800"> 
</div>

Les images suivantes contiennent des champs déjà remplis. Il s'agit d'une aide à titre indicatif, vous n'êtes absolument pas tenus de suivre ces renseignements.

**Etape 1. Configurer les paramètres du jeu de données**

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-create-1.png" alt="step 1" width="800"> 
</div>

- ***Supplier identifier*** *[Obligatoire]* l'identifiant unique du jeu de données 
- ***Label*** *[Obligatoire]* désignant le nom donné au jeu de données
- ***Geometry*** *[Optionnel]* la zone géographique de la collection standardisée au format GeoJson
- ***Data model*** *[Obligatoire]* étant le modèle associé à votre jeu de données

Complétez les valeurs des attributs si celles-ci sont requises. 

**Etape 2. Ajouter des paramètres supplémentaires**

Cette étape est cruciale pour construire votre jeu de données. Écrivez dans le champ ***Filter request in OpenSearch***, le critère devant différencier votre sous-ensemble de données du reste des données. Dans l'exemple suivant, les produits aspirés possède le tag "DATA-01". Ainsi, seuls produits répondant à ce critère représenteront le jeu de données. Si vous ne précisez aucun filtre, tous les éléments de la source de données seront inclus. Les attributs de recherche sont listés dans la colonne de gauche.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-create-2.png" alt="step 2" width="800"> 
</div>

**Etape 3. Associer des fichiers**
   
Vous pouvez si vous le souhaitez ajouter des informations liées à votre jeu de données. Ce n'est obligatoire. Celles-ci seront visibles lorsque vous accéderez à une donnée du jeu dans le catalogue.
- ***Thumbnail*** est une image miniature représentant la collection
- ***Description*** décrit la collection. Vous pouvez ajouter des fichiers au format pdf, html, markdown.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-create-3.png" alt="step 3" width="800"> 
</div>

**Etape 4. Associez des collections**

Vous pourrez lier ce jeu de données à une ou plusieurs collections. Pour ce faire, recherchez dans la liste celles correspondantes et ajoutez-les. Vous pouvez également ajouter des tags pour identifier le jeu de données plus rapidement dans le catalogue.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/dataset-collection/dataset-create-4.png" alt="step 4" width="800"> 
</div>

**Etape 5. Ajouter éventuellement des plugins, des services ihm ou des traitements associés à votre jeu**

Sélectionnez ici les [plugins](/user-documentation/7-data-services/ui-services), les [services ihm](/user-documentation/2-project-configuration/user-configuration) ou les [traitements](/user-documentation/8-order-data/processing/) qui seront associés à toutes les données appartenant à votre jeu.
 Si vous n'avez pas encore créé ces fonctionnalités, vous pourrez toujours le faire plus tard, et ré-éditer ce jeu en cliquant sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"> ***Edit*** de votre jeu de données accessible depuis l'écran ***Datasets*** (bouton <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"> ***List*** de la carte ***Datasets***).
 
 Une fois toutes ces étapes effectuées, appuyez sur le bouton ***Finish***. Votre jeu de données est à présent visible dans la liste.