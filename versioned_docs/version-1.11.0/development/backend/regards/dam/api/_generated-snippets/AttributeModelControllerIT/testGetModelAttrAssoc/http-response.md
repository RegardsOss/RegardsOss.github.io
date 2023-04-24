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
    "id" : 46,
    "attribute" : {
      "id" : 58,
      "name" : "Attribute1",
      "type" : "STRING",
      "fragment" : {
        "id" : 28,
        "name" : "test",
        "description" : "Test",
        "version" : "1.0",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "Attribute1",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.test.Attribute1",
      "virtual" : false
    },
    "model" : {
      "id" : 31,
      "name" : "DataModel",
      "description" : "Test",
      "version" : "1.0",
      "type" : "DATA"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/models/DataModel/attributes"
  } ]
} ]
```
