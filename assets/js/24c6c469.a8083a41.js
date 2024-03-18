"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[36048],{15680:(e,s,r)=>{r.d(s,{xA:()=>d,yg:()=>m});var t=r(96540);function n(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function i(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?i(Object(r),!0).forEach((function(s){n(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function o(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),u=function(e){var s=t.useContext(c),r=s;return e&&(r="function"==typeof e?e(s):a(a({},s),e)),r},d=function(e){var s=u(e.components);return t.createElement(c.Provider,{value:s},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},g=t.forwardRef((function(e,s){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=u(r),g=n,m=l["".concat(c,".").concat(g)]||l[g]||p[g]||i;return r?t.createElement(m,a(a({ref:s},d),{},{components:r})):t.createElement(m,a({ref:s},d))}));function m(e,s){var r=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var o={};for(var c in s)hasOwnProperty.call(s,c)&&(o[c]=s[c]);o.originalType=e,o[l]="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85439:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(58168),n=(r(96540),r(15680));const i={id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},a=void 0,o={unversionedId:"user-documentation/data-services/data-services-processing-services",id:"version-1.12.0/user-documentation/data-services/data-services-processing-services",title:"Add processing services",description:"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.",source:"@site/versioned_docs/version-1.12.0/user-documentation/7-data-services/processing-services.md",sourceDirName:"user-documentation/7-data-services",slug:"/user-guide/data-services/processing-services/",permalink:"/docs/1.12.0/user-guide/data-services/processing-services/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/7-data-services/processing-services.md",tags:[],version:"1.12.0",frontMatter:{id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},sidebar:"manual",previous:{title:"Add UI services",permalink:"/docs/1.12.0/user-guide/data-services/ui-services/"},next:{title:"Introduction",permalink:"/docs/1.12.0/user-guide/order/introduction/"}},c={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configuration des services de traitement de donn\xe9es',id:"-configuration-des-services-de-traitement-de-donn\xe9es",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Application des services de traitement de donn\xe9es',id:"-application-des-services-de-traitement-de-donn\xe9es",level:2}],d={toc:u},l="wrapper";function p(e){let{components:s,...r}=e;return(0,n.yg)(l,(0,t.A)({},d,r,{components:s,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.")),(0,n.yg)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"user menu",height:"200"}),(0,n.yg)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/processing-services-card.png",alt:"user menu",height:"200"}),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"-configuration-des-services-de-traitement-de-donn\xe9es"},(0,n.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Configuration des services de traitement de donn\xe9es"),(0,n.yg)("p",null,"La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Catalog Access"))," et la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Services")),"."),(0,n.yg)("p",null,"Il n'existe actuellement pas de services de traitements de donn\xe9es m\xe9tier dans REGARDS. Enrichissez l'utilisation de l'interface utilisateur en d\xe9veloppant vos propres services de traitement de donn\xe9es. Une fois qu'il sera disponible dans votre projet, ajoutez-le en appuyant sur le bouton ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add"))," de la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Catalog Access")),"."),(0,n.yg)("p",null,"Configurez-le selon votre utilisation :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Si vos plugins n\xe9cessitent des param\xe8tres, choisissez si vous souhaitez que leurs valeurs soient :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"fixe")),", l'administrateur d\xe9cide d'une valeur qui sera utilis\xe9e pour tous les traitements"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"dynamique")),", \xe0 chaque utilisation du plugin, il sera demand\xe9 de fournir une valeur. Il est possible de contraindre celle-ci parmi une liste de valeurs possibles."))),(0,n.yg)("li",{parentName:"ul"},"Choisissez si vous voulez l'activer pour tous les jeux de donn\xe9es au travers du param\xe8tre ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Activate this service for datas of every datasets"))," (par d\xe9faut la valeur n'est pas activ\xe9e). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de donn\xe9es, suivez l'\xe9tape 5 de la ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/service-create.png",alt:"create service",width:"800"})),(0,n.yg)("p",null,"Une fois la configuration termin\xe9e, appuyez sur le bouton ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add"))," et retrouvez-le dans la liste des services applicables dans le catalogue. V\xe9rifiez qu'il soit dans l'\xe9tat actif."),(0,n.yg)("h2",{id:"-application-des-services-de-traitement-de-donn\xe9es"},(0,n.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Application des services de traitement de donn\xe9es"),(0,n.yg)("p",null,"Les services de traitements sont applicables sur les donn\xe9es du catalogue accessible depuis ",(0,n.yg)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),"."),(0,n.yg)("p",null,"Sur chaque donn\xe9e, vous pouvez appuyer sur le bouton ",(0,n.yg)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear wheel",height:"25",width:"25"})," ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Services"))," pour voir les services associ\xe9s. Cliquez ensuite sur le service de traitement que vous souhaitez ex\xe9cuter. Vous pouvez \xe9galement les appliquer sur un groupe en cochant plusieurs cases et en appuyant sur le bouton qui s'affichera dans la barre au-dessus des donn\xe9es. Cela est uniquement possible lorsque le service le permet."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/catalog-processing-services.png",alt:"services",width:"800"})))}p.isMDXComponent=!0}}]);