---
id: catalog-protocols-stac-description
title: Introduction
slug: /user-guide/catalog/protocols/stac/introduction
---

Il est possible de configurer un moteur de recherche STAC afin de naviguer sur le catalogue REGARDS en suivant le protocole [SpatioTemporal Asset Catalog (STAC)](https://stacspec.org/).   
L'activation de ce protocole dans REGARDS se fait au travers d'un [plug-in de catalogue](conf-plugin).

REGARDS est conforme aux spécifications suivantes :
- [STAC spec v1.1.0](https://github.com/radiantearth/stac-spec/blob/dev/CHANGELOG.md)
- [STAC API spec v1.0.0](https://github.com/radiantearth/stac-api-spec/tree/main)

#### Limitations des critères spatiaux

* Dans REGARDS, le paramètre de recherche `intersects` est limité aux géométries de type polygone et 
multi-polygone. La recherche par intersection pour les autres types de géométrie n'est pas supportée.
* La précision de la grille géométrique est de 50 mètres par défaut. Pour détecter un point, il est donc conseillé 
  d'utiliser des polygones ou des bbox d'au moins 100m de côté, soit une précision de 0,001°.

## Catalogues

Un [**catalogue**](https://github.com/radiantearth/stac-api-spec/blob/v1.0.0/stac-spec/catalog-spec/catalog-spec.md) 
est l'entité de plus haut niveau dans la spécification STAC. Il constitue un ensemble logique de
[collections](#collections), d'[items](#items) et éventuellement d'autres catalogues.

Dans REGARDS, un catalogue correspond à un projet. Il n'est pas possible de définir plus d'un catalogue par serveur, 
et par conséquent, un seul projet peut exposer ses données au format STAC.

#### Exemple de requête curl

La requête suivante permet d'obtenir le catalogue STAC:

```shell
curl https://regards.cnes.fr/api/v1/rs-catalog/stac \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json'
```

## Collections

Une  [**collection**](https://github.com/radiantearth/stac-api-spec/blob/v1.0.0/stac-spec/collection-spec/collection-spec.md)
est une entité de haut niveau dans le protocole STAC. Elle regroupe un ensemble d'objets partageant des 
caractéristiques communes.

**Attention** : Il ne faut pas confondre la notion de collection STAC avec la notion de 
[collection](../../3-data-organization/dataset-collection.md) dans REGARDS.

Dans notre implémentation REGARDS, nous distinguons deux types de collections STAC :

### Collections statiques

Les **collections STAC statiques** sont définies depuis les **jeux de données** et les **collections** de l'instance 
REGARDS.  
Une collection statique regroupe un ensemble fixe d'Items, correspondant aux produits du jeu de données ou de la 
collection REGARDS.

Le endpoint permettant de visualiser les différentes collections statiques est le suivant :
``
api/v1/rs-catalog/stac/collections/static
``

#### Exemple de requête curl

```shell
curl https://regards.cnes.fr/api/v1/rs-catalog/stac/collections/static \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json'
```

### Collections dynamiques

Les **collections STAC dynamiques** sont créées à partir des **métadonnées** des produits de l'instance REGARDS. Plus 
exactement, leur structure est déterminée par la liste des [champs STAC configurés dans le plugin](protocol-stac-dynamic.md).

Les collections dynamiques sont générées à la volée en fonction de la valeur dans les items des champs configurés 
dans le plugin. 
Une notion de niveau de recherche permet d'imbriquer des collections dynamiques dans d'autres.
Cela permet de proposer des mécanismes de recherche adaptés à la logique métier.

**Exemple** : dans ma configuration, je peux configurer un champ **_creationDate_** de niveau 1 et un champ 
**_cloudCover_** de niveau 2. 
Alors, à la racine de mes collections dynamiques, je vais trouver plusieurs collections STAC correspondant à des 
plages temporelles. Cela me permet de retrouver les items en fonction de leur date de création.
A l'intérieur de chacune de ces collections dynamiques par date, je trouverai une autre liste de 
collections dynamiques, cette fois-ci correspondant à des plages de valeurs pour la couverture nuageuse.

#### Exemple de requête curl

```shell
curl https://regards.cnes.fr/api/v1/rs-catalog/stac/collections/dynamic \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json'
```

## Items

Un [**item**](https://github.com/radiantearth/stac-spec/blob/master/item-spec/json-schema/item.json) est l'unité de 
base dans STAC.
Il représente un artefact spatio-temporel unique, généralement associé à un moment donné (timestamp) et à une zone 
géographique spécifique (emprise spatiale).
Dans REGARDS, on peut identifier les items aux différents produits ingérés dans le méta-catalogue (OAIS et GeoJSON).

#### Exemple de requête curl

La requête POST suivante permet de rechercher les items correspondant à certains critères :

```shell
curl -X POST https://regards.cnes.fr/api/v1/rs-catalog/stac/search \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{ "collections": ["mycollection"], "bbox": [160.6,-55.95,-170,-25.89], "limit": 100, "datetime": 
  "2019-01-01T00:00:00Z/2019-01-01T23:59:59Z" }'
```

Il est également possible de faire une recherche avec la méthode GET :

```shell
curl https://regards.cnes.fr/api/v1/rs-catalog/stac/search?bbox=-110,39.5,-105,40.5 \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json'
```

## Assets

Les [**assets**](https://github.com/radiantearth/stac-spec/blob/dev/commons/assets.md) sont les ressources concrètes 
associées à un item ou à une collection. Dans REGARDS, ils sont assimilés aux fichiers associés aux produits OAIS ou 
GeoJSON.

## Liens

Les [liens](https://github.com/radiantearth/stac-spec/blob/dev/commons/links.md) sont des relations entre des items 
et/ou des collections. Par exemple, les collections filles d'une collection sont exposées aux travers de liens de 
type `child`.

## Outils externes

Il existe de nombreux clients permettant d'interagir avec des serveurs implémentant l'API STAC. Citons parmi ceux-ci :

* [STAC Browser](https://radiantearth.github.io/stac-browser)   
  Un navigateur graphique en ligne qui permet de 
  parcourir les collections et items.
* [PyStac Client](https://pystac-client.readthedocs.io/en/latest/quickstart.html)   
  Un client en ligne de commande écrit en Python qui permet de simplifier l'écriture des requêtes vers un serveur STAC.

Tous les clients STAC ont besoin de l'URL du catalogue. Celle-ci peut être obtenue, [une fois le plug-in STAC 
configuré](conf-plugin), dans l'interface administrateur :
* Cliquer sur la section **Accès aux données**
* Dans le panneau **Protocoles de recherche**, cliquer sur l'icône <img
src="/images/user-documentation/regards-icons/admin/list.png" alt="add" height="25" width="25"/> ***List***
* Sur la ligne du protocole STAC, cliquer sur l'icône <img
src="/images/user-documentation/regards-icons/admin/info.png" alt="add" height="25" width="25"/> ***Informations 
d'accès***
* L'URL du catalogue est le premier lien de la liste.