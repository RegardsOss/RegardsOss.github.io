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
      "id" : 62,
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
      "href" : "http://localhost:8080/applications/TEST/modules/62"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/62"
    } ]
  }, {
    "content" : {
      "id" : 63,
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
      "href" : "http://localhost:8080/applications/TEST/modules/63"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/63"
    } ]
  }, {
    "content" : {
      "id" : 64,
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
      "href" : "http://localhost:8080/applications/TEST/modules/64"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/applications/TEST/modules/64"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/applications/TEST/modules?page=0&size=20&sort=id,asc"
  } ]
}
```
