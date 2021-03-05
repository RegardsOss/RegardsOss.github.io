(window.webpackJsonp=window.webpackJsonp||[]).push([[1684],{1754:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(2699)),c={id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/catalog/overview"},o={unversionedId:"development/backend/regards/catalog/backend-catalog-overview",id:"version-1.4.0/development/backend/regards/catalog/backend-catalog-overview",isDocsHomePage:!1,title:"REGARDS catalog microservice",description:"Overview",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/catalog/catalog.md",slug:"/development/backend/catalog/overview",permalink:"/docs/1.4.0/development/backend/catalog/overview",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/catalog/catalog.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"REGARDS Access API",permalink:"/docs/1.4.0/development/backend/access/api"},next:{title:"REGARDS search API",permalink:"/docs/1.4.0/development/backend/catalog/search-api"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[{value:"Search API",id:"search-api",children:[]}]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],s={toc:l};function b(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Catalog")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fast metadata discovery through plugable search protocol,"),Object(i.b)("li",{parentName:"ul"},"On the fly metadata transformation.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Store plugins",src:a(2723).default})),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("h3",{id:"search-api"},"Search API"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"search-api"},"Catalog"))),Object(i.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"service-plugins"},"Catalog service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"search-engine-plugins"},"Search engine"))),Object(i.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"events"},"Events"))))}b.isMDXComponent=!0},2699:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,v=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?n.a.createElement(v,o(o({ref:t},s),{},{components:a})):n.a.createElement(v,o({ref:t},s))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2723:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/catalog-f3dc9417931664dde25f2707f3d9009d.svg"}}]);