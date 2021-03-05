(window.webpackJsonp=window.webpackJsonp||[]).push([[2494],{2564:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(2699)),s={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response",id:"development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response",permalink:"/fr/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/DatasetControllerIT/testGetDatasetById/http-response.md",version:"current"},p=[],l={toc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "DATASET",\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 17,\n    "ipId" : "URN:AIP:DATASET:PROJECT:8c130e3a-fc80-43f6-bc6d-52b30d8798ec:V1",\n    "creationDate" : "2020-05-11T11:37:38.438Z",\n    "model" : {\n      "id" : 14,\n      "name" : "modelName1",\n      "description" : "model desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ "URN:AIP:DATASET:PROJECT:5b09ee5c-a1ea-4112-89fd-0efef4cd3435:V1" ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "ProviderId1",\n      "entityType" : "DATASET",\n      "label" : "label",\n      "model" : "modelName1",\n      "files" : { },\n      "tags" : [ "URN:AIP:DATASET:PROJECT:5b09ee5c-a1ea-4112-89fd-0efef4cd3435:V1" ],\n      "id" : "URN:AIP:DATASET:PROJECT:8c130e3a-fc80-43f6-bc6d-52b30d8798ec:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/datasets/17"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/datasets"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/datasets/17"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/datasets/17"\n  } ]\n}\n')))}i.isMDXComponent=!0},2699:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);