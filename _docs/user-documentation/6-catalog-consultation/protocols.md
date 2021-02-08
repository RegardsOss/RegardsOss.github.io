---
layout: classic-docs
title: Interoperability protocols
short-title: Search
categories:
  - user-documentation
---


<i>Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos données dans le catalogue. Dans cette page, vous apprendrez à configurer un protocole de recherche standardisé basé sur OpenSearch, pour effectuer des recherches sur votre catalogue même depuis l'extérieur de REGARDS.</i> 


{% include toc.md %}

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Introduction

La gestion des protocoles de recherche est accessible depuis la carte ***Search protocols*** du menu ***Catalog Access***.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/catalog/catalog-access-menu.png" alt="protocol menu" width="800"> 
</div> 

Cliquez sur le bouton ***List*** de la carte <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25">.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/protocols/protocol-update.png" alt="protocol list" width="800"> 
</div> 

Vous constaterez qu'il existe déjà un protocole de recherche par défaut et non supprimable ***REGARDS search protocol***. Il est interne à REGARDS et utilisé pour faire toutes les recherches dans le catalogue, néanmoins, il n'est pas interopérable avec d'autres services web. Si vous avez besoin de le rendre compatible avec des services autres que REGARDS, suivez les étapes ci-dessous pour créer un plugin de recherche basé sur un protocole largement utilisé Opensearch.

Si vous souhaitez ajouter un autre format de communication, vous pouvez développer votre propre plugin.


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer un protocole de recherche basé sur Opensearch

Cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"> de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé par le catalogue pour faire toutes les recherches ou ***Use this search protocol only for search on the selected dataset***. Dans ce cas, choisissez le jeu de données en question dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***opensearch*** puis ***New configuration***, un nouveau bloc de configuration s'affichera. 

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/protocols/protocol-create.png" alt="protocol create" width="800"> 
</div> 

Remplissez ensuite tous les champs relatifs au protocole Opensearch:
> Pour plus d'informations sur le protocole ***Opensearch***, lisez la description suivante sur [github](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md).
{: .tip .info}
>

- ***Label***, le nom de protocole dans REGARDS

- Les paramètres du search engine
    - ***Title***, un nom identifiant votre search engine
    - ***Description***, une description du search engine
    - ***Email***, le contact en charge du search engine
    - ***Tags*** *Optionnel*, une collection de mots utilisés pour identifier le search engine
    - ***Short name***, un nom identifiant votre search engine
    - ***Long name***, un nom identifiant votre search engine 
    - ***Image*** *Optionnel*, 
    - ***Attribution***
    - ***Path of the attribute in data model for the last update date***
    
    
Rendre les extensions compatibles [completer]
- Open search time extension (*)
- Open search regards extension (*)
- Open search media extension (*)

