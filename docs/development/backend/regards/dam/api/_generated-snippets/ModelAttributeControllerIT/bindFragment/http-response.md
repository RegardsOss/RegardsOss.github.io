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
    
[ {
  "content" : {
    "id" : 1,
    "attribute" : {
      "id" : 2,
      "name" : "att2PostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 1,
        "name" : "testFrag",
        "virtual" : false
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.testFrag.att2PostFrag",
      "virtual" : false
    },
    "model" : {
      "id" : 1,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelPostFrag/attributes"
  } ]
}, {
  "content" : {
    "id" : 2,
    "attribute" : {
      "id" : 1,
      "name" : "attPostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 1,
        "name" : "testFrag",
        "virtual" : false
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.testFrag.attPostFrag",
      "virtual" : false
    },
    "model" : {
      "id" : 1,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelPostFrag/attributes"
  } ]
} ]
```
