"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2481],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86625:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"frontend-packages-lazy-modules-search-graph",title:"Frontend - Dynamic module Search Graph",sidebar_label:"Search graph",slug:"/development/frontend/packages/lazy-modules/search-graph/"},s=void 0,d={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-search-graph",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-search-graph",title:"Frontend - Dynamic module Search Graph",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/modules/search-graph.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/search-graph/",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules/search-graph/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/search-graph.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-packages-lazy-modules-search-graph",title:"Frontend - Dynamic module Search Graph",sidebar_label:"Search graph",slug:"/development/frontend/packages/lazy-modules/search-graph/"},sidebar:"version-1.4.0/dev",previous:{title:"Project list",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules/project-list/"},next:{title:"Search results",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules/search-results/"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Module structure",id:"module-structure",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Exposed functions",id:"exposed-functions",children:[],level:2},{value:"Internationalization",id:"internationalization",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays a navigation tree into the REGARDS collections and datasets where each level corresponds to a given collection model - except the last one that shows only datasets.\nIt offers description functionnality for each entity and shows, using detail toggle, the specified datasets attributes. The module also shows and drives a search-results table:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When user clicks a dataset, the search-results table displays all dataobjects related to that dataset"),(0,o.kt)("li",{parentName:"ul"},"When user clicks a tag (in description dialog), the search-results table displays all dataobjects related to that tag")),(0,o.kt)("h2",{id:"module-structure"},"Module structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," . \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,o.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,o.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,o.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,o.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,o.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,o.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,o.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,o.kt)("h2",{id:"internationalization"},"Internationalization"),(0,o.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);