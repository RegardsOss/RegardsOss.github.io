---
id: backend-catalog-service-plugins
title: Catalog service plugins
sidebar_label: Catalog service
slug: /development/backend/services/catalog/service-plugins/
---

## Overview

:::note
This extension point allows to provide a business processing on catalog meda data. 
:::

Each business service plugin is accessible through a unique microservice endpoint :

```
@POST http://<host>:<port>/api/v1/rs-catalog/services/{servideId}/apply
```

To define on which entities of the catalog the service must be applied you have to provide a json body like :
```json
{
    "entityId": "", // [Optional] Entity identifier to apply plugin service on one uniq entity
    "entitiesId":[], // [Optional] Entities ids to apply plugin service on multiple entities
    "entityType":"", // [Optional] One of [COLLECTION, DATA, DATASET, DOCUMENT] Combined with the search query 'q' parameter. Entities type to apply plugin service on. 
    "q":"", // [Optional] Search query to apply on catalog to define
    "dynamicParameters": { // [Optional]
        // Specific plugin parameters applied at runtime
    }
}
```

Each business service plugin return a stream of typed data in the response header. The implemention section of this page explains how to return typed results like `JSON`, `XML`, `Image` or `Octet-stream`.

## Usages

### Apply service on one entity
 ```json
 {
     "entityId": "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1"
 }
 ```

### Apply service on one multiple entities
 ```json
 {
     "entitiesId": [
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"
     ]
 }
 ```

### Apply service on entities from a search query

You can see the [How to build a query](../api-guides/search-api.md) page. The query is provided in the body like :

 ```json
 {
     "entityType": "DATA",
     "q": "title:'test*' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",
 }
 ```
For a search query application you can also execlude some entites from the search results by setting the entitiesId parameter :
 ```json
 {
     "entityType": "DATA",
     "entitiesId": [
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V1",
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V2",
         "URN:AIP:DATA:project1:44e4f46f-2584-3c8e-a803-d1fb1cfd276e:V3"
     ],
     "q": "title:'test*' AND date:[2019-01-01T00:00:00 TO 2019-02-01T00:00:00]",
 }
 ```

 REGARDS provides many implementation of this extension :
 - [MultiDownloadPlugin](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/MultiDownloadPlugin.java) : Allow to download multiple selected entities in one zip archive.
 - [SampleServicePlugin](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java) : Example implementation


## Interfaces

   - [IService](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IService.java) : Base interface extended by the specific interfaces defined here under.

   To help developpers to make different service application you can also use the specific interfaces :
   - [IEntitiesServicePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/IEntitiesServicePlugin.java) : To create a service applicable to multiple entities selection.
   - [ISingleEntityServicePlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-catalog/catalog-services/catalog-services-domain/src/main/java/fr/cnes/regards/modules/catalog/services/domain/plugins/ISingleEntityServicePlugin.java) : To create a service application only to a single entity selection

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../framework/modules/plugins.md).

You can implements two type of catalog services following the here under exemples :  

```java
@Plugin(description = "Single entity service plugin", id = SingleEntityServicePlugin.PLUGIN_ID, version = "1.0.0",
        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",
        url = "https://github.com/RegardsOss")
@CatalogServicePlugin(applicationModes = { ServiceScope.ONE }, entityTypes = { EntityType.DATA })
public class SingleEntityServicePlugin implements ISingleEntityServicePlugin {

    public static final String PLUGIN_ID = "singleEntityPluginId";

    @Autowired
    private IServiceHelper serviceHelper;

    @Autowired
    private IAuthenticationResolver authResolver;

    @Override
    public ResponseEntity<StreamingResponseBody> applyOnEntity(String entityId, HttpServletResponse response) {
        // Retrieve entity to apply service on
        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entityId), 0, 1);
        // ....
        // TODO ....
        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);
    }

}
```


```java
@Plugin(description = "Multiple entities service plugin", id = MultiEntitiesServicePlugin.PLUGIN_ID, version = "1.0.0",
        author = "CS-SI", contact = "regards@c-s.fr", licence = "GPLv3.0", owner = "CNES",
        url = "https://github.com/RegardsOss")
@CatalogServicePlugin(applicationModes = { ServiceScope.MANY }, entityTypes = { EntityType.DATA })
public class MultiEntitiesServicePlugin extends AbstractCatalogServicePlugin implements IEntitiesServicePlugin {

    public static final String PLUGIN_ID = "multiEntitiesPluginId";

    @Autowired
    private IServiceHelper serviceHelper;

    @Autowired
    private IAuthenticationResolver authResolver;

    @Override
    public ResponseEntity<StreamingResponseBody> applyOnEntities(List<String> entitiesId,
            HttpServletResponse response) {
        // Retrieve entities to apply service on
        Page<DataObject> dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), 0, 100);
        while (dos.hasNext()) {
            Pageable nextPage = dos.nextPageable();
            dos = serviceHelper.getDataObjects(Lists.newArrayList(entitiesId), nextPage.getPageNumber(),
                                               nextPage.getPageSize());
        }
        // TODO ....
        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);
    }

    @Override
    public ResponseEntity<StreamingResponseBody> applyOnQuery(String pOpenSearchQuery, EntityType pEntityType,
            HttpServletResponse response) {
        // Retrieve entities to apply service on
        Page<DataObject> dos;
        try {
            dos = serviceHelper.getDataObjects(pOpenSearchQuery, 0, 100);
            while (dos.hasNext()) {
                Pageable nextPage = dos.nextPageable();
                dos = serviceHelper.getDataObjects(pOpenSearchQuery, nextPage.getPageNumber(), nextPage.getPageSize());
            }
        } catch (OpenSearchParseException e) {
            return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, "Error retrieving entities from catalog");
        }
        // TODO ....
        return CatalogPluginResponseFactory.createSuccessResponse(response, CatalogPluginResponseType.JSON, result);
    }

}
```

NOTE : 
 * @CatalogServicePlugin : Annotation to define scope of service plugin.
 * AbstractCatalogServicePlugin : Allow to add the common plugin parameter to associate a service to all datasets of the catalog
 * A tutorial on how to create a plugin is available [here](/docs/regards-backend-tutorial.odp)

[SampleServicePlugin](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/SampleServicePlugin.java) is an exemple of how to implements this extension point to create your own business logic.  
  
In order to help you retrieving datas from the queried parameters the [ServiceHelper](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/ServiceHelper.java) can be autowired on any of your plugin implementations.

```java
@Autowired
private IServiceHelper serviceHelper;
```

The exemple service :
- Extends [AbstractCatalogServicePlugin](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalog-services-plugin/src/main/java/fr/cnes/regards/modules/catalog/services/plugins/AbstractCatalogServicePlugin.java) to add a standard plugin parameter to allow access to the service on specified catalog datasets. The Administration HMI allows you to define access to catalog services for each dataset.
- Implements the two interfaces `IEntitiesServicePlugin` and `ISingleEntityServicePlugin` to allow application with one or many entities.
- Shows you how to specify the service return type (octet-stream, image, json or xml) through the [CatalogPluginResponseFactory](https://github.com/RegardsOss/regards-catalog/blob/master/catalog-services/catalogue-services-helper/src/main/java/fr/cnes/regards/modules/catalog/services/helper/CatalogPluginResponseFactory.java) class.

