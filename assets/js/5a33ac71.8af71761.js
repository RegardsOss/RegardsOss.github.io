"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const i={id:"frontend-packages-lazy-modules-storage-monitoring",title:"Frontend - Dynamic module Storage monitoring",sidebar_label:"Storage monitoring",slug:"/development/frontend/packages/lazy-modules/storage-monitoring/"},a=void 0,l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-storage-monitoring",id:"development/frontend/modules/frontend-packages-lazy-modules-storage-monitoring",title:"Frontend - Dynamic module Storage monitoring",description:"Description",source:"@site/docs/development/frontend/modules/storage-monitoring.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/storage-monitoring/",permalink:"/docs/development/frontend/packages/lazy-modules/storage-monitoring/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/storage-monitoring.md",tags:[],version:"current",frontMatter:{id:"frontend-packages-lazy-modules-storage-monitoring",title:"Frontend - Dynamic module Storage monitoring",sidebar_label:"Storage monitoring",slug:"/development/frontend/packages/lazy-modules/storage-monitoring/"},sidebar:"dev",previous:{title:"Search results",permalink:"/docs/development/frontend/packages/lazy-modules/search-results/"},next:{title:"Plugins introduction",permalink:"/docs/development/frontend/plugins/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This module is a dynamic configurable module for the configurable REGARDS user interfaces. It displays AIP storage devices capacity and remaining space. It is also used internally to show AIP storage devices capacity in project administration interface."),(0,r.kt)("h2",{id:"module-structure"},"Module structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,r.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,r.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,r.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,r.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,r.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,r.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,r.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,r.kt)("h2",{id:"internationalization"},"Internationalization"),(0,r.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}c.isMDXComponent=!0}}]);