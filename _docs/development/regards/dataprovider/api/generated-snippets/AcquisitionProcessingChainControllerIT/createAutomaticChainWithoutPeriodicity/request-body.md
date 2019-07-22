    ***Data params**

```json
    {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "AUTO",
  "locked" : false,
  "ingestChain" : "DefaultIngestChain",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "AutoError : Scan plugin",
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
    "label" : "AutoError : Validation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "AutoError : Product plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "AutoError : SIP generation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
    "parameters" : [ ]
  },
  "generationRetryEnabled" : false
}
```
