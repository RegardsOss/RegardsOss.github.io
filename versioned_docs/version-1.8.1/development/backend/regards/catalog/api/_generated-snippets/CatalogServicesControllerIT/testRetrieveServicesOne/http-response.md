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
    "pluginId" : "tata",
    "label" : "testConf",
    "businessId" : "f7054662-0ae3-4155-8666-bfa78cab50a9",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ {
      "name" : "para",
      "type" : "STRING",
      "value" : "never used",
      "dynamic" : true
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "applicationModes" : [ "ONE", "MANY" ],
    "entityTypes" : [ "DATA" ],
    "pluginId" : "aSampleServicePlugin",
    "label" : "pluginLabel1",
    "businessId" : "98780ae2-95a7-4488-813f-0579da10680d",
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
