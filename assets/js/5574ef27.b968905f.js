(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},929:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(2708)),i={id:"release-notes-v0.4.0",title:"Version 0.4.0",slug:"/v0.4.0/"},c={unversionedId:"notes/release-notes-v0.4.0",id:"notes/release-notes-v0.4.0",isDocsHomePage:!1,title:"Version 0.4.0",description:"Released on  : June, 2019",source:"@site/release_notes/notes/V0.4.0.md",slug:"/v0.4.0/",permalink:"/release-notes/v0.4.0/",version:"current",sidebar:"release_notes",previous:{title:"Version 0.4.1",permalink:"/release-notes/v0.4.1/"},next:{title:"Version 0.3.0",permalink:"/release-notes/v0.3.0/"}},l=[],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Released on  : ",Object(o.b)("strong",{parentName:"p"},"June, 2019"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0"},Object(o.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"}))),Object(o.b)("p",null,"Features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"COTS upgrade : OpenJDK 8, Spring Boot 2.1, ElasticSearch 6+, etc."),Object(o.b)("li",{parentName:"ul"},"Full text search,"),Object(o.b)("li",{parentName:"ul"},"Access right definition at the group level with gliding criterion"),Object(o.b)("li",{parentName:"ul"},"Data flow"),Object(o.b)("li",{parentName:"ul"},"Scalability improvements"),Object(o.b)("li",{parentName:"ul"},"Geospatial search & vizualisation with ",Object(o.b)("a",{parentName:"li",href:"https://github.com/MizarWeb"},"Mizar")),Object(o.b)("li",{parentName:"ul"},"New datasource plugin to crawl datas from external web services (opensearch / geojson features)")))}p.isMDXComponent=!0}}]);