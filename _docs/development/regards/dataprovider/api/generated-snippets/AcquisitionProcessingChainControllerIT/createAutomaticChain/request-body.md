* **Data params**

```json
 {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "AUTO",
  "locked" : false,
  "periodicity" : 10,
  "ingestChain" : "DefaultIngestChain",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Auto10s : Scan plugin",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
      "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
      "parameters" : [ {
        "name" : "directories",
        "value" : [ ],
        "dynamic" : false,
        "dynamicsValues" : [ ],
        "onlyDynamic" : false
      } ]
    },
    "mimeType" : "application/octet-stream",
    "dataType" : "RAWDATA",
    "comment" : "A comment"
  } ],
  "validationPluginConf" : {
    "pluginId" : "DefaultFileValidation",
    "label" : "Auto10s : Validation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "Auto10s : Product plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "Auto10s : SIP generation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
    "parameters" : [ ]
  }
}
```
