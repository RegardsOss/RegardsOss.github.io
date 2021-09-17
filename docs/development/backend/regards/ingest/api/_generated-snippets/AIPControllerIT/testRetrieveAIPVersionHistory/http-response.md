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
    "size" : 10,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 6,
      "aipId" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",
      "state" : "STORED",
      "aip" : {
        "providerId" : "testRetrieveAIPVersionHistory",
        "sipId" : "URN:SIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",
        "version" : 1,
        "ipType" : "DATA",
        "id" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V1",
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
                "comment" : "SIP testRetrieveAIPVersionHistory generated",
                "date" : "2021-09-16T19:32:06.286Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created from SIP testRetrieveAIPVersionHistory(version 1).",
                "date" : "2021-09-16T19:32:07.401Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2021-09-16T19:32:07.407Z"
              } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          }
        },
        "type" : "Feature"
      },
      "storages" : [ "NAS #1" ],
      "last" : false,
      "sessionOwner" : "ESA",
      "session" : "2021-09-16T19:32:06.286Z",
      "categories" : [ "CAT 2", "CAT 1" ],
      "providerId" : "testRetrieveAIPVersionHistory",
      "version" : 1,
      "tags" : [ ],
      "creationDate" : "2021-09-16T19:32:07.406Z",
      "lastUpdate" : "2021-09-16T19:32:08.523Z",
      "ipType" : "DATA"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 7,
      "aipId" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",
      "state" : "STORED",
      "aip" : {
        "providerId" : "testRetrieveAIPVersionHistory",
        "sipId" : "URN:SIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",
        "version" : 2,
        "ipType" : "DATA",
        "id" : "URN:AIP:DATA:PROJECT:b0b0d3ec-d64b-3a80-b4e0-8770ecec5fdd:V2",
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
                "comment" : "SIP testRetrieveAIPVersionHistory generated",
                "date" : "2021-09-16T19:32:06.292Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created from SIP testRetrieveAIPVersionHistory(version 2).",
                "date" : "2021-09-16T19:32:07.435Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2021-09-16T19:32:07.457Z"
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
      "session" : "2021-09-16T19:32:06.291Z",
      "categories" : [ "CAT 4", "CAT 3" ],
      "providerId" : "testRetrieveAIPVersionHistory",
      "version" : 2,
      "tags" : [ ],
      "creationDate" : "2021-09-16T19:32:07.456Z",
      "lastUpdate" : "2021-09-16T19:32:08.502Z",
      "ipType" : "DATA"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/aips?page=0&size=10&sort=id,asc"
  } ]
}
```
