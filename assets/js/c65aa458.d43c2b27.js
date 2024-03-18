"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[57442],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(t),u=n,g=c["".concat(s,".").concat(u)]||c[u]||v[u]||i;return t?a.createElement(g,o(o({ref:r},p),{},{components:t})):a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d[c]="string"==typeof e?e:n,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38738:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=t(58168),n=(t(96540),t(15680));const i={id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},o=void 0,d={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-overview",id:"version-1.13.0/development/backend/regards/dataprovider/backend-dataprovider-overview",title:"REGARDS dataprovider microservice",description:"Overview",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/dataprovider/dataprovider.md",sourceDirName:"development/backend/regards/dataprovider",slug:"/development/backend/services/dataprovider/overview/",permalink:"/docs/1.13.0/development/backend/services/dataprovider/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/dataprovider/dataprovider.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},sidebar:"dev",previous:{title:"Notifier",permalink:"/docs/1.13.0/development/backend/services/notifier/plugins/"},next:{title:"API",permalink:"/docs/1.13.0/development/backend/services/dataprovider/api-swagger"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2}],p={toc:l},c="wrapper";function v(e){let{components:r,...i}=e;return(0,n.yg)(c,(0,a.A)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Dataprovider")," reponsabilities:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Data discovery through a data driven mechanism,"),(0,n.yg)("li",{parentName:"ul"},"Products creation (i.e. group of consistent files),"),(0,n.yg)("li",{parentName:"ul"},"Metadata generation,"),(0,n.yg)("li",{parentName:"ul"},"Transform products to SIPs and ingest them.")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Data provider plugins",src:t(63299).A,width:"771",height:"246"})),(0,n.yg)("h2",{id:"available-extension-points"},"Available Extension points"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dataprovider/plugins/scan/"},"Scan plugins")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dataprovider/plugins/validation/"},"Validation plugins")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dataprovider/plugins/product/"},"Product genertor plugins")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dataprovider/plugins/sip-generation/"},"SIP generation plugins")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/backend/services/dataprovider/plugins/post-processing/"},"Post processing plugins"))))}v.isMDXComponent=!0},63299:(e,r,t)=>{t.d(r,{A:()=>a});const a=t.p+"assets/images/dataprovider-745886502b412584f16edf933e86502e.svg"}}]);