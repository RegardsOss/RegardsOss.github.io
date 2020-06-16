#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "content" : {
    "id" : 106,
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
    "fileInfos" : [ {
      "id" : 106,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 123,
        "pluginId" : "GlobDiskScanning",
        "label" : "Scan plugin update",
        "businessId" : "be2a4b25-1463-4539-bbd2-b218d4a4851c",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ {
          "name" : "directories",
          "type" : "COLLECTION",
          "value" : [ ],
          "dynamic" : false
        } ]
      },
      "mimeType" : "application/octet-stream",
      "dataType" : "RAWDATA",
      "comment" : "A comment"
    } ],
    "validationPluginConf" : {
      "id" : 120,
      "pluginId" : "DefaultFileValidation",
      "label" : "update : Validation plugin",
      "businessId" : "eed45b1d-031e-4333-9026-da25029ff379",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 121,
      "pluginId" : "DefaultProductPlugin",
      "label" : "update : Product plugin",
      "businessId" : "8a9b575b-ca37-400c-a4a3-c45216f1d4a9",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 122,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "update : SIP generation plugin",
      "businessId" : "4b4c0b5e-4002-4a4a-a723-99eb387861b0",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    }
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/chains"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/chains/106"
  }, {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/106"
  } ]
}
```
