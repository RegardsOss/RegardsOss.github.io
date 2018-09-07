* **Code:** 201 Created

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "content" : {
    "id" : 56,
    "label" : "Processing chain 1",
    "active" : true,
    "mode" : "MANUAL",
    "locked" : false,
    "ingestChain" : "DefaultIngestChain",
    "fileInfos" : [ {
      "id" : 56,
      "mandatory" : true,
      "scanPlugin" : {
        "id" : 70,
        "pluginId" : "GlobDiskScanning",
        "label" : "post : Scan plugin",
        "version" : "1.0.0-SNAPSHOT",
        "priorityOrder" : 0,
        "active" : true,
        "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.GlobDiskScanning",
        "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IScanPlugin" ],
        "parameters" : [ {
          "id" : 58,
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
      "id" : 71,
      "pluginId" : "DefaultFileValidation",
      "label" : "post : Validation plugin",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultFileValidation",
      "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IValidationPlugin" ],
      "parameters" : [ ]
    },
    "productPluginConf" : {
      "id" : 72,
      "pluginId" : "DefaultProductPlugin",
      "label" : "post : Product plugin",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultProductPlugin",
      "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.IProductPlugin" ],
      "parameters" : [ ]
    },
    "generateSipPluginConf" : {
      "id" : 73,
      "pluginId" : "DefaultSIPGeneration",
      "label" : "post : SIP generation plugin",
      "version" : "1.0.0-SNAPSHOT",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.acquisition.service.plugins.DefaultSIPGeneration",
      "interfaceNames" : [ "fr.cnes.regards.modules.acquisition.plugins.ISipGenerationPlugin" ],
      "parameters" : [ ]
    }
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/chains"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/chains/56"
  } ]
}
```
