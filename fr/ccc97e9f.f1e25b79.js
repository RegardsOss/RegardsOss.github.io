(window.webpackJsonp=window.webpackJsonp||[]).push([[2112],{2182:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(2701)),i={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response",permalink:"/fr/docs/next/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/http-response.md",version:"current"},c=[],p={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 201 Created"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 107,\n    "label" : "Processing chain 1",\n    "active" : true,\n    "mode" : "MANUAL",\n    "locked" : false,\n    "periodicity" : "0 * * * * *",\n    "ingestChain" : "DefaultIngestChain",\n    "storages" : [ {\n      "pluginBusinessId" : "AWS",\n      "storePath" : "/path/to/file",\n      "targetTypes" : [ ]\n    }, {\n      "pluginBusinessId" : "HELLO",\n      "storePath" : "/other/path/to/file",\n      "targetTypes" : [ ]\n    } ],\n    "categories" : [ ],\n    "fileInfos" : [ {\n      "id" : 107,\n      "mandatory" : true,\n      "scanPlugin" : {\n        "id" : 124,\n        "pluginId" : "GlobDiskScanning",\n        "label" : "post : Scan plugin",\n        "businessId" : "a8371d92-8bdf-4a8d-affa-41036a80457e",\n        "version" : "1.0.0-SNAPSHOT",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "directories",\n          "type" : "COLLECTION",\n          "value" : [ ],\n          "dynamic" : false\n        } ]\n      },\n      "mimeType" : "application/octet-stream",\n      "dataType" : "RAWDATA",\n      "comment" : "A comment"\n    } ],\n    "validationPluginConf" : {\n      "id" : 125,\n      "pluginId" : "DefaultFileValidation",\n      "label" : "post : Validation plugin",\n      "businessId" : "f17562b7-42f5-4c5c-b5ef-a525724b1534",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "productPluginConf" : {\n      "id" : 126,\n      "pluginId" : "DefaultProductPlugin",\n      "label" : "post : Product plugin",\n      "businessId" : "95240aec-f694-4848-8c16-2f6306625daf",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    },\n    "generateSipPluginConf" : {\n      "id" : 127,\n      "pluginId" : "DefaultSIPGeneration",\n      "label" : "post : SIP generation plugin",\n      "businessId" : "3e26bb35-bb74-4a80-8712-4018ee196054",\n      "version" : "1.0.0-SNAPSHOT",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ ]\n    }\n  },\n  "links" : [ {\n    "rel" : "list",\n    "href" : "http://localhost:8080/chains"\n  }, {\n    "rel" : "update",\n    "href" : "http://localhost:8080/chains/107"\n  }, {\n    "rel" : "patch",\n    "href" : "http://localhost:8080/chains/107"\n  } ]\n}\n')))}l.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);