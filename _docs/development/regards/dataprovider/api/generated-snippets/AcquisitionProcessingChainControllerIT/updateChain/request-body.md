    ***Data params**

```json
    {
  "id" : 106,
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
    "id" : 106,
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Scan plugin update",
      "businessId" : "be2a4b25-1463-4539-bbd2-b218d4a4851c",
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
    "id" : 120,
    "pluginId" : "DefaultFileValidation",
    "label" : "update : Validation plugin",
    "businessId" : "eed45b1d-031e-4333-9026-da25029ff379",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "id" : 121,
    "pluginId" : "DefaultProductPlugin",
    "label" : "update : Product plugin",
    "businessId" : "8a9b575b-ca37-400c-a4a3-c45216f1d4a9",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "id" : 122,
    "pluginId" : "DefaultSIPGeneration",
    "label" : "update : SIP generation plugin",
    "businessId" : "4b4c0b5e-4002-4a4a-a723-99eb387861b0",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  }
}
```
