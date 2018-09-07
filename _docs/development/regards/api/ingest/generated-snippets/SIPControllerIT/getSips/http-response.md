* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "metadata" : {
    "size" : 20,
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 6,
      "providerId" : "SIP_002",
      "sipId" : "URN:SIP:DATA:PROJECT:bdacbc80-624d-3a7c-8de7-464743b3d1f9:V1",
      "owner" : "default_user@regards.fr",
      "version" : 1,
      "state" : "CREATED",
      "checksum" : "c60792db069e90d3353411b2b9436dac",
      "sip" : {
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
            "key-misc-3" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "key-misc-1" : "misc value 1",
            "key-misc-2" : "2014-02-10T00:00:01.123Z"
          }
        },
        "type" : "Feature"
      },
      "ingestDate" : "2018-09-06T09:08:17.624Z",
      "processing" : "DefaultProcessingChain",
      "session" : {
        "id" : "sessionId",
        "lastActivationDate" : "2018-09-06T09:08:17.641Z",
        "sipsCount" : 0,
        "indexedSipsCount" : 0,
        "storedSipsCount" : 0,
        "generatedSipsCount" : 0,
        "errorSipsCount" : 0,
        "deletedSipsCount" : 0
      }
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 5,
      "providerId" : "SIP_001",
      "sipId" : "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1",
      "owner" : "default_user@regards.fr",
      "version" : 1,
      "state" : "CREATED",
      "checksum" : "f2e87be1d720270f4ed51a407edb3864",
      "sip" : {
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
            "key-misc-3" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "key-misc-1" : "misc value 1",
            "key-misc-2" : "2014-02-10T00:00:01.123Z"
          }
        },
        "type" : "Feature"
      },
      "ingestDate" : "2018-09-06T09:08:17.547Z",
      "processing" : "DefaultProcessingChain",
      "session" : {
        "id" : "sessionId",
        "lastActivationDate" : "2018-09-06T09:08:17.641Z",
        "sipsCount" : 0,
        "indexedSipsCount" : 0,
        "storedSipsCount" : 0,
        "generatedSipsCount" : 0,
        "errorSipsCount" : 0,
        "deletedSipsCount" : 0
      }
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/sips?page=0&size=20"
  } ]
}
```
