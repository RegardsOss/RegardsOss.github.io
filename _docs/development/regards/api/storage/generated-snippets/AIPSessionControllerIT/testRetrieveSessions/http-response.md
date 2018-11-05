* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: storage-service-test:default,test,noschedule,testAmqp:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

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
      "lastActivationDate" : "2018-11-05T08:51:33.57Z",
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
      "lastActivationDate" : "2018-11-05T08:51:33.732Z",
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
