"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[37380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},i=void 0,s={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-order-history",id:"version-1.8.1/development/frontend/modules/frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",description:"Description",source:"@site/versioned_docs/version-1.8.1/development/frontend/modules/order-history.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/order-history/",permalink:"/docs/1.8.1/development/frontend/packages/lazy-modules/order-history/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/development/frontend/modules/order-history.md",tags:[],version:"1.8.1",frontMatter:{id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},sidebar:"dev",previous:{title:"Order cart",permalink:"/docs/1.8.1/development/frontend/packages/lazy-modules/order-cart/"},next:{title:"Project about page",permalink:"/docs/1.8.1/development/frontend/packages/lazy-modules/project-about-page/"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the history of a logged user orders. It is also used to show all users orders history in project administration interface."),(0,o.kt)("h2",{id:"module-structure"},"Module structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("p",null,"This module is routed as a dynamic module to show user order history.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,o.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,o.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,o.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,o.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,o.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,o.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization objcet (default : imported index.js from messages/)"),(0,o.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,o.kt)("h2",{id:"internationalization"},"Internationalization"),(0,o.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);