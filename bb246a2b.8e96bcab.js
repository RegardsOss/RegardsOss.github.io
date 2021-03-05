(window.webpackJsonp=window.webpackJsonp||[]).push([[1906],{1976:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(2699)),i={id:"backend-catalog-search-engine-plugins",title:"Search engine plugins",sidebar_label:"Search engine",slug:"/development/backend/catalog/search-engine-plugins"},o={unversionedId:"development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",id:"development/backend/regards/catalog/plugins/backend-catalog-search-engine-plugins",isDocsHomePage:!1,title:"Search engine plugins",description:"Overview",source:"@site/docs/development/backend/regards/catalog/plugins/search-engine-plugins.md",slug:"/development/backend/catalog/search-engine-plugins",permalink:"/docs/development/backend/catalog/search-engine-plugins",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/catalog/plugins/search-engine-plugins.md",version:"current",sidebar_label:"Search engine",sidebar:"dev",previous:{title:"Catalog service plugins",permalink:"/docs/development/backend/catalog/service-plugins"},next:{title:"Bus message events",permalink:"/docs/development/backend/catalog/events"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"This extension point allows to define a new search protocol to request REGARDS catalog."))),Object(c.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/search/search-rest/src/main/java/fr/cnes/regards/modules/search/rest/engine/plugin/legacy/LegacySearchEngine.java"},"LegacySearchEngine")," : First search engine defined for REGARDS frontend."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-catalog/blob/master/search/search-rest/src/main/java/fr/cnes/regards/modules/search/rest/engine/plugin/opensearch/OpenSearchEngine.java"},"OpenSearchEngine")," : Standard opensearch protocol.")),Object(c.b)("h2",{id:"interface"},"Interface"),Object(c.b)("p",null,"   ",Object(c.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-catalog/blob/master/search/search-domain/src/main/java/fr/cnes/regards/modules/search/domain/plugin/ISearchEngine.java"},"ISearchEngine")),Object(c.b)("h2",{id:"implementation"},"Implementation"),Object(c.b)("p",null,"To learn more about how to create your own plugin see ",Object(c.b)("a",{parentName:"p",href:"../framework/modules/plugins"},"Plugins")),Object(c.b)("p",null,"To lean more about the implemented search engines see ",Object(c.b)("a",{parentName:"p",href:"search-api"},"Search API")))}p.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,b=d["".concat(i,".").concat(g)]||d[g]||u[g]||c;return t?r.a.createElement(b,o(o({ref:n},l),{},{components:t})):r.a.createElement(b,o({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);