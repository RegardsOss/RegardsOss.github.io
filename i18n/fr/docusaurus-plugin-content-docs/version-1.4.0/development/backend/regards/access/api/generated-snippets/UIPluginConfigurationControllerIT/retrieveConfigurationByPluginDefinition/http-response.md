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
    
{
  "metadata" : {
    "size" : 10,
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 52,
      "pluginDefinition" : {
        "id" : 102,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ]
      },
      "active" : true,
      "label" : "label",
      "linkedToAllEntities" : false,
      "conf" : "{}"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 53,
      "pluginDefinition" : {
        "id" : 102,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ]
      },
      "active" : true,
      "label" : "label",
      "linkedToAllEntities" : true,
      "conf" : "{}"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 54,
      "pluginDefinition" : {
        "id" : 102,
        "name" : "PluginTest",
        "type" : "CRITERIA",
        "sourcePath" : "plugins/test/bundle.js",
        "applicationModes" : [ ],
        "entityTypes" : [ ]
      },
      "active" : false,
      "label" : "label",
      "linkedToAllEntities" : true,
      "conf" : "{}"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/uiplugins/102/configurations?page=0&size=10&sort=id,asc"
  } ]
}
```
