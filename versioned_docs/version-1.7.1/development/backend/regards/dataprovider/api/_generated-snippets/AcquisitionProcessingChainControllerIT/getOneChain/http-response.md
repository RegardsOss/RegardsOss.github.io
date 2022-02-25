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
    "id" : 58,
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
      "id" : 58,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 78,
        "pluginId" : "GlobDiskScanning",
        "label" : "first : Scan plugin",
        "businessId" : "8239e444-826b-436f-b634-7cbcf6449375",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "mimeType" : "application/octet-stream",
      "dataType" : "RAWDATA",
      "comment" : "A comment",
      "scanDirInfo" : [ {
        "id" : 59,
        "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
      } ]
    } ],
    "validationPluginConf" : {
      "id" : 79,
      "pluginId" : "DefaultFileValidation",
      "label" : "first : Validation plugin",
      "businessId" : "df4dba35-ba3f-468c-b069-e4885fcea72c",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 80,
      "pluginId" : "DefaultProductPlugin",
      "label" : "first : Product plugin",
      "businessId" : "4503996c-15b8-4737-abfb-07e5363a1d49",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 81,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "first : SIP generation plugin",
      "businessId" : "3db72bfc-2a63-404b-b1dd-8375322c74e8",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productsStored" : true
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/chains/58"
  } ]
}
```
