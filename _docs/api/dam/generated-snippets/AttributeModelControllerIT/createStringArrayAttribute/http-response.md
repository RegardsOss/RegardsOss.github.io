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
    "id" : 206,
    "name" : "STRING_ARRAY_ATT",
    "description" : "string array description",
    "type" : "STRING_ARRAY",
    "fragment" : {
      "id" : 143,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/206"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}
```
