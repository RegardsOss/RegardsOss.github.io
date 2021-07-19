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
    "size" : 20,
    "totalElements" : 11,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "name" : "string-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/string/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/1"
    } ]
  }, {
    "content" : {
      "id" : 2,
      "name" : "full-text-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/full-text/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/2"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/2"
    } ]
  }, {
    "content" : {
      "id" : 3,
      "name" : "numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/3"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/3"
    } ]
  }, {
    "content" : {
      "id" : 4,
      "name" : "two-numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/4"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/4"
    } ]
  }, {
    "content" : {
      "id" : 5,
      "name" : "temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/5"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/5"
    } ]
  }, {
    "content" : {
      "id" : 6,
      "name" : "two-temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/6"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/6"
    } ]
  }, {
    "content" : {
      "id" : 7,
      "name" : "enumerated-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/enumerated/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/7"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/7"
    } ]
  }, {
    "content" : {
      "id" : 61,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/61"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/61"
    } ]
  }, {
    "content" : {
      "id" : 62,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/62"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/62"
    } ]
  }, {
    "content" : {
      "id" : 63,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/63"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/63"
    } ]
  }, {
    "content" : {
      "id" : 64,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/64"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/64"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/uiplugins/definition?page=0&size=20&sort=id,asc"
  } ]
}
```
