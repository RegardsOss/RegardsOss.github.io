#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
[ {
  "content" : {
    "id" : 88,
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
    "id" : 87,
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
