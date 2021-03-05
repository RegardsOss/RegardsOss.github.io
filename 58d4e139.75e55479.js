(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{2699:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return v}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},b=function(e){var r=d(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},u=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(t),u=n,v=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return t?a.a.createElement(v,s(s({ref:r},l),{},{components:t})):a.a.createElement(v,s({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2726:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/ord_state_diagram-753c50ae0d1f3441bf8096f7a33c0f83.png"},974:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return d}));var n=t(3),a=t(7),o=(t(0),t(2699)),i={id:"backend-order-overview",title:"REGARDS order microservice",sidebar_label:"Overview",slug:"/development/backend/order/overview"},s={unversionedId:"development/backend/regards/order/backend-order-overview",id:"version-1.4.0/development/backend/regards/order/backend-order-overview",isDocsHomePage:!1,title:"REGARDS order microservice",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/order/order.md",slug:"/development/backend/order/overview",permalink:"/docs/1.4.0/development/backend/order/overview",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/order/order.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/docs/1.4.0/development/backend/ingest/events"},next:{title:"REGARDS Basket API",permalink:"/docs/1.4.0/development/backend/order/api/basket"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]}],l={toc:c};function d(e){var r=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Order")," reponsabilities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Manage user basket,")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Order files,")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download ordered files,"),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"Order")," microservice is designed to allow authenticated users to order files of the REGARDS catalog. To do so, users have to build a basket by adding entities in it thanks to ",Object(o.b)("inlineCode",{parentName:"p"},"opensearch")," requests."),Object(o.b)("p",{parentName:"li"},"There is no limit on the number of files or even on the size of the files users can order. Nevertheless, if the order is too big, it will be devided in many groups of files (suborders). In this case, the user have to retrieve the available group files (suborder) before the next one is made available by the system."),Object(o.b)("p",{parentName:"li"},"Here under is the state diagram of the order process :"),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{src:t(2726).default})))),Object(o.b)("h2",{id:"available-apis"},"Available APIs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"api/basket"},"Basket")," : API to manage user basket (add and remove entities)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"api"},"Order")," : API to submit, cancel and monitoring user orders.")))}d.isMDXComponent=!0}}]);