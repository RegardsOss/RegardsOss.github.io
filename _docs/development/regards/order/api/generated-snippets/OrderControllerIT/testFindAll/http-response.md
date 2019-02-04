* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
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
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 661,
      "owner" : "other.user2@regards.fr",
      "creationDate" : "2018-09-07T09:37:11.701Z",
      "expirationDate" : "2018-09-10T09:37:11.701Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-09-07T09:37:11.701Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 660,
      "owner" : "default_user@regards.fr",
      "creationDate" : "2018-09-07T09:37:11.569Z",
      "expirationDate" : "2018-09-10T09:37:11.569Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-09-07T09:37:11.569Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 659,
      "owner" : "other.user1@regards.fr",
      "creationDate" : "2018-09-07T09:37:11.483Z",
      "expirationDate" : "2018-09-10T09:37:11.483Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2018-09-07T09:37:11.483Z",
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