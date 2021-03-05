(window.webpackJsonp=window.webpackJsonp||[]).push([[1580],{1650:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(2699)),s={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetAllDatasets/http-response.md",version:"1.4.0"},c=[],d={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 3,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 14,\n      "ipId" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId1",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/14"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/14"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 15,\n      "ipId" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId3",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ ],\n        "id" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/15"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/15"\n    } ]\n  }, {\n    "content" : {\n      "type" : "DATASET",\n      "metadata" : {\n        "dataObjectsGroups" : { }\n      },\n      "id" : 16,\n      "ipId" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n      "creationDate" : "2020-05-11T11:37:36.194Z",\n      "model" : {\n        "id" : 12,\n        "name" : "modelName1",\n        "description" : "model desc",\n        "type" : "DATASET"\n      },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n      "groups" : [ ],\n      "feature" : {\n        "licence" : "licence",\n        "providerId" : "ProviderId4",\n        "entityType" : "DATASET",\n        "label" : "label",\n        "model" : "modelName1",\n        "files" : { },\n        "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],\n        "id" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",\n        "properties" : { },\n        "type" : "Feature"\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/datasets"\n    }, {\n      "rel" : "delete",\n      "href" : "http://localhost:8080/datasets/16"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/datasets/16"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),i=p(t),f=a,m=i["".concat(s,".").concat(f)]||i[f]||u[f]||o;return t?r.a.createElement(m,l(l({ref:n},d),{},{components:t})):r.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);