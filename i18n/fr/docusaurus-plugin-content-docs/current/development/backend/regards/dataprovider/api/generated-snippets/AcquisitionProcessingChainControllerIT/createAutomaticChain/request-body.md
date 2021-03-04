    ***Data params**

```json
    {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "AUTO",
  "locked" : false,
  "periodicity" : "0 30 * * * *",
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
      "label" : "Auto10s : Scan plugin",
      "businessId" : "1ede8062-0e2a-44cd-a349-edf9d6942148",
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
    "label" : "Auto10s : Validation plugin",
    "businessId" : "6a3d8db5-8568-42ca-a741-163e99f0cf1a",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "Auto10s : Product plugin",
    "businessId" : "5792220f-6ac9-41ce-b7e9-39e653456f07",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "Auto10s : SIP generation plugin",
    "businessId" : "2c025cf5-f497-4039-a570-2bdd06af9943",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  }
}
```
