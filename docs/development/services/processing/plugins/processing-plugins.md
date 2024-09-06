---
id: backend-processing-plugins
title: REGARDS processing plugins
sidebar_label: Available plugins
sidebar_position: 4
slug: /development/backend/services/processing/plugins/
---

## Plugins

## Common Process plugins configuration

Configuration parameters are:

| Name                   | Type    | Default Value     | Optional | Description                                                                                                                                                                                                                                                                                                                                                                                     |
|------------------------|---------|-------------------|:--------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| durationForecast       | string  |                   |          | In order to detect executions which have silently stopped working, we need an estimation of the duration the execution will take.<br/>Examples: '10s' for 10 seconds, '5min' for 5 minutes, '4h' for 4 hours, '2d' for 2 days ; '10s/m' for 10 seconds per megabyte of input data ; '4h/g' for 4 hours per gigabyte of input data.                                                              |
| addMetadata            | boolean | `false`           |          | Define if metadata are provided to process.                                                                                                                                                                                                                                                                                                                                                     |
| requiredDataTypes      | string  | `RAWDATA`         |    Y     | This parameter allows changing the product files sent as input for executions. By default, only RAWDATA are sent, but changing this parameter to 'RAWDATA,THUMBNAIL,AIP' for instance would provide RAWDATA, THUMBNAIL and AIP files.                                                                                                                                                           |
| scope                  | string  | `SUBORDER`        |    Y     | This parameter defines how many executions are launched per suborder. The possible values are: `SUBORDER`, `FEATURE`. If the value is SUBORDER, there is only one execution per suborder, allowing to group several features in the same execution. If the value is FEATURE, there is one execution per feature in the suborder, allowing to isolate each feature in its own execution context. |
| cardinality            | string  | `ONE_PER_FEATURE` |    Y     | This parameter defines how many output files are created. The possible values are: `ONE_PER_EXECUTION`, `ONE_PER_FEATURE`, `ONE_PER_INPUT_FILE.                                                                                                                                                                                                                                                 |
| maxFeaturesInInput     | long    | `0`               |    Y     | This parameter allows to limit the number of features given as input. Must be positive or null. Set to 0 for no limit.                                                                                                                                                                                                                                                                          |
| forbidSplitInSuborders | boolean | `false`           |    Y     | If `true`, all the ordrered products will be processed in the same batch.                                                                                                                                                                                                                                                                                                                       |

:::warning
It is not recommended to put the `maxFeaturesInInput` parameter to `0` (no limit) when the parameter 
`forbidSplitInSuborders` is activated to avoid any memory overload.
:::

## Simple Shell Process Plugin 

This plugin allows to launch a shell script through the `Processing` service.

Configuration parameters are :

| Name         | Type   | Default Value | Optional | Description                                                                                                                             |
|--------------|--------|---------------|:--------:|-----------------------------------------------------------------------------------------------------------------------------------------|
| shellScript  | string |               |          | Shell script name to execute or its absolute path.                                                                                      |
| envVariables | string |               |    Y     | List of environment variables needed by the shell script. Format as KEY=VALUE separated by '&', for instance: `KEY1=value1&KEY2=value2` |


```json title='SimpleShellProcessPlugin plugin configuration example'
{
  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",
  "value": {
    "pluginId": "SimpleShellProcessPlugin",
    "label": "{label}",
    "businessId": "{uniqueIdentifier}",
    "version": "1.0.0",
    "priorityOrder": 0,
    "active": true,
    "parameters": [
      {
        "name": "shellScript",
        "type": "STRING",
        "value": "{path to a shell}"
      },
      {
        "name": "requiredDataTypes",
        "type": "STRING",
        "value": "RAWDATA,THUMBNAIL,QUICKLOOK_SD"
      },
      {
        "name": "scope",
        "type": "STRING",
        "value": "FEATURE"
      },
      {
        "name": "cardinality",
        "type": "STRING",
        "value": "ONE_PER_EXECUTION"
      },
      {
        "name": "addMetadata",
        "type": "BOOLEAN",
        "value": true
      },
      {
        "name": "sizeForecast",
        "type": "STRING",
        "value": "*1"
      },
      {
        "name": "durationForecast",
        "type": "STRING",
        "value": "5min"
      }
    ]
  }
}
```
