* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "content" : {
    "id" : 102,
    "attribute" : {
      "id" : 102,
      "name" : "attPostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 102,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true
    },
    "model" : {
      "id" : 202,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 103,
    "attribute" : {
      "id" : 103,
      "name" : "att2PostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 102,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true
    },
    "model" : {
      "id" : 202,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
} ]
```
