"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={id:"frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",sidebar_label:"Authentication",slug:"/development/frontend/packages/lazy-modules/authentication/"},r=void 0,l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-authentication",id:"version-1.13.0/development/frontend/modules/frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/modules/authentication.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/authentication/",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/authentication/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/modules/authentication.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",sidebar_label:"Authentication",slug:"/development/frontend/packages/lazy-modules/authentication/"},sidebar:"dev",previous:{title:"Overview - Lazy modules",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/"},next:{title:"Embedded HTML",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/embedded-html/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces.\nIt manages :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Authentication to the REGARDS services"),(0,a.kt)("li",{parentName:"ul"},"Unlock accounts"),(0,a.kt)("li",{parentName:"ul"},"Token expiration and session locking"),(0,a.kt)("li",{parentName:"ul"},"User instance account and / or project account creation"),(0,a.kt)("li",{parentName:"ul"},"Users password change")),(0,a.kt)("h2",{id:"module-structure"},"Module structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file\n \u2514\u2500\u2500 README.md  \n")),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,a.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,a.kt)("p",null,"This module as a dynamic configurable module exposes is own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,a.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,a.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,a.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,a.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,a.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,a.kt)("h2",{id:"internationalization"},"Internationalization"),(0,a.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);