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
      "id" : "ingest",
      "name" : "SIP management module",
      "description" : "SIP submission and management",
      "version" : "1.6.0",
      "author" : "REGARDS",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "resetBeforeImport" : false,
    "configuration" : [ {
      "key" : "fr.cnes.regards.modules.ingest.domain.chain.IngestProcessingChain",
      "value" : {
        "name" : "DefaultProcessingChain",
        "validationPlugin" : {
          "pluginId" : "DefaultSipValidation",
          "label" : "DefaultSIPValidation",
          "businessId" : "bfd5b693-137b-441a-b0bf-8b92ef4c2bed",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "generationPlugin" : {
          "pluginId" : "DefaultSingleAIPGeneration",
          "label" : "DefaultAIPGeneration",
          "businessId" : "b8fd1455-08ae-453e-9152-9c67d2fdb4d4",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        }
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
      "value" : {
        "name" : "active_notifications",
        "description" : "Activate notifications on AIP request",
        "value" : "false",
        "defaultValue" : "false",
        "className" : "java.lang.Boolean"
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
      "value" : {
        "name" : "last_dump_req_date",
        "description" : "Date of last dump request",
        "value" : "\"1970-01-01T00:00:00Z\"",
        "defaultValue" : "\"1970-01-01T00:00:00Z\"",
        "className" : "java.time.OffsetDateTime"
      }
    }, {
      "key" : "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",
      "value" : {
        "name" : "dump_parameters",
        "description" : "Dump parameters",
        "value" : "{\"isActiveModule\":true,\"cronTrigger\":\"0 0 0 1-7 * SUN\",\"dumpLocation\":\"\"}",
        "defaultValue" : "{\"isActiveModule\":true,\"cronTrigger\":\"0 0 0 1-7 * SUN\",\"dumpLocation\":\"\"}",
        "className" : "fr.cnes.regards.framework.modules.dump.domain.DumpParameters"
      }
    } ]
  } ]
}
```
