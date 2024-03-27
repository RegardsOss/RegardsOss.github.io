"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[43290],{15680:(e,r,i)=>{i.d(r,{xA:()=>p,yg:()=>f});var n=i(96540);function t(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function a(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?a(Object(i),!0).forEach((function(r){t(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function l(e,r){if(null==e)return{};var i,n,t=function(e,r){if(null==e)return{};var i,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],r.indexOf(i)>=0||(t[i]=e[i]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=n.createContext({}),c=function(e){var r=n.useContext(s),i=r;return e&&(i="function"==typeof e?e(r):o(o({},r),e)),i},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var i=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=c(i),u=t,f=v["".concat(s,".").concat(u)]||v[u]||d[u]||a;return i?n.createElement(f,o(o({ref:r},p),{},{components:i})):n.createElement(f,o({ref:r},p))}));function f(e,r){var i=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[v]="string"==typeof e?e:t,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},52743:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=i(58168),t=(i(96540),i(15680));const a={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},o=void 0,l={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"version-1.14/development/backend/regards/notifier/backend-notifier-overview",title:"Notifier microservice",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/notifier/notifier.md",sourceDirName:"development/backend/regards/notifier",slug:"/development/backend/services/notifier/overview/",permalink:"/docs/development/backend/services/notifier/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/notifier/notifier.md",tags:[],version:"1.14",frontMatter:{id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},sidebar:"dev",previous:{title:"REST API",permalink:"/docs/development/backend/services/lta-manager/api-swagger"},next:{title:"API",permalink:"/docs/development/backend/services/notifier/api-swagger"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Available Plugins",id:"available-plugins",level:2}],p={toc:c},v="wrapper";function d(e){let{components:r,...i}=e;return(0,t.yg)(v,(0,n.A)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"overview"},"Overview"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Receive JSON notification,"),(0,t.yg)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),(0,t.yg)("h2",{id:"available-apis"},"Available APIs"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/api/configuration/"},"Configuration API")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/api-swagger"},"Notifier API"))),(0,t.yg)("h2",{id:"available-plugins"},"Available Plugins"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/#rule-matcher-plugins"},"Rule matchers")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/development/backend/services/notifier/plugins/#recipient-sender-plugins"},"Recipient senders"))))}d.isMDXComponent=!0}}]);