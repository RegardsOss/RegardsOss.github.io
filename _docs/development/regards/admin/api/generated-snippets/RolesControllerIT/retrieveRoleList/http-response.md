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
    "id" : 1,
    "name" : "PUBLIC",
    "authorizedAddresses" : [ ],
    "isDefault" : false,
    "isNative" : true
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/roles/PUBLIC"
  }, {
    "rel" : "manage-resource-access",
    "href" : "http://localhost:8080/roles/PUBLIC/resources"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/roles"
  }, {
    "rel" : "borrowable",
    "href" : "http://localhost:8080/roles/borrowables"
  } ]
}, {
  "content" : {
    "id" : 18,
    "name" : "TEST_ROLE",
    "parentRole" : {
      "id" : 1,
      "name" : "PUBLIC",
      "authorizedAddresses" : [ ],
      "isDefault" : false,
      "isNative" : true
    },
    "isDefault" : false,
    "isNative" : false
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/roles/TEST_ROLE"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/roles/TEST_ROLE"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/roles/TEST_ROLE"
  }, {
    "rel" : "manage-resource-access",
    "href" : "http://localhost:8080/roles/TEST_ROLE/resources"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/roles"
  }, {
    "rel" : "borrowable",
    "href" : "http://localhost:8080/roles/borrowables"
  } ]
}, {
  "content" : {
    "id" : 2,
    "name" : "REGISTERED_USER",
    "parentRole" : {
      "id" : 1,
      "name" : "PUBLIC",
      "authorizedAddresses" : [ ],
      "isDefault" : false,
      "isNative" : true
    },
    "authorizedAddresses" : [ ],
    "isDefault" : true,
    "isNative" : true
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/roles/REGISTERED_USER"
  }, {
    "rel" : "manage-resource-access",
    "href" : "http://localhost:8080/roles/REGISTERED_USER/resources"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/roles"
  }, {
    "rel" : "borrowable",
    "href" : "http://localhost:8080/roles/borrowables"
  } ]
}, {
  "content" : {
    "id" : 3,
    "name" : "ADMIN",
    "parentRole" : {
      "id" : 2,
      "name" : "REGISTERED_USER",
      "parentRole" : {
        "id" : 1,
        "name" : "PUBLIC",
        "authorizedAddresses" : [ ],
        "isDefault" : false,
        "isNative" : true
      },
      "authorizedAddresses" : [ ],
      "isDefault" : true,
      "isNative" : true
    },
    "authorizedAddresses" : [ ],
    "isDefault" : false,
    "isNative" : true
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/roles/ADMIN"
  }, {
    "rel" : "manage-resource-access",
    "href" : "http://localhost:8080/roles/ADMIN/resources"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/roles"
  }, {
    "rel" : "borrowable",
    "href" : "http://localhost:8080/roles/borrowables"
  } ]
}, {
  "content" : {
    "id" : 4,
    "name" : "PROJECT_ADMIN",
    "authorizedAddresses" : [ ],
    "isDefault" : false,
    "isNative" : true
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/roles/PROJECT_ADMIN"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/roles"
  }, {
    "rel" : "borrowable",
    "href" : "http://localhost:8080/roles/borrowables"
  } ]
} ]
```
