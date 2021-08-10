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
    
[ {
  "content" : {
    "id" : 28,
    "attribute" : {
      "id" : 28,
      "name" : "attLsAM",
      "type" : "STRING",
      "fragment" : {
        "id" : 7,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM"
    },
    "model" : {
      "id" : 26,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/28"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/28"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelLsAM/attributes"
  } ]
}, {
  "content" : {
    "id" : 29,
    "attribute" : {
      "id" : 29,
      "name" : "attLsAM2",
      "type" : "STRING",
      "fragment" : {
        "id" : 7,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM2"
    },
    "model" : {
      "id" : 26,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/29"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/29"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelLsAM/attributes"
  } ]
} ]
```
