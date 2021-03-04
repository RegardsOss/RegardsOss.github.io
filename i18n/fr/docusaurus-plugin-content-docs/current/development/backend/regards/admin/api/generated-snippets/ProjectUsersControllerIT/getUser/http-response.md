#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Disposition:inline;filename=f.txt`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "content" : {
    "id" : 358,
    "email" : "email@test.com",
    "lastUpdate" : "2020-05-11T14:12:06.83Z",
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
    "href" : "http://localhost:8080/users/358"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/users/358"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/users/358"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/users"
  } ]
}
```
