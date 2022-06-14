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
    
{
  "content" : {
    "id" : 30,
    "attribute" : {
      "id" : 31,
      "name" : "attnewUpMA",
      "type" : "STRING",
      "fragment" : {
        "id" : 8,
        "name" : "default",
        "description" : "Default fragment",
        "virtual" : false
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attnewUpMA",
      "virtual" : false
    },
    "model" : {
      "id" : 27,
      "name" : "modelUpMA",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/modelUpMA/attributes/30"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelUpMA/attributes"
  } ]
}
```
