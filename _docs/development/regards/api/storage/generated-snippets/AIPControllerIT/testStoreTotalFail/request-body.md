* **Data params**

```json
 {
  "features" : [ {
    "providerId" : "providerId",
    "sipId" : "URN:SIP:DATA:PROJECT:658eb6bd-fbb2-4d22-8997-783d63f12e7b:V1",
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:658eb6bd-fbb2-4d22-8997-783d63f12e7b:V1",
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
            "date" : "2018-09-06T13:09:19.903Z"
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
