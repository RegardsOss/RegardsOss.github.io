(window.webpackJsonp=window.webpackJsonp||[]).push([[1930],{2e3:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),s=t(7),o=(t(0),t(2701)),a={},c={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testRetrieveAccessRightsDSArgs/http-response.md",version:"1.4.0"},i=[],p={toc:i};function l(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "qualityFilter" : {\n        "maxScore" : 10,\n        "minScore" : 0,\n        "qualityLevel" : "ACCEPTED"\n      },\n      "accessLevel" : "FULL_ACCESS",\n      "dataAccessLevel" : "NO_ACCESS",\n      "dataset" : {\n        "type" : "DATASET",\n        "metadata" : {\n          "dataObjectsGroups" : { }\n        },\n        "id" : 1,\n        "ipId" : "URN:AIP:DATASET:PROJECT:44b50a89-39e5-4011-a805-6f2b46d36d8c:V1",\n        "creationDate" : "2020-05-11T11:42:09.032Z",\n        "model" : {\n          "id" : 1,\n          "name" : "model1",\n          "description" : "desc",\n          "type" : "DATASET"\n        },\n        "tags" : [ ],\n        "groups" : [ ],\n        "feature" : {\n          "licence" : "licence",\n          "providerId" : "DS1",\n          "entityType" : "DATASET",\n          "label" : "DS1",\n          "model" : "model1",\n          "files" : { },\n          "tags" : [ ],\n          "id" : "URN:AIP:DATASET:PROJECT:44b50a89-39e5-4011-a805-6f2b46d36d8c:V1",\n          "properties" : { },\n          "type" : "Feature"\n        }\n      },\n      "accessGroup" : {\n        "id" : 2,\n        "name" : "AG1",\n        "users" : [ {\n          "email" : "test@email.com"\n        } ],\n        "isPublic" : false,\n        "isInternal" : false\n      }\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/accessrights?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),s=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),l=function(e){var n=s.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return s.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},m=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return t?s.a.createElement(g,c(c({ref:n},p),{},{components:t})):s.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);