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
    "id" : 52,
    "applicationId" : "user",
    "layout" : "{\n  \"id\": \"user-app-root\",\n  \"type\": \"MainContainer\",\n  \"classes\": [],\n  \"styles\": {},\n  \"containers\": [\n    {\n      \"id\": \"page-top-header\",\n      \"type\": \"RowContainer\",\n      \"classes\": [],\n      \"styles\": {}\n    },\n    {\n      \"id\": \"page-sub-header\",\n      \"type\": \"RowContainer\",\n      \"classes\": [],\n      \"styles\": {},\n      \"dynamicContent\": false\n    },\n    {\n      \"id\": \"page-content-module\",\n      \"type\": \"ContentRowContainer\",\n      \"classes\": [],\n      \"styles\": {},\n      \"dynamicContent\": true\n    },\n    {\n      \"id\": \"page-footer\",\n      \"type\": \"RowContainer\",\n      \"classes\": [],\n      \"styles\": {}\n    }\n  ]\n}"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/layouts/user"
  } ]
}
```
