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
    "id" : 7,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:11490dee-46b9-472b-be22-9a4b4943fe30:V1",
    "creationDate" : "2021-09-16T19:08:56.708Z",
    "lastUpdate" : "2021-09-16T19:08:56.736Z",
    "model" : {
      "id" : 7,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:PROJECT:11490dee-46b9-472b-be22-9a4b4943fe30:LAST",
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : {
        "DESCRIPTION" : [ {
          "dataType" : "DESCRIPTION",
          "reference" : false,
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:11490dee-46b9-472b-be22-9a4b4943fe30:V1/files/6e83e944899e788c361b9c0b6dcb6a90",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "6e83e944899e788c361b9c0b6dcb6a90",
          "digestAlgorithm" : "MD5",
          "filesize" : 8092,
          "filename" : "description2.pdf",
          "types" : [ ]
        }, {
          "dataType" : "DESCRIPTION",
          "reference" : false,
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:11490dee-46b9-472b-be22-9a4b4943fe30:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",
          "digestAlgorithm" : "MD5",
          "filesize" : 8083,
          "filename" : "description.pdf",
          "types" : [ ]
        } ]
      },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:11490dee-46b9-472b-be22-9a4b4943fe30:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
