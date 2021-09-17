### Response

* **Code:** 201 Created

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
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "content" : {
    "id" : 6,
    "name" : "TestProcessingChain",
    "validationPlugin" : {
      "id" : 9,
      "pluginId" : "DefaultSipValidation",
      "label" : "TestSIPValidation",
      "businessId" : "a68413bd-0b31-4a94-b22d-3102e658a418",
      "version" : "1.0.0",
      "priorityOrder" : 0,
      "active" : true,
      "parameters" : [ ]
    },
    "generationPlugin" : {
      "id" : 10,
      "pluginId" : "DefaultSingleAIPGeneration",
      "label" : "TestAIPGeneration",
      "businessId" : "3686c382-0116-4a64-be8a-b68cc41e88ff",
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
  } ]
}
```
