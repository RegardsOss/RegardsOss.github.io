(window.webpackJsonp=window.webpackJsonp||[]).push([[2605],{2675:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2701)),c={},i={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/AttachmentControllerIT/attachRefAndNormalDescription/http-response.md",version:"1.4.0"},p=[],s={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "type" : "COLLECTION",\n    "id" : 3,\n    "ipId" : "URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1",\n    "creationDate" : "2020-05-11T11:39:00.55Z",\n    "lastUpdate" : "2020-05-11T11:39:00.898Z",\n    "model" : {\n      "id" : 3,\n      "name" : "MODEL",\n      "description" : "Empty model for testing",\n      "type" : "COLLECTION"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "providerId" : "COL1",\n      "entityType" : "COLLECTION",\n      "label" : "Collection label",\n      "model" : "MODEL",\n      "files" : {\n        "DESCRIPTION" : [ {\n          "dataType" : "DESCRIPTION",\n          "reference" : false,\n          "uri" : "http://localhost:8080/entities/URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1/files/dfbde11bc7762d4a38c38940c1c0a8c3",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "dfbde11bc7762d4a38c38940c1c0a8c3",\n          "digestAlgorithm" : "MD5",\n          "filesize" : 8083,\n          "filename" : "description.pdf",\n          "types" : [ ]\n        }, {\n          "dataType" : "DESCRIPTION",\n          "reference" : true,\n          "uri" : "https://public.ccsds.org/pubs/650x0m2.pdf",\n          "mimeType" : "application/pdf;charset=UTF-8",\n          "online" : true,\n          "checksum" : "6c342551cb27c952b1e1d380f82f404a",\n          "digestAlgorithm" : "MD5",\n          "filename" : "650x0m2.pdf",\n          "types" : [ ]\n        } ]\n      },\n      "tags" : [ ],\n      "id" : "URN:AIP:COLLECTION:PROJECT:ecac0e1a-c718-4d02-8996-45d5be2c6708:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "links" : [ ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);