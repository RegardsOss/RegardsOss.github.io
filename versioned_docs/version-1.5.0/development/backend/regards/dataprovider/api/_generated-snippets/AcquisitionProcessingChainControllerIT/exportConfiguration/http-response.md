#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Content-Disposition:attachment; filename="config-Test application.json"`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "microservice" : "Test application",
  "modules" : [ {
    "module" : {
      "id" : "acquisition",
      "name" : "Acquisition module",
      "description" : "Data driven SIP creation",
      "version" : "0.4.1",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ {
      "key" : "fr.cnes.regards.modules.acquisition.domain.chain.AcquisitionProcessingChain",
      "value" : {
        "label" : "Processing chain 1",
        "active" : true,
        "mode" : "MANUAL",
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
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "post : Scan plugin",
            "businessId" : "7724da69-35d5-43cb-9128-18e7e94710dc",
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
          "pluginId" : "DefaultFileValidation",
          "label" : "post : Validation plugin",
          "businessId" : "ea742dad-8d29-413e-94d9-2fac54494d83",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "post : Product plugin",
          "businessId" : "346cafbb-bd08-4ad5-93f0-8bc56bb45e47",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "post : SIP generation plugin",
          "businessId" : "d76a56b9-c37d-4b2b-aba1-01109a710518",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        }
      }
    } ]
  } ]
}
```
