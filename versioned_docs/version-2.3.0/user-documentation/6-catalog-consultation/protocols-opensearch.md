---
id: catalog-protocols-opensearch
title: OpenSearch protocol
slug: /user-guide/catalog/protocols/opensearch
---

*Dans cette page, vous apprendrez à ajouter à REGARDS le protocole de recherche standardisé OpenSearch.*

## OpenSearch

### Description

Il est possible d'intérroger le catalogue REGARDS grâce au protocol [OpenSearch](https://github.com/dewitt/opensearch). 

### Configuration 

Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/> ***Add*** de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé sur l'ensemble des données du catalogue ou ***Use this search protocol only for search on the selected dataset***, pour restreindre la recherche à un jeu de données en particulier. Dans ce cas, choisissez-le dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***opensearch*** puis ***New configuration***, un nouveau bloc de configuration s'affichera.

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/protocol-create.png" alt="protocol create" width="800"/> 
</div>

Remplissez ensuite tous les champs relatifs au protocole OpenSearch:

:::info
Pour plus d'informations sur le protocole ***OpenSearch***, lisez la description suivante sur [github](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md).
:::

- ***Label*** *[Obligatoire]*, le nom de protocole dans REGARDS. Ce nom sera utilisé comme discriminant dans l'url de recherche avec : http://regards/api/v1/rs-catalog/label/dataobjects/search.

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

- ***Open search time extension*** *[Optionnel]*, rend le protocole compatible à l'extension standard OpenSearch *time*. En cochant cette case, vous devrez renseigner la façon de récupérer les paramètres _start_ et _end_ dans le tableau ***Parameters configuration***. N'hésitez à vous appuyer sur les différents tooltips pour vous aidez.
- ***Open search regards extension*** *[Optionnel]*, tous les attributs autres que ceux standard au protocole OpenSearch sont mappés avec l'extension _regards_
- ***Open search media extension*** *[Optionnel]*, ajoute des liens de référencement à tous les fichiers associés aux données comme les thumbnails, les données brutes, les documents, etc.

:::info
Le protocole est compatible à l'extension geo par défaut depuis le chemin properties.geometry du modèle. Néanmoins vous pouvez changer le chemin d'accès en le paramétrant dans le tableau ***Parameters configuration***
:::

Exemple de configuration de l'extension _time_ dans le tableau ***Parameters configuration*** :

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
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/protocol-info.png" alt="protocol info" width="800"/> 
</div>

:::caution
Pensez à rendre vos jeux de données disponibles depuis l'extérieur en autorisant l'accès aux jeux de données et objets pour le groupe public. Pour plus d'informations, référez-vous à la page [Configure data access rights](../3-data-organization/data-access-rights.md)
:::

### Utilisation

#### Obtention de l'ensemble des champs interrogeables

Une fois votre protocole de recherche OpenSearch configuré, vous pouvez accéder dans un premier temps au fichier
`opensearchdescription.xml` qui permet à tout système de connaître le moyen d'interroger le catalogue REGARDS avec 
l'URL suivante :

```
http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/search/opensearchdescription.xml?token=<token>
```

Cette URL est également accessible depuis le site d'administration de REGARDS :
* se rendre dans la page *Accès aux données*
* dans la carte *Protocoles de recherche*, cliquer sur l'icône *Lister*
* sur la ligne dont le protocole est `opensearch`, cliquer sur l'icône *Informations d'accès*
* cliquer sur le lien *Cliquer ici pour consulter le descripteur du protocole*

Ce fichier contient alors la description au format :

```xml
<OpenSearchDescription xmlns:parameters="http://a9.com/-/spec/opensearch/extensions/parameters/1.0/" xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <Description>description</Description>
  <Contact>regards@c-s.fr</Contact>
  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start_date={start_date}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/atom+xml" rel="results">
    <parameters:Parameter name="q" value="{luceneQuery}" title="Lucene query search. This field allows you to perform 
    searches using Lucene query syntax, providing more flexibility and capabilities than the standard OpenSearch syntax."/>
    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>
  </Url>
  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start_date={start_date}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/geo+json" rel="results">
    <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>
  </Url> 
  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start={time:start}&end={time:end}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/json" rel="results">
    <parameters:Parameter name="q" value="{searchTerms}" title="Free text search"/>
    <parameters:Parameter name="start" value="{time:start}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="end" value="{time:end}" minimum="0" maximum="1" minInclusive="1990-01-01T00:00:00.000Z" maxInclusive="2023-09-05T23:19:31.000Z"/>
    <parameters:Parameter name="geometry" value="{geo:geometry}" title="Defined in Well Known Text standard (WKT) with coordinates in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="box" value="{geo:box}" pattern="^[0-9\.\,\-]*$" title="Defined by 'west, south, east, north' coordinates of longitude, latitude, in decimal degrees (EPSG:4326)"/>
    <parameters:Parameter name="lon" value="{geo:lon}" title="Longitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lat" minInclusive="-180" maxInclusive="180"/>
    <parameters:Parameter name="lat" value="{geo:lat}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="-90" maxInclusive="90"/>
    <parameters:Parameter name="radius" value="{geo:radius}" title="Latitude expressed in decimal degrees (EPSG:4326) - should be used with geo:lon" minInclusive="1"/>
    <parameters:Parameter name="maxRecords" value="{count}" title="Number of results returned per page (default 20, max 1000)" minInclusive="1" maxInclusive="1000"/>
    <parameters:Parameter name="page" value="{startPage}" title="Results page to return" minInclusive="1"/>
  </Url>
  <Query role="example" searchTerms="feature.properties.regards.tstart:{ISO-8601 date}"/>
  <Developer>http://www.c-s.fr CS GROUP Team</Developer>
  <AdultContent>false</AdultContent>
  <Language>en</Language>
  <InputEncoding>UTF-8</InputEncoding>
  <OutputEncoding>UTF-8</OutputEncoding>
</OpenSearchDescription>
```

#### Exemple simple

Une fois ce descripteur obtenu vous pouvez effectuer des requêtes sur le catalogue REGARDS grâce aux URL fournies et en 
utilisant les paramètre de recherche définis.
Voici un exemple de requête et le résultat associé au format json:

```
http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?start_date=2010-01-01T00:00:00.000Z&maxRecords=2&page=0&token=<token>
```

```json
{
  "properties": {
    "totalResults": 400155,
    "startIndex": 0,
    "itemsPerPage": 2,
    "query": {
      "searchFilters": {
        "maxRecords": "2",
        "page": "0",                                                                   
      }
    },
    "description": "description",
    "links": [
      {
        "rel": "self",
        "type": "application/geo+json",
        "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/search?maxRecords=2&page=0&size=2"
      },
      {
        "rel": "next",
        "type": "application/geo+json",
        "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/search?maxRecords=2&page=-1&size=2"
      }
    ],
    "id": "5306f265-3703-4e8f-8e56-e8751bc94318",
    "title": "title"
  },
  "features": [
    {
      "id": "URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1",
      "geometry": null,
      "normalizedGeometry": null,
      "properties": {
        "providerId": "L2_HR_PIXC:6a92ad40-aed9-3108-bd08-4b46f5841004",
        "links": [
          {
            "rel": "alternate",
            "type": "application/geo+json",
            "title": "GeoJson link for URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1",
            "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/URN:FEATURE:DATA:geode:da22cbd2-a0ae-3ec0-831f-1e9870e2a951:V1"
          }
        ],
        "title": "L2_HR_PIXC:6a92ad40-aed9-3108-bd08-4b46f5841004"
      },
      "type": "Feature"
    },
    {
      "id": "URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1",
      "geometry": null,
      "normalizedGeometry": null,
      "properties": {
        "providerId": "L2_HR_RiverTile:1964edb4-403b-36a1-881f-9fd3fc359b8e",
        "links": [
          {
            "rel": "alternate",
            "type": "application/geo+json",
            "title": "GeoJson link for URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1",
            "href": "http://regards.fr/api/v1/rs-catalog/engines/opensearch/dataobjects/URN:FEATURE:DATA:geode:915abcb1-334d-3391-b696-151136dc943b:V1"
          }
        ],
        "title": "L2_HR_RiverTile:1964edb4-403b-36a1-881f-9fd3fc359b8e"
      },
      "type": "Feature"
    }
  ],
  "type": "FeatureCollection"
}
```

#### Exemple avec requête Lucene intégrée

Le paramètre `q` de la requête OpenSearch est interprété par REGARDS comme une 
[requête lucene](../../../../development/appendices/lucene-query). Celle-ci est utile dans le cas où une requête 
OpenSearch ne permet pas d'exprimer certains critères, tels qu'une comparaison numérique ou de date.  
L'exemple suivant illustre une requête permettant d'obtenir tous les produits créés après la date du 15 juillet 2025,
16:35:00 :

```
https://regards.cnes.fr/api/v1/rs-catalog/engines/opensearch/entities/search?q=_creationDate%3A%7B2025-07-15T16%3A35%3A00Z%20TO%20%2A%7D&token=<token> 
```

Le paramètre `q` de l'URL ci-dessus correspond à la version URL-encodée de `_creationDate:{2025-07-15T16:35:00Z TO *}`,
qui est la requête Lucene portant sur le champ `_creationDate` et qui inclut toutes les dates supérieures à 
`2025-07-15T16:35:00Z`.

**NOTE** : Il est aussi possible de substituer le paramètre `token=<token>` pour l'authentification à REGARDS dans 
les exemples ci-dessus par le header `Authorization: Bearer <token>`.