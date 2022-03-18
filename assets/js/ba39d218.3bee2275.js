"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[53396],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),N=m(n),d=p,c=N["".concat(s,".").concat(d)]||N[d]||k[d]||r;return n?a.createElement(c,o(o({ref:t},l),{},{components:n})):a.createElement(c,o({ref:t},l))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=N;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},56398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return N}});var a=n(87462),p=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"backend-order-basket-api",title:"REGARDS Basket API",sidebar_label:"Basket",slug:"/development/backend/services/order/api/basket/"},s="Overwiew",m={unversionedId:"development/backend/regards/order/api/backend-order-basket-api",id:"version-1.6.0/development/backend/regards/order/api/backend-order-basket-api",title:"REGARDS Basket API",description:"Base API URL may vary and is not mentioned here. So in production, each",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/order/api/basket-api.md",sourceDirName:"development/backend/regards/order/api",slug:"/development/backend/services/order/api/basket/",permalink:"/docs/1.6.0/development/backend/services/order/api/basket/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/order/api/basket-api.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-order-basket-api",title:"REGARDS Basket API",sidebar_label:"Basket",slug:"/development/backend/services/order/api/basket/"},sidebar:"version-1.6.0/dev",previous:{title:"Overview",permalink:"/docs/1.6.0/development/backend/services/order/overview/"},next:{title:"Order",permalink:"/docs/1.6.0/development/backend/services/order/api/"}},l=[{value:"Response",id:"response",children:[],level:3},{value:"API endpoint description",id:"api-endpoint-description",children:[],level:2},{value:"API endpoint description",id:"api-endpoint-description-1",children:[],level:2},{value:"API endpoint description",id:"api-endpoint-description-2",children:[],level:2},{value:"API endpoint description",id:"api-endpoint-description-3",children:[],level:2}],k={toc:l};function N(e){var t=e.components,n=(0,p.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overwiew"},"Overwiew"),(0,r.kt)("p",null,"Base API URL may vary and is not mentioned here. So in production, each\nURL specified here must be prefixed with this base URL."),(0,r.kt)("h1",{id:"add-a-selection-to-the-basket"},"Add a selection to the basket"),(0,r.kt)("p",null,"Allows to create a basket or adding a data selection to existing one."),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "engineType" : "legacy",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2021-09-16T20:37:18.471Z"\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "engineType" : "legacy",\n  "datasetUrn" : "URN%3AAIP%3ADATASET%3AOlivier%3A4af7fa7f-110e-42c8-b434-7c863c280548%3AV1",\n  "entityIdsToInclude" : [ "URN:AIP:DATA:project2:77d75611-fac4-3047-8d3b-e0468fe1063e:V1" ],\n  "selectionDate" : "2021-09-16T20:37:19.6Z"\n}\n'))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,(0,r.kt)("table",{parentName:"p"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Constraints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"content"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"center"},"basket object"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("p",{parentName:"p"},"{:.table.table-striped}")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "messages" : [ "This selection contains no file that can be ordered" ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 7,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 5,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "quota" : 8,\n      "itemsSelections" : [ {\n        "date" : "2021-09-16T20:37:18.142Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2021-09-16T20:37:18.142Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452,\n        "quota" : 8\n      } ]\n    } ],\n    "quota" : 8\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("h1",{id:"get-the-basket"},"Get the basket"),(0,r.kt)("p",null,"Allows to retrieve current basket."),(0,r.kt)("h2",{id:"api-endpoint-description"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 7,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ {\n      "id" : 5,\n      "datasetIpid" : "URN:AIP:DATASET:Olivier:4af7fa7f-110e-42c8-b434-7c863c280548:V1",\n      "datasetLabel" : "DATASET1",\n      "objectsCount" : 5,\n      "filesCount" : 10,\n      "filesSize" : 124452,\n      "quota" : 8,\n      "itemsSelections" : [ {\n        "date" : "2021-09-16T20:37:18.142Z",\n        "selectionRequest" : {\n          "engineType" : "engine",\n          "searchParameters" : {\n            "q" : [ "" ]\n          },\n          "selectionDate" : "2021-09-16T20:37:18.142Z"\n        },\n        "objectsCount" : 5,\n        "filesCount" : 10,\n        "filesSize" : 124452,\n        "quota" : 8\n      } ]\n    } ],\n    "quota" : 8\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"    None\n"))),(0,r.kt)("h1",{id:"remove-a-whole-dataset-selections-from-the-basket"},"Remove a whole dataset selections from the basket"),(0,r.kt)("p",null,"Allows to remove complete dataset data objects selection from current\nbasket."),(0,r.kt)("h2",{id:"api-endpoint-description-1"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket/dataset/2")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket/dataset/{datasetSelectionId}")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 2,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ],\n    "quota" : 0\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"    None\n"))),(0,r.kt)("h1",{id:"remove-a-dated-items-selection-from-the-basket"},"Remove a dated items selection from the basket"),(0,r.kt)("p",null,"Allows to remove a dated data objects selection under dataset selection\nfrom current basket."),(0,r.kt)("h2",{id:"api-endpoint-description-2"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket/dataset/4/2021-09-16T20:37:17.42Z")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket/dataset/{datasetSelectionId}/{itemsSelectionDate}")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Disposition:inline;filename=f.txt"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 5,\n    "owner" : "default_user@regards.fr",\n    "datasetSelections" : [ ],\n    "quota" : 0\n  },\n  "links" : [ ]\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"    None\n"))),(0,r.kt)("h1",{id:"empty-the-basket"},"Empty the basket"),(0,r.kt)("p",null,"Allows to empty current basket."),(0,r.kt)("h2",{id:"api-endpoint-description-3"},"API endpoint description"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/order/basket")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("p",{parentName:"p"},"None")),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre"},"    None\n"))))}N.isMDXComponent=!0}}]);