---
id: backend-fem-configuration-api
title: Feature Manager configuration API
sidebar_label: Feature Manager configuration
slug: /development/backend/services/fem/api/configuration/
---

## Feature Manager configuration

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

:::danger
Be careful, import will overwrite an existing plugin configuration with same `business id`.
:::

{@import importexport/import-api.md}

#### Example of configuration file to import

Value between brackets must be adapted!

```json
{
  "microservice": "rs-fem",
  "modules": [
    {
      "module": {
        "id": "featureprovider",
        "name": "Feature provider management module",
        "description": "GeoJSON catalog provider",
        "version": "1.4.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
          "value": {
            "pluginId": "DataTypeFeatureFactoryPlugin",
            "label": "{My project feature factory}",
            "businessId": "{MyProjectFeatureFactory}",
            "priorityOrder": 0,
            "active": true,
            "parameters": [
              {
                "name": "model",
                "type": "STRING",
                "value": "{modelName}"
              },
              {
                "name": "configDirectory",
                "type": "STRING",
                "value": "{/input}"
              }
            ]
          }
        }
      ]
    },
    {
      "module": {
        "id": "feature",
        "name": "Feature management module",
        "description": "GeoJSON catalog manager",
        "version": "1.4.0",
        "author": "REGARDS",
        "legalOwner": "CNES",
        "documentation": "https://github.com/RegardsOss"
      },
      "resetBeforeImport": true,
      "configuration": [
        {
          "key": "fr.cnes.regards.framework.modules.dump.domain.DumpSettings",
          "value": {
            "id": 0,
            "activeModule": true,
            "cronTrigger": "0 0 0 1-7 * SUN"
          }
        },
        {
          "key": "fr.cnes.regards.modules.feature.domain.settings.FeatureNotificationSettings",
          "value": {
            "id": 0,
            "activeNotification": true
          }
        }
      ]
    }
  ]
}
```

{@import importexport/export-api.md}

{@import importexport/download-api.md}
