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
    "id" : 229,
    "attribute" : {
      "id" : 218,
      "name" : "attPostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 111,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true,
      "internal" : false
    },
    "model" : {
      "id" : 159,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 230,
    "attribute" : {
      "id" : 219,
      "name" : "att2PostFrag",
      "type" : "STRING",
      "fragment" : {
        "id" : 111,
        "name" : "testFrag"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true,
      "internal" : false
    },
    "model" : {
      "id" : 159,
      "name" : "modelPostFrag",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ ]
} ]
```
