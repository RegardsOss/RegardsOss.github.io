"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[29126],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91683:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"backend-framework-starters-encryption",title:"Encryption starter",slug:"/development/backend/framework/starters/encryption/"},s=void 0,p={unversionedId:"development/backend/framework/starters/backend-framework-starters-encryption",id:"development/backend/framework/starters/backend-framework-starters-encryption",isDocsHomePage:!1,title:"Encryption starter",description:"Purpose",source:"@site/docs/development/backend/framework/starters/encryption-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/encryption/",permalink:"/fr/docs/development/backend/framework/starters/encryption/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/encryption-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-encryption",title:"Encryption starter",slug:"/development/backend/framework/starters/encryption/"},sidebar:"dev",previous:{title:"Cloud starter",permalink:"/fr/docs/development/backend/framework/starters/cloud/"},next:{title:"Feign starter",permalink:"/fr/docs/development/backend/framework/starters/feign/"}},u=[{value:"Purpose",id:"purpose",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Autoconfiguration",id:"autoconfiguration",children:[]}],l={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This stater enables encryption, and decryption, for sensible plugin parameters and databases password."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add stater dependency to your POM (version depends on the REGARDS BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>encryption-starter</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"This stater defines its own properties. It can be found in CipherProperties class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"regards.cipher.key-location=<path to cipher key>\nregards.cipher.iv=<value of initialization vector>\n")),(0,a.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IEncryptionService to manage encryption and decryption. By default we use AESEncryptionService.")))}d.isMDXComponent=!0}}]);