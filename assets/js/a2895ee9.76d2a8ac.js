(window.webpackJsonp=window.webpackJsonp||[]).push([[1677],{1751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(2708)),i={},s={unversionedId:"development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request",id:"version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request",isDocsHomePage:!1,title:"feature-request",description:"Data params",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request.md",slug:"/development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request",permalink:"/docs/1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/generated-snippets/FeatureAMQP/FeatureRequest/feature-request.md",version:"1.4.0"},u=[],c={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{"metadata": {\n      "sessionOwner": "String",\n      "session": "String",\n      "storages": [ "String" ],\n      "priority": "Enum"\n    },\n    "feature": {\n      "entityType": "Enum",\n      "model": "String",\n      "files" : [ {\n          "locations" : [ {\n            "storage" : "String",\n            "url" : "String"\n          } ],\n          "attributes" : {\n            "dataType" : "Enum",\n            "mimeType" : "String",\n            "filename" : "String",\n            "filesize" : "Integer",\n            "algorithm" : "String",\n            "checksum" : "String"\n          }\n        } ],\n      "id": "String",\n      "geometry" : "GeoJSON",\n      "properties": [\n        "Custom"\n      ],\n      "type": "Enum"\n    },\n    "requestId": "String",\n    "requestDate": "Date"\n  }\n')))}p.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);