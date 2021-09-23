"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[79395],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99084:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"frontend-packages-lazy-modules-menu",title:"Frontend - Dynamic module Menu",sidebar_label:"Menu",slug:"/development/frontend/packages/lazy-modules/menu/"},s=void 0,u={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-menu",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-menu",isDocsHomePage:!1,title:"Frontend - Dynamic module Menu",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/menu.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/menu/",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/menu/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/menu.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-packages-lazy-modules-menu",title:"Frontend - Dynamic module Menu",sidebar_label:"Menu",slug:"/development/frontend/packages/lazy-modules/menu/"},sidebar:"version-1.4.0/dev",previous:{title:"Licences",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/licenses/"},next:{title:"Order cart",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/order-cart/"}},d=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It displays display as an horizontal bar containing the following elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Title (when displayMode is ADMIN_* mode)"),(0,a.kt)("li",{parentName:"ul"},"Navigation links and sections (when displayMode is USER or PREVIEW), enabled by configuration"),(0,a.kt)("li",{parentName:"ul"},"Authentication (enabled by configuration)"),(0,a.kt)("li",{parentName:"ul"},"Theme selector (enabled by configuration)"),(0,a.kt)("li",{parentName:"ul"},"Language selector (enabled by configuration)"),(0,a.kt)("li",{parentName:"ul"},"Project about page (enabled by configuration)"),(0,a.kt)("li",{parentName:"ul"},"Contacts (enabled by configuration)")),(0,a.kt)("h2",{id:"module-structure"},"Module structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,a.kt)("h2",{id:"route"},"Route"),(0,a.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,a.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,a.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,a.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,a.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,a.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,a.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,a.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,a.kt)("h2",{id:"internationalization"},"Internationalization"),(0,a.kt)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}m.isMDXComponent=!0}}]);