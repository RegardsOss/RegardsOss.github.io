(window.webpackJsonp=window.webpackJsonp||[]).push([[1986],{2056:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(2699)),i={id:"frontend-packages-lazy-modules-authentication",title:"Frontend - Dynamic module Authentication",sidebar_label:"Authentication",slug:"/development/frontend/packages/lazy-modules/authentication"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules-authentication",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules-authentication",isDocsHomePage:!1,title:"Frontend - Dynamic module Authentication",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/authentication.md",slug:"/development/frontend/packages/lazy-modules/authentication",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/authentication",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/authentication.md",version:"1.4.0",sidebar_label:"Authentication",sidebar:"version-1.4.0/dev",previous:{title:"Dynamic lazy loadable modules",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules"},next:{title:"Frontend - Dynamic module Embedded HTML",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/embedded-html"}},c=[{value:"Description",id:"description",children:[]},{value:"Module structure",id:"module-structure",children:[]},{value:"Route",id:"route",children:[]},{value:"Exposed functions",id:"exposed-functions",children:[]},{value:"Internationalization",id:"internationalization",children:[]}],s={toc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This module is a dynamic configurable module to be used in REGARDS user interfaces.\nIt manages :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Authentication to the REGARDS services"),Object(r.b)("li",{parentName:"ul"},"Unlock accounts"),Object(r.b)("li",{parentName:"ul"},"Token expiration and session locking"),Object(r.b)("li",{parentName:"ul"},"User instance account and / or project account creation"),Object(r.b)("li",{parentName:"ul"},"Users password change")),Object(r.b)("h2",{id:"module-structure"},"Module structure"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file\n \u2514\u2500\u2500 README.md  \n")),Object(r.b)("h2",{id:"route"},"Route"),Object(r.b)("p",null,"This module is routed by the main application in which it is configured as a static or dynamic module.\nStatic modules are always displayed in the interface layout.\nDynamic modules are only displayed when the interface route is /modules/:module_id where module_id is the configuration identifier of the module."),Object(r.b)("h2",{id:"exposed-functions"},"Exposed functions"),Object(r.b)("p",null,"This module as a dynamic configurable module exposes is own:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"moduleContainer  : Main module React component used to display this module,"),Object(r.b)("li",{parentName:"ul"},"adminContainer   : Main module React component used to display the administration panel of this module,"),Object(r.b)("li",{parentName:"ul"},"reducer          : To configure the general Redux Store."),Object(r.b)("li",{parentName:"ul"},"styles           : Styles of the module"),Object(r.b)("li",{parentName:"ul"},"messages         : Messages and labels internationalization object (default : imported index.js from messages/)"),Object(r.b)("li",{parentName:"ul"},"dependencies     : The needed resources (backend enpoints) to display each part of the module")),Object(r.b)("h2",{id:"internationalization"},"Internationalization"),Object(r.b)("p",null,"All displayed labels are defined in two languages (English and French) and are avaible from the i18n repository."))}d.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return t?a.a.createElement(b,l(l({ref:n},s),{},{components:t})):a.a.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);