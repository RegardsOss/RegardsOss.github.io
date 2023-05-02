**Data params**

```json
{
  "id" : 56,
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
    "id" : 56,
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Scan plugin update",
      "businessId" : "0b74863d-f422-49af-a3b9-cb35463de5bf",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "mimeType" : "application/octet-stream",
    "dataType" : "RAWDATA",
    "comment" : "A comment",
    "scanDirInfo" : [ {
      "scannedDirectory" : "src/resources/fake",
      "lastModificationDate" : "2021-09-16T19:38:12.858Z"
    }, {
      "id" : 56,
      "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
    } ]
  } ],
  "validationPluginConf" : {
    "id" : 70,
    "pluginId" : "DefaultFileValidation",
    "label" : "update : Validation plugin",
    "businessId" : "56aed7ab-1728-4d5a-8cba-6aaef8976d00",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "id" : 71,
    "pluginId" : "DefaultProductPlugin",
    "label" : "update : Product plugin",
    "businessId" : "1594688f-4574-4f71-a3bf-4402e498990d",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "id" : 72,
    "pluginId" : "DefaultSIPGeneration",
    "label" : "update : SIP generation plugin",
    "businessId" : "8a9e525e-b852-47ee-a8c0-adb0b24565a0",
    "version" : "1.0.0-SNAPSHOT",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productsStored" : true
}
```
