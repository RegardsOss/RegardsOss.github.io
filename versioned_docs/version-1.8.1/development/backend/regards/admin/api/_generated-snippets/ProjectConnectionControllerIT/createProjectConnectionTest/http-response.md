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
    "id" : 54,
    "project" : {
      "id" : 3,
      "name" : "test1",
      "label" : "project",
      "description" : "",
      "icon" : "",
      "isPublic" : true,
      "isAccessible" : true,
      "isDeleted" : false,
      "host" : "http://localhost/public",
      "crs" : "WGS_84",
      "isPoleToBeManaged" : false
    },
    "microservice" : "microservice-test-2",
    "userName" : "newUserName",
    "password" : "ee0Fbookrhk3HqfMYZ55Mw==",
    "driverClassName" : "newDriver",
    "url" : "newUrl",
    "state" : "DISABLED"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/projects/test1/connections/54"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/projects/test1/connections/54"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/projects/test1/connections/54"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/projects/test1/connections"
  } ]
}
```
