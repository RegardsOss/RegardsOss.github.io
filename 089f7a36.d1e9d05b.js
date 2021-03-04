(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(2701)),o={},c={unversionedId:"development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",id:"version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body.md",slug:"/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",permalink:"/docs/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dataprovider/api/generated-snippets/AcquisitionProcessingChainControllerIT/createAutomaticChainWithoutPeriodicity/request-body.md",version:"1.4.0"},s=[],u={toc:s};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"***Data params**\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "label" : "Processing chain 1",\n  "active" : true,\n  "mode" : "AUTO",\n  "locked" : false,\n  "periodicity" : "",\n  "ingestChain" : "DefaultIngestChain",\n  "storages" : [ {\n    "pluginBusinessId" : "AWS",\n    "storePath" : "/path/to/file",\n    "targetTypes" : [ ]\n  }, {\n    "pluginBusinessId" : "HELLO",\n    "storePath" : "/other/path/to/file",\n    "targetTypes" : [ ]\n  } ],\n  "categories" : [ ],\n  "fileInfos" : [ {\n    "mandatory" : true,\n    "scanPlugin" : {\n      "pluginId" : "GlobDiskScanning",\n      "label" : "AutoError : Scan plugin",\n      "businessId" : "aaebe38b-f841-4554-a99c-31ed87a6b6d5",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "directories",\n        "type" : "COLLECTION",\n        "value" : [ ],\n        "dynamic" : false\n      } ]\n    },\n    "mimeType" : "application/octet-stream",\n    "dataType" : "RAWDATA",\n    "comment" : "A comment"\n  } ],\n  "validationPluginConf" : {\n    "pluginId" : "DefaultFileValidation",\n    "label" : "AutoError : Validation plugin",\n    "businessId" : "7624205e-212a-4c46-a91f-14289d6e8863",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "productPluginConf" : {\n    "pluginId" : "DefaultProductPlugin",\n    "label" : "AutoError : Product plugin",\n    "businessId" : "5a1708bf-0937-4d8c-b787-d9f474804118",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  },\n  "generateSipPluginConf" : {\n    "pluginId" : "DefaultSIPGeneration",\n    "label" : "AutoError : SIP generation plugin",\n    "businessId" : "b25c452d-5e01-444e-a013-b160f8963f19",\n    "priorityOrder" : 0,\n    "active" : true,\n    "parameters" : [ ]\n  }\n}\n')))}p.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),p=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,f=d["".concat(o,".").concat(b)]||d[b]||l[b]||a;return t?i.a.createElement(f,c(c({ref:n},u),{},{components:t})):i.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);