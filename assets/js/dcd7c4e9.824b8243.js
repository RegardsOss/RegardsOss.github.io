"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9433],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return k}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),k=o,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||r;return t?a.createElement(u,p(p({ref:n},l),{},{components:t})):a.createElement(u,p({ref:n},l))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,p=new Array(r);p[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var c=2;c<r;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73902:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),p=["components"],s={id:"backend-order-basket-api",title:"REGARDS Basket API",sidebar_label:"Basket",slug:"/development/backend/order/api/basket/"},i=void 0,c={unversionedId:"development/backend/regards/order/api/backend-order-basket-api",id:"version-1.4.0/development/backend/regards/order/api/backend-order-basket-api",isDocsHomePage:!1,title:"REGARDS Basket API",description:"How to access API endpoints",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/order/api/basket-api.md",sourceDirName:"development/backend/regards/order/api",slug:"/development/backend/order/api/basket/",permalink:"/docs/1.4.0/development/backend/order/api/basket/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/order/api/basket-api.md",version:"1.4.0",frontMatter:{id:"backend-order-basket-api",title:"REGARDS Basket API",sidebar_label:"Basket",slug:"/development/backend/order/api/basket/"},sidebar:"version-1.4.0/dev",previous:{title:"Overview",permalink:"/docs/1.4.0/development/backend/order/overview/"},next:{title:"Order",permalink:"/docs/1.4.0/development/backend/order/api/"}},l=[{value:"How to access API endpoints",id:"how-to-access-api-endpoints",children:[]},{value:"API endpoint description",id:"api-endpoint-description",children:[{value:"Response",id:"response",children:[]}]},{value:"API endpoint description",id:"api-endpoint-description-1",children:[]},{value:"API endpoint description",id:"api-endpoint-description-2",children:[]},{value:"API endpoint description",id:"api-endpoint-description-3",children:[]},{value:"API endpoint description",id:"api-endpoint-description-4",children:[]}],d={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-access-api-endpoints"},"How to access API endpoints"),(0,r.kt)("p",null,"You can access each endpoint of this API thanks to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Curl")," request."),(0,r.kt)("p",null,"You can request without auhentication by adding the REGARDS project in the request thanks to the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-order port>/<endpoint>?scope=<project>\n")),(0,r.kt)("p",null,"Or you can authenticate to access admin endpoints. To do so, use the ",(0,r.kt)("a",{parentName:"p",href:"../../../authentication/api/"},"authentication API")," to get a token and then add the token to the request headers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:<rs-order port>/<endpoint> -H 'Authorization: bearer <token>'\n")),(0,r.kt)("p",null,"To access endpoints from ",(0,r.kt)("inlineCode",{parentName:"p"},"outside"),' the microservice installation server, you need to use the "gateway" microservice. To do so, use the here under access point instead of the previous one.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://<gateway host>:<gateway port>/rs-order/api/v1/<endpoint>\n")),(0,r.kt)("h1",{id:"overwiew"},"Overwiew"),(0,r.kt)("p",null,"Base API URL may vary and is not mentioned here. So in production, each\nURL specified here must be prefixed with this base URL."),(0,r.kt)("h1",{id:"add-a-selection-to-the-basket"},"Add a selection to the basket"),(0,r.kt)("p",null,"Allows to create a basket or adding a data selection to existing one."),(0,r.kt)("h2",{id:"api-endpoint-description"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/selection`\n\n    ***URL template**\n\n    `/order/basket/selection`\n\n    ***Method**\n\n    `POST`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("table",{parentName:"p"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Constraints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"selectAllOpenSearchRequest"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"opensearch request"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ipIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List of data object IP_IDs to add if opensearch request is null OR to evict if opensearch request is provided"),(0,r.kt)("td",{parentName:"tr",align:"center"}))))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "selectionDate" : "2020-05-13T12:05:10.586Z"\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "engineType" : "legacy",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2020-05-13T12:05:10.128Z"\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"***Data params**\n")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n  "engineType" : "legacy",\n  "datasetUrn" : "URN%3AAIP%3ADATASET%3AOlivier%3A4af7fa7f-110e-42c8-b434-7c863c280548%3AV1",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2020-05-13T12:05:10.809Z"\n}\n'))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content| `Object` |basket object||\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 422 Unprocessable Entity"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Engine type may not be empty" ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "This selection contains no file that can be ordered" ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 6,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 4,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "itemsSelections" : [ {\n        "date" : "2020-05-13T12:05:09.495Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2020-05-13T12:05:09.495Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452\n      } ]\n    } ]\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("h1",{id:"get-the-basket"},"Get the basket"),(0,r.kt)("p",null,"Allows to retrieve current basket."),(0,r.kt)("h2",{id:"api-endpoint-description-1"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket`\n\n    ***URL template**\n\n    `/order/basket`\n\n    ***Method**\n\n    `GET`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 6,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 4,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "itemsSelections" : [ {\n        "date" : "2020-05-13T12:05:09.495Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2020-05-13T12:05:09.495Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452\n      } ]\n    } ]\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),(0,r.kt)("h1",{id:"remove-a-whole-dataset-selections-from-the-basket"},"Remove a whole dataset selections from the basket"),(0,r.kt)("p",null,"Allows to remove complete dataset data objects selection from current\nbasket."),(0,r.kt)("h2",{id:"api-endpoint-description-2"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/dataset/1`\n\n    ***URL template**\n\n    `/order/basket/dataset/{datasetSelectionId}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 1,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ]\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),(0,r.kt)("h1",{id:"remove-a-dated-items-selection-from-the-basket"},"Remove a dated items selection from the basket"),(0,r.kt)("p",null,"Allows to remove a dated data objects selection under dataset selection\nfrom current basket."),(0,r.kt)("h2",{id:"api-endpoint-description-3"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket/dataset/3/2020-05-13T12:05:08.327Z`\n\n    ***URL template**\n\n    `/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 200 OK"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `X-Frame-Options:DENY`\n  `Expires:0`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Disposition:inline;filename=f.txt`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 4,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ]\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "Basket is empty" ]\n}\n'))),(0,r.kt)("h1",{id:"empty-the-basket"},"Empty the basket"),(0,r.kt)("p",null,"Allows to empty current basket."),(0,r.kt)("h2",{id:"api-endpoint-description-4"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/order/basket`\n\n    ***URL template**\n\n    `/order/basket`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n"))),(0,r.kt)("p",null,(0,r.kt)("h4",{parentName:"p"},"Request"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Code:")," 204 No Content"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n\n  None\n"))))))}m.isMDXComponent=!0}}]);