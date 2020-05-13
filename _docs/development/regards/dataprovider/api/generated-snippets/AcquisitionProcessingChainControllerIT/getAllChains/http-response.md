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
  "metadata" : {
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 104,
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
        "id" : 104,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 111,
          "pluginId" : "GlobDiskScanning",
          "label" : "one : Scan plugin",
          "businessId" : "c6902792-c2c7-4130-92e4-5e8fe5737678",
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
        "id" : 112,
        "pluginId" : "DefaultFileValidation",
        "label" : "one : Validation plugin",
        "businessId" : "fde2cb70-7c53-4d3e-9da8-3b50fbd5ae1c",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 113,
        "pluginId" : "DefaultProductPlugin",
        "label" : "one : Product plugin",
        "businessId" : "28af0932-944b-445b-bd5e-389bfefd18b6",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 114,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "one : SIP generation plugin",
        "businessId" : "a8880540-b938-4d42-9031-ee4e245ccebf",
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
      "href" : "http://localhost:8080/chains/104"
    }, {
      "rel" : "patch",
      "href" : "http://localhost:8080/chains/104"
    } ]
  }, {
    "content" : {
      "id" : 105,
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
        "id" : 105,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 115,
          "pluginId" : "GlobDiskScanning",
          "label" : "two : Scan plugin",
          "businessId" : "46bf2d07-e540-44d1-ba3d-aa9fd5b49237",
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
        "id" : 116,
        "pluginId" : "DefaultFileValidation",
        "label" : "two : Validation plugin",
        "businessId" : "a08118a2-e194-4a0b-9621-61b54963f6ab",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 117,
        "pluginId" : "DefaultProductPlugin",
        "label" : "two : Product plugin",
        "businessId" : "e5123b90-360d-4ca8-8120-6b7448fd880d",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 118,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "two : SIP generation plugin",
        "businessId" : "88ca1c7f-2932-4d97-8146-e154aa4f9bce",
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
      "href" : "http://localhost:8080/chains/105"
    }, {
      "rel" : "patch",
      "href" : "http://localhost:8080/chains/105"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/chains?page=0&size=10&sort=id,asc"
  } ]
}
```
