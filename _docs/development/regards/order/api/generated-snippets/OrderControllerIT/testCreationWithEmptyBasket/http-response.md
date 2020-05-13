#### Request

* **Code:** 201 Created

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
  "content" : {
    "id" : 14,
    "owner" : "default_user@regards.fr",
    "creationDate" : "2020-05-13T12:04:22.215Z",
    "percentCompleted" : 0,
    "filesInErrorCount" : 0,
    "availableFilesCount" : 0,
    "status" : "PENDING",
    "statusDate" : "2020-05-13T12:04:22.215Z",
    "waitingForUser" : false,
    "datasetTasks" : [ ]
  },
  "links" : [ ]
}
```
