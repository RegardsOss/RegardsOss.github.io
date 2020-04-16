---
layout: classic-docs
title: Feature Manager configuration API
---

{% include toc.md %}

## Feature Manager configuration

In order to make the configuration simple and easily adjustable, we use the import/export REST API of the microservice.

> Be careful, import will overwrite an existing plugin configuration with same `business id`.
{: .tip .important}

{% include development/api/importexport/import-api.md %}

#### Example of configuration file to import

Value between brackets must be adapted!

```json
{
  "microservice": "rs-fem",
  "modules": [
    {
      "module": {
        "id": "feature",
        "name": "Feature management module",
        "description": "GeoJSON catalog manager",
        "version": "1.0.0", 
        "author": "CSSI",
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
                "value": "{/input}",
              }
            ]
          }
        }
      ]
    }
  ]
}
```

{% include development/api/importexport/export-api.md %}

{% include development/api/importexport/download-api.md %}


