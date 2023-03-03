"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[56924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,v=l["".concat(c,".").concat(m)]||l[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"database-overview",title:"Database",slug:"/user-guide/concept/database-overview/"},i=void 0,s={unversionedId:"user-documentation/z2_concept/database-overview",id:"version-1.7.1/user-documentation/z2_concept/database-overview",title:"Database",description:"REGARDS utilise plusieurs bases de donn\xe9es :",source:"@site/versioned_docs/version-1.7.1/user-documentation/0-z2_concept/database-overview.md",sourceDirName:"user-documentation/0-z2_concept",slug:"/user-guide/concept/database-overview/",permalink:"/docs/1.7.1/user-guide/concept/database-overview/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/0-z2_concept/database-overview.md",tags:[],version:"1.7.1",frontMatter:{id:"database-overview",title:"Database",slug:"/user-guide/concept/database-overview/"},sidebar:"manual",previous:{title:"Tenant",permalink:"/docs/1.7.1/user-guide/concept/tenant-overview/"},next:{title:"Configuration",permalink:"/docs/1.7.1/user-guide/concept/configuration-overview/"}},c={},u=[],d={toc:u},l="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"REGARDS utilise plusieurs bases de donn\xe9es :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une base de donn\xe9es ",(0,a.kt)("strong",{parentName:"li"},"Instance"),", avec autant de sch\xe9ma qu'il y a de microservice de type Instance"),(0,a.kt)("li",{parentName:"ul"},"Une base de donn\xe9es ",(0,a.kt)("strong",{parentName:"li"},"par Projet"),", avec autant de sch\xe9ma qu'il y a de microservice de type Projet")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Les informations conserv\xe9es dans les sch\xe9mas de ces bases de donn\xe9es sont relatives au fonctionnement interne de REGARDS, ce ne sont donc pas des points d'entr\xe9e pour y stocker les donn\xe9es du catalogue.")),(0,a.kt)("admonition",{title:"Cas particulier des identifiants d'acc\xe8s aux bases de donn\xe9es",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Une partie de la configuration sur disque, utilis\xe9 au d\xe9marrage, est ensuite stock\xe9e en base de donn\xe9es.",(0,a.kt)("br",{parentName:"p"}),"\n","Par exemple, lors du premier d\xe9marrage, un projet est initi\xe9 par d\xe9faut. La configuration par microservice de ce projet est lu sur le disque du service de configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"rs-config")," dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"<microservice>.properties"),". Une fois initi\xe9, les informations de connexion sont alors conserv\xe9es dans la base de donn\xe9es ",(0,a.kt)("b",null,"Instance"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Dor\xe9navant, lors de la cr\xe9ation d'un nouveau projet ou lors d'un red\xe9marrage, les informations de connexion utilis\xe9es sont celles conserv\xe9es dans la base de donn\xe9es ",(0,a.kt)("b",null,"Instance"),".")))}p.isMDXComponent=!0}}]);