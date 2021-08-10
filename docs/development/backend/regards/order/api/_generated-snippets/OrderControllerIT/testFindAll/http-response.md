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
  "metadata" : {
    "size" : 20,
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 11,
      "owner" : "other.user2@regards.fr",
      "label" : "order3",
      "creationDate" : "2020-09-07T14:46:27.069Z",
      "expirationDate" : "2020-09-10T14:46:27.069Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-09-07T14:46:27.069Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 10,
      "owner" : "default_user@regards.fr",
      "label" : "order2",
      "creationDate" : "2020-09-07T14:46:27.064Z",
      "expirationDate" : "2020-09-10T14:46:27.064Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-09-07T14:46:27.064Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 9,
      "owner" : "other.user1@regards.fr",
      "label" : "order1",
      "creationDate" : "2020-09-07T14:46:27.055Z",
      "expirationDate" : "2020-09-10T14:46:27.055Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-09-07T14:46:27.055Z",
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
