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
    "id" : 3,
    "owner" : "default_user@regards.fr",
    "label" : "order1",
    "creationDate" : "2021-09-16T20:37:45.247Z",
    "expirationDate" : "2021-09-19T20:37:45.247Z",
    "percentCompleted" : 23,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 0,
    "status" : "DONE",
    "statusDate" : "2021-09-16T20:37:45.297Z",
    "waitingForUser" : false,
    "datasetTasks" : [ {
      "id" : 11,
      "datasetLabel" : "DS1",
      "objectsCount" : 4,
      "filesCount" : 4,
      "filesSize" : 52221122
    }, {
      "id" : 13,
      "datasetLabel" : "DS2",
      "objectsCount" : 10,
      "filesCount" : 10,
      "filesSize" : 52221122
    } ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/user/orders/3"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/user/orders"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/user/orders/3"
  }, {
    "rel" : "restart",
    "href" : "http://localhost:8080/user/orders/3/restart"
  } ]
}
```
