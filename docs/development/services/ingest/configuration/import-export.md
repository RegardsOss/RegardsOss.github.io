---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/ingest/configuration/import-export
sidebar_position: 1
---


Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

## Configurable parameters

| Name                  | Type    | Default value                                                                                    | Description                                                                                                                                                   |
|-----------------------|---------|--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| active_notifications  | Boolean | True                                                                             <br/>           | Enable or disable notifications sent to [notifier microservice](../../../services/notifier/overview.md) after each action on a product CREATION, DELETION, .. |
| sip_body_time_to_live | Integer | 7                                                                                                | After this amount of days all SIP in database are cleared. This is done to lower the volume the database size.                                                |
| dump_parameters       | Object  | `{<br/>"isActiveModule":true,<br/>"cronTrigger":"0 0 0 1-7 * SUN",<br/>"dumpLocation":""<br/>}"` | Dump parameters.                                                                                                                                              |
| last_dump_req_date    | Date    |                                                                                                  | Date of the last dump of AIP done                                                                                                                             |

## Ingest chains

In the configuration file you can import/export ingest chains configuration. To do so you have to define all parameters
of an ingest chain with all the associated plugins.

| Name                     | Type   | Description                                           |
|--------------------------|--------|-------------------------------------------------------|
| name                     | String | Unique label of the ingest chain                      |
| validationPlugin         | Object | Selected validation plugin configuration              |
| preProcessingPlugin      | Object | Selected pre processing plugin configuration          |
| generationPlugin         | Object | Selected product name generation plugin configuration |
| aipStorageMetadataPlugin | Object | Selected aip storage metadata plugin configuration    |
| tagPlugin                | Object | Selected AIP tag  plugin configuration                |
| postProcessingPlugin     | Object | Selected post processing plugin configuration         |

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

## Example

```json title='rs-ingest configuration file example'
{
  "microservice": "rs-ingest",
  "modules": [
    {
      "module": {
        "id": "ingest",
        "name": "SIP management module",
        "description": "SIP submission and management",
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
            "name": "active_notifications",
            "description": "Activate notifications on AIP request",
            "value": "\"true\"",
            "defaultValue": "false",
            "className": "java.lang.Boolean",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "last_dump_req_date",
            "description": "Date of last dump request",
            "value": "\"2024-08-04T00:00:00.026113Z\"",
            "defaultValue": "\"1970-01-01T00:00:00Z\"",
            "className": "java.time.OffsetDateTime",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "sip_body_time_to_live",
            "description": "Life time of a SIP, in days. SIP will be automatically removed at the term.",
            "value": "7",
            "defaultValue": "7",
            "className": "java.lang.Integer",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "dump_parameters",
            "description": "Dump parameters",
            "value": "{\"isActiveModule\":true,\"cronTrigger\":\"0 0 0 1-7 * SUN\",\"dumpLocation\":\"\"}",
            "defaultValue": "{\"isActiveModule\":true,\"cronTrigger\":\"0 0 0 1-7 * SUN\",\"dumpLocation\":\"\"}",
            "className": "fr.cnes.regards.framework.modules.dump.domain.DumpParameters",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.modules.ingest.domain.chain.IngestProcessingChain",
          "value": {
            "name": "DefaultProcessingChain",
            "validationPlugin": {
              "pluginId": "DefaultSipValidation",
              "label": "DefaultSIPValidation",
              "businessId": "c7f13ec9-5349-4339-960c-143278a3e8ff",
              "version": "1.0.0",
              "priorityOrder": 0,
              "active": true,
              "parameters": []
            },
            "generationPlugin": {
              "pluginId": "DefaultSingleAIPGeneration",
              "label": "DefaultAIPGeneration",
              "businessId": "9c115403-9f70-44b9-abc3-d4630a4a8a9d",
              "version": "1.0.0",
              "priorityOrder": 0,
              "active": true,
              "parameters": []
            }
          }
        }
      ]
    }
  ]
}
```