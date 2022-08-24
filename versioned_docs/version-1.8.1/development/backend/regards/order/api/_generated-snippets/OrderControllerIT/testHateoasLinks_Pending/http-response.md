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
    "id" : 27,
    "owner" : "default_user@regards.fr",
    "label" : "order2",
    "creationDate" : "2021-09-16T20:39:03.015Z",
    "expirationDate" : "2021-09-19T20:39:03.015Z",
    "percentCompleted" : 0,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 0,
    "status" : "PENDING",
    "statusDate" : "2021-09-16T20:39:03.015Z",
    "waitingForUser" : false,
    "datasetTasks" : [ ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/user/orders/27"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/user/orders"
  }, {
    "rel" : "pause",
    "href" : "http://localhost:8080/user/orders/pause/27"
  } ]
}
```
