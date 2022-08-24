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
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
[ {
  "content" : {
    "applicationModes" : [ "ONE", "MANY" ],
    "entityTypes" : [ "DATA" ],
    "pluginId" : "aSampleServicePlugin",
    "label" : "pluginLabel1",
    "businessId" : "8118d71a-bfd8-4b6b-ae3b-27a9835f60f3",
    "version" : "0.0.1",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ {
      "name" : "responseType",
      "type" : "STRING",
      "value" : "json",
      "dynamic" : true
    } ]
  },
  "links" : [ ]
} ]
```
