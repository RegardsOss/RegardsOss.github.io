"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[25935],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=a.createContext({}),m=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(t),d=p,k=s["".concat(i,".").concat(d)]||s[d]||N[d]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[s]="string"==typeof e?e:p,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>N,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=t(87462),p=(t(67294),t(3905));const r={id:"backend-dam-collection-api",title:"REGARDS Collection API",sidebar_label:"Collection",slug:"/development/backend/services/dam/api/collection/"},o="CollectionController",l={unversionedId:"development/backend/regards/dam/api/backend-dam-collection-api",id:"version-1.8.1/development/backend/regards/dam/api/backend-dam-collection-api",title:"REGARDS Collection API",description:"Associate a collection to an other one",source:"@site/versioned_docs/version-1.8.1/development/backend/regards/dam/api/collection-api.md",sourceDirName:"development/backend/regards/dam/api",slug:"/development/backend/services/dam/api/collection/",permalink:"/docs/1.8.1/development/backend/services/dam/api/collection/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/development/backend/regards/dam/api/collection-api.md",tags:[],version:"1.8.1",frontMatter:{id:"backend-dam-collection-api",title:"REGARDS Collection API",sidebar_label:"Collection",slug:"/development/backend/services/dam/api/collection/"},sidebar:"dev",previous:{title:"Attachment",permalink:"/docs/1.8.1/development/backend/services/dam/api/attachment/"},next:{title:"Dataset",permalink:"/docs/1.8.1/development/backend/services/dam/api/dataset/"}},i={},m=[{value:"Associate a collection to an other one",id:"associate-a-collection-to-an-other-one",level:2},{value:"Update a collection",id:"update-a-collection",level:2},{value:"Delete a collection",id:"delete-a-collection",level:2},{value:"Retrieve a collection",id:"retrieve-a-collection",level:2},{value:"Retrive collections",id:"retrive-collections",level:2},{value:"Create a new collection",id:"create-a-new-collection",level:2}],c={toc:m},s="wrapper";function N(e){let{components:n,...t}=e;return(0,p.kt)(s,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"collectioncontroller"},"CollectionController"),(0,p.kt)("h2",{id:"associate-a-collection-to-an-other-one"},"Associate a collection to an other one"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/1/associate")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/{collection_id}/associate")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"PUT")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'[ "URN:AIP:COLLECTION:PROJECT:a5b8f254-ae0a-4216-94d8-592370b0fc92:V1" ]\n'))),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},"    None\n"))),(0,p.kt)("h2",{id:"update-a-collection"},"Update a collection"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/10")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/{collection_id}")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"PUT")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "COLLECTION",\n  "id" : 10,\n  "ipId" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",\n  "creationDate" : "2021-09-16T19:08:24.078Z",\n  "model" : {\n    "id" : 5,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "ProviderId1new",\n    "entityType" : "COLLECTION",\n    "label" : "collection1clone",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],\n    "last" : false,\n    "version" : 1,\n    "id" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 10,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",\n    "creationDate" : "2021-09-16T19:08:24.078Z",\n    "lastUpdate" : "2021-09-16T19:08:24.102Z",\n    "model" : {\n      "id" : 5,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1new",\n      "entityType" : "COLLECTION",\n      "label" : "collection1clone",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:a4ff0d81-f763-48e4-8e93-e57356d741c2:V1" ],\n      "last" : false,\n      "version" : 1,\n      "id" : "URN:AIP:COLLECTION:PROJECT:a644b4f0-5d97-494f-a884-5dd7e72d2e35:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/collections/10"\n  } ]\n}\n'))),(0,p.kt)("h2",{id:"delete-a-collection"},"Delete a collection"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/8")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/{collection_id}")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("p",{parentName:"p"},"None")),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 204 No Content")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre"},"    None\n"))),(0,p.kt)("h2",{id:"retrieve-a-collection"},"Retrieve a collection"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/12")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections/{collection_id}")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"GET")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("p",{parentName:"p"},"None")),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 12,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:95222d0c-1b7e-4fc2-a145-c2ec0085c14c:V1",\n    "creationDate" : "2021-09-16T19:08:24.461Z",\n    "model" : {\n      "id" : 6,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ "URN:AIP:COLLECTION:PROJECT:33cc68ff-4360-4f4a-a9fc-07cee458406b:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "ProviderId1",\n      "entityType" : "COLLECTION",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:33cc68ff-4360-4f4a-a9fc-07cee458406b:V1" ],\n      "last" : false,\n      "version" : 1,\n      "id" : "URN:AIP:COLLECTION:PROJECT:95222d0c-1b7e-4fc2-a145-c2ec0085c14c:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections/12"\n  } ]\n}\n'))),(0,p.kt)("h2",{id:"retrive-collections"},"Retrive collections"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"GET")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("p",{parentName:"p"},"None")),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 3,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:66a9b2b5-9850-4493-920a-4ed5ba9c6661:V1",\n      "creationDate" : "2021-09-16T19:08:22.862Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ "URN:AIP:COLLECTION:PROJECT:90e6cd27-f4cf-4d75-9b14-541c27aca3e3:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId1",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:COLLECTION:PROJECT:90e6cd27-f4cf-4d75-9b14-541c27aca3e3:V1" ],\n        "last" : false,\n        "version" : 1,\n        "id" : "URN:AIP:COLLECTION:PROJECT:66a9b2b5-9850-4493-920a-4ed5ba9c6661:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    } ]\n  }, {\n    "content" : {\n      "type" : "COLLECTION",\n      "id" : 4,\n      "ipId" : "URN:AIP:COLLECTION:PROJECT:1ee1d46d-e47d-40ac-b778-fa5f0b42ac79:V1",\n      "creationDate" : "2021-09-16T19:08:22.862Z",\n      "model" : {\n        "id" : 2,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "COLLECTION"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "providerId" : "ProviderId3",\n        "entityType" : "COLLECTION",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "last" : false,\n        "version" : 1,\n        "id" : "URN:AIP:COLLECTION:PROJECT:1ee1d46d-e47d-40ac-b778-fa5f0b42ac79:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/collections"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/collections?page=0&size=10&sort=id,asc"\n  } ]\n}\n'))),(0,p.kt)("h2",{id:"create-a-new-collection"},"Create a new collection"),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Request"),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"URL template")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"/collections")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Method")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"POST")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Accept:application/json"),"  ")),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Data params")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "COLLECTION",\n  "ipId" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",\n  "creationDate" : "2021-09-16T19:08:23.321Z",\n  "model" : {\n    "id" : 3,\n    "name" : "modelName1",\n    "description" : "model desc",\n    "type" : "COLLECTION"\n  },\n  "tags" : [ ],\n  "groups" : [ ],\n  "feature" : {\n    "providerId" : "COL2",\n    "entityType" : "COLLECTION",\n    "label" : "collection2",\n    "model" : "modelName1",\n    "files" : { },\n    "tags" : [ ],\n    "last" : false,\n    "version" : 1,\n    "id" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",\n    "properties" : { },\n    "type" : "Feature"\n  }\n}\n'))),(0,p.kt)("p",null,(0,p.kt)("h3",{parentName:"p"},"Response"),(0,p.kt)("ul",{parentName:"p"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("strong",{parentName:"li"},"Code:")," 201 Created")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Headers:")),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),"  "),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("strong",{parentName:"p"},"Content:")),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 7,\n    "ipId" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",\n    "creationDate" : "2021-09-16T19:08:23.332Z",\n    "model" : {\n      "id" : 3,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "virtualId" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:LAST",\n      "providerId" : "COL2",\n      "entityType" : "COLLECTION",\n      "label" : "collection2",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ ],\n      "last" : true,\n      "version" : 1,\n      "id" : "URN:AIP:COLLECTION:null:1bf0257e-28a8-487a-ba6d-5ef1ba5e0220:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n'))))}N.isMDXComponent=!0}}]);