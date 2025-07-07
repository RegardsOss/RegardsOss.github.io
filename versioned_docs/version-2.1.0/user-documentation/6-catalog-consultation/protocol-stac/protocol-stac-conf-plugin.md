---
id: catalog-protocols-stac-conf-plugin
title: Plug-in configuration
slug: /user-guide/catalog/protocols/stac/conf-plugin
---

## Créer un nouveau protocole STAC

Depuis la page **_Catalog access_**, Cliquez sur le bouton 
<img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/> ***Add*** de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé sur l'ensemble des données du catalogue ou ***Use this search protocol only for search on the selected dataset***, pour restreindre la recherche à un jeu de données en particulier. Dans ce cas, choisissez-le dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***stac*** puis ***New configuration***, un
  nouveau bloc de configuration s'affichera.

<div align="center">
  <img src="/images/user-documentation/v1.6/6-catalog-consultation/stac-new-conf.png" alt="protocol create" /> 
</div>

## Configuration du protocole STAC

Remplissez ensuite tous les champs relatifs au protocole STAC:

- **Label** *[Obligatoire]*, le nom du moteur de recherche dans REGARDS. Ce nom sera utilisé comme discriminant
  dans l'URL de recherche avec : http://regards/api/v1/rs-catalog/*label*/dataobjects/search.
