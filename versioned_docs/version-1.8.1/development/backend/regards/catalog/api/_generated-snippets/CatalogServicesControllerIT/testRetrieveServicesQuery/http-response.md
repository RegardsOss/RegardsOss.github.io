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
    "businessId" : "4230d4e5-aae6-4b25-8e2c-a106777b232e",
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
    "businessId" : "86428ae9-9e96-4f4c-b12d-b38ae5395e45",
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
