(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{2708:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=t,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.a.createElement(f,c(c({ref:r},l),{},{components:n})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},759:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return a})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),i=(n(0),n(2708)),s={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body.md",slug:"/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",permalink:"/fr/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body.md",version:"1.4.0"},a=[],l={toc:a};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params**\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    [ {\n  "resourceAccess" : {\n    "role" : "PUBLIC",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "REGISTERED_USER",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test2",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "INSTANCE_ADMIN",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test3",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "PUBLIC",\n    "description" : "test"\n  },\n  "fullPath" : "/configured/endpoint",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n} ]\n')))}p.isMDXComponent=!0}}]);