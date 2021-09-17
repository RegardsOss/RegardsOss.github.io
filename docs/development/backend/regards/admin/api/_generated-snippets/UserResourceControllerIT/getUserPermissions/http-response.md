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
    
[ {
  "content" : {
    "id" : 102,
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
    "id" : 23,
    "description" : "Request for a new projectUser (Public feature).",
    "microservice" : "rs-test",
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
    "id" : 30,
    "description" : "Rejects the access request",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/{access_id}",
    "verb" : "DELETE",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 24,
    "description" : "Accepts the access request",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/{access_id}/accept",
    "verb" : "PUT",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 26,
    "description" : "Activates an inactive user",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/{access_id}/active",
    "verb" : "PUT",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 25,
    "description" : "Denies the access request",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/{access_id}/deny",
    "verb" : "PUT",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 27,
    "description" : "Desactivates an active user",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/{access_id}/inactive",
    "verb" : "PUT",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 29,
    "description" : "Request for a new projectUser (Public feature).",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RegistrationController",
    "resource" : "/accesses/external",
    "verb" : "POST",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 49,
    "description" : "Test the tenant connection",
    "microservice" : "rs-test",
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
    "id" : 32,
    "description" : "Retrieve accessible resource accesses of the user among the system",
    "microservice" : "rs-test",
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
    "id" : 5,
    "description" : "Retrieve accessible resource accesses of the user among the given microservice",
    "microservice" : "rs-test",
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
    "id" : 31,
    "description" : "Retrieve all resource accesses of the REGARDS system",
    "microservice" : "rs-test",
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
    "id" : 38,
    "description" : "Retrieve the list of roles",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RoleController",
    "resource" : "/roles",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 40,
    "description" : "Retrieve the list of roles associated to the given resource",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RoleController",
    "resource" : "/roles/resources/{resourceId}",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 34,
    "description" : "Retrieve a role by name",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RoleController",
    "resource" : "/roles/{role_name}",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 41,
    "description" : "Retrieve a role descendants",
    "microservice" : "rs-test",
    "controllerSimpleName" : "RoleController",
    "resource" : "/roles/{role_name}/descendants",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 11,
    "description" : "Create a projectUser by bypassing registration process (Administrator feature)",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users",
    "verb" : "POST",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 16,
    "description" : "retrieve the list of users of the project",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 18,
    "description" : "retrieve the project user and only display  metadata",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/email/{user_email}",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 13,
    "description" : "retrieve the current authenticated project user and only display  metadata",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/myuser",
    "verb" : "GET",
    "defaultRole" : "REGISTERED_USER"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 14,
    "description" : "Update the current authenticated project user",
    "microservice" : "rs-test",
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
    "id" : 15,
    "description" : "Retrieve the list of project users (crawls through parents' hierarchy) of the role with role_name",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/roles",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 22,
    "description" : "Retrieve the list of project users (crawls through parents' hierarchy) of the role with role_id",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/roles/{role_id}",
    "verb" : "GET",
    "defaultRole" : "ADMIN"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 12,
    "description" : "update the project user",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/{user_id}",
    "verb" : "PUT",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 19,
    "description" : "retrieve the project user and only display  metadata",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/{user_id}",
    "verb" : "GET",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
}, {
  "content" : {
    "id" : 20,
    "description" : "remove the project user",
    "microservice" : "rs-test",
    "controllerSimpleName" : "ProjectUsersController",
    "resource" : "/users/{user_id}",
    "verb" : "DELETE",
    "defaultRole" : "EXPLOIT"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
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
    "rel" : "self",
    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"
  } ]
} ]
```
