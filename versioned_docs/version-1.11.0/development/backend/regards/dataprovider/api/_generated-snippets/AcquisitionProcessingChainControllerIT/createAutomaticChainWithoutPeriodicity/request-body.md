**Data params**

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
  "versioningMode" : "INC_VERSION",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "AutoError : Scan plugin",
      "businessId" : "c42b009f-49de-41b7-ada9-025d8a2813b7",
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
    "label" : "AutoError : Validation plugin",
    "businessId" : "c18624cd-005d-4182-b72c-e9e2f907c3c0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "AutoError : Product plugin",
    "businessId" : "e3d2eb10-82ac-4cd4-a7f4-823e89bdcaa3",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "AutoError : SIP generation plugin",
    "businessId" : "28c7f61c-8b8e-4eca-91a1-2309cbd7122f",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productsStored" : true
}
```
