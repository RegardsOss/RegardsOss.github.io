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
    "id" : 57,
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
      "id" : 57,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 74,
        "pluginId" : "GlobDiskScanning",
        "label" : "post : Scan plugin",
        "businessId" : "b9dffb96-ce0b-4d48-ba41-b60e45f8dfff",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "mimeType" : "application/octet-stream",
      "dataType" : "RAWDATA",
      "comment" : "A comment",
      "scanDirInfo" : [ {
        "id" : 58,
        "scannedDirectory" : "src/resources/doesnotexist"
      } ]
    } ],
    "validationPluginConf" : {
      "id" : 75,
      "pluginId" : "DefaultFileValidation",
      "label" : "post : Validation plugin",
      "businessId" : "942712b3-615a-4a02-8756-79e5513b0816",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 76,
      "pluginId" : "DefaultProductPlugin",
      "label" : "post : Product plugin",
      "businessId" : "43e76776-1dfd-4243-bb40-81e5bd84e9e1",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 77,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "post : SIP generation plugin",
      "businessId" : "3502be2d-d7e6-4814-9f9d-6951cc7f4cef",
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
