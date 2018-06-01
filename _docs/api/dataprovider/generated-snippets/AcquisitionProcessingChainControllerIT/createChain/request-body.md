* **Data params**

```json
 {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "MANUAL",
  "locked" : false,
  "ingestChain" : "DefaultIngestChain",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "post : Scan plugin",
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
    "pluginId" : "DefaultFileValidation",
    "label" : "post : Validation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
    "interfaceNames" : [ ],
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "post : Product plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
    "interfaceNames" : [ ],
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "post : SIP generation plugin",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
    "interfaceNames" : [ ],
    "parameters" : [ ]
  }
}
```
