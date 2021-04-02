(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,g=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},999:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2708)),i={},s={unversionedId:"development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response",id:"development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response",permalink:"/docs/development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/access/api/generated-snippets/UIPluginServiceControllerIT/retrieveDatasetLinkedPlugins_1/http-response.md",version:"current"},c=[],l={toc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "id" : 102,\n    "pluginDefinition" : {\n      "id" : 153,\n      "name" : "PluginTest",\n      "type" : "SERVICE",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ "MANY", "ONE" ],\n      "entityTypes" : [ "COLLECTION", "DATA" ]\n    },\n    "active" : true,\n    "label" : "label",\n    "linkedToAllEntities" : false,\n    "conf" : "{}"\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "id" : 106,\n    "pluginDefinition" : {\n      "id" : 153,\n      "name" : "PluginTest",\n      "type" : "SERVICE",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ "MANY", "ONE" ],\n      "entityTypes" : [ "COLLECTION", "DATA" ]\n    },\n    "active" : true,\n    "label" : "label",\n    "linkedToAllEntities" : true,\n    "conf" : "{}"\n  },\n  "links" : [ ]\n} ]\n')))}p.isMDXComponent=!0}}]);