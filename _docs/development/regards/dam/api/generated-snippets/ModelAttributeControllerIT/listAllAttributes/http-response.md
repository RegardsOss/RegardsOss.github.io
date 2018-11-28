* **Code:** 200 OK

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

[ {
  "content" : {
    "id" : 306,
    "attribute" : {
      "id" : 245,
      "name" : "attLsAM",
      "type" : "STRING",
      "fragment" : {
        "id" : 117,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM"
    },
    "model" : {
      "id" : 184,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/306"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/306"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelLsAM/attributes"
  } ]
}, {
  "content" : {
    "id" : 307,
    "attribute" : {
      "id" : 246,
      "name" : "attLsAM2",
      "type" : "STRING",
      "fragment" : {
        "id" : 117,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true,
      "internal" : false,
      "jsonPath" : "properties.attLsAM2"
    },
    "model" : {
      "id" : 184,
      "name" : "modelLsAM",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/307"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/modelLsAM/attributes/307"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelLsAM/attributes"
  } ]
} ]
```
