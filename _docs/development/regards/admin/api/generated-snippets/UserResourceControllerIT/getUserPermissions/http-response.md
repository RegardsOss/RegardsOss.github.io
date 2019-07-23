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
    "id" : 62,
    "microservice" : "microservice",
    "controllerSimpleName" : "controller",
    "resource" : "/to/user",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 29,
    "description" : "Request for a new projectUser (Public feature).",
    "microservice" : "Test application",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses",
    "verb" : "POST",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 31,
    "description" : "Confirm the registration by email",
    "microservice" : "Test application",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/verifyEmail/{token}",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 51,
    "description" : "Get the tenant datasource status (for pooled one)",
    "microservice" : "Test application",
    "controllerSimpleName" : "JpaMultitenantController",
    "resource" : "/regards/{tenant}/datasource/status",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 50,
    "description" : "Test the tenant connection",
    "microservice" : "Test application",
    "controllerSimpleName" : "JpaMultitenantController",
    "resource" : "/regards/{tenant}/datasource/test",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 35,
    "description" : "Retrieve accessible resource accesses of the user among the system",
    "microservice" : "Test application",
    "controllerSimpleName" : "ResourceController",
    "resource" : "/resources",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 7,
    "description" : "Retrieve accessible resource accesses of the user among the given microservice",
    "microservice" : "Test application",
    "controllerSimpleName" : "MicroserviceResourceController",
    "resource" : "/resources/microservices/{microservicename}",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 34,
    "description" : "Update access to a given resource",
    "microservice" : "Test application",
    "controllerSimpleName" : "ResourceController",
    "resource" : "/resources/{resource_id}",
    "verb" : "PUT",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 33,
    "description" : "Retrieve all resource accesses of the REGARDS system",
    "microservice" : "Test application",
    "controllerSimpleName" : "ResourceController",
    "resource" : "/resources/{resource_id}",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 41,
    "description" : "Retrieve the list of borrowable roles for the current user",
    "microservice" : "Test application",
    "controllerSimpleName" : "RoleController",
    "resource" : "/roles/borrowables",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 14,
    "description" : "retrieve the list of users of the project",
    "microservice" : "Test application",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 19,
    "description" : "tell if user has role admin",
    "microservice" : "Test application",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/email/{user_email}/admin",
    "verb" : "GET",
    "defaultRole" : "PUBLIC"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 24,
    "description" : "Update the current authenticated project user",
    "microservice" : "Test application",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/myuser",
    "verb" : "PUT",
    "defaultRole" : "REGISTERED_USER"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 23,
    "description" : "retrieve the current authenticated project user and only display  metadata",
    "microservice" : "Test application",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/myuser",
    "verb" : "GET",
    "defaultRole" : "REGISTERED_USER"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
} ]
```
