---
layout: classic-docs
title: Model configuration
short-title: Model
categories:
  - user-documentation
---

<i>Les modèles de données sont indispensables à REGARDS. Ils peuvent être utilisés dans les collections, les jeux de données ou encore servir à définir le processus automatisé d'aspiration de données vers le catalogue. 
La gestion des modèles de données s'effectue depuis l'onglet ***Data models***. Vous trouverez quatre cartes :</i>

- ***Models*** *sont des fichiers au format XML définissant la structure des données attendues dans REGARDS. Ils sont composés d'un ensemble d'attributs.*
- ***Attributs*** *décrivent les caractéristiques du modèle.*
- ***Fragments*** *regroupent les attributs par signification. Ils ne sont pas obligatoires mais fortement recommandés lorsque le modèle a de nombreux attributs.*
- ***Attribute calculation plugins*** *sont utiles pour calculer automatiquement certains attributs du modèle.*


<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/models/model-menu.png" alt="model menu" width="800"> 
</div>

{% include toc.md %}


Dans la partie suivante, vous apprendrez à créer et gérer un modèle de données étape par étape.

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12">  Créer un modèle

Depuis ***Data models*** et la carte ***Models*** cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"> ***Add*** .

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/models/model-create-model.png" alt="create model" width="800"> 
</div>

Vous avez deux manières de créer un modèle de données :
- Manuellement en renseignant les champs suivants (1) :
   - ***Name*** le nom du modèle
   - ***Description*** la description du modèle
   - ***Type*** le type du modèle parmi ***Collection***, ***Data*** ou ***Dataset***. Définissez-le selon vos besoins :
      - ***Collection*** est utilisé par les [collections de données](/user-documentation/3-data-organization/dataset-collection/)
      - ***Dataset*** est utilisé par les [jeux de données](/user-documentation/3-data-organization/dataset-collection/)
      - ***Data*** est utilisé par les [crawlers](/user-documentation/5-crawler/introduction-crawler) afin d'établir une correspondance entre vos données aspirées et le catalogue REGARDS
- En important un fichier de données au format XML (2). C'est une solution qui est à privilégiée car elle permet de créer avec un seul fichier le modèle, ses attributs et éventuellement ses fragments. Pour sa rédaction, veuillez vous référez à [completer lien pour la structure du XML] et importez le modèle en appuyant sur le bouton ***Select a file***. 

Si vous avez choisi la création manuelle, suivez les étapes ci-dessous pour ajouter des attributs et des fragments au modèle de données.

#### Créer des fragments

Avant de créer des attributs, vous pouvez créer des fragments qui serviront à les regrouper.
Depuis ***Data models*** et la carte ***Fragments***, appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="30"> ***Add***.

Vous pouvez :
 - soit créer un fragment manuellement en renseignant les champs ***Fragment name*** et ***Description*** puis appuyer sur le bouton ***Save***
 - soit importer un fichier XML qui importera directement un fragment et ses attributs. Lire [link] pour écrire ce fichier.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/models/model-create-fragment.png" alt="create fragment" width="800"> 
</div>

Si vous avez choisi de créer manuellement un fragment, ou si vous voulez ajouter des attributs sans que ceci soient regroupés dans un fragment, suivez les étapes ci-dessous.


#### Créer des attributs du modèle

Depuis ***Data models*** et la carte ***Model attributes***, appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"> ***Add***.

Remplissez les champs :
- ***Attribute name*** *[Obligatoire]* qui sera l'identifiant utilisé pour l'attribut. Il ne doit pas avoir d'espace,
- ***Attribute label*** *[Obligatoire]* le nom usuel utilisé pour désigner l'attribut.
- ***Description*** *[Optionnel]* pour vous aider à vous rappeler la signification de l'attribut.
- ***Type*** *[Obligatoire]* le type de l'attribut
- ***Fragment*** *[Optionnel]* par défaut, les attributs ne sont pas associés à des fragments. Précisez un fragment que vous avez précédemment créé si vous souhaitez que l'attribut appartienne à cette catégorie.
- case ***Alterable*** *[Optionnel]* indique si l'attribut est modifiable. 
- case ***Optional*** *[Optionnel]* indique si l'attribut doit obligatoirement être renseigné dans le modèle.

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/models/model-create-attribute.png" alt="create attribute" width="800"> 
</div>


Une fois les attributs et, ou les fragments créés, vous pouvez les lier au modèle établi précédemment.


#### Créer vos propres plugins de calcul

[completer]

#### Lier les attributs au modèle

Revenez sur la page des modèles dans ***Data models*** et la carte ***Models*** et cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"> ***List***.

Vous trouverez ici la liste de tous les modèles que vous avez créés. Appuyez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/link.png" alt="mapping" height="25"> ***Link attributes*** pour lier des attributs au modèle.

Vous y trouverez l'interface suivante :

<div align="center">
  <img src="/assets/images/user-documentation/3-data-organization/models/model-link-attribute.png" alt="map attribute" width="800"> 
</div>

Sur la gauche, les attributs appartenant au modèle et sur la droite, l'ensemble des attributs et éventuellement des fragments disponibles dans le projet. Les fragments sont représentés par des blocs contenant des titres. Pour ajouter un attribut ou un fragment, effectuez simple un drag and drop de la gauche vers la droite. 

Une fois l'ensemble des éléments ajoutés à votre modèle, il sera prêt à être utilisé.


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Gérer les modèles de données

[completer]
