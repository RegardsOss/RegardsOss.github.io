---
id: catalog-protocols-stac
title: STAC protocol
slug: /user-guide/catalog/protocols/stac
---

*Dans cette page, vous apprendrez à ajouter à REGARDS le protocole de recherche standardisé STAC.*

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> STAC

### Description

Il est possible de configurer un moteur de recherche STAC afin de naviguer sur le catalogue REGARDS en suivant le protocole [SpatioTemporal Asset Catalog (STAC)](https://stacspec.org/).   
REGARDS est conforme aux spécifications suivantes : 
- [STAC spec v1.0.0-beta.2](https://github.com/radiantearth/stac-spec/tree/v1.0.0-beta.2)
- [STAC API spec v1.0.0-beta.1](https://github.com/radiantearth/stac-api-spec/tree/v1.0.0-beta.1)


### Collection STAC

Les collections STAC sont crées depuis deux sources différentes :
 - les collections statiques de REGARDS, depuis les collections et jeux de données
 - les collections dynamiques depuis la liste des propriétés STAC configurés

#### Collection statiques

Dans le standard STAC, les collections sont conçues pour contenir un petit nombre d'éléments, une centaine au maximum.
C'est pour cela que si dans votre cas le catalogue contient beaucoup d'éléments, c'est une bonne idée de les séparer dans plusieurs collections.

Cependant, REGARDS a déjà la notion de collection et de jeux de données, on peut commencer par créer un arbre STAC avec ces éléments, les collections statiques de REGARDS.

Les collections REGARDS peuvent référencer d'autres collections, ce qui permet de créer un arbre de collection. De manière similaire, les jeux de données peuvent référencer des collections. Le moteur de recherche STAC utilise ces tags pour créer un arbre de collections STAC.

A la racine, les collections statiques affichent les liens vers les collections et jeux de données sans aucun parent (qui ne sont pas référencés par une autre collection/jeu de données REGARDS).

L'utilisateur qui accède à une collection STAC qui est contruite à partir d'une collection REGARDS verra:
- si cette collection est référencée par une autre collection/jeu de données: un lien vers cette entité
- si cette collection dispose uniquement d'éléments, un lien vers ces éléments

L'utilisateur qui accède à une collection STAC qui est contruite à partir d'un jeu de données REGARDS verra:
- un lien vers la liste des éléments de ce jeu de données

#### Collection dynamiques

Un administrateur peut choisir de sélectionner certaines propriétés STAC, même la propriété datetime, pour que les différentes valeurs de cette propriété soit sélectionnable dans l'arbre dynamique, ce qui permet à un utilisateur de réaliser un filtrage sur les valeurs de cet attribut.

Chaque niveau doit avoir au moins un sous niveau, mais peut en avoir plus. Par exemple, la propriété datetime peut être utilisée sur différents niveaux pour permettre à l'utilisateur de tout d'abord sélectionner l'année, puis le mois, puis le jour..

Les collections dynamiques sont entièrement configurées dans la configuration de plugin, grâce aux paramètres  ***dynamic collection level*** et ***dynamic collection format*** du moteur de recherche.


### Configuration 

Cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/add.png" alt="add" height="25" width="25"/> ***Add*** de la carte ***Search protocols***.
Vous serez redirigé vers l'écran ***Configure search protocol***, renseignez les paramètres suivants :

- ***Label*** la description de votre protocole qui apparaîtra dans la liste des protocoles
- Sélectionnez ***Use this search protocol for every search on catalog*** pour que ce protocole soit utilisé sur l'ensemble des données du catalogue ou ***Use this search protocol only for search on the selected dataset***, pour restreindre la recherche à un jeu de données en particulier. Dans ce cas, choisissez-le dans la liste déroulante.
- Cliquez sur le bouton ***Choose a search protocol*** et appuyez sur ***opensearch*** puis ***New configuration***, un nouveau bloc de configuration s'affichera.

<div align="center">
  <img src="/images/user-documentation/v1.6/6-catalog-consultation/stac-new-conf.png" alt="protocol create" /> 
</div>

Remplissez ensuite tous les champs relatifs au protocole Opensearch:

- ***Label*** *[Obligatoire]*, le nom du moteur de recherche dans REGARDS. Ce nom sera utilisé comme discriminant dans l'url de recherche avec : http://regards/api/v1/rs-catalog/*label*/dataobjects/search.
- Les paramètres du search engine
  - ***STAC title*** *[Optionnel]*, un titre identifiant votre search engine, par défaut "STAC catalog $PROJECT" avec $PROJECT le nom du projet courrant
  - ***STAC description*** *[Optionnel]*, une brève description du search engine. Elle doit faire 1024 caractères ou moins et ne doit pas contenir de HTML ou autre tag.
  - ***STAC root static collection title*** *[Optionnel, défaut "static"]*, le label utilisé pour la racine des collections statiques
  - ***STAC root dynamic collection title*** *[Optionnel, defaut "dynamic"]*, le label utilisé pour la racine des collections dynamiques
  - ***STAC datetime property***, la configuration de l'attribut datetime, correspondant à l'aspect temporel de la specification STAC.
    - ***Source model property path*** *[Optionnel, defaut creationDate]*, le chemin au sein du produit REGARDS : le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**)
    - ***JSON property path*** *[Optionnel]*, si l'attribut est de type JSON, le chemin dans cet attribut pour accéder à l'attribut servant de date
    - ***STAC dynamic collection level*** *[Optionnel, defaut -1]*, le niveau au sein des collection dynamiques  - cf [Niveau des collections dynamiques](#niveau-dans-larbre-des-collections-dynamiques)
    - ***STAC dynamic collection format*** *[Optionnel]*, le format à utiliser au sein des collection dynamiques - cf [Format des valeurs proposées dans les collections dynamiques](#format-des-valeurs-proposées-dans-les-collections-dynamiques)
  - ***STAC properties***, le mapping entre les attributs du modèle REGARDS et les propriétés STAC - cf [Propriétés STAC](#propriétés-stac)
  - ***STAC dataset properties***, les propriétés des collections pour les datasets sélectionnés, permettant de définir par exemple la licence et l'origine des collections et datasets  - cf [Propriétés des jeux de données](#propriétés-des-jeux-de-données)

### Propriétés STAC

La configuration du moteur de recherche STAC nécessite la configuration des propriétés STAC. Plusieurs propriétés STAC peuvent être ajoutées grâce au bouton Add <img src="/images/user-documentation/v1.6/6-catalog-consultation/add-property.png" alt="add property"/>   

L'administrateur peut spécifier pour chaque paramètre STAC: 
- ***Compute summary*** *[Boolean]*, si coché, un sommaire est calculé pour cette propriété dans les collections. Cette valeur ne peut être cochée que pour les types 'ANGLE', 'LENGTH', 'PERCENTAGE' et 'NUMBER'.
- ***STAC dynamic collection level*** *[Optionnel, defaut -1]*, le niveau au sein des collection dynamiques  - cf [Niveau des collections dynamiques](#niveau-dans-larbre-des-collections-dynamiques)
- ***STAC dynamic collection format*** *[Optionnel]*, le format à utiliser au sein des collection dynamiques - cf [Format des valeurs proposées dans les collections dynamiques](#format-des-valeurs-proposées-dans-les-collections-dynamiques)
- ***Enclosing object name (i.e. namespace) for current property*** *[Optionnel]*, pour définir un objet enfermant la propriété courrante
- ***STAC property name (Expected format : {extension:}name)*** *[Obligatoire]*, le nom de l'attribut STAC exposé, contenant optionnellement l'extension
- ***Name or URL of the STAC extension*** *[Optionnel]*, si la propriété `STAC` n'est pas définie dans le standard, le nom ou lien vers de cette extension
- ***STAC property type*** *[Optionnel, défaut à 'STRING']*, avec une des valeurs suivantes : 'DATETIME', 'URL', 'STRING', 'ANGLE', 'LENGTH', 'PERCENTAGE', 'NUMBER', 'BOOLEAN', 'JSON_OBJECT'
- ***Format for the STAC value***, si une transformation entre la valeur REGARDS et la valeur STAC est nécessaire - cf [Format d'un attribut STAC](#format-dun-attribut-stac). Peut prendre la valeur ``
- ***Source model property path*** *[Obligatoire]*, le chemin au sein du produit REGARDS : le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**)
- ***JSON property path (for a JSON type attribute only)*** *[Optionnel]*, si l'attribut est de type JSON, le chemin dans cet attribut pour accéder à l'attribut servant de date
- ***Format for the source property value*** *[Optionnel]*, si l'attribut est de type `PERCENTAGE`, permet de spécifier si la valeur dans le catalogue REGARDS est en base 100 (utiliser `HUNDRED`, ce qui est la valeur par défaut) ou en base 1 (utiliser `ONE`)

#### STAC links property

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

- ***Source model property path*** *[Obligatoire]*, le chemin au sein du produit REGARDS : le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**)
- ***JSON property path (for a JSON type attribute only)*** *[Optionnel]*, si l'attribut est de type JSON, le chemin dans cet attribut pour accéder à l'attribut servant de date
- ***Format for the source property value*** - Laissez cette propriété vide -

Exemple de valeur correcte au sein d'un produit REGARDS :
```json
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

Cette configuration permet d'associer des URLs téléchargeables ou streamables à un produit STAC (cf [Asset Object](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#asset-object))
Si aucune configuration n'est précisée par l'administrateur, alors notre moteur de recherche essaiera de lire une propriété `properties.assets` pour l'inclure dans les produits STAC.
REGARDS ajoute également tous les fichiers associés au produit sous le format d'Asset Object STAC.

La valeur de la propriété fournie au moteur de recherche STAC, par défaut `properties.assets`, doit respecter le format suivant :

| Field Name  | Type      | Description |
| ----------- | --------- | ----------- |
| assets      | Object | An object that maps a key -> an AssetObject (see here) |
| assets.*someAssetKey*.href        | string    | **REQUIRED.** URI to the asset object. Relative and absolute URI are both allowed. |
| assets.*someAssetKey*.title       | string    | The displayed title for clients and users. |
| assets.*someAssetKey*.description | string    | A description of the Asset providing additional details, such as how it was processed or created. [CommonMark 0.29](http://commonmark.org/) syntax MAY be used for rich text representation. |
| assets.*someAssetKey*.type        | string    | [Media type](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#media-types) of the asset. See the [common media types](https://github.com/radiantearth/stac-spec/blob/master/best-practices.md#common-media-types-in-stac) in the best practice doc for commonly used asset types. |
| assets.*someAssetKey*.roles       | \[string] | The [semantic roles](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md#asset-roles) of the asset, similar to the use of `rel` in links. |

La configuration permet donc de changer de propriété à lire au sein des produits REGARDS  :

- ***Source model property path*** *[Obligatoire]*, le chemin au sein du produit REGARDS : le nom de l'attribut REGARDS précédé du fragment si présent (**fragment.attribut**)
- ***JSON property path (for a JSON type attribute only)*** *[Optionnel]*, si l'attribut est de type JSON, le chemin dans cet attribut pour accéder à l'attribut servant de date
- ***Format for the source property value*** - Laissez cette propriété vide -

Exemple de valeur correcte au sein d'un produit REGARDS :
```json
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


### Propriétés des jeux de données 

La configuration du moteur de recherche STAC nécessite la configuration des propriétés des jeux de données STAC.
- ***Dataset URNs***, la liste des URN de dataset auquelle cette configuration s'applique
- ***License***, le nom de la licence auxquelles les données issues de ce jeu de données appartiennent
- ***Keywords***, une liste de mots clés
- ***Providers***, une liste de providers

Chaque provider est définie par : 
***Provider name***, le nom du fournisseur du jeu de données
***Provider description***, la description du fournisseur du jeu de données
***Provider URL***, l'URL du fournisseur du jeu de données
***Provider Role***, le role du fournisseur du jeu de données. Valeur acceptées: 'LICENSOR', 'PRODUCER', 'PROCESSOR', 'HOST'.
### Niveau dans l'arbre des collections dynamiques

Valeur par défaut : -1

<div align="center">
  <img src="/images/user-documentation/v1.6/6-catalog-consultation/level-positive.png" alt="level positive" height="300px"/>   
</div>
Cette valeur définie le niveau au sein de l'arbre de la propriété auquelle elle est rattachée. 
Si cette valeur est positive, la valeur est utilisée pour afficher l'attribut au niveau spécifié.  

<div align="center">
  <img src="/images/user-documentation/v1.6/6-catalog-consultation/level-negative.png" alt="level negative" />  
</div>
Si le champs est vide ou a une valeur négative, le champs est ignoré.

:::info
Chaque propriété STAC devraient être à leur propre niveau dans l'arbre des collections dynamiques. Si plusieurs propriétés sont au même niveau, l'ordre des collections dynamiques n'est pas garantie.
:::


### Format des valeurs proposées dans les collections dynamiques

<div align="center">
  <img src="/images/user-documentation/v1.6/6-catalog-consultation/format-month.png" alt="Format month" />  
</div>
Cet attribut permet de spécifier le format d'une collection dynamique. Pour un même attribut, il est possible d'avoir des critères plus ou moins précis pour restreindre tout autant les collections et données liées suivant la valeur qu'il sera donné au paramètre Format.

Les formats sont :
- pour les dates : `YEAR` | `MONTH` | `DAY` | `HOUR` | `MINUTE`, pour les type d'attribut `DATETIME`
- pour les nombres : `MIN;INTERVAL;MAX`, pour les types `NUMBER`, ou tout autre type basé sur des nombres (ANGLE, LENGTH, PERCENTAGE). Par exemple, `5;10;95`
- pour préfixer les chaines de caractères de type `STRING` : `PREFIX(X,Y)` avec `X` un nombre number and `Y` est `A`, `9` ou `A9`. Par exemple, `PREFIX(3,A9))`
- et les autres types STAC, ils seront traités comme si leur type de valeur étaient "EXACT". 

#### Type EXACT

Ce type signifie que l'utilisateur peut sous catégoriser sur la valeur exacte de la propriété des documents applicables. Si votre attribut est satellite et qu'il n'a que deux valeurs possibles, SPOT5 et Sentinel-2, alors cette propriété dynamiques de type EXACT donnera lieu à deux sous niveaux :

- `satellite=SPOT5`
- `satellite=Sentinel-2`


:::danger Attention aux performances
Les administrateurs doivent garder en tête que, du au manque de pagination dans le standart des collections STAC, l'utilisation de collection dynamique sur un attribut de type "EXACT" doit être utilisé uniquement à des niveaux où ce terme n'a plus beaucoup de valeurs possibles, quelques dizaines au maximum.
:::

#### Type Datetime

Le format d'un attribut datetime peut avoir une des valeurs suivantes :
- `YEAR`
- `MONTH`
- `DAY` - valeur par défaut
- `HOUR`
- `MINUTE`

Par example, si l'administrateur configure la propriété datetime à `HOUR`, alors il y aura les 4 sous-niveaux suivants:
- Un premier niveau sur l'année, permettant de choisir une année parmis celles disponibles (`datetime=2020`, `datetime=2021`...)
- Un second niveau sur le mois, parmi ceux disponibles (`datetime=2021-01`, `datetime=2021-02`..., `datetime=2021-12`)
- Un troisième niveau sur les jours, parmi tous les jours du mois (`datetime=2021-02-01`, `datetime=2021-02-02`... `datetime=2021-02-28`)
- Un dernier niveau sur les heures, parmi toutes les heures de ce jour (toutes les valeurs sont proposées) (`datetime=2021-02-07T00`...`datetime=2021-02-07T23`)

#### Type Number

Le format d'un type nombre peut être configuré avec un `MIN;INTERVAL;MAX`, séparé par des point-virgules.

Cela crée un niveau de collection dynamique avec :
- une collection pour toutes les valeurs en dessous du minimum
- une collection par intervale, commençant à la valeur minimale de cet ensemble jusqu'à la limite valeur minimale + intervale, et ce jusqu'au maximum
- une collection pour toutes les valeurs au dessus du maximum

Par exemple, pour l'attribut `eo:cloud_coverage`, l'administrateur pourrait configurer le format `5;10;95`.

Cette configuration crée donc les collections suivantes : 
- `eo:cloud_coverage < 5`
- `5 < eo:cloud_coverage < 15`
- `15 < eo:cloud_coverage < 25`
- ...
- `85 < eo:cloud_coverage < 95`
- `eo:cloud_coverage > 95`


:::danger Attention aux performances
Les administrateurs doit apporter une configuration qui ne génère pas trop d'intervale, quelques dizaines au maximum.
:::

#### Type String

Les propriétés de type String peuvent être formaté via un prefixe de lettre / nombre.

Le format `PREFIX(X,Y)` est définie par :
- `X` la taille du prefix en nombre de caractère
- `Y` `[A|9|A9]`le type de caractère à considérer. 
  - `[A]`, pour uniquement les caractères alphabétiques (de A à Z)
  - `[9]`, pour uniquement les caractères numériques (0 à 9)
  - `[A9]`, pour les caractères alphabétiques et numériques

Par exemple, l'administrateur peut configurer sur l'attribut country le format `PREFIX(2,A)`.
Cela crée deux sous niveaux de collections dynamiques.
Au premier niveau, on retrouve la première lettre du nom du pays :
- `country=A...`
- `country=B...`
- ...
- `country=Z...`

Au second niveau, on retrouve la seconde lettre du nom du pays:
- `country=FA...`
- `country=FB...`
- ...
- `country=FZ...`

### Format d'un attribut STAC

Le plugin STAC apporte un mécanisme pour convertir des valeurs à l'aller et au retour entre le catalogue STAC et le format de stocké par REGARDS. En effet, le standart STAC définie pour chaque attribut l'ensemble des valeurs qu'il peut prendre. 
Par exemple, si l'attribut cloud coverage est stocké dans REGARDS de 0 à 1 ("base 1"), STAC s'attend à avoir cette valeur de 0 à 100 ("base 100").

Lorsque la valeur doit être affichée à l'utilisateur, cette valeur doit être multipliée par 100.
Lorsque l'utilisateur envoie une requête sur cet attribut, la valeur sera exprimé en "base 100", une division par 100 est donc nécessaire.

Pour gérer ces transformations, nous avons mis en place pour les attributs de type `PERCENTAGE` la possibilité de spécifier dans le format de l'attribut STAC une des valeurs suivantes :
- `HUNDRED`: le pourcentage est representé par des nombres entre 0 et 100
- `ONE`: le pourcentage est représenté par un nombre flotant entre 0 et 1

La valeur par défaut est `HUNDRED`.
