"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[42661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"release-notes-v1.14.7",title:"Version 1.14.7",slug:"/v1.14.7/"},i=void 0,l={unversionedId:"notes/release-notes-v1.14.7",id:"notes/release-notes-v1.14.7",title:"Version 1.14.7",description:"Released on : March 2024",source:"@site/release_notes/notes/V1.14.7.md",sourceDirName:"notes",slug:"/v1.14.7/",permalink:"/release-notes/v1.14.7/",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.14.7",title:"Version 1.14.7",slug:"/v1.14.7/"},sidebar:"release_notes",previous:{title:"Version 1.14.9",permalink:"/release-notes/v1.14.9/"},next:{title:"Version 1.14.0",permalink:"/release-notes/v1.14.0/"}},s={},u=[{value:"Bug fixes",id:"bug-fixes",level:2},{value:"FEM catalog",id:"fem-catalog",level:3},{value:"OAIS catalog",id:"oais-catalog",level:3},{value:"Storage",id:"storage",level:3},{value:"All services",id:"all-services",level:3},{value:"Others",id:"others",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Released on : ",(0,a.kt)("strong",{parentName:"p"},"March 2024"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})),"\n",(0,a.kt)("strong",{parentName:"p"},"Operational version")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,a.kt)("h3",{id:"fem-catalog"},"FEM catalog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve FEM efficiency while removing storage requests"),(0,a.kt)("li",{parentName:"ul"},"Allow to remove a FEM product linked to a blocked/running request")),(0,a.kt)("h3",{id:"oais-catalog"},"OAIS catalog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix Refresh button behavior on OAIS product page to refresh the number of request and number of product on the same\ntime"),(0,a.kt)("li",{parentName:"ul"},"Stop retrieving Notifier recipients on the OAIS dashboard if Notifier is not active on current tenant ")),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allow administrators to edit the Storage internal cache"),(0,a.kt)("li",{parentName:"ul"},"Handle ",(0,a.kt)("inlineCode",{parentName:"li"},"FileCacheRequestJob")," job crash (to reschedule associated requests)")),(0,a.kt)("h3",{id:"all-services"},"All services"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix invalid header on messages put in DLQ that prevents admin to put these messages back to the original queue")),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix download dataset files on the user app"),(0,a.kt)("li",{parentName:"ul"},"LTA dashboard page - unselect checkboxes when removing many entities"),(0,a.kt)("li",{parentName:"ul"},"Improve authentication expiration when using SSO"),(0,a.kt)("li",{parentName:"ul"},"Fix various deployment issues with Docker")))}d.isMDXComponent=!0}}]);