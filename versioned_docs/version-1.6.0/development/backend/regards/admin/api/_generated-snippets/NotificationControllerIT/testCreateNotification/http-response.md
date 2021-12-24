### Response

* **Code:** 201 Created

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
  "date" : "2021-09-16T18:54:20.353Z",
  "id" : 7,
  "message" : "Lets test",
  "roleRecipients" : [ "PROJECT_ADMIN" ],
  "projectUserRecipients" : [ ],
  "sender" : "microservice",
  "status" : "UNREAD",
  "level" : "INFO",
  "title" : "test",
  "mimeType" : "text/plain"
}
```
