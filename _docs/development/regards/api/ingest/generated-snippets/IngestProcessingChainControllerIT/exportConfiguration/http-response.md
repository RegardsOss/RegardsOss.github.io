* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json`
  `Content-Disposition: attachment; filename="config-Test application.json"`

  **Content:**

```json

{
  "microservice" : "Test application",
  "modules" : [ {
    "module" : {
      "id" : "ingest",
      "name" : "SIP management module",
      "description" : "SIP submission and management",
      "version" : "2.0.0-SNAPSHOT",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ {
      "key" : "fr.cnes.regards.modules.ingest.domain.entity.IngestProcessingChain",
      "value" : {
        "name" : "DefaultProcessingChain",
        "validationPlugin" : {
          "pluginId" : "DefaultSipValidation",
          "label" : "DefaultSIPValidation",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.DefaultSipValidation",
          "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
          "parameters" : [ ]
        },
        "generationPlugin" : {
          "pluginId" : "DefaultSingleAIPGeneration",
          "label" : "DefaultAIPGeneration",
          "version" : "1.0.0",
          "priorityOrder" : 0,
          "active" : true,
          "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.DefaultSingleAIPGeneration",
          "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
          "parameters" : [ ]
        }
      }
    } ]
  } ]
}
```
