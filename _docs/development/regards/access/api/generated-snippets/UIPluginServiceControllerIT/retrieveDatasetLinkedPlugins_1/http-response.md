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
    "id" : 102,
    "pluginDefinition" : {
      "id" : 153,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "active" : true,
    "label" : "label",
    "linkedToAllEntities" : false,
    "conf" : "{}"
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 106,
    "pluginDefinition" : {
      "id" : 153,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "active" : true,
    "label" : "label",
    "linkedToAllEntities" : true,
    "conf" : "{}"
  },
  "links" : [ ]
} ]
```
