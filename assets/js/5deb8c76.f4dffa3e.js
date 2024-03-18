"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[76133],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>m});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),g=n,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return t?a.createElement(m,i(i({ref:r},d),{},{components:t})):a.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},61274:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const o={id:"backend-lta-manager-overview",title:"RS-LTA-MANAGER microservice",sidebar_label:"Overview",slug:"/development/backend/services/lta-manager/overview/"},i=void 0,s={unversionedId:"development/backend/regards/lta-manager/backend-lta-manager-overview",id:"version-1.13.0/development/backend/regards/lta-manager/backend-lta-manager-overview",title:"RS-LTA-MANAGER microservice",description:"The RS-LTA-MANAGER microservice has been designed to improve interropability between external applications and REGARDS OAIS catalog.",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/lta-manager/lta-manager.md",sourceDirName:"development/backend/regards/lta-manager",slug:"/development/backend/services/lta-manager/overview/",permalink:"/docs/1.13.0/development/backend/services/lta-manager/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/lta-manager/lta-manager.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-lta-manager-overview",title:"RS-LTA-MANAGER microservice",sidebar_label:"Overview",slug:"/development/backend/services/lta-manager/overview/"},sidebar:"dev",previous:{title:"API",permalink:"/docs/1.13.0/development/backend/services/worker-manager/api-swagger"},next:{title:"Submit product AMQP",permalink:"/docs/1.13.0/development/backend/services/lta-manager/guides/submit-product-amqp"}},l={},c=[{value:"API Guides",id:"api-guides",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Contributors guides",id:"contributors-guides",level:3}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The RS-LTA-MANAGER microservice has been designed to improve interropability between external applications and REGARDS OAIS catalog.",(0,n.yg)("br",{parentName:"p"}),"\n","It provides a single service that let you create product and check creation progress, errors..."),(0,n.yg)("p",null,"To do so, RS-LTA-MANAGER provides these functionnalities:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"allows to create OAIS product",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"the payload is lighter than the one used by OAIS catalog"),(0,n.yg)("li",{parentName:"ul"},"product can be enhancement by workers"))),(0,n.yg)("li",{parentName:"ul"},"get creation request status and errors - avoid you to connect to RS-WORKER-MANAGER, RS-INGEST and RS-STORAGE.")),(0,n.yg)("h3",{id:"api-guides"},"API Guides"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Create product ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/lta-manager/guides/create-product-rest"},"using REST API")," or ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/lta-manager/guides/submit-product-amqp"},"using AMQP API")," shows you how to create a ",(0,n.yg)("em",{parentName:"li"},"Long Term Archive request")," and sent it to REGARDS."),(0,n.yg)("li",{parentName:"ul"},"Get product ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/lta-manager/guides/get-request-status-rest"},"status using REST API")," or ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/lta-manager/guides/get-product-progress-amqp"},"progress threw AMQP API")," shows you how to retrieve ",(0,n.yg)("em",{parentName:"li"},"Long Term Archive request")," updates.")),(0,n.yg)("h3",{id:"rest-api"},"REST API"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/lta-manager/api-swagger"},"RS-LTA-MANAGER microservice REST API")," auto generated using OpenAPI.  ")),(0,n.yg)("h3",{id:"contributors-guides"},"Contributors guides"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"more incomming...")))}u.isMDXComponent=!0}}]);