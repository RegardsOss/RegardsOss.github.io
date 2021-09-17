### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

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
      "version" : "1.0",
      "virtual" : false
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute3",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute3",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
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
      "version" : "1.0",
      "virtual" : false
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute1",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute1",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
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
      "version" : "1.0",
      "virtual" : false
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Attribute2",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.test.Attribute2",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/92"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
```
