"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[62053],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40144:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],l={id:"frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",sidebar_label:"Authentication",slug:"/development/frontend/packages/lazy-modules/authentication/"},s=void 0,u={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-authentication",id:"development/frontend/modules/frontend-packages-lazy-modules-authentication",isDocsHomePage:!1,title:"Frontend - Dynamic module Authentication",description:"Description",source:"@site/docs/development/frontend/modules/authentication.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/authentication/",permalink:"/docs/development/frontend/packages/lazy-modules/authentication/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/authentication.md",tags:[],version:"current",frontMatter:{id:"frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",sidebar_label:"Authentication",slug:"/development/frontend/packages/lazy-modules/authentication/"},sidebar:"dev",previous:{title:"Overview - Lazy modules",permalink:"/docs/development/frontend/packages/lazy-modules/"},next:{title:"Embedded HTML",permalink:"/docs/development/frontend/packages/lazy-modules/embedded-html/"}},d=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces.\nIt manages :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authentication to the REGARDS services"),(0,r.kt)("li",{parentName:"ul"},"Unlock accounts"),(0,r.kt)("li",{parentName:"ul"},"Token expiration and session locking"),(0,r.kt)("li",{parentName:"ul"},"User instance account and / or project account creation"),(0,r.kt)("li",{parentName:"ul"},"Users password change")),(0,r.kt)("h2",{id:"module-structure"},"Module structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file\n \u2514\u2500\u2500 README.md  \n")),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,r.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,r.kt)("p",null,"This module as a dynamic configurable module exposes is own:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,r.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,r.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,r.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,r.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,r.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,r.kt)("h2",{id:"internationalization"},"Internationalization"),(0,r.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}p.isMDXComponent=!0}}]);