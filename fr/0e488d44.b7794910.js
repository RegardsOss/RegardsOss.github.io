(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(2701)),o={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body",id:"development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body.md",slug:"/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body",permalink:"/fr/docs/next/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/current/development/backend/regards/dam/api/generated-snippets/AccessRightControllerIT/testCreateAccessRight/request-body.md",version:"current"},i=[],p={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"***Data params**\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "qualityFilter" : {\n    "maxScore" : 10,\n    "minScore" : 0,\n    "qualityLevel" : "ACCEPTED"\n  },\n  "accessLevel" : "FULL_ACCESS",\n  "dataset" : {\n    "type" : "DATASET",\n    "metadata" : {\n      "dataObjectsGroups" : { }\n    },\n    "id" : 15,\n    "ipId" : "URN:AIP:DATASET:PROJECT:cdebd3ea-b456-4743-85ce-9b5f4e207388:V1",\n    "creationDate" : "2020-05-11T11:42:26.314Z",\n    "model" : {\n      "id" : 8,\n      "name" : "model1",\n      "description" : "desc",\n      "type" : "DATASET"\n    },\n    "tags" : [ ],\n    "groups" : [ ],\n    "feature" : {\n      "licence" : "licence",\n      "providerId" : "DS1",\n      "entityType" : "DATASET",\n      "label" : "DS1",\n      "model" : "model1",\n      "files" : { },\n      "tags" : [ ],\n      "id" : "URN:AIP:DATASET:PROJECT:cdebd3ea-b456-4743-85ce-9b5f4e207388:V1",\n      "properties" : { },\n      "type" : "Feature"\n    }\n  },\n  "accessGroup" : {\n    "id" : 17,\n    "name" : "AG2",\n    "users" : [ ],\n    "isPublic" : false,\n    "isInternal" : false\n  }\n}\n')))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||l[b]||c;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);