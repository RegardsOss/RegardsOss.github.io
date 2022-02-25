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
    "id" : 209,
    "email" : "email@test.com",
    "lastUpdate" : "2021-09-16T18:55:51.228Z",
    "status" : "WAITING_ACCESS",
    "metadata" : [ ],
    "role" : {
      "id" : 1,
      "name" : "PUBLIC",
      "authorizedAddresses" : [ ],
      "isDefault" : false,
      "isNative" : true
    },
    "licenseAccepted" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/209"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/users/209"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/users/209"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/users"
  }, {
    "rel" : "accept",
    "href" : "http://localhost:8080/accesses/209/accept"
  }, {
    "rel" : "deny",
    "href" : "http://localhost:8080/accesses/209/deny"
  } ]
}
```
