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
  "metadata" : {
    "size" : 20,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "ipType" : "DATA",
      "id" : "URN:AIP:DATA:PROJECT:29094743-f0b2-4784-9d49-852a3675eb27:V1",
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
              "date" : "2018-06-01T09:40:25.103Z"
            }, {
              "type" : "SUBMISSION",
              "comment" : "Submission to REGARDS",
              "date" : "2018-06-01T09:40:25.189Z"
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
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/aips/URN:AIP:DATA:PROJECT:29094743-f0b2-4784-9d49-852a3675eb27:V1"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/aips?page=0&size=20"
  } ]
}
```
