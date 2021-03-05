(window.webpackJsonp=window.webpackJsonp||[]).push([[2343],{2413:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(2699)),o={},s={unversionedId:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body",id:"development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body",isDocsHomePage:!1,title:"request-body",description:"Data params",source:"@site/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body.md",slug:"/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body",permalink:"/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/generated-snippets/SIPControllerIT/ingestInvalidSips/request-body.md",version:"current"},p=[],c={toc:p};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params***\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "metadata" : {\n    "sessionOwner" : "sessionOwner",\n    "session" : "session",\n    "ingestChain" : "DefaultProcessingChain",\n    "storages" : [ {\n      "pluginBusinessId" : "disk",\n      "targetTypes" : [ ]\n    } ],\n    "categories" : [ "CAT" ]\n  },\n  "features" : [ {\n    "ipType" : "DATA",\n    "id" : "SIP_001",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "contentInformations" : [ {\n        "representationInformation" : {\n          "syntax" : {\n            "description" : "http://www.iana.org/assignments/media-types/application/fits",\n            "mimeType" : "application/fits",\n            "name" : "FITS(FlexibleImageTransport)"\n          }\n        },\n        "dataObject" : {\n          "regardsDataType" : "RAWDATA",\n          "locations" : [ {\n            "url" : "file:/home/kevin/git/rs-ingest/ingest/ingest-rest/data1.fits"\n          } ],\n          "filename" : "data1.fits",\n          "algorithm" : "FAKE_ALGO",\n          "checksum" : "sdsdfm1211vd"\n        }\n      } ],\n      "pdi" : {\n        "contextInformation" : { },\n        "referenceInformation" : { },\n        "provenanceInformation" : {\n          "history" : [ ]\n        },\n        "fixityInformation" : { },\n        "accessRightInformation" : { }\n      }\n    },\n    "type" : "Feature"\n  }, {\n    "ipType" : "DATA",\n    "id" : "SIP_002",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "contentInformations" : [ {\n        "representationInformation" : {\n          "syntax" : {\n            "description" : "http://www.iana.org/assignments/media-types/application/fits",\n            "mimeType" : "application/fits",\n            "name" : "FITS(FlexibleImageTransport)"\n          }\n        },\n        "dataObject" : {\n          "regardsDataType" : "RAWDATA",\n          "locations" : [ {\n            "url" : "file:/home/kevin/git/rs-ingest/ingest/ingest-rest/data2.fits"\n          } ],\n          "filename" : "data2.fits",\n          "algorithm" : "MD5",\n          "checksum" : "sdsdfm1211vsdfdsfd"\n        }\n      } ],\n      "pdi" : {\n        "contextInformation" : { },\n        "referenceInformation" : { },\n        "provenanceInformation" : {\n          "history" : [ ]\n        },\n        "fixityInformation" : { },\n        "accessRightInformation" : { }\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n')))}l.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return t?a.a.createElement(f,s(s({ref:n},c),{},{components:t})):a.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);