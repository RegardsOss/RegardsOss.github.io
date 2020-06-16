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
  "content" : {
    "type" : "COLLECTION",
    "id" : 7,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1",
    "creationDate" : "2020-05-11T11:39:02.708Z",
    "lastUpdate" : "2020-05-11T11:39:03.262Z",
    "model" : {
      "id" : 7,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : {
        "DESCRIPTION" : [ {
          "dataType" : "DESCRIPTION",
          "reference" : false,
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1/files/6e83e944899e788c361b9c0b6dcb6a90",
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
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",
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
      "id" : "URN:AIP:COLLECTION:PROJECT:2b1a3d3b-e92f-495e-9ab6-200a010b2894:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
