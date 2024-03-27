---
id: oais-files-manage-products
title: Manage OAIS products
slug: /user-guide/import-data/oais-files/manage-products/
---

import Icon from '@mdi/react';
import { mdiSend, mdiDelete, mdiPencil, mdiMenuDown, mdiCardSearch, mdiReplay, mdiDeleteForever, mdiCogSync, mdiTableCancel } from '@mdi/js';

_La gestion des produits est accessible depuis le menu ***Add data***, puis la carte ***Products Manager (OAIS)*** et le bouton <Icon path={mdiCardSearch} size={1}/> ***Show products***. L'écran ***OAIS products*** vous permet de visualiser tous les produits stockés dans votre projet ainsi que les traitements associés._

---

## Gestion des produits

### Actions sur les produits

<div align="center">
  <img src="/images/user-documentation/v1.15/4_1-ingest/oais_products.png" alt="group action" width="800"/> 
</div>

L'interface propose quatre boutons différents associés à chaque produit :

| Icône                                 | Description                                                                                                                               |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| <Icon path={mdiMenuDown} size={1.3}/> | en cliquant sur la flèche, deux options permettent d'afficher le contenu JSON de l'**_AIP_** ou du **_SIP_** associé au produit.          |
| <Icon path={mdiPencil} size={1.3}/>   | ce bouton [vous permet d'éditer le produit](#modify-selection) de la même manière qu'en appuyant sur le bouton **_Modify selection_**     |
| <Icon path={mdiDelete} size={1.3}/>   | ce bouton [vous permet de supprimer le produit](#delete-selection) de la même manière qu'en appuyant sur le bouton **_Delete selection_** |
| <Icon path={mdiSend} size={1.3}/>     | ce bouton [vous permet de diffuser le produit](#notify-selection) de la même manière qu'en appuyant sur le bouton **_Notify selection_**  |

:::info Actions groupées
En utilisant la case à cocher présente dans la colonne de gauche à chaque produit, vous avez la possibilité d'effectuer des actions sur l'ensemble de votre sélection.  
Cela vous permet par exemple de modifier ou supprimer un grand nombre de produits en une seule fois.
:::

### Modify selection

Lorsque vous cliquez sur ***Modify selection***, trois modifications sont possibles :

<div align="center">
    <img src="/images/user-documentation/v1.4/4_1-ingest/ingest-modify-products.png" alt="modify products" width="800"/> 
</div>

- ***Storages*** si un produit est stocké sur plusieurs espaces, vous avez la possibilité de le retirer d'un d'entre eux en cliquant sur le bouton de suppression de l'espace de stockage en question. Attention, vous ne pouvez pas le supprimer de tous les espaces de stockages, utilisez le bouton ***Delete selection*** dédié sur la ligne du produit.
- ***Categories*** pour ajouter ou modifier des catégories,
- ***Tags*** pour ajouter ou modifier des tags.

Une fois les modifications terminées, appuyez sur le bouton ***Modify*** afin qu'elles soient prises en compte.

### Delete selection

Lorsque vous cliquez sur ***Delete selection***, la pop-up window suivante s'affiche :

<div align="center">
  <img src="/images/user-documentation/v1.4/4_1-ingest/ingest-delete-products.png" alt="delete products" width="800"/> 
</div>

Vous pouvez supprimer un produit de manière irrévocable ou simplement le marquer comme supprimé.  
Une suppression irrévocable permet de supprimer définitivement de la liste des produits, alors que l'autre option permet de garder le produit dans le catalogue OAIS, tout en le supprimant du catalogue indexé.

:::info Suppression d'un produit
Les fichiers associés aux produits seront supprimés dans les deux cas auprès du service de Stockage, conformément à la configuration du plugin de Stockage qui autorise la suppression effective des fichiers sur le moyen de stockage. 
:::

### Notify selection

Lorsque vous cliquez sur ***Notify selection***, la pop-up window suivante s'affiche :

<div align="center">
  <img src="/images/user-documentation/v1.15/4_1-ingest/list_recipient.png" alt="group action" width="800"/> 
</div>

Vous pouvez alors sélectionner un destinataire pour diffuser les produits sélectionnés

## Gestion des traitements

### Actions sur les traitements

L'interface propose 3 boutons différents associés à chaque traitement, suivant le type de traitement :

| Icône                                      | Description                                                                                                                                                                       |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <Icon path={mdiReplay} size={1.3}/>        | permet de relancer des traitements, cela vous sera particulièrement utile dans le cas où des traitements ont échoués.                                                             |
| <Icon path={mdiDeleteForever} size={1.3}/> | suppriment les traitements présents dans la sélection de façon définitive                                                                                                         |
| <Icon path={mdiCogSync} size={1.3}/>       | sélectionne manuellement l'action de versioning lorsque le produit à ingérer existe déjà (si le providerId est le même) ou si le mode de versioning choisi dans le SIP est manuel |

:::info Actions groupées
En utilisant la case à cocher présente dans la colonne de gauche à chaque traitement, vous avez la possibilité d'effectuer des actions sur l'ensemble de votre sélection.  
:::

### Arrêt de tous les traitements

| Icône                                    | Description                                        |
|------------------------------------------|----------------------------------------------------|
| <Icon path={mdiTableCancel} size={1.3}/> | permet d'arrêter **TOUS** les traitements en cours |

:::danger Arrêt global
Cette action concerne tous les traitements, pas seulement ceux de votre sélection.
:::

## Moteur de recherche

:::info Mise à jour non documentée
L'interface a été mise à jour depuis l'écriture de ce guide, cette documentation reste toutefois d'actualité
:::

Le système d'archivage peut potentiellement stocker des millions de produits, les outils de tri et de filtrage dynamiques vous aideront dans l'exploration des données.

<div align="center">
    <img src="/images/user-documentation/v1.4/4_1-ingest/ingest-search-tools.png" alt="search tools" width="800"/> 
</div>

Il y a deux types de filtres, ceux communs aux produits et traitements, et ceux spécifiques à chacune de ces catégories.
### Filtres communs
- ***Source*** précise le fournisseur de données. Dans le cas d'ajout de données par scan de fichiers, il s'agira du nom de la chaîne d'acquisition. Pour les dépôts directs de fichiers au format (OAIS), le champ *sessionOwner* sera utilisé.
- ***Session*** identifie toutes les données traitées lors d'une même acquisition ou ingestion. Il est utilisé pour suivre plus facilement les données importées dans REGARDS.
- ***Provider ID*** correspond à l'identifiant du SIP
- ***Date*** avec ce critère, vous pouvez trier les produits par la date de dernière mise à jour. Le format est le suivant
  `MM/dd/YYYY`.

### Filtres spécifiques aux produits

- ***Type*** pour le moment seul le type **Data** est géré dans les produits OAIS
- ***State*** l'état de stockage du produit, ***Built*** si l'AIP a été générée par la chaîne d'ingestion et est prêt à être stocké, ***Stored*** si le produit a été sauvegardé en base de données, ***Deleted*** si l'AIP a été marquée comme supprimé mais est toujours présente en base.
- ***Storage*** correspond à l'espace dans lequel votre produit a été sauvegardé. Cela dépend de la liste de stockage que vous avez paramétré.
- ***Version*** correspond à la version du produit, il peut exister plusieurs versions d'un même produit si des modifications ont été apportées

### Filtres spécifiques aux traitements

- ***Type*** donne les types de traitement de données que l'on peut retrouver dans REGARDS (***Removal ACK***, ***Metadata storage***, ***Update***, ***Update research***, ***Create***, ***Delete***, ***Delete research***, ***Post process***).
- ***State*** indique l'étape dans le traitement (***Waiting***, ***Created***, ***Blocked***, ***Waiting action...***, ***Ignored***, ***Running***, ***Error***, ***Aborted***)

Vous pouvez également utiliser les tris sur les produits ou les traitements.
