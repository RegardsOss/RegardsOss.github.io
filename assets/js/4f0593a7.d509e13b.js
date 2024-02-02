"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[27740],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>y});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),p=r,y=c["".concat(l,".").concat(p)]||c[p]||m[p]||a;return t?o.createElement(y,d(d({ref:n},u),{},{components:t})):o.createElement(y,d({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,d[1]=i;for(var s=2;s<a;s++)d[s]=t[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(45072),r=(t(11504),t(95788));const a={id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},d=void 0,i={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-embedded-html",id:"version-1.11.0/development/frontend/modules/frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",description:"Description",source:"@site/versioned_docs/version-1.11.0/development/frontend/modules/embedded-html.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/embedded-html/",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/embedded-html/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/frontend/modules/embedded-html.md",tags:[],version:"1.11.0",frontMatter:{id:"frontend-packages-lazy-modules-embedded-html",title:"Frontend - Dynamic module Embedded HTML",sidebar_label:"Embedded HTML",slug:"/development/frontend/packages/lazy-modules/embedded-html/"},sidebar:"dev",previous:{title:"Authentication",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/authentication/"},next:{title:"Licences",permalink:"/docs/1.11.0/development/frontend/packages/lazy-modules/licenses/"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"Route",id:"route",level:2},{value:"Exposed functions",id:"exposed-functions",level:2},{value:"Internationalization",id:"internationalization",level:2}],u={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,o.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It acts as an IFrame container to embed HTML content by its URL. It may be used to create banner, footer, page content and so on..."),(0,r.yg)("h2",{id:"module-structure"},"Module structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),(0,r.yg)("h2",{id:"route"},"Route"),(0,r.yg)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),(0,r.yg)("h2",{id:"exposed-functions"},"Exposed functions"),(0,r.yg)("p",null,"This module as a dynamic configurable module exposes its own:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),(0,r.yg)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),(0,r.yg)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),(0,r.yg)("li",{parentName:"ul"},"styles           : Styles of the module"),(0,r.yg)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),(0,r.yg)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),(0,r.yg)("h2",{id:"internationalization"},"Internationalization"),(0,r.yg)("p",null,"  All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}m.isMDXComponent=!0}}]);