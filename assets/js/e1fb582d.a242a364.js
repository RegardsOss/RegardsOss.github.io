"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46226],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return i.createElement(s.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,f=u["".concat(s,".").concat(d)]||u[d]||v[d]||a;return t?i.createElement(f,o(o({ref:r},p),{},{components:t})):i.createElement(f,o({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),n=(t(67294),t(3905));const a={id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},o=void 0,l={unversionedId:"development/backend/regards/notifier/backend-notifier-overview",id:"version-1.5.0/development/backend/regards/notifier/backend-notifier-overview",title:"Notifier microservice",description:"Overview",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/notifier/notifier.md",sourceDirName:"development/backend/regards/notifier",slug:"/development/backend/services/notifier/overview/",permalink:"/docs/1.5.0/development/backend/services/notifier/overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/notifier/notifier.md",tags:[],version:"1.5.0",frontMatter:{id:"backend-notifier-overview",title:"Notifier microservice",sidebar_label:"Overview",slug:"/development/backend/services/notifier/overview/"},sidebar:"version-1.5.0/dev",previous:{title:"Feature Factory",permalink:"/docs/1.5.0/development/backend/services/fem/plugins/feature-factory/"},next:{title:"Notifier",permalink:"/docs/1.5.0/development/backend/services/notifier/api/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Available APIs",id:"available-apis",level:2},{value:"Available Plugins",id:"available-plugins",level:2}],p={toc:c};function v(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Receive JSON notification,"),(0,n.kt)("li",{parentName:"ul"},"Dispatch them to various recipients according to matching rules.")),(0,n.kt)("h2",{id:"available-apis"},"Available APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/configuration/"},"Configuration API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../api/"},"API"))),(0,n.kt)("h2",{id:"available-plugins"},"Available Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins#rule-matcher-plugins"},"Rule matchers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../plugins#recipient-sender-plugins"},"Recipient senders"))))}v.isMDXComponent=!0}}]);