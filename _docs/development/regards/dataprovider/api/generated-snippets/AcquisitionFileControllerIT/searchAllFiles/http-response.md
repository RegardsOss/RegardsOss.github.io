* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "metadata" : {
    "size" : 20,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 4,
      "filePath" : "src/test/resources/input/data_2.txt",
      "state" : "IN_PROGRESS",
      "acqDate" : "2018-09-07T08:27:54.414Z",
      "checksum" : "a3d451bb4eafc1d9f530f87daa383b9a",
      "checksumAlgorithm" : "MD5"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
      "filePath" : "src/test/resources/input/data_1.txt",
      "state" : "IN_PROGRESS",
      "acqDate" : "2018-09-07T08:27:54.413Z",
      "checksum" : "a3d451bb4eafc1d9f530f87daa383b9a",
      "checksumAlgorithm" : "MD5"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/acquisition-files?page=0&size=20"
  } ]
}
```
