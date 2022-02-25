"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99350],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58649:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={},l=void 0,c={unversionedId:"development/backend/regards/notifier/api/importexport/import-api",id:"version-1.7.1/development/backend/regards/notifier/api/importexport/import-api",title:"import-api",description:"Import configuration",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/notifier/api/importexport/import-api.md",sourceDirName:"development/backend/regards/notifier/api/importexport",slug:"/development/backend/regards/notifier/api/importexport/import-api",permalink:"/docs/1.7.1/development/backend/regards/notifier/api/importexport/import-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/notifier/api/importexport/import-api.md",tags:[],version:"1.7.1",frontMatter:{}},u=[{value:"Import configuration",id:"import-configuration",children:[],level:3},{value:"Request",id:"request",children:[],level:3},{value:"Response",id:"response",children:[],level:3}],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"import-configuration"},"Import configuration"),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL template")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data params")),(0,i.kt)("p",null,"Import your configuration file in multipart request using name ",(0,i.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code:")," 201 CREATED")))}m.isMDXComponent=!0}}]);