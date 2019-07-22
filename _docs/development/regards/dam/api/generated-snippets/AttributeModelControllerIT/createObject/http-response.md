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
    "id" : 68,
    "name" : "City",
    "type" : "STRING",
    "fragment" : {
      "id" : 32,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.City"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/68"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/68"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 69,
    "name" : "Phone",
    "type" : "STRING",
    "fragment" : {
      "id" : 32,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.Phone"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/69"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/69"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
}, {
  "content" : {
    "id" : 70,
    "name" : "Age",
    "type" : "INTEGER",
    "fragment" : {
      "id" : 32,
      "name" : "Contact",
      "description" : "User contact information"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.Age"
  },
  "links" : [ {
    "rel" : "update",
    "href" : "http://localhost:8080/models/attributes/70"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/models/attributes/70"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
        ```
