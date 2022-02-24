"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[36717],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94062:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],u={id:"configuration-overview",title:"Configuration",slug:"/user-guide/concept/configuration-overview/"},c=void 0,s={unversionedId:"user-documentation/z2_concept/configuration-overview",id:"user-documentation/z2_concept/configuration-overview",title:"Configuration",description:"La configuration permet \xe0 un administrateur REGARDS de l'adapter \xe0 son besoin (projet, infrastructure...).",source:"@site/docs/user-documentation/0-z2_concept/configuration-overview.md",sourceDirName:"user-documentation/0-z2_concept",slug:"/user-guide/concept/configuration-overview/",permalink:"/docs/user-guide/concept/configuration-overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/0-z2_concept/configuration-overview.md",tags:[],version:"current",frontMatter:{id:"configuration-overview",title:"Configuration",slug:"/user-guide/concept/configuration-overview/"},sidebar:"manual",previous:{title:"Database",permalink:"/docs/user-guide/concept/database-overview/"},next:{title:"Introduction",permalink:"/docs/user-guide/global-configuration/introduction/"}},l=[{value:"Configuration par fichier",id:"configuration-par-fichier",children:[],level:3},{value:"Configuration par base de donn\xe9es",id:"configuration-par-base-de-donn\xe9es",children:[],level:3}],p={toc:l};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"La configuration permet \xe0 un administrateur REGARDS de l'adapter \xe0 son besoin (projet, infrastructure...). "),(0,o.kt)("h3",{id:"configuration-par-fichier"},"Configuration par fichier"),(0,o.kt)("p",null,"Une petite partie de la configuration est stock\xe9e sur le disque du service de configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"rs-config"),", sous la forme de fichier ",(0,o.kt)("inlineCode",{parentName:"p"},"<microservice>.properties"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Ces fichiers de configuration apportent des valeurs communes \xe0 tous tous les microservices d'un m\xeame type, quel que soit leur projet. "),(0,o.kt)("p",null,"Cela permet de :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initier les microservices \xe0 leur tout premier d\xe9marrage "),(0,o.kt)("li",{parentName:"ul"},"adapter REGARDS \xe0 la configuration mat\xe9rielle sur lequel il est d\xe9ploy\xe9 : nombre de t\xe2che r\xe9alisable en parall\xe8le, diverses temporisation, cron, taille de ZIP... ")),(0,o.kt)("p",null,"Vous pouvez consulter la liste ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-docker/tree/master/roles/regards-mconfig/templates"},"des principales variables ouvertes ici"),". "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Mise \xe0 jour de la configuration")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Une mise \xe0 jour d'un fichier de configuration n\xe9cessite un red\xe9marrage des microservices du type associ\xe9"))),(0,o.kt)("h3",{id:"configuration-par-base-de-donn\xe9es"},"Configuration par base de donn\xe9es"),(0,o.kt)("p",null,"La majeure partie de la configuration est stock\xe9e dans la base de donn\xe9es du microservice qui le g\xe8re.",(0,o.kt)("br",{parentName:"p"}),"\n","Si le microservice est de type Projet, alors la valeur est propre \xe0 chaque projet.",(0,o.kt)("br",{parentName:"p"}),"\n","L'administrateur peut modifier cette valeur sans avoir \xe0 red\xe9marrer les microservices associ\xe9s"),(0,o.kt)("p",null,"Les informations de configuration d'un projet REGARDS sont visualisables et \xe9ditables depuis ",(0,o.kt)("a",{parentName:"p",href:"../../project-configuration/introduction/"},"l'administration projet de REGARDS")))}d.isMDXComponent=!0}}]);