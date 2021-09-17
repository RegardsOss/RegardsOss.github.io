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
`Content-Type:application/json`  
`Content-Disposition:attachment; filename="config-rs-test.json"`  

**Content:**

```json
    
{
  "microservice" : "rs-test",
  "modules" : [ {
    "module" : {
      "id" : "acquisition",
      "name" : "Acquisition module",
      "description" : "Data driven SIP creation",
      "version" : "1.6.0",
      "author" : "REGARDS",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "resetBeforeImport" : false,
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
        "versioningMode" : "INC_VERSION",
        "fileInfos" : [ {
          "mandatory" : true,
          "scanPlugin" : {
            "pluginId" : "GlobDiskScanning",
            "label" : "post : Scan plugin",
            "businessId" : "86d3690f-17da-46b3-9ea1-328a2d4ae6ee",
            "version" : "1.0.0-SNAPSHOT",
            "priorityOrder" : 0,
            "active" : true,
            "parameters" : [ ]
          },
          "mimeType" : "application/octet-stream",
          "dataType" : "RAWDATA",
          "comment" : "A comment",
          "scanDirInfo" : [ {
            "scannedDirectory" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/resources/doesnotexist"
          } ]
        } ],
        "validationPluginConf" : {
          "pluginId" : "DefaultFileValidation",
          "label" : "post : Validation plugin",
          "businessId" : "643815db-642e-4863-936c-36a0192081d6",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "productPluginConf" : {
          "pluginId" : "DefaultProductPlugin",
          "label" : "post : Product plugin",
          "businessId" : "dab433e6-cd44-46d2-af72-879599a32fd7",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "generateSipPluginConf" : {
          "pluginId" : "DefaultSIPGeneration",
          "label" : "post : SIP generation plugin",
          "businessId" : "e4d2fcde-7145-4b6c-91e7-0ebe74f24e0c",
          "version" : "1.0.0-SNAPSHOT",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "productsStored" : true
      }
    } ]
  } ]
}
```
