(window.webpackJsonp=window.webpackJsonp||[]).push([[2400],{2472:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(2704)),o={},s={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body",permalink:"/fr/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createChain/request-body.md",version:"current"},c=[],p={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params**\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "label" : "Processing chain 1",\n  "active" : true,\n  "mode" : "MANUAL",\n  "locked" : false,\n  "periodicity" : "0 * * * * *",\n  "ingestChain" : "DefaultIngestChain",\n  "storages" : [ {\n    "pluginBusinessId" : "AWS",\n    "storePath" : "/path/to/file",\n    "targetTypes" : [ ]\n  }, {\n    "pluginBusinessId" : "HELLO",\n    "storePath" : "/other/path/to/file",\n    "targetTypes" : [ ]\n  } ],\n  "categories" : [ ],\n  "fileInfos" : [ {\n    "mandatory" : true,\n    "scanPlugin" : {\n      "pluginId" : "GlobDiskScanning",\n      "label" : "post : Scan plugin",\n      "businessId" : "a8371d92-8bdf-4a8d-affa-41036a80457e",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "directories",\n        "type" : "COLLECTION",\n        "value" : [ ],\n        "dynamic" : false\n      } ]\n    },\n    "mimeType" : "application/octet-stream",\n    "dataType" : "RAWDATA",\n    "comment" : "A comment"\n  } ],\n  "validationPluginConf" : {\n    "pluginId" : "DefaultFileValidation",\n    "label" : "post : Validation plugin",\n    "businessId" : "f17562b7-42f5-4c5c-b5ef-a525724b1534",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "productPluginConf" : {\n    "pluginId" : "DefaultProductPlugin",\n    "label" : "post : Product plugin",\n    "businessId" : "95240aec-f694-4848-8c16-2f6306625daf",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generateSipPluginConf" : {\n    "pluginId" : "DefaultSIPGeneration",\n    "label" : "post : SIP generation plugin",\n    "businessId" : "3e26bb35-bb74-4a80-8712-4018ee196054",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}u.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,b=l["".concat(o,".").concat(f)]||l[f]||d[f]||i;return t?a.a.createElement(b,s(s({ref:n},p),{},{components:t})):a.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);