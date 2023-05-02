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
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 26,
      "name" : "SESSION_2",
      "source" : "SOURCE_5",
      "creationDate" : "2021-09-16T18:59:11.228Z",
      "steps" : [ {
        "stepId" : "oais",
        "source" : "SOURCE_5",
        "session" : "SESSION_2",
        "type" : "REFERENCING",
        "inputRelated" : 0,
        "outputRelated" : 0,
        "state" : {
          "errors" : 0,
          "waiting" : 0,
          "running" : 0
        },
        "properties" : { },
        "lastUpdateDate" : "2021-09-16T18:59:11.228Z"
      } ],
      "managerState" : {
        "running" : false,
        "errors" : false,
        "waiting" : false
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/sessions"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sessions?page=0&size=20&sort=lastUpdateDate,desc"
  } ]
}
```
