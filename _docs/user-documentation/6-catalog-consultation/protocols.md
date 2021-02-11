---
layout: classic-docs
title: Interoperability protocols
short-title: Search
categories:
  - user-documentation
---


<i>Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos données dans le catalogue. Dans cette page, vous apprendrez à configurer un protocole de recherche standardisé basé sur OpenSearch, pour effectuer des recherches sur votre catalogue même depuis l'extérieur de REGARDS.</i> 

<img src="/assets/images/user-documentation/6-catalog-consultation/protocols/catalog-access-menu.png" alt="catalog access menu" height="200"> 
<img src="/assets/images/user-documentation/6-catalog-consultation/protocols/search-protocols-card.png" alt="search protocols card" height="200"> 


{% include toc.md %}

*****************

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Introduction

La gestion des protocoles de recherche est accessible depuis la carte ***Search protocols*** du menu ***Catalog Access***.
Cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"> ***List*** de la carte ***Search protocols*** .

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/protocols/protocol-update.png" alt="protocol list" width="800"> 
</div> 

Vous constaterez qu'il existe déjà un protocole de recherche par défaut et non supprimable ***REGARDS search protocol***. Il est interne à REGARDS et utilisé pour faire toutes les recherches dans le catalogue, néanmoins, il n'est pas interopérable avec d'autres services web. Si vous avez besoin de le rendre compatible avec des services autres que REGARDS, suivez les étapes ci-dessous pour créer un plugin de recherche basé sur un protocole largement utilisé Opensearch.

Si vous souhaitez ajouter un autre format de communication, vous pouvez développer votre propre plugin.


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Créer un protocole de recherche basé sur Opensearch

Cliquez sur le bouton <img src="/assets/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25"> ***Add*** de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé sur l'ensemble des données du catalogue ou ***Use this search protocol only for search on the selected dataset***, pour restreindre la recherche à un jeu de données en particulier. Dans ce cas, choisissez-le dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***opensearch*** puis ***New configuration***, un nouveau bloc de configuration s'affichera. 

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/protocols/protocol-create.png" alt="protocol create" width="800"> 
</div> 

Remplissez ensuite tous les champs relatifs au protocole Opensearch:
> Pour plus d'informations sur le protocole ***Opensearch***, lisez la description suivante sur [github](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md).
{: .tip .info}

- ***Label*** *[Obligatoire]*, le nom de protocole dans REGARDS

- Les paramètres du search engine *[Optionnel]*
    - ***Title***, un nom identifiant votre search engine
    - ***Description***, une brève description du search engine. Elle doit faire 1024 caractères ou moins et ne doit pas contenir de HTML ou autre tag.
    - ***Email***, le contact en charge du search engine
    - ***Tags*** , une collection de mots utilisés pour identifier le search engine
    - ***Short name***, un nom identifiant votre search engine. Il doit faire 16 caractères ou moins et ne doit pas contenir de HTML ou autre tag.
    - ***Long name***, un nom identifiant votre search engine. Il doit faire 48 caractères ou moins et ne doit pas contenir de HTML ou autre tag.
    - ***Image***, l'icône utilisée pour votre search engine. Quand cela est possible, ajoutez une image 16x16 de type image/x-icon (comme des /favicon.ico) et une image 64x64 de type image/jpeg ou image/png
    - ***Attribution***, les organisations que l'on peut citer pour dans le développement du search engine 
    - ***Path of the attribute in data model for the last update date***, la dernière date de modification des métadonnées
    
    
Rendre les extensions compatibles 
- ***Open search time extension*** *[Optionnel]*, rend le protocole compatible à l'extension standard Opensearch *time*. En cochant cette case, vous devrez renseigner la façon de récupérer les paramètres *start* et *end* dans le tableau ***Parameters configuration***. N'hésitez à vous appuyer sur les différents tooltips pour vous aidez.
- ***Open search regards extension*** *[Optionnel]*, tous les attributs autres que ceux standard au protocole Opensearch sont mappés avec l'extension *regards*
- ***Open search media extension*** *[Optionnel]*, ajoute des liens de référencement à tous les fichiers associés aux données comme les thumbnails, les données brutes, les documents, etc.

> Le protocole est compatible à l'extension geo par défaut depuis le chemin properties.geometry du modèle. Néanmoins vous pouvez changer le chemin d'accès en le paramétrant dans le tableau ***Parameters configuration***
{: .tip .info}

Exemple de configuration de l'extension *time* dans le tableau ***Parameters configuration*** : 
- Depuis le tableau ***Parameters***, appuyez sur le bouton ***Add*** :
   - ajouter l'attribut start :
     - ***Opensearch name of the parameter*** *[Optionnel]* : start
     - ***Name of the extension parameters*** *[Obligatoire]* : start
     - ***Namespace of the extension parameter*** *[Obligatoire]* : time
     - ***Enable generation of possible values*** *[Optionnel]* : False
     - ***Limit number of possible values*** *[Optionnel]* : -
     - ***Full json path of the associated REGARDS attribute*** *[Obligatoire]* : properties.start_date
 - ajouter l'attribut end :
    - ***Opensearch name of the parameter*** *[Optionnel]* : end
    - ***Name of the extension parameters*** *[Obligatoire]* : end
    - ***Namespace of the extension parameter*** *[Obligatoire]* : time
    - ***Enable generation of possible values*** *[Optionnel]* : False
    - ***Limit number of possible values*** *[Optionnel]* : -
    - ***Full json path of the associated REGARDS attribute*** *[Obligatoire]* : properties.stop_date
    
Une fois votre configuration terminée, appuyez sur le bouton ***Create*** et retrouvez votre protocole dans la liste des protocoles de recherche. 
 
En cliquant sur le bouton info, vous pourrez accéder au endpoint de recherche afin de vérifier le fonctionnement du protocole et de récupérer le descripteur.

<div align="center">
  <img src="/assets/images/user-documentation/6-catalog-consultation/protocols/protocol-info.png" alt="protocol info" width="800"> 
</div> 


> Pensez à rendre vos jeux de données disponibles depuis l'extérieur en autorisant l'accès aux jeux de données et objets pour le groupe public. Pour plus d'informations, référez-vous à la page [Configure data access rights](/user-documentation/3-data-organization/data-access-rights/)
{: .tip .warning}