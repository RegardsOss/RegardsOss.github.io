(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(2704)),s={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/ModelAttributeControllerIT/listAllAttributes/http-response.md",version:"1.4.0"},i=[],p={toc:i};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 28,\n    "attribute" : {\n      "id" : 28,\n      "name" : "attLsAM",\n      "type" : "STRING",\n      "fragment" : {\n        "id" : 7,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : false,\n      "optional" : false,\n      "label" : "ForTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.attLsAM"\n    },\n    "model" : {\n      "id" : 26,\n      "name" : "modelLsAM",\n      "type" : "COLLECTION"\n    },\n    "pos" : 0\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes/28"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes/28"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes"\n  } ]\n}, {\n  "content" : {\n    "id" : 29,\n    "attribute" : {\n      "id" : 29,\n      "name" : "attLsAM2",\n      "type" : "STRING",\n      "fragment" : {\n        "id" : 7,\n        "name" : "default",\n        "description" : "Default fragment"\n      },\n      "alterable" : false,\n      "optional" : false,\n      "label" : "ForTests",\n      "properties" : [ ],\n      "dynamic" : true,\n      "internal" : false,\n      "jsonPath" : "properties.attLsAM2"\n    },\n    "model" : {\n      "id" : 26,\n      "name" : "modelLsAM",\n      "type" : "COLLECTION"\n    },\n    "pos" : 0\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes/29"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes/29"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/modelLsAM/attributes"\n  } ]\n} ]\n')))}c.isMDXComponent=!0},2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.a.createElement(b,l(l({ref:t},p),{},{components:n})):o.a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);