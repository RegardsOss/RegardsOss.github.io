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
    "id" : 4,
    "name" : "DATE_ISO",
    "description" : "date ISO description",
    "type" : "DATE_ISO8601",
    "fragment" : {
      "id" : 2,
      "name" : "default",
      "description" : "Default fragment",
      "virtual" : false
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.DATE_ISO",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/4"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}
```
