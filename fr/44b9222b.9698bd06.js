(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{2701:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2723:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dam-bc8dd392997af372adf7893df56df01f.svg"},790:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(2701)),c={id:"backend-dam-overview",title:"REGARDS data management microservice",sidebar_label:"Overview",slug:"/development/backend/dam/overview"},l={unversionedId:"development/backend/regards/dam/backend-dam-overview",id:"version-1.4.0/development/backend/regards/dam/backend-dam-overview",isDocsHomePage:!1,title:"REGARDS data management microservice",description:"Overview",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/dam.md",slug:"/development/backend/dam/overview",permalink:"/fr/docs/1.4.0/development/backend/dam/overview",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/dam/dam.md",version:"1.4.0",sidebar_label:"Overview",sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/catalog/events"},next:{title:"REGARDS Access rights API",permalink:"/fr/docs/1.4.0/development/backend/dam/api/access-rights"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]},{value:"Appendices",id:"appendices",children:[]}],s={toc:o};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Dam")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage data models,"),Object(i.b)("li",{parentName:"ul"},"Harvest and index data sources,"),Object(i.b)("li",{parentName:"ul"},"Apply access rights.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Ingest plugins",src:a(2723).default})),Object(i.b)("h2",{id:"available-apis"},"Available APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/access-rights"},"Access rights api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/model"},"Models api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/collection"},"Collection api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/dataset"},"Dataset api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/datasource"},"Datasource api")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"api/document"},"Document api"))),Object(i.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/data-access-rights"},"Access rights")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/computed-attribute"},"Computed attributes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"plugins/datasource"},"Data sources"))),Object(i.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"events"},"Events"))),Object(i.b)("h2",{id:"appendices"},"Appendices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"geo"},"Geospatial behavior"))))}b.isMDXComponent=!0}}]);