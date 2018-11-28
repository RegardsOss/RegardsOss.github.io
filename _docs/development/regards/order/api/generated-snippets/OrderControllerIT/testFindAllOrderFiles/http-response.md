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
    "totalElements" : 4,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1122,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:56415dbd-58e1-4c91-a6ca-847d1c0e2037:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1.txt",
      "filesize" : 91,
      "filename" : "file1.txt"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1125,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:56415dbd-58e1-4c91-a6ca-847d1c0e2037:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_sd.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_sd.txt",
      "filesize" : 22,
      "filename" : "file1_ql_sd.txt"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1123,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:56415dbd-58e1-4c91-a6ca-847d1c0e2037:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_hd.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_hd.txt",
      "filesize" : 22,
      "filename" : "file1_ql_hd.txt"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 1124,
      "state" : "AVAILABLE",
      "orderId" : 667,
      "ipId" : "URN:AIP:DATA:ORDER:56415dbd-58e1-4c91-a6ca-847d1c0e2037:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_md.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_md.txt",
      "filesize" : 22,
      "filename" : "file1_ql_md.txt"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/orders/667/dataset/667/files?page=0&size=20"
  } ]
}
```
