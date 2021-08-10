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
                "comment" : "SIP my object #1 generated",
                "date" : "2020-05-13T12:29:17.473Z"
              }, {
                "type" : "SUBMISSION",
                "comment" : "AIP created for SIP my object #1.",
                "date" : "2020-05-13T12:29:20.254Z"
              }, {
                "type" : "STORAGE",
                "comment" : "Data file cdpp_collection.json stored on NAS #1 at http://somedomain.com/api/v1/storage/file/2.",
                "date" : "2020-05-13T12:29:20.256Z"
              } ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          }
        },
        "type" : "Feature"
      },
      "checksum" : "a503bb9d6c7841b8aaeeecaac6137464",
      "storages" : [ "NAS #1" ],
      "sessionOwner" : "ESA",
      "session" : "2020-05-13T14:29:17.472+02:00",
      "categories" : [ "CAT 2", "CAT 1" ],
      "providerId" : "my object #1",
      "version" : 1,
      "tags" : [ ],
      "creationDate" : "2020-05-13T12:29:20.256Z",
      "lastUpdate" : "2020-05-13T12:29:25.713Z",
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
