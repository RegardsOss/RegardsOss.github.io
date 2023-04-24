---
id: catalog-protocols-opensearch
title: OpenSearch protocol
slug: /user-guide/catalog/protocols/opensearch
---

*Dans cette page, vous apprendrez à ajouter à REGARDS le protocole de recherche standardisé OpenSearch.*

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Opensearch

### Description

Il est possible d'intérroger le catalogue REGARDS grâce au protocol [Opensearch](https://github.com/dewitt/opensearch). 

### Configuration 

Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/> ***Add*** de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé sur l'ensemble des données du catalogue ou ***Use this search protocol only for search on the selected dataset***, pour restreindre la recherche à un jeu de données en particulier. Dans ce cas, choisissez-le dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***opensearch*** puis ***New configuration***, un nouveau bloc de configuration s'affichera.

<div align="center">
  <img src="/images/user-documentation/v1.4/6-catalog-consultation/protocols/protocol-create.png" alt="protocol create" width="800"/> 
</div>

Remplissez ensuite tous les champs relatifs au protocole Opensearch:

:::info
Pour plus d'informations sur le protocole ***Opensearch***, lisez la description suivante sur [github](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md).
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

- ***Open search time extension*** *[Optionnel]*, rend le protocole compatible à l'extension standard Opensearch *time*. En cochant cette case, vous devrez renseigner la façon de récupérer les paramètres _start_ et _end_ dans le tableau ***Parameters configuration***. N'hésitez à vous appuyer sur les différents tooltips pour vous aidez.
- ***Open search regards extension*** *[Optionnel]*, tous les attributs autres que ceux standard au protocole Opensearch sont mappés avec l'extension _regards_
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
Pensez à rendre vos jeux de données disponibles depuis l'extérieur en autorisant l'accès aux jeux de données et objets pour le groupe public. Pour plus d'informations, référez-vous à la page [Configure data access rights](../../data-organization/data-access-rights/)
:::

### Utilisation

Une fois votre protocol de recherche opensearch configuré, vous pouvez accéder dans un premier temps au fichier opensearchdescription.xml qui premet à tout système de connaître le moyen d'interroger le catalogue REGARDS avec l'url suivante en remplacant LABEL par le label de votre configuration.

http://regards.fr/api/v1/rs-catalog/engines/LABEL/dataobjects/search/opensearchdescription.xml

Ce fichier contient alors la descirption au format :

```xml
<OpenSearchDescription xmlns:parameters="http://a9.com/-/spec/opensearch/extensions/parameters/1.0/" xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <Description>description</Description>
  <Contact>regards@c-s.fr</Contact>
  <Url template="http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?q={searchTerms}&start_date={start_date}&geometry={geo:geometry}&box={geo:box}&lon={geo:lon}&lat={geo:lat}&radius={geo:radius}&maxRecords={count}&page={startPage}&scope=project" type="application/atom+xml" rel="results">
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

Une fois ce descripteur obtenue vous pouvez requêter le catalague REGARDS grâce aux URL fournies et en utilisant les paramètre de recherche définis.
Voici un exemple de requête et le résultat associé au format json:

http://regards/api/v1/rs-catalog/engines/label/dataobjects/search?start_date=2010-01-01T00:00:00.000Z&maxRecords=2&page=0&scope=project

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

**NOTE** : Vous remarquerez dans toutes les URL de recherche définies dans le fichier descripteur un paramètre : `scope=project`. Ce paramètre doit être obligatoirement fourni pour préciser sur quel projet de l'instance REGARDS la recherche est réalisée.

