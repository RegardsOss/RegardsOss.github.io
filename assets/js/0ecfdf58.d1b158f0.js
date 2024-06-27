"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[2220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"global-configuration-portal",title:"Customize portal interface",slug:"/user-guide/global-configuration/portal/"},a=void 0,l={unversionedId:"user-documentation/global-configuration/global-configuration-portal",id:"version-1.12.0/user-documentation/global-configuration/global-configuration-portal",title:"Customize portal interface",description:"Le portail d'acc\xe8s est une interface permettant de configurer des modules pour afficher un menu principal et lister les projets de l'instance REGARDS. Il pr\xe9sente tous les projets publiques et visibles.",source:"@site/versioned_docs/version-1.12.0/user-documentation/1-global-configuration/portal-configuration.md",sourceDirName:"user-documentation/1-global-configuration",slug:"/user-guide/global-configuration/portal/",permalink:"/docs/1.12.0/user-guide/global-configuration/portal/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/1-global-configuration/portal-configuration.md",tags:[],version:"1.12.0",frontMatter:{id:"global-configuration-portal",title:"Customize portal interface",slug:"/user-guide/global-configuration/portal/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.12.0/user-guide/global-configuration/introduction/"},next:{title:"Manage projects",permalink:"/docs/1.12.0/user-guide/global-configuration/projects/"}},u={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Modules",id:"modules",level:3},{value:"Themes",id:"themes",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Le portail d'acc\xe8s est une interface permettant de configurer des modules pour afficher un menu principal et lister les projets de l'instance REGARDS. Il pr\xe9sente tous les projets publiques et visibles. ")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/portal.png",alt:"portal",width:"800"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Cette section permet de d\xe9finir les modules \xe0 afficher dans l'interface web du portail. Par d\xe9faut deux modules sont pr\xe9-configur\xe9s :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Portal menu")),", le menu de l'interface permettant de s\xe9lectionner le th\xe8me et la langue."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"List of projects")),", le module permettant d'afficher la liste des projets de l'instance REGARDS.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/1-global-configuration/portal-modules.png",alt:"portal modules",width:"800"})),(0,o.kt)("h3",{id:"themes"},"Themes"),(0,o.kt)("p",null,"Cette section permet de configurer les th\xe8mes propos\xe9s aux utilisateurs dans l'interface web du portail. Pour ajouter un nouveau th\xe8me, vous pouvez vous r\xe9f\xe9rer \xe0 la section Theme configuration de la page ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/project-configuration/user-interface/#theme-configuration"},"Customize user interface"),"."))}d.isMDXComponent=!0}}]);