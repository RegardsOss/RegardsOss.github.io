(window.webpackJsonp=window.webpackJsonp||[]).push([[1745],{1815:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return u}));var n=t(3),s=t(7),o=(t(0),t(2699)),l={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/getUserPermissions_withBorrowedRoleInferior/http-response.md",version:"1.4.0"},a=[],i={toc:a};function u(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 25,\n    "description" : "Request for a new projectUser (Public feature).",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses",\n    "verb" : "POST",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 31,\n    "description" : "Confirm the registration by email",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RegistrationController",\n    "resource" : "/accesses/verifyEmail/{token}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 5,\n    "description" : "Allow current user to accept the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "PUT",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 4,\n    "description" : "Retrieve if the current user has accepted the license of the project",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "LicenseController",\n    "resource" : "/license",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 51,\n    "description" : "Get the tenant datasource status (for pooled one)",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "JpaMultitenantController",\n    "resource" : "/regards/{tenant}/datasource/status",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 34,\n    "description" : "Retrieve accessible resource accesses of the user among the system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 9,\n    "description" : "Retrieve accessible resource accesses of the user among the given microservice",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "MicroserviceResourceController",\n    "resource" : "/resources/microservices/{microservicename}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 33,\n    "description" : "Retrieve all resource accesses of the REGARDS system",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ResourceController",\n    "resource" : "/resources/{resource_id}",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 41,\n    "description" : "Retrieve the list of borrowable roles for the current user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "RoleController",\n    "resource" : "/roles/borrowables",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 22,\n    "description" : "tell if user has role admin",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/email/{user_email}/admin",\n    "verb" : "GET",\n    "defaultRole" : "PUBLIC"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 24,\n    "description" : "Update the current authenticated project user",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "PUT",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n}, {\n  "content" : {\n    "id" : 23,\n    "description" : "retrieve the current authenticated project user and only display  metadata",\n    "microservice" : "Test application",\n    "controllerSimpleName" : "ProjectUsersController",\n    "resource" : "/users/myuser",\n    "verb" : "GET",\n    "defaultRole" : "REGISTERED_USER"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/users/email@test.com/resources"\n  } ]\n} ]\n')))}u.isMDXComponent=!0},2699:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),s=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),u=function(e){var r=s.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},h=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),p=u(t),h=n,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return t?s.a.createElement(d,c(c({ref:r},i),{},{components:t})):s.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=h;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);