(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(b,p(p({ref:n},i),{},{components:t})):o.a.createElement(b,p({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2699)),c={},p={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response",id:"development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/removeDocument/http-response.md",version:"current"},s=[],i={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 2,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:4795e64d-f15c-4c4e-ab5e-896ccb0d20b7:V1",\n    "creationDate" : "2020-05-11T11:38:59.184Z",\n    "lastUpdate" : "2020-05-11T11:39:00.282Z",\n    "model" : {\n      "id" : 2,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:4795e64d-f15c-4c4e-ab5e-896ccb0d20b7:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n')))}l.isMDXComponent=!0}}]);