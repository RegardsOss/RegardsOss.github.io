---
id: catalog-toponyms
title: Toponyms server
slug: /user-guide/catalog/toponyms/
---


## Qu'est-ce qu'un toponyme ?

Un toponyme est un nom permettant de qualifier un lieu représenté par une zone géographique. Les toponymes peuvent être de tout type comme des pays, des continents, des régions ou des lacs par exemple.

## Utilisation des toponymes dans REGARDS

Dans le but de faciliter les recherches géographiques sur le catalogue de données, REGARDS met à disposition un serveur de toponymes. Ce serveur de toponymes, déployé au sein du microservice `access-instance`,  fourni par défaut des toponymes pour l'ensemble des pays du monde en se basant sur des données géoréférencées obtenues depuis [arcgis](https://hub.arcgis.com/).
Ce serveur est utilisé par l'interface utilisateur, sur la partie de représentation géographique des données, pour proposer un critère de recherche par zone géographique correspondant aux toponymes du serveur.


## Ajout de nouveaux toponymes 

### Par ligne de commande

Il vous est possible d'ajouter tout type de toponymes dans la base de données associée. Pour ce faire nous préconisons l'utilisation de [gdal](https://gdal.org/) et plus précisément [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) afin de faciliter l'insertion des données géoréférencées de type shapefile ou geojson.

Les toponymes sont stockés dans la base de données associée lors de l'installation de REGARDS au microservice d'instance dans le schema `accessinstance` et dans la table `t_toponyms`.

Voici ci-dessous la commande à utiliser avec ogr2ogr pour pouvoir ajouter des données provenant d'un fichier shapefile.<br/>

```bash
ogr2ogr -f "PostgreSQL" \
-update -append \
-lco FID=id \
-lco SCHEMA=toponyms \
-skipfailures \
-nln accessinstance.t_toponyms \
"PG:host=<b><db_host> user=<db_user> password=<db_password> dbname=<db_name>" \
-lco GEOMETRY_NAME=geom \
-nlt GEOMETRY \
-sql "SELECT <label_field> AS label,  <label_fr_field> AS label_fr,  <owner_field> as copyright,  <unqiue_id_field> AS bid from <shapeFile>"  \
-lco PRECISION=no -nlt PROMOTE_TO_MULTI \
<shapeFile>.shp
```

Vous devez remplacer dans cette commande les informations concernant :
 - l'accès à la base de données 
 - les propriétés à lire dans le fichier shapefile correspondant aux propriétés nécessaires pour la création d'un toponyme
 - le nom du fichier shapefile

Les informations nécessaires pour ajouter des toponymes dans la base de données correspondent aux colonnes de la table `t_toponyms` du schema `accessinstance` de la base de données associée au microservice `acccess-instance` :
 - `bid` : Identifiant unique du toponyme
 - `label` : Nom anglais du toponyme. Il s'agit du label qui sera proposé à l'IHM lors de la recherche
 - `label_fr` : Nom francais du toponyme.
 - `copyright` : Qui est le propriétaire de l'information.
 - `description` : [Optionel] Une description du toponyme.
 - `geom` : La géométrie au format geo de postgis.

Après avoir ajouter un ou plusieurs toponymes en base de données, vous pouvez interroger le serveur aux adresses :
 - Recherche d'un toponyme : `http://<host>/api/v1/access-instance/toponyms/{bid}`
 - Recherche des toponymes correspond à une recherche textuelle sur le nom : `http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>`

### A partir de l'interface utilisateur

:::note 
Les toponymes générés précédemment seront conservés définitivement en base de données. Vous avez également la possibilité d’ajouter des toponymes temporaires directement à partir de l'interface IHM utilisateur.
:::

Avoir configuré une carte (voir [ajouter des cartes à un module search-results](../configuration#ajouter-des-cartes-à-un-module-search-results) pour plus d'information), connectez-vous à l'interface utilisateur et accédez à la vue carte depuis votre catalogue de données comme ci-dessous. 

<div align="center">
  <img src="/images/user-documentation/6-catalog-consultation/catalog/user/catalog-toponyms.png" alt="toponyms" width="800"/> 
</div>

Glissez et déposez des fichiers sur la carte aux formats suivants shapefile ZIP, KML, KMZ et GeoJSON. L'emprise définie dans le toponyme sera automatiquement zoomée et son nom s'affichera au dessus de la carte. Depuis celui-ci, vous aurez la possibilité de fermer l'affichage du toponyme afin de réactiver la vue par défaut. 

Pour consulter de nouveau votre toponyme, glissez et déposez le même fichier.

:::danger
Attention, les fichiers ne doivent contenir qu’une seule feature de type ***POLYGON*** ou ***MULTIPOLYGON***. Les autres types de géométries ne sont pas prises en charge par REGARDS.
:::


:::danger
Attention, si vous n'avez pas consulté le toponyme depuis plus de un mois, il sera automatiquement supprimé.
:::

**Exemples de fichiers téléchargeables :**
- json au format POLYGON
```json
{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -1.8182373046875,
                48.26491251331118
              ],
              [
                -1.8058776855468748,
                48.493857443054395
              ],
              [
                -2.080535888671875,
                48.66738490890204
              ],
              [
                -2.406005859375,
                48.50295743049266
              ],
              [
                -2.415618896484375,
                48.27405352192057
              ],
              [
                -1.8182373046875,
                48.26491251331118
              ]
            ]
          ]
        }
      }
    ]
  }
```  

- json au format MULTIPOLYGON
```json
{
  "type": "FeatureCollection",
  "name": "n_tri_chat2014_iso_ht_01fort_s_086",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [102.0, 2.0],
              [103.0, 2.0],
              [103.0, 3.0],
              [102.0, 3.0],
              [102.0, 2.0]
            ]
          ],
          [
            [
              [100.0, 0.0],
              [101.0, 0.0],
              [101.0, 1.0],
              [100.0, 1.0],
              [100.0, 0.0]
            ],
            [
              [100.2, 0.2],
              [100.8, 0.2],
              [100.8, 0.8],
              [100.2, 0.8],
              [100.2, 0.2]
            ]
          ]
        ]
      }
    }
  ]
}