---
id: oais-files-manage-products
title: Manage OAIS products
slug: /user-guide/import-data/oais-files/manage-products/
---

_La gestion des produits est accessible depuis le menu ***Add data***, puis la carte ***Products Manager (OAIS)*** et le bouton <img src="/images/user-documentation/regards-icons/admin/monitor.png" alt="show products" height="25"/> ***Show products***. L'écran ***OAIS products*** vous permet de visualiser tous les produits stockés dans votre projet ainsi que les traitements associés._

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Les outils de recherche

Le système d'archivage peut potentiellement stocker des millions de produits, les outils de tri et de filtrage dynamiques vous aideront dans l'exploration des données.

<div align="center">
    <img src="/images/user-documentation/4_1-ingest/ingest-search-tools.png" alt="search tools" width="800"/> 
</div>
  
Il y a deux types de filtres, ceux communs aux produits et traitements, et ceux spécifiques à chacune de ces catégories. 

- *filtres communs* :
  - ***Source*** précise le fournisseur de données. Dans le cas d'ajout de données par scan de fichiers, il s'agira du nom de la chaîne d'acquisition. Pour les dépôts directs de fichiers au format (OAIS), le champ *sessionOwner* sera utilisé.
  - ***Session*** identifie toutes les données traitées lors d'une même acquisition ou ingestion. Il est utilisé pour suivre plus facilement les données importées dans REGARDS.  
  - ***Provider ID*** correspond à l'identifiant du SIP
  - ***Date*** avec ce critère, vous pouvez trier les produits par la date de dernière mise à jour. Le format est le suivant 
 MM/dd/YYYY.
- *filtres spécifiques aux produits*    
  - ***Type*** pour le moment seul le type **Data** est géré dans les produits OAIS
  - ***State*** l'état de stockage du produit, ***Built*** si l'AIP a été générée par la chaîne d'ingestion et est prêt à être stocké, ***Stored*** si le produit a été sauvegardé en base de données, ***Deleted*** si l'AIP a été marquée comme supprimé mais est toujours présente en base.
  - ***Storage*** correspond à l'espace dans lequel votre produit a été sauvegardé. Cela dépend de la liste de stockage que vous avez paramétré.
  - ***Version*** correspond à la version du produit, il peut exister plusieurs versions d'un même produit si des modifications ont été apportées
- *filtres spécifiques aux traitements*
  - ***Type*** donne les types de traitement de données que l'on peut retrouver dans REGARDS (***Removal ACK***, ***Metadata storage***, ***Update***, ***Update research***, ***Create***, ***Delete***, ***Delete research***, ***Post process***).
  - ***State*** indique l'étape dans le traitement (***Waiting***, ***Created***, ***Blocked***, ***Waiting action...***, ***Ignored***, ***Running***, ***Error***, ***Aborted***)
     
Vous pouvez également utiliser les tris sur les produits ou les traitements.

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Les actions

Vous pouvez effectuer des actions sur les produits ou les traitements.

### Effectuer des actions sur les produits

**Les actions groupées**

En utilisant le sélecteur de lignes sur la gauche des produits, vous avez la possibilité d'effectuer des actions sur l'ensemble de votre sélection, leur modification ou leur suppression.

<div align="center">
  <img src="/images/user-documentation/4_1-ingest/ingest-group-action.png" alt="group action" width="800"/> 
</div>

Lorsque vous cliquez sur ***Modify selection***, trois modifications sont possibles :

<div align="center">
    <img src="/images/user-documentation/4_1-ingest/ingest-modify-products.png" alt="modify products" width="800"/> 
</div>

- ***Storages*** si un produit est stocké sur plusieurs espaces, vous avez la possibilité de le retirer d'un d'entre eux en cliquant sur le bouton de suppression de l'espace de stockage en question. Attention, vous ne pouvez pas le supprimer de tous les espaces de stockages, utilisez le bouton ***Delete selection*** dédié sur la ligne du produit.
- ***Categories*** pour ajouter ou modifier des catégories,
- ***Tags*** pour ajouter ou modifier des tags.

Une fois les modifications terminées, appuyez sur le bouton ***Modify*** afin qu'elles soient prises en compte.

Lorsque vous cliquez sur ***Delete selection***, la pop-up window suivante s'affiche :

<div align="center">
  <img src="/images/user-documentation/4_1-ingest/ingest-delete-products.png" alt="delete products" width="800"/> 
</div>

Vous pouvez supprimer soit de manière irrévocable, soit en marquant le produit comme supprimé. A la différence du marquage de suppression, la suppression irrévocable ne permet pas de récupérer les informations liées au produit, elles seront effacées définitivement de l'espace de stockage.

**Les actions par ligne**

Il y a trois boutons d'action par ligne :

- <img src="/images/user-documentation/regards-icons/admin/load.png" alt="load product" height="20"/> en cliquant sur la flèche, deux options s'affichent <b><i>AIP</i></b> ou <b><i>SIP</i></b> En cliquant sur l'un ou l'autre, une popup affichera le contenu JSON associé.
- <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit product" height="20"/> ce bouton vous permettra d'éditer le produit de la même manière qu'en appuyant sur le bouton <b><i>Modify selection</i></b> (cf. ci-dessus)
- <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="delete product" height="20"/> ce bouton vous permettra de supprimer le produit de la même manière qu'en appuyant sur le bouton <b><i>Delete selection</i></b> (cf. ci-dessus)

### Effectuer des actions sur les traitements

**Les actions groupées**

En utilisant le sélecteur de lignes sur la gauche des produits, vous avez la possibilité d'effectuer plusieurs opérations sur l'ensemble de votre sélection.

- ***Version option*** sélectionne manuellement l'action de versioning lorsque le produit à ingérer existe déjà (si le providerId est le même) ou si le mode de versioning choisi dans le SIP est manuel
- ***Retry selection*** permet de relancer des traitements, cela vous sera particulièrement utile dans le cas où des traitements ont échoués.
- ***Delete selection*** suppriment les traitements présents dans la sélection de façon définitive

Prenez garde, la dernière option ***Operation*** arrête tous les traitements en cours, pas seulement ceux de votre sélection.

**Les actions par ligne**

Sur une ligne vous pouvez relancer un traitement ou en supprimer de la même manière que pour les actions groupées.
