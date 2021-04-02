(window.webpackJsonp=window.webpackJsonp||[]).push([[1403],{1476:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(3),s=n(7),o=(n(0),n(2708)),l={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response",permalink:"/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/UserResourceControllerIT/getUserPermissions/http-response.md",version:"1.4.0"},i=[],a={toc:i};function u(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},a,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 252,\n    "microservice" : "microservice",\n    "controllerSimpleName" : "controller",\n    "resource" : "/to/user",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 25,\n    "description" : "Request for a new projectUser (Public feature).",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses",\n    "verb" : "POST",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 32,\n    "description" : "Rejects the access request",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/{access_id}",\n    "verb" : "DELETE",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 26,\n    "description" : "Accepts the access request",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/{access_id}/accept",\n    "verb" : "PUT",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 28,\n    "description" : "Activates an inactive user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/{access_id}/active",\n    "verb" : "PUT",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 27,\n    "description" : "Denies the access request",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/{access_id}/deny",\n    "verb" : "PUT",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 29,\n    "description" : "Desactivates an active user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/{access_id}/inactive",\n    "verb" : "PUT",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 30,\n    "description" : "Request for a new projectUser (Public feature).",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/external",\n    "verb" : "POST",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 31,\n    "description" : "Confirm the registration by email",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/verifyEmail/{token}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 4,\n    "description" : "Retrieve if the current user has accepted the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 5,\n    "description" : "Allow current user to accept the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "PUT",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 3,\n    "description" : "Allow admins to invalidate the license of the project for all the users of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license/reset",\n    "verb" : "PUT",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 51,\n    "description" : "Get the tenant datasource status (for pooled one)",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "JpaMultitenantController",\n    "resource" : "/regards/{tenant}/datasource/status",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 50,\n    "description" : "Test the tenant connection",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "JpaMultitenantController",\n    "resource" : "/regards/{tenant}/datasource/test",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 34,\n    "description" : "Retrieve accessible resource accesses of the user among the system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 9,\n    "description" : "Retrieve accessible resource accesses of the user among the given microservice",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "MicroserviceResourceController",\n    "resource" : "/resources/microservices/{microservicename}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 33,\n    "description" : "Retrieve all resource accesses of the REGARDS system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources/{resource_id}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 40,\n    "description" : "Retrieve the list of roles",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 41,\n    "description" : "Retrieve the list of borrowable roles for the current user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/borrowables",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 42,\n    "description" : "Retrieve the list of roles associated to the given resource",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/resources/{resourceId}",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 37,\n    "description" : "Retrieve a role by name",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/{role_name}",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 43,\n    "description" : "Retrieve a role descendants",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/{role_name}/descendants",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 17,\n    "description" : "retrieve the list of users of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 13,\n    "description" : "Create a projectUser by bypassing registration process (Administrator feature)",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users",\n    "verb" : "POST",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 19,\n    "description" : "retrieve the project user and only display  metadata",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/email/{user_email}",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 22,\n    "description" : "tell if user has role admin",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/email/{user_email}/admin",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 24,\n    "description" : "Update the current authenticated project user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "PUT",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 23,\n    "description" : "retrieve the current authenticated project user and only display  metadata",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "GET",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 15,\n    "description" : "Retrieve the list of project users (crawls through parents\' hierarchy) of the role with role_name",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/roles",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 16,\n    "description" : "Retrieve the list of project users (crawls through parents\' hierarchy) of the role with role_id",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/roles/{role_id}",\n    "verb" : "GET",\n    "defaultRole" : "ADMIN"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 20,\n    "description" : "retrieve the project user and only display  metadata",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/{user_id}",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 14,\n    "description" : "update the project user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/{user_id}",\n    "verb" : "PUT",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 21,\n    "description" : "remove the project user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/{user_id}",\n    "verb" : "DELETE",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 12,\n    "description" : "retrieve the list of all metadata of the user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUserMetadataController",\n    "resource" : "/users/{user_id}/metadatas",\n    "verb" : "GET",\n    "defaultRole" : "EXPLOIT"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/default_user@regards.fr/resources"\n  } ]\n} ]\n')))}u.isMDXComponent=!0},2708:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),s=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=s.a.createContext({}),u=function(e){var r=s.a.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return s.a.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},f=s.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=t,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?s.a.createElement(m,c(c({ref:r},a),{},{components:n})):s.a.createElement(m,c({ref:r},a))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var a=2;a<o;a++)l[a]=n[a];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);