"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27375],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49715:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},l=void 0,d={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-order-history",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/order-history.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/order-history/",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-history/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/order-history.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-packages-lazy-modules-order-history",title:"Frontend - Dynamic module Order History",sidebar_label:"Order history",slug:"/development/frontend/packages/lazy-modules/order-history/"},sidebar:"version-1.4.0/dev",previous:{title:"Order cart",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-cart/"},next:{title:"Project about page",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/project-about-page/"}},u=[{value:"Description",id:"description",children:[],level:2},{value:"Module structure",id:"module-structure",children:[],level:2},{value:"Route",id:"route",children:[],level:2},{value:"Exposed functions",id:"exposed-functions",children:[],level:2},{value:"Internationalization",id:"internationalization",children:[],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays the history of a logged user orders. It is also used to show all users orders history in project administration interface."),(0,i.kt)("h2",{id:"module-structure"},"Module structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,i.kt)("h2",{id:"route"},"Route"),(0,i.kt)("p",null,"This module is routed as a dynamic module to show user order history.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,i.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,i.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,i.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,i.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,i.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,i.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization objcet (default : imported index.js from messages/)"),(0,i.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,i.kt)("h2",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);