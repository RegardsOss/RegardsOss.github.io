#### Request

* **Code:** 201 Created

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
    "id" : 56,
    "name" : "TestProcessingChain",
    "validationPlugin" : {
      "id" : 58,
      "pluginId" : "DefaultSipValidation",
      "label" : "TestSIPValidation",
      "businessId" : "eb05434f-5087-4bc1-b027-46ea71f520ae",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generationPlugin" : {
      "id" : 59,
      "pluginId" : "DefaultSingleAIPGeneration",
      "label" : "TestAIPGeneration",
      "businessId" : "9e666134-6bc4-4c2c-b406-d7a19b81d4ae",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    }
  },
  "links" : [ {
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
