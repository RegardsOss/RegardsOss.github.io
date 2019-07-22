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
    "id" : "Test session",
    "lastActivationDate" : "2019-07-19T17:01:15.222Z",
    "aipsCount" : 8,
    "deletedAipsCount" : 2,
    "errorAipsCount" : 2,
    "queuedAipsCount" : 2,
    "storedAipsCount" : 2,
    "storedDataFilesCount" : 0,
    "dataFilesCount" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sessions/Test%2520session"
  } ]
}
        ```
