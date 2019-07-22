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
  "providerId" : "providerId",
  "sipId" : "URN:SIP:DATA:PROJECT:8b618688-c767-4ae0-95ef-8d5e2b648ef9:V1",
  "state" : "VALID",
  "ipType" : "DATA",
  "id" : "URN:AIP:DATA:PROJECT:8b618688-c767-4ae0-95ef-8d5e2b648ef9:V1",
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
        "urls" : [ "file:/app_to_build/storage/storage-rest/src/test/resources/data.txt" ],
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
          "date" : "2019-07-19T17:02:01.357Z"
        }, {
          "type" : "SUBMISSION",
          "comment" : "Submission to REGARDS",
          "date" : "2019-07-19T17:02:01.403Z"
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
}
        ```
