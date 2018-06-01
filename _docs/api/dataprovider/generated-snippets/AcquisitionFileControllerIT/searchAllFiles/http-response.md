* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

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
      "acqDate" : "2018-06-01T09:50:30.246Z",
      "checksum" : "a3d451bb4eafc1d9f530f87daa383b9a",
      "checksumAlgorithm" : "MD5"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
      "filePath" : "src/test/resources/input/data_1.txt",
      "state" : "IN_PROGRESS",
      "acqDate" : "2018-06-01T09:50:30.245Z",
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
