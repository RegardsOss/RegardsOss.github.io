---
id: backend-dataprovider-import-export
title: Dataprovider Import/Export
sidebar_label: Import/Export
slug: /development/backend/services/dataprovider/configuration/import-export
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/dataprovider-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through the [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

```json title='rs-dataprovider configuration example'
{
  "microservice": "rs-dataprovider",
  "modules": [
    {
      "module": {
        "id": "acquisition",
        "name": "Acquisition module",
        "description": "Data driven SIP creation",
        "version": "1.6.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": false,
      "configuration": [
        {
          "key": "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
          "value": {
            "label": "Departements francais",
            "active": true, // This parameter is not taken in account when importing configuration.
            "mode": "MANUAL",
            "periodicity": "0 * * * * *",
            "ingestChain": "Departements", // name of the ingest chain in INGEST service
            "storages": [ // configure storages per dataType.
              {
                "pluginBusinessId": "Local",
                "storePath": "",
                "targetTypes": [
                  "THUMBNAIL",
                  "RAWDATA",
                  "DOCUMENT",
                  "QUICKLOOK_SD",
                  "DESCRIPTION",
                  "AIP",
                  "QUICKLOOK_HD",
                  "QUICKLOOK_MD",
                  "OTHER"
                ]
              }
            ],
            "categories": [
              "France"
            ],
            "versioningMode": "INC_VERSION",
            "fileInfos": [
              {
                "mandatory": true,
                "scanPlugin": {
                  "pluginId": "GeoJsonFeatureCollectionParserPlugin",
                  "label": "scanPlugin-1575378375954",
                  "businessId": "9ea15f34-9947-4a12-ae72-ecc299193a81",
                  "version": "1.0.0-SNAPSHOT",
                  "priorityOrder": 0,
                  "active": true,
                  "parameters": [
                    {
                      "name": "featureId",
                      "type": "STRING",
                      "value": "nom",
                      "dynamic": false
                    },
                    {
                      "name": "allowEmptyFeatures",
                      "type": "BOOLEAN",
                      "value": false,
                      "dynamic": false
                    }
                  ]
                },
                "mimeType": "application/json",
                "dataType": "RAWDATA",
                "comment": "Geojson",
                "scanDirInfo": [
                  {
                    "scannedDirectory": "/input/geojson/departements",
                    "lastModificationDate": "2024-06-17T16:04:56.615919Z"
                  }
                ]
              }
            ],
            "validationPluginConf": {
              "pluginId": "DefaultFileValidation",
              "label": "validationPluginConf-1575378301041",
              "businessId": "3dbff482-346f-47e8-8845-d5e91cca7b21",
              "version": "1.0.0-SNAPSHOT",
              "priorityOrder": 0,
              "active": true,
              "parameters": []
            },
            "productPluginConf": {
              "pluginId": "DefaultProductPlugin",
              "label": "productPluginConf-1575378301041",
              "businessId": "5fed19f6-b2e9-4f0d-b2f4-9137d60a4725",
              "version": "1.0.0-SNAPSHOT",
              "priorityOrder": 0,
              "active": true,
              "parameters": [
                {
                  "name": "removeExtension",
                  "type": "BOOLEAN",
                  "value": true,
                  "dynamic": false
                },
                {
                  "name": "extensions",
                  "type": "COLLECTION",
                  "value": [
                    "json"
                  ],
                  "dynamic": false
                },
                {
                  "name": "maxLengthRequired",
                  "type": "BOOLEAN",
                  "value": false,
                  "dynamic": false
                }
              ]
            },
            "generateSipPluginConf": {
              "pluginId": "ReadSIPFromFile",
              "label": "generateSipPluginConf-1575378301041",
              "businessId": "c27d965e-975a-439a-a4aa-e97b7dec6971",
              "version": "1.0.0-SNAPSHOT",
              "priorityOrder": 0,
              "active": true,
              "parameters": []
            },
            "productsStored": true
          }
        }
      ]
    }
  ]
}
```