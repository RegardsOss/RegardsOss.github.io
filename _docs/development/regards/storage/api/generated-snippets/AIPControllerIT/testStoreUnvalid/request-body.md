    ***Data params**

```json
    {
  "features" : [ {
    "providerId" : "providerId",
    "sipId" : "URN:SIP:DATA:PROJECT:ba1692a8-f9ae-440b-85de-2fba30be8a47:V1",
    "ipType" : "DATA",
    "id" : "URN:AIP:DATA:PROJECT:ba1692a8-f9ae-440b-85de-2fba30be8a47:V1",
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
          "urls" : [ "file:/app_to_build/storage/storage-rest/src/test/resources/data.txt" ],
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
            "date" : "2019-07-19T17:02:04.257Z"
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
