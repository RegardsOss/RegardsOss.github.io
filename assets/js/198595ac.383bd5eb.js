(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var r=n(3),o=n(7),a=(n(0),n(2704)),s={},l={unversionedId:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response",id:"development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response.md",slug:"/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response",permalink:"/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dam/api/generated-snippets/AttributeModelControllerIT/testGetAttributes/http-response.md",version:"current"},i=[],p={toc:i};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 93,\n    "name" : "Attribute3",\n    "type" : "DATE_ISO8601",\n    "fragment" : {\n      "id" : 43,\n      "name" : "test",\n      "description" : "Test",\n      "version" : "1.0"\n    },\n    "alterable" : true,\n    "optional" : false,\n    "label" : "Attribute3",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.test.Attribute3"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/attributes/93"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/93"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/93"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n}, {\n  "content" : {\n    "id" : 91,\n    "name" : "Attribute1",\n    "type" : "STRING",\n    "fragment" : {\n      "id" : 43,\n      "name" : "test",\n      "description" : "Test",\n      "version" : "1.0"\n    },\n    "alterable" : true,\n    "optional" : false,\n    "label" : "Attribute1",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.test.Attribute1"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/attributes/91"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/91"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/91"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n}, {\n  "content" : {\n    "id" : 92,\n    "name" : "Attribute2",\n    "type" : "INTEGER",\n    "fragment" : {\n      "id" : 43,\n      "name" : "test",\n      "description" : "Test",\n      "version" : "1.0"\n    },\n    "alterable" : true,\n    "optional" : false,\n    "label" : "Attribute2",\n    "properties" : [ ],\n    "dynamic" : true,\n    "internal" : false,\n    "jsonPath" : "properties.test.Attribute2"\n  },\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/models/attributes/92"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/models/attributes/92"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/models/attributes/92"\n  }, {\n    "rel" : "list",\n    "href" : "http://localhost:8080/models/attributes"\n  } ]\n} ]\n')))}c.isMDXComponent=!0}}]);