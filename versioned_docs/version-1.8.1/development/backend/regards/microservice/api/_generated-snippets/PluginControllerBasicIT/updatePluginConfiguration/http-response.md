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
    
{
  "content" : {
    "id" : 9,
    "pluginId" : "aSamplePlugin",
    "label" : "a plugin configuration for the test",
    "businessId" : "c559952f-2dd5-4ba8-b205-5a32318a146d",
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
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/c559952f-2dd5-4ba8-b205-5a32318a146d"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/c559952f-2dd5-4ba8-b205-5a32318a146d"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/c559952f-2dd5-4ba8-b205-5a32318a146d"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"
  } ]
}
```
