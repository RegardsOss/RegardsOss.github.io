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
    "id" : 45,
    "name" : "NB_OBJECTS",
    "type" : "INTEGER",
    "fragment" : {
      "id" : 21,
      "name" : "default",
      "description" : "Default fragment",
      "virtual" : false
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "restriction" : {
      "min" : 10,
      "max" : 100,
      "minExcluded" : false,
      "maxExcluded" : false,
      "id" : 6,
      "type" : "INTEGER_RANGE"
    },
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.NB_OBJECTS",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/45"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/45"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}
```
