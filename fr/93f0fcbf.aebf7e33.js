(window.webpackJsonp=window.webpackJsonp||[]).push([[1518],{1588:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return a})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),i=(t(0),t(2701)),s={},c={unversionedId:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",id:"development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body.md",slug:"/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",permalink:"/fr/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/admin/api/generated-snippets/MicroserviceResourceControllerIT/registerMicroserviceEndpointsTest/request-body.md",version:"current"},a=[],l={toc:a};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"***Data params**\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    [ {\n  "resourceAccess" : {\n    "role" : "PUBLIC",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "REGISTERED_USER",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test2",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "INSTANCE_ADMIN",\n    "description" : "test"\n  },\n  "fullPath" : "/endpoint/test3",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n}, {\n  "resourceAccess" : {\n    "role" : "PUBLIC",\n    "description" : "test"\n  },\n  "fullPath" : "/configured/endpoint",\n  "controllerSimpleName" : "testController",\n  "method" : "GET",\n  "authorizedRoles" : [ ]\n} ]\n')))}p.isMDXComponent=!0},2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.a.createElement(f,c(c({ref:r},l),{},{components:t})):o.a.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);