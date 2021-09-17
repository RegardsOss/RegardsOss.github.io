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
  "metadata" : {
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "filePath" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_1.txt",
      "state" : "IN_PROGRESS",
      "acqDate" : "2021-09-16T19:38:20.27Z"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 2,
      "filePath" : "/app_to_build/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_2.txt",
      "state" : "IN_PROGRESS",
      "acqDate" : "2021-09-16T19:38:20.279Z"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/acquisition-files?page=0&size=10&sort=id,asc"
  } ]
}
```
