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
    "totalElements" : 10,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 52,
      "name" : "string-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/string/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 53,
      "name" : "full-text-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/full-text/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 54,
      "name" : "numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 55,
      "name" : "two-numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 56,
      "name" : "temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 57,
      "name" : "two-temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 58,
      "name" : "enumerated-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/enumerated/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 59,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 60,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 61,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/uiplugins/definition?page=0&size=10&sort=id,asc"
  } ]
}
        ```
