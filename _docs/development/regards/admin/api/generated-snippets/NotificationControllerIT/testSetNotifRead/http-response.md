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
  "date" : "2019-07-22T18:17:20.332Z",
  "id" : 6,
  "message" : "Bonne",
  "roleRecipients" : [ "PROJECT_ADMIN" ],
  "projectUserRecipients" : [ ],
  "sender" : "microservice",
  "status" : "READ",
  "level" : "INFO",
  "title" : "test",
  "mimeType" : "text/plain"
}
```