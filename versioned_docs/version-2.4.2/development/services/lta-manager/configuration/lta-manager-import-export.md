---
title: Configuration Importation/Exportation
sidebar_label: Importation/Exportation
slug: /development/backend/services/lta-manager/configuration/import-export
sidebar_position: 1
---

Microservices settings regroup a set of settings that are specific
by [tenant](/docs/development/concepts/03-multitenant.md) and stored in the microservice database.

## Import/Export API

To configure `rs-lta-manager` settings for a specific tenant, you need to follow the [generic Import/Export service
configuration guide](../../common/import-export-configuration.md), it will help you understand the expected JSON
file payload that you can send to the
[import configuration endpoint](../api-guides/rest/lta-manager-api-swagger.mdx#tag/module-manager-controller/operation/importConfiguration).

This configuration can also be imported or exported
through [administrator UI](/docs/user-documentation/2-project-configuration/microservices.md).

## Configurable parameters

Dynamic settings for `rs-lta-manager` microservice are :

| Name                        | Type                             | Default Value    | Description                                                                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------|----------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| success_expiration_in_hours | Integer                          | `24`             | The lifetime of successful requests in hours.<br/> After a successfull LTA requests submission, REGARDS keeps requests in database. This setting precise how long these sucessfull request are kept before be permanently deleted. Only LTA request are deleted. OAIS product created stay alive as long as they are not deleted from OAIS service (See Ingest microservice)                                               |
| storage                     | String                           | `LTA`            | The storage location name. <br/>Storage location is add to all generated OAIS requests, to specify where files has to be stored. This location can exists in storage service (See Storage microservice), or virtual storage (See Ingest microservice)                                                                                                                                                                      |
| datatypes                   | `Map<String, DatatypeParameter>` | `{}` (empty map) | The datatype of incoming requests description.<br/> Associate a datatype (a simple label) to a storage path (path inside storage configured in another setting) and a REGARDS model (to validate input data). Multiple datatypes can be indicated in configuration. Datatype must be indicated in LTA request payload, to link request to configuration.<br/> None request can be managed by LTA Manager without datatypes |

## Example

```json title='rs-lta-manager configuration example'
{
  "microservice": "rs-lta-manager",
  "modules": [
    {
      "module": {
        "id": "ltamanager",
        "name": "Lta Manager module",
        "description": "Long term archival system. Handles complete products containing files and metadata.",
        "version": "1.12.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "success_expiration_in_hours",
            "description": "The lifetime of successful requests in hours.",
            "value": "24",
            "defaultValue": "24",
            "className": "java.lang.Integer",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "storage",
            "description": "The storage location name.",
            "value": "\"LTA\"",
            "defaultValue": "\"LTA\"",
            "className": "java.lang.String",
            "containsSensitiveParameters": false
          }
        },
        {
          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
          "value": {
            "name": "datatypes",
            "description": "The datatype of incoming requests.",
            "value": "{\"LtaProduct\":{\"model\":\"LtaProductModel\",\"storePath\":\"//${YEAR}/${MONTH}/${DAY}/${PROPERTY(name)}/\"}}",
            "defaultValue": "{}",
            "className": "java.util.HashMap",
            "containsSensitiveParameters": false
          }
        }
      ]
    }
  ]
}
```