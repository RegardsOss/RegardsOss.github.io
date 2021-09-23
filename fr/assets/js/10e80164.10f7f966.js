"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[54521],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(t),u=o,N=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(N,l(l({ref:n},s),{},{components:t})):a.createElement(N,l({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73430:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),l=["components"],c={id:"backend-dam-collection-api",title:"REGARDS Collection API",sidebar_label:"Collection",slug:"/development/backend/dam/api/collection/"},p=void 0,i={unversionedId:"development/backend/regards/dam/api/backend-dam-collection-api",id:"version-1.4.0/development/backend/regards/dam/api/backend-dam-collection-api",isDocsHomePage:!1,title:"REGARDS Collection API",description:"How to access API endpoints",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/collection-api.md",sourceDirName:"development/backend/regards/dam/api",slug:"/development/backend/dam/api/collection/",permalink:"/fr/docs/1.4.0/development/backend/dam/api/collection/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/collection-api.md",tags:[],version:"1.4.0",frontMatter:{id:"backend-dam-collection-api",title:"REGARDS Collection API",sidebar_label:"Collection",slug:"/development/backend/dam/api/collection/"},sidebar:"version-1.4.0/dev",previous:{title:"Attachment",permalink:"/fr/docs/1.4.0/development/backend/dam/api/attachment/"},next:{title:"Dataset",permalink:"/fr/docs/1.4.0/development/backend/dam/api/dataset/"}},s=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"Associate a collection to an other one",id:"associate-a-collection-to-an-other-one",children:[]},{value:"Update a collection",id:"update-a-collection",children:[]},{value:"Delete a collection",id:"delete-a-collection",children:[]},{value:"Retrieve a collection",id:"retrieve-a-collection",children:[]},{value:"Retrive collections",id:"retrive-collections",children:[]},{value:"Create a new collection",id:"create-a-new-collection",children:[]}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,r.kt)("p",null,"You can access each endpoint of this API thanks to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,r.kt)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint>?scope=<project>\n")),(0,r.kt)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",(0,r.kt)("a",{parentName:"p",href:"../../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-dam port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,r.kt)("p",null,"To access endpoints from ",(0,r.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-dam/api/v1/<endpoint>\n")),(0,r.kt)("h1",{id:"collectioncontroller"},"CollectionController"),(0,r.kt)("h2",{id:"associate-a-collection-to-an-other-one"},"Associate a collection to an other one"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/1/associate`\n\n    ***URL template**\n\n    `/collections/{collection_id}/associate`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    [ "URN:AIP:COLLECTION:PROJECT:2e4338a4-f07d-45f6-a237-b3a47f99aede:V1" ]\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,r.kt)("h2",{id:"update-a-collection"},"Update a collection"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/10`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `PUT`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "COLLECTION",\n  "id" : 10,\n  "ipId" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n  "creationDate" : "2020-05-11T11:36:31.844Z",\n  "model" : {\n    "id" : 5,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "ProviderId1new",\n    "entityType" : "COLLECTION",\n    "label" : "collection1clone",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n    "id" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 10,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n    "creationDate" : "2020-05-11T11:36:31.844Z",\n    "lastUpdate" : "2020-05-11T11:36:32.383Z",\n    "model" : {\n      "id" : 5,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1new",\n      "entityType" : "COLLECTION",\n      "label" : "collection1clone",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:5590d3a2-1251-46fa-ae19-daf31f45bb37:V1" ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:3c114c21-149d-4f1e-96d2-0f1f939a2bdf:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/collections/10"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/10"\n  } ]\n}\n'))),(0,r.kt)("h2",{id:"delete-a-collection"},"Delete a collection"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/8`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))),(0,r.kt)("h2",{id:"retrieve-a-collection"},"Retrieve a collection"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections/12`\n\n    ***URL template**\n\n    `/collections/{collection_id}`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 12,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n    "creationDate" : "2020-05-11T11:36:33.285Z",\n    "model" : {\n      "id" : 6,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1",\n      "entityType" : "COLLECTION",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:31d4900f-18ec-462a-85b8-c8dc7ab62999:V1" ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:4039f47a-ffa6-4a5b-9610-05c3daf00744:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/collections/12"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/12"\n  } ]\n}\n'))),(0,r.kt)("h2",{id:"retrive-collections"},"Retrive collections"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections`\n\n    ***URL template**\n\n    `/collections`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n\n    None\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 3,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:f4a73a32-7355-412c-bcc4-d528e4519533:V1",\n      "creationDate" : "2020-05-11T11:36:27.181Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:f47b697a-50fb-437a-bc0d-a438220cbbcf:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId1",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:COLLECTION:PROJECT:f47b697a-50fb-437a-bc0d-a438220cbbcf:V1" ],\n        "id" : "URN:AIP:COLLECTION:PROJECT:f4a73a32-7355-412c-bcc4-d528e4519533:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/collections/3"\n    } ]\n  }, {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 4,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:c5792814-ed07-4adb-921f-215981674e2f:V1",\n      "creationDate" : "2020-05-11T11:36:27.181Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId3",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:COLLECTION:PROJECT:c5792814-ed07-4adb-921f-215981674e2f:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/collections/4"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections?page=0&size=10&sort=id,asc"\n  } ]\n}\n'))),(0,r.kt)("h2",{id:"create-a-new-collection"},"Create a new collection"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/collections`\n\n    ***URL template**\n\n    `/collections`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "type" : "COLLECTION",\n  "ipId" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n  "creationDate" : "2020-05-11T11:36:28.667Z",\n  "model" : {\n    "id" : 3,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "COL2",\n    "entityType" : "COLLECTION",\n    "label" : "collection2",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ ],\n    "id" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 201 Created"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 7,\n    "ipId" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n    "creationDate" : "2020-05-11T11:36:28.852Z",\n    "model" : {\n      "id" : 3,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL2",\n      "entityType" : "COLLECTION",\n      "label" : "collection2",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:null:07517e4e-673d-453d-bfef-18c1fe461f59:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/collections"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/7"\n  } ]\n}\n'))))}m.isMDXComponent=!0}}]);