(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},g=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,f=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return t?o.a.createElement(f,l(l({ref:n},c),{},{components:t})):o.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},286:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(2699)),i={},l={unversionedId:"development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response",id:"version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response.md",slug:"/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/storage/api/generated-snippets/StorageLocationControllerIT/retreiveAll/http-response.md",version:"1.4.0"},s=[],c={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"request"},"Request"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n[ {\n  "content" : {\n    "name" : "target",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 7,\n      "name" : "target",\n      "pluginConfiguration" : {\n        "id" : 7,\n        "pluginId" : "SimpleOnlineTest",\n        "label" : "target",\n        "businessId" : "target",\n        "version" : "1.0",\n        "priorityOrder" : 0,\n        "active" : true,\n        "parameters" : [ {\n          "name" : "Storage_URL",\n          "type" : "STRING",\n          "value" : "target/ONLINE-STORAGE",\n          "dynamic" : false\n        }, {\n          "name" : "delete_error_file_pattern",\n          "type" : "STRING",\n          "value" : "delErr.*",\n          "dynamic" : false\n        }, {\n          "name" : "error_file_pattern",\n          "type" : "STRING",\n          "value" : "error.*",\n          "dynamic" : false\n        } ]\n      },\n      "storageType" : "ONLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 1000000\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/target"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/target"\n  } ]\n}, {\n  "content" : {\n    "name" : "internal-cache",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "name" : "internal-cache",\n      "storageType" : "CACHE",\n      "allocatedSizeInKo" : 500000000\n    }\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "name" : "plop",\n    "nbFilesStored" : 0,\n    "totalStoredFilesSizeKo" : 0,\n    "nbStorageError" : 0,\n    "nbDeletionError" : 0,\n    "storageRunning" : false,\n    "deletionRunning" : false,\n    "copyRunning" : false,\n    "configuration" : {\n      "id" : 8,\n      "name" : "plop",\n      "storageType" : "OFFLINE",\n      "priority" : 0,\n      "allocatedSizeInKo" : 0\n    }\n  },\n  "links" : [ {\n    "rel" : "update",\n    "href" : "http://localhost:8080/storages/plop"\n  }, {\n    "rel" : "delete",\n    "href" : "http://localhost:8080/storages/plop"\n  } ]\n} ]\n')))}p.isMDXComponent=!0}}]);