(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),d=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||l[s]||i;return n?a.a.createElement(m,c(c({ref:t},f),{},{components:n})):a.a.createElement(m,c({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var f=2;f<i;f++)o[f]=n[f];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},846:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(2708)),o={},c={unversionedId:"development/backend/regards/notifier/api/notifier-management-api",id:"development/backend/regards/notifier/api/notifier-management-api",isDocsHomePage:!1,title:"notifier-management-api",description:"Notification management",source:"@site/docs/development/backend/regards/notifier/api/notifier-management-api.md",slug:"/development/backend/regards/notifier/api/notifier-management-api",permalink:"/docs/development/backend/regards/notifier/api/notifier-management-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/notifier-management-api.md",version:"current"},p=[{value:"Notification management",id:"notification-management",children:[{value:"How to retry notifications that have failed",id:"how-to-retry-notifications-that-have-failed",children:[]}]}],f={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"notification-management"},"Notification management"),Object(i.b)("h3",{id:"how-to-retry-notifications-that-have-failed"},"How to retry notifications that have failed"),Object(i.b)("p",null,"To retry notifications that have failed, you just need to send a new AMQP event with the same ",Object(i.b)("inlineCode",{parentName:"p"},"regards.request.id")," header. This is a retry method, so event if you fix whatever problem the notification could have contained, by modifying its content, it will be taken into account."))}d.isMDXComponent=!0}}]);