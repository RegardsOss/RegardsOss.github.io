"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80648],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=l(t),u=a,m=c["".concat(s,".").concat(u)]||c[u]||v[u]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8535:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const i={id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},o=void 0,d={unversionedId:"development/backend/regards/dataprovider/backend-dataprovider-overview",id:"development/backend/regards/dataprovider/backend-dataprovider-overview",title:"REGARDS dataprovider microservice",description:"Overview",source:"@site/docs/development/backend/regards/dataprovider/dataprovider.md",sourceDirName:"development/backend/regards/dataprovider",slug:"/development/backend/services/dataprovider/overview/",permalink:"/docs/next/development/backend/services/dataprovider/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/dataprovider/dataprovider.md",tags:[],version:"current",frontMatter:{id:"backend-dataprovider-overview",title:"REGARDS dataprovider microservice",sidebar_label:"Overview",slug:"/development/backend/services/dataprovider/overview/"},sidebar:"dev",previous:{title:"Notifier",permalink:"/docs/next/development/backend/services/notifier/plugins/"},next:{title:"API",permalink:"/docs/next/development/backend/services/dataprovider/api-swagger"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Available Extension points",id:"available-extension-points",level:2}],p={toc:l},c="wrapper";function v(e){let{components:r,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dataprovider")," reponsabilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data discovery through a data driven mechanism,"),(0,a.kt)("li",{parentName:"ul"},"Products creation (i.e. group of consistent files),"),(0,a.kt)("li",{parentName:"ul"},"Metadata generation,"),(0,a.kt)("li",{parentName:"ul"},"Transform products to SIPs and ingest them.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data provider plugins",src:t(21812).Z,width:"771",height:"246"})),(0,a.kt)("h2",{id:"available-extension-points"},"Available Extension points"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/dataprovider/plugins/scan/"},"Scan plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/dataprovider/plugins/validation/"},"Validation plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/dataprovider/plugins/product/"},"Product genertor plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/dataprovider/plugins/sip-generation/"},"SIP generation plugins")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/development/backend/services/dataprovider/plugins/post-processing/"},"Post processing plugins"))))}v.isMDXComponent=!0},21812:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/dataprovider-745886502b412584f16edf933e86502e.svg"}}]);