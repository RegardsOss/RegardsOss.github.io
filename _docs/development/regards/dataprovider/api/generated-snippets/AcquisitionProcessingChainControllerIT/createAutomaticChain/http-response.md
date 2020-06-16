#### Request

* **Code:** 201 Created

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
    "id" : 109,
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
    "fileInfos" : [ {
      "id" : 109,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 132,
        "pluginId" : "GlobDiskScanning",
        "label" : "Auto10s : Scan plugin",
        "businessId" : "1ede8062-0e2a-44cd-a349-edf9d6942148",
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
      "id" : 133,
      "pluginId" : "DefaultFileValidation",
      "label" : "Auto10s : Validation plugin",
      "businessId" : "6a3d8db5-8568-42ca-a741-163e99f0cf1a",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 134,
      "pluginId" : "DefaultProductPlugin",
      "label" : "Auto10s : Product plugin",
      "businessId" : "5792220f-6ac9-41ce-b7e9-39e653456f07",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 135,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "Auto10s : SIP generation plugin",
      "businessId" : "2c025cf5-f497-4039-a570-2bdd06af9943",
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
    "href" : "http://localhost:8080/chains/109"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/chains/109"
  }, {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/109"
  } ]
}
```
