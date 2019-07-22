    ***Data params**

        ```json
    {
  "metadata" : {
    "processing" : "DefaultProcessingChain",
    "session" : "sessionId"
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
          "reference" : false,
          "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],
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
      },
      "miscInformation" : {
        "key-misc-1" : "misc value 1",
        "key-misc-2" : "2014-02-10T00:00:01.123Z",
        "key-misc-3" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    },
    "type" : "Feature",
    "bbox" : [ 19.0, 93.0 ]
  } ],
  "type" : "FeatureCollection"
}
        ```
