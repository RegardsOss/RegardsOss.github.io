"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85189],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70549:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={id:"global-configuration-portal",title:"Customize portal interface",slug:"/user-guide/global-configuration/portal/"},l=void 0,c={unversionedId:"user-documentation/global-configuration/global-configuration-portal",id:"version-1.4.0/user-documentation/global-configuration/global-configuration-portal",isDocsHomePage:!1,title:"Customize portal interface",description:"Le portail d'acc\xe8s est une interface permettant de configurer des modules pour afficher un menu principal et lister les projets de l'instance REGARDS. Il pr\xe9sente tous les projets publiques et visibles.",source:"@site/versioned_docs/version-1.4.0/user-documentation/1-global-configuration/portal-configuration.md",sourceDirName:"user-documentation/1-global-configuration",slug:"/user-guide/global-configuration/portal/",permalink:"/docs/1.4.0/user-guide/global-configuration/portal/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/1-global-configuration/portal-configuration.md",version:"1.4.0",frontMatter:{id:"global-configuration-portal",title:"Customize portal interface",slug:"/user-guide/global-configuration/portal/"},sidebar:"version-1.4.0/manual",previous:{title:"Introduction",permalink:"/docs/1.4.0/user-guide/global-configuration/introduction/"},next:{title:"Manage projects",permalink:"/docs/1.4.0/user-guide/global-configuration/projects/"}},s=[{value:"Configuration",id:"configuration",children:[{value:"Modules",id:"modules",children:[]},{value:"Themes",id:"themes",children:[]}]}],p={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Le portail d'acc\xe8s est une interface permettant de configurer des modules pour afficher un menu principal et lister les projets de l'instance REGARDS. Il pr\xe9sente tous les projets publiques et visibles. ")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/portal.png",alt:"portal",width:"800"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"modules"},"Modules"),(0,i.kt)("p",null,"Cette section permet de d\xe9finir les modules \xe0 afficher dans l'interface web du portail. Par d\xe9faut deux modules sont pr\xe9-configur\xe9s :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Portal menu")),", le menu de l'interface permettant de s\xe9lectionner le th\xe8me et la langue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"List of projects")),", le module permettant d'afficher la liste des projets de l'instance REGARDS.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/portal-modules.png",alt:"portal modules",width:"800"})),(0,i.kt)("h3",{id:"themes"},"Themes"),(0,i.kt)("p",null,"Cette section permet de configurer les th\xe8mes propos\xe9s aux utilisateurs dans l'interface web du portail. Pour ajouter un nouveau th\xe8me, vous pouvez vous r\xe9f\xe9rer \xe0 la section Theme configuration de la page ",(0,i.kt)("a",{parentName:"p",href:"../../project-configuration/user-interface/#theme-configuration"},"Customize user interface"),"."))}f.isMDXComponent=!0}}]);