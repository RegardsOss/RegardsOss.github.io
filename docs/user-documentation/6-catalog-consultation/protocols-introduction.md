---
id: catalog-protocols-intro
title: Interoperability protocols introduction
slug: /user-guide/catalog/protocols/introduction
---

*Les protocoles de recherches vous permettent d'interopérer REGARDS avec des systèmes externes en suivant des protocoles standardisés..*

<img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/catalog-access-menu.png" alt="catalog access menu" height="200"/> 
<img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/search-protocols-card.png" alt="search protocols card" height="200"/>

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Introduction

La gestion des protocoles de recherche est accessible depuis la carte ***Search protocols*** du menu ***Catalog Access***.
Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/list.png" alt="list" height="25"/> ***List*** de la carte ***Search protocols*** .

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/protocol-update.png" alt="protocol list" width="800"/> 
</div>

Vous constaterez qu'il existe déjà un protocole de recherche par défaut et non supprimable ***REGARDS search protocol***. Il est interne à REGARDS et utilisé pour faire toutes les recherches dans le catalogue, néanmoins, il n'est pas interopérable avec d'autres services web. Si vous avez besoin de le rendre compatible avec des services autres que REGARDS, suivez les étapes ci-dessous pour créer un plugin de recherche basé sur un protocole largement utilisé Opensearch.

Si vous souhaitez ajouter un autre format de communication, vous pouvez développer votre propre plugin.

Deux protocoles sont actuellements disponibles avec REGARDS :
  - [Opensearch](./opensearch)
  - [STAC](./stac)
