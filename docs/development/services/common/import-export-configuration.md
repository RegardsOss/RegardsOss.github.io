---
title: Import/Export service configuration
sidebar_label: Services configuration
slug: /development/services/common/common-import-export-configuration
---

Many REGARDS microservices provide a REST API to import and export configuration in Json format.

## REST API

### How to

The [Regards REST API concept](../../concepts/05-rest-api.md) describes how REST interfaces must be handled to
submit requests.

:::caution
The easiest way to use the import/export configuration system is to first download the configuration file of the
wanted microservice rather than trying to write it from scratch. The configuration file format is pretty hard to understand
from
scratch.
:::

### Endpoint

| Endpoint                    | Verb | Description                                     |
|-----------------------------|------|-------------------------------------------------|
| /microservice/configuration | POST | Export configuration by providing a json file   |
| /microservice/configuration | GET  | Import configuration by downloading a json file |

:::info
By default these endpoints are only available to project administrators.
:::

### Parameters

For Export, add your file in a multipart request using the name `file`.

```bash title="Example of curl request to import configuration"
curl https://regards.fr/api/v1/rs-dam/microservice/configuration  \
  --form file='@/home/myuser/tmp/rs-dam-configuration.json' \
  -H 'Authorization: Bearer <token>'
```

### Configuration file format

Configuration files have the same format for all microservice.  
It describes the configuration for every **Module** of the microservice.

Here's a simple example of the basic structure of this file :

```json {8-12}
{
  "microservice": "rs-notifier",
  "modules": [
    {
      "module": {
        "id": "notifier"
      },
      "resetBeforeImport": true,
      "configuration": [
        ...
      ]
    }
  ]
}
```

In each module, you have to provide two parameters.

| Parameter         | Type    | Description                                                                                    |
|-------------------|---------|------------------------------------------------------------------------------------------------|
| resetBeforeImport | Boolean | Indicates if the previous module configuration should be deleted before importing the new one. |
| configuration     | Object  | Module specific format configuration                                                           |

:::info
If the **resetBeforeImport** is set to `false`, the microservice will try to merge the previous and new configurations.
:::

The **Configuration** section may contain two common types of configuration  :

- **Settings** : Parameters with custom values
- **Plugins configurations** : Specific format for plugins to define their configuration

A microservice can also provide custom configuration parameters in this configuration file.  
For information on those parameters, please refer to the microservice configuration section of documentation.

#### Settings configuration section

Each setting parameter section start with `key` :

`fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting`

The `value` contains information about the settings with the parameters listed below :

| Parameter                   | Type    | Should be edited | Description                                                             |
|-----------------------------|---------|:----------------:|-------------------------------------------------------------------------|
| name                        | String  |        No        | Name of the setting                                                     |
| description                 | String  |        No        | Simple description of the setting purpose                               |
| value                       | String  |       Yes        | Serialized value of the setting                                         |
| defaultValue                | String  |        No        | Serialized default value of the setting (used if value is not provided) |
| className                   | String  |        No        | Java class name used to deserialize setting value                       |
| containsSensitiveParameters | Boolean |        No        | Indicates if setting value should be encrypted in DataBase              |

```json title="DynamicTenantSetting example"
{
  "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
  "value": {
    "name": "setting_name",
    "description": "setting description",
    "value": "\"value\"",
    "defaultValue": "\"default\"",
    "className": "java.lang.String",
    "containsSensitiveParameters": false
  }
},
```

#### Plugin configuration section

Each setting parameter section start with `key`: 

`fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration`

The `value` contains information about the settings with the parameters listed below :

| Parameter     | Type               | Can be edited	 | Description                                                                                                       |
|---------------|--------------------|:--------------:|-------------------------------------------------------------------------------------------------------------------|
| pluginId      | String             |       No       | Plugin unique identifier                                                                                          |
| businessId    | String             |      Yes       | Configuration unique identifier                                                                                   |
| label         | String             |      Yes       | Configuration label (displayed in admin UI)                                                                       |
| version       | String             |       No       | Configuration version                                                                                             |
| priorityOrder | Integer            |      Yes       | Priority of the configuration. <br/>Can be used by service if there are more than one configuration for a plugin. |
| active        | Boolean            |      Yes       | True to activate the configuration. <br/>If false, service will not be allowed to use this configuration.         |
| parameters    | `List<Parameter\>` |      Yes       | Plugin configuration specific parameters                                                                          |

The **parameters** section contains a list of formated parameters. Parameters depends on the plugin you want to
configure and include :

| Parameter | Type    | Description                                                                                                                                                                            |
|-----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name      | String  | Plugin parameter name                                                                                                                                                                  |
| type      | String  | Plugin parameter `TYPE` can be <br/> `STRING`, `BYTE`, `SHORT`, `INTEGER`, `LONG`, `FLOAT`,<br/> `DOUBLE`, `BOOLEAN`, `MAP`, `COLLECTION`, `POJO`, `PLUGIN` and `REGARDS_ENTITY_MODEL` |
| value     | Object  | Value of the parameter depending on previous type attribute.                                                                                                                           |
| dynamic   | Boolean | Indicates if the parameter value can be provided at plugin runtime or if it is a static configuration value                                                                            |

:::info
If a plugin parameter is configured to be dynamic, then the value will be requested at runtime if the service allows it
In order to know parameters that can be set as dynamic, see the microservice plugins documentation.
:::

Example :

```json
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "DisseminationAckSender",
    "label": "Ack dissemination configuration",
    "businessId": "ack-conf-001",
    "version": "2.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "recipientLabel",
        "type": "STRING",
        "value": "regards",
        "dynamic": false
      },
      {
        "name": "ackRequired",
        "type": "BOOLEAN",
        "value": false,
        "dynamic": false
      }
    ]
  }
}
```

### Response

- **Code:** 201 CREATED
