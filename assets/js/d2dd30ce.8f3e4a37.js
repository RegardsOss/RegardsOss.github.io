"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[86720],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>u});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),v=a,u=m["".concat(c,".").concat(v)]||m[v]||d[v]||i;return t?n.createElement(u,o(o({ref:r},p),{},{components:t})):n.createElement(u,o({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=v;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},10048:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(45072),a=(t(11504),t(95788));const i={id:"backend-fem-overview",title:"REGARDS feature management microservice",sidebar_label:"Overview",slug:"/development/backend/services/fem/overview/"},o=void 0,l={unversionedId:"development/backend/regards/fem/backend-fem-overview",id:"development/backend/regards/fem/backend-fem-overview",title:"REGARDS feature management microservice",description:"Overview",source:"@site/docs/development/backend/regards/fem/fem.md",sourceDirName:"development/backend/regards/fem",slug:"/development/backend/services/fem/overview/",permalink:"/docs/development/backend/services/fem/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/fem.md",tags:[],version:"current",frontMatter:{id:"backend-fem-overview",title:"REGARDS feature management microservice",sidebar_label:"Overview",slug:"/development/backend/services/fem/overview/"},sidebar:"dev",previous:{title:"REST API",permalink:"/docs/development/backend/services/delivery/guides/rest/api"},next:{title:"API",permalink:"/docs/development/backend/services/fem/api-swagger"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2}],p={toc:s},m="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Fem")," reponsabilities:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Feature extraction thanks to one of ",(0,a.yg)("a",{parentName:"li",href:"/docs/development/backend/services/fem/plugins/feature-factory/"},"IFeatureFactoryPlugin")," implementation,"),(0,a.yg)("li",{parentName:"ul"},"Feature creation,"),(0,a.yg)("li",{parentName:"ul"},"Feature update,"),(0,a.yg)("li",{parentName:"ul"},"Feature deletion.")),(0,a.yg)("h2",{id:"available-apis"},"Available APIs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/development/backend/services/fem/api/configuration/"},"Configuration REST API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/development/backend/services/fem/api/rest/"},"REST API")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/development/backend/services/fem/api/amqp/"},"AMQP API"))))}d.isMDXComponent=!0}}]);