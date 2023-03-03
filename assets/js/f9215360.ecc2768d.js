"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[59333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"roadmap-v1.12.0",title:"REGARDS V1.12.0",slug:"/v1.12.0/"},i=void 0,l={unversionedId:"notes/roadmap-v1.12.0",id:"notes/roadmap-v1.12.0",title:"REGARDS V1.12.0",description:"Released on : April 2023",source:"@site/roadmap/notes/V1.12.0.md",sourceDirName:"notes",slug:"/v1.12.0/",permalink:"/roadmap/v1.12.0/",draft:!1,tags:[],version:"current",frontMatter:{id:"roadmap-v1.12.0",title:"REGARDS V1.12.0",slug:"/v1.12.0/"},sidebar:"roadmap",previous:{title:"Introduction",permalink:"/roadmap/"},next:{title:"REGARDS V1.13.0",permalink:"/roadmap/v1.13.0/"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Released on : ",(0,a.kt)("strong",{parentName:"p"},"April 2023"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})),"\n",(0,a.kt)("strong",{parentName:"p"},"Operational version")),(0,a.kt)("p",null,"Planned features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New microservice ",(0,a.kt)("inlineCode",{parentName:"li"},"Long Term Archive (LTA)")," to provide a simplified and high level REST & AMQP API to submit products into the OAIS catalog."),(0,a.kt)("li",{parentName:"ul"},"Storage can now access files stored on S3 servers during the OAIS ingestion"),(0,a.kt)("li",{parentName:"ul"},"An improved admin experience with a new search panel that replaces all search fields above the data table on many views (OAIS, GeoJSON catalog, users...)"),(0,a.kt)("li",{parentName:"ul"},"Unify search payload REST API to be usable by HMI administrators (Breaking change)"),(0,a.kt)("li",{parentName:"ul"},"Enable REGARDS deployment with an external ElasticSearch or RabbitMQ service"),(0,a.kt)("li",{parentName:"ul"},"Ingest microservice can now valide OAIS product against a model during ingestion"),(0,a.kt)("li",{parentName:"ul"},"Worker Manager microservice can process a request using several workers to create a chain of workers (1-1) "),(0,a.kt)("li",{parentName:"ul"},"Improve booting system to make microservices wait for each other (Kubernetes friendly)"),(0,a.kt)("li",{parentName:"ul"},"Add a new order REST API (or AMQP) to easily create orders and download available files, designed to be used by external software"),(0,a.kt)("li",{parentName:"ul"},"Users can now filter by file types and file names on ordered products"),(0,a.kt)("li",{parentName:"ul"},"Enhance RabbitMQ security by using SSL communication (regards-oss-docker)")),(0,a.kt)("p",null,"We'll try to address as many production tickets as possible!"))}d.isMDXComponent=!0}}]);