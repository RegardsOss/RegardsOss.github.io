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
    "id" : 107,
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
      "id" : 107,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 124,
        "pluginId" : "GlobDiskScanning",
        "label" : "post : Scan plugin",
        "businessId" : "a8371d92-8bdf-4a8d-affa-41036a80457e",
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
      "id" : 125,
      "pluginId" : "DefaultFileValidation",
      "label" : "post : Validation plugin",
      "businessId" : "f17562b7-42f5-4c5c-b5ef-a525724b1534",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 126,
      "pluginId" : "DefaultProductPlugin",
      "label" : "post : Product plugin",
      "businessId" : "95240aec-f694-4848-8c16-2f6306625daf",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 127,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "post : SIP generation plugin",
      "businessId" : "3e26bb35-bb74-4a80-8712-4018ee196054",
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
    "href" : "http://localhost:8080/chains/107"
  }, {
    "rel" : "patch",
    "href" : "http://localhost:8080/chains/107"
  } ]
}
```
