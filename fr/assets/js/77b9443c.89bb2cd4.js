(window.webpackJsonp=window.webpackJsonp||[]).push([[1232],{1303:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return l}));var t=r(3),o=r(7),a=(r(0),r(2704)),i={},c={unversionedId:"development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",id:"version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body.md",slug:"/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",permalink:"/fr/docs/1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/updateLocation/request-body.md",version:"1.4.0"},p=[],s={toc:p};function l(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"***Data params**\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "name",\n  "nbStorageError" : 0,\n  "nbDeletionError" : 0,\n  "storageRunning" : false,\n  "deletionRunning" : false,\n  "copyRunning" : false,\n  "configuration" : {\n    "id" : 5,\n    "name" : "name",\n    "pluginConfiguration" : {\n      "id" : 5,\n      "pluginId" : "SimpleOnlineTest",\n      "label" : "name",\n      "businessId" : "name",\n      "version" : "1.0",\n      "priorityOrder" : 0,\n      "active" : true,\n      "parameters" : [ {\n        "name" : "Storage_URL",\n        "type" : "STRING",\n        "value" : "target/ONLINE-STORAGE",\n        "dynamic" : false\n      }, {\n        "name" : "delete_error_file_pattern",\n        "type" : "STRING",\n        "value" : "delErr.*",\n        "dynamic" : false\n      }, {\n        "name" : "error_file_pattern",\n        "type" : "STRING",\n        "value" : "error.*",\n        "dynamic" : false\n      } ]\n    },\n    "storageType" : "ONLINE",\n    "priority" : 1,\n    "allocatedSizeInKo" : 10000\n  }\n}\n')))}l.isMDXComponent=!0},2704:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),g=t,f=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return r?o.a.createElement(f,c(c({ref:n},s),{},{components:r})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);