---
id: backend-dam-import-export
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/services/dam/configuration/import-export
---

## Request

To configure `rs-dam` settings, send a `POST` request on update operation of dynamic-tenant-setting-controller (
see [rest api documentation](../api-guides/rest/dam-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration))
for each setting that needs to be set. The configuration is stored in database for each tenant or project.

This configuration can also be imported or exported
through [administrator HMI](../../../../user-documentation/2-project-configuration/microservices.md).

| Configuration type | Available | Description |
| ------------------ | --------- | ----------- |
| Import configuration in json format | False | Not implemented yet |
| Export configuration in json format | False | Not implemented yet |
| Reset configuration before import | False | Reset before import is not activated here, as this requires the data catalogue to be reset to zero. |


Dynamic settings for `Data management` microservice are :

| Name                   | Type    | Default Value | Description                                                                                            |
|------------------------|---------|---------------|--------------------------------------------------------------------------------------------------------|
| storage_location       | String  |               | Name of the storage location when delegating storage actions to the Storage module                     |
| index_number_of_shards | Long    | 5             | Number of shards used by the current tenant index                                                      |
| storage_subdirectory   | String  |               | Name of the subdirectory in the storage location when delegating storage actions to the Storage module |
| store_files            | Boolean | false         | Controls whether AIP entities are sent to Storage module to be stored                                  |

## Plugins configuration format

| Name          | Type    | Description                                                                   |
|---------------|---------|-------------------------------------------------------------------------------|
| pluginId      | String  | Plugin unique identifier. Used to identify which plugin to use                |
| businessId    | String  | Plugin configuration unique identifier                                        |
| label         | String  | Plugin configuration label.                                                   |
| version       | String  | Plugin configuration compatible version                                       |
| priorityOrder | Integer | plugin configuration priority.                                                |
| active        | Boolean | Enable or disable plugin configuration                                        |
| parameters    | Object  | Json format of the plugin configuration parameters (specific for each plugin) | 

## Dataset configuration format

| Name       | Type           | Description                                                                                                                                                                        |
|------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| datasource | String         | Data source identifier                                                                                                                                                             |
| subsetting | String         | Subsetting for the dataset. Products meeting only this criterion will represent the dataset. If you do not specify anything, all the elements of the data source will be included. |
| feature    | DatasetFeature | Feature must be set and must fit the model                                                                                                                                         |

