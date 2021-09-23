"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[35209],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(g,p(p({ref:n},c),{},{components:t})):a.createElement(g,p({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99027:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),p=["components"],l={id:"backend-storage-api",title:"REGARDS Storage API",sidebar_label:"Storage",slug:"/development/backend/storage/api/"},s=void 0,i={unversionedId:"development/backend/regards/storage/api/backend-storage-api",id:"version-1.4.0/development/backend/regards/storage/api/backend-storage-api",isDocsHomePage:!1,title:"REGARDS Storage API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/storage/api/storage-api.md",sourceDirName:"development/backend/regards/storage/api",slug:"/development/backend/storage/api/",permalink:"/docs/1.4.0/development/backend/storage/api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/api/storage-api.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-storage-api",title:"REGARDS Storage API",sidebar_label:"Storage",slug:"/development/backend/storage/api/"},sidebar:"version-1.4.0/dev",previous:{title:"Overview",permalink:"/docs/1.4.0/development/backend/storage/overview/"},next:{title:"Allocation strategy",permalink:"/docs/1.4.0/development/backend/storage/plugins/allocation-strategy/"}},c=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Configure location",id:"configure-location",children:[{value:"Already exists response",id:"already-exists-response",children:[]}]},{value:"Copy files",id:"copy-files",children:[]},{value:"Decrease priority",id:"decrease-priority",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Increase priority",id:"increase-priority",children:[]},{value:"Retrieve all files",id:"retrieve-all-files",children:[]},{value:"Retrieve file",id:"retrieve-file",children:[]},{value:"Retry errors",id:"retry-errors",children:[]},{value:"Update location",id:"update-location",children:[]}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,o.kt)("p",null,"You can access each endpoint of this API thanks to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,o.kt)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-storage port>/<endpoint>?scope=<project>\n")),(0,o.kt)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",(0,o.kt)("a",{parentName:"p",href:"../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-storage port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,o.kt)("p",null,"To access endpoints from ",(0,o.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-storage/api/v1/<endpoint>\n")),(0,o.kt)("h1",{id:"storagelocationcontroller"},"StorageLocationController"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"API to access REST Actions on storage locations.\n")),(0,o.kt)("h2",{id:"configure-location"},"Configure location"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages`\n\n    ***URL template**\n\n    `/storages`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "plop2",\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "name" : "plop2",\n    "pluginConfiguration" : {\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "plop2",\n      "businessId" : "1e6de4d4-c74c-4f6c-b62b-8f8b7adb500e",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "OFFLINE",\n    "allocatedSizeInKo" : 10000\n  }\n}\n'))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 201 Created"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "plop2",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 17,\n      "name" : "plop2",\n      "pluginConfiguration" : {\n        "id" : 14,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "plop2",\n        "businessId" : "plop2",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 10000\n    }\n  },\n  "links" : [ {\n    "rel" : "up",\n    "href" : "http://localhost:8080/storages/plop2/up"\n  }, {\n    "rel" : "deleteFiles",\n    "href" : "http://localhost:8080/storages/plop2/files"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/plop2"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/plop2"\n  } ]\n}\n'))),(0,o.kt)("h3",{id:"already-exists-response"},"Already exists response"),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 409 Conflict"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Storage location configuration plop, already exists." ]\n}\n'))),(0,o.kt)("h2",{id:"copy-files"},"Copy files"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/files/copy`\n\n    ***URL template**\n\n    `/storages/files/copy`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "from" : {\n    "storage" : "somewhere",\n    "url" : "/dir/one"\n  },\n  "to" : {\n    "storage" : "somewhere-else"\n  },\n  "types" : [ ]\n}\n'))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,o.kt)("h2",{id:"decrease-priority"},"Decrease priority"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 1,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 1,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ ]\n}\n'))),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,o.kt)("h2",{id:"delete-files"},"Delete files"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target/files`\n\n    ***URL template**\n\n    `/storages/{id}/files`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,o.kt)("h2",{id:"increase-priority"},"Increase priority"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 13,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 11,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "up",\n    "href" : "http://localhost:8080/storages/target/up"\n  }, {\n    "rel" : "deleteFiles",\n    "href" : "http://localhost:8080/storages/target/files"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}\n'))),(0,o.kt)("h2",{id:"retrieve-all-files"},"Retrieve all files"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages`\n\n    ***URL template**\n\n    `/storages`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "name" : "target",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 7,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 7,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}, {\n  "content" : {\n    "name" : "internal-cache",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "name" : "internal-cache",\n      "storageType" : "CACHE",\n      "allocatedSizeInKo" : 500000000\n    }\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "name" : "plop",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 8,\n      "name" : "plop",\n      "storageType" : "OFFLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 0\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/plop"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/plop"\n  } ]\n} ]\n'))),(0,o.kt)("h2",{id:"retrieve-file"},"Retrieve file"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 9,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 8,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}\n'))),(0,o.kt)("h2",{id:"retry-errors"},"Retry errors"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target/files/retry/STORAGE`\n\n    ***URL template**\n\n    `/storages/{id}/files/retry/{type}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,o.kt)("h2",{id:"update-location"},"Update location"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/name`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "name",\n  "nbStorageError" : 0,\n  "nbDeletionError" : 0,\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "id" : 5,\n    "name" : "name",\n    "pluginConfiguration" : {\n      "id" : 5,\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "name",\n      "businessId" : "name",\n      "version" : "1.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "ONLINE",\n    "priority" : 1,\n    "allocatedSizeInKo" : 10000\n  }\n}\n'))),(0,o.kt)("p",null,(0,o.kt)("h4",{parentName:"p"},"Request"),(0,o.kt)("ul",{parentName:"p"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "name",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 5,\n      "name" : "name",\n      "pluginConfiguration" : {\n        "id" : 5,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "name",\n        "businessId" : "name",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 10000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/name"\n  } ]\n}\n'))))}m.isMDXComponent=!0}}]);