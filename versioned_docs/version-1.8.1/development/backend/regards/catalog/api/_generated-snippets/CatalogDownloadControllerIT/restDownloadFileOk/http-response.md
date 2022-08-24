### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:public, max-age=15552000`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "inputStream" : {
    "response" : {
      "status" : 200,
      "headers" : { },
      "body" : {
        "data" : [ 114, 101, 115, 117, 108, 116, 32, 102, 105, 108, 101, 32, 99, 111, 110, 116, 101, 110, 116 ]
      },
      "request" : {
        "httpMethod" : "GET",
        "url" : "test",
        "headers" : { },
        "body" : { }
      }
    },
    "stream" : {
      "buf" : [ 114, 101, 115, 117, 108, 116, 32, 102, 105, 108, 101, 32, 99, 111, 110, 116, 101, 110, 116 ],
      "pos" : 0,
      "mark" : 0,
      "count" : 19
    },
    "streamReadCount" : 0
  },
  "description" : "resource loaded through InputStream",
  "read" : false
}
```
