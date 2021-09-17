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
    "totalElements" : 25,
    "totalPages" : 2,
    "number" : 1
  },
  "content" : [ {
    "content" : {
      "id" : 101,
      "name" : "VMIN",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 5,
        "name" : "ALTITUDE",
        "description" : "Altitude fragment",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.ALTITUDE.VMIN",
      "virtual" : false
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 98,
      "name" : "VMAX",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 3,
        "name" : "LONGITUDE",
        "description" : "Longitude fragment",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.LONGITUDE.VMAX",
      "virtual" : false
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 102,
      "name" : "VMAX",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 5,
        "name" : "ALTITUDE",
        "description" : "Altitude fragment",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.ALTITUDE.VMAX",
      "virtual" : false
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 100,
      "name" : "VMAX",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 4,
        "name" : "LATITUDE",
        "description" : "Latitude fragment",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.LATITUDE.VMAX",
      "virtual" : false
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 99,
      "name" : "VMIN",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 4,
        "name" : "LATITUDE",
        "description" : "Latitude fragment",
        "virtual" : false
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.LATITUDE.VMIN",
      "virtual" : false
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "first",
    "href" : "http://localhost:8080/datasets/data/attributes?page=0&size=20"
  }, {
    "rel" : "prev",
    "href" : "http://localhost:8080/datasets/data/attributes?page=0&size=20"
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/data/attributes?page=1&size=20"
  }, {
    "rel" : "last",
    "href" : "http://localhost:8080/datasets/data/attributes?page=1&size=20"
  } ]
}
```
