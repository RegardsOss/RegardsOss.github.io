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
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 3,
      "aipId" : "URN:AIP:DATA:PROJECT:1a055d29-6fe6-3d72-9115-8dea7ad36a62:V1",
      "state" : "STORED",
      "aip" : {
        "providerId" : "my object #1",
        "sipId" : "URN:SIP:DATA:PROJECT:1a055d29-6fe6-3d72-9115-8dea7ad36a62:V1",
        "version" : 1,
        "ipType" : "DATA",
        "id" : "URN:AIP:DATA:PROJECT:1a055d29-6fe6-3d72-9115-8dea7ad36a62:V1",
        "geometry" : null,
        "normalizedGeometry" : null,
        "properties" : {
          "contentInformations" : [ {
            "representationInformation" : {
              "syntax" : {
                "mimeType" : "application/json"
              }
            },
            "dataObject" : {
              "regardsDataType" : "RAWDATA",
              "locations" : [ {
                "storage" : "NAS #1",
                "url" : "http://somedomain.com/api/v1/storage/file/2"
              } ],
              "filename" : "cdpp_collection.json",
              "algorithm" : "MD5",
              "checksum" : "azertyuiopqsdfmlmld",
              "fileSize" : 1000
            }
          } ],
          "pdi" : {
            "contextInformation" : {
              "tags" : [ ]
            },
            "referenceInformation" : { },
            "provenanceInformation" : {
              "history" : [ {
                "comment" : "SIP my object #1 generated",
                "date" : "2021-09-16T19:31:05.648Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created from SIP my object #1(version 1).",
                "date" : "2021-09-16T19:31:06.79Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2021-09-16T19:31:06.8Z"
              } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          }
        },
        "type" : "Feature"
      },
      "storages" : [ "NAS #1" ],
      "last" : true,
      "sessionOwner" : "ESA",
      "session" : "2021-09-16T19:31:05.648Z",
      "categories" : [ "CAT 2", "CAT 1" ],
      "providerId" : "my object #1",
      "version" : 1,
      "tags" : [ ],
      "creationDate" : "2021-09-16T19:31:06.799Z",
      "lastUpdate" : "2021-09-16T19:31:07.84Z",
      "ipType" : "DATA"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/aips?page=0&size=20&sort=version,asc"
  } ]
}
```
