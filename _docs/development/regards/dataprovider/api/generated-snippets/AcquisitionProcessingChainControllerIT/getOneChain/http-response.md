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
    "id" : 108,
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
      "id" : 108,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 128,
        "pluginId" : "GlobDiskScanning",
        "label" : "first : Scan plugin",
        "businessId" : "3f485837-1ee2-485c-b1a3-2ce4466629bd",
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
      "id" : 129,
      "pluginId" : "DefaultFileValidation",
      "label" : "first : Validation plugin",
      "businessId" : "c6976962-a622-44a2-adce-2bd4f2d0f200",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 130,
      "pluginId" : "DefaultProductPlugin",
      "label" : "first : Product plugin",
      "businessId" : "8da82678-d954-49b5-aa05-b6063e2e267c",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 131,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "first : SIP generation plugin",
      "businessId" : "d25bd604-cb13-4a09-967c-77210d2fc9d4",
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
    "rel" : "self",
    "href" : "http://localhost:8080/chains/108"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/chains/108"
  }, {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/108"
  } ]
}
```
