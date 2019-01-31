---
layout: classic-docs
title: Data access rights plugins
---


{% include toc.md %}

> This extension point is not release yet.
{: .tip .warning}

## Overview

    This customization is an extension point of DataManagement microservice.

This extension point allows to defined access rights of datas into a dataset. Dynamic plugins are made to re-calculate access rights every day. Non dynamic plugins access rights calculation are made when :
 - There is a data modification (dataset update, add or remove datas, ...)
 - There is a user group modification

The periodicity of re-calculation of dynamic plugins is by default set to once a day but it is configurable in the microservice properties with the properties `regards.access.rights.update.cron`. The value is a standard cron format.

See class [EntityIndexerService](https://github.com/RegardsOss/regards-dam/blob/d8eedbd4d03928219b4030b96abc01aeb8fb2976/crawler/crawler-service/src/main/java/fr/cnes/regards/modules/crawler/service/EntityIndexerService.java) method `manageDatasetUpdate` to see how accessRights are calculated on every datasets.

## Interface

   `IDataObjectAccessFilterPlugin`

## Implementation

To learn more about how to create your own plugin see 

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
