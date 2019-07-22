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
    "id" : 3,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:5c953581-9d35-4b19-aef8-a82f440f7a37:V1",
    "creationDate" : "2019-07-19T17:15:15.187Z",
    "lastUpdate" : "2019-07-19T17:15:15.305Z",
    "model" : {
      "id" : 3,
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
          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:5c953581-9d35-4b19-aef8-a82f440f7a37:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",
          "digestAlgorithm" : "MD5",
          "filesize" : 8083,
          "filename" : "description.pdf"
        }, {
          "dataType" : "DESCRIPTION",
          "reference" : true,
          "uri" : "https://public.ccsds.org/pubs/650x0m2.pdf",
          "mimeType" : "application/pdf;charset=UTF-8",
          "online" : true,
          "checksum" : "6c342551cb27c952b1e1d380f82f404a",
          "digestAlgorithm" : "MD5",
          "filename" : "650x0m2.pdf"
        } ]
      },
      "tags" : [ ],
      "id" : "URN:AIP:COLLECTION:PROJECT:5c953581-9d35-4b19-aef8-a82f440f7a37:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
        ```
