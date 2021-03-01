    ***Data params***

```json
    {
  "metadata" : {
    "sessionOwner" : "sessionOwner",
    "session" : "session",
    "ingestChain" : "DefaultProcessingChain",
    "storages" : [ {
      "pluginBusinessId" : "disk",
      "targetTypes" : [ ]
    } ],
    "categories" : [ "CAT" ]
  },
  "features" : [ {
    "ipType" : "DATA",
    "id" : "SIP_001",
    "geometry" : null,
    "normalizedGeometry" : null,
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
          "locations" : [ {
            "url" : "file:/home/kevin/git/rs-ingest/ingest/ingest-rest/data1.fits"
          } ],
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
      }
    },
    "type" : "Feature"
  }, {
    "ipType" : "DATA",
    "id" : "SIP_002",
    "geometry" : null,
    "normalizedGeometry" : null,
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
          "locations" : [ {
            "url" : "file:/home/kevin/git/rs-ingest/ingest/ingest-rest/data2.fits"
          } ],
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
      }
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```
