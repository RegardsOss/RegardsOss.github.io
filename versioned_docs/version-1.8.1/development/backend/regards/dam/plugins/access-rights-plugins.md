---
id: backend-dam-data-access-plugins
title:  Data access rights plugin
sidebar_label: Data access rights
slug: /development/backend/services/dam/plugins/data-access-rights/
---


## Overview

:::note
This extension point allows to defined access rights of data into a dataset. 
:::

Dynamic plugins are made to re-calculate access rights every day. Non dynamic plugins access rights calculation are made when :
 - There is a data modification (dataset update, add or remove data, ...)
 - There is a user group modification


The periodicity of re-calculation of dynamic plugins is by default set to once a day but it is configurable in the microservice properties with the properties `regards.access.rights.update.cron`. The value is a standard cron format.

Dynamic updates of accessRights are made thanks to a cron function at [AccessRightsService](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-service/src/main/java/fr/cnes/regards/modules/dam/service/dataaccess/AccessRightUpdateScheduler.java).

See class [EntityIndexerService](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/crawler/crawler-service/src/main/java/fr/cnes/regards/modules/crawler/service/EntityIndexerService.java) method `manageDatasetUpdate` to see how accessRights are calculated on every datasets.

REGARDS provides many implementation of this extension point :
 - [CustomDataObjectsAccessPlugin] : `Not release yet` allows access to data objects matching a configured opensearch request.
 - [OldDataObjectsAccessPlugin] : `Not release yet` Dynamicly allows access to data objects older than an amount of configured time.
 - [NewDataObjectsAccessPlugin] : `Not release yet` Dynamicly allows access to data objects newer than an amount of configured time.

## Interface

   `IDataObjectAccessFilterPlugin`

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "ExempleDataObjectsAccessPlugin", version = "4.0.0-SNAPSHOT",
        description = "Allow access to dataObjects",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class ExempleDataObjectsAccessPlugin implements IDataObjectAccessFilterPlugin {

    /**
     * Override this method to define the search criterion applied to find allowed dataobjects into the dataset.
     */
    @Override
    public ICriterion getSearchFilter() {
        return ICriterion.all();
    }

    /**
     * Return TRUE to force calculation of access rights every day for all dataset associated to these plugin.
     */
    @Override
    public boolean isDynamic() {
        return false;
    }

}
```
