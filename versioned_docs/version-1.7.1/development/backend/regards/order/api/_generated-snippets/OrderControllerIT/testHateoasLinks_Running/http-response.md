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
  "content" : {
    "id" : 16,
    "owner" : "default_user@regards.fr",
    "label" : "order1",
    "creationDate" : "2021-09-16T20:38:17.953Z",
    "expirationDate" : "2021-09-19T20:38:17.953Z",
    "percentCompleted" : 89,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 12,
    "status" : "RUNNING",
    "statusDate" : "2021-09-16T20:38:17.977Z",
    "waitingForUser" : false,
    "datasetTasks" : [ {
      "id" : 23,
      "datasetLabel" : "DS1",
      "objectsCount" : 4,
      "filesCount" : 4,
      "filesSize" : 52221122
    }, {
      "id" : 25,
      "datasetLabel" : "DS2",
      "objectsCount" : 10,
      "filesCount" : 10,
      "filesSize" : 52221122
    } ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/user/orders/16"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/user/orders"
  }, {
    "rel" : "download",
    "href" : "http://localhost:8080/user/orders/16/download"
  }, {
    "rel" : "pause",
    "href" : "http://localhost:8080/user/orders/pause/16"
  } ]
}
```
