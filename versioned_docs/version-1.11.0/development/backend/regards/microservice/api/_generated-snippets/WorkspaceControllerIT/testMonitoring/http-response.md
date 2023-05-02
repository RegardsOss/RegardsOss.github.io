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
    "storagePhysicalId" : "/dev/sdc1",
    "totalSpace" : "158398365696B",
    "usedSpace" : "44510945280B",
    "freeSpace" : "113887420416B",
    "occupationRatio" : 0.28100634172846156,
    "path" : "target/workspace/PROJECT/rs-test"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/workspaces"
  } ]
}
```
