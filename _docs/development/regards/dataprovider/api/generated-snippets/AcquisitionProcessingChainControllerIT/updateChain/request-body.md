    ***Data params**

        ```json
    {
  "id" : 5,
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "MANUAL",
  "locked" : false,
  "ingestChain" : "DefaultIngestChain",
  "fileInfos" : [ {
    "id" : 5,
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Scan plugin update",
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
    "id" : 19,
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
    "id" : 20,
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
    "id" : 21,
    "pluginId" : "DefaultSIPGeneration",
    "label" : "update : SIP generation plugin",
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
