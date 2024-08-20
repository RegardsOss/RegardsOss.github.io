"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[70314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(m,s(s({ref:t},g),{},{components:a})):r.createElement(m,s({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"backend-storage-data-storage-plugins",title:"Data storage plugins",sidebar_label:"Data storage",slug:"/development/backend/services/storage/plugins/data-storage/"},s=void 0,i={unversionedId:"development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",id:"development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",title:"Data storage plugins",description:"Overview",source:"@site/docs/development/backend/regards/storage/plugins/data-storage-plugins.md",sourceDirName:"development/backend/regards/storage/plugins",slug:"/development/backend/services/storage/plugins/data-storage/",permalink:"/docs/next/development/backend/services/storage/plugins/data-storage/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/plugins/data-storage-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-storage-data-storage-plugins",title:"Data storage plugins",sidebar_label:"Data storage",slug:"/development/backend/services/storage/plugins/data-storage/"},sidebar:"dev",previous:{title:"Allocation strategy",permalink:"/docs/next/development/backend/services/storage/plugins/allocation-strategy/"},next:{title:"Security delegation",permalink:"/docs/next/development/backend/services/storage/plugins/security-delegation/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Implementation",id:"implementation",level:2}],g={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This extension point allows to define a new file storage system.")),(0,n.kt)("b",null,"NOTE : ")," There is two types of storage system in REGARDS :",(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Online : Files are directly accessible. (",(0,n.kt)("strong",{parentName:"li"},"Synchronous")," retrieval)"),(0,n.kt)("li",{parentName:"ul"},"Nearline : Files are on a long term archive system and needs times to be extracted. (",(0,n.kt)("strong",{parentName:"li"},"Asynchronous")," retrieval)")),(0,n.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/storage-plugins/local-storage-location/src/main/java/fr/cnes/regards/modules/storage/plugin/local/LocalDataStorage.java"},"LocalDataStorage")," : Local disk storage system.")),(0,n.kt)("h2",{id:"interfaces"},"Interfaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IStorageLocation.java"},"IStorageLocation")," : Main interface"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IOnlineStorageLocation.java"},"IOnlineStorageLocation")," : Interface for ",(0,n.kt)("inlineCode",{parentName:"li"},"Online")," systems."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-storage/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/INearlineStorageLocation.java"},"INearlineStorageLocation")," : Interface for ",(0,n.kt)("inlineCode",{parentName:"li"},"Nearline")," systems.")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"To learn more about how to create your own plugin see ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/backend/framework/modules/plugins/"},"Plugins")))}p.isMDXComponent=!0}}]);