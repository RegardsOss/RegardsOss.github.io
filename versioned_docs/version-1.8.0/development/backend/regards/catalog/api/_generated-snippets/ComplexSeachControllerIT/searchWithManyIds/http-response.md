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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001285247882:LAST",
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
      "tags" : [ "URN:AIP:DATASET:complex_search:7fe7f90d-b7fc-4126-a2fd-7a759c08a370:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001285247882:V1",
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
      "virtualId" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001448264471:LAST",
      "providerId" : "Venus",
      "entityType" : "DATA",
      "label" : "Venus",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:complex_search:7fe7f90d-b7fc-4126-a2fd-7a759c08a370:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:complex_search:00000000-0000-0000-0000-001448264471:V1",
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
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/complex/search?page=0&size=20"
  } ]
}
```
