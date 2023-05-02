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
    "id" : 3,
    "name" : "test1",
    "label" : "test1",
    "description" : "",
    "icon" : "",
    "isPublic" : true,
    "isAccessible" : true,
    "isDeleted" : false,
    "host" : "http://localhost/public",
    "crs" : "WGS_84",
    "isPoleToBeManaged" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/projects/test1"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/projects/test1"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/projects/test1"
  }, {
    "rel" : "create",
    "href" : "http://localhost:8080/projects"
  } ]
}
```
