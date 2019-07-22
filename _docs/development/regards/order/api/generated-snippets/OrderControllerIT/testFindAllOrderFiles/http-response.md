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
    "size" : 20,
    "totalElements" : 4,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 71,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:6041a22f-9c63-4b05-bfaf-8a7ace209aa6:V1",
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
      "id" : 74,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:6041a22f-9c63-4b05-bfaf-8a7ace209aa6:V1",
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
      "id" : 72,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:6041a22f-9c63-4b05-bfaf-8a7ace209aa6:V1",
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
      "id" : 73,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:6041a22f-9c63-4b05-bfaf-8a7ace209aa6:V1",
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
    "href" : "http://localhost:8080/orders/17/dataset/16/files?page=0&size=20"
  } ]
}
        ```
