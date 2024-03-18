"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[65981],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},56066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const a={id:"release-notes-v1.0.0",title:"Version 1.0.0",slug:"/v1.0.0/"},i=void 0,l={unversionedId:"notes/release-notes-v1.0.0",id:"notes/release-notes-v1.0.0",title:"Version 1.0.0",description:"Released on: July, 2020",source:"@site/release_notes/notes/V1.0.0.md",sourceDirName:"notes",slug:"/v1.0.0/",permalink:"/release-notes/v1.0.0/",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.0.0",title:"Version 1.0.0",slug:"/v1.0.0/"},sidebar:"release_notes",previous:{title:"Version 1.1.0",permalink:"/release-notes/v1.1.0/"},next:{title:"Version 0.4.1",permalink:"/release-notes/v0.4.1/"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Released on: ",(0,o.yg)("strong",{parentName:"p"},"July, 2020"),(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"}))),(0,o.yg)("p",null,"Features:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add new operator role in the system with limited access to administration fonctionalities, created to manage data catalog."),(0,o.yg)("li",{parentName:"ul"},"Add configurable access rights on documents"),(0,o.yg)("li",{parentName:"ul"},"Add complete frontend config export from admin HMI"),(0,o.yg)("li",{parentName:"ul"},'"Remake" of the storage microservice. Improvements :',(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Allow to reference files that are already stored (when user doesn't want files to be restored)"),(0,o.yg)("li",{parentName:"ul"},"Store small size files in archives to avoid inode issues"),(0,o.yg)("li",{parentName:"ul"},"Copy files from one storage system to another."),(0,o.yg)("li",{parentName:"ul"},'Remove complex system of "allocation strategy" plugins. Storage locations are now defined in the provided SIP.'))),(0,o.yg)("li",{parentName:"ul"},'"Remake" of the ingestion microservice',(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Removed storage functionnalities"),(0,o.yg)("li",{parentName:"ul"},"Improve performances and error recovery"),(0,o.yg)("li",{parentName:"ul"},"Remove configuration from the Ingest Chain, now all this configuration is provided by dataprovider (or any other SIP provider)"))),(0,o.yg)("li",{parentName:"ul"},"Fix geospacial geometry sanitization on dateline"),(0,o.yg)("li",{parentName:"ul"},"Multiple HMI improvements on the user catalog and the admin HMI")))}m.isMDXComponent=!0}}]);