---
id: catalog-protocols-stac-collection
title: Collection fields
slug: /user-guide/catalog/protocols/stac/collection
---

# Personnalisation des champs de collection

Les collections STAC comportent un certain nombre de champs (`title`, `providers`, `extent`, `summaries`...) qui sont 
automatiquement calculés par REGARDS en fonction des jeux de données d'entrée et de la configuration du [plugin 
STAC](conf-plugin).

Toutefois, si les jeux de données REGARDS en entrée comportent déjà les attributs qui peuvent être 
traduits en champs STAC, il est possible d'activer un plugin complémentaire, nommé *stac-collection-search*, 
permettant de définir ces associations entre attributs REGARDS et champs STAC.

Ce plugin s'applique aux collections statiques uniquement.

## Création d'une nouvelle configuration de plugin

### Pré-requis

* Vous devez être connectés à l'interface d'administration d'un projet REGARDS avec un compte de super-administrateur.
* Il est conseillé d'avoir préalablement [configuré le plug-in STAC](conf-plugin).

Attention, la procédure qui suit définit la configuration du plugin de collection, mais pour être prise en compte,
vous devez également modifier la configuration du plugin principal **stac** comme indiqué dans la section [Activation
de la personnalisation des collections](#activation-de-la-personnalisation-des-collections).

### Procédure

Dans la carte ***Search protocols***, cliquez sur le bouton <img
src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/>. Vous serez redirigé
vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** : la description du protocole qui apparaîtra dans la liste des protocoles
- L'option ***Use this search protocol for every search on catalog*** / ***Use this search protocol only for search
  on the selected dataset*** ne s'applique pas au plugin en cours de configuration, elle peut donc être laissée à sa
  valeur par défaut.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***stac-collection-search*** puis ***New
  configuration***. Le formulaire s'étend avec de nouveaux champs à configurer.

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-collections-conf-new.png" 
alt="Création d'une nouvelle configuration de plugin STAC collection" /> 
</div>

- Renseigner ***Label*** un label pour la configuration. Pour ce plugin, ce label n'est pas utilisé.

### Configuration des champs STAC obligatoires

La partie suivante du formulaire propose l'ensemble des champs STAC requis par les spécifications, et permet de
préciser l'attribut dans le modèle REGARDS utilisé pour fournir la valeur de chacun de ces champs.

Pour chaque champ, il est possible de définir les valeurs suivantes :

* **Source model property path**  
  Le nom d'un attribut du modèle REGARDS, éventuellement précédé du nom d'un fragment.
  Dans le cas où il est laissé vide, une valeur par défaut sera utilisée comme indiqué dans le tableau ci-dessous.
* **JSON property path**  
  Si l'attribut REGARDS est de type JSON, le chemin à l'intérieur de cet objet peut être
  précisé pour extraire une valeur particulière. Ce champ doit être laissé vide si le champ **Source model property
  path** est vide.
* **Format for the source property value**  
  Dans le cas où un traitement particulier doit être appliqué à la valeur
  telle que stockée dans le modèle REGARDS pour la transformer en valeur dans le modèle STAC, ce champ permet de
  préciser cette transformation. Se reporter à la section
  [Format d'un attribut STAC](conf-plugin#format-dun-champ-stac) pour plus d'informations.

Les champs STAC obligatoires personnalisables sont les suivants :

| Intitulé                                 | Champ STAC       | Attribut REGARDS par défaut | Type de l'attribut REGARDS requis                                                                                                       |
|------------------------------------------|------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| STAC collection title                    | `title`          | `properties.title`          | STRING                                                                                                                                  |
| STAC collection description              | `description`    | `label`                     | STRING                                                                                                                                  |
| STAC collection keywords                 | `keywords`       | `properties.keywords`       | STRING ou STRING_ARRAY                                                                                                                  |
| STAC collection license                  | `license`        | `properties.license`        | STRING                                                                                                                                  |
| STAC collection providers                | `providers`      | `properties.providers`      | JSON [Provider](https://github.com/radiantearth/stac-api-spec/blob/main/stac-spec/collection-spec/collection-spec.md#provider-object)[] |
| STAC collection links                    | `links`          | `properties.links`          | JSON [Link](https://github.com/radiantearth/stac-api-spec/blob/main/stac-spec/collection-spec/collection-spec.md#link-object)[]         |
| STAC collection assets                   | `assets`         | `properties.assets`         | JSON [Asset](https://github.com/radiantearth/stac-api-spec/blob/main/stac-spec/collection-spec/collection-spec.md#asset-object)[]       |
| STAC overall temporal extent lower bound | `lower_temporal` | `EPOCH`                     | DATETIME                                                                                                                                |
| STAC overall temporal extent upper bound | `upper_temporal` | `now() + 10 days`           | DATETIME                                                                                                                                |

Pour déterminer les attributs REGARDS disponibles, il faut se reporter aux modèles de jeux de données REGARDS. Les 
valeurs de ces attributs sont définis dans les jeux de données, et sont soit des valeurs fixes (par jeu de données), 
soit des valeurs calculées (moyenne, maximum, comptage...) à partir des produits inclus dans le jeu de données.

### Configuration des champs STAC de résumé

La dernière partie du formulaire permet de définir des champs de résumé (*summary fields*) de collection qui
viennent en complément des champs obligatoires prévus par la spécification STAC.

Pour chaque champ, il est possible de définir les valeurs suivantes :

- ***Enclosing object name (i.e. namespace) for current property*** *[Optionnel]*  
  Le nom d'un objet enfermant le champ STAC. Si plusieurs champs STAC utilisent le même "enclosing object name", ils
  seront regroupés dans le même objet, comme illustré dans cet [exemple](conf-plugin#exemple-dun-enclosing-object).
- ***STAC property name (Expected format : `{extension:}name`)*** *[Obligatoire]*  
  Le nom du champ STAC, contenant optionnellement une extension.
- ***Name or URL of the STAC extension*** *[Optionnel]*  
  Si le champ n'est pas définie dans le standard STAC, le nom ou lien vers cette extension.
- ***STAC property type*** *[Optionnel, défaut à `STRING`]*  
  Le type de champ parmi l'une des valeurs suivantes : `DATETIME`, `URL`, `STRING`, `ANGLE`, `LENGTH`, `PERCENTAGE`,
  `NUMBER`, `BOOLEAN`, `JSON_OBJECT`.
- ***Format for the STAC value***  
  Si le champ STAC est un nombre représentant un pourcentage, permet de spécifier si la valeur du champ STAC est en
  base 100 (utiliser `HUNDRED`, ce qui est la valeur par défaut) ou en base 1 (utiliser `ONE`).
  Se reporter à la section [Format d'un attribut STAC](conf-plugin#format-dun-champ-stac) pour plus d'informations.
- ***Source model property path*** *[Obligatoire]*  
  Le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**).
- ***JSON property path (for a JSON type attribute only)*** *[Optionnel]*  
  Si l'attribut REGARDS est de type JSON, le chemin à l'intérieur de cet objet peut être précisé pour extraire une
  valeur particulière.
- ***Format for the source property value*** *[Optionnel]*  
  Si l'attribut est de type `PERCENTAGE`, permet de spécifier si la valeur dans le catalogue REGARDS est en base 100
  (utiliser `HUNDRED`, ce qui est la valeur par défaut) ou en base 1 (utiliser `ONE`). Se reporter à la
  section [Format d'un attribut STAC](conf-plugin#format-dun-champ-stac) pour plus d'informations.

#### Exemple

En supposant que le modèle REGARDS définit un attribut `total_weight` au sein d'un fragment
`measurements` de type `DOUBLE`, et en définissant une propriété de résumé comme suit :

* *Enclosing object name* : `physics`
* *STAC property name* : `weight`
* *STAC property type* : `NUMBER`
* *Source model property path* : `measurements.total_weight`

Pour un jeu de données dont la valeur de l'attribut `measurements.total_weight` est `751.12`, la collection STAC
correspondante contiendra la section suivante :

```json
{
  "summaries": {
    "physics": {
      "weight": 751.12
    }
  }
}
```

### Exemple de modèle REGARDS

Voici un exemple de modèle de jeux de données qui est adapté pour une conversion en modèle STAC. Il inclut en 
particulier le schéma JSON (conforme à la norme STAC) pour les champs `providers`, `links` et `assets`.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
  <name>STAC_DATASET_MODEL</name>
  <description>STAC-oriented Dataset Model</description>
  <type>DATASET</type>
  <attribute alterable="true" optional="false" indexed="false">
    <label>Name</label>
    <name>name</name>
    <type unit="unitless">STRING</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="false">
    <label>Description</label>
    <name>description</name>
    <type unit="unitless">STRING</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="false">
    <label>License</label>
    <name>license</name>
    <type unit="unitless">STRING</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="false">
    <label>Keywords</label>
    <name>keywords</name>
    <type unit="unitless">STRING_ARRAY</type>
  </attribute>
  <fragment>
    <name>temporal</name>
    <description>Relative to dct:temporal in DT model</description>
    <attribute alterable="true" optional="false" indexed="true">
      <label>Start dateTime</label>
      <name>startDate</name>
      <type unit="unitless">DATE_ISO8601</type>
      <computation>
        <label>MinDateValidationConfModel1</label>
        <min_compute parameterAttributeName="date"/>
      </computation>
    </attribute>
    <attribute alterable="true" optional="false" indexed="true">
      <label>End dateTime</label>
      <name>endDate</name>
      <type unit="unitless">DATE_ISO8601</type>
      <computation>
        <label>MaxDateValidationConfModel1</label>
        <max_compute parameterAttributeName="date"/>
      </computation>
    </attribute>
  </fragment>
  <fragment>
    <name>stac_collection_ref</name>
    <attribute alterable="true" optional="true" indexed="true">
      <label>Assets</label>
      <name>assets</name>
      <type unit="unitless">JSON</type>
      <restriction>
        <json_schema>{
          "$schema": "http://json-schema.org/draft-07/schema#",
          "$id": "https://schemas.stacspec.org/v1.0.0/item-spec/json-schema/item.json#assets",
          "title": "STAC Assets",
          "type": "object",
          "description": "This object represents the metadata for a assets.",
          "allOf": [
            {
              "$ref": "#/definitions/assets"
            }
          ],
          "definitions": {
            "assets": {
              "title": "Asset links",
              "description": "Links to assets",
              "type": "object",
              "additionalProperties": {
                "$ref": "#/definitions/asset"
              }
            },
            "asset": {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "href"
                  ],
                  "properties": {
                    "href": {
                      "title": "Asset reference",
                      "type": "string",
                      "format": "iri-reference",
                      "minLength": 1
                    },
                    "title": {
                      "title": "Asset title",
                      "type": "string"
                    },
                    "description": {
                      "title": "Asset description",
                      "type": "string"
                    },
                    "type": {
                      "title": "Asset type",
                      "type": "string"
                    },
                    "roles": {
                      "title": "Asset roles",
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    }
                  }
                }
              ]
            }
          }
        }</json_schema>
      </restriction>
    </attribute>
    <attribute alterable="true" optional="true" indexed="true">
      <label>Links</label>
      <name>links</name>
      <type unit="unitless">JSON</type>
      <restriction>
        <json_schema>{
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://schemas.stacspec.org/v1.0.0/collection-spec/json-schema/collection.json#links",
      "title": "STAC Collection Links",
      "type": "array",
      "items": {
      "type": "object",
      "required": [
      "rel",
      "href"
      ],
      "properties": {
      "href": {
        "title": "Link reference",
        "type": "string",
        "format": "iri-reference",
        "minLength": 1
      },
      "rel": {
        "title": "Link relation type",
        "type": "string",
        "minLength": 1
      },
      "type": {
        "title": "Link type",
        "type": "string"
      },
      "title": {
        "title": "Link title",
        "type": "string"
      }
      }
    }
    }</json_schema>
      </restriction>
    </attribute>
    <attribute alterable="true" optional="true" indexed="true">
      <label>Providers</label>
      <name>providers</name>
      <type unit="unitless">JSON</type>
      <restriction>
        <json_schema>{
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$id": "https://schemas.stacspec.org/v1.0.0/collection-spec/json-schema/collection.json#providers",
      "title": "STAC Collection Providers",
      "type": "array",
      "items": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
        "title": "Organization name",
        "type": "string"
        },
        "description": {
        "title": "Organization description",
        "type": "string"
        },
        "roles": {
        "title": "Organization roles",
        "type": "array",
        "items": {
          "type": "string",
          "enum": [
          "producer",
          "licensor",
          "processor",
          "host"
          ]
        }
        },
        "url": {
        "title": "Organization homepage",
        "type": "string",
        "format": "iri"
        }
      }
      }
    }</json_schema>
      </restriction>
    </attribute>
  </fragment>
</model>
```

Avec un tel modèle, la configuration du plugin serait la suivante (les champs non mentionnés ci-dessous restent vides
dans la configuration) :

* STAC collection title
  * Source model property path : **name**
* STAC collection description
  * Source model property path : **description**
* STAC collection providers
  * Source model property path : **stac_collection_ref.providers**
* STAC collection links
  * Source model property path : **stac_collection_ref.links**
* STAC collection assets
  * Source model property path : **stac_collection_ref.assets**
* STAC overall temporal extent lower bound
  * Source model property path : **temporal.startDate**
* STAC overall temporal extent upper bound
  * Source model property path : **temporal.endDate**

#### Exemple de jeu de données

Le jeu de données ci-dessous utilise le modèle précédemment défini, et illustre la structure des champs complexes
tels que `providers`, `links` et `assets`. Il est à utiliser en contenu de POST pour l'[API de création de jeux de
données](../../../../development/services/dam/api-guides/rest/api-swagger#tag/dataset-controller/operation/createDataset).

**Note** : il n'est pas possible d'utiliser l'IHM pour créer un tel jeu de données, car celle-ci ne prend pas en
charge les champs JSON dans l'écran de création/édition des jeux de données.

```json
{
  "model": {
    "name": "STAC_DATASET_MODEL"
  },
  "type": "DATASET",
  "plgConfDataSource": {
    "businessId": "956be4c8-fbde-4ba4-bac5-23e3867e53dd"
  },
  "feature": {
    "entityType": "DATASET",
    "providerId": "STAC_Collection",
    "tags": [],
    "label": "STAC Collection",
    "model": "STAC_DATASET_MODEL",
    "properties": {
      "name": "Program1",
      "description": "Description of Program1",
      "license": "(c) CNES 2025",
      "keywords": [
        "regards",
        "doc"
      ],
      "stac_collection_ref": {
        "providers": [
          {
            "name": "Remote Data, Inc",
            "description": "Producers of awesome spatiotemporal assets",
            "roles": [
              "producer",
              "processor"
            ],
            "url": "http://remotedata.io"
          }
        ],
        "links": [
          {
            "rel": "root",
            "href": "./collection.json",
            "type": "application/json",
            "title": "Simple Example Collection"
          },
          {
            "rel": "item",
            "href": "./simple-item.json",
            "type": "application/geo+json",
            "title": "Simple Item"
          }
        ],
        "assets": {
          "video" : {
            "href": "https://regardsoss.github.io/videos/stars.mp4",
            "title": "Video"
          }
        }
      }
    },
    "files": {}
  }
}
```

Si le fichier ci-dessus est nommé `dataset.json`, la commande curl permettant de créer un jeu de données avec la
définition précédente serait :

```shell
curl -X POST https://regards.cnes.fr/api/v1/rs-dam/datasets \
  -d @dataset.json \
  -H 'Authorization: Bearer <token>' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json'
```

## Activation de la personnalisation des collections

### Pré-requis

* Vous devez être connectés à l'interface d'administration d'un projet REGARDS avec un compte de super-administrateur.
* Vous avez préalablement [configuré le plug-in STAC](conf-plugin).
* Vous avez préalablement [configuré le plug-in de collections STAC](#création-dune-nouvelle-configuration-de-plugin).

### Procédure

Dans la rubrique ***Catalog Access***, et dans la carte ***Search protocols***, cliquer sur le bouton <img
src="/images/user-documentation/regards-icons/admin/list.png" alt="add" height="25" width="25"/> ***List***,
puis cliquer sur le bouton <img
src="/images/user-documentation/regards-icons/admin/edit.png" alt="add" height="25" width="25"/> ***Edit*** de la
configuration dont le *Search Protocol* est **stac**.

Dans la dernière section de la configuration, cocher la case **Use collection configuration**, puis cliquer sur le
bouton **Update**.

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-enable-collections.png" alt="enable 
collections" /> 
</div>