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
    "id" : 225,
    "description" : "",
    "microservice" : "aMicroservice",
    "controllerSimpleName" : "Controller",
    "resource" : "the resource",
    "verb" : "DELETE",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"
  } ]
}, {
  "content" : {
    "id" : 224,
    "description" : "",
    "microservice" : "aMicroservice",
    "controllerSimpleName" : "Controller",
    "resource" : "the resource",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"
  } ]
} ]
```
