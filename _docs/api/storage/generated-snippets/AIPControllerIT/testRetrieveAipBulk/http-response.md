* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: storage-service-test:default,test,testAmqp:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

{
  "features" : [ {
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:d059fda4-083c-4815-af07-92c32aaddd3a:V1",
    "geometry" : null,
    "properties" : {
      "contentInformations" : [ {
        "representationInformation" : {
          "syntax" : {
            "description" : "description",
            "mimeType" : "text/plain",
            "name" : "text"
          }
        },
        "dataObject" : {
          "regardsDataType" : "RAWDATA",
          "urls" : [ "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/src/test/resources/data.txt" ],
          "algorithm" : "MD5",
          "checksum" : "de89a907d33a9716d11765582102b2e0"
        }
      } ],
      "pdi" : {
        "contextInformation" : {
          "tags" : [ "tag" ]
        },
        "referenceInformation" : { },
        "provenanceInformation" : {
          "history" : [ {
            "type" : "SUBMISSION",
            "comment" : "test event",
            "date" : "2018-06-01T09:39:51.194Z"
          }, {
            "type" : "SUBMISSION",
            "comment" : "Submission to REGARDS",
            "date" : "2018-06-01T09:39:52.26Z"
          } ],
          "facility" : "CS"
        },
        "fixityInformation" : { },
        "accessRightInformation" : {
          "dataRights" : "public"
        }
      },
      "descriptiveInformation" : { },
      "miscInformation" : { }
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```