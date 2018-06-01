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
    "id" : 104,
    "attribute" : {
      "id" : 104,
      "name" : "attGMA",
      "type" : "STRING",
      "fragment" : {
        "id" : 103,
        "name" : "default",
        "description" : "Default fragment"
      },
      "alterable" : false,
      "optional" : false,
      "label" : "ForTests",
      "dynamic" : true
    },
    "model" : {
      "id" : 203,
      "name" : "modelGMA",
      "type" : "COLLECTION"
    },
    "pos" : 0
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/modelGMA/attributes/104"
  } ]
}
```
