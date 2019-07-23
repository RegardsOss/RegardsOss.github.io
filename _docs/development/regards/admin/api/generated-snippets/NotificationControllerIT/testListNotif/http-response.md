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
    "size" : 2,
    "totalElements" : 4,
    "totalPages" : 2,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "date" : "2019-07-22T18:17:20.027Z",
      "id" : 5,
      "rolerecipients" : "[PROJECT_ADMIN]",
      "projectuserreciptients" : "[]",
      "sender" : "microservice",
      "status" : "UNREAD",
      "level" : "INFO",
      "title" : "test",
      "mimetype" : "text/plain"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/notifications/5"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/notifications/5"
    }, {
      "rel" : "read",
      "href" : "http://localhost:8080/notifications/5/read"
    } ]
  }, {
    "content" : {
      "date" : "2019-07-22T18:17:20.004Z",
      "id" : 4,
      "rolerecipients" : "[PROJECT_ADMIN]",
      "projectuserreciptients" : "[]",
      "sender" : "microservice",
      "status" : "UNREAD",
      "level" : "INFO",
      "title" : "test",
      "mimetype" : "text/plain"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/notifications/4"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/notifications/4"
    }, {
      "rel" : "read",
      "href" : "http://localhost:8080/notifications/4/read"
    } ]
  } ],
  "links" : [ {
    "rel" : "first",
    "href" : "http://localhost:8080/notifications?page=0&size=2&sort=id,asc"
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/notifications?page=0&size=2&sort=id,asc"
  }, {
    "rel" : "next",
    "href" : "http://localhost:8080/notifications?page=1&size=2&sort=id,asc"
  }, {
    "rel" : "last",
    "href" : "http://localhost:8080/notifications?page=1&size=2&sort=id,asc"
  } ]
}
```
