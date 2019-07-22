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
    "id" : 1,
    "attribute" : {
      "id" : 2,
      "name" : "att2PostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 1,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.testFrag.att2PostFrag"
    },
    "model" : {
      "id" : 1,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 2,
    "attribute" : {
      "id" : 1,
      "name" : "attPostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 1,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.testFrag.attPostFrag"
    },
    "model" : {
      "id" : 1,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
} ]
        ```
