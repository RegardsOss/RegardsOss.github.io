### Response

* **Code:** 200 OK

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  

**Content:**

```json
    
{
  "content" : {
    "id" : 1,
    "owner" : "default_user@regards.fr",
    "label" : "order1",
    "creationDate" : "2020-09-07T14:46:26.151Z",
    "expirationDate" : "2020-09-10T14:46:26.151Z",
    "percentCompleted" : 23,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 2,
    "status" : "RUNNING",
    "statusDate" : "2020-09-07T14:46:26.271Z",
    "waitingForUser" : false,
    "datasetTasks" : [ {
      "id" : 1,
      "datasetLabel" : "DS1",
      "objectsCount" : 4,
      "filesCount" : 4,
      "filesSize" : 52221122
    }, {
      "id" : 3,
      "datasetLabel" : "DS2",
      "objectsCount" : 10,
      "filesCount" : 10,
      "filesSize" : 52221122
    } ]
  },
  "links" : [ ]
}
```
