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
    "id" : 91,
    "name" : "Attribute1",
    "type" : "STRING",
    "fragment" : {
      "id" : 43,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute1",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute1"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/91"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/91"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/91"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 92,
    "name" : "Attribute2",
    "type" : "INTEGER",
    "fragment" : {
      "id" : 43,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute2",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute2"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/92"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/92"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/92"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 93,
    "name" : "Attribute3",
    "type" : "DATE_ISO8601",
    "fragment" : {
      "id" : 43,
      "name" : "test",
      "description" : "Test",
      "version" : "1.0"
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute3",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute3"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/93"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/93"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/93"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
```
