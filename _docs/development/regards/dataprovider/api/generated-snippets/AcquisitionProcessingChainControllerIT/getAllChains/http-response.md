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
      "id" : 3,
      "label" : "Processing chain 1",
      "active" : true,
      "mode" : "MANUAL",
      "locked" : false,
      "ingestChain" : "DefaultIngestChain",
      "fileInfos" : [ {
        "id" : 3,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 10,
          "pluginId" : "GlobDiskScanning",
          "label" : "one : Scan plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
          "parameters" : [ {
            "id" : 4,
            "name" : "directories",
            "value" : [ ],
            "dynamic" : false,
            "dynamicsValues" : [ ],
            "onlyDynamic" : false
          } ]
        },
        "mimeType" : "application/octet-stream",
        "dataType" : "RAWDATA",
        "comment" : "A comment"
      } ],
      "validationPluginConf" : {
        "id" : 11,
        "pluginId" : "DefaultFileValidation",
        "label" : "one : Validation plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 12,
        "pluginId" : "DefaultProductPlugin",
        "label" : "one : Product plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 13,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "one : SIP generation plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
        "parameters" : [ ]
      },
      "generationRetryEnabled" : false
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/chains"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/chains/3"
    } ]
  }, {
    "content" : {
      "id" : 4,
      "label" : "Processing chain 1",
      "active" : true,
      "mode" : "MANUAL",
      "locked" : false,
      "ingestChain" : "DefaultIngestChain",
      "fileInfos" : [ {
        "id" : 4,
        "mandatory" : true,
        "scanPlugin" : {
          "id" : 14,
          "pluginId" : "GlobDiskScanning",
          "label" : "two : Scan plugin",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
          "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
          "parameters" : [ {
            "id" : 5,
            "name" : "directories",
            "value" : [ ],
            "dynamic" : false,
            "dynamicsValues" : [ ],
            "onlyDynamic" : false
          } ]
        },
        "mimeType" : "application/octet-stream",
        "dataType" : "RAWDATA",
        "comment" : "A comment"
      } ],
      "validationPluginConf" : {
        "id" : 15,
        "pluginId" : "DefaultFileValidation",
        "label" : "two : Validation plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
        "parameters" : [ ]
      },
      "productPluginConf" : {
        "id" : 16,
        "pluginId" : "DefaultProductPlugin",
        "label" : "two : Product plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
        "parameters" : [ ]
      },
      "generateSipPluginConf" : {
        "id" : 17,
        "pluginId" : "DefaultSIPGeneration",
        "label" : "two : SIP generation plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
        "parameters" : [ ]
      },
      "generationRetryEnabled" : false
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/chains"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/chains/4"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/chains?page=0&size=10&sort=id,asc"
  } ]
}
```
