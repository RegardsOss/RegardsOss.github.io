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
    "size" : 2,
    "totalElements" : 4,
    "totalPages" : 2,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "date" : "2021-09-16T18:54:19.157Z",
      "id" : 2,
      "sender" : "microservice",
      "status" : "UNREAD",
      "level" : "INFO",
      "title" : "test",
      "mimetype" : "text/plain"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/notifications/2"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/notifications/2"
    }, {
      "rel" : "read",
      "href" : "http://localhost:8080/notifications/2/read"
    } ]
  }, {
    "content" : {
      "date" : "2021-09-16T18:54:19.169Z",
      "id" : 3,
      "sender" : "microservice",
      "status" : "UNREAD",
      "level" : "INFO",
      "title" : "test",
      "mimetype" : "text/plain"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/notifications/3"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/notifications/3"
    }, {
      "rel" : "read",
      "href" : "http://localhost:8080/notifications/3/read"
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
