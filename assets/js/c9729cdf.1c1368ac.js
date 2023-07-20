"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[47169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},l=void 0,s={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-search-results",id:"version-1.11.0/development/frontend/modules/frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",description:"Description",source:"@site/versioned_docs/version-1.11.0/development/frontend/modules/search-results.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/search-results/",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/search-results/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/frontend/modules/search-results.md",tags:[],version:"1.11.0",frontMatter:{id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},sidebar:"dev",previous:{title:"Search graph",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/search-graph/"},next:{title:"Storage monitoring",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/storage-monitoring/"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays search results from REGARDS catalog. It is used by modules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@regardsoss/search-form"),(0,a.kt)("li",{parentName:"ul"},"@regardsoss/search-graph")),(0,a.kt)("p",null,"It can be used as a stand-alone module to display the results of a research on a the whole project data catalog."),(0,a.kt)("p",null,"This module allows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Displaying results data"),(0,a.kt)("li",{parentName:"ul"},"Displaying results datasets"),(0,a.kt)("li",{parentName:"ul"},"Switching display mode between list, table, quicklook and map views"),(0,a.kt)("li",{parentName:"ul"},"Sorting results"),(0,a.kt)("li",{parentName:"ul"},"Filtering results on facets"),(0,a.kt)("li",{parentName:"ul"},"Configuring displayed columns (table mode)"),(0,a.kt)("li",{parentName:"ul"},"Applying Services (UI and Business) on data and dataset data"),(0,a.kt)("li",{parentName:"ul"},"Display a search form and filter results using it")),(0,a.kt)("h2",{id:"module-structure"},"Module structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,a.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,a.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,a.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,a.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,a.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,a.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,a.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,a.kt)("h2",{id:"internationalization"},"Internationalization"),(0,a.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);