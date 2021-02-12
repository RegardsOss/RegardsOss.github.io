---
layout: classic-docs
title: Toponyms server
short-title: Toponyms
categories:
  - user-documentation
---

## Qu'est-ce qu'un toponyme ?

Un toponyme est un nom permettant de qualifier un lieu représenté par une zone géographique. Les toponymes peuvent être de tout types comme des pays, des continents, des regions ou des lacs par exemple.

## Utilisation des toponymes dans REGARDS

Dans le but de faciliter les recherches géographiques sur le catalogue de données, REGARDS met à disposition un serveur de toponymes. Ce serveur de toponymes, déployé au sein du microservice `access-instance` et fourni par défaut des toponymes pour l'enssemble des pays du monde en se basant sur des données géoréférencés obtenus depuis [arcgis](https://hub.arcgis.com/).
Ce serveur est alors utilisé par l'interface utilisateur, sur la partie de représentation géographique, pour proposer un critère de recherche par zone géographique correspondant aux toponymes du serveur.

## Ajout de nouveaux toponymes

Il vous est possible d'ajouter tout types de toponymes dans la base de données associée. Pour ce faire nous préconisons l'utilisation de [gdal](https://gdal.org/) et plus précisément [ogr2ogr](https://gdal.org/programs/ogr2ogr.html) afin de faciliter l'insertion des données géoréférencés de type shapefile ou geojson.

Les toponymes sont stockés dans la base de données associée lors de l'installation de REGARDS au microservice d'instance dans le schema `accessinstance` et dans la table `t_toponyms`.

<code>
ogr2ogr -f "PostgreSQL" \ <br/>
-update -append \<br/>
-lco FID=id \<br/>
-lco SCHEMA=toponyms \<br/>
-skipfailures \<br/>
-nln accessinstance.t_toponyms \<br/>
"PG:host=<b>< db_host ></b> user=<b>< db_user ></b> password=<b>< db_password ></b> dbname=<b>< db_name ></b>" \<br/>
-lco GEOMETRY_NAME=geom \<br/>
-nlt GEOMETRY \<br/>
-sql "SELECT <b>< label_field ></b> AS label,  <b>< label_fr_field ></b> AS label_fr,  <b>< owner_field ></b> as copyright,  <b>< unqiue_id_field ></b> AS bid from <b>< shapeFile ></b>"  \<br/>
-lco PRECISION=no -nlt PROMOTE_TO_MULTI \<br/>
<shapeFile>.shp
</code>

Vous devez remplacer dans cette commandes les informations concernant l'accès à la base de données et les propriétés à lire dans le fichier shapeFile correspondant aux propriétés nécessaires pour la création d'un toponyme.

Les informations nécessaire pour ajouter des toponymes dans la base de données correspondent aux colonnes de la table t_toponyms du schema accessinstance de la base de données associée  au microservice acccess-instance :
 - `bid` : Identifiant unique du toponyme
 - `label` : Nom anglais du toponyme. Il s'agit du label qui sera proposé à l'IHM lors de la recherche
 - `label_fr` : Nom francais du toponyme.
 - `copyright` : Qui est le propriétaire de l'information.
 - `description` : [Optionel] Une description du toponyme.
 - `geom` : La géométrie au format geo de postgis.

Après avoir ajouter un ou plusieurs toponymes en base de données, vous pouvez intéroger le serveur aux adresses :
 - Recherche d'un toponyme : `http://<host>/api/v1/access-instance/toponyms/{bid}`
 - Recherche des toponymes correspond a une recherche textuelle sur le nom : `http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>`


