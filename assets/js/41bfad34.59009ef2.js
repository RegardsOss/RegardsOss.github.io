"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,u=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"backend-storage-file-availability-api",title:"File availability guide",sidebar_label:"File availability API",slug:"/development/backend/services/storage/file-availability-api"},l=void 0,o={unversionedId:"development/backend/regards/storage/api-guides/backend-storage-file-availability-api",id:"development/backend/regards/storage/api-guides/backend-storage-file-availability-api",title:"File availability guide",description:"File available AMQP message",source:"@site/docs/development/backend/regards/storage/api-guides/file-availability.md",sourceDirName:"development/backend/regards/storage/api-guides",slug:"/development/backend/services/storage/file-availability-api",permalink:"/docs/next/development/backend/services/storage/file-availability-api",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/api-guides/file-availability.md",tags:[],version:"current",frontMatter:{id:"backend-storage-file-availability-api",title:"File availability guide",sidebar_label:"File availability API",slug:"/development/backend/services/storage/file-availability-api"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/next/development/backend/services/storage/overview/"},next:{title:"REST API",permalink:"/docs/next/development/backend/services/storage/api-swagger"}},s={},p=[{value:"File available AMQP message",id:"file-available-amqp-message",level:2}],d={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"file-available-amqp-message"},"File available AMQP message"),(0,n.kt)("p",null,"After restoring a file, an AMQP message is sent to:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Exchange"),(0,n.kt)("th",{parentName:"tr",align:null},"Routing key"),(0,n.kt)("th",{parentName:"tr",align:null},"Virtual host"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"regards.storage.file.notification")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"regards.file.availability.status")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"regards.multitenant.manager"))))),(0,n.kt)("p",null,"With following content:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"checksum"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"File checksum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"available"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"File availability")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expirationDate"),(0,n.kt)("td",{parentName:"tr",align:null},"Date"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicate date when the file will be not available anymore.")))),(0,n.kt)("p",null,"To restore a file, ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/development/backend/services/catalog/file-restoration-api/"},"see catalog doc")))}g.isMDXComponent=!0}}]);