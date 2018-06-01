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

{
  "content" : {
    "id" : 131,
    "attribute" : {
      "id" : 132,
      "name" : "attnewUpMA",
      "type" : "STRING",
      "fragment" : {
        "id" : 109,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true
    },
    "model" : {
      "id" : 228,
      "name" : "modelUpMA",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelUpMA/attributes/131"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/modelUpMA/attributes/131"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/modelUpMA/attributes/131"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/modelUpMA/attributes"
  } ]
}
```
