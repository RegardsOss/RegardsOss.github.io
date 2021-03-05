(window.webpackJsonp=window.webpackJsonp||[]).push([[1308],{1377:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(7),i=(t(0),t(2699)),a={id:"frontend-packages-lazy-modules-licenses",title:"Frontend - Dynamic module Licenses",sidebar_label:"Licences",slug:"/development/frontend/packages/lazy-modules/licenses"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-licenses",id:"development/frontend/modules/frontend-packages-lazy-modules-licenses",isDocsHomePage:!1,title:"Frontend - Dynamic module Licenses",description:"Description",source:"@site/docs/development/frontend/modules/licenses.md",slug:"/development/frontend/packages/lazy-modules/licenses",permalink:"/fr/docs/development/frontend/packages/lazy-modules/licenses",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/modules/licenses.md",version:"current",sidebar_label:"Licences",sidebar:"dev",previous:{title:"Frontend - Dynamic module Embedded HTML",permalink:"/fr/docs/development/frontend/packages/lazy-modules/embedded-html"},next:{title:"Frontend - Dynamic module Menu",permalink:"/fr/docs/development/frontend/packages/lazy-modules/menu"}},s=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],c={toc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces. It presents configured project license in an iframe and allows user accepting it. When installed, and if the project has some license, project user interface can no longer be accessed without accepting license."),Object(i.b)("h2",{id:"module-structure"},"Module structure"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization    \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file  \n \u2514\u2500\u2500 README.md  \n")),Object(i.b)("h2",{id:"route"},"Route"),Object(i.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(i.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(i.b)("p",null,"This module as a dynamic configurable module exposes its own:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),Object(i.b)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),Object(i.b)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),Object(i.b)("li",{parentName:"ul"},"styles           : Styles of the module"),Object(i.b)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(i.b)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),Object(i.b)("h2",{id:"internationalization"},"Internationalization"),Object(i.b)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}d.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return t?r.a.createElement(f,l(l({ref:n},c),{},{components:t})):r.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);