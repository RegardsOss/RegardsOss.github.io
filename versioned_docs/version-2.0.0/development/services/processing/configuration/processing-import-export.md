---
id: backend-processing-import-export
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/processing/configuration/import-export
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/processing-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

| Configuration type | Available | Description |
| ------------------ | --------- | ----------- |
| Import configuration in json format | True | |
| Export configuration in json format | True | |
| Reset configuration before import | True | |

This configuration can also be imported or exported
through [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

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


The definition of the plugins for the 
`Processing` service and their configuration parameters are available at the 
[following documentation](../plugins/processing-plugins.md).

```json title='rs-processing configuration file example'
{
  "microservice": "rs-processing",
  "modules": [
    {
      "module": {
        "id": "processing",
        "name": "Processing management module",
        "description": "Launching processes on data",
        "version": "1.0.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport":true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "SimpleShellProcessPlugin",
            "label": "Process Order",
            "businessId": "bc866dca-6b5b-4d47-a580-6a1f2976b2cf",
            "version": "1.0.0-SNAPSHOT",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "shellScript",
                "type": "STRING",
                "value": "/input/process-order.sh",
                "dynamic": false
              },
              {
                "name": "cardinality",
                "type": "STRING",
                "value": "ONE_PER_EXECUTION",
                "dynamic": false
              },
              {
                "name": "addMetadata",
                "type": "BOOLEAN",
                "value": true,
                "dynamic": false
              },
              {
                "name": "sizeForecast",
                "type": "STRING",
                "value": "*1",
                "dynamic": false
              },
              {
                "name": "durationForecast",
                "type": "STRING",
                "value": "5min",
                "dynamic": false
              }
            ]
          }
        }
      ]
    }
  ]
}

``