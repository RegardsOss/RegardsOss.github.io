"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28385],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"frontend-packages-lazy-modules-project-about-page",title:"Frontend - Dynamic module Project About Page",sidebar_label:"Project about page",slug:"/development/frontend/packages/lazy-modules/project-about-page/"},s=void 0,u={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-project-about-page",id:"development/frontend/modules/frontend-packages-lazy-modules-project-about-page",title:"Frontend - Dynamic module Project About Page",description:"Description",source:"@site/docs/development/frontend/modules/project-about-page.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/project-about-page/",permalink:"/fr/docs/development/frontend/packages/lazy-modules/project-about-page/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/project-about-page.md",tags:[],version:"current",frontMatter:{id:"frontend-packages-lazy-modules-project-about-page",title:"Frontend - Dynamic module Project About Page",sidebar_label:"Project about page",slug:"/development/frontend/packages/lazy-modules/project-about-page/"},sidebar:"dev",previous:{title:"Order history",permalink:"/fr/docs/development/frontend/packages/lazy-modules/order-history/"},next:{title:"Project list",permalink:"/fr/docs/development/frontend/packages/lazy-modules/project-list/"}},d=[{value:"Description",id:"description",children:[],level:2},{value:"Module structure",id:"module-structure",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Exposed functions",id:"exposed-functions",children:[],level:2},{value:"Internationalization",id:"internationalization",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the project about page in an iframe. It stores the 'do not show again' state option in local web browser storage.\nNote: This module is automatically instantiated by the menu module when setting up the corresponding option."),(0,a.kt)("h2",{id:"module-structure"},"Module structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," .\n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file    \n \u2514\u2500\u2500 README.md  \n")),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,a.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,a.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,a.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,a.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,a.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,a.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,a.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,a.kt)("h2",{id:"internationalization"},"Internationalization"),(0,a.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);