* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: storage-service-test:default,test,noschedule,testAmqp:-1`
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
    "size" : 10,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "providerId" : "providerId",
      "sipId" : "URN:SIP:DATA:PROJECT:a89adcf4-8f68-479b-b3c5-30c33bf8a431:V1",
      "state" : "VALID",
      "ipType" : "DATA",
      "id" : "URN:AIP:DATA:PROJECT:a89adcf4-8f68-479b-b3c5-30c33bf8a431:V1",
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
            "reference" : false,
            "urls" : [ "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/src/test/resources/data.txt" ],
            "filename" : "data.txt",
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
              "date" : "2018-11-05T08:51:07.976Z"
            }, {
              "type" : "SUBMISSION",
              "comment" : "Submission to REGARDS",
              "date" : "2018-11-05T08:51:08.084Z"
            } ],
            "facility" : "CS",
            "session" : "Session123"
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
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/aips"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/aips/URN:AIP:DATA:PROJECT:a89adcf4-8f68-479b-b3c5-30c33bf8a431:V1"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/aips/URN:AIP:DATA:PROJECT:a89adcf4-8f68-479b-b3c5-30c33bf8a431:V1"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/aips?page=0&size=10&sort=id,asc"
  } ]
}
```
