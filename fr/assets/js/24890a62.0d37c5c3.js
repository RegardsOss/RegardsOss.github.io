(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},473:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(2704)),i={},s={unversionedId:"development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body",id:"development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body",isDocsHomePage:!1,title:"request-body",description:"Data params",source:"@site/docs/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body.md",slug:"/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body",permalink:"/fr/docs/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api/generated-snippets/FeatureControllerIT/testCreateValidFeatureCreationRequest/request-body.md",version:"current"},u=[],c={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Data params")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata" : {\n    "sessionOwner" : "owner",\n    "session" : "session",\n    "storages" : [ {\n      "pluginBusinessId" : "disk"\n    } ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : null,\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "files" : [ {\n      "locations" : [ {\n        "storage" : null,\n        "url" : "http://www.test.com/filename.xml"\n      } ],\n      "attributes" : {\n        "dataType" : "RAWDATA",\n        "mimeType" : "application/xml",\n        "filename" : "filename",\n        "filesize" : 100,\n        "algorithm" : "MD5",\n        "checksum" : "checksum"\n      }\n    } ],\n    "id" : "MyId",\n    "geometry" : {\n      "coordinates" : [ 10.0, 20.0 ],\n      "type" : "Point",\n      "bbox" : null,\n      "crs" : null\n    },\n    "normalizedGeometry" : null,\n    "properties" : {\n      "data_type" : "TYPE01",\n      "file_characterization" : {\n        "valid" : true\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n')))}l.isMDXComponent=!0}}]);