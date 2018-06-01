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
  "content" : {
    "id" : 652,
    "owner" : "default_user@regards.fr",
    "creationDate" : "2018-06-01T12:37:07.965Z",
    "expirationDate" : "2018-06-04T12:37:07.965Z",
    "percentCompleted" : 23,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 2,
    "status" : "RUNNING",
    "statusDate" : "2018-06-01T12:37:08.054Z",
    "waitingForUser" : false,
    "datasetTasks" : [ {
      "id" : 652,
      "datasetLabel" : "DS1",
      "objectsCount" : 4,
      "filesCount" : 4,
      "filesSize" : 52221122
    }, {
      "id" : 654,
      "datasetLabel" : "DS2",
      "objectsCount" : 10,
      "filesCount" : 10,
      "filesSize" : 52221122
    } ]
  },
  "links" : [ ]
}
```
