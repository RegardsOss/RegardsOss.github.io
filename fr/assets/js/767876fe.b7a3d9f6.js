"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58920],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33939:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},i=void 0,u={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-search-results",id:"development/frontend/modules/frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",description:"Description",source:"@site/docs/development/frontend/modules/search-results.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/search-results/",permalink:"/fr/docs/development/frontend/packages/lazy-modules/search-results/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/search-results.md",tags:[],version:"current",frontMatter:{id:"frontend-packages-lazy-modules-search-results",title:"Frontend - Dynamic module Search Results",sidebar_label:"Search results",slug:"/development/frontend/packages/lazy-modules/search-results/"},sidebar:"dev",previous:{title:"Search graph",permalink:"/fr/docs/development/frontend/packages/lazy-modules/search-graph/"},next:{title:"Storage monitoring",permalink:"/fr/docs/development/frontend/packages/lazy-modules/storage-monitoring/"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Module structure",id:"module-structure",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Exposed functions",id:"exposed-functions",children:[],level:2},{value:"Internationalization",id:"internationalization",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays search results from REGARDS catalog. It is used by modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"@regardsoss/search-form"),(0,o.kt)("li",{parentName:"ul"},"@regardsoss/search-graph")),(0,o.kt)("p",null,"It can be used as a stand-alone module to display the results of a research on a the whole project data catalog."),(0,o.kt)("p",null,"This module allows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Displaying results data"),(0,o.kt)("li",{parentName:"ul"},"Displaying results datasets"),(0,o.kt)("li",{parentName:"ul"},"Switching display mode between list, table, quicklook and map views"),(0,o.kt)("li",{parentName:"ul"},"Sorting results"),(0,o.kt)("li",{parentName:"ul"},"Filtering results on facets"),(0,o.kt)("li",{parentName:"ul"},"Configuring displayed columns (table mode)"),(0,o.kt)("li",{parentName:"ul"},"Applying Services (UI and Business) on data and dataset data"),(0,o.kt)("li",{parentName:"ul"},"Display a search form and filter results using it")),(0,o.kt)("h2",{id:"module-structure"},"Module structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,o.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,o.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,o.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,o.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,o.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,o.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,o.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,o.kt)("h2",{id:"internationalization"},"Internationalization"),(0,o.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);