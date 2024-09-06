---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
sidebar_position: 1
slug: /development/backend/services/fem/configuration/import-export
---

Microservices settings regroup a set of settings that are specific by [tenant](../../../concepts/03-multitenant.md)
and stored in the microservice database.

## Import/Export API

To configure some microservice settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/rs-fem-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through the [administrator UI](../../../../user-documentation/2-project-configuration/microservices.md).

To configure **rs-fem** settings, send a `POST` request to import configuration file in JSON format  (
see [REST API documentation](../api-guides/rest/rs-fem-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration))
for each setting that needs to be set.

## Configurable parameters

Two main features can be managed through this configuration:
* Activate the **notifications** for feature requests
* Activate and configure **dumps** for products

The parameters that can be configured this way are the following :

| Name                 | Type           | Default value | Description                                                     |
|----------------------|----------------|---------------|-----------------------------------------------------------------|
| active_notifications | boolean        | `false`       | If `true`, notifications will be activated on feature requests. |
| dump_parameters      | DumpParameters |               | Dump configuration                                              |
| last_dump_req_date   | date           | Unix epoch    | Date of last dump request                                       |

With DumpParameters containing the following parameters:

| Name           | Type    | Default value      | Description                           |
|----------------|---------|--------------------|---------------------------------------|
| isActiveModule | boolean | `true`             | If `true`, dump will be activated     |
| cronTrigger    | string  | `0 0 0 1-7 * SUN"` | Cron defining the dump frequency      |
| dumpLocation   | string  | `""`               | Location where to save the dump files |

## Example

```bash
curl https://regards.com/api/v1/rs-fem/microservice/configuration --data "@rs-fem-config.json" \
 -H "Authorization: Bearer <token>" \
 -H "Content-Type: application/json"
```

```json title='Content of file rs-fem-config.json'
{
  "microservice": "rs-fem",
  "modules": [
    {
      "module": {
        "id": "feature",
        "name": "Feature management module",
        "description": "GeoJSON catalog manager",
        "version": "1.0.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "active_notifications",
            "description": "Activate notifications on feature request",
            "value": "true",
            "defaultValue": "true",
            "className": "java.lang.Boolean",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "last_dump_req_date",
            "description": "Date of last dump request",
            "value": "\"2024-08-04T00:00:00.036836Z\"",
            "defaultValue": "\"1970-01-01T00:00:00Z\"",
            "className": "java.time.OffsetDateTime",
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
        }
      ]
    }
  ]
}

```
