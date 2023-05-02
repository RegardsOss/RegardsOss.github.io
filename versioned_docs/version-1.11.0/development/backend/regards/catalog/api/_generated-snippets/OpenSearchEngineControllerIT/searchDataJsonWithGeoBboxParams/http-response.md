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
    "totalResults" : 1,
    "startIndex" : 0,
    "itemsPerPage" : 100,
    "query" : {
      "searchFilters" : {
        "maxRecords" : "100",
        "box" : "15.0,15.0,20.0,20.0",
        "page" : "1",
        "token" : "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }
    },
    "description" : "desc",
    "links" : [ {
      "rel" : "self",
      "type" : "application/geo+json",
      "href" : "http://localhost:8080/engines/opensearch/dataobjects/search?page=0&maxRecords=100&box=15.0,15.0,20.0,20.0&size=100&token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
    } ],
    "id" : "1af10a47-d05f-4fba-ac6b-ed63d08e3946",
    "title" : "search"
  },
  "features" : [ {
    "id" : "URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001695258083:V1",
    "geometry" : {
      "coordinates" : [ [ [ 10.0, 10.0 ], [ 10.0, 30.0 ], [ 30.0, 30.0 ], [ 30.0, 10.0 ], [ 10.0, 10.0 ] ] ],
      "type" : "Polygon"
    },
    "normalizedGeometry" : null,
    "properties" : {
      "thumbnail" : "http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ",
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
      "tags" : [ "URN:AIP:DATASET:opensearch:21a944cc-32a5-4665-93f2-a8f7d83fd2dc:V1" ],
      "sun_distance" : 58000000,
      "planet_type" : "Telluric",
      "diameter" : 4878,
      "providerId" : "Mercury",
      "links" : [ {
        "rel" : "alternate",
        "type" : "application/geo+json",
        "title" : "GeoJson link for URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001695258083:V1",
        "href" : "http://localhost:8080/engines/opensearch/dataobjects/URN:AIP:DATA:opensearch:00000000-0000-0000-0000-001695258083:V1?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }, {
        "rel" : "enclosure",
        "type" : "application/octet-stream",
        "title" : "test.nc",
        "href" : "http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_sd.jpg",
        "href" : "http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_md.jpg",
        "href" : "http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }, {
        "rel" : "enclosure",
        "type" : "application/jpg",
        "title" : "le_quicklook_hd.jpg",
        "href" : "http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      }, {
        "rel" : "enclosure",
        "type" : "application/png",
        "title" : "thumbnail.png",
        "href" : "http://regards/thumbnail.png?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ"
      } ],
      "rawdata" : "http://regards/test.nc?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ",
      "updated" : "2021-09-16T18:41:50.746Z",
      "quicklook" : [ "http://regards/le_quicklook_md.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ", "http://regards/le_quicklook_sd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ", "http://regards/le_quicklook_hd.jpg?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJ0ZW5hbnQiOiJvcGVuc2VhcmNoIiwiZW1haWwiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsImV4cCI6MTYzMTgyNDkzN30.SLn7yDnOAdZrVr_6XSZxrumO9ehJJnYfbcAl_qGz3vDkL2MtuNhn36dpWaECzEAvl6dOSmh3KllBkX28zGRSsQ" ]
    },
    "type" : "Feature"
  } ],
  "type" : "FeatureCollection"
}
```
