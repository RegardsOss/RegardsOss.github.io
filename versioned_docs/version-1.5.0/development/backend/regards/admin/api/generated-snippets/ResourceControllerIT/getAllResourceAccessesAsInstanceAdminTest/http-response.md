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
    "totalElements" : 62,
    "totalPages" : 7,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "description" : "Updates the setting managing the access requests",
      "microservice" : "Test application",
      "controllerSimpleName" : "AccessSettingsController",
      "resource" : "/accesses/settings",
      "verb" : "PUT",
      "defaultRole" : "PROJECT_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/1"
    } ]
  }, {
    "content" : {
      "id" : 2,
      "description" : "Retrieves the settings managing the access requests",
      "microservice" : "Test application",
      "controllerSimpleName" : "AccessSettingsController",
      "resource" : "/accesses/settings",
      "verb" : "GET",
      "defaultRole" : "PROJECT_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/2"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/2"
    } ]
  }, {
    "content" : {
      "id" : 3,
      "description" : "Allow admins to invalidate the license of the project for all the users of the project",
      "microservice" : "Test application",
      "controllerSimpleName" : "LicenseController",
      "resource" : "/license/reset",
      "verb" : "PUT",
      "defaultRole" : "ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/3"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/3"
    } ]
  }, {
    "content" : {
      "id" : 4,
      "description" : "Retrieve if the current user has accepted the license of the project",
      "microservice" : "Test application",
      "controllerSimpleName" : "LicenseController",
      "resource" : "/license",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/4"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/4"
    } ]
  }, {
    "content" : {
      "id" : 5,
      "description" : "Allow current user to accept the license of the project",
      "microservice" : "Test application",
      "controllerSimpleName" : "LicenseController",
      "resource" : "/license",
      "verb" : "PUT",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/5"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/5"
    } ]
  }, {
    "content" : {
      "id" : 6,
      "description" : "Retrieve all resources for the given microservice and the given controller",
      "microservice" : "Test application",
      "controllerSimpleName" : "MicroserviceResourceController",
      "resource" : "/resources/microservices/{microservicename}/controllers",
      "verb" : "GET",
      "defaultRole" : "PROJECT_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/6"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/6"
    } ]
  }, {
    "content" : {
      "id" : 7,
      "description" : "Retrieve all resources for the given microservice and the given controller",
      "microservice" : "Test application",
      "controllerSimpleName" : "MicroserviceResourceController",
      "resource" : "/resources/microservices/{microservicename}/controllers/{controllername}",
      "verb" : "GET",
      "defaultRole" : "PROJECT_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/7"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/7"
    } ]
  }, {
    "content" : {
      "id" : 8,
      "description" : "Register all endpoints of a microservice",
      "microservice" : "Test application",
      "controllerSimpleName" : "MicroserviceResourceController",
      "resource" : "/resources/microservices/{microservicename}",
      "verb" : "POST",
      "defaultRole" : "INSTANCE_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/8"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/8"
    } ]
  }, {
    "content" : {
      "id" : 9,
      "description" : "Retrieve accessible resource accesses of the user among the given microservice",
      "microservice" : "Test application",
      "controllerSimpleName" : "MicroserviceResourceController",
      "resource" : "/resources/microservices/{microservicename}",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/9"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/9"
    } ]
  }, {
    "content" : {
      "id" : 10,
      "description" : "update the list of all metadata of the user",
      "microservice" : "Test application",
      "controllerSimpleName" : "ProjectUserMetadataController",
      "resource" : "/users/{user_id}/metadatas",
      "verb" : "PUT",
      "defaultRole" : "PROJECT_ADMIN"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/10"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/10"
    } ]
  } ],
  "links" : [ {
    "rel" : "first",
    "href" : "http://localhost:8080/resources?page=0&size=10&sort=id,asc"
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/resources?page=0&size=10&sort=id,asc"
  }, {
    "rel" : "next",
    "href" : "http://localhost:8080/resources?page=1&size=10&sort=id,asc"
  }, {
    "rel" : "last",
    "href" : "http://localhost:8080/resources?page=6&size=10&sort=id,asc"
  } ]
}
```
