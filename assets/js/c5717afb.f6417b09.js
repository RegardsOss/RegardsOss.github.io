"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[97287],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>m});var r=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(s),m=n,g=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return s?r.createElement(g,a(a({ref:t},d),{},{components:s})):r.createElement(g,a({ref:t},d))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=s[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}p.displayName="MDXCreateElement"},81418:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=s(87462),n=(s(67294),s(3905));const i={id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},a=void 0,o={unversionedId:"user-documentation/data-services/data-services-processing-services",id:"version-1.5.0/user-documentation/data-services/data-services-processing-services",title:"Add processing services",description:"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.",source:"@site/versioned_docs/version-1.5.0/user-documentation/7-data-services/processing-services.md",sourceDirName:"user-documentation/7-data-services",slug:"/user-guide/data-services/processing-services/",permalink:"/docs/1.5.0/user-guide/data-services/processing-services/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/user-documentation/7-data-services/processing-services.md",tags:[],version:"1.5.0",frontMatter:{id:"data-services-processing-services",title:"Add processing services",slug:"/user-guide/data-services/processing-services/"},sidebar:"version-1.5.0/manual",previous:{title:"Add UI services",permalink:"/docs/1.5.0/user-guide/data-services/ui-services/"},next:{title:"Introduction",permalink:"/docs/1.5.0/user-guide/order/introduction/"}},c={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configuration des services de traitement de donn\xe9es',id:"-configuration-des-services-de-traitement-de-donn\xe9es",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Application des services de traitement de donn\xe9es',id:"-application-des-services-de-traitement-de-donn\xe9es",level:2}],d={toc:u};function l(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Les services permettent d'appliquer des traitements l\xe9gers sur les donn\xe9es de votre catalogue.")),(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"user menu",height:"200"}),(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/processing-services-card.png",alt:"user menu",height:"200"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-configuration-des-services-de-traitement-de-donn\xe9es"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Configuration des services de traitement de donn\xe9es"),(0,n.kt)("p",null,"La liste des services de traitement est configurable dans la partie administration de votre projet, depuis le menu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Catalog Access"))," et la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Services")),"."),(0,n.kt)("p",null,"Il n'existe actuellement pas de services de traitements de donn\xe9es m\xe9tier dans REGARDS. Enrichissez l'utilisation de l'interface utilisateur en d\xe9veloppant vos propres services de traitement de donn\xe9es. Une fois qu'il sera disponible dans votre projet, ajoutez-le en appuyant sur le bouton ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add"))," de la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Catalog Access")),"."),(0,n.kt)("p",null,"Configurez-le selon votre utilisation :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si vos plugins n\xe9cessitent des param\xe8tres, choisissez si vous souhaitez que leurs valeurs soient :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"fixe")),", l'administrateur d\xe9cide d'une valeur qui sera utilis\xe9e pour tous les traitements"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"dynamique")),", \xe0 chaque utilisation du plugin, il sera demand\xe9 de fournir une valeur. Il est possible de contraindre celle-ci parmi une liste de valeurs possibles."))),(0,n.kt)("li",{parentName:"ul"},"Choisissez si vous voulez l'activer pour tous les jeux de donn\xe9es au travers du param\xe8tre ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Activate this service for datas of every datasets"))," (par d\xe9faut la valeur n'est pas activ\xe9e). Si vous souhaitez l'ajouter seulement pour un ou plusieurs jeux de donn\xe9es, suivez l'\xe9tape 5 de la ",(0,n.kt)("a",{parentName:"li",href:"../../data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/service-create.png",alt:"create service",width:"800"})),(0,n.kt)("p",null,"Une fois la configuration termin\xe9e, appuyez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add"))," et retrouvez-le dans la liste des services applicables dans le catalogue. V\xe9rifiez qu'il soit dans l'\xe9tat actif."),(0,n.kt)("h2",{id:"-application-des-services-de-traitement-de-donn\xe9es"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Application des services de traitement de donn\xe9es"),(0,n.kt)("p",null,"Les services de traitements sont applicables sur les donn\xe9es du catalogue accessible depuis ",(0,n.kt)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),"."),(0,n.kt)("p",null,"Sur chaque donn\xe9e, vous pouvez appuyer sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear wheel",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Services"))," pour voir les services associ\xe9s. Cliquez ensuite sur le service de traitement que vous souhaitez ex\xe9cuter. Vous pouvez \xe9galement les appliquer sur un groupe en cochant plusieurs cases et en appuyant sur le bouton qui s'affichera dans la barre au-dessus des donn\xe9es. Cela est uniquement possible lorsque le service le permet."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/7-data-services/processing-services/catalog-processing-services.png",alt:"services",width:"800"})))}l.isMDXComponent=!0}}]);