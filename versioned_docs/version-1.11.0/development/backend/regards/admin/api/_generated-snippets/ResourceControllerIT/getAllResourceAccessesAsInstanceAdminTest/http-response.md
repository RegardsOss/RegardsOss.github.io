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
    "totalElements" : 60,
    "totalPages" : 6,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "description" : "Allow admins to invalidate the license of the project for all the users of the project",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/1"
    } ]
  }, {
    "content" : {
      "id" : 2,
      "description" : "Retrieve if the current user has accepted the license of the project",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/2"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/2"
    } ]
  }, {
    "content" : {
      "id" : 3,
      "description" : "Allow current user to accept the license of the project",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/3"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/3"
    } ]
  }, {
    "content" : {
      "id" : 4,
      "description" : "Register all endpoints of a microservice",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/4"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/4"
    } ]
  }, {
    "content" : {
      "id" : 5,
      "description" : "Retrieve accessible resource accesses of the user among the given microservice",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/5"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/5"
    } ]
  }, {
    "content" : {
      "id" : 6,
      "description" : "Retrieve all resources for the given microservice and the given controller",
      "microservice" : "rs-test",
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
      "microservice" : "rs-test",
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
      "description" : "update the list of all metadata of the user",
      "microservice" : "rs-test",
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
      "href" : "http://localhost:8080/resources/8"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/resources/8"
    } ]
  }, {
    "content" : {
      "id" : 9,
      "description" : "remove all the metadata of the user",
      "microservice" : "rs-test",
      "controllerSimpleName" : "ProjectUserMetadataController",
      "resource" : "/users/{user_id}/metadatas",
      "verb" : "DELETE",
      "defaultRole" : "PROJECT_ADMIN"
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
      "description" : "retrieve the list of all metadata of the user",
      "microservice" : "rs-test",
      "controllerSimpleName" : "ProjectUserMetadataController",
      "resource" : "/users/{user_id}/metadatas",
      "verb" : "GET",
      "defaultRole" : "EXPLOIT"
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
    "href" : "http://localhost:8080/resources?page=5&size=10&sort=id,asc"
  } ]
}
```
