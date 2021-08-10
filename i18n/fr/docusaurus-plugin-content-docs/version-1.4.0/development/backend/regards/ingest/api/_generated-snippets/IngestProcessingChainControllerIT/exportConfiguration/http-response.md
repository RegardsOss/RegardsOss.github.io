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
      "id" : "ingest",
      "name" : "SIP management module",
      "description" : "SIP submission and management",
      "version" : "0.5.0",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ {
      "key" : "fr.cnes.regards.modules.ingest.domain.chain.IngestProcessingChain",
      "value" : {
        "name" : "DefaultProcessingChain",
        "validationPlugin" : {
          "pluginId" : "DefaultSipValidation",
          "label" : "DefaultSIPValidation",
          "businessId" : "867315dc-62c8-4e90-95c1-369aa5220590",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        },
        "generationPlugin" : {
          "pluginId" : "DefaultSingleAIPGeneration",
          "label" : "DefaultAIPGeneration",
          "businessId" : "39ed9c5d-6c43-45ef-9199-9e18b5a6f7c9",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "parameters" : [ ]
        }
      }
    } ]
  } ]
}
```
