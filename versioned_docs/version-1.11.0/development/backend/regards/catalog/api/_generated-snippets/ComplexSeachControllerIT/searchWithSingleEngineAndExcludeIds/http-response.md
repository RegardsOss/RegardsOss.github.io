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
  "metadata" : {
    "size" : 20,
    "totalElements" : 10,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-000452777987:LAST",
      "providerId" : "Saturn",
      "entityType" : "DATA",
      "label" : "Saturn",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-000452777987:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Gas giant",
        "diameter" : 120536,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Saturn",
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
        "sun_distance" : 1427000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001982875630:LAST",
      "providerId" : "Neptune",
      "entityType" : "DATA",
      "label" : "Neptune",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001982875630:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Ice giant",
        "diameter" : 49500,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Neptune",
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
        "sun_distance" : 4489435980
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001367490752:LAST",
      "providerId" : "Venus",
      "entityType" : "DATA",
      "label" : "Venus",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001367490752:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Telluric",
        "diameter" : 12104,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Venus",
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
        "sun_distance" : 108000000,
        "params" : [ "near", "sun" ]
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001350711628:LAST",
      "providerId" : "Earth",
      "entityType" : "DATA",
      "label" : "Earth",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001350711628:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Telluric",
        "diameter" : 12756,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Earth",
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
        "sun_distance" : 150000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-000861301568:LAST",
      "providerId" : "Kepler 90b",
      "entityType" : "DATA",
      "label" : "Kepler 90b",
      "model" : "planet",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-000861301568:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Telluric",
        "diameter" : 1000,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Kepler 90b",
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
        "sun_distance" : 50000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001770420709:LAST",
      "providerId" : "data_two",
      "entityType" : "DATA",
      "label" : "data_two",
      "model" : "model_test",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001770420709:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "name_test" : "data_two_test"
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001060302522:LAST",
      "providerId" : "Mercury",
      "entityType" : "DATA",
      "label" : "Mercury",
      "model" : "planet",
      "files" : {
        "QUICKLOOK_HD" : [ {
          "reference" : false,
          "uri" : "http://regards/le_quicklook_hd.jpg",
          "mimeType" : "application/jpg",
          "imageWidth" : 100.0,
          "imageHeight" : 100.0,
          "types" : [ ]
        } ],
        "QUICKLOOK_SD" : [ {
          "reference" : false,
          "uri" : "http://regards/le_quicklook_sd.jpg",
          "mimeType" : "application/jpg",
          "imageWidth" : 100.0,
          "imageHeight" : 100.0,
          "types" : [ ]
        } ],
        "QUICKLOOK_MD" : [ {
          "reference" : false,
          "uri" : "http://regards/le_quicklook_md.jpg",
          "mimeType" : "application/jpg",
          "imageWidth" : 100.0,
          "imageHeight" : 100.0,
          "types" : [ ]
        } ],
        "RAWDATA" : [ {
          "dataType" : "RAWDATA",
          "reference" : false,
          "uri" : "http://regards/test.nc",
          "mimeType" : "application/octet-stream",
          "online" : true,
          "filesize" : 10,
          "filename" : "test.nc",
          "types" : [ ]
        } ],
        "THUMBNAIL" : [ {
          "reference" : false,
          "uri" : "http://regards/thumbnail.png",
          "mimeType" : "application/png",
          "imageWidth" : 250.0,
          "imageHeight" : 250.0,
          "types" : [ ]
        } ]
      },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001060302522:V1",
      "geometry" : {
        "coordinates" : [ [ [ 10.0, 10.0 ], [ 10.0, 30.0 ], [ 30.0, 30.0 ], [ 30.0, 10.0 ], [ 10.0, 10.0 ] ] ],
        "type" : "Polygon",
        "bbox" : null,
        "crs" : null
      },
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Telluric",
        "diameter" : 4878,
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
        "sun_distance" : 58000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-002005317146:LAST",
      "providerId" : "Mars",
      "entityType" : "DATA",
      "label" : "Mars",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-002005317146:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Telluric",
        "diameter" : 6800,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Mars",
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
        "sun_distance" : 228000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001361876400:LAST",
      "providerId" : "Uranus",
      "entityType" : "DATA",
      "label" : "Uranus",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:b25ae9a9-8149-4dd2-aa91-82586357ada8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001361876400:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Ice giant",
        "diameter" : 51800,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Uranus",
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
        "sun_distance" : 2800000000
      },
      "type" : "Feature"
    },
    "links" : [ ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001246978946:LAST",
      "providerId" : "data_one",
      "entityType" : "DATA",
      "label" : "data_one",
      "model" : "model_test",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001246978946:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "name_test" : "data_one_test"
      },
      "type" : "Feature"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/complex/search?page=0&size=20"
  } ]
}
```
