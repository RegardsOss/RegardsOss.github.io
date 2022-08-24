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
`Content-Disposition:attachment; filename="rs-test-DefaultProcessingChain.json"`  

**Content:**

```json
    
{
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
```
