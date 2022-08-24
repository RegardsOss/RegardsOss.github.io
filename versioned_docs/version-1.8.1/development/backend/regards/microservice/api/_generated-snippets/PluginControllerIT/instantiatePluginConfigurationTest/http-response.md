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
    "id" : 3,
    "pluginId" : "InnerParamTestPlugin",
    "label" : "Oliiiiiiive",
    "businessId" : "1a700cdd-13f4-4b94-ad03-229b9e22c2b6",
    "version" : "1.0.0",
    "priorityOrder" : 2,
    "active" : true,
    "parameters" : [ {
      "name" : "toto",
      "type" : "STRING",
      "value" : "Ficelle",
      "dynamic" : false
    } ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/plugins/InnerParamTestPlugin/config/1a700cdd-13f4-4b94-ad03-229b9e22c2b6"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/InnerParamTestPlugin/config"
  } ]
}
```
