(window.webpackJsonp=window.webpackJsonp||[]).push([[1796],{1866:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),s=(r(0),r(2699)),c={},l={unversionedId:"development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response",id:"development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response.md",slug:"/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response",permalink:"/fr/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/ResourceControllerIT/getAllResourceAccessesAsPublicTest/http-response.md",version:"current"},i=[],a={toc:i};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},a,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 10,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 25,\n      "description" : "Request for a new projectUser (Public feature).",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "RegistrationController",\n      "resource" : "/accesses",\n      "verb" : "POST",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/25"\n    } ]\n  }, {\n    "content" : {\n      "id" : 31,\n      "description" : "Confirm the registration by email",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "RegistrationController",\n      "resource" : "/accesses/verifyEmail/{token}",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/31"\n    } ]\n  }, {\n    "content" : {\n      "id" : 5,\n      "description" : "Allow current user to accept the license of the project",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "LicenseController",\n      "resource" : "/license",\n      "verb" : "PUT",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/5"\n    } ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "description" : "Retrieve if the current user has accepted the license of the project",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "LicenseController",\n      "resource" : "/license",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/4"\n    } ]\n  }, {\n    "content" : {\n      "id" : 51,\n      "description" : "Get the tenant datasource status (for pooled one)",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "JpaMultitenantController",\n      "resource" : "/regards/{tenant}/datasource/status",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/51"\n    } ]\n  }, {\n    "content" : {\n      "id" : 34,\n      "description" : "Retrieve accessible resource accesses of the user among the system",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "ResourceController",\n      "resource" : "/resources",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/34"\n    } ]\n  }, {\n    "content" : {\n      "id" : 9,\n      "description" : "Retrieve accessible resource accesses of the user among the given microservice",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "MicroserviceResourceController",\n      "resource" : "/resources/microservices/{microservicename}",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/9"\n    } ]\n  }, {\n    "content" : {\n      "id" : 33,\n      "description" : "Retrieve all resource accesses of the REGARDS system",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "ResourceController",\n      "resource" : "/resources/{resource_id}",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/33"\n    } ]\n  }, {\n    "content" : {\n      "id" : 41,\n      "description" : "Retrieve the list of borrowable roles for the current user",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "RoleController",\n      "resource" : "/roles/borrowables",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/41"\n    } ]\n  }, {\n    "content" : {\n      "id" : 22,\n      "description" : "tell if user has role admin",\n      "microservice" : "Test application",\n      "controllerSimpleName" : "ProjectUsersController",\n      "resource" : "/users/email/{user_email}/admin",\n      "verb" : "GET",\n      "defaultRole" : "PUBLIC"\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/resources"\n    }, {\n      "rel" : "self",\n      "href" : "http://localhost:8080/resources/22"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/resources?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2699:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=o.a.createContext({}),p=function(e){var n=o.a.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return o.a.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=t,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return r?o.a.createElement(m,l(l({ref:n},a),{},{components:r})):o.a.createElement(m,l({ref:n},a))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,c=new Array(s);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var a=2;a<s;a++)c[a]=r[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);