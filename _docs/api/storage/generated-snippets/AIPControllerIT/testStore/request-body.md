* **Data params**

```json
 {
  "features" : [ {
    "providerId" : "providerId",
    "sipId" : "URN:SIP:DATA:PROJECT:2dbda6ba-46f6-4bb9-8dca-5da2ff77b457:V1",
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:2dbda6ba-46f6-4bb9-8dca-5da2ff77b457:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
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
            "date" : "2018-11-05T08:50:28.276Z"
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
