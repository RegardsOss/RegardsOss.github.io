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
                "mimeType" : "application/json;charset=UTF-8"
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
                "date" : "2020-05-13T12:30:07.442Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created for SIP testRetrieveAIPVersionHistory.",
                "date" : "2020-05-13T12:30:10.361Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2020-05-13T12:30:10.364Z"
              } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          }
        },
        "type" : "Feature"
      },
      "checksum" : "c435b3d8ebcf657de913e4e3bdb70181",
      "storages" : [ "NAS #1" ],
      "sessionOwner" : "ESA",
      "session" : "2020-05-13T14:30:07.442+02:00",
      "categories" : [ "CAT 4", "CAT 3" ],
      "providerId" : "testRetrieveAIPVersionHistory",
      "version" : 1,
      "tags" : [ ],
      "creationDate" : "2020-05-13T12:30:10.363Z",
      "lastUpdate" : "2020-05-13T12:30:15.548Z",
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
                "mimeType" : "application/json;charset=UTF-8"
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
                "date" : "2020-05-13T12:30:07.256Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created for SIP testRetrieveAIPVersionHistory.",
                "date" : "2020-05-13T12:30:11.544Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2020-05-13T12:30:11.546Z"
              } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          }
        },
        "type" : "Feature"
      },
      "checksum" : "e976e17eb593acca70c33e43f483af57",
      "storages" : [ "NAS #1" ],
      "sessionOwner" : "ESA",
      "session" : "2020-05-13T14:30:07.256+02:00",
      "categories" : [ "CAT 2", "CAT 1" ],
      "providerId" : "testRetrieveAIPVersionHistory",
      "version" : 2,
      "tags" : [ ],
      "creationDate" : "2020-05-13T12:30:11.546Z",
      "lastUpdate" : "2020-05-13T12:30:17.033Z",
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
