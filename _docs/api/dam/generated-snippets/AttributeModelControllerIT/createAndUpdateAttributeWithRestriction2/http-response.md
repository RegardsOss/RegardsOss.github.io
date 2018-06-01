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
    "id" : 162,
    "name" : "NB_OBJECTS",
    "type" : "LONG",
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "restriction" : {
      "min" : 10,
      "max" : 100,
      "minExcluded" : false,
      "maxExcluded" : false,
      "id" : 103,
      "type" : "LONG_RANGE"
    },
    "dynamic" : true
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/162"
  } ]
}
```
