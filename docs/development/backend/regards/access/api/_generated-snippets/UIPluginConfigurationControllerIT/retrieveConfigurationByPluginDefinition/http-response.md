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
  "metadata" : {
    "size" : 10,
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 102,
      "pluginDefinition" : {
        "id" : 252,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ],
        "roleName" : "PUBLIC"
      },
      "active" : true,
      "label" : "label",
      "linkedToAllEntities" : false,
      "conf" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/configurations/102"
    } ]
  }, {
    "content" : {
      "id" : 103,
      "pluginDefinition" : {
        "id" : 252,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ],
        "roleName" : "PUBLIC"
      },
      "active" : true,
      "label" : "label",
      "linkedToAllEntities" : true,
      "conf" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/configurations/103"
    } ]
  }, {
    "content" : {
      "id" : 104,
      "pluginDefinition" : {
        "id" : 252,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ],
        "roleName" : "PUBLIC"
      },
      "active" : false,
      "label" : "label",
      "linkedToAllEntities" : true,
      "conf" : "{}"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/configurations/104"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/uiplugins/252/configurations?page=0&size=10&sort=id,asc"
  } ]
}
```
