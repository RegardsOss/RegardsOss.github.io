---
title: Plugins
sidebar_label: Available plugins
slug: /development/services/dam/plugins/overview
sidebar_position: 1
---

TODO intro

## Data source plugins

All the following plugins implements
the [IDataSourcePlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/datasources/plugins/IDataSourcePlugin.java).

| Plugin image                                                                                                                     | Plugin name                        | Description                                                                | 
|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------|----------------------------------------------------------------------------|
| [rs-aip-data-source-plugin](https://github.com/orgs/RegardsOss/packages/container/package/rs-aip-datasource-plugin)              | aip-storage-datasource             | Plugin to crawl products from `rs-ingest` microservice.                    |
| [rs-feature-datasource-plugin](https://github.com/orgs/RegardsOss/packages/container/package/rs-feature-datasource-plugin)       | feature-datasource                 | Plugin to crawl products from `rs-fem` microservice.                       |
| [rs-postgresql-datasource-plugin](https://github.com/orgs/RegardsOss/packages/container/package/rs-postgresql-datasource-plugin) | postgresql-datasource-single-table | Plugin to crawl products from a **single table** of a `postgres database`. |
| [rs-postgresql-datasource-plugin](https://github.com/orgs/RegardsOss/packages/container/package/rs-postgresql-datasource-plugin) | postgresql-datasource              | Plugin to crawl products from **many tables** of a `postgres database`.    |
| [rs-webservice-datasource-plugin](https://github.com/orgs/RegardsOss/packages/container/package/rs-webservice-datasource-plugin) | webservice-datasource              | Plugin to crawl products from an **Opensearch web service**.               |

## Access rights plugins

All the following plugins implements
the [IDataObjectAccessFilterPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/plugins/IDataObjectAccessFilterPlugin.java).

| Plugin image                                      | Plugin name                   | Description                                                                                                                    | 
|---------------------------------------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Already** provided <br/>inside the microservice | CustomDataObjectsAccessPlugin | Allow access to dataObjects matching the given opensearch lucene formated query                                                |
| **Already** provided <br/>inside the microservice | NewDataObjectsAccess          | Allow access only to new data objects. New data objects are thoses created at most X days ago. X is a parameter to configure.  |
| **Already** provided <br/>inside the microservice | OldDataObjectsAccess          | Allow access only to old data objects. Old data objects are thoses created at least X days ago. X is a parameter to configure. | 

## Computed attributes plugins

All the following plugins implements
the [IComputedAttribute interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/IComputedAttribute.java).

| Plugin image                                      | Plugin name          | Description                                                                                                          | 
|---------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------|
| **Already** provided <br/>inside the microservice | CountPlugin          | Allows to compute the number of data of a Dataset                                                                    |
| **Already** provided <br/>inside the microservice | IntSumComputePlugin  | Allows to compute the sum of IntegerAttribute according to a collection of data using the same IntegerAttribute name |
| **Already** provided <br/>inside the microservice | LongSumComputePlugin | Allows to compute the sum of LongAttribute according to a collection of data using the same LongAttribute name       | 
| **Already** provided <br/>inside the microservice | MaxDateComputePlugin | Allows to compute the maximum of a DateAttribute according to a collection of data                                   |
| **Already** provided <br/>inside the microservice | MinDateComputePlugin | Allows to compute the minimum of a DateAttribute according to a collection of data                                   |