#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

        ```json
    
{
  "metadata" : {
    "size" : 20,
    "totalElements" : 4,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 26,
      "name" : "vcount",
      "type" : "LONG",
      "unit" : "unitless",
      "fragment" : {
        "id" : 1,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.vcount"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 2,
      "name" : "START_DATE",
      "description" : "date at which the acquisition of the data has started",
      "type" : "DATE_ISO8601",
      "unit" : "unitless",
      "fragment" : {
        "id" : 1,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.START_DATE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 4,
      "name" : "FILE_SIZE",
      "description" : "file size",
      "type" : "INTEGER",
      "unit" : "unitless",
      "fragment" : {
        "id" : 1,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.FILE_SIZE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
      "name" : "STOP_DATE",
      "description" : "date at which the acquisition of the data has ended",
      "type" : "DATE_ISO8601",
      "unit" : "unitless",
      "fragment" : {
        "id" : 1,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : true,
      "optional" : false,
      "label" : "forTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.STOP_DATE"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/attributes?page=0&size=20"
  } ]
}
        ```
