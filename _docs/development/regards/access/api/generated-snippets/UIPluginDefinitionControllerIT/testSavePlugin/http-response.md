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
      "id" : 52,
      "name" : "string-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/string/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/52"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/52"
    } ]
  }, {
    "content" : {
      "id" : 53,
      "name" : "full-text-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/full-text/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/53"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/53"
    } ]
  }, {
    "content" : {
      "id" : 54,
      "name" : "numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/54"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/54"
    } ]
  }, {
    "content" : {
      "id" : 55,
      "name" : "two-numerical-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-numerical/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/55"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/55"
    } ]
  }, {
    "content" : {
      "id" : 56,
      "name" : "temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/56"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/56"
    } ]
  }, {
    "content" : {
      "id" : 57,
      "name" : "two-temporal-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/two-temporal/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/57"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/57"
    } ]
  }, {
    "content" : {
      "id" : 58,
      "name" : "enumerated-criteria",
      "type" : "CRITERIA",
      "sourcePath" : "/plugins/criterion/enumerated/plugin.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/58"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/58"
    } ]
  }, {
    "content" : {
      "id" : 68,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/68"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/68"
    } ]
  }, {
    "content" : {
      "id" : 69,
      "name" : "PluginTest",
      "type" : "CRITERIA",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ ],
      "entityTypes" : [ ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/69"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/69"
    } ]
  }, {
    "content" : {
      "id" : 70,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/70"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/70"
    } ]
  }, {
    "content" : {
      "id" : 71,
      "name" : "PluginTest",
      "type" : "SERVICE",
      "sourcePath" : "plugins/test/bundle.js",
      "applicationModes" : [ "MANY", "ONE" ],
      "entityTypes" : [ "COLLECTION", "DATA" ]
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/uiplugins/definition/71"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/uiplugins/definition/71"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/uiplugins/definition?page=0&size=20&sort=id,asc"
  } ]
}
        ```
