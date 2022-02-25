### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
{
  "properties" : {
    "totalResults" : 15,
    "startIndex" : 0,
    "itemsPerPage" : 100,
    "query" : {
      "searchFilters" : {
        "maxRecords" : "100",
        "page" : "1",
        "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }
    },
    "description" : "desc",
    "links" : [ {
      "rel" : "self",
      "type" : "application/geo+json",
      "href" : "http://localhost:8080/engines/opensearch/entities/search?page=0&maxRecords=100&size=100&token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
    } ],
    "id" : "af064d24-682a-4ba4-b577-682b8dc21b60",
    "title" : "search"
  },
  "features" : [ {
    "id" : "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "providerId" : "Solar system",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1",
        "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1",
        "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1/dataobjects/search?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "startSystem" : "Solar system",
      "title" : "Solar system",
      "tags" : [ "REGARDS", "CS-SI", "CNES" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002097195313:V1",
    "geometry" : {
      "coordinates" : [ [ [ 10.0, 10.0 ], [ 10.0, 30.0 ], [ 30.0, 30.0 ], [ 30.0, 10.0 ], [ 10.0, 10.0 ] ] ],
      "type" : "Polygon"
    },
    "normalizedGeometry" : null,
    "properties" : {
      "thumbnail" : "http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Mercury",
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Mercury",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ],
      "sun_distance" : 58000000,
      "planet_type" : "Telluric",
      "diameter" : 4878,
      "providerId" : "Mercury",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002097195313:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002097195313:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "enclosure",
        "type" : "application/octet-stream",
        "title" : "test.nc",
        "href" : "http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_sd.jpg",
        "href" : "http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_md.jpg",
        "href" : "http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_hd.jpg",
        "href" : "http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "enclosure",
        "type" : "application/png",
        "title" : "thumbnail.png",
        "href" : "http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "rawdata" : "http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw",
      "updated" : "2021-09-16T18:41:50.746Z",
      "quicklook" : [ "http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw", "http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw", "http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000509552393:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 228000000,
      "planet_type" : "Telluric",
      "diameter" : 6800,
      "providerId" : "Mars",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Mars",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000509552393:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000509552393:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Mars",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001766965923:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 2800000000,
      "planet_type" : "Ice giant",
      "diameter" : 51800,
      "providerId" : "Uranus",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Uranus",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001766965923:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001766965923:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Uranus",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000566681178:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 50000000,
      "planet_type" : "Telluric",
      "diameter" : 1000,
      "providerId" : "Kepler 90b",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Kepler 90b",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000566681178:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000566681178:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Kepler 90b",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000891428209:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "providerId" : "data_two",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000891428209:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000891428209:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "title" : "data_two",
      "name_test" : "data_two_test",
      "tags" : [ ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:COLLECTION:opensearch:7f667158-3de6-4491-953a-b06190d9af94:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "star" : "Sun",
      "providerId" : "Sun",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:COLLECTION:opensearch:7f667158-3de6-4491-953a-b06190d9af94:V1",
        "href" : "http://localhost:8080/engines/opensearch/collections/URN:AIP:COLLECTION:opensearch:7f667158-3de6-4491-953a-b06190d9af94:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "abstract" : "The Sun is the star at the center of the Solar System.",
      "title" : "Sun",
      "tags" : [ ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827451355:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 108000000,
      "planet_type" : "Telluric",
      "diameter" : 12104,
      "providerId" : "Venus",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Venus",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827451355:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000827451355:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Venus",
      "params" : [ "near", "sun" ],
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002102074836:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 150000000,
      "planet_type" : "Telluric",
      "diameter" : 12756,
      "providerId" : "Earth",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Earth",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002102074836:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002102074836:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Earth",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000194403721:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 1427000000,
      "planet_type" : "Gas giant",
      "diameter" : 120536,
      "providerId" : "Saturn",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Saturn",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000194403721:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000194403721:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Saturn",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:COLLECTION:opensearch:e7183ea8-d372-44eb-871e-2d9907da434e:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "providerId" : "Milky way",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:COLLECTION:opensearch:e7183ea8-d372-44eb-871e-2d9907da434e:V1",
        "href" : "http://localhost:8080/engines/opensearch/collections/URN:AIP:COLLECTION:opensearch:e7183ea8-d372-44eb-871e-2d9907da434e:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "abstract" : "The Milky Way is the galaxy that contains our Solar System.",
      "title" : "Milky way",
      "galaxy" : "Milky way",
      "tags" : [ ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002109847431:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 778000000,
      "planet_type" : "Gas giant",
      "diameter" : 143000,
      "providerId" : "Jupiter",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Jupiter",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002109847431:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-002109847431:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Jupiter",
      "params" : [ "alpha", "beta", "gamma" ],
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000251328440:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "providerId" : "data_one",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000251328440:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-000251328440:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "title" : "data_one",
      "name_test" : "data_one_test",
      "tags" : [ ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001956405425:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "sun_distance" : 4489435980,
      "planet_type" : "Ice giant",
      "diameter" : 49500,
      "providerId" : "Neptune",
      "TimePeriod" : {
        "stopDate" : "2024-09-16T18:41:50.747Z",
        "startDate" : "2021-09-16T18:41:50.746Z"
      },
      "planet" : "Neptune",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001956405425:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001956405425:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "origine" : {
        "name" : "CNES",
        "link" : "http://cnes.fr",
        "contacts" : [ {
          "name" : "JeanPaul",
          "locations" : [ {
            "institut" : "CNES-001",
            "code" : 1
          } ]
        }, {
          "name" : "Bernadette",
          "locations" : [ {
            "institut" : "CNES-156",
            "code" : 156
          } ]
        } ]
      },
      "title" : "Neptune",
      "updated" : "2021-09-16T18:41:50.746Z",
      "tags" : [ "URN:AIP:DATASET:opensearch:853ad1bd-c0ac-42a3-a5bd-ce21e1cf5bca:V1" ]
    },
    "type" : "Feature"
  }, {
    "id" : "URN:AIP:DATASET:opensearch:188390d9-9c76-436b-bbea-3df7de6649a8:V1",
    "geometry" : null,
    "normalizedGeometry" : null,
    "properties" : {
      "providerId" : "Kepler 90 planetary system",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATASET:opensearch:188390d9-9c76-436b-bbea-3df7de6649a8:V1",
        "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:188390d9-9c76-436b-bbea-3df7de6649a8:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      }, {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATASET:opensearch:188390d9-9c76-436b-bbea-3df7de6649a8:V1",
        "href" : "http://localhost:8080/engines/opensearch/datasets/URN:AIP:DATASET:opensearch:188390d9-9c76-436b-bbea-3df7de6649a8:V1/dataobjects/search?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkyNH0.pwLmjA0pVc6LnIDjJ0mbyIZUgTxs-5BeqBos5-Byu6NCAHwkWqOV8jxwgz1_GXrgEH-4gFm0EPnqSFX_gCCRXw"
      } ],
      "startSystem" : "Kepler 90 planetary system",
      "title" : "Kepler 90 planetary system",
      "tags" : [ "REGARDS", "CS-SI", "CNES" ]
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```
