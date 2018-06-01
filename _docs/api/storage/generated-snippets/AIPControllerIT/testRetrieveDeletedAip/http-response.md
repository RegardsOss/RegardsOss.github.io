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
  "ipType" : "DATA",
  "id" : "URN:AIP:DATA:PROJECT:0004704d-2bd1-4e8f-b9d2-e789ee78e5d4:V1",
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
        "urls" : [ "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/src/test/resources/data.txt", "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/target/AIPControllerIT/de8/de89a907d33a9716d11765582102b2e0" ],
        "filename" : "data.txt",
        "algorithm" : "MD5",
        "checksum" : "de89a907d33a9716d11765582102b2e0",
        "fileSize" : 445
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
          "date" : "2018-06-01T09:40:15.25Z"
        }, {
          "type" : "SUBMISSION",
          "comment" : "Submission to REGARDS",
          "date" : "2018-06-01T09:40:15.34Z"
        }, {
          "type" : "STORAGE",
          "comment" : "File data.txt stored into REGARDS",
          "date" : "2018-06-01T09:40:17.233Z"
        }, {
          "type" : "STORAGE",
          "comment" : "File data.txt has been successfully stored",
          "date" : "2018-06-01T09:40:17.233Z"
        }, {
          "type" : "STORAGE",
          "comment" : "AIP metadata has been successfully stored into REGARDS",
          "date" : "2018-06-01T09:40:19.266Z"
        }, {
          "type" : "DELETION",
          "comment" : "AIP deletion was requested, AIP is considered deleted until its removal from archives",
          "date" : "2018-06-01T09:40:19.496Z"
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
}
```
