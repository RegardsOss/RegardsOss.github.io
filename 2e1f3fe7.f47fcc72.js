(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),p=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return t?s.a.createElement(g,c(c({ref:n},l),{},{components:t})):s.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},532:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),s=t(7),a=(t(0),t(2701)),o={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response",id:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response",permalink:"/docs/next/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsFullArgs/http-response.md",version:"current"},i=[],l={toc:i};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 11,\n      "qualityFilter" : {\n        "maxScore" : 10,\n        "minScore" : 0,\n        "qualityLevel" : "ACCEPTED"\n      },\n      "accessLevel" : "FULL_ACCESS",\n      "dataAccessLevel" : "NO_ACCESS",\n      "dataset" : {\n        "type" : "DATASET",\n        "metadata" : {\n          "dataObjectsGroups" : { }\n        },\n        "id" : 11,\n        "ipId" : "URN:AIP:DATASET:PROJECT:4ed8e419-0fa0-479b-b50e-23163212eed9:V1",\n        "creationDate" : "2020-05-11T11:42:21.499Z",\n        "model" : {\n          "id" : 6,\n          "name" : "model1",\n          "description" : "desc",\n          "type" : "DATASET"\n        },\n        "tags" : [ ],\n        "groups" : [ ],\n        "feature" : {\n          "licence" : "licence",\n          "providerId" : "DS1",\n          "entityType" : "DATASET",\n          "label" : "DS1",\n          "model" : "model1",\n          "files" : { },\n          "tags" : [ ],\n          "id" : "URN:AIP:DATASET:PROJECT:4ed8e419-0fa0-479b-b50e-23163212eed9:V1",\n          "properties" : { },\n          "type" : "Feature"\n        }\n      },\n      "accessGroup" : {\n        "id" : 12,\n        "name" : "AG1",\n        "users" : [ {\n          "email" : "test@email.com"\n        } ],\n        "isPublic" : false,\n        "isInternal" : false\n      }\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/accessrights/11"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessrights?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0}}]);