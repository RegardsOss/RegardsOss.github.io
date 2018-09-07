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

{
  "content" : {
    "id" : 57,
    "name" : "FLOAT_ATT",
    "description" : "float description",
    "type" : "DOUBLE",
    "fragment" : {
      "id" : 27,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "internal" : false
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/57"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/57"
  } ]
}
```
