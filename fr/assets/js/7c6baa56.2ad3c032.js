(window.webpackJsonp=window.webpackJsonp||[]).push([[1274],{1345:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),c=(t(0),t(2704)),o={id:"backend-access-overview",title:"REGARDS access project microservice (Backend for Frontend)",sidebar_label:"Overview",slug:"/development/backend/services/access/overview/"},i={unversionedId:"development/backend/regards/access/backend-access-overview",id:"development/backend/regards/access/backend-access-overview",isDocsHomePage:!1,title:"REGARDS access project microservice (Backend for Frontend)",description:"Overview",source:"@site/docs/development/backend/regards/access/access.md",slug:"/development/backend/services/access/overview/",permalink:"/fr/docs/development/backend/services/access/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/access/access.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"REGARDS admin API",permalink:"/fr/docs/development/backend/services/admin/api/"},next:{title:"REGARDS Access API",permalink:"/fr/docs/development/backend/services/access/api/"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]}],l={toc:s};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"access-project")," reponsabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Backend for frontend"),Object(c.b)("li",{parentName:"ul"},"UI configuration"),Object(c.b)("li",{parentName:"ul"},"Proxy for catalog search to add UI plugin applicable on each result")),Object(c.b)("h2",{id:"available-apis"},"Available APIs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../api/"},"access api"))))}p.isMDXComponent=!0},2704:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,v=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return t?a.a.createElement(v,i(i({ref:r},l),{},{components:t})):a.a.createElement(v,i({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);