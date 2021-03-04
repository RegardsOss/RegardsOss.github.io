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
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 3,
      "filePath" : "/home/kevin/git/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_1.txt",
      "state" : "IN_PROGRESS",
      "sessionOwner" : "sessionOwner",
      "session" : "session",
      "acqDate" : "2020-05-13T09:36:07.548Z"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 4,
      "filePath" : "/home/kevin/git/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_2.txt",
      "state" : "IN_PROGRESS",
      "sessionOwner" : "sessionOwner",
      "session" : "session",
      "acqDate" : "2020-05-13T09:36:07.654Z"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/acquisition-files?page=0&size=10&sort=id,asc"
  } ]
}
```
