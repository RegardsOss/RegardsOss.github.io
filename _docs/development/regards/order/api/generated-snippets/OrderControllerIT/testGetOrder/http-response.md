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
  "content" : {
    "id" : 652,
    "owner" : "default_user@regards.fr",
    "creationDate" : "2018-09-07T09:37:09.451Z",
    "expirationDate" : "2018-09-10T09:37:09.451Z",
    "percentCompleted" : 89,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 12,
    "status" : "RUNNING",
    "statusDate" : "2018-09-07T09:37:09.763Z",
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
