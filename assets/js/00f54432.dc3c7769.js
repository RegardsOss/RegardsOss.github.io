"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19580],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=s(t),p=r,f=m["".concat(l,".").concat(p)]||m[p]||c[p]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35099:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],d={id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},l=void 0,s={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-embedded-html",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-embedded-html",isDocsHomePage:!1,title:"Frontend - Dynamic module Embedded HTML",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/embedded-html.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/embedded-html/",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/embedded-html/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/embedded-html.md",version:"1.4.0",frontMatter:{id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},sidebar:"version-1.4.0/dev",previous:{title:"Authentication",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/authentication/"},next:{title:"Licences",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/licenses/"}},u=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It acts as an IFrame container to embed HTML content by its URL. It may be used to create banner, footer, page content and so on..."),(0,i.kt)("h2",{id:"module-structure"},"Module structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,i.kt)("h2",{id:"route"},"Route"),(0,i.kt)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,i.kt)("h2",{id:"exposed-functions"},"Exposed functions"),(0,i.kt)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,i.kt)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,i.kt)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,i.kt)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,i.kt)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,i.kt)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,i.kt)("h2",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"  All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}m.isMDXComponent=!0}}]);