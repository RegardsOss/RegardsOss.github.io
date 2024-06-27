"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>l});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=d(r),f=i,l=p["".concat(u,".").concat(f)]||p[f]||c[f]||s;return r?n.createElement(l,a(a({ref:t},m),{},{components:r})):n.createElement(l,a({ref:t},m))}));function l(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const s={id:"fem-features-dissemination",title:"Feature dissemination",slug:"/user-guide/import-data/fem/features-dissemination/"},a=void 0,o={unversionedId:"user-documentation/4_3-fem/fem-features-dissemination",id:"version-1.11.0/user-documentation/4_3-fem/fem-features-dissemination",title:"Feature dissemination",description:"Le Syst\xe8me REGARDS permet de diffuser tout ou partie des produits ajout\xe9s, modifi\xe9s ou supprim\xe9s de l'archive de produits GeoJson vers des syst\xe8mes externes.",source:"@site/versioned_docs/version-1.11.0/user-documentation/4_3-fem/feature-dissemination.md",sourceDirName:"user-documentation/4_3-fem",slug:"/user-guide/import-data/fem/features-dissemination/",permalink:"/docs/1.11.0/user-guide/import-data/fem/features-dissemination/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/user-documentation/4_3-fem/feature-dissemination.md",tags:[],version:"1.11.0",frontMatter:{id:"fem-features-dissemination",title:"Feature dissemination",slug:"/user-guide/import-data/fem/features-dissemination/"},sidebar:"manual",previous:{title:"Manage features",permalink:"/docs/1.11.0/user-guide/import-data/fem/manage-features/"},next:{title:"FEM Settings",permalink:"/docs/1.11.0/user-guide/import-data/fem/manage-features-settings/"}},u={},d=[],m={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Le Syst\xe8me REGARDS permet de diffuser tout ou partie des produits ajout\xe9s, modifi\xe9s ou supprim\xe9s de l'archive de produits GeoJson vers des syst\xe8mes externes.  "),(0,i.kt)("p",null,"Pour ce faire, un service de notification est d\xe9di\xe9 \xe0 l'envoie de messages \xe0 divers destinaires. Ce service permet via un enssemble de plugins de d\xe9finir :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le format du message \xe0 envoyer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Le moyen de diffusion du message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les destinataires du message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Les r\xe8gles de diffusion des message aux divers destinataires"),(0,i.kt)("p",{parentName:"li"},"Pour comprendre ce fonctionnement en d\xe9tail, vous pouvez vous r\xe9f\xe9rer \xe0 la  ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.11.0/development/backend/services/notifier/overview/"},"description du service notifier"),"."))))}c.isMDXComponent=!0}}]);