(window.webpackJsonp=window.webpackJsonp||[]).push([[2049],{2119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(2701)),a={},s={unversionedId:"development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response",id:"development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response",permalink:"/docs/next/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/retrieveConfigurationByPluginDefinition/http-response.md",version:"current"},l=[],c={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 3,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 52,\n      "pluginDefinition" : {\n        "id" : 102,\n        "name" : "PluginTest",\n        "type" : "CRITERIA",\n        "sourcePath" : "plugins/test/bundle.js",\n        "applicationModes" : [ ],\n        "entityTypes" : [ ]\n      },\n      "active" : true,\n      "label" : "label",\n      "linkedToAllEntities" : false,\n      "conf" : "{}"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 53,\n      "pluginDefinition" : {\n        "id" : 102,\n        "name" : "PluginTest",\n        "type" : "CRITERIA",\n        "sourcePath" : "plugins/test/bundle.js",\n        "applicationModes" : [ ],\n        "entityTypes" : [ ]\n      },\n      "active" : true,\n      "label" : "label",\n      "linkedToAllEntities" : true,\n      "conf" : "{}"\n    },\n    "links" : [ ]\n  }, {\n    "content" : {\n      "id" : 54,\n      "pluginDefinition" : {\n        "id" : 102,\n        "name" : "PluginTest",\n        "type" : "CRITERIA",\n        "sourcePath" : "plugins/test/bundle.js",\n        "applicationModes" : [ ],\n        "entityTypes" : [ ]\n      },\n      "active" : false,\n      "label" : "label",\n      "linkedToAllEntities" : true,\n      "conf" : "{}"\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/uiplugins/102/configurations?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return t?o.a.createElement(g,s(s({ref:n},c),{},{components:t})):o.a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);