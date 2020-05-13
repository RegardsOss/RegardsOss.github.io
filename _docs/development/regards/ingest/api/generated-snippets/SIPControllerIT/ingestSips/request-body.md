    ***Data params**

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
    "geometry" : {
      "coordinates" : [ [ 5.0, 5.0 ], [ 25.0, 25.0 ] ],
      "type" : "MultiPoint"
    },
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
          "algorithm" : "MD5",
          "checksum" : "b463726cfbb52d47e432bedf08edbec3",
          "fileSize" : 12345
        }
      } ],
      "pdi" : {
        "contextInformation" : {
          "tags" : [ "JASON_MISSION" ]
        },
        "referenceInformation" : {
          "ark" : "http://example.org/ark:/13030/654xz321/s3/f8.05v.tiff",
          "ivoa" : "ivo://XXXXX-YYYYYY",
          "doi" : "https://doi.org/10.1007/s00223-003-0070-0"
        },
        "provenanceInformation" : {
          "history" : [ {
            "type" : "creation",
            "comment" : "AIP creation",
            "date" : "2014-01-02T22:10:05Z"
          }, {
            "type" : "update",
            "comment" : "instrument calibration",
            "date" : "2014-01-09T08:01:37Z"
          }, {
            "type" : "update",
            "comment" : "data acquisition",
            "date" : "2014-02-13T11:25:36Z"
          }, {
            "type" : "update",
            "comment" : "new calibratiopn parameter 0.001",
            "date" : "2014-02-19T12:31:17Z"
          } ],
          "facility" : "CNES",
          "instrument" : "Doris instrument",
          "filter" : "a filter",
          "detector" : "detector",
          "proposal" : "a proposal",
          "additional" : {
            "key-ref-3" : "additional value 3",
            "key-ref-2" : "additional value 2",
            "key-ref-1" : "additional value 1"
          }
        },
        "fixityInformation" : {
          "key-fixity-1" : "fixity value 1",
          "key-fixity-2" : "fixity value 2"
        },
        "accessRightInformation" : {
          "licence" : "licence",
          "dataRights" : "access rights",
          "publicReleaseDate" : "2014-01-12T22:10:05Z"
        }
      },
      "descriptiveInformation" : {
        "dateProperty" : "2014-05-03T01:10:17Z",
        "longProperty" : 987654,
        "stringProperty" : "Lorem ipsum dolor sit amet"
      }
    },
    "type" : "Feature",
    "bbox" : [ 19.0, 93.0 ]
  } ],
  "type" : "FeatureCollection"
}
```
