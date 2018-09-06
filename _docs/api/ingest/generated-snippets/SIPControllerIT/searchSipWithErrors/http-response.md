* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

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
      "id" : 4,
      "providerId" : "SIP_001",
      "sipId" : "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1",
      "owner" : "me",
      "version" : 1,
      "state" : "INVALID",
      "processingErrors" : [ "error1", "error2" ],
      "checksum" : "12332323f2ds3d6g6df",
      "sip" : {
        "ipType" : "DATA",
        "id" : "SIP_001",
        "geometry" : null,
        "properties" : {
          "contentInformations" : [ {
            "representationInformation" : {
              "syntax" : {
                "description" : "http://www.iana.org/assignments/media-types/application/fits",
                "mimeType" : "application/fits",
                "name" : "FITS(FlexibleImageTransport)"
              }
            },
            "dataObject" : {
              "regardsDataType" : "RAWDATA",
              "reference" : false,
              "urls" : [ "file:/home/msordi/git/rs-ingest/ingest/ingest-rest/data1.fits" ],
              "filename" : "data1.fits",
              "algorithm" : "MD5",
              "checksum" : "sdsdfm1211vd"
            }
          } ],
          "pdi" : {
            "contextInformation" : { },
            "referenceInformation" : { },
            "provenanceInformation" : {
              "history" : [ ]
            },
            "fixityInformation" : { },
            "accessRightInformation" : { }
          },
          "descriptiveInformation" : { },
          "miscInformation" : { }
        },
        "type" : "Feature"
      },
      "ingestDate" : "2018-09-06T09:08:17.196Z",
      "processing" : "DefaultProcessingChain",
      "session" : {
        "id" : "session",
        "lastActivationDate" : "2018-09-06T09:08:17.209Z",
        "sipsCount" : 0,
        "indexedSipsCount" : 0,
        "storedSipsCount" : 0,
        "generatedSipsCount" : 0,
        "errorSipsCount" : 0,
        "deletedSipsCount" : 0
      }
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sips?page=0&size=20"
  } ]
}
```
