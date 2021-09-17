### Response

* **Code:** 200 OK

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
    
[ {
  "content" : {
    "id" : 52,
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
      "id" : 52,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 52,
        "pluginId" : "GlobDiskScanning",
        "label" : "update : Scan plugin",
        "businessId" : "3dad6767-d200-40c4-af70-de7411a681a1",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "mimeType" : "application/octet-stream",
      "dataType" : "RAWDATA",
      "comment" : "A comment",
      "scanDirInfo" : [ {
        "id" : 52,
        "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
      } ]
    } ],
    "validationPluginConf" : {
      "id" : 53,
      "pluginId" : "DefaultFileValidation",
      "label" : "update : Validation plugin",
      "businessId" : "50e86f03-2649-4032-ad9e-e347a9e8d77c",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 54,
      "pluginId" : "DefaultProductPlugin",
      "label" : "update : Product plugin",
      "businessId" : "113c2556-717a-42b9-a1d7-9ebc69d2c2c6",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 55,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "update : SIP generation plugin",
      "businessId" : "4fa6a358-063b-476a-bbd2-3f103f75c293",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productsStored" : true
  },
  "links" : [ {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/52"
  } ]
} ]
```
