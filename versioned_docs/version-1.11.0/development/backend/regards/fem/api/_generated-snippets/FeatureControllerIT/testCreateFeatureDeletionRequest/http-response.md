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
`Content-Type:application/hal+json`  

**Content:**

```json
    
{
  "granted" : {
    "URN:FEATURE:DATA:tenant:72dea01c-25d1-4884-a25a-416e352e362b:V1" : "a63dccd5-e9bf-4861-b4cb-290042d10048"
  },
  "denied" : {
    "empty" : true
  },
  "messages" : [ ]
}
```
