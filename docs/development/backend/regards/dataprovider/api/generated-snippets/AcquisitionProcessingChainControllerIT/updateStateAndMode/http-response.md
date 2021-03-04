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
    
[ {
  "content" : {
    "id" : 102,
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
      "id" : 102,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 102,
        "pluginId" : "GlobDiskScanning",
        "label" : "update : Scan plugin",
        "businessId" : "f8a70e70-1ae6-4eae-b43b-5de9d3472d43",
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
      "id" : 103,
      "pluginId" : "DefaultFileValidation",
      "label" : "update : Validation plugin",
      "businessId" : "14d8b692-9f35-48b3-b85f-436a8afa5332",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 104,
      "pluginId" : "DefaultProductPlugin",
      "label" : "update : Product plugin",
      "businessId" : "1859842f-a6c5-490e-a275-dfb9a01096d9",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 105,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "update : SIP generation plugin",
      "businessId" : "83e99593-64d0-427c-af90-34c70281012c",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    }
  },
  "links" : [ {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/102"
  } ]
} ]
```
