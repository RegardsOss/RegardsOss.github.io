* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

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
      "id" : 661,
      "owner" : "other.user2@regards.fr",
      "creationDate" : "2018-06-01T12:37:08.662Z",
      "expirationDate" : "2018-06-04T12:37:08.662Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-06-01T12:37:08.662Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 660,
      "owner" : "default_user@regards.fr",
      "creationDate" : "2018-06-01T12:37:08.658Z",
      "expirationDate" : "2018-06-04T12:37:08.658Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-06-01T12:37:08.658Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 659,
      "owner" : "other.user1@regards.fr",
      "creationDate" : "2018-06-01T12:37:08.653Z",
      "expirationDate" : "2018-06-04T12:37:08.653Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-06-01T12:37:08.652Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/orders?page=0&size=20"
  } ]
}
```
