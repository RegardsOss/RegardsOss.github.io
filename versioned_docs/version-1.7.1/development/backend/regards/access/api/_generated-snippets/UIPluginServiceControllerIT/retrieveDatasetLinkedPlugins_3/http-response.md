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
    "id" : 70,
    "pluginDefinition" : {
      "id" : 209,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "ONE", "MANY" ],
      "entityTypes" : [ "DATA", "COLLECTION" ],
      "roleName" : "PUBLIC"
    },
    "active" : true,
    "label" : "label",
    "linkedToAllEntities" : false,
    "conf" : "{}"
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 71,
    "pluginDefinition" : {
      "id" : 209,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "ONE", "MANY" ],
      "entityTypes" : [ "DATA", "COLLECTION" ],
      "roleName" : "PUBLIC"
    },
    "active" : true,
    "label" : "label",
    "linkedToAllEntities" : false,
    "conf" : "{}"
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 75,
    "pluginDefinition" : {
      "id" : 209,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "ONE", "MANY" ],
      "entityTypes" : [ "DATA", "COLLECTION" ],
      "roleName" : "PUBLIC"
    },
    "active" : true,
    "label" : "label",
    "linkedToAllEntities" : true,
    "conf" : "{}"
  },
  "links" : [ ]
} ]
```
