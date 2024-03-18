"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70451],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return t?n.createElement(d,p(p({ref:r},c),{},{components:t})):n.createElement(d,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11399:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(58168),o=(t(96540),t(15680));const a={},p=void 0,i={unversionedId:"development/backend/regards/fem/api/importexport/import-api",id:"version-1.11.0/development/backend/regards/fem/api/importexport/import-api",title:"import-api",description:"Import configuration",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/fem/api/importexport/import-api.md",sourceDirName:"development/backend/regards/fem/api/importexport",slug:"/development/backend/regards/fem/api/importexport/import-api",permalink:"/docs/1.11.0/development/backend/regards/fem/api/importexport/import-api",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/fem/api/importexport/import-api.md",tags:[],version:"1.11.0",frontMatter:{}},l={},s=[{value:"Import configuration",id:"import-configuration",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],c={toc:s},m="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(m,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"import-configuration"},"Import configuration"),(0,o.yg)("h3",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"URL")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"URL template")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"/microservice/configuration")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Method")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"POST")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Headers")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"Accept:application/json")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Data params")),(0,o.yg)("p",null,"Import your configuration file in multipart request using name ",(0,o.yg)("inlineCode",{parentName:"p"},"file"),"."),(0,o.yg)("h3",{id:"response"},"Response"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Code:")," 201 CREATED")))}u.isMDXComponent=!0}}]);