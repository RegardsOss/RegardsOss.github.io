#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `Content-Disposition:attachment; filename="Test application-DefaultProcessingChain.json"`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
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
```
