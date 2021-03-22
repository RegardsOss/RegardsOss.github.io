---
id: backend-dam-datasource-plugins
title: Datasource plugin
sidebar_label: Datasource
slug: /development/backend/services/dam/plugins/datasource/
---


## Overview

:::note
This extension point allows you to crawl data from any source into the REGARDS catalog.
:::

REGARDS provides many implementation of this extension point :
- [AIPDataSourcePlugin](https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/aip-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/AipDataSourcePlugin.java) : To crawl data from the AIP storage microservice (rs-storage).
- [PostgreDataSourcePlugin](https://github.com/RegardsOss/regards-plugins/blob/master/datasource-plugins/postgresql-datasource/src/main/java/fr/cnes/regards/modules/dam/plugins/datasources/PostgreDataSourcePlugin.java) : To crawl data from a postgres database
- WebServicePlugin : `Not released yet` To crawl data from a standard opensearch web service with geojson response format.

## Interface
  [IDataSourcePlugin](https://github.com/RegardsOss/regards-dam/blob/master/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/datasources/plugins/IDataSourcePlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "ExempleDataObjectsAccessPlugin", version = "4.0.0-SNAPSHOT",
        description = "Allow access to dataObjects",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class DataSourcePlugin implements IDataSourcePlugin {

  @PluginParameter(name = "modelName", label = "model name", description = "Associated data source model name")
  private String modelName;

  @PluginParameter(name = "refreshRate", defaultValue = "86400", optional = true,
            label = "refresh rate", description = "Crawling refresh rate in seconds (minimum delay between two consecutive crawls)")
  private Integer refreshRate;

  @Override
  public String getModelName() {
    return modelName;
  }

  @Override
  public int getRefreshRate() {
    return refreshRate;
  }

  /**
    * Returns a {@link Page} of new entities meeting the paging restriction provided in the {@code Pageable} object.
    * @param tenant tenant to build URN
    * @param pageable the pagination information
    * @param date Allows to filter the new entities created after this date parameter (can be null)
    * @return a page of entities
    */
  @Override
  public Page<DataObjectFeature> findAll(String tenant, Pageable pageable, OffsetDateTime date) throws DataSourceException {
    long totalElements = 0L;
    List<DataObjectFeature> features = new ArrayList<>();
    // ... here is the business code to retrieve the DataObjectFeatures to add into the REGARDS catalog.
    // The features to returned are wrapped pages in order to handle a large number of features.
    return new PageImpl<>(features, pageable, totalElements);
  }
}

```
      
