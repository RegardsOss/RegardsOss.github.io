(window.webpackJsonp=window.webpackJsonp||[]).push([[2210],{2282:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return s})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(2704)),o={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response",permalink:"/fr/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/getAllChains/http-response.md",version:"current"},l=[],c={toc:l};function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"request"},"Request"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 10,\n    "totalElements" : 2,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 104,\n      "label" : "Processing chain 1",\n      "active" : true,\n      "mode" : "MANUAL",\n      "locked" : false,\n      "periodicity" : "0 * * * * *",\n      "ingestChain" : "DefaultIngestChain",\n      "storages" : [ {\n        "pluginBusinessId" : "AWS",\n        "storePath" : "/path/to/file",\n        "targetTypes" : [ ]\n      }, {\n        "pluginBusinessId" : "HELLO",\n        "storePath" : "/other/path/to/file",\n        "targetTypes" : [ ]\n      } ],\n      "categories" : [ ],\n      "fileInfos" : [ {\n        "id" : 104,\n        "mandatory" : true,\n        "scanPlugin" : {\n          "id" : 111,\n          "pluginId" : "GlobDiskScanning",\n          "label" : "one : Scan plugin",\n          "businessId" : "c6902792-c2c7-4130-92e4-5e8fe5737678",\n          "version" : "1.0.0-SNAPSHOT",\n          "priorityOrder" : 0,\n          "active" : true,\n          "parameters" : [ {\n            "name" : "directories",\n            "type" : "COLLECTION",\n            "value" : [ ],\n            "dynamic" : false\n          } ]\n        },\n        "mimeType" : "application/octet-stream",\n        "dataType" : "RAWDATA",\n        "comment" : "A comment"\n      } ],\n      "validationPluginConf" : {\n        "id" : 112,\n        "pluginId" : "DefaultFileValidation",\n        "label" : "one : Validation plugin",\n        "businessId" : "fde2cb70-7c53-4d3e-9da8-3b50fbd5ae1c",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      },\n      "productPluginConf" : {\n        "id" : 113,\n        "pluginId" : "DefaultProductPlugin",\n        "label" : "one : Product plugin",\n        "businessId" : "28af0932-944b-445b-bd5e-389bfefd18b6",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      },\n      "generateSipPluginConf" : {\n        "id" : 114,\n        "pluginId" : "DefaultSIPGeneration",\n        "label" : "one : SIP generation plugin",\n        "businessId" : "a8880540-b938-4d42-9031-ee4e245ccebf",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/chains"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/chains/104"\n    }, {\n      "rel" : "patch",\n      "href" : "http://localhost:8080/chains/104"\n    } ]\n  }, {\n    "content" : {\n      "id" : 105,\n      "label" : "Processing chain 1",\n      "active" : true,\n      "mode" : "MANUAL",\n      "locked" : false,\n      "periodicity" : "0 * * * * *",\n      "ingestChain" : "DefaultIngestChain",\n      "storages" : [ {\n        "pluginBusinessId" : "AWS",\n        "storePath" : "/path/to/file",\n        "targetTypes" : [ ]\n      }, {\n        "pluginBusinessId" : "HELLO",\n        "storePath" : "/other/path/to/file",\n        "targetTypes" : [ ]\n      } ],\n      "categories" : [ ],\n      "fileInfos" : [ {\n        "id" : 105,\n        "mandatory" : true,\n        "scanPlugin" : {\n          "id" : 115,\n          "pluginId" : "GlobDiskScanning",\n          "label" : "two : Scan plugin",\n          "businessId" : "46bf2d07-e540-44d1-ba3d-aa9fd5b49237",\n          "version" : "1.0.0-SNAPSHOT",\n          "priorityOrder" : 0,\n          "active" : true,\n          "parameters" : [ {\n            "name" : "directories",\n            "type" : "COLLECTION",\n            "value" : [ ],\n            "dynamic" : false\n          } ]\n        },\n        "mimeType" : "application/octet-stream",\n        "dataType" : "RAWDATA",\n        "comment" : "A comment"\n      } ],\n      "validationPluginConf" : {\n        "id" : 116,\n        "pluginId" : "DefaultFileValidation",\n        "label" : "two : Validation plugin",\n        "businessId" : "a08118a2-e194-4a0b-9621-61b54963f6ab",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      },\n      "productPluginConf" : {\n        "id" : 117,\n        "pluginId" : "DefaultProductPlugin",\n        "label" : "two : Product plugin",\n        "businessId" : "e5123b90-360d-4ca8-8120-6b7448fd880d",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      },\n      "generateSipPluginConf" : {\n        "id" : 118,\n        "pluginId" : "DefaultSIPGeneration",\n        "label" : "two : SIP generation plugin",\n        "businessId" : "88ca1c7f-2932-4d97-8146-e154aa4f9bce",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ ]\n      }\n    },\n    "links" : [ {\n      "rel" : "list",\n      "href" : "http://localhost:8080/chains"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/chains/105"\n    }, {\n      "rel" : "patch",\n      "href" : "http://localhost:8080/chains/105"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/chains?page=0&size=10&sort=id,asc"\n  } ]\n}\n')))}p.isMDXComponent=!0},2704:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),p=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=p(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},g=a.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),g=r,f=d["".concat(o,".").concat(g)]||d[g]||u[g]||i;return t?a.a.createElement(f,s(s({ref:e},c),{},{components:t})):a.a.createElement(f,s({ref:e},c))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);