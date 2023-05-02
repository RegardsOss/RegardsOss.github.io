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
  "content" : {
    "type" : "COLLECTION",
    "id" : 3,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:7ffb58d7-da9d-48a2-a307-07825da107e4:V1",
    "creationDate" : "2021-09-16T19:08:54.803Z",
    "lastUpdate" : "2021-09-16T19:08:54.822Z",
    "model" : {
      "id" : 3,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:PROJECT:7ffb58d7-da9d-48a2-a307-07825da107e4:LAST",
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : {
        "DESCRIPTION" : [ {
          "dataType" : "DESCRIPTION",
          "reference" : false,
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:7ffb58d7-da9d-48a2-a307-07825da107e4:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",
          "digestAlgorithm" : "MD5",
          "filesize" : 8083,
          "filename" : "description.pdf",
          "types" : [ ]
        }, {
          "dataType" : "DESCRIPTION",
          "reference" : true,
          "uri" : "https://public.ccsds.org/pubs/650x0m2.pdf",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "6c342551cb27c952b1e1d380f82f404a",
          "digestAlgorithm" : "MD5",
          "filename" : "650x0m2.pdf",
          "types" : [ ]
        } ]
      },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:7ffb58d7-da9d-48a2-a307-07825da107e4:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
