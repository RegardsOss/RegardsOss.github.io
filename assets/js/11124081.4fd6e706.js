(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{250:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),s=(t(0),t(2708)),o={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",id:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md",version:"current"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h4",{id:"request"},"Request"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "qualityFilter" : {\n        "maxScore" : 10,\n        "minScore" : 0,\n        "qualityLevel" : "ACCEPTED"\n      },\n      "accessLevel" : "FULL_ACCESS",\n      "dataAccessLevel" : "NO_ACCESS",\n      "dataset" : {\n        "type" : "DATASET",\n        "metadata" : {\n          "dataObjectsGroups" : { }\n        },\n        "id" : 1,\n        "ipId" : "URN:AIP:DATASET:PROJECT:44b50a89-39e5-4011-a805-6f2b46d36d8c:V1",\n        "creationDate" : "2020-05-11T11:42:09.032Z",\n        "model" : {\n          "id" : 1,\n          "name" : "model1",\n          "description" : "desc",\n          "type" : "DATASET"\n        },\n        "tags" : [ ],\n        "groups" : [ ],\n        "feature" : {\n          "licence" : "licence",\n          "providerId" : "DS1",\n          "entityType" : "DATASET",\n          "label" : "DS1",\n          "model" : "model1",\n          "files" : { },\n          "tags" : [ ],\n          "id" : "URN:AIP:DATASET:PROJECT:44b50a89-39e5-4011-a805-6f2b46d36d8c:V1",\n          "properties" : { },\n          "type" : "Feature"\n        }\n      },\n      "accessGroup" : {\n        "id" : 2,\n        "name" : "AG1",\n        "users" : [ {\n          "email" : "test@email.com"\n        } ],\n        "isPublic" : false,\n        "isInternal" : false\n      }\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessrights?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}l.isMDXComponent=!0},2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?a.a.createElement(g,c(c({ref:n},p),{},{components:t})):a.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<s;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);