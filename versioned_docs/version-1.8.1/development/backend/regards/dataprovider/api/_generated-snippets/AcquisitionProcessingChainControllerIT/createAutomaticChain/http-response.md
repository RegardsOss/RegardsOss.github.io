### Response

* **Code:** 201 Created

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "content" : {
    "id" : 59,
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
      "id" : 59,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 82,
        "pluginId" : "GlobDiskScanning",
        "label" : "Auto10s : Scan plugin",
        "businessId" : "9d5a8867-961b-4f00-a1b6-25ade2c94673",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "mimeType" : "application/octet-stream",
      "dataType" : "RAWDATA",
      "comment" : "A comment",
      "scanDirInfo" : [ {
        "id" : 60,
        "scannedDirectory" : "src/resources/doesnotexist"
      } ]
    } ],
    "validationPluginConf" : {
      "id" : 83,
      "pluginId" : "DefaultFileValidation",
      "label" : "Auto10s : Validation plugin",
      "businessId" : "555bf364-94bd-4947-9dfc-d00cec6cd88e",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 84,
      "pluginId" : "DefaultProductPlugin",
      "label" : "Auto10s : Product plugin",
      "businessId" : "368001e3-b37e-4aac-819b-dae4804755bc",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 85,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "Auto10s : SIP generation plugin",
      "businessId" : "716b3451-39b1-4487-af9b-5b16b531ec7a",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productsStored" : true
  },
  "links" : [ ]
}
```
