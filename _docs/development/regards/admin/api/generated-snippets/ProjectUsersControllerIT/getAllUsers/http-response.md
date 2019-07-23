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
  "metadata" : {
    "size" : 10,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 18,
      "email" : "email@test.com",
      "lastUpdate" : "2019-07-22T18:18:07.415Z",
      "status" : "WAITING_ACCOUNT_ACTIVE",
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
      "href" : "http://localhost:8080/users/18"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/users/18"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/users/18"
    }, {
      "rel" : "list",
      "href" : "http://localhost:8080/users"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users?page=0&size=10&sort=id,asc"
  } ]
}
```