- Les paramètres du search engine, qui permettent de traduire les paramètres de recherche STAC vers les requêtes 
  ElasticSearch pour le méta-catalogue de REGARDS.
  - **STAC title** *[Optionnel]*, un titre identifiant votre search engine. C'est le titre qui sera retourné par 
    la page _root_ du catalogue STAC.
  - **STAC description** *[Optionnel]*, une brève description du search engine. Elle doit faire 1024 caractères 
    ou moins et ne doit pas contenir de HTML ou autre tag.
  - **STAC root static collection title** *[Optionnel, défaut "static"]*, le label utilisé pour la racine des 
    collections statiques
  - **STAC root dynamic collection title** *[Optionnel, defaut "dynamic"]*, le label utilisé pour la racine des 
    collections dynamiques
  - **STAC datetime property**, la configuration du champ **datetime**, correspondant à l'aspect temporel de la 
    specification STAC. C'est un champ obligatoire dans tout item STAC. Il représente l'instant ou la période 
    temporelle associée à la donnée décrite.
    - **Source model property path** *[Optionnel, defaut creationDate]*, le chemin au sein des properties du produit 
      REGARDS : le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**)
    - **JSON property path** *[Optionnel]*, si l'attribut du modèle est de type JSON, le chemin dans cet attribut 
      pour accéder à l'attribut servant de date
    - **STAC dynamic collection level** *[Optionnel, defaut -1]*, le niveau au sein des collection dynamiques  - 
      cf [Niveau des collections dynamiques](./protocol-stac-dynamic.md#configuration-du-niveau-dans-larbre-des-collections-dynamiques)
    - **STAC dynamic collection format** *[Optionnel]*, le format à utiliser au sein des collection dynamiques - 
      cf [Format des valeurs proposées dans les collections dynamiques](./protocol-stac-dynamic.md#format-des-valeurs-proposées-dans-les-collections-dynamiques). Dans le cas 
      d'une date, il s'agit d'une de ces valeurs : `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-1.png" alt="protocol create" /> 
</div>
  
#### Exemple pour le champ datetime

Considérons le modèle de données suivant, qui possède un attribut **DATE_ATT** et un autre attribut 
**JSON_ATT** qui lui-même possède un champ **date** :
```xml title="Exemple de modèles de données"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
  <name>MODEL_EXAMPLE</name>
  <description>Test de modèle avec plusieurs dates</description>
  <type>DATA</type>
  <attribute alterable="true" optional="false" indexed="true">
    <label>date_value</label>
    <name>DATE_ATT</name>
    <description>Date</description>
    <type unit="unitless">DATE_ISO8601</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="true">
    <label>json_value</label>
    <name>JSON_ATT</name>
    <description>Json</description>
    <type unit="unitless">JSON</type>
    <restriction>
      <json_schema>{
        "title": "Json type schema",
        "description": "",
        "type": "object",
        "properties": {
        "datefield": {
        "type": "string"
        }
        },
        "required": [
        "datefield"
        ]
        }</json_schema>
      <indexable_field>datefield</indexable_field>
    </restriction>
  </attribute>
</model>
```

Pour faire correspondre l'attribut **DATE_ATT** au champ **datetime** de STAC, il faut configurer le plugin ainsi :

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-datetime-config-1.png" alt="protocol create" /> 
</div>

Pour faire correspondre le champ **datefield** de l'attribut **JSON_ATT** au champ **datetime** de STAC, il faut 
configurer le plugin ainsi :

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-datetime-config-2.png" alt="protocol create" /> 
</div>

### STAC links property

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-links.png" alt="protocol create" /> 
</div>

Cette configuration permet d'enrichir les relations (cf [Link Object
](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#link-object)) exposées au niveau du produit STAC, ce qui permet de lier un produit envers d'autres entités.
Si aucune configuration n'est précisée par l'administrateur, alors notre moteur de recherche essaiera de lire une propriété `properties.links` pour l'inclure dans les produits STAC.

La valeur de la propriété fournie au moteur de recherche STAC, par défaut `properties.links`, doit respecter le format suivant :

| Field Name | Type   | Description |
| ---------- | ------ | ----------- |
| links      | Array[Object] | A list of Link, which is defined here under |
| links[].href       | string | **REQUIRED.** The actual link in the format of an URL. Relative and absolute links are both allowed. |
| links[].rel        | string | **REQUIRED.** Relationship between the current document and the linked document. See chapter "Relation types" for more information. |
| links[].type       | string | [Media type](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#media-types) of the referenced entity. |
| links[].title      | string | A human readable title to be used in rendered displays of the link. |

La configuration permet donc de changer de propriété à lire au sein des produits REGARDS  :

- **Source model property path** *[Obligatoire]*, le chemin au sein du produit REGARDS : le nom de l'attribut 
  REGARDS précédé du fragment si présent (**fragment.attribut**)
- **JSON property path (for a JSON type attribute only)** *[Optionnel]*, si l'attribut est de type JSON, le chemin 
  dans cet attribut pour accéder au champ servant de date (cf [exemple pour le champ datetime](#exemple-pour-le-champ-datetime))
- **Format for the source property value** - Laissez cette propriété vide -

```json title="Exemple de valeur correcte au sein d'un produit REGARDS"
{
  [...]
  "properties": {
    [...]
    "links": [{
        "href": "https://spdx.org/licenses/Apache-2.0.html",
        "rel": "license",
        "type": "application/html",
        "title": "Apache License 2.0"
    }],
  }
}
```

#### STAC assets property

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-assets.png" alt="protocol create" /> 
</div>

Cette configuration permet d'associer des URLs téléchargeables ou streamables à un produit STAC (cf [Asset Object](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#asset-object))
Si aucune configuration n'est précisée par l'administrateur, alors notre moteur de recherche essaiera de lire une propriété `properties.assets` pour l'inclure dans les produits STAC.
REGARDS ajoute également tous les fichiers associés au produit sous le format d'Asset Object STAC.

La valeur de la propriété fournie au moteur de recherche STAC, par défaut `properties.assets`, doit respecter le format suivant :

| Field Name  | Type      | Description                                                                                                                                                                                                                                                                                                        |
| ----------- | --------- |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| assets      | Object | An object that maps a key -> an AssetObject (see here)                                                                                                                                                                                                                                                             |
| assets.*someAssetKey*.href        | string    | **REQUIRED.** URI to the asset object. Relative and absolute URI are both allowed.                                                                                                                                                                                                                                 |
| assets.*someAssetKey*.title       | string    | The displayed title for clients and users.                                                                                                                                                                                                                                                                         |
| assets.*someAssetKey*.description | string    | A description of the Asset providing additional details, such as how it was processed or created. [CommonMark 0.29](http://commonmark.org/) syntax MAY be used for rich text representation.                                                                                                                       |
| assets.*someAssetKey*.type        | string    | [Media type](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#media-types) of the asset. See the [common media types](https://github.com/radiantearth/stac-spec/blob/master/best-practices.md#common-media-types-in-stac) in the best practice doc for commonly used asset types. |
| assets.*someAssetKey*.roles       | \[string] | The [semantic roles](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#asset-roles) of the asset, similar to the use of `rel` in links.                                                                                                                                                 |

La configuration permet donc de changer de propriété à lire au sein des produits REGARDS  :

- **Source model property path** *[Obligatoire]*, le chemin au sein du produit REGARDS : le nom de l'attribut 
  REGARDS précédé du fragment si présent (**fragment.attribut**)
- **JSON property path (for a JSON type attribute only)** *[Optionnel]*, si l'attribut est de type JSON, le chemin 
  dans cet attribut pour accéder au champ servant de date (cf [exemple pour le champ datetime](#exemple-pour-le-champ-datetime))
- **Format for the source property value** - Laissez cette propriété vide -

```json title="Exemple de valeur correcte au sein d'un produit REGARDS"
{
  [...]
  "properties": {
    [...]
    "assets": {
      "wms_capabilities": {
          "href": "https://cnes.fr/geoserver/SWOT_HR/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities",
          "title": "Get Capabilites",
          "description": "WMS Get Capabilites",
          "type": "application/vnd.ogc.wms_xml",
          "roles": [
            "wms",
            "capabilities"
          ]
      }
    }
  }
}
```

## Champs des items

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-fields.png" alt="protocol create" /> 
</div>

La configuration du moteur de recherche STAC nécessite la configuration des propriétés STAC. Plusieurs propriétés 
STAC peuvent être ajoutées grâce au bouton Add <img src="/images/user-documentation/v1.6/6-catalog-consultation/add-property.png" alt="add property"/>

L'administrateur peut spécifier pour chaque paramètre STAC:
- ***Compute summary*** *[Boolean]*  
  Si coché, un sommaire est calculé pour cette propriété dans les collections. Il sera disponible dans la section 
  `summaries` des collections STAC.  
  Cette valeur ne peut être cochée que pour les types `ANGLE`, `LENGTH`, `PERCENTAGE` et `NUMBER`.  
  *Note* : cette option est ignorée si l'option globale
  [Use collection configuration](collection#activation-de-la-personnalisation-des-collections) est activée. Dans ce 
  cas, le champ `summaries` des collections est défini selon la
  [configuration du plugin **stack-collection-search**](collection).
- ***STAC dynamic collection level*** *[Optionnel, defaut -1]*  
  Le niveau au sein des collection dynamiques - cf
  [Niveau des collections dynamiques](dynamic#configuration-du-niveau-dans-larbre-des-collections-dynamiques).
- ***STAC dynamic collection format*** *[Optionnel]*  
  Le format à utiliser au sein des collection dynamiques - cf 
  [Format des valeurs proposées dans les collections dynamiques](dynamic#format-des-valeurs-proposées-dans-les-collections-dynamiques).
- ***Enclosing object name (i.e. namespace) for current property*** *[Optionnel]*  
  Le nom d'un objet enfermant le champ STAC. Si plusieurs champs STAC utilisent le même "enclosing object name", ils
  seront regroupés dans le même objet, comme illustré dans cet [exemple](#exemple-dun-enclosing-object).
- ***STAC property name (Expected format : `{extension:}name`)*** *[Obligatoire]*  
  Le nom du champ STAC, contenant optionnellement une extension.
- ***Name or URL of the STAC extension*** *[Optionnel]*  
  Si le champ n'est pas définie dans le standard STAC, le nom ou lien vers cette extension.
- ***STAC property type*** *[Optionnel, défaut à 'STRING']*  
  Le type de champ parmi l'une des valeurs suivantes : `DATETIME`, `URL`, `STRING`, `ANGLE`, `LENGTH`, `PERCENTAGE`,
  `NUMBER`, `BOOLEAN`, `JSON_OBJECT`.
- ***Format for the STAC value***  
  Si le champ STAC est un nombre représentant un pourcentage, permet de spécifier si la valeur du champ STAC est en
  base 100 (utiliser `HUNDRED`, ce qui est la valeur par défaut) ou en base 1 (utiliser `ONE`).
  Se reporter à la section [Format d'un attribut STAC](#format-dun-champ-stac) pour plus d'informations.
- ***Source model property path*** *[Obligatoire]*  
  Le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**).
- ***JSON property path (for a JSON type attribute only)*** *[Optionnel]*  
  Si l'attribut REGARDS est de type JSON, le chemin à l'intérieur de cet objet peut être précisé pour extraire une
  valeur particulière (cf [exemple pour le champ datetime](#exemple-pour-le-champ-datetime)).
- ***Format for the source property value*** *[Optionnel]*  
  Si l'attribut est de type `PERCENTAGE`, permet de spécifier si la valeur dans le catalogue REGARDS est en base 100
  (utiliser `HUNDRED`, ce qui est la valeur par défaut) ou en base 1 (utiliser `ONE`). Se reporter à la
  section [Format d'un attribut STAC](#format-dun-champ-stac) pour plus d'informations.

#### Exemple d'un "enclosing object"

Considérons la configuration suivante, avec la définition de deux champs STAC comme suit :

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-enclosing-object-1.png" alt="protocol 
create" /> 
&nbsp;
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-enclosing-object-2.png" alt="protocol 
create" />
</div>

Alors, les deux champs ***regards:instrument*** et ***regards:title*** seront regroupés au sein d'un même objet 
dans les métadonnées de l'item STAC :

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-enclosing-object-3.png" alt="protocol 
create" />
</div>



## Champs des collections statiques

**Note** : cette section s'applique uniquement aux collections statiques et à condition que la case à cocher **Use
collection configuration** ne soit pas cochée. Si elle est cochée, les licence, mots-clé, et fournisseurs sont
définis par la [configuration du plugin **stack-collection-search**](collection).

Certaines informations telles que la licence, les mots-clé et les fournisseurs doivent être fournies pour les 
collections STAC. Vous pouvez en outre retourner différentes valeurs en fonction du jeu de données REGARDS utilisé comme 
source de la collection STAC.

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-datasets.png" alt="protocol 
create" />
</div>

Vous pouvez définir plusieurs configurations dans cette section, de façon à retourner des valeurs différentes selon 
les jeux de données REGARDS utilisés comme source de la collection. Pour chaque configuration, les champs sont les 
suivants :

- **Dataset URNs**  
  La liste des URN de jeux de données à auxquels cette configuration s'applique. Pour appliquer la configuration à tous 
  les URN, remplir avec **"*"**. Dans ce dernier cas, veiller à placer cette configuration en dernier.
- **License**  
  Le nom de la licence à laquelle les données issues de ce jeu de données appartiennent.
- **Keywords**  
  Une liste de mots clés.
- **Providers**  
  Une liste de fournisseurs.

Chaque fournisseur est défini par :
- **Provider name** : le nom du fournisseur du jeu de données
- **Provider description** : la description du fournisseur du jeu de données
- **Provider URL** : l'URL du fournisseur du jeu de données
- **Provider Role** : le role du fournisseur du jeu de données. Valeur acceptées: `LICENSOR`, `PRODUCER`, 
  `PROCESSOR`, `HOST`.


## Format d'un champ STAC

Le plugin STAC apporte un mécanisme pour convertir des valeurs à l'aller et au retour entre le catalogue STAC et le 
format stocké par REGARDS. En effet, le standard STAC définit pour chaque attribut l'ensemble des valeurs qu'il 
peut prendre. Par exemple, si l'attribut cloud coverage est stocké dans REGARDS de 0 à 1 ("base 1"), STAC s'attend à 
avoir cette valeur de 0 à 100 ("base 100").

Lorsque la valeur doit être affichée à l'utilisateur, cette valeur doit être multipliée par 100.
Lorsque l'utilisateur envoie une requête sur cet attribut, la valeur sera exprimé en "base 100", une division par 100 est donc nécessaire.

Pour gérer ces transformations, nous avons mis en place pour les attributs de type `PERCENTAGE` la possibilité de spécifier dans le format de l'attribut STAC une des valeurs suivantes :
- `HUNDRED`: le pourcentage est representé par des nombres entre 0 et 100
- `ONE`: le pourcentage est représenté par un nombre flotant entre 0 et 1

La valeur par défaut est `HUNDRED`.


## Autres paramètres de configuration

<div align="center">
  <img src="/images/user-documentation/v2.2/6-catalog-consultation/stac-conf-others.png" />
</div>

* **Enable human-readable IDs** : si ce paramètre est coché, alors les identifiants des différentes entités STAC 
  n'apparaîtront pas sous la forme d'**URN** mais sous la forme **providerId@URN**, ce qui améliore leur lisibilité.
* **Disable authentication parameter** : si ce paramètre est coché, alors les URL présentes dans la partie **Link** 
  des différentes entités STAC ne contiendront pas le token d'authentification.
* **Use collection configuration** : ce paramètre doit être coché si l'on désire utiliser le [plugin **stac-collection-search**](collection) 

## Exemple de configruation pour le plugin STAC

En considérant le modèle de données suivant :

```xml title="Exemple de modèles de données"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<model>
  <name>EXAMPLE_DATA_MODEL</name>
  <description>example data model</description>
  <type>DATA</type>
  <attribute alterable="true" optional="false">
    <label>productIdentifier</label>
    <name>productIdentifier</name>
    <type unit="unitless">STRING</type>
  </attribute>
  <attribute alterable="true" optional="true">
    <label>instrument</label>
    <name>instrument</name>
    <type unit="unitless">STRING</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="true">
    <label>cloudCover</label>
    <name>cloudCover</name>
    <type unit="unitless">INTEGER</type>
  </attribute>
  <attribute alterable="true" optional="true" indexed="true">
    <label>dhusIngestDate</label>
    <name>dhusIngestDate</name>
    <type unit="unitless">DATE_ISO8601</type>
  </attribute>
  <attribute alterable="true" optional="true">
    <label>orbitNumber</label>
    <name>orbitNumber</name>
    <type unit="unitless">INTEGER</type>
  </attribute>
</model>
```

Un exemple de configuration pour le plugin STAC (sans utiliser le plugin stac-collection search) serait :

```json title="Exemple de configuration pour le plugin STAC"
        {
          "key": "fr.cnes.regards.modules.search.domain.plugin.SearchEngineConfiguration",
          "value": {
            "label": "STAC-config",
            "configuration": {
              "pluginId": "stac",
              "label": "STAC",
              "version": "1.0.0",
              "priorityOrder": 1,
              "active": true,
              "parameters": [
                {
                  "name": "stac-api-datetime-property",
                  "type": "POJO",
                  "value": {
                    "sourcePropertyPath": "dhusIngestDate",
                    "sourceJsonPropertyPath": "dhusIngestDate",
                    "stacDynamicCollectionLevel": 1,
                    "stacDynamicCollectionFormat": "MONTH"
                  },
                  "dynamic": false
                },
                {
                  "name": "stac-api-description",
                  "type": "STRING",
                  "value": "stac-api",
                  "dynamic": false
                },
                {
                  "name": "stac-api-root-dynamic-collection-title",
                  "type": "STRING",
                  "value": "dynamic",
                  "dynamic": false
                },
                {
                  "name": "stac-collection-dataset-properties",
                  "type": "COLLECTION",
                  "value": [
                    {
                      "license": "this is a licence",
                      "keywords": [
                        "keyword1"
                      ],
                      "providers": [
                        {
                          "providerUrl": "XXXX",
                          "providerName": "XXX",
                          "providerRoles": [
                            "PRODUCER"
                          ],
                          "providerDescription": "XXX"
                        }
                      ],
                      "datasetUrns": [
                        "*"
                      ]
                    }
                  ],
                  "dynamic": false
                },
                {
                  "name": "stac-api-links-property",
                  "type": "POJO",
                  "value": {},
                  "dynamic": false
                },
                {
                  "name": "eodag-properties",
                  "type": "POJO",
                  "value": {},
                  "dynamic": false
                },
                {
                  "name": "stac-api-assets-property",
                  "type": "POJO",
                  "value": {},
                  "dynamic": false
                },
                {
                  "name": "stac-api-title",
                  "type": "STRING",
                  "value": "titre",
                  "dynamic": false
                },
                {
                  "name": "stac-properties",
                  "type": "COLLECTION",
                  "value": [
                    {
                      "stacPropertyName": "eo:cloud_cover",
                      "stacPropertyType": "PERCENTAGE",
                      "sourcePropertyPath": "properties.cloudCover",
                      "stacComputeSummary": true,
                      "stacPropertyFormat": "HUNDRED",                     
                      "stacPropertyExtension": "eo",
                      "stacPropertyNamespace": "cloudCover",
                      "stacDynamicCollectionLevel": 2,
                      "stacDynamicCollectionFormat": "5;10;95"
                    },
                    {
                      "stacPropertyName": "regards:instrument",
                      "stacPropertyType": "STRING",
                      "sourcePropertyPath": "instrument",
                      "stacComputeSummary": false,
                      "stacPropertyExtension": "regards",
                      "stacPropertyNamespace": "sat",
                      "stacDynamicCollectionLevel": 3,
                      "stacDynamicCollectionFormat": "EXACT"
                    },
                    {
                      "stacPropertyName": "regards:orbit",
                      "stacPropertyType": "NUMBER",
                      "sourcePropertyPath": "orbitNumber",
                      "stacComputeSummary": true,
                      "stacPropertyExtension": "regards",
                      "stacPropertyNamespace": "orbitNumber",
                      "sourceJsonPropertyPath": ""
                    }
                  ],
                  "dynamic": false
                },
                {
                  "name": "stac-api-root-static-collection-title",
                  "type": "STRING",
                  "value": "static1",
                  "dynamic": false
                },
                {
                  "name": "histogram-property-path",
                  "type": "STRING",
                  "dynamic": false
                },
                {
                  "name": "use-collection-configuration",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                },
                {
                  "name": "disable-auth-param",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                }
                {
                  "name": "enable-human-readable-ids",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                },
              ]
            }
          }
        }
```

