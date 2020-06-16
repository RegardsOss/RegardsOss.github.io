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
    
{
  "content" : {
    "id" : 359,
    "email" : "email@test.com",
    "lastUpdate" : "2020-05-11T14:12:07.232Z",
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
    "href" : "http://localhost:8080/users/359"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/users/359"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/users/359"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/users"
  }, {
    "rel" : "accept",
    "href" : "http://localhost:8080/accesses/359/accept"
  }, {
    "rel" : "deny",
    "href" : "http://localhost:8080/accesses/359/deny"
  } ]
}
```
