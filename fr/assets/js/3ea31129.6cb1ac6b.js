(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{2704:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(r),d=a,v=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return r?n.a.createElement(v,o(o({ref:t},s),{},{components:r})):n.a.createElement(v,o({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2725:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/catalog-f3dc9417931664dde25f2707f3d9009d.svg"},735:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),c=(r(0),r(2704)),i={id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/"},o={unversionedId:"development/backend/regards/catalog/backend-catalog-overview",id:"development/backend/regards/catalog/backend-catalog-overview",isDocsHomePage:!1,title:"REGARDS catalog microservice",description:"Overview",source:"@site/docs/development/backend/regards/catalog/catalog.md",slug:"/development/backend/services/catalog/overview/",permalink:"/fr/docs/development/backend/services/catalog/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/catalog/catalog.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"REGARDS Access API",permalink:"/fr/docs/development/backend/services/access/api/"},next:{title:"REGARDS search API",permalink:"/fr/docs/development/backend/services/catalog/search-api/"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[{value:"Search API",id:"search-api",children:[]}]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],s={toc:l};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Catalog")," reponsabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fast metadata discovery through plugable search protocol,"),Object(c.b)("li",{parentName:"ul"},"On the fly metadata transformation.")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Store plugins",src:r(2725).default})),Object(c.b)("h2",{id:"available-apis"},"Available APIs"),Object(c.b)("h3",{id:"search-api"},"Search API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../search-api/"},"Catalog"))),Object(c.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../service-plugins/"},"Catalog service")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../search-engine-plugins/"},"Search engine"))),Object(c.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"../events/"},"Events"))))}b.isMDXComponent=!0}}]);