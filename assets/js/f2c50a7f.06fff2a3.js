"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80837],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>v});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),y=i,v=u["".concat(l,".").concat(y)]||u[y]||p[y]||a;return t?n.createElement(v,s(s({ref:r},c),{},{components:t})):n.createElement(v,s({ref:r},c))}));function v(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=y;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},81766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(58168),i=(t(96540),t(15680));const a={id:"backend-delivery-architecture",title:"RS-DELIVERY architecture",sidebar_label:"Architecture",slug:"/development/backend/services/delivery/architecture/"},s=void 0,o={unversionedId:"development/backend/regards/delivery/backend-delivery-architecture",id:"development/backend/regards/delivery/backend-delivery-architecture",title:"RS-DELIVERY architecture",description:"Basically, rs-delivery is a microservice that interacts with REGARDS' core functionalities to make files available for download in a configurable S3 server.",source:"@site/docs/development/backend/regards/delivery/architecture.md",sourceDirName:"development/backend/regards/delivery",slug:"/development/backend/services/delivery/architecture/",permalink:"/docs/next/development/backend/services/delivery/architecture/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/delivery/architecture.md",tags:[],version:"current",frontMatter:{id:"backend-delivery-architecture",title:"RS-DELIVERY architecture",sidebar_label:"Architecture",slug:"/development/backend/services/delivery/architecture/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/next/development/backend/services/delivery/overview/"},next:{title:"Publish a request",permalink:"/docs/next/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"}},l={},d=[{value:"Create a delivery request",id:"create-a-delivery-request",level:2},{value:"Monitor the request progress",id:"monitor-the-request-progress",level:2}],c={toc:d},u="wrapper";function p(e){let{components:r,...a}=e;return(0,i.yg)(u,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Basically, rs-delivery is a microservice that interacts with REGARDS' core functionalities to make files available for download in a configurable S3 server.\nThe following sequence diagram presents the main interactions when a delivery request is sent."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"delivery_sequence_diagram",src:t(17204).A,width:"1088",height:"1010"})),(0,i.yg)("h2",{id:"create-a-delivery-request"},"Create a delivery request"),(0,i.yg)("p",null,"First, a delivery event is published by an external client and is then received by REGARDS to be proceeded."),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"see ",(0,i.yg)("a",{parentName:"em",href:"/docs/next/development/backend/services/delivery/guides/amqp/publish-a-delivery-request"},"create a delivery request"))),(0,i.yg)("p",null,"REGARDS checks the conformity of the message received:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"if it is valid, the request is saved and a delivery response with ",(0,i.yg)("inlineCode",{parentName:"li"},"GRANTED")," status is sent,"),(0,i.yg)("li",{parentName:"ul"},"otherwise, the response with the ",(0,i.yg)("inlineCode",{parentName:"li"},"DENIED")," status is sent with the error received by delivery.")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"see ",(0,i.yg)("a",{parentName:"em",href:"/docs/next/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},"subscribe to delivery responses"))),(0,i.yg)("h2",{id:"monitor-the-request-progress"},"Monitor the request progress"),(0,i.yg)("p",null,"Internally, the request is then forwarded to ",(0,i.yg)("a",{parentName:"p",href:"/docs/next/development/backend/services/order/overview/"},"rs-order microservice")," to be processed."),(0,i.yg)("p",null,"Files requested are retrieved and made available locally by rs-order. An event is then sent from rs-order to rs-delivery to\nindicate that the suborder has been processed. "),(0,i.yg)("admonition",{title:"Current limitation",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"For now, only one suborder is allowed per delivery request. If there are more than one,\nthe delivery request is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"ERROR")," status.")),(0,i.yg)("p",null,"When rs-delivery receives the final order event, it handles the response in two different ways:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"In case of error"),", an event is sent from rs-delivery to rs-order to delete the order and the request status is set to ",(0,i.yg)("inlineCode",{parentName:"li"},"ERROR"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"In case of success"),", files are retrieved by rs-delivery and copied to its local workspace. They are then zipped and uploaded to the configured S3 server. The checksums are systematically verified to ensure data integrity. A ",(0,i.yg)("inlineCode",{parentName:"li"},"DONE")," response is then published to notify the end of the delivery.")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"see ",(0,i.yg)("a",{parentName:"em",href:"/docs/next/development/backend/services/delivery/guides/amqp/subscribe-to-delivery-responses"},"subscribe to delivery responses"))))}p.isMDXComponent=!0},17204:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/delivery_sequence_diagram-a44fd1803be475eb6d284ee4eceeb3ec.png"}}]);