"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13297],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,k=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(k,p(p({ref:n},u),{},{components:t})):r.createElement(k,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},57058:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),p=["components"],i={},l=void 0,c={unversionedId:"development/backend/regards/notifier/api/importexport/export-api",id:"development/backend/regards/notifier/api/importexport/export-api",isDocsHomePage:!1,title:"export-api",description:"Export configuration",source:"@site/docs/development/backend/regards/notifier/api/importexport/export-api.md",sourceDirName:"development/backend/regards/notifier/api/importexport",slug:"/development/backend/regards/notifier/api/importexport/export-api",permalink:"/fr/docs/development/backend/regards/notifier/api/importexport/export-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/importexport/export-api.md",version:"current",frontMatter:{}},u=[{value:"Export configuration",id:"export-configuration",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],m={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"export-configuration"},"Export configuration"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL template")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headers")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data params")),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code:")," 200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Headers:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type:application/json"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content:")),(0,a.kt)("p",null,"Template :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);