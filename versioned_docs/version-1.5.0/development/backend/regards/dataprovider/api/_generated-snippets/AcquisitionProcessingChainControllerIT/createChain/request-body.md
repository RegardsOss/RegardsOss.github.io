    ***Data params**

```json
    {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "MANUAL",
  "locked" : false,
  "periodicity" : "0 * * * * *",
  "ingestChain" : "DefaultIngestChain",
  "storages" : [ {
    "pluginBusinessId" : "AWS",
    "storePath" : "/path/to/file",
    "targetTypes" : [ ]
  }, {
    "pluginBusinessId" : "HELLO",
    "storePath" : "/other/path/to/file",
    "targetTypes" : [ ]
  } ],
  "categories" : [ ],
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "post : Scan plugin",
      "businessId" : "a8371d92-8bdf-4a8d-affa-41036a80457e",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ {
        "name" : "directories",
        "type" : "COLLECTION",
        "value" : [ ],
        "dynamic" : false
      } ]
    },
    "mimeType" : "application/octet-stream",
    "dataType" : "RAWDATA",
    "comment" : "A comment"
  } ],
  "validationPluginConf" : {
    "pluginId" : "DefaultFileValidation",
    "label" : "post : Validation plugin",
    "businessId" : "f17562b7-42f5-4c5c-b5ef-a525724b1534",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "post : Product plugin",
    "businessId" : "95240aec-f694-4848-8c16-2f6306625daf",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "post : SIP generation plugin",
    "businessId" : "3e26bb35-bb74-4a80-8712-4018ee196054",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  }
}
```
