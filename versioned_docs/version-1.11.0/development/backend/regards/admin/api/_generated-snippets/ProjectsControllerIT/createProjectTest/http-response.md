### Response

* **Code:** 201 Created

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
    "id" : 53,
    "name" : "create-project",
    "label" : "create-project",
    "description" : "description",
    "icon" : "icon",
    "isPublic" : true,
    "isAccessible" : false,
    "isDeleted" : false,
    "crs" : "WGS_84",
    "isPoleToBeManaged" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/projects/create-project"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/projects/create-project"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/projects/create-project"
  }, {
    "rel" : "create",
    "href" : "http://localhost:8080/projects"
  } ]
}
```
