(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{2701:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},g=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return t?a.a.createElement(m,c(c({ref:r},p),{},{components:t})):a.a.createElement(m,c({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},339:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(2701)),s={id:"backend-framework-starters-swagger",title:"Swagger starter",slug:"/development/backend/framework/starters/swagger"},c={unversionedId:"development/backend/framework/starters/backend-framework-starters-swagger",id:"development/backend/framework/starters/backend-framework-starters-swagger",isDocsHomePage:!1,title:"Swagger starter",description:"Pre-requisite:",source:"@site/docs/development/backend/framework/starters/swagger-starter.md",slug:"/development/backend/framework/starters/swagger",permalink:"/docs/next/development/backend/framework/starters/swagger",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/swagger-starter.md",version:"current",sidebar:"dev",previous:{title:"STAF starter",permalink:"/docs/next/development/backend/framework/starters/staf"},next:{title:"Web socket starter",permalink:"/docs/next/development/backend/framework/starters/web-socket"}},i=[],p={toc:i};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Pre-requisite:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"server.address=localhost # Spring boot server address\nserver.port=8080 # Spring boot server port\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"regards.swagger.enabled=false # Disable swagger support\nregards.swagger.api-name=API name # API name\nregards.swagger.api-title=API title # API title\nregards.swagger.api-description=API description # API description\nregards.swagger.api-license=API license # API license\nregards.swagger.api-version=API version # API version\n")))}l.isMDXComponent=!0}}]);