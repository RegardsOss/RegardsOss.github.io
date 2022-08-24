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
    "size" : 20,
    "totalElements" : 4,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 158,
      "state" : "AVAILABLE",
      "orderId" : 24,
      "ipId" : "URN:AIP:DATA:ORDER:ce3922e2-b63b-41c9-bbe0-74e4df1227b2:V1",
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
      "id" : 159,
      "state" : "AVAILABLE",
      "orderId" : 24,
      "ipId" : "URN:AIP:DATA:ORDER:ce3922e2-b63b-41c9-bbe0-74e4df1227b2:V1",
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
      "id" : 160,
      "state" : "AVAILABLE",
      "orderId" : 24,
      "ipId" : "URN:AIP:DATA:ORDER:ce3922e2-b63b-41c9-bbe0-74e4df1227b2:V1",
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
  }, {
    "content" : {
      "id" : 157,
      "state" : "AVAILABLE",
      "orderId" : 24,
      "ipId" : "URN:AIP:DATA:ORDER:ce3922e2-b63b-41c9-bbe0-74e4df1227b2:V1",
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
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/orders/24/dataset/50/files?page=0&size=20"
  } ]
}
```
