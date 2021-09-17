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
  "metadata" : {
    "size" : 20,
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 106,
      "type" : "Module",
      "description" : "Description",
      "applicationId" : "TEST",
      "container" : "TestContainer",
      "conf" : "{\"test\":\"test\"}",
      "active" : true,
      "page" : {
        "home" : false
      }
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 107,
      "type" : "Module",
      "description" : "Description",
      "applicationId" : "TEST",
      "container" : "TestContainer",
      "conf" : "{\"test\":\"test\"}",
      "active" : false,
      "page" : {
        "home" : false
      }
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 108,
      "type" : "Module",
      "description" : "Description",
      "applicationId" : "TEST",
      "container" : "TestContainer",
      "conf" : "{\"test\":\"test\"}",
      "active" : true,
      "page" : {
        "home" : true
      }
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/applications/TEST/modules?page=0&size=20&sort=id,asc"
  } ]
}
```
