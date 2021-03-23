(window.webpackJsonp=window.webpackJsonp||[]).push([[1798],{1870:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),i=(t(0),t(2704)),o={},c={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body",id:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChain/request-body.md",version:"current"},s=[],p={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params**\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "label" : "Processing chain 1",\n  "active" : true,\n  "mode" : "AUTO",\n  "locked" : false,\n  "periodicity" : "0 30 * * * *",\n  "ingestChain" : "DefaultIngestChain",\n  "storages" : [ {\n    "pluginBusinessId" : "AWS",\n    "storePath" : "/path/to/file",\n    "targetTypes" : [ ]\n  }, {\n    "pluginBusinessId" : "HELLO",\n    "storePath" : "/other/path/to/file",\n    "targetTypes" : [ ]\n  } ],\n  "categories" : [ ],\n  "fileInfos" : [ {\n    "mandatory" : true,\n    "scanPlugin" : {\n      "pluginId" : "GlobDiskScanning",\n      "label" : "Auto10s : Scan plugin",\n      "businessId" : "1ede8062-0e2a-44cd-a349-edf9d6942148",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "directories",\n        "type" : "COLLECTION",\n        "value" : [ ],\n        "dynamic" : false\n      } ]\n    },\n    "mimeType" : "application/octet-stream",\n    "dataType" : "RAWDATA",\n    "comment" : "A comment"\n  } ],\n  "validationPluginConf" : {\n    "pluginId" : "DefaultFileValidation",\n    "label" : "Auto10s : Validation plugin",\n    "businessId" : "6a3d8db5-8568-42ca-a741-163e99f0cf1a",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "productPluginConf" : {\n    "pluginId" : "DefaultProductPlugin",\n    "label" : "Auto10s : Product plugin",\n    "businessId" : "5792220f-6ac9-41ce-b7e9-39e653456f07",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generateSipPluginConf" : {\n    "pluginId" : "DefaultSIPGeneration",\n    "label" : "Auto10s : SIP generation plugin",\n    "businessId" : "2c025cf5-f497-4039-a570-2bdd06af9943",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}u.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,g=d["".concat(o,".").concat(f)]||d[f]||l[f]||i;return t?a.a.createElement(g,c(c({ref:n},p),{},{components:t})):a.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);