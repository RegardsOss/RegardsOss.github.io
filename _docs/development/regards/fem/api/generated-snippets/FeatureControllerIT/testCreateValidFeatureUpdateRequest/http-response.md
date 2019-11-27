### Response

* **Code:** 201 Created

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/hal+json;charset=UTF-8`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  

**Content:**
```json
    
{
  "granted" : {
    "URN:FEATURE:DATA:tenant:a8fbee52-a59b-4912-b7df-2ce4cc752611:V1" : "a3972a2e-bb7f-4e5c-8179-f0ea907ceb22"
  },
  "denied" : {
    "empty" : true
  },
  "messages" : null
}
```
