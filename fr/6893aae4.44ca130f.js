(window.webpackJsonp=window.webpackJsonp||[]).push([[1068],{1138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return i}));var a=t(3),r=t(7),o=(t(0),t(2701)),p={id:"backend-storage-api",title:"REGARDS Storage API",sidebar_label:"Storage",slug:"/development/backend/storage/api"},l={unversionedId:"development/backend/regards/storage/api/backend-storage-api",id:"development/backend/regards/storage/api/backend-storage-api",isDocsHomePage:!1,title:"REGARDS Storage API",description:"How to access API endpoints",source:"@site/docs/development/backend/regards/storage/api/storage-api.md",slug:"/development/backend/storage/api",permalink:"/fr/docs/development/backend/storage/api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/api/storage-api.md",version:"current",sidebar_label:"Storage",sidebar:"dev",previous:{title:"REGARDS storage microservice",permalink:"/fr/docs/development/backend/storage/overview"},next:{title:"Allocation strategy plugins",permalink:"/fr/docs/development/backend/storage/plugins/allocation-strategy"}},c=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Configure location",id:"configure-location",children:[{value:"Already exists response",id:"already-exists-response",children:[]}]},{value:"Copy files",id:"copy-files",children:[]},{value:"Decrease priority",id:"decrease-priority",children:[]},{value:"Delete",id:"delete",children:[]},{value:"Delete files",id:"delete-files",children:[]},{value:"Increase priority",id:"increase-priority",children:[]},{value:"Retrieve all files",id:"retrieve-all-files",children:[]},{value:"Retrieve file",id:"retrieve-file",children:[]},{value:"Retry errors",id:"retry-errors",children:[]},{value:"Update location",id:"update-location",children:[]}],s={toc:c};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),Object(o.b)("p",null,"You can access each endpoint of this API thanks to a ",Object(o.b)("inlineCode",{parentName:"p"},"Curl")," request."),Object(o.b)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",Object(o.b)("inlineCode",{parentName:"p"},"scope")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-storage port>/<endpoint>?scope=<project>\n")),Object(o.b)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",Object(o.b)("a",{parentName:"p",href:"../authentication/api"},"authentication API")," to get a token and then add the token to the request headers."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-storage port>/<endpoint> -H 'Authorization: bearer <token>'\n")),Object(o.b)("p",null,"To access endpoints from ",Object(o.b)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-storage/api/v1/<endpoint>\n")),Object(o.b)("h1",{id:"storagelocationcontroller"},"StorageLocationController"),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"API to access REST Actions on storage locations.\n")),Object(o.b)("h2",{id:"configure-location"},"Configure location"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages`\n\n    ***URL template**\n\n    `/storages`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "plop2",\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "name" : "plop2",\n    "pluginConfiguration" : {\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "plop2",\n      "businessId" : "1e6de4d4-c74c-4f6c-b62b-8f8b7adb500e",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "OFFLINE",\n    "allocatedSizeInKo" : 10000\n  }\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "plop2",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 17,\n      "name" : "plop2",\n      "pluginConfiguration" : {\n        "id" : 14,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "plop2",\n        "businessId" : "plop2",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 10000\n    }\n  },\n  "links" : [ {\n    "rel" : "up",\n    "href" : "http://localhost:8080/storages/plop2/up"\n  }, {\n    "rel" : "deleteFiles",\n    "href" : "http://localhost:8080/storages/plop2/files"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/plop2"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/plop2"\n  } ]\n}\n'))),Object(o.b)("h3",{id:"already-exists-response"},"Already exists response"),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 409 Conflict"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Storage location configuration plop, already exists." ]\n}\n'))),Object(o.b)("h2",{id:"copy-files"},"Copy files"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/files/copy`\n\n    ***URL template**\n\n    `/storages/files/copy`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "from" : {\n    "storage" : "somewhere",\n    "url" : "/dir/one"\n  },\n  "to" : {\n    "storage" : "somewhere-else"\n  },\n  "types" : [ ]\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(o.b)("h2",{id:"decrease-priority"},"Decrease priority"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 1,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 1,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ ]\n}\n'))),Object(o.b)("h2",{id:"delete"},"Delete"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(o.b)("h2",{id:"delete-files"},"Delete files"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target/files`\n\n    ***URL template**\n\n    `/storages/{id}/files`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(o.b)("h2",{id:"increase-priority"},"Increase priority"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 13,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 11,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "up",\n    "href" : "http://localhost:8080/storages/target/up"\n  }, {\n    "rel" : "deleteFiles",\n    "href" : "http://localhost:8080/storages/target/files"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"retrieve-all-files"},"Retrieve all files"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages`\n\n    ***URL template**\n\n    `/storages`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "name" : "target",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 7,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 7,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}, {\n  "content" : {\n    "name" : "internal-cache",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "name" : "internal-cache",\n      "storageType" : "CACHE",\n      "allocatedSizeInKo" : 500000000\n    }\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "name" : "plop",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 8,\n      "name" : "plop",\n      "storageType" : "OFFLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 0\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/plop"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/plop"\n  } ]\n} ]\n'))),Object(o.b)("h2",{id:"retrieve-file"},"Retrieve file"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "target",\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 9,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 8,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}\n'))),Object(o.b)("h2",{id:"retry-errors"},"Retry errors"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/target/files/retry/STORAGE`\n\n    ***URL template**\n\n    `/storages/{id}/files/retry/{type}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),Object(o.b)("h2",{id:"update-location"},"Update location"),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/storages/name`\n\n    ***URL template**\n\n    `/storages/{id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),Object(o.b)("p",null,Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "name",\n  "nbStorageError" : 0,\n  "nbDeletionError" : 0,\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "id" : 5,\n    "name" : "name",\n    "pluginConfiguration" : {\n      "id" : 5,\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "name",\n      "businessId" : "name",\n      "version" : "1.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "ONLINE",\n    "priority" : 1,\n    "allocatedSizeInKo" : 10000\n  }\n}\n'))),Object(o.b)("p",null,Object(o.b)("h4",{parentName:"p"},"Request"),Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",{parentName:"p"},Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "name" : "name",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 5,\n      "name" : "name",\n      "pluginConfiguration" : {\n        "id" : 5,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "name",\n        "businessId" : "name",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 1,\n      "allocatedSizeInKo" : 10000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/name"\n  } ]\n}\n'))))}i.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),i=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=i(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=i(t),m=a,u=b["".concat(p,".").concat(m)]||b[m]||d[m]||o;return t?r.a.createElement(u,l(l({ref:n},s),{},{components:t})):r.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);