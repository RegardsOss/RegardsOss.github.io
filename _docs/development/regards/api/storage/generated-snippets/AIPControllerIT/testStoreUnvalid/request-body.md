* **Data params**

```json
 {
  "features" : [ {
    "providerId" : "providerId",
    "sipId" : "URN:SIP:DATA:PROJECT:b7716709-b1e6-4ace-8071-0e0173caea27:V1",
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:b7716709-b1e6-4ace-8071-0e0173caea27:V1",
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
          "urls" : [ "file:/home/msordi/git/rs-storage/storage/storage-rest/src/test/resources/data.txt" ],
          "filename" : "data.txt",
          "algorithm" : "MD5"
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
            "date" : "2018-09-06T13:10:47.448Z"
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
  } ],
  "type" : "FeatureCollection"
}
```
