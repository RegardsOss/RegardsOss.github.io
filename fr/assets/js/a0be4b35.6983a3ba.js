"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20595],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,m=l["".concat(s,".").concat(d)]||l[d]||f[d]||a;return n?t.createElement(m,c(c({ref:r},u),{},{components:n})):t.createElement(m,c({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},61636:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},s=void 0,p={unversionedId:"development/backend/regards/fem/api/amqp/reference-request",id:"version-1.4.0/development/backend/regards/fem/api/amqp/reference-request",title:"reference-request",description:"",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/amqp/reference-request.md",sourceDirName:"development/backend/regards/fem/api/amqp",slug:"/development/backend/regards/fem/api/amqp/reference-request",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/amqp/reference-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/reference-request.md",tags:[],version:"1.4.0",frontMatter:{}},u=[],f={toc:u};function l(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "factory": "{factory identifier}",\n    "parameters": {\n        "location":"my/file/location"\n    }\n}\n')))}l.isMDXComponent=!0}}]);