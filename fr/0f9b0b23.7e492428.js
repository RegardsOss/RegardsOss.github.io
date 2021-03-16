(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{243:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),a=(n(0),n(2701)),c={},s={unversionedId:"development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",id:"version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",isDocsHomePage:!1,title:"request-body",description:"*Data params",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body.md",slug:"/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",permalink:"/fr/docs/1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/admin/api/generated-snippets/RoleResourceControllerIT/addAndRestoreResource/request-body.md",version:"1.4.0"},i=[],d={toc:i};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"***Data params**\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    {\n  "id" : 15,\n  "description" : "Retrieve the list of project users (crawls through parents\' hierarchy) of the role with role_name",\n  "microservice" : "Test application",\n  "controllerSimpleName" : "ProjectUsersController",\n  "resource" : "/users/roles",\n  "verb" : "GET",\n  "defaultRole" : "ADMIN"\n}\n')))}u.isMDXComponent=!0},2701:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var r=o.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(d.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=t,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||a;return n?o.a.createElement(f,s(s({ref:r},d),{},{components:n})):o.a.createElement(f,s({ref:r},d))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);