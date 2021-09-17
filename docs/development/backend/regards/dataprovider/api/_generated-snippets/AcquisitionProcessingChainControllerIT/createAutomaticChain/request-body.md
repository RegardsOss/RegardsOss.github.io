**Data params**

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
  "versioningMode" : "INC_VERSION",
  "fileInfos" : [ {
    "mandatory" : true,
    "scanPlugin" : {
      "pluginId" : "GlobDiskScanning",
      "label" : "Auto10s : Scan plugin",
      "businessId" : "9d5a8867-961b-4f00-a1b6-25ade2c94673",
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
    "label" : "Auto10s : Validation plugin",
    "businessId" : "555bf364-94bd-4947-9dfc-d00cec6cd88e",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productPluginConf" : {
    "pluginId" : "DefaultProductPlugin",
    "label" : "Auto10s : Product plugin",
    "businessId" : "368001e3-b37e-4aac-819b-dae4804755bc",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "generateSipPluginConf" : {
    "pluginId" : "DefaultSIPGeneration",
    "label" : "Auto10s : SIP generation plugin",
    "businessId" : "716b3451-39b1-4487-af9b-5b16b531ec7a",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ ]
  },
  "productsStored" : true
}
```
