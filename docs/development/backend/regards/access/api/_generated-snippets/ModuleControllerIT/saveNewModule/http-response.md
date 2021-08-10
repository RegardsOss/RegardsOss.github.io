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
    "size" : 20,
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 59,
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/applications/TEST/modules/59"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/59"
    } ]
  }, {
    "content" : {
      "id" : 60,
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/applications/TEST/modules/60"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/60"
    } ]
  }, {
    "content" : {
      "id" : 61,
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/applications/TEST/modules/61"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/61"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/applications/TEST/modules?page=0&size=20&sort=id,asc"
  } ]
}
```
