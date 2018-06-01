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
    "id" : 196,
    "name" : "City",
    "type" : "STRING",
    "fragment" : {
      "id" : 139,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "jsonPath" : "properties.Contact.City"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/196"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 197,
    "name" : "Phone",
    "type" : "STRING",
    "fragment" : {
      "id" : 139,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "jsonPath" : "properties.Contact.Phone"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/197"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 198,
    "name" : "Age",
    "type" : "INTEGER",
    "fragment" : {
      "id" : 139,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "dynamic" : true,
    "jsonPath" : "properties.Contact.Age"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/198"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
```
