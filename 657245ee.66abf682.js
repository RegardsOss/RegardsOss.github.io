(window.webpackJsonp=window.webpackJsonp||[]).push([[1028],{1098:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(2701)),o={},c={unversionedId:"development/backend/regards/notifier/api/notifier-management-api",id:"version-1.4.0/development/backend/regards/notifier/api/notifier-management-api",isDocsHomePage:!1,title:"notifier-management-api",description:"Notification management",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/notifier/api/notifier-management-api.md",slug:"/development/backend/regards/notifier/api/notifier-management-api",permalink:"/docs/1.4.0/development/backend/regards/notifier/api/notifier-management-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/notifier/api/notifier-management-api.md",version:"1.4.0"},p=[{value:"Notification management",id:"notification-management",children:[{value:"How to retry notifications that have failed",id:"how-to-retry-notifications-that-have-failed",children:[]}]}],f={toc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"notification-management"},"Notification management"),Object(a.b)("h3",{id:"how-to-retry-notifications-that-have-failed"},"How to retry notifications that have failed"),Object(a.b)("p",null,"To retry notifications that have failed, you just need to send a new AMQP event with the same ",Object(a.b)("inlineCode",{parentName:"p"},"regards.request.id")," header. This is a retry method, so event if you fix whatever problem the notification could have contained, by modifying its content, it will be taken into account."))}d.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=i.a.createContext({}),d=function(e){var t=i.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),s=d(n),l=r,m=s["".concat(o,".").concat(l)]||s[l]||u[l]||a;return n?i.a.createElement(m,c(c({ref:t},f),{},{components:n})):i.a.createElement(m,c({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var f=2;f<a;f++)o[f]=n[f];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);