(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{2708:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||s;return t?o.a.createElement(f,i(i({ref:r},p),{},{components:t})):o.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},303:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),s=(t(0),t(2708)),a={},i={unversionedId:"development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request.md",slug:"/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request",permalink:"/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/ProjectUsersControllerIT/deleteUserPermissions/http-request.md",version:"1.4.0"},c=[],p={toc:c};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/users/email@test.com/resources`\n\n    ***URL template**\n\n    `/users/{user_email}/resources`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}l.isMDXComponent=!0}}]);