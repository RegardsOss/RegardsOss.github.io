(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,O=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(O,b(b({ref:t},i),{},{components:r})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<o;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},703:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2701)),l={},b={unversionedId:"notes/migrations/fem-migration-1.1.0-1.2.0",id:"notes/migrations/fem-migration-1.1.0-1.2.0",isDocsHomePage:!1,title:"fem-migration-1.1.0-1.2.0",description:"V1.1.0 to V1.2.0 migration",source:"@site/release_notes/notes/migrations/fem-migration-1.1.0-1.2.0.md",slug:"/notes/migrations/fem-migration-1.1.0-1.2.0",permalink:"/release-notes/notes/migrations/fem-migration-1.1.0-1.2.0",version:"current"},c=[],i={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"v110-to-v120-migration"},"V1.1.0 to V1.2.0 migration"),Object(o.b)("p",null,"Removed properties (replaced by headers):"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestId"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 36 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestOwner"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 128 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"requestDate"),Object(o.b)("td",{parentName:"tr",align:null},"ISO 8601 date")))),Object(o.b)("p",null,"Removed headers:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Header"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.converter"),Object(o.b)("td",{parentName:"tr",align:null},"GSON")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.type"),Object(o.b)("td",{parentName:"tr",align:null},"fr.cnes.regards.modules.feature.dto.event.in.*")))),Object(o.b)("p",null,"New headers:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Header"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.id"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 36 characters long")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.date"),Object(o.b)("td",{parentName:"tr",align:null},"ISO 8601 date")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"regards.request.owner"),Object(o.b)("td",{parentName:"tr",align:null},"String of max 128 characters long")))))}p.isMDXComponent=!0}}]);