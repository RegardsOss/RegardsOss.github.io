    ***Data params**

```json
    {
  "label" : "Processing chain 1",
  "active" : true,
  "mode" : "AUTO",
  "locked" : false,
  "periodicity" : "",
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
      "label" : "AutoError : Scan plugin",
      "businessId" : "aaebe38b-f841-4554-a99c-31ed87a6b6d5",
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
    "label" : "AutoError : Validation plugin",
    "businessId" : "7624205e-212a-4c46-a91f-14289d6e8863",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "AutoError : Product plugin",
    "businessId" : "5a1708bf-0937-4d8c-b787-d9f474804118",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "AutoError : SIP generation plugin",
    "businessId" : "b25c452d-5e01-444e-a013-b160f8963f19",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  }
}
```
