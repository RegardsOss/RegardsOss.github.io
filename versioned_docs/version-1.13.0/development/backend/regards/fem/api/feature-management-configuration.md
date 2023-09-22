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

### Import configuration

### Request

**URL**

`/microservice/configuration`

**URL template**

`/microservice/configuration`

**Method**

`POST`

**Headers**

`Authorization:Bearer {token}`  
`Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm`  
`Accept:application/json`

**Data params**

Import your configuration file in multipart request using name `file`.

### Response

- **Code:** 201 CREATED

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

### Export configuration

### Request

**URL**

`/microservice/configuration`

**URL template**

`/microservice/configuration`

**Method**

`GET`

**Headers**

`Authorization:Bearer {token}`  
`Content-Type:application/json;charset=UTF-8`  
`Accept:application/json`

**Data params**

None

### Response

- **Code:** 200 OK

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json`  
`Content-Disposition:attachment; filename="config-Test application.json"`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`

**Content:**

Template :

```json
{
  "microservice": "{microservice name}",
  "modules": [
    {
      "module": {
        "id": "{module id}",
        "name": "{module name}",
        "description": "{module description}",
        "version": "{module version}",
        "author": "{module author}",
        "legalOwner": "{module owner}",
        "documentation": "{module docu url}"
      },
      "configuration": [
        {
          "key": "{fully qualified class name}",
          "value": "{json}"
        }
      ]
    }
  ]
}
```
### Download configuration

To get configuration as a link, simply pass token in URL as follow :

**URL**

`/microservice/configuration?token={bearer}`

**Method**

`GET`
