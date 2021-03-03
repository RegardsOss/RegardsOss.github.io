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
    "totalElements" : 25,
    "totalPages" : 2,
    "number" : 1
  },
  "content" : [ {
    "content" : {
      "id" : 84,
      "name" : "DATA_SET_ID",
      "description" : "id of the dataset",
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
      "jsonPath" : "properties.DATA_SET_ID"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 92,
      "name" : "ANSE6_STRING",
      "type" : "STRING",
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
      "jsonPath" : "properties.ANSE6_STRING"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 86,
      "name" : "DATA_AUTHOR",
      "description" : "name of the author",
      "type" : "STRING",
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
      "jsonPath" : "properties.DATA_AUTHOR"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 87,
      "name" : "DATA_AUTHOR_COMPANY",
      "description" : "author's company name",
      "type" : "STRING",
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
      "jsonPath" : "properties.DATA_AUTHOR_COMPANY"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 88,
      "name" : "DATA_CREATION_DATE",
      "description" : "date at which the data was created into the datasource",
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
      "jsonPath" : "properties.DATA_CREATION_DATE"
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
