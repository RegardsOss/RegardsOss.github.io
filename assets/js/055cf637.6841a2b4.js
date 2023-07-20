"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),u=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,g=l["".concat(c,".").concat(m)]||l[m]||p[m]||i;return r?s.createElement(g,a(a({ref:t},d),{},{components:r})):s.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=r(87462),n=(r(67294),r(3905));const i={id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},a=void 0,o={unversionedId:"user-documentation/data-services/data-services-processing-services",id:"user-documentation/data-services/data-services-processing-services",title:"Add processing services",description:"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.",source:"@site/docs/user-documentation/7-data-services/processing-services.md",sourceDirName:"user-documentation/7-data-services",slug:"/user-guide/data-services/processing-services/",permalink:"/docs/user-guide/data-services/processing-services/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/7-data-services/processing-services.md",tags:[],version:"current",frontMatter:{id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},sidebar:"manual",previous:{title:"Add UI services",permalink:"/docs/user-guide/data-services/ui-services/"},next:{title:"Introduction",permalink:"/docs/user-guide/order/introduction/"}},c={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configuration des services de traitement de donn\xe9es',id:"-configuration-des-services-de-traitement-de-donn\xe9es",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Application des services de traitement de donn\xe9es',id:"-application-des-services-de-traitement-de-donn\xe9es",level:2}],d={toc:u},l="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.")),(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"user menu",height:"200"}),(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/processing-services-card.png",alt:"user menu",height:"200"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-configuration-des-services-de-traitement-de-donn\xe9es"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Configuration des services de traitement de donn\xe9es"),(0,n.kt)("p",null,"La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Catalog Access"))," et la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Services")),"."),(0,n.kt)("p",null,"Il n'existe actuellement pas de services de traitements de donn\xe9es m\xe9tier dans REGARDS. Enrichissez l'utilisation de l'interface utilisateur en d\xe9veloppant vos propres services de traitement de donn\xe9es. Une fois qu'il sera disponible dans votre projet, ajoutez-le en appuyant sur le bouton ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add"))," de la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Catalog Access")),"."),(0,n.kt)("p",null,"Configurez-le selon votre utilisation :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si vos plugins n\xe9cessitent des param\xe8tres, choisissez si vous souhaitez que leurs valeurs soient :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"fixe")),", l'administrateur d\xe9cide d'une valeur qui sera utilis\xe9e pour tous les traitements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"dynamique")),", \xe0 chaque utilisation du plugin, il sera demand\xe9 de fournir une valeur. Il est possible de contraindre celle-ci parmi une liste de valeurs possibles."))),(0,n.kt)("li",{parentName:"ul"},"Choisissez si vous voulez l'activer pour tous les jeux de donn\xe9es au travers du param\xe8tre ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Activate this service for datas of every datasets"))," (par d\xe9faut la valeur n'est pas activ\xe9e). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de donn\xe9es, suivez l'\xe9tape 5 de la ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-guide/data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/service-create.png",alt:"create service",width:"800"})),(0,n.kt)("p",null,"Une fois la configuration termin\xe9e, appuyez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add"))," et retrouvez-le dans la liste des services applicables dans le catalogue. V\xe9rifiez qu'il soit dans l'\xe9tat actif."),(0,n.kt)("h2",{id:"-application-des-services-de-traitement-de-donn\xe9es"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Application des services de traitement de donn\xe9es"),(0,n.kt)("p",null,"Les services de traitements sont applicables sur les donn\xe9es du catalogue accessible depuis ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),"."),(0,n.kt)("p",null,"Sur chaque donn\xe9e, vous pouvez appuyer sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear wheel",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Services"))," pour voir les services associ\xe9s. Cliquez ensuite sur le service de traitement que vous souhaitez ex\xe9cuter. Vous pouvez \xe9galement les appliquer sur un groupe en cochant plusieurs cases et en appuyant sur le bouton qui s'affichera dans la barre au-dessus des donn\xe9es. Cela est uniquement possible lorsque le service le permet."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/catalog-processing-services.png",alt:"services",width:"800"})))}p.isMDXComponent=!0}}]);