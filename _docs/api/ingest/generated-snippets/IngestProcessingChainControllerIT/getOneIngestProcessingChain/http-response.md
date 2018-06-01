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
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

{
  "content" : {
    "id" : 8,
    "name" : "TestProcessingChain",
    "validationPlugin" : {
      "id" : 13,
      "pluginId" : "DefaultSipValidation",
      "label" : "TestSIPValidation",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.DefaultSipValidation",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
      "parameters" : [ ]
    },
    "generationPlugin" : {
      "id" : 14,
      "pluginId" : "DefaultSingleAIPGeneration",
      "label" : "TestAIPGeneration",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.DefaultSingleAIPGeneration",
      "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
      "parameters" : [ ]
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/processingchains/TestProcessingChain"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/processingchains/TestProcessingChain"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/processingchains/TestProcessingChain"
  }, {
    "rel" : "export",
    "href" : "http://localhost:8080/processingchains/TestProcessingChain/export"
  } ]
}
```
