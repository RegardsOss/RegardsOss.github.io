### Response

* **Code:** 200 OK

**Headers:**

`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  
`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  

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
      "id" : 60,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:2b0a9e81-97a6-4a3f-a329-64f2bcdf94c7:V1",
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
      "id" : 59,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:2b0a9e81-97a6-4a3f-a329-64f2bcdf94c7:V1",
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
      "id" : 58,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:2b0a9e81-97a6-4a3f-a329-64f2bcdf94c7:V1",
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
      "id" : 61,
      "state" : "AVAILABLE",
      "orderId" : 17,
      "ipId" : "URN:AIP:DATA:ORDER:2b0a9e81-97a6-4a3f-a329-64f2bcdf94c7:V1",
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
    "href" : "http://localhost:8080/orders/17/dataset/13/files?page=0&size=20"
  } ]
}
```
