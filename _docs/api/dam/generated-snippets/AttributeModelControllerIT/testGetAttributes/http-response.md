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
    "id" : 219,
    "name" : "Attribute1",
    "type" : "STRING",
    "fragment" : {
      "id" : 150,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute1",
    "dynamic" : true,
    "jsonPath" : "properties.test.Attribute1"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/219"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/219"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 220,
    "name" : "Attribute2",
    "type" : "INTEGER",
    "fragment" : {
      "id" : 150,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute2",
    "dynamic" : true,
    "jsonPath" : "properties.test.Attribute2"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/220"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/220"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 221,
    "name" : "Attribute3",
    "type" : "DATE_ISO8601",
    "fragment" : {
      "id" : 150,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute3",
    "dynamic" : true,
    "jsonPath" : "properties.test.Attribute3"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/221"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/221"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
```
