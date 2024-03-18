"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[32199],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const a={},o=void 0,c={unversionedId:"development/backend/regards/notifier/api/notifier-management-api",id:"version-1.11.0/development/backend/regards/notifier/api/notifier-management-api",title:"notifier-management-api",description:"Notification management",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/notifier/api/notifier-management-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/regards/notifier/api/notifier-management-api",permalink:"/docs/1.11.0/development/backend/regards/notifier/api/notifier-management-api",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/notifier/api/notifier-management-api.md",tags:[],version:"1.11.0",frontMatter:{}},l={},p=[{value:"Notification management",id:"notification-management",level:2},{value:"How to retry notifications that failed",id:"how-to-retry-notifications-that-failed",level:3}],s={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"notification-management"},"Notification management"),(0,i.yg)("h3",{id:"how-to-retry-notifications-that-failed"},"How to retry notifications that failed"),(0,i.yg)("p",null,"To retry notifications that failed, you need to send a new AMQP event with the same ",(0,i.yg)("inlineCode",{parentName:"p"},"regards.request.id")," header.  "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If your event does not contain any body, it will retry the same event"),(0,i.yg)("li",{parentName:"ul"},"If you provides a body, it will be taken into account before retrying.")))}f.isMDXComponent=!0}}]);