(window.webpackJsonp=window.webpackJsonp||[]).push([[2007],{2077:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2699)),s={},i={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionFileControllerIT/searchAllFiles/http-response.md",version:"current"},c=[],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 3,\n      "filePath" : "/home/kevin/git/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_1.txt",\n      "state" : "IN_PROGRESS",\n      "sessionOwner" : "sessionOwner",\n      "session" : "session",\n      "acqDate" : "2020-05-13T09:36:07.548Z"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "filePath" : "/home/kevin/git/rs-dataprovider/acquisition/acquisition-rest/src/test/resources/input/data_2.txt",\n      "state" : "IN_PROGRESS",\n      "sessionOwner" : "sessionOwner",\n      "session" : "session",\n      "acqDate" : "2020-05-13T09:36:07.654Z"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/acquisition-files?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.a.createElement(b,i(i({ref:n},l),{},{components:t})):o.a.createElement(b,i({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);