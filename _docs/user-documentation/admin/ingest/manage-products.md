---
layout: classic-docs
title: Manage OAIS products
short-title: Manage
categories:
  - user-documentation
---

La gestion des produits est accessible depuis ***Add data***, la carte ***Products Manager (OAIS)*** et le bouton ***Show products*** <img src="/assets/images/user-documentation/admin/common/monitor.png" alt="show products" height="25">.

*****************

L'écran ***OAIS products*** vous permet de visualiser tous les produits stockés dans votre projet ainsi que les traitements associés.


### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Les outils de recherche

Le système d'archivage peut potentiellement stocker des millions de produits, les outils de tri et de filtrage dynamiques vous aideront dans l'exploration des données.

<div align="center">
    <img src="/assets/images/user-documentation/admin/ingest/ingest-search-tools.png" alt="search tools" width="800"> 
</div>
  
Il y a deux types de filtres, ceux communs aux produits et traitements, et ceux spécifiques à chacune de ces catégories. 
- *filtres communs* :
  - ***Source*** [completer]
  - ***Session*** [completer]
  - ***Provider ID*** [completer]
  - ***Date*** avec ce critère, vous pouvez trier les produits par la date de dernière mise à jour. Le format est le suivant 
 MM/dd/YYYY.
- *filtres spécifiques aux produits*    
  - ***Type*** [completer]
  - ***State*** l'état de stockage du produit, ***Built*** s'il [completer], ***Stored*** s'il a été sauvegardé en base de données, ***Deleted*** s'il a été marqué comme supprimé.
  - ***Storage*** correspond à l'espace dans lequel votre produit a été sauvegardé. Cela dépend de la liste de stockage que vous avez paramétré.
  - ***Version*** [completer]
- *filtres spécifiques aux traitements*
  - ***Type*** donne les types de traitement de données que l'on peut retrouver dans REGARDS (***Removal ACK***, ***Metadata storage***, ***Update***, ***Update research***, ***Create***, ***Delete***, ***Delete research***, ***Post process***).
  - ***State*** indique l'étape dans le traitement (***Waiting***, ***Created***, ***Blocked***, ***Waiting action...***, ***Ignored***, ***Running***, ***Error***, ***Aborted***)
     
Vous pouvez également utiliser les tris sur les produits ou les traitements.

*****************
### <img src="/assets/images/user-documentation/common/right-arrow.png" alt="arrow" height="14"> Les actions

Vous pouvez effectuer des actions sur les produits ou les traitements. 

> #### Effectuez des actions sur les produits

 **Les actions groupées**
 
En utilisant le sélecteur de lignes sur la gauche des produits, vous avez la possibilité d'effectuer des actions sur l'ensemble de votre sélection, leur modification ou leur suppression.

<div align="center">
  <img src="/assets/images/user-documentation/admin/ingest/ingest-group-action.png" alt="group action" width="800"> 
</div>

Lorsque vous cliquez sur ***Modify selection***, trois modifications sont possibles :

<div align="center">
    <img src="/assets/images/user-documentation/admin/ingest/ingest-modify-products.png" alt="modify products" width="800"> 
</div>

    
- ***Storages*** [completer],
- ***Categories*** ajouter ou modifier des catégories,
- ***Tags*** ajouter ou modifier des tags.

Lorsque vous cliquez sur ***Delete selection***, la pop-up window suivante s'affiche :

<div align="center">
  <img src="/assets/images/user-documentation/admin/ingest/ingest-delete-products.png" alt="delete products" width="800"> 
</div>

Vous pouvez supprimer soit de manière irrévocable, soit en marquant le produit comme supprimé. A la différence du marquage de suppression, la suppression irrévocable ne permet pas de récupérer les informations liées au produit, elles seront effacées définitivement de l'espace de stockage.


**Les actions par ligne**
 
Il y a trois boutons d'action par ligne :

- <img src="/assets/images/user-documentation/admin/common/load.png" alt="load product" height="20"> en cliquant sur la flèche, deux options s'affichent ***AIP*** ou ***SIP***. En cliquant sur l'un ou l'autre, une popup s'affichera pour affichant le contenu JSON associé.
- <img src="/assets/images/user-documentation/admin/common/edit.png" alt="edit product" height="20"> ce bouton vous permettra d'éditer le produit de la même manière qu'en appuyant sur le bouton ***Modify selection*** (cf. ci-dessus)
- <img src="/assets/images/user-documentation/admin/common/delete.png" alt="delete product" height="20"> ce bouton vous permettra de supprimer le produit de la même manière qu'en appuyant sur le bouton ***Delete selection*** (cf. ci-dessus)

<div align="center">
  <img src="/assets/images/user-documentation/admin/ingest/ingest-submit-products.png" alt="submit products" width="800"> 
</div>

> #### Effectuez des actions sur les traitements

**Les actions groupées**

En utilisant le sélecteur de lignes sur la gauche des produits, vous avez la possibilité d'effectuer plusieurs opérations sur l'ensemble de votre sélection.

- ***Version option*** permet de [completer]
- ***Retry selection*** permet de relancer des traitements, cela vous sera particulièrement utile dans le cas où des traitements ont échoués.
- ***Delete selection*** suppriment les traitements présents dans la sélection de façon définitive

Prenez garde, la dernière option ***Operation*** arrête tous les traitements en cours, pas seulement ceux de votre sélection.

**Les actions par ligne**

Sur une ligne vous pouvez relancer un traitement ou en supprimer de la même manière que pour les actions groupées.   
