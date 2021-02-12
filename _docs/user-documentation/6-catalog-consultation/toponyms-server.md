---
layout: classic-docs
title: Toponyms server
short-title: Toponyms
categories:
  - user-documentation
---

## Qu'est-ce qu'un toponyme ?

Un toponyme est un nom permettant de qualifier un lieu représenté par une zone géographique. Les toponymes peuvent être de tout types comme des pays, des continents, des régions ou des lacs par exemple.

## Utilisation des toponymes dans REGARDS

Dans le but de faciliter les recherches géographiques sur le catalogue de données, REGARDS met à disposition un serveur de toponymes. Ce serveur de toponymes, déployé au sein du microservice `access-instance`  fourni par défaut des toponymes pour l'enssemble des pays du monde en se basant sur des données géoréférencées obtenues depuis [arcgis](https://hub.arcgis.com/).
Ce serveur est utilisé par l'interface utilisateur, sur la partie de représentation géographique des données, pour proposer un critère de recherche par zone géographique correspondant aux toponymes du serveur.

## Ajout de nouveaux toponymes

Il vous est possible d'ajouter tout types de toponymes dans la base de données associée. Pour ce faire nous préconisons l'utilisation de [gdal](https://gdal.org/) et plus précisément [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) afin de faciliter l'insertion des données géoréférencées de type shapefile ou geojson.

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

Après avoir ajouter un ou plusieurs toponymes en base de données, vous pouvez intéroger le serveur aux adresses :
 - Recherche d'un toponyme : `http://<host>/api/v1/access-instance/toponyms/{bid}`
 - Recherche des toponymes correspond a une recherche textuelle sur le nom : `http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>`
