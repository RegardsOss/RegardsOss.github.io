---
layout: classic-docs
title: Add data from a standard geojson products
short-title: Database
categories:
  - user-documentation
---

Vous avez la possibilité de référencer des aips au format GeoJSON dans le catalogue de données.
Pour cela, vous devez déjà avoir créé des produits, référez-vous à la section [product manager (OAIS)](/user-documentation/admin/ingest/introduction-ingest) si ce n'est pas déjà fait.

Suivez les étapes ci-dessous pour configurer ce type de source de données :
- Depuis le menu ***Add data*** et la carte ***Crawling***, cliquez sur ***Map data sources to internal models***

<div align="center">
    <img src="/assets/images/user-documentation/admin/crawler/crawler-add-datasource.png" alt="add datasource" width="800"> 
</div>

- Cliquez sur ***Add*** et sélectionnez l'option ***crawling GeoJSON SIPs***

<div align="center">
    <img src="/assets/images/user-documentation/admin/crawler/crawler-add-datasource-aips.png" alt="aips" width="800"> 
</div>

- Sur la page ***AIPs datasource creation***, complétez les champs suivants :
   - ***Name*** représentant le nom de la source de données,
   - ***Refresh rate (in second)*** déterminant la durée entre deux scans de la datasource. Cela peut s'avérer utile lorsque vous ajoutez fréquemment des aips pour les référencer dans le catalogue,
   - ***Data model*** se rapportant au modèle de données correspondant aux aips,
   - ***Sum of AIP files size*** est l'attribut du modèle de données dans lequel la somme des fichiers AIPs sera contenue,
   - la ***Tag list added to all data crawled*** correspondant aux tags qui seront ajoutés à vos données aspirées. Pour rappel, les tags aussi appelés mots-clés sont des informations supplémentaires permettant de regrouper des données par thématique, ils ajoutent une signification aux données. Vous pourrez ainsi retrouver plus facilement les données dans le catalogue à l'aide des fonctions de tri.
   - ***Only crawl data containing these tags*** se rapporte aux données qui seront aspirées. Seules les données possédant ces tags seront aspirées. /!\ Faites attention, si vous ne précisez pas de tags, toutes les données seront aspirées.
   - Précisez ensuite la concordance entre les attributs de REGARDS et ceux du modèle. Il y a deux types d'attributs les statiques, communs à toutes les données de REGARDS et les attributs spécifiques à votre modèle. Pour chacun des attributs, vous devez indiquer le chemin dans le fichier JSON de l'AIP pour récupérer sa valeur.
 Le chemin *properties.descriptiveInformation.label* correspond à l'attribut label attribut à récupérer dans le JSON suivant :
```json
    {
          "properties": {
            "descriptiveInformation": {
               "label": "sample"       
            }
          }
    }
```
- Lorsque vous avez complété tous les champs, appuyez sur ***Save***
- Vérifiez que votre source de données se trouve dans la liste
- Rendez-vous ensuite dans la section ***[Monitor data crawling](/user-documentation/admin/dataprovider/monitor-crawling)*** pour suivre l'aspiration de vos aips.