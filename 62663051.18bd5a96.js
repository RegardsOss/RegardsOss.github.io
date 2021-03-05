(window.webpackJsonp=window.webpackJsonp||[]).push([[995],{1065:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(7),c=(n(0),n(2699)),o={id:"backend-access-overview",title:"REGARDS access project microservice (Backend for Frontend)",sidebar_label:"Overview",slug:"/development/backend/access/overview"},i={unversionedId:"development/backend/regards/access/backend-access-overview",id:"version-1.4.0/development/backend/regards/access/backend-access-overview",isDocsHomePage:!1,title:"REGARDS access project microservice (Backend for Frontend)",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/access/access.md",slug:"/development/backend/access/overview",permalink:"/docs/1.4.0/development/backend/access/overview",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/access/access.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS admin API",permalink:"/docs/1.4.0/development/backend/admin/api"},next:{title:"REGARDS Access API",permalink:"/docs/1.4.0/development/backend/access/api"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]}],l={toc:s};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"access-project")," reponsabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Backend for frontend"),Object(c.b)("li",{parentName:"ul"},"UI configuration"),Object(c.b)("li",{parentName:"ul"},"Proxy for catalog search to add UI plugin applicable on each result")),Object(c.b)("h2",{id:"available-apis"},"Available APIs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"api"},"access api"))))}p.isMDXComponent=!0},2699:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return v}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=t,v=d["".concat(o,".").concat(b)]||d[b]||u[b]||c;return n?a.a.createElement(v,i(i({ref:r},l),{},{components:n})):a.a.createElement(v,i({ref:r},l))}));function v(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);