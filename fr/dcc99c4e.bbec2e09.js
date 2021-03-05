(window.webpackJsonp=window.webpackJsonp||[]).push([[2253],{2323:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(2699)),c={id:"backend-framework-starters-cloud",title:"Cloud starter",slug:"/development/backend/framework/starters/cloud"},s={unversionedId:"development/backend/framework/starters/backend-framework-starters-cloud",id:"version-1.4.0/development/backend/framework/starters/backend-framework-starters-cloud",isDocsHomePage:!1,title:"Cloud starter",description:"Purpose",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/cloud-starter.md",slug:"/development/backend/framework/starters/cloud",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/cloud",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/framework/starters/cloud-starter.md",version:"1.4.0",sidebar:"version-1.4.0/dev",previous:{title:"Authentication starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/authentication"},next:{title:"Encryption starter",permalink:"/fr/docs/1.4.0/development/backend/framework/starters/encryption"}},i=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:i};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"purpose"},"Purpose"),Object(a.b)("p",null,"This starter enables Eureka client discovery."),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Add starter dependency to your POM (version depends on the BOM)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>cloud-regards-starter</artifactId>\n</dependency>\n")),Object(a.b)("p",null,"No business dependency."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-properties"},"# Disable cloud support\nregards.cloud.enabled=false\n")))}d.isMDXComponent=!0},2699:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(t),f=n,b=l["".concat(c,".").concat(f)]||l[f]||p[f]||a;return t?o.a.createElement(b,s(s({ref:r},u),{},{components:t})):o.a.createElement(b,s({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);