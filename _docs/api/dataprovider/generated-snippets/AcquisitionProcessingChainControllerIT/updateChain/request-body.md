* **Data params**

```json
 {
  "id" : 4,
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "MANUAL",
  "locked" : false,
  "ingestChain" : "DefaultIngestChain",
  "fileInfos" : [ {
    "id" : 4,
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Scan plugin update",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
      "interfaceNames" : [ ],
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
    "id" : 15,
    "pluginId" : "DefaultFileValidation",
    "label" : "update : Validation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "id" : 16,
    "pluginId" : "DefaultProductPlugin",
    "label" : "update : Product plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "id" : 17,
    "pluginId" : "DefaultSIPGeneration",
    "label" : "update : SIP generation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
    "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
    "parameters" : [ ]
  }
}
```
