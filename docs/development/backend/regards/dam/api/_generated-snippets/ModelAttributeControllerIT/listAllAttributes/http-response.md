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
    "id" : 28,
    "attribute" : {
      "id" : 28,
      "name" : "attLsAM",
      "type" : "STRING",
      "fragment" : {
        "id" : 7,
        "name" : "default",
        "description" : "Default fragment",
        "virtual" : false
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM",
      "virtual" : false
    },
    "model" : {
      "id" : 26,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
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
        "description" : "Default fragment",
        "virtual" : false
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "properties" : [ ],
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM2",
      "virtual" : false
    },
    "model" : {
      "id" : 26,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelLsAM/attributes"
  } ]
} ]
```
