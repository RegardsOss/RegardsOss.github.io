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
  "content" : {
    "id" : 58,
    "name" : "TestProcessingChain",
    "validationPlugin" : {
      "id" : 62,
      "pluginId" : "DefaultSipValidation",
      "label" : "TestSIPValidation",
      "businessId" : "06c6c26a-f7ad-400f-be02-fb917d75b1d8",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generationPlugin" : {
      "id" : 63,
      "pluginId" : "DefaultSingleAIPGeneration",
      "label" : "TestAIPGeneration",
      "businessId" : "bdb6a304-e578-4fec-9d3e-de23f7dd7811",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
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
