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
    
{
  "content" : {
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
        "id" : 73,
        "pluginId" : "GlobDiskScanning",
        "label" : "Scan plugin update",
        "businessId" : "0b74863d-f422-49af-a3b9-cb35463de5bf",
        "version" : "1.0.0-SNAPSHOT",
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
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/chains/56"
  } ]
}
```
