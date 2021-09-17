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
  "facets" : [ ],
  "metadata" : {
    "size" : 20,
    "totalElements" : 15,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "licence" : "",
      "virtualId" : "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:LAST",
      "providerId" : "Solar system",
      "entityType" : "DATASET",
      "label" : "Solar system",
      "model" : "DATASET_ENGINE",
      "files" : { },
      "tags" : [ "REGARDS", "CS-SI", "CNES" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1",
      "properties" : {
        "startSystem" : "Solar system"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1"
    }, {
      "rel" : "dataobjects",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1/dataobjects/search"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000816138350:LAST",
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
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000816138350:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-000816138350:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001344714696:LAST",
      "providerId" : "Mars",
      "entityType" : "DATA",
      "label" : "Mars",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001344714696:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001344714696:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000198606992:LAST",
      "providerId" : "Uranus",
      "entityType" : "DATA",
      "label" : "Uranus",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000198606992:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-000198606992:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000217373335:LAST",
      "providerId" : "Neptune",
      "entityType" : "DATA",
      "label" : "Neptune",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000217373335:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-000217373335:V1"
    } ]
  }, {
    "content" : {
      "virtualId" : "URN:AIP:COLLECTION:legacy:c5e0d9cd-c7e7-44b3-9713-5cb77cf1196f:LAST",
      "providerId" : "Milky way",
      "entityType" : "COLLECTION",
      "label" : "Milky way",
      "model" : "galaxy",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:legacy:c5e0d9cd-c7e7-44b3-9713-5cb77cf1196f:V1",
      "properties" : {
        "galaxy" : "Milky way",
        "abstract" : "The Milky Way is the galaxy that contains our Solar System."
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/collections/URN:AIP:COLLECTION:legacy:c5e0d9cd-c7e7-44b3-9713-5cb77cf1196f:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001260966976:LAST",
      "providerId" : "Saturn",
      "entityType" : "DATA",
      "label" : "Saturn",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001260966976:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001260966976:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001650145718:LAST",
      "providerId" : "data_two",
      "entityType" : "DATA",
      "label" : "data_two",
      "model" : "model_test",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001650145718:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "name_test" : "data_two_test"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001650145718:V1"
    } ]
  }, {
    "content" : {
      "virtualId" : "URN:AIP:COLLECTION:legacy:b6ee913d-2731-4d1c-947a-214f5d588a26:LAST",
      "providerId" : "Sun",
      "entityType" : "COLLECTION",
      "label" : "Sun",
      "model" : "star",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:legacy:b6ee913d-2731-4d1c-947a-214f5d588a26:V1",
      "properties" : {
        "star" : "Sun",
        "abstract" : "The Sun is the star at the center of the Solar System."
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/collections/URN:AIP:COLLECTION:legacy:b6ee913d-2731-4d1c-947a-214f5d588a26:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000634922329:LAST",
      "providerId" : "Venus",
      "entityType" : "DATA",
      "label" : "Venus",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000634922329:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-000634922329:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-002134042297:LAST",
      "providerId" : "Earth",
      "entityType" : "DATA",
      "label" : "Earth",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-002134042297:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-002134042297:V1"
    } ]
  }, {
    "content" : {
      "licence" : "",
      "virtualId" : "URN:AIP:DATASET:legacy:deffb491-d9c6-441f-bb72-73e6dbd587e8:LAST",
      "providerId" : "Kepler 90 planetary system",
      "entityType" : "DATASET",
      "label" : "Kepler 90 planetary system",
      "model" : "DATASET_ENGINE",
      "files" : { },
      "tags" : [ "REGARDS", "CS-SI", "CNES" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:legacy:deffb491-d9c6-441f-bb72-73e6dbd587e8:V1",
      "properties" : {
        "startSystem" : "Kepler 90 planetary system"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:deffb491-d9c6-441f-bb72-73e6dbd587e8:V1"
    }, {
      "rel" : "dataobjects",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:deffb491-d9c6-441f-bb72-73e6dbd587e8:V1/dataobjects/search"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001305198742:LAST",
      "providerId" : "Kepler 90b",
      "entityType" : "DATA",
      "label" : "Kepler 90b",
      "model" : "planet",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001305198742:V1",
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
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001305198742:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001943733051:LAST",
      "providerId" : "Jupiter",
      "entityType" : "DATA",
      "label" : "Jupiter",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:fe807310-1655-4192-bca5-a1e99a7389b8:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001943733051:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Gas giant",
        "diameter" : 143000,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Jupiter",
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
        "sun_distance" : 778000000,
        "params" : [ "alpha", "beta", "gamma" ]
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001943733051:V1"
    } ]
  }, {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000018601300:LAST",
      "providerId" : "data_one",
      "entityType" : "DATA",
      "label" : "data_one",
      "model" : "model_test",
      "files" : { },
      "tags" : [ ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-000018601300:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "name_test" : "data_one_test"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-000018601300:V1"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/engines/legacy/entities/search?page=0&size=20"
  } ]
}
```
