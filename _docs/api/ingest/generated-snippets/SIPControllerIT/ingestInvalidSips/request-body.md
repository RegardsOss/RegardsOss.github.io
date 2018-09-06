* **Data params**

```json
 {
  "metadata" : {
    "processing" : "DefaultProcessingChain",
    "session" : "sessionId"
  },
  "features" : [ {
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
          "algorithm" : "FAKE_ALGO",
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
  }, {
    "ipType" : "DATA",
    "id" : "SIP_002",
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
          "urls" : [ "file:/home/msordi/git/rs-ingest/ingest/ingest-rest/data2.fits" ],
          "filename" : "data2.fits",
          "algorithm" : "MD5",
          "checksum" : "sdsdfm1211vsdfdsfd"
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
  } ],
  "type" : "FeatureCollection"
}
```
