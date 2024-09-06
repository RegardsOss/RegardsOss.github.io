---
title: Plugins
sidebar_label: Available plugins
slug: /development/services/catalog/plugins/listing
sidebar_position: 1
---

There are two extension points in the rs-catalog service for using plugins :

- Search engines
- Catalog services

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Search engines


All the following plugins implements
the [ISearchEngine interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/search/search-domain/src/main/java/fr/cnes/regards/modules/search/domain/plugin/ISearchEngine.java)


| Plugin image                                      | Plugin name | Description                                           | 
|---------------------------------------------------|-------------|-------------------------------------------------------|
| **Already** provided <br/>inside the microservice | legacy      | Default REGARDS search engine based on lucene queries | 
| **Already** provided <br/>inside the microservice | opensearch  | OpenSearch engine                                     |
| rs-stac-plugin                                    | stac        | STAC engine                                           |

## Catalog services

All the following plugins implements
the [IEntitiesServicePlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IEntitiesServicePlugin.java)
and/or [ISingleEntityServicePlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/ISingleEntityServicePlugin.java)

| Plugin image                 | Plugin name     | Description                                                                                                                   | 
|------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| **rs-download-plugin**       | DownloadPlugin  | Plugin that lets you download files of products that are the result of a search. The files are downloaded in a zip archive.   |
| **download-metalink-plugin** | MetaLinkPlugin  | Plugin that lets you download a metalink file containing donwload link for files of products that are the result of a search. |
| **rs-export-csv-plugin**     | ExportCsvPlugin | Plugin that lets you download a csv file containing metadata of products that are the result of a search.                    |
