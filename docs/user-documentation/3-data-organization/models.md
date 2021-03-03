---
id: data-organization-model-configuration
title: Model configuration
slug: /user-guide/data-organization/models
---

_Les modèles de données sont indispensables à REGARDS. Ils peuvent être utilisés dans les collections, les jeux de données ou encore servir à définir le processus automatisé d'aspiration de données vers le catalogue.
La gestion des modèles de données s'effectue depuis l'onglet ***Data models***. Vous trouverez quatre cartes :_

- **_Models_** _sont des fichiers au format XML définissant la structure des données attendues dans REGARDS. Ils sont composés d'un ensemble d'attributs._
- **_Attributs_** _décrivent les caractéristiques du modèle._
- **_Fragments_** _regroupent les attributs par signification. Ils ne sont pas obligatoires mais fortement recommandés lorsque le modèle a de nombreux attributs._
- **_Attribute calculation plugins_** _sont utiles pour calculer automatiquement certains attributs du modèle._

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-menu.png" alt="model menu" width="800"/> 
</div>

Dans la partie suivante, vous apprendrez à créer et gérer un modèle de données étape par étape.

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Créer un modèle

Depuis **_Data models_** et la carte **_Models_** cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"/> **_Add_** .

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-create-model.png" alt="create model" width="800"/> 
</div>

Vous avez deux manières de créer un modèle de données :

- Manuellement en renseignant les champs suivants (1) :
  - **_Name_** le nom du modèle
  - **_Description_** la description du modèle
  - **_Type_** le type du modèle parmi **_Collection_**, **_Data_** ou **_Dataset_**. Définissez-le selon vos besoins :
    - **_Collection_** est utilisé par les [collections de données](collections-datasets)
    - **_Dataset_** est utilisé par les [jeux de données](collections-datasets)
    - **_Data_** est utilisé par les [crawlers](../crawler/introduction) afin d'établir une correspondance entre vos données aspirées et le catalogue REGARDS
- En important un fichier de données au format XML (2). C'est une solution qui est à privilégiée car elle permet de créer avec un seul fichier le modèle, ses attributs et éventuellement ses fragments. Pour sa rédaction, veuillez vous référez à la page [Create a model](../../development/appendices/create-model) et importez le modèle en appuyant sur le bouton **_Select a file_**.

Si vous avez choisi la création manuelle, suivez les étapes ci-dessous pour ajouter des attributs et des fragments au modèle de données.

### Créer des fragments

Avant de créer des attributs, vous pouvez créer des fragments qui serviront à les regrouper.
Depuis **_Data models_** et la carte **_Fragments_**, appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="30"/> **_Add_**.

Vous pouvez :

- soit créer un fragment manuellement en renseignant les champs **_Fragment name_** et **_Description_** puis appuyer sur le bouton **_Save_**
- soit importer un fichier XML qui importera directement un fragment et ses attributs. Lire [Create a model](../../development/appendices/create-model) pour écrire ce fichier.

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-create-fragment.png" alt="create fragment" width="800"/> 
</div>

Si vous avez choisi de créer manuellement un fragment, ou si vous voulez ajouter des attributs sans que ceci soient regroupés dans un fragment, suivez les étapes ci-dessous.

### Créer des attributs du modèle

Depuis **_Data models_** et la carte **_Model attributes_**, appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"/> **_Add_**.

Remplissez les champs :

- **_Attribute name_** _[Obligatoire]_ qui sera l'identifiant utilisé pour l'attribut. Il ne doit pas avoir d'espace,
- **_Attribute label_** _[Obligatoire]_ le nom usuel utilisé pour désigner l'attribut.
- **_Description_** _[Optionnel]_ pour vous aider à vous rappeler la signification de l'attribut.
- **_Type_** _[Obligatoire]_ le type de l'attribut
- **_Fragment_** _[Optionnel]_ par défaut, les attributs ne sont pas associés à des fragments. Précisez un fragment que vous avez précédemment créé si vous souhaitez que l'attribut appartienne à cette catégorie.
- case **_Alterable_** _[Optionnel]_ indique si l'attribut est modifiable.
- case **_Optional_** _[Optionnel]_ indique si l'attribut doit obligatoirement être renseigné dans le modèle.

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-create-attribute.png" alt="create attribute" width="800"/> 
</div>

