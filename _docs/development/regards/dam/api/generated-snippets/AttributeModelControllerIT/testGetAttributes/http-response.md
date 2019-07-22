#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

        ```json
    
[ {
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
    "properties" : [ ],
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
}, {
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
    "properties" : [ ],
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
    "properties" : [ ],
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
} ]
        ```
