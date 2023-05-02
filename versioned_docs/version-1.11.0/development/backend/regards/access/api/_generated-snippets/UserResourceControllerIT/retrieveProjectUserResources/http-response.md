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
    "id" : 4965,
    "description" : "description",
    "microservice" : "microservice",
    "controllerSimpleName" : "controllerSimpleName",
    "resource" : "resource",
    "verb" : "OPTIONS",
    "defaultRole" : "REGISTERED_USER"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/4217432c-1d8e-42f8-a048-e2b18d09076a/resources"
  } ]
} ]
```
