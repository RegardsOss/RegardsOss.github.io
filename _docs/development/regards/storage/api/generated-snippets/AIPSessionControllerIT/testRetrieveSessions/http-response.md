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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : "Test session",
      "lastActivationDate" : "2019-07-19T17:01:14.715Z",
      "aipsCount" : 8,
      "deletedAipsCount" : 2,
      "errorAipsCount" : 2,
      "queuedAipsCount" : 2,
      "storedAipsCount" : 2,
      "storedDataFilesCount" : 0,
      "dataFilesCount" : 0
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : "Test session 2",
      "lastActivationDate" : "2019-07-19T17:01:14.819Z",
      "aipsCount" : 1,
      "deletedAipsCount" : 1,
      "errorAipsCount" : 0,
      "queuedAipsCount" : 0,
      "storedAipsCount" : 0,
      "storedDataFilesCount" : 0,
      "dataFilesCount" : 0
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sessions?page=0&size=20"
  } ]
}
        ```
