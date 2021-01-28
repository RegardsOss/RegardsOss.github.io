---
layout: classic-docs
title: Collections & Datasets
short-title: Datasets
categories:
  - user-documentation
---

<div style="text-align:center;">
  <h2>Créez des collections et des jeux de données</h2>
  <p>Les collections et les jeux de données sont incontournables dans REGARDS. Ils vous permettent de regrouper vos données par thématique, vous pourrez les utiliser pour identifier plus facilement des groupes de données dans le catalogue ou restreindre leur accès à certains groupes d'utilisateurs. </p> <br/>
</div>

{% include toc.md %}


*****************


### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Introduction
Une collection est un regroupement de données dont la signification est étroitement liée. C'est une donnée supplémentaire aidant à la compréhension de la donnée. Elle n'est pas obligatoire, mais il est recommandé d'en faire usage lorsque votre système commence à contenir une grande quantité de données, d'autant plus lorsqu'elles proviennent d'origines diverses et variées. Selon les recommandations OAIS, un système d'archivage doit fournir une méthode efficace de classification et d'organisation. Plus le système pourra compartimenter les informations, plus elles pourront être restituées de manière fiable et rapide.


Un jeu de données est basé sur le même principe, à la différence près que les données sont issues d'une même source de données. Référez-vous à la partie [Crawler](/user-documentation/admin/crawler/introduction-crawler) pour en savoir plus sur les sources de données. Vous pourrez également restreindre l'accès au jeu, ce qui n'est pas le cas d'une collection.

*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Créez une collection

Avant de créer une collection, vous devez avoir créé un [modèle de données](/user-documentation/admin/configuration/models-configuration) de type ***Collection***. [completer pourquoi]

Accédez à l'onglet ***Collections & Datasets***, depuis la carte ***Collections***, appuyez sur le bouton ***Add*** <img src="/assets/images/user-documentation/admin/common/add.png" alt="add" height="25"> pour créer votre première collection de données.

Il y a trois étapes principales.

**Etape 1. Configurez les paramètres de la collection**

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/collection-create-1.png" alt="step 1" width="800"> 
</div>

Renseignez les champs suivants :

- ***Supplier identifier*** [completer] 
- ***Label*** désignant le nom donné à la collection
- ***Geometry*** [completer]
- ***Collection models*** étant le modèle associé à votre collection

**Etape 2. Associez des fichiers**

Vous pouvez si vous le souhaitez, ajouter des informations liées à la collection. Ce n'est obligatoire. Celles-ci seront visibles lorsque vous accéderez à une donnée de la collection dans le catalogue.
- ***Thumbnail*** est une image miniature représentant la collection
- ***Description*** décrit la collection. Vous pouvez ajouter des fichiers au format pdf [completer]

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/collection-create-2.png" alt="step 2" width="800"> 
</div>

**Etape 3. Associez des collections**

Vous pourrez lier cette collection à d'autres. Pour ce faire, recherchez dans la liste celle ou celles correspondantes et ajoutez-les. Vous pouvez également ajouter des tags pour [completer].

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/collection-create-3.png" alt="step 3" width="800"> 
</div>

Une fois que vous avez terminé, appuyez sur le bouton ***Save*** vous serez automatiquement redirigé vers l'écran ***Collection*** où vous retrouverez la collection que vous venez de créer.

*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Créez un jeu de données

Avant de construire un jeu de données, vous devez avoir :
  - créé un [modèle de données](/user-documentation/admin/configuration/models-configuration) de type ***Dataset***. [completer pourquoi]
  - créé une [source de données](/user-documentation/admin/crawler/introduction-crawler), les données contenues dans un jeu représente une sous-partie d'une source de données.

Une fois ces étapes effectuées, créez votre premier jeu de données en cliquant sur le bouton ***Add*** de la carte ***Datasets*** accessible depuis le menu ***Collections & Datasets***.

Commencez par lier la source de données à votre jeu dans la liste déroulante. Appuyez ensuite sur le bouton ***Next***.

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/dataset-create-0.png" alt="step 0" width="800"> 
</div>

Les images suivantes contiennent des champs déjà remplis. Il s'agit d'une aide à titre indicatif, vous n'êtes absolument pas tenus de suivre ces renseignements.

**Etape 1. Configurez les paramètres du jeu de données**

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/dataset-create-1.png" alt="step 1" width="800"> 
</div>

- ***Supplier identifier*** [completer] 
- ***Label*** désignant le nom donné au jeu de données
- ***Geometry*** [completer]
- ***Data model*** étant le modèle associé à votre jeu de donnée

**Etape 2. Ajoutez des paramètres supplémentaires**

Cette étape est cruciale pour construire votre jeu de données avec justesse. Écrivez dans le champ ***Filter request in OpenSearch***, le critère devant différencier votre sous-ensemble de données du reste des données. Dans l'exemple suivant, les produits aspirés possède le tag "DATA-01". Ainsi, seuls produits répondant à ce critère représenteront le jeu de données. Si vous ne précisez aucun filtre, tous les éléments de la source de données seront inclus.

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/dataset-create-2.png" alt="step 2" width="800"> 
</div>

**Etape 3. Associez des fichiers**
   
Vous pouvez si vous le souhaitez ajouter des informations liées votre jeu de données. Ce n'est obligatoire. Celles-ci seront visibles lorsque vous accéderez à une donnée du jeu dans le catalogue.
- ***Thumbnail*** est une image miniature représentant la collection
- ***Description*** décrit la collection. Vous pouvez ajouter des fichiers au format pdf [completer]

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/dataset-create-3.png" alt="step 3" width="800"> 
</div>

**Etape 4. Associez des collections**

Vous pourrez lier ce jeu de données à une ou plusieurs collections. Pour ce faire, recherchez dans la liste celle ou celles correspondantes et ajoutez-les. Vous pouvez également ajouter des tags pour [completer].

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/dataset/dataset-create-4.png" alt="step 4" width="800"> 
</div>

**Etape 5. Ajoutez éventuellement des plugins, des services ihm ou des traitements associés à votre jeu**

Sélectionnez ici les [plugins](/user-documentation/admin/configuration/catalog-services), les [services ihm](/user-documentation/admin/configuration/ui-configuration) ou les [traitements](user-documentation/admin/configuration/user-orders) qui seront associés à toutes les données appartenant à votre jeu.
 Si vous n'avez pas encore créé ces fonctionnalités, vous pourrez toujours le faire plus tard, et ré-éditer ce jeu en cliquant sur le bouton <img src="/assets/images/user-documentation/admin/common/edit.png" alt="edit" height="25"> de votre jeu de données accessible depuis l'écran ***Datasets*** (bouton <img src="/assets/images/user-documentation/admin/common/list.png" alt="list" height="25"> de la carte ***Datasets***).
 
 Une fois toutes ces étapes effectuées, appuyez sur le bouton ***Finish***. Votre jeu de données est à présent visible dans la liste.