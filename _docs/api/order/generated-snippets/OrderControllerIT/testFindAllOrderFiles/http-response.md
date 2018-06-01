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
    "totalElements" : 4,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1622,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:06fbba0d-4308-4d83-817c-098623eda2de:V1",
      "uri" : "file:///test/files/file1.txt",
      "checksum" : "file1.txt",
      "size" : 91,
      "name" : "file1.txt",
      "online" : true,
      "mimeType" : "text/plain"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1625,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:06fbba0d-4308-4d83-817c-098623eda2de:V1",
      "uri" : "file:///test/files/file1_ql_sd.txt",
      "checksum" : "file1_ql_sd.txt",
      "size" : 22,
      "name" : "file1_ql_sd.txt",
      "online" : true,
      "mimeType" : "text/plain"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1623,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:06fbba0d-4308-4d83-817c-098623eda2de:V1",
      "uri" : "file:///test/files/file1_ql_hd.txt",
      "checksum" : "file1_ql_hd.txt",
      "size" : 22,
      "name" : "file1_ql_hd.txt",
      "online" : true,
      "mimeType" : "text/plain"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1624,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:06fbba0d-4308-4d83-817c-098623eda2de:V1",
      "uri" : "file:///test/files/file1_ql_md.txt",
      "checksum" : "file1_ql_md.txt",
      "size" : 22,
      "name" : "file1_ql_md.txt",
      "online" : true,
      "mimeType" : "text/plain"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/orders/667/dataset/667/files?page=0&size=20"
  } ]
}
```