Une fois les attributs et, ou les fragments créés, vous pouvez les lier au modèle établi précédemment.

### Créer vos propres plugins de calcul

Les plugins de calculs sont des algorithmiques permettant de calculer automatiquement des valeurs sur les modèles de type **_Dataset_**. REGARDS en fournit de base :

- **_CountPlugin_** calcule le nombre de données dans un jeu de données
- **_IntSumComputePlugin_** calcule la somme des attributs de type Integer d'un jeu de données
- **_LongSumComputePlugin_** calcule la somme des attributs de type Long d'un jeu de données
- **_MaxDateComputePlugin_** trouve la date la plus récente d'un jeu de données
- **_MinDateComputePlugin_** trouve la date la plus ancienne d'un jeu de données

Pour configurer une instance de plugin de calcul, cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"/> **_Add_** de la carte **_Attribute calculation plugins_**. Choisissez le plugin de calcul, remplissez éventuellement les paramètres et cliquez sur le bouton **_Add_**. Vous serez ensuite redirigé vers l'écran listant toutes les configurations de plugins de calcul.

Vous pouvez ensuite lier ce plugin à un attribut du modèle

### Lier les attributs au modèle

Revenez sur la page des modèles dans **_Data models_** et la carte **_Models_** et cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"/> **_List_**.

Vous trouverez ici la liste de tous les modèles que vous avez créés. Appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/link.png" alt="mapping" height="25"/> **_Link attributes_** pour lier des attributs au modèle.

Vous y trouverez l'interface suivante :

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-link-attribute.png" alt="map attribute" width="800"/> 
</div>

Sur la gauche, les attributs appartenant au modèle et sur la droite, l'ensemble des attributs et éventuellement des fragments disponibles dans le projet. Les fragments sont représentés par des blocs contenant des titres. Pour ajouter un attribut ou un fragment, effectuez simple un drag and drop de la gauche vers la droite.

Si votre modèle est de type **_Dataset_**, vous pourrez ajouter un plugin de calcul sur un attribut en appuyant sur le bouton **_Use a plugin_**. Le type de retour du plugin doit être compatible avec le type d'attribut. Si la case est grisée, cela signifie qu'aucun plugin de calcul ne correspond à l'attribut en question.

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-link-attribute-dataset.png" alt="dataset" width="800"/> 
</div>

Une fois l'ensemble des éléments ajoutés à votre modèle, il sera prêt à être utilisé.

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Gérer les modèles de données

Pour gérer les modèles de données, appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"/> de la carte **_Models_**.

<div align="center">
  <img src="/images/user-documentation/3-data-organization/models/model-list-model.png" alt="list" width="800"/> 
</div>

Les boutons d'action vous permette d'effectuer différentes tâches :

- <img src="/images/user-documentation/regards-icons/admin/download.png" alt="download" height="25"/> <b><i>Download</i></b> exporte le modèle au format XML
- <img src="/images/user-documentation/regards-icons/admin/link.png" alt="mapping" height="25"/> <b><i>Link attributes</i></b> édite les attributs et les fragments liés au modèle
- <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"/> <b><i>Edit</i></b> permet de changer la description du modèle
- <img src="/images/user-documentation/regards-icons/admin/duplicate.png" alt="duplicate" height="25"/> <b><i>Duplicate</i></b> duplique le modèle. Attention, les plugins de calcul associés aux attributs du modèle d'origine ne seront pas copiés.
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="delete" height="25"/> <b><i>Delete</i></b> il n'est pour le moment pas possible de supprimer un modèle de données

:::info
Vous pouvez filtrer les modèles par nom pour les rechercher plus facilement dans la liste
:::
