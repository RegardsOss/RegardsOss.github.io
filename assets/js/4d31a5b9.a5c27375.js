"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[97503],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),p=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,m=d["".concat(f,".").concat(s)]||d[s]||l[s]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={},f=void 0,p={unversionedId:"development/backend/regards/notifier/api/notifier-management-api",id:"development/backend/regards/notifier/api/notifier-management-api",isDocsHomePage:!1,title:"notifier-management-api",description:"Notification management",source:"@site/docs/development/backend/regards/notifier/api/notifier-management-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/regards/notifier/api/notifier-management-api",permalink:"/docs/development/backend/regards/notifier/api/notifier-management-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/notifier-management-api.md",tags:[],version:"current",frontMatter:{}},u=[{value:"Notification management",id:"notification-management",children:[{value:"How to retry notifications that failed",id:"how-to-retry-notifications-that-failed",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notification-management"},"Notification management"),(0,o.kt)("h3",{id:"how-to-retry-notifications-that-failed"},"How to retry notifications that failed"),(0,o.kt)("p",null,"To retry notifications that failed, you need to send a new AMQP event with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"regards.request.id")," header.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If your event does not contain any body, it will retry the same event"),(0,o.kt)("li",{parentName:"ul"},"If you provides a body, it will be taken into account before retrying.")))}d.isMDXComponent=!0}}]);