(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?a.a.createElement(f,i(i({ref:r},l),{},{components:t})):a.a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},427:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(2701)),c={},i={unversionedId:"development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body",id:"development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body.md",slug:"/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body",permalink:"/docs/next/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/RolesControllerIT/createRole/request-body.md",version:"current"},s=[],l={toc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"***Data params**\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "name" : "NEW_ROLE",\n  "parentRole" : {\n    "id" : 1,\n    "name" : "PUBLIC",\n    "authorizedAddresses" : [ ],\n    "isDefault" : false,\n    "isNative" : true\n  },\n  "isDefault" : false,\n  "isNative" : false\n}\n')))}p.isMDXComponent=!0}}]);