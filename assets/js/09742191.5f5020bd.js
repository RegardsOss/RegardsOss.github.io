"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58674],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},l=void 0,s={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-search-results",id:"version-1.13.0/development/frontend/modules/frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/modules/search-results.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/search-results/",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/search-results/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/modules/search-results.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},sidebar:"dev",previous:{title:"Search graph",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/search-graph/"},next:{title:"Storage monitoring",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/storage-monitoring/"}},i={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays search results from REGARDS catalog. It is used by modules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"@regardsoss/search-form"),(0,a.yg)("li",{parentName:"ul"},"@regardsoss/search-graph")),(0,a.yg)("p",null,"It can be used as a stand-alone module to display the results of a research on a the whole project data catalog."),(0,a.yg)("p",null,"This module allows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Displaying results data"),(0,a.yg)("li",{parentName:"ul"},"Displaying results datasets"),(0,a.yg)("li",{parentName:"ul"},"Switching display mode between list, table, quicklook and map views"),(0,a.yg)("li",{parentName:"ul"},"Sorting results"),(0,a.yg)("li",{parentName:"ul"},"Filtering results on facets"),(0,a.yg)("li",{parentName:"ul"},"Configuring displayed columns (table mode)"),(0,a.yg)("li",{parentName:"ul"},"Applying Services (UI and Business) on data and dataset data"),(0,a.yg)("li",{parentName:"ul"},"Display a search form and filter results using it")),(0,a.yg)("h2",{id:"module-structure"},"Module structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,a.yg)("h2",{id:"route"},"Route"),(0,a.yg)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,a.yg)("h2",{id:"exposed-functions"},"Exposed functions"),(0,a.yg)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,a.yg)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,a.yg)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,a.yg)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,a.yg)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,a.yg)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,a.yg)("h2",{id:"internationalization"},"Internationalization"),(0,a.yg)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);