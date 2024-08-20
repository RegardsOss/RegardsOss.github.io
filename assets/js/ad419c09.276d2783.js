"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={id:"tenant-overview",title:"Tenant",slug:"/user-guide/concept/tenant-overview/"},o=void 0,a={unversionedId:"user-documentation/z2_concept/tenant-overview",id:"version-1.15/user-documentation/z2_concept/tenant-overview",title:"Tenant",description:"REGARDS vous permet de cr\xe9er et de configurer de multiples projets (voir concept de Multi-tenant sur Wikipedia).",source:"@site/versioned_docs/version-1.15/user-documentation/0-z2_concept/tenant-overview.md",sourceDirName:"user-documentation/0-z2_concept",slug:"/user-guide/concept/tenant-overview/",permalink:"/docs/user-guide/concept/tenant-overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/user-documentation/0-z2_concept/tenant-overview.md",tags:[],version:"1.15",frontMatter:{id:"tenant-overview",title:"Tenant",slug:"/user-guide/concept/tenant-overview/"},sidebar:"manual",previous:{title:"Glossary",permalink:"/docs/user-guide/glossary/"},next:{title:"Database",permalink:"/docs/user-guide/concept/database-overview/"}},u={},l=[],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"REGARDS vous permet de cr\xe9er et de configurer de multiples projets (",(0,s.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Multi-tenant"},"voir concept de Multi-tenant sur Wikipedia"),"). "),(0,s.kt)("p",null,"Un projet REGARDS est :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"S\xe9curis\xe9")," - les droits des comptes et l'acc\xe8s aux donn\xe9es sont sp\xe9cifiques \xe0 un projet"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Performant")," - un projet dispose de sa propre base de donn\xe9es et les ressources communes ne sont pas monopolisable par un projet lors de charges de travail importantes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Autonome")," - les projets sont ind\xe9pendants les uns des autres au sein d'une m\xeame instance REGARDS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Configurable")," - les interfaces web d'administration et utilisateur sont d\xe9di\xe9es \xe0 chaque projet, sans aucun pont possible entre projets"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Adaptable")," - les donn\xe9es, les sources de donn\xe9es, les mod\xe8les, la configuration des microservices... sont propres \xe0 chaque projet "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Mutualis\xe9")," du point de vue de l'infrastructure - les projets d'une m\xeame instance REGARDS utilisent les m\xeames serveurs de calcul et ils se mettent tous \xe0 jour ensemble")),(0,s.kt)("p",null,"La partie instance de REGARDS permet quant \xe0 elle de:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"G\xe9rer les projets"),(0,s.kt)("li",{parentName:"ul"},"G\xe9rer les comptes des utilisateurs"),(0,s.kt)("li",{parentName:"ul"},"G\xe9rer l'\xe9cran d'accueil de l'application")),(0,s.kt)("admonition",{title:"Utiliser les projets",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"La mise en place de plusieurs projets ",(0,s.kt)("em",{parentName:"p"},"peut")," \xeatre pertinente si vous souhaitez :"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"nommer des personnes diff\xe9rentes pour g\xe9rer des projets distincts"),(0,s.kt)("li",{parentName:"ul"},"\xe9viter que vos utilisateurs puissent visualiser des types de donn\xe9es diff\xe9rents au sein d'un m\xeame projet (domaine scientifique fonci\xe8rement diff\xe9rents...)"))),(0,s.kt)("admonition",{title:"Ne pas utiliser les projets",type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Il est cependant \xe0 noter que l'acc\xe8s et l'affichage des donn\xe9es peuvent \xeatre restreint par l'administrateur.",(0,s.kt)("br",{parentName:"p"}),"\n","Il n'est donc pas n\xe9cessaire de cr\xe9er de projet pour :"),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"cr\xe9er une multitude de pages qui affichent des sous-ensembles distincts de donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},"limiter les droits d'acc\xe8s aux donn\xe9es \xe0 des groupes d'utilisateurs"))))}d.isMDXComponent=!0}}]);