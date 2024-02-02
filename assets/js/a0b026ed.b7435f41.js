"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99396],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(45072),o=(t(11504),t(95788));const a={id:"frontend-packages-lazy-modules-order-cart",title:"Frontend - Dynamic module Order Cart",sidebar_label:"Order cart",slug:"/development/frontend/packages/lazy-modules/order-cart/"},i=void 0,l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-order-cart",id:"version-1.13.0/development/frontend/modules/frontend-packages-lazy-modules-order-cart",title:"Frontend - Dynamic module Order Cart",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/modules/order-cart.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/order-cart/",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/order-cart/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/modules/order-cart.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-lazy-modules-order-cart",title:"Frontend - Dynamic module Order Cart",sidebar_label:"Order cart",slug:"/development/frontend/packages/lazy-modules/order-cart/"},sidebar:"dev",previous:{title:"Menu",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/menu/"},next:{title:"Order history",permalink:"/docs/1.13.0/development/frontend/packages/lazy-modules/order-history/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays, for logged user, the current order cart content. Please note that his module must be instanciated once, in a dynamic container, to enable the order cart functionnality in interface menus and search results. However, instantiating it more than once instance is useless - only the first instance found will be used - and may be risky, depending on the global interface configuration."),(0,o.yg)("h2",{id:"module-structure"},"Module structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"}," .\n \u251c\u2500\u2500 src\n |   \u251c\u2500\u2500\n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information\n |   \u251c\u2500\u2500 components      : React component to display panels\n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions\n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization\n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)\n |   \u251c\u2500\u2500 main.js         : Module exported index\n |   \u251c\u2500\u2500 reducer.js      : Redux reducers\n |   \u2514\u2500\u2500 router.js       : React-router configuration\n \u251c\u2500\u2500 tests\n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file\n \u2514\u2500\u2500 README.md\n")),(0,o.yg)("h2",{id:"route"},"Route"),(0,o.yg)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,o.yg)("h2",{id:"exposed-functions"},"Exposed functions"),(0,o.yg)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"moduleContainer : Main module React component used to display this module,"),(0,o.yg)("li",{parentName:"ul"},"adminContainer : Main module React component used to display the administration panel of this module,"),(0,o.yg)("li",{parentName:"ul"},"reducer : To configure the general Redux Store."),(0,o.yg)("li",{parentName:"ul"},"styles : Styles of the module"),(0,o.yg)("li",{parentName:"ul"},"messages : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,o.yg)("li",{parentName:"ul"},"dependencies : The needed resources (backend enpoints) to display each part of the module")),(0,o.yg)("h2",{id:"internationalization"},"Internationalization"),(0,o.yg)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);