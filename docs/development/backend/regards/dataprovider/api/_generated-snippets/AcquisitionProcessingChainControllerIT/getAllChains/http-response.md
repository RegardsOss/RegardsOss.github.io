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
  "metadata" : {
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 54,
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
        "id" : 54,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 61,
          "pluginId" : "GlobDiskScanning",
          "label" : "one : Scan plugin",
          "businessId" : "9eba938e-8b3c-45a2-896c-6c583bd8b296",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "mimeType" : "application/octet-stream",
        "dataType" : "RAWDATA",
        "comment" : "A comment",
        "scanDirInfo" : [ {
          "id" : 54,
          "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
        } ]
      } ],
      "validationPluginConf" : {
        "id" : 62,
        "pluginId" : "DefaultFileValidation",
        "label" : "one : Validation plugin",
        "businessId" : "de8c425a-14d9-4d66-87d1-42424095296e",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 63,
        "pluginId" : "DefaultProductPlugin",
        "label" : "one : Product plugin",
        "businessId" : "5e4666ea-4f4f-447b-aada-1687ca563ad4",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 64,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "one : SIP generation plugin",
        "businessId" : "b3cdcfb1-1700-44ab-8bb5-e7e8300523b7",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productsStored" : true
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/chains"
    } ]
  }, {
    "content" : {
      "id" : 55,
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
        "id" : 55,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 65,
          "pluginId" : "GlobDiskScanning",
          "label" : "two : Scan plugin",
          "businessId" : "16188051-3e9b-4834-819f-3a2487a4e389",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "mimeType" : "application/octet-stream",
        "dataType" : "RAWDATA",
        "comment" : "A comment",
        "scanDirInfo" : [ {
          "id" : 55,
          "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
        } ]
      } ],
      "validationPluginConf" : {
        "id" : 66,
        "pluginId" : "DefaultFileValidation",
        "label" : "two : Validation plugin",
        "businessId" : "dc17408b-097c-48ec-911a-bd7beec8f48e",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 67,
        "pluginId" : "DefaultProductPlugin",
        "label" : "two : Product plugin",
        "businessId" : "f62558c7-7243-4037-816d-2aef7942cd8f",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 68,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "two : SIP generation plugin",
        "businessId" : "69058bb6-383a-4a83-a290-856db08fffed",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productsStored" : true
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/chains"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/chains?page=0&size=10&sort=id,asc"
  } ]
}
```
