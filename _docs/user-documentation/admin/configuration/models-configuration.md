---
layout: classic-docs
title: Model configuration
short-title: Model
categories:
  - user-documentation
---

<div style="text-align:center;">
  <h2>Créez des modèles de données</h2>
  <p>Les modèles de données sont indispensables à REGARDS. Ils peuvent être utilisé dans les collections, les jeux de données ou encore servir à définir le processus automatisé d'aspiration de données.</p> <br/>
</div>


{% include toc.md %}


*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Introduction

La gestion des modèles de données s'effectue depuis l'onglet ***Data models***. Vous trouverez quatre cartes :

- ***Models*** sont des fichiers au format XML définissant la structure des données attendues dans REGARDS. Ils sont composés d'un ensemble d'attributs.
- ***Attributs*** décrivent les caractéristiques du modèle
- ***Fragments*** regroupent les attributs par signification. Ils ne sont pas obligatoires mais fortement recommandés lorsque le modèle a de nombreux attributs.
- ***Attribute calculation plugins*** sont utiles lorsque de nouvelles données sont associées à un groupe de données. Certains attributs du modèles doivent être recalculés, comme le nombre de données. 


Dans la partie suivante, vous apprendrez à créer et gérer un modèle de données étape par étape.

*****************

### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14">  Créez un modèle

Depuis ***Data models*** et la carte ***Models*** cliquez sur le bouton ***Add*** <img src="/assets/images/user-documentation/admin/common/add.png" alt="add" height="25">.

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/model/model-create-model.png" alt="create model" width="800"> 
</div>

Vous avez deux manières de créer un modèle de données :
- Manuellement en renseignant les champs suivants (1) :
   - ***Name*** le nom du modèle
   - ***Description*** la description du modèle
   - ***Type*** le type du modèle parmi ***Collection***, ***Data*** ou ***Dataset***. Définissez-le selon vos besoins :
      - ***Collection*** est utilisé par les [collections de données](/user-documentation/admin/configuration/dataset)
      - ***Dataset*** est utilisé par les [jeux de données](/user-documentation/admin/configuration/dataset)
      - ***Data*** est utilisé par les [crawlers](/user-documentation/admin/crawler/introduction-crawler) afin de d'établir une correspondance entre vos données et le système REGARDS
- En important un fichier de données au format XML (2), pour cela, appuyez sur le bouton ***Select a file***. C'est une solution qui est à privilégier car elle permet de créer plus simplement et plus rapidement le modèle et ses attributs. Pour sa rédaction, veuillez lire [link]

Si vous avez choisi la création manuelle, suivez les étapes ci-dessous pour ajouter des attributs au modèle de données.

*****************

#### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Créez éventuellement des fragments

Avant de créer des attributs, vous pouvez créer des fragments qui serviront à les regrouper.
Depuis ***Data models*** et la carte ***Fragments***, appuyez sur le bouton ***Add*** <img src="/assets/images/user-documentation/admin/common/add.png" alt="add" height="30">.

Vous pouvez :
 - soit créer un fragment manuellement en renseignant les champs ***Fragment name*** et ***Description*** puis appuyer sur le bouton ***Save***
 - soit importer un fichier XML avec un fragment et ses attributs. 

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/model/model-create-fragment.png" alt="create fragment" width="800"> 
</div>

Si vous avez choisi de créer manuellement un fragment, ou si vous voulez ajouter des attributs sans que ceci soient regroupés dans un fragment, suivez les étapes ci-dessous.

*****************

#### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Créez des attributs du modèle

Depuis ***Data models*** et la carte ***Model attributes***, appuyez sur le bouton <img src="/assets/images/user-documentation/admin/common/add.png" alt="add" height="25">.

Remplissez les champs :
- ***Attribute name*** *Obligatoire* qui sera l'identifiant utilisé pour l'attribut. Il ne doit pas avoir d'espace,
- ***Attribute label*** *Obligatoire* le nom couramment utilisé pour désigner l'attribut.
- ***Description*** *Optionnel* pour vous aider à vous rappeler la signification de l'attribut.
- ***Type*** *Obligatoire* le type de l'attribut
- ***Fragment*** *Optionnel* par défaut, les attributs ne sont pas dans des fragments. Précisez un fragment que vous avez précédemment créer si vous souhaitez que l'attribut appartienne cette catégorie.
- case ***Alterable*** *Optionnel* par défaut [completer]
- case ***Optional*** *Optionnel* qui permettra de préciser si l'attribut doit obligatoirement être renseigné dans le modèle. Par défaut, il l'est.

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/model/model-create-attribute.png" alt="create attribute" width="800"> 
</div>


Une fois les attributs et, ou les fragments créés, vous pouvez les lier au modèle établi précédemment.

*****************

#### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Liez les attributs au modèle

Revenez sur la page des modèles dans ***Data models*** et la carte ***Models*** et cliquez sur le bouton ***List*** <img src="/assets/images/user-documentation/admin/common/list.png" alt="list" height="25">.

Vous trouverez ici la liste de tous les modèles que vous avez créés. Appuyez sur le bouton ***Link attributes*** <img src="/assets/images/user-documentation/admin/common/link.png" alt="mapping" height="25"> pour lier des attributs au modèle.

Vous y trouverez l'interface suivante :

<div align="center">
  <img src="/assets/images/user-documentation/admin/configuration/model/model-link-attribute.png" alt="map attribute" width="800"> 
</div>

Sur la gauche, les attributs appartenant au modèle et sur la droite, l'ensemble des attributs et éventuellement des fragments disponibles dans le projet. Les fragments sont représentés par des cases avec des titres. Pour ajouter un attribut, effectuez simple un drag and drop de la gauche vers la droite. 

Une fois l'ensemble des éléments ajoutés à votre modèle, il sera prêt à être utilisé.

*****************

#### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Ajoutez des plugins de calcul

[completer]