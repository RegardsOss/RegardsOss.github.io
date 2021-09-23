"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[26904],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return l}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),s=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),l=i,m=d["".concat(f,".").concat(l)]||d[l]||u[l]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function l(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68588:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return f},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={},f=void 0,s={unversionedId:"development/backend/regards/notifier/api/notifier-management-api",id:"version-1.5.0/development/backend/regards/notifier/api/notifier-management-api",isDocsHomePage:!1,title:"notifier-management-api",description:"Notification management",source:"@site/versioned_docs/version-1.5.0/development/backend/regards/notifier/api/notifier-management-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/regards/notifier/api/notifier-management-api",permalink:"/docs/1.5.0/development/backend/regards/notifier/api/notifier-management-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/backend/regards/notifier/api/notifier-management-api.md",tags:[],version:"1.5.0",frontMatter:{}},p=[{value:"Notification management",id:"notification-management",children:[{value:"How to retry notifications that have failed",id:"how-to-retry-notifications-that-have-failed",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"notification-management"},"Notification management"),(0,o.kt)("h3",{id:"how-to-retry-notifications-that-have-failed"},"How to retry notifications that have failed"),(0,o.kt)("p",null,"To retry notifications that have failed, you just need to send a new AMQP event with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"regards.request.id")," header. This is a retry method, so event if you fix whatever problem the notification could have contained, by modifying its content, it will be taken into account."))}d.isMDXComponent=!0}}]);