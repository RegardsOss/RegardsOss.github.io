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
    "id" : 1,
    "pluginId" : "aSamplePlugin",
    "label" : "a plugin configuration for the test",
    "businessId" : "02ede232-1964-483e-ab08-f4aefd8a611c",
    "version" : "12345-6789-11",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ {
      "name" : "isActive",
      "type" : "STRING",
      "value" : "true",
      "dynamic" : false
    }, {
      "name" : "param31",
      "type" : "STRING",
      "value" : "value31",
      "dynamic" : true,
      "dynamicsValues" : [ "red", "green", "blue" ]
    }, {
      "name" : "param32",
      "type" : "STRING",
      "value" : "value32",
      "dynamic" : false
    } ],
    "iconUrl" : "http://google.fr/svg/logo.svg"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/02ede232-1964-483e-ab08-f4aefd8a611c"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/02ede232-1964-483e-ab08-f4aefd8a611c"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/02ede232-1964-483e-ab08-f4aefd8a611c"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"
  } ]
}, {
  "content" : {
    "id" : 2,
    "pluginId" : "aSamplePlugin",
    "label" : "a plugin configuration for the test - second",
    "businessId" : "3bb4ce5e-00fa-41fa-8065-8f5c61090f97",
    "version" : "12345-6789-11",
    "priorityOrder" : 0,
    "active" : true,
    "parameters" : [ {
      "name" : "isActive",
      "type" : "STRING",
      "value" : "true",
      "dynamic" : false
    }, {
      "name" : "param31",
      "type" : "STRING",
      "value" : "value31",
      "dynamic" : true,
      "dynamicsValues" : [ "red", "green", "blue" ]
    }, {
      "name" : "param32",
      "type" : "STRING",
      "value" : "value32",
      "dynamic" : false
    } ],
    "iconUrl" : "http://google.fr/svg/logo.svg"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/3bb4ce5e-00fa-41fa-8065-8f5c61090f97"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/3bb4ce5e-00fa-41fa-8065-8f5c61090f97"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/3bb4ce5e-00fa-41fa-8065-8f5c61090f97"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"
  } ]
} ]
```
