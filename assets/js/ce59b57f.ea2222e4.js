"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66136],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71942:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",sidebar_label:"Project list",slug:"/development/frontend/packages/lazy-modules/project-list/"},s=void 0,d={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-project-list",id:"version-1.7.1/development/frontend/modules/frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",description:"Description",source:"@site/versioned_docs/version-1.7.1/development/frontend/modules/projects-list.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/project-list/",permalink:"/docs/1.7.1/development/frontend/packages/lazy-modules/project-list/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/frontend/modules/projects-list.md",tags:[],version:"1.7.1",frontMatter:{id:"frontend-packages-lazy-modules-project-list",title:"Frontend - Dynamic module Project List",sidebar_label:"Project list",slug:"/development/frontend/packages/lazy-modules/project-list/"},sidebar:"dev",previous:{title:"Project about page",permalink:"/docs/1.7.1/development/frontend/packages/lazy-modules/project-about-page/"},next:{title:"Search graph",permalink:"/docs/1.7.1/development/frontend/packages/lazy-modules/search-graph/"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Module structure",id:"module-structure",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Exposed functions",id:"exposed-functions",children:[],level:2},{value:"Internationalization",id:"internationalization",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays a REGARDS instance projects list and allows accessing their user interface."),(0,i.kt)("h2",{id:"module-structure"},"Module structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file   \n \u2514\u2500\u2500 README.md  \n")),(0,i.kt)("h2",{id:"route"},"Route"),(0,i.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,i.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,i.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,i.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,i.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,i.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,i.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,i.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,i.kt)("h2",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);