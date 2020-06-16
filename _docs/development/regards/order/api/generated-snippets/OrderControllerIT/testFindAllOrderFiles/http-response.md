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
      "id" : 58,
      "state" : "AVAILABLE",
      "orderId" : 15,
      "ipId" : "URN:AIP:DATA:ORDER:f49f3808-0bbb-4c56-bd0f-f5e910e069a4:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_hd.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_hd.txt",
      "filesize" : 22,
      "filename" : "file1_ql_hd.txt",
      "types" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 59,
      "state" : "AVAILABLE",
      "orderId" : 15,
      "ipId" : "URN:AIP:DATA:ORDER:f49f3808-0bbb-4c56-bd0f-f5e910e069a4:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_md.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_md.txt",
      "filesize" : 22,
      "filename" : "file1_ql_md.txt",
      "types" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 57,
      "state" : "AVAILABLE",
      "orderId" : 15,
      "ipId" : "URN:AIP:DATA:ORDER:f49f3808-0bbb-4c56-bd0f-f5e910e069a4:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1.txt",
      "filesize" : 91,
      "filename" : "file1.txt",
      "types" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 60,
      "state" : "AVAILABLE",
      "orderId" : 15,
      "ipId" : "URN:AIP:DATA:ORDER:f49f3808-0bbb-4c56-bd0f-f5e910e069a4:V1",
      "dataType" : "RAWDATA",
      "reference" : false,
      "uri" : "file:///test/files/file1_ql_sd.txt",
      "mimeType" : "text/plain",
      "online" : true,
      "checksum" : "file1_ql_sd.txt",
      "filesize" : 22,
      "filename" : "file1_ql_sd.txt",
      "types" : [ ]
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/orders/15/dataset/11/files?page=0&size=20"
  } ]
}
```
