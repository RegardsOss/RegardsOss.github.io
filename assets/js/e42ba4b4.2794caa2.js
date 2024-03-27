"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69297],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(r),p=i,y=g["".concat(o,".").concat(p)]||g[p]||c[p]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(58168),i=(r(96540),r(15680));const a={id:"backend-rest-configure-settings",title:"Configure delivery settings",sidebar_label:"Configure settings",slug:"/development/backend/services/delivery/guides/rest/configure-settings"},s=void 0,l={unversionedId:"development/backend/regards/delivery/api-guides/rest/backend-rest-configure-settings",id:"version-1.14/development/backend/regards/delivery/api-guides/rest/backend-rest-configure-settings",title:"Configure delivery settings",description:"Request",source:"@site/versioned_docs/version-1.14/development/backend/regards/delivery/api-guides/rest/rest-configure-settings.md",sourceDirName:"development/backend/regards/delivery/api-guides/rest",slug:"/development/backend/services/delivery/guides/rest/configure-settings",permalink:"/docs/development/backend/services/delivery/guides/rest/configure-settings",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/delivery/api-guides/rest/rest-configure-settings.md",tags:[],version:"1.14",frontMatter:{id:"backend-rest-configure-settings",title:"Configure delivery settings",sidebar_label:"Configure settings",slug:"/development/backend/services/delivery/guides/rest/configure-settings"},sidebar:"dev",previous:{title:"Subscribe to responses",permalink:"/docs/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},next:{title:"REST API",permalink:"/docs/development/backend/services/delivery/guides/rest/api"}},o={},d=[{value:"Request",id:"request",level:2},{value:"Body",id:"body",level:2}],u={toc:d},g="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("p",null,"To configure delivery settings, send a ",(0,i.yg)("inlineCode",{parentName:"p"},"PUT")," request on update operation of dynamic-tenant-setting-controller (\nsee ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/services/delivery/guides/rest/api"},"rest api documentation"),") for each setting that needs to be set."),(0,i.yg)("h2",{id:"body"},"Body"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Default value"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"request_ttl"),(0,i.yg)("td",{parentName:"tr",align:null},"int"),(0,i.yg)("td",{parentName:"tr",align:null},"12"),(0,i.yg)("td",{parentName:"tr",align:null},"Request time to live in hours. Passed this delay, delivery requests will be deleted.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"s3_server"),(0,i.yg)("td",{parentName:"tr",align:null},"Object"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},'{"scheme":"https","host":"rs-s3-minio","port":9000,"region":"fr-regards-1","key":"default-key","secret":"default-secret"')),(0,i.yg)("td",{parentName:"tr",align:null},"Configuration to access S3 server. It has to be overridden to provide your own S3 configuration.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"build_bucket"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"default-build-bucket"),(0,i.yg)("td",{parentName:"tr",align:null},"Temporary bucket on which available files will be transferred before building final zips.  (Not used for now)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"delivery_bucket"),(0,i.yg)("td",{parentName:"tr",align:null},"String"),(0,i.yg)("td",{parentName:"tr",align:null},"default-delivery-bucket"),(0,i.yg)("td",{parentName:"tr",align:null},"Bucket on which the ZIP archives will be dropped once orders have been completed. It has to be overridden to provide your own delivery bucket.")))))}c.isMDXComponent=!0}}]);