"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[22696],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(g,s(s({ref:r},l),{},{components:t})):n.createElement(g,s({ref:r},l))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},440:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={id:"project-configuration-microservices",title:"Manage microservices",slug:"/user-guide/project-configuration/microservices/"},s=void 0,a={unversionedId:"user-documentation/project-configuration/project-configuration-microservices",id:"user-documentation/project-configuration/project-configuration-microservices",title:"Manage microservices",description:"Le panneau ***Microservices*** vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.",source:"@site/docs/user-documentation/2-project-configuration/microservices.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/microservices/",permalink:"/docs/user-guide/project-configuration/microservices/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/2-project-configuration/microservices.md",tags:[],version:"current",frontMatter:{id:"project-configuration-microservices",title:"Manage microservices",slug:"/user-guide/project-configuration/microservices/"},sidebar:"manual",previous:{title:"Customize user interface",permalink:"/docs/user-guide/project-configuration/user-interface/"},next:{title:"Manage storage locations",permalink:"/docs/user-guide/project-configuration/storages/"}},u={},c=[],l={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Le panneau ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)("em",{parentName:"strong"},"Microservices"))," vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/microservices/microservices-configure.png",alt:"configuration microservices",width:"800"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Depuis cet \xe9cran, vous pourrez :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/cloud.png",alt:"cloud",height:"22"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Activer ou d\xe9sactiver le mode maintenance"))," des microservices. En activant ce mode, le microservice n'acceptera plus que des requ\xeates HTTP de type GET. Seule la consultation sera possible, aucune modification ou suppression n'est donc autoris\xe9e. Ce mode peut automatiquement s'activer lorsqu'un probl\xe8me survient dans un microservice. Celui-ci se met dans un fonctionnement d\xe9grad\xe9 et attend l'intervention d'un administrateur."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/plugins.png",alt:"plugins",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Pour voir la liste de tous les plugins associ\xe9 \xe0 un microservice"))," En cliquant sur ce bouton, puis sur le bouton ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Empty plugins cache"))," vous pourrez vider toutes les configurations des plugins ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9es et sauvegard\xe9es. En effet, pour des raisons de performance, un plugin ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9 est automatiquement conserv\xe9."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:"/images/user-documentation/regards-icons/admin/import-export.png",alt:"import export",height:"25",width:"25"})," ",(0,i.kt)("b",null,(0,i.kt)("i",null,"Importer ou exporter la configuration du microservice"))," La plupart des microservices peuvent se configurer par fichier JSON. En exportant une configuration, vous pourrez voir tout ce qui a \xe9t\xe9 param\xe9tr\xe9. Vous pourrez \xe9galement r\xe9initialiser la configuration en important un nouveau fichier.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/microservices/microservices-import-export.png",alt:"configuration microservices",width:"800"})),(0,i.kt)("p",null,"A partir de cette page vous pouvez t\xe9l\xe9charger la configuration du microservice en appuyant sur le bouton ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Export"))," \xe0 droite de l'\xe9cran.\nVous pouvez \xe9galement importer un nouveau fichier de configuration en appuyant sur le bouton ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Import from file")),"."))}m.isMDXComponent=!0}}]);