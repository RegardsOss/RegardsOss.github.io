**Data params**

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
  "versioningMode" : "INC_VERSION",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "post : Scan plugin",
      "businessId" : "b9dffb96-ce0b-4d48-ba41-b60e45f8dfff",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "mimeType" : "application/octet-stream",
    "dataType" : "RAWDATA",
    "comment" : "A comment",
    "scanDirInfo" : [ {
      "scannedDirectory" : "src/resources/doesnotexist"
    } ]
  } ],
  "validationPluginConf" : {
    "pluginId" : "DefaultFileValidation",
    "label" : "post : Validation plugin",
    "businessId" : "942712b3-615a-4a02-8756-79e5513b0816",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "post : Product plugin",
    "businessId" : "43e76776-1dfd-4243-bb40-81e5bd84e9e1",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "post : SIP generation plugin",
    "businessId" : "3502be2d-d7e6-4814-9f9d-6951cc7f4cef",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productsStored" : true
}
```