```json title='rs-dam configuration file example'
{
  "microservice": "rs-dam",
  "modules": [
    {
      "module": {
        "id": "dam",
        "name": "Data Management module",
        "description": "Manage Entities",
        "version": "1.6.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "storage_location",
            "description": "Name of the storage location",
            "value": "\"Local\"",
            "defaultValue": "\"\"",
            "className": "java.lang.String",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "index_number_of_shards",
            "description": "Number of shards used by the current tenant index",
            "value": "5",
            "defaultValue": "5",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "index_number_of_replicas",
            "description": "Number of replicas of each shard in the current tenant index",
            "value": "1",
            "defaultValue": "1",
            "className": "java.lang.Long",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "storage_subdirectory",
            "description": "Name of the subdirectory in the storage location",
            "value": "\"validation/regards-2541\"",
            "defaultValue": "\"\"",
            "className": "java.lang.String",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "store_files",
            "description": "Controls whether AIP entities are sent to Storage module to be stored",
            "value": "true",
            "defaultValue": "false",
            "className": "java.lang.Boolean",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-db-connection",
            "label": "CONNECTION-BD-ID-2557",
            "businessId": "fa0d86ab-dfe0-4e74-8ac4-ccd6720d5bf1",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "dbPort",
                "type": "STRING",
                "value": "5432",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "password",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false
              },
              {
                "name": "dbName",
                "type": "STRING",
                "value": "rs_ext_validation_db_id",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "dbHost",
                "type": "STRING",
                "value": "rs-postgres",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "user",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false,
                "dynamicsValues": []
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-db-connection",
            "label": "VALIDATION-CONNECTION",
            "businessId": "5f6c14b8-b2f2-416f-a179-ff4cc27e118c",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "dbPort",
                "type": "STRING",
                "value": "5432",
                "dynamic": false
              },
              {
                "name": "password",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false
              },
              {
                "name": "dbName",
                "type": "STRING",
                "value": "rs_ext_validation_db",
                "dynamic": false
              },
              {
                "name": "dbHost",
                "type": "STRING",
                "value": "rs-postgres",
                "dynamic": false
              },
              {
                "name": "user",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-db-connection",
            "label": "ext-postgres-db",
            "businessId": "1228d6f6-52e2-4506-ba60-6962e4ed4f75",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "dbPort",
                "type": "STRING",
                "value": "5432",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "password",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false
              },
              {
                "name": "dbName",
                "type": "STRING",
                "value": "rs_ext_validation_db",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "dbHost",
                "type": "STRING",
                "value": "rs-postgres",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "user",
                "type": "STRING",
                "value": "azertyuiop123456789",
                "dynamic": false,
                "dynamicsValues": []
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "AIRBUS_PRODUCTS_CRAWLER",
            "businessId": "d31ffdc2-a0b6-4ce3-9570-c45b73546885",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "airbus"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "AirbusDataModel",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.name",
                  "properties.name": "properties.descriptiveInformation.name",
                  "properties.geolocalized": "properties.descriptiveInformation.geolocalized",
                  "properties.creation_date": "properties.descriptiveInformation.creation_date"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [],
                "dynamic": false
              },
              {
                "name": "tags",
                "type": "COLLECTION",
                "value": [],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "feature-datasource",
            "label": "Aspiration2487",
            "businessId": "d2bfb124-ea3a-4447-8aa9-d62db311e95a",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "modelName",
                "type": "STRING",
                "value": "Modele2487",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "CDPP-10_000",
            "businessId": "4f7db01f-baa6-485c-afb4-dd1f281ddadd",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "CDPP-10_000"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "CDPP_DATA_MODEL",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "providerId",
                  "properties.SIPAD_DATASET": "properties.descriptiveInformation.productName",
                  "properties.TIME_PERIOD.STOP_DATE": "properties.descriptiveInformation.time_period.stop_date",
                  "properties.TIME_PERIOD.START_DATE": "properties.descriptiveInformation.time_period.start_date"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "FILE_SIZE",
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "CDPP"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-datasource",
            "label": "Coucou",
            "businessId": "7985eca8-7156-4ec0-b3cf-a2298a8ef8d5",
            "version": "2.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "mapping",
                "type": "COLLECTION",
                "value": [
                  {
                    "name": "providerId",
                    "type": "STRING",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "label",
                    "type": "STRING",
                    "nameDS": "description",
                    "namespace": "",
                    "attributeType": "STATIC"
                  }
                ],
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "fromClause",
                "type": "STRING",
                "value": "FROM t_table_1, t_table_2 WHERE id \u003d table1_id",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DATA_MODEL_REGARDS_2557",
                "dynamic": false
              },
              {
                "name": "columnId",
                "type": "STRING",
                "value": "my_column_id",
                "dynamic": false
              },
              {
                "name": "connection",
                "type": "PLUGIN",
                "value": "fa0d86ab-dfe0-4e74-8ac4-ccd6720d5bf1",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-datasource-single-table",
            "label": "Crawl-external-postgres-db",
            "businessId": "c42e80fe-a8f7-4212-b999-895ae755803c",
            "version": "2.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "mapping",
                "type": "COLLECTION",
                "value": [
                  {
                    "name": "providerId",
                    "type": "STRING",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "label",
                    "type": "STRING",
                    "nameDS": "label",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "lastUpdate",
                    "type": "DATE_ISO8601",
                    "nameDS": "creation_date",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "IDENTIFIER",
                    "type": "INTEGER",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "CREATION_DATE",
                    "type": "DATE_ISO8601",
                    "nameDS": "creation_date",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "EXT_URL",
                    "type": "URL",
                    "nameDS": "ext_url",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  }
                ],
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "CRAWL_DATA_MODEL",
                "dynamic": false
              },
              {
                "name": "connection",
                "type": "PLUGIN",
                "value": "1228d6f6-52e2-4506-ba60-6962e4ed4f75",
                "dynamic": false
              },
              {
                "name": "table",
                "type": "STRING",
                "value": "public.t_entities",
                "dynamic": false,
                "dynamicsValues": []
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "Crawler-2390-pays",
            "businessId": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "MODEL_COUNTRY",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.Code": "properties.descriptiveInformation.code",
                  "properties.date": "properties.descriptiveInformation.creationdate"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "FileSize",
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "COUNTRY",
                  "ARCHIVES"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "DATASOURCE_CONSTELLATIONS_2320",
            "businessId": "3c3822b4-8a87-4bac-9cf2-dcc4efb30bb5",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "Constellation",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.name",
                  "properties.Zodiac": "properties.descriptiveInformation.zodiac",
                  "properties.Acronym": "properties.descriptiveInformation.constellation"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "Constellations"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-datasource",
            "label": "DATASOURCE_DB_REGARDS_2569",
            "businessId": "43395d88-304a-4798-9e5c-41288f1577ec",
            "version": "2.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "mapping",
                "type": "COLLECTION",
                "value": [
                  {
                    "name": "providerId",
                    "type": "STRING",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "label",
                    "type": "STRING",
                    "nameDS": "description",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "id",
                    "type": "STRING",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "description",
                    "type": "STRING",
                    "nameDS": "description",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  }
                ],
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "fromClause",
                "type": "STRING",
                "value": "FROM t_table_1 t1, t_table_2 t2 WHERE t1.id\u003dt2.table1_id",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DATA_MODEL_REGARDS_2569",
                "dynamic": false
              },
              {
                "name": "columnId",
                "type": "STRING",
                "value": "my_column_id",
                "dynamic": false
              },
              {
                "name": "connection",
                "type": "PLUGIN",
                "value": "fa0d86ab-dfe0-4e74-8ac4-ccd6720d5bf1",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "postgresql-datasource-single-table",
            "label": "DATASOURCE_REGARDS_2044",
            "businessId": "44cc76e7-c515-4bbf-b559-3573a765246b",
            "version": "2.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "mapping",
                "type": "COLLECTION",
                "value": [
                  {
                    "name": "providerId",
                    "type": "STRING",
                    "nameDS": "id",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "label",
                    "type": "STRING",
                    "nameDS": "description",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "rawdata",
                    "type": "STRING",
                    "nameDS": "\u0027https://validation-regards.cloud-espace.si.c-s.fr/img/fr_flag.png\u0027",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "thumbnail",
                    "type": "STRING",
                    "nameDS": "\u0027https://validation-regards.cloud-espace.si.c-s.fr/img/fr_flag.png\u0027",
                    "namespace": "",
                    "attributeType": "STATIC"
                  },
                  {
                    "name": "weight",
                    "type": "INTEGER",
                    "nameDS": "weight",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "date",
                    "type": "DATE_ISO8601",
                    "nameDS": "creation_date",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "value_l1",
                    "type": "LONG",
                    "nameDS": "value_l1",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "value_d1",
                    "type": "DOUBLE",
                    "nameDS": "value_d1",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "state",
                    "type": "STRING",
                    "nameDS": "state",
                    "namespace": "fragment1",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "DATASET_VALIDATION_TYPE",
                    "type": "STRING",
                    "nameDS": "type",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "description",
                    "type": "STRING",
                    "nameDS": "description",
                    "namespace": "",
                    "attributeType": "DYNAMIC"
                  },
                  {
                    "name": "activated",
                    "type": "BOOLEAN",
                    "nameDS": "activated",
                    "namespace": "fragment1",
                    "attributeType": "DYNAMIC"
                  }
                ],
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DATA_MODEL_REGARDS_2044",
                "dynamic": false
              },
              {
                "name": "connection",
                "type": "PLUGIN",
                "value": "5f6c14b8-b2f2-416f-a179-ff4cc27e118c",
                "dynamic": false
              },
              {
                "name": "table",
                "type": "STRING",
                "value": "public.t_validation_1",
                "dynamic": false,
                "dynamicsValues": []
              },
              {
                "name": "tags",
                "type": "COLLECTION",
                "value": [
                  "bob"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "feature-datasource",
            "label": "DATASOURCE_REGARDS_2543",
            "businessId": "57401ca9-2480-432e-aed0-c7df4b87a80a",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "modelName",
                "type": "STRING",
                "value": "SWOT",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "DATASOURCE_STARS_2320",
            "businessId": "6fe55459-f283-4ddc-aa3a-5681a3978302",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "Star",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.id",
                  "properties.ra": "properties.descriptiveInformation.ra",
                  "properties.mag": "properties.descriptiveInformation.mag",
                  "properties.dist": "properties.descriptiveInformation.dist",
                  "properties.spect": "properties.descriptiveInformation.spect",
                  "properties.absmag": "properties.descriptiveInformation.absmag",
                  "properties.Declination": "properties.descriptiveInformation.dec",
                  "properties.GreekLetter": "properties.descriptiveInformation.greek_letters"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "Stars"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "feature-datasource",
            "label": "DS-FULL-PRODUCTS",
            "businessId": "ds-full-products_2541",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "modelName",
                "type": "STRING",
                "value": "MODEL_FULL",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "Datasource-2497",
            "businessId": "97e5a556-b080-4649-b0c8-03d32d034603",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "TEST-2497"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 60,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DataModel2497",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label"
                },
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "Départements francais",
            "businessId": "598947bc-4fe1-4e1b-976e-7e3f025425a4",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 30,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "Departement",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.nom",
                  "properties.Code": "properties.descriptiveInformation.code",
                  "properties.Name": "properties.descriptiveInformation.nom"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "FileSize",
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "France"
                ],
                "dynamic": false
              },
              {
                "name": "tags",
                "type": "COLLECTION",
                "value": [],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "LTA_PRODUCTS_CRAWLER",
            "businessId": "e034e91e-123d-4b83-ba24-49144d588cbb",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "lta"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 30,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "LtaProductModel",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.name",
                  "properties.name": "properties.descriptiveInformation.name",
                  "properties.geolocalized": "properties.descriptiveInformation.geolocalized",
                  "properties.creation_date": "properties.descriptiveInformation.creation_date"
                },
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "feature-datasource",
            "label": "PEPs from FEM",
            "businessId": "a3f7422e-eb11-4072-b9d9-dd9200f52d66",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "modelName",
                "type": "STRING",
                "value": "PEPS_DATA_MODEL",
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "REGARDS-2282 : harvester_by_categories",
            "businessId": "ebda98c5-ad32-4ef3-b7b1-09af74d96ec1",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 250,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "VALIDATION_DATA_MODEL_1",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.date": "properties.descriptiveInformation.creationdate",
                  "properties.value_d1": "properties.descriptiveInformation.doubleValue",
                  "properties.value_l1": "properties.descriptiveInformation.longValue",
                  "properties.DATASET_VALIDATION_TYPE": "properties.descriptiveInformation.dataSetType"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "data_size",
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "CAT_01"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "swot-feature-datasource",
            "label": "SWOT-GEOJSON",
            "businessId": "b68b4940-583f-4513-897d-ac88d43b783a",
            "version": "1.0.0",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "purgeAttributeJsonPath",
                "type": "STRING",
                "value": "system.gpfs_purge_allowed",
                "dynamic": false
              },
              {
                "name": "searchLimitFromNowInSeconds",
                "type": "LONG",
                "value": 10,
                "dynamic": false
              },
              {
                "name": "overlap",
                "type": "LONG",
                "value": 10,
                "dynamic": false
              },
              {
                "name": "date-range-histogram",
                "type": "POJO",
                "value": {},
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 1000,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "SWOT",
                "dynamic": false
              },
              {
                "name": "dataTypeJsonPath",
                "type": "STRING",
                "value": "data.type",
                "dynamic": false
              },
              {
                "name": "deletableDataType",
                "type": "COLLECTION",
                "value": [
                  "L0A_LR_Packet"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "webservice-datasource",
            "label": "Sources départements A",
            "businessId": "076adc25-ef88-44a0-be02-3aa814a8cfa8",
            "version": "0.4.0",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "webserviceConfiguration",
                "type": "POJO",
                "value": {
                  "pagesSize": 500,
                  "pageSizeParam": "maxRecords",
                  "webserviceURL": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/engines/opensearch/datasets/URN%3AAIP%3ADATASET%3Avalidation_1_16%3A516b7d6a-4240-42ad-bb07-a855a5c27ca0%3AV1/dataobjects/search?scope\u003dvalidation_1_16",
                  "pageIndexParam": "page",
                  "startPageIndex": 0,
                  "webserviceParameters": {
                    "q": "label:A*"
                  },
                  "opensearchDescriptorURL": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/engines/opensearch/datasets/URN:AIP:DATASET:validation_1_16:516b7d6a-4240-42ad-bb07-a855a5c27ca0:V1/dataobjects/search/opensearchDescription.xml?scope\u003dvalidation_1_16"
                },
                "dynamic": false
              },
              {
                "name": "conversionConfiguration",
                "type": "POJO",
                "value": {
                  "modelName": "Departement",
                  "pageSizeField": "itemsPerPage",
                  "rawDataURLPath": "rawdata",
                  "thumbnailURLPath": "thumbnail",
                  "totalResultsField": "totalResults",
                  "attributeToJSonField": {
                    "label": "title",
                    "providerId": "providerId",
                    "properties.Code": "Code",
                    "properties.Name": "Name",
                    "properties.FileSize": "FileSize"
                  }
                },
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "aspiration-2115",
            "businessId": "4d8704f6-8e10-4e64-9068-639d74b3079c",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DocumentModel2115",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.lien": "properties.descriptiveInformation.lien",
                  "properties.titre": "properties.descriptiveInformation.titre",
                  "properties.types": "properties.descriptiveInformation.types",
                  "properties.auteur": "properties.descriptiveInformation.auteur",
                  "properties.resume": "properties.descriptiveInformation.resume",
                  "properties.abstract": "properties.descriptiveInformation.abstract",
                  "properties.emetteur": "properties.descriptiveInformation.emetteur",
                  "properties.revision": "properties.descriptiveInformation.revision",
                  "properties.derniere_revision": "properties.descriptiveInformation.derniere_revision"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "DOCUMENTS"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "aspiration-data-2316",
            "businessId": "878d6109-bf92-4f53-9bdd-6701a3adae84",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DataModel2313",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.description": "properties.descriptiveInformation.description"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "DATA-2316"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "aspiration-documents-2316",
            "businessId": "0a0752de-148b-4dd9-ab54-dde3287da4b8",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DocumentModel2316",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.titre": "properties.descriptiveInformation.title",
                  "properties.auteur": "properties.descriptiveInformation.author"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "DOCUMENTS-2316"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "aspiration-regards-2313",
            "businessId": "2741ff32-786a-4af9-928c-4fbcf5001459",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 86400,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "DataModel2313",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.description": "properties.descriptiveInformation.description"
                },
                "dynamic": false
              },
              {
                "name": "subsettingCategories",
                "type": "COLLECTION",
                "value": [
                  "REGARDS-2313"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "harvester_complex_data_model",
            "businessId": "d2ee2567-5f87-47c9-928e-75d0b6077e01",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "DATASET-2212-3-Fragments"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 250,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "VALIDATION_DATA_MODEL_2",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.date": "properties.descriptiveInformation.creationdate",
                  "properties.value_d1": "properties.descriptiveInformation.doubleValue",
                  "properties.value_l1": "properties.descriptiveInformation.longValue",
                  "properties.orbitRange.orbit_max": "properties.descriptiveInformation.orbitRange.orbit_max",
                  "properties.orbitRange.orbit_min": "properties.descriptiveInformation.orbitRange.orbit_min",
                  "properties.DATASET_VALIDATION_TYPE": "properties.descriptiveInformation.dataSetType",
                  "properties.frag_string_array.string_table": "properties.descriptiveInformation.values",
                  "properties.date_interval.dateRange.lowerBound": "properties.descriptiveInformation.start_date",
                  "properties.date_interval.dateRange.upperBound": "properties.descriptiveInformation.stop_date"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "data_size",
                "dynamic": false
              },
              {
                "name": "tags",
                "type": "COLLECTION",
                "value": [
                  "HELLO_REGARDS"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "aip-storage-datasource",
            "label": "harvester_simple_data_model",
            "businessId": "ccaaca26-3e82-4995-a462-bf5068853585",
            "version": "1.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": false,
            "parameters": [
              {
                "name": "subsettingTags",
                "type": "COLLECTION",
                "value": [
                  "DATASET-2212-1",
                  "DATASET-2212-2"
                ],
                "dynamic": false
              },
              {
                "name": "refreshRate",
                "type": "INTEGER",
                "value": 250,
                "dynamic": false
              },
              {
                "name": "modelName",
                "type": "STRING",
                "value": "VALIDATION_DATA_MODEL_1",
                "dynamic": false
              },
              {
                "name": "binding map",
                "type": "MAP",
                "value": {
                  "label": "properties.descriptiveInformation.label",
                  "properties.date": "properties.descriptiveInformation.creationdate",
                  "properties.value_d1": "properties.descriptiveInformation.doubleValue",
                  "properties.value_l1": "properties.descriptiveInformation.longValue",
                  "properties.DATASET_VALIDATION_TYPE": "properties.descriptiveInformation.dataSetType"
                },
                "dynamic": false
              },
              {
                "name": "attribute file size",
                "type": "STRING",
                "value": "data_size",
                "dynamic": false
              },
              {
                "name": "tags",
                "type": "COLLECTION",
                "value": [
                  "HELLO_REGARDS"
                ],
                "dynamic": false
              }
            ]
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "44cc76e7-c515-4bbf-b559-3573a765246b",
            "subsetting": "properties.DATASET_VALIDATION_TYPE:DS2",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DATASET_2_REGARDS_2081",
              "entityType": "DATASET",
              "label": "DATASET_2_REGARDS_2081",
              "model": "DATASET_MODEL_REGARDS_2081",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:90ecd1e9-f332-41bc-8fcd-5079332a108f:V1",
              "properties": {
                "name": "DATASET_2"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "43395d88-304a-4798-9e5c-41288f1577ec",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DATASET_2557",
              "entityType": "DATASET",
              "label": "DATASET_2569",
              "model": "DATASET_MODEL_REGARDS_2557",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:5c2a4bb8-871f-4ef4-af5f-95dd5041f162:V1",
              "properties": {
                "name": "DATASET_2569",
                "Missions": [
                  "Jason"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "3c3822b4-8a87-4bac-9cf2-dcc4efb30bb5",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Constellations",
              "entityType": "DATASET",
              "label": "Constellations",
              "model": "SpaceSet",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:37811f10-889c-4486-a994-96383b5ce677:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "6fe55459-f283-4ddc-aa3a-5681a3978302",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Stars",
              "entityType": "DATASET",
              "label": "Stars",
              "model": "SpaceSet",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:bf3cc03c-98df-4990-89d5-78a685a4a4ec:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-02\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_EUROPE_NEARLINE",
              "entityType": "DATASET",
              "label": "Europe (Nearline)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:3ce0bfb5-04a3-4f4b-9c96-e4d44ff336c3:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "44cc76e7-c515-4bbf-b559-3573a765246b",
            "subsetting": "properties.DATASET_VALIDATION_TYPE:DSP",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DATASET_PUBLIC_REGARDS_2081",
              "entityType": "DATASET",
              "label": "DATASET_PUBLIC_REGARDS_2081",
              "model": "DATASET_MODEL_REGARDS_2044",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:0a833525-74c9-4a2a-900a-0c2854b95d37:V1",
              "properties": {
                "name": "Données publiques",
                "Missions": [
                  "Jason"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-05\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_EUROPE_ALL",
              "entityType": "DATASET",
              "label": "Europe (Hétérogènes)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:8c2484fd-fa2b-4018-9bb1-028c5f0a73e8:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-06\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_ASIE_S3",
              "entityType": "DATASET",
              "label": "Asie (S3)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:5fe6e98b-0d2f-47e5-8b91-5cfea9b94060:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "ccaaca26-3e82-4995-a462-bf5068853585",
            "subsetting": "tags: DATASET-2212-1",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "REGARDS-2212",
              "entityType": "DATASET",
              "label": "DATASET-2212 / 1",
              "model": "VALIDATION_DATASET_MODEL_1",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:4a04600c-56cf-4495-a4ad-2e0163121123:V1",
              "properties": {
                "name": "regards-2212-1",
                "Missions": [
                  "Spot"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "e034e91e-123d-4b83-ba24-49144d588cbb",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "LTA_PRODUCTS",
              "entityType": "DATASET",
              "label": "LTA Products",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:perf:449f196f-e75d-4743-8f19-8f98f44ab14d:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "a3f7422e-eb11-4072-b9d9-dd9200f52d66",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "PEPS_SENTINEL_1_DATASET",
              "entityType": "DATASET",
              "label": "Sentinel1",
              "model": "PEPS_DATASET_MODEL",
              "files": {},
              "tags": [
                "URN:AIP:COLLECTION:validation_1_16:775763f1-c21e-4e9f-83ad-6ce8f5263a0d:V1"
              ],
              "id": "URN:AIP:DATASET:validation_1_16:6264f8bb-779f-4965-8462-f305cd157af4:V1",
              "properties": {
                "organisation": "CNES",
                "program": "Sentinel1",
                "manufacturer": "CNES",
                "platform": "Sentinel1"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "97e5a556-b080-4649-b0c8-03d32d034603",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Dataset2497",
              "entityType": "DATASET",
              "label": "Dataset2497",
              "model": "DatasetModel2497",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:bacd8ed9-6f34-4fb2-97df-2c6dd39397c7:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "076adc25-ef88-44a0-be02-3aa814a8cfa8",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "badaboum",
              "entityType": "DATASET",
              "label": "badabiboum",
              "model": "Pays",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-dam/entities/URN%3AAIP%3ADATASET%3Avalidation_1_16%3A95023073-dba6-42eb-a66f-7da412697113%3AV1/files/d770156b05cca07709eb086fcf3a266e",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "d770156b05cca07709eb086fcf3a266e",
                    "digestAlgorithm": "MD5",
                    "filesize": 80,
                    "filename": "test-2247-fr.html",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:95023073-dba6-42eb-a66f-7da412697113:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "d31ffdc2-a0b6-4ce3-9570-c45b73546885",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "AirbusDataset",
              "entityType": "DATASET",
              "label": "AirbusDataset",
              "model": "AirbusDatasetModel",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": true,
                    "uri": "https://ui.adsabs.harvard.edu/abs/2004JGRA..109.9S15Z/abstract",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "1106036ee7965143fc697c42567581e8",
                    "digestAlgorithm": "MD5",
                    "filename": "abstract.html",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:staf:4a59fb26-6996-4f16-a08a-e63b6c47aed6:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-01\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_EUROPE_LOCAL",
              "entityType": "DATASET",
              "label": "Europe (Local)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:6238f11d-6484-4017-b507-b0b9956651de:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-04\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_EUROPE_MIXTE",
              "entityType": "DATASET",
              "label": "Europe (Mixte)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:ba61a367-0913-4c15-ad99-839a9f7253b7:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"2390-ARCHIVES\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "ARCHIVES_STAF_REFS",
              "entityType": "DATASET",
              "label": "Archives STAF (Références)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:7435f3e4-7f36-4bed-8841-43c91aac1119:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "b68b4940-583f-4513-897d-ac88d43b783a",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "SWOT-DS-1",
              "entityType": "DATASET",
              "label": "Données SWOT",
              "model": "SWOT_DATASET",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:55a2ae83-717d-4f87-ab7c-4703e58d01f9:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-07\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_AMERICA_S3GLACIER",
              "entityType": "DATASET",
              "label": "Amerique (S3 Glacier)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": true,
                    "uri": "https://ui.adsabs.harvard.edu/abs/2004JGRA..109.9S15Z/abstract",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "1106036ee7965143fc697c42567581e8",
                    "digestAlgorithm": "MD5",
                    "filename": "abstract.html",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:1731ccd1-ca3f-4427-8bbe-ef2211cffaf0:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "4d8704f6-8e10-4e64-9068-639d74b3079c",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "jeu documents",
              "entityType": "DATASET",
              "label": "jeu documents",
              "model": "DatasetModel2115",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:eff416fc-e001-4b4e-bc3b-d4adf241e95b:V1",
              "properties": {
                "document_group": "presentation"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "44cc76e7-c515-4bbf-b559-3573a765246b",
            "subsetting": "properties.DATASET_VALIDATION_TYPE:DS1",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DATASET_1_REGARDS_2081",
              "entityType": "DATASET",
              "label": "DATASET_1_REGARDS_2081",
              "model": "DATASET_MODEL_REGARDS_2044",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:9f869a95-75c5-4459-b651-125ec233ad2e:V1",
              "properties": {
                "name": "DATASET_1",
                "Missions": [
                  "Spot"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "ds-full-products_2541",
            "subsetting": "providerId:(/data_01.*/)",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_FULL_PRODUCTS_01",
              "entityType": "DATASET",
              "label": "Produits complets 01",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:8c9ba569-0063-43c8-b7f9-fc7a84fce41c:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "44cc76e7-c515-4bbf-b559-3573a765246b",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "ds_1",
              "entityType": "DATASET",
              "label": "validation_jeu_1",
              "model": "DATASET_MODEL_REGARDS_2044",
              "files": {
                "DESCRIPTION": [
                  {
                    "dataType": "DESCRIPTION",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-dam/entities/URN%3AAIP%3ADATASET%3Avalidation_1_16%3Ac9b952b7-a558-48f5-98fd-843a7875bef7%3AV1/files/5deb8abe0cd42c4f6c1410c7d599ea5d",
                    "mimeType": "application/pdf",
                    "online": true,
                    "checksum": "5deb8abe0cd42c4f6c1410c7d599ea5d",
                    "digestAlgorithm": "MD5",
                    "filesize": 413009,
                    "filename": "PARC_ASTERIX_VITDV14052400474_TICKETS.pdf",
                    "types": []
                  }
                ]
              },
              "tags": [
                "URN:AIP:COLLECTION:validation_1_16:bc549549-f598-454b-8a16-e5af75888031:V1",
                "URN:AIP:COLLECTION:validation_1_16:e2ba0179-e39f-4ea7-b4f5-3bae16b969a3:V1",
                "URN:AIP:COLLECTION:validation_1_16:f110bcc3-85e5-4bcf-aaa2-14301e51c6ca:V1"
              ],
              "id": "URN:AIP:DATASET:validation_1_16:c9b952b7-a558-48f5-98fd-843a7875bef7:V1",
              "properties": {
                "name": "le jeu de données de validation 1.16",
                "Missions": [
                  "Jason",
                  "Spot"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "2741ff32-786a-4af9-928c-4fbcf5001459",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Jeu2313",
              "entityType": "DATASET",
              "label": "Jeu2313",
              "model": "DatasetModel2313",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:74816398-62e4-4ffb-95f7-805c9f2a0dc1:V1",
              "properties": {
                "description": "Jeu de données REGARDS-2313"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "ccaaca26-3e82-4995-a462-bf5068853585",
            "subsetting": "tags:DATASET-2212-2",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "REGARDS-2212-2",
              "entityType": "DATASET",
              "label": "DATASET-2212 / 2",
              "model": "VALIDATION_DATASET_MODEL_1",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:cbc640ec-21d2-4418-afec-e8642d339d1c:V1",
              "properties": {
                "name": "DATASET-2212-2",
                "Missions": [
                  "Jason"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "d2ee2567-5f87-47c9-928e-75d0b6077e01",
            "subsetting": "tags:DATASET-2212-Fragments",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "REGARDS-2212-3",
              "entityType": "DATASET",
              "label": "DATASET-2212 / 3",
              "model": "VALIDATION_DATASET_MODEL_1",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:d4460fe7-55b9-4f0c-b45f-d88c5c35c293:V1",
              "properties": {
                "name": "regards-2212-3",
                "Missions": [
                  "Jason"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "ebda98c5-ad32-4ef3-b7b1-09af74d96ec1",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "REGARDS-2212-4",
              "entityType": "DATASET",
              "label": "DATASET-2212 / 4",
              "model": "VALIDATION_DATASET_MODEL_1",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:6193bef2-aec7-498e-8ba6-fc0c867bcd47:V1",
              "properties": {
                "name": "DATASET-2212-4",
                "Missions": [
                  "None"
                ]
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "0a0752de-148b-4dd9-ab54-dde3287da4b8",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Documents set 2316",
              "entityType": "DATASET",
              "label": "Document set 2316",
              "model": "DatasetModel2313",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/downloads/URN:AIP:DATASET:validation_1_16:4ddee92f-533a-4871-afc3-ac56ac4c6554:V1/files/d770156b05cca07709eb086fcf3a266e",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "d770156b05cca07709eb086fcf3a266e",
                    "digestAlgorithm": "MD5",
                    "filesize": 80,
                    "filename": "toto.html",
                    "types": []
                  }
                ],
                "DESCRIPTION": [
                  {
                    "dataType": "DESCRIPTION",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/downloads/URN:AIP:DATASET:validation_1_16:4ddee92f-533a-4871-afc3-ac56ac4c6554:V1/files/056b50464c29e932e66a6105a9c9c39b",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "056b50464c29e932e66a6105a9c9c39b",
                    "digestAlgorithm": "MD5",
                    "filesize": 39858,
                    "filename": "abstract.html",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:4ddee92f-533a-4871-afc3-ac56ac4c6554:V1",
              "properties": {
                "description": "Documents set for REGARDS-2316 test"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "57401ca9-2480-432e-aed0-c7df4b87a80a",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DATASET_SWOT_2543",
              "entityType": "DATASET",
              "label": "Dataset SWOT 2543",
              "model": "SWOT_DATASET",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:perf:3df71abd-c4f9-482d-b8e3-830c377f9b29:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "889f9805-fca9-49a8-85b8-39d79d27297f",
            "subsetting": "tags\u003d\"DATA-03\"",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_EUROPE_REFS",
              "entityType": "DATASET",
              "label": "Europe (Références)",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {},
              "tags": [
                "URN:AIP:COLLECTION:validation_1_16:0ca2ad6d-2b36-4cb6-8ede-8b3839ba0aa9:V1"
              ],
              "id": "URN:AIP:DATASET:validation_1_16:d99bdaf2-c299-45d4-a715-8a2de19f8cdf:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "076adc25-ef88-44a0-be02-3aa814a8cfa8",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "toto",
              "entityType": "DATASET",
              "label": "toto",
              "model": "Pays",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:ac46b47f-b8a3-4aaf-aaf1-bab25f3cf7bb:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "598947bc-4fe1-4e1b-976e-7e3f025425a4",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "France",
              "entityType": "DATASET",
              "label": "France",
              "model": "Pays",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/downloads/URN:AIP:DATASET:validation_1_16:516b7d6a-4240-42ad-bb07-a855a5c27ca0:V1/files/b3fd663bbe2cbdd63975bb24d2211cae/dam",
                    "mimeType": "text/plain",
                    "online": true,
                    "checksum": "b3fd663bbe2cbdd63975bb24d2211cae",
                    "digestAlgorithm": "MD5",
                    "filesize": 34,
                    "filename": "note_01.txt",
                    "types": []
                  },
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/downloads/URN:AIP:DATASET:validation_1_16:516b7d6a-4240-42ad-bb07-a855a5c27ca0:V1/files/c5723ed969292df11f876b534b352f87/dam",
                    "mimeType": "text/plain",
                    "online": true,
                    "checksum": "c5723ed969292df11f876b534b352f87",
                    "digestAlgorithm": "MD5",
                    "filesize": 18,
                    "filename": "test.txt",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:516b7d6a-4240-42ad-bb07-a855a5c27ca0:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "878d6109-bf92-4f53-9bdd-6701a3adae84",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Dataset 2316",
              "entityType": "DATASET",
              "label": "Dataset 2316",
              "model": "DatasetModel2313",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-catalog/downloads/URN:AIP:DATASET:validation_1_16:22764809-a0a2-407f-9514-e9e2e8523553:V1/files/056b50464c29e932e66a6105a9c9c39b",
                    "mimeType": "text/html",
                    "online": true,
                    "checksum": "056b50464c29e932e66a6105a9c9c39b",
                    "digestAlgorithm": "MD5",
                    "filesize": 39858,
                    "filename": "test.html",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:22764809-a0a2-407f-9514-e9e2e8523553:V1",
              "properties": {
                "description": "Dataset for REGARDS-2316 test"
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "4f7db01f-baa6-485c-afb4-dd1f281ddadd",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "CDPP-10_000",
              "entityType": "DATASET",
              "label": "CDPP-10_000",
              "model": "CDPP_DATASET_MODEL",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:899276dd-b642-4166-9ff9-5d4d9322395f:V1",
              "properties": {
                "PROCESSING_LEVEL": "RAW",
                "TEMPORAL_EXTRACTION_DEFINITION": {
                  "DATE_POSITION": 10,
                  "RECORD_LENGTH": 10,
                  "FILE_TYPE": "VARIABLE_BINARY_RECORD",
                  "DATE_TYPE": "CCSDS_BINARY"
                },
                "FILE_FORMAT": "PDF",
                "PHYSICAL_PARAMETER": {
                  "ENTITY": "ALPHA",
                  "COMPOUND": "ALFVEN_VELOCITY",
                  "PROPERTY": [
                    "DENSITY"
                  ],
                  "FLUCTUATIONS": "WAVELET_SPECTRUM"
                }
              },
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "ds-full-products_2541",
            "subsetting": "providerId:(/data_02.*/)",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "DS_FULL_PRODUCTS_02",
              "entityType": "DATASET",
              "label": "Produits complets 02",
              "model": "MODEL_DATASET_SIMPLE",
              "files": {
                "RAWDATA": [
                  {
                    "dataType": "RAWDATA",
                    "reference": false,
                    "uri": "https://validation-regards.cloud-espace.si.c-s.fr/api/v1/rs-dam/entities/URN%3AAIP%3ADATASET%3Avalidation_1_16%3A978e949f-de54-4c66-b16b-3a4e735cc666%3AV1/files/98d43f7eea375a40f368808e996a6885",
                    "mimeType": "text/plain",
                    "online": true,
                    "checksum": "98d43f7eea375a40f368808e996a6885",
                    "digestAlgorithm": "MD5",
                    "filesize": 34,
                    "filename": "note_02.txt",
                    "types": []
                  },
                  {
                    "dataType": "RAWDATA",
                    "reference": true,
                    "uri": "http://mirror.centos.org/centos/RPM-GPG-KEY-CentOS-3",
                    "mimeType": "application/octet-stream",
                    "online": true,
                    "checksum": "35eab5e264490df291086eb5ab9013b9",
                    "digestAlgorithm": "MD5",
                    "filename": "key_02",
                    "types": []
                  }
                ]
              },
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:978e949f-de54-4c66-b16b-3a4e735cc666:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "d2bfb124-ea3a-4447-8aa9-d62db311e95a",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Jeu2487",
              "entityType": "DATASET",
              "label": "Jeu2487",
              "model": "DatasetModel2487",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:57c3eecc-a3c8-4305-848e-70c8243c908c:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "c42e80fe-a8f7-4212-b999-895ae755803c",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "crawled-datas",
              "entityType": "DATASET",
              "label": "Données aspirées 2275",
              "model": "CRAWL_DATASET_MODEL",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:eb3b856d-7cc6-4c36-a487-4be50b1143de:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        },
        {
          "key": "fr.cnes.regards.modules.dam.domain.entities.DatasetConfiguration",
          "value": {
            "datasource": "076adc25-ef88-44a0-be02-3aa814a8cfa8",
            "subsetting": "",
            "feature": {
              "dataObjectsFilesAccessGranted": false,
              "dataObjectsAccessGranted": false,
              "providerId": "Départ",
              "entityType": "DATASET",
              "label": "Départ",
              "model": "Pays",
              "files": {},
              "tags": [],
              "id": "URN:AIP:DATASET:validation_1_16:d85ebf89-c45b-4462-86bb-d0799c823623:V1",
              "properties": {},
              "type": "Feature"
            }
          }
        }
      ]
    }
  ]
}
```