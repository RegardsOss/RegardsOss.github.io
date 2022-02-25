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
    "totalElements" : 11,
    "totalPages" : 2,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 23,
      "description" : "Request for a new projectUser (Public feature).",
      "microservice" : "rs-test",
      "controllerSimpleName" : "RegistrationController",
      "resource" : "/accesses",
      "verb" : "POST",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/23"
    } ]
  }, {
    "content" : {
      "id" : 28,
      "description" : "Confirm the registration by email",
      "microservice" : "rs-test",
      "controllerSimpleName" : "RegistrationController",
      "resource" : "/accesses/verifyEmail/{token}",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/28"
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
    } ]
  }, {
    "content" : {
      "id" : 50,
      "description" : "Get the tenant datasource status (for pooled one)",
      "microservice" : "rs-test",
      "controllerSimpleName" : "JpaMultitenantController",
      "resource" : "/regards/{tenant}/datasource/status",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/50"
    } ]
  }, {
    "content" : {
      "id" : 32,
      "description" : "Retrieve accessible resource accesses of the user among the system",
      "microservice" : "rs-test",
      "controllerSimpleName" : "ResourceController",
      "resource" : "/resources",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/32"
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
    } ]
  }, {
    "content" : {
      "id" : 31,
      "description" : "Retrieve all resource accesses of the REGARDS system",
      "microservice" : "rs-test",
      "controllerSimpleName" : "ResourceController",
      "resource" : "/resources/{resource_id}",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/31"
    } ]
  }, {
    "content" : {
      "id" : 39,
      "description" : "Retrieve the list of borrowable roles for the current user",
      "microservice" : "rs-test",
      "controllerSimpleName" : "RoleController",
      "resource" : "/roles/borrowables",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/39"
    } ]
  }, {
    "content" : {
      "id" : 42,
      "description" : "Return true if the role provided is included by the current role",
      "microservice" : "rs-test",
      "controllerSimpleName" : "RoleController",
      "resource" : "/roles/include/{role_name}",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/42"
    } ]
  }, {
    "content" : {
      "id" : 21,
      "description" : "tell if user has role admin",
      "microservice" : "rs-test",
      "controllerSimpleName" : "ProjectUsersController",
      "resource" : "/users/email/{user_email}/admin",
      "verb" : "GET",
      "defaultRole" : "PUBLIC"
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/resources"
    }, {
      "rel" : "self",
      "href" : "http://localhost:8080/resources/21"
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
    "href" : "http://localhost:8080/resources?page=1&size=10&sort=id,asc"
  } ]
}
```
