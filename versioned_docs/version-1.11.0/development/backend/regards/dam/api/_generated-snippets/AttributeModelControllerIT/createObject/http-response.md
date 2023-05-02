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
    "id" : 68,
    "name" : "City",
    "type" : "STRING",
    "fragment" : {
      "id" : 32,
      "name" : "Contact",
      "description" : "User contact information",
      "virtual" : false
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.City",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
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
      "description" : "User contact information",
      "virtual" : false
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.Phone",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
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
      "description" : "User contact information",
      "virtual" : false
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.Contact.Age",
    "virtual" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/models/attributes/70"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/models/attributes"
  } ]
} ]
```
