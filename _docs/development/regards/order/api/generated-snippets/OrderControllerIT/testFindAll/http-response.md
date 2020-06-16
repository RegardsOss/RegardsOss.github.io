#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

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
      "id" : 10,
      "owner" : "other.user2@regards.fr",
      "creationDate" : "2020-05-13T12:04:12.114Z",
      "expirationDate" : "2020-05-16T12:04:12.114Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-05-13T12:04:12.114Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 9,
      "owner" : "default_user@regards.fr",
      "creationDate" : "2020-05-13T12:04:12.044Z",
      "expirationDate" : "2020-05-16T12:04:12.044Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-05-13T12:04:12.044Z",
      "waitingForUser" : false,
      "datasetTasks" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 8,
      "owner" : "other.user1@regards.fr",
      "creationDate" : "2020-05-13T12:04:11.975Z",
      "expirationDate" : "2020-05-16T12:04:11.975Z",
      "percentCompleted" : 0,
      "filesInErrorCount" : 0,
      "availableFilesCount" : 0,
      "status" : "PENDING",
      "statusDate" : "2020-05-13T12:04:11.975Z",
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
