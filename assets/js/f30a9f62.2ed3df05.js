"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[76800],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(a),d=n,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||s;return a?r.createElement(m,o(o({ref:t},c),{},{components:a})):r.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={id:"catalog-use",title:"Use the catalog",slug:"/user-guide/catalog/use/"},o=void 0,i={unversionedId:"user-documentation/catalog-consultation/catalog-use",id:"user-documentation/catalog-consultation/catalog-use",title:"Use the catalog",description:"Utilisez le catalogue avec diff\xe9rentes vues.",source:"@site/docs/user-documentation/6-catalog-consultation/catalog-manipulation.md",sourceDirName:"user-documentation/6-catalog-consultation",slug:"/user-guide/catalog/use/",permalink:"/docs/user-guide/catalog/use/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/6-catalog-consultation/catalog-manipulation.md",tags:[],version:"current",frontMatter:{id:"catalog-use",title:"Use the catalog",slug:"/user-guide/catalog/use/"},sidebar:"manual",previous:{title:"Configure the catalog",permalink:"/docs/user-guide/catalog/configuration/"},next:{title:"Toponyms server",permalink:"/docs/user-guide/catalog/toponyms/"}},l={},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Explorer le catalogue',id:"-explorer-le-catalogue",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Utiliser la vue carte',id:"-utiliser-la-vue-carte",level:2}],c={toc:u},g="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Utilisez le catalogue avec diff\xe9rentes vues.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"-explorer-le-catalogue"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Explorer le catalogue"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"L'ensemble du catalogue est configurable. Pour savoir en savoir plus, r\xe9f\xe9rez-vous \xe0 la page ",(0,n.kt)("a",{parentName:"p",href:"../configuration/"},"Configure the catalog"),".")),(0,n.kt)("p",null,"Le catalogue se pr\xe9sente de cette mani\xe8re :"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-datasets.png",alt:"datasets",width:"800"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-data.png",alt:"data",width:"800"})),(0,n.kt)("p",null,"Il y a deux onglets principaux :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Datasets")),", pr\xe9sente les jeux de donn\xe9es accessibles \xe0 l'utilisateur. Dans ce cas, il s'agit de donn\xe9es publiques car aucun utilisateur n'est connect\xe9. Pour rappel, vous pouvez resteindre l'acc\xe8s \xe0 certains jeux de donn\xe9es en suivant les instrutions indiqu\xe9es dans ",(0,n.kt)("a",{href:"../../data-organization/data-access-rights/"},"Configure data access rights"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Data")),", pr\xe9sente les donn\xe9es aspir\xe9es dans le catalogue.")),(0,n.kt)("p",null,"Dans le catalogue pr\xe9sent par d\xe9faut, deux vues vous sont propos\xe9es sur les ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Datasets")),". L'onglet ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Data"))," poss\xe8de une vue suppl\xe9mentaire :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/list.png",alt:"list",height:"25",width:"25"})," pr\xe9sente les \xe9l\xe9ments sous forme de liste"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/table.png",alt:"table",height:"25",width:"25"})," pr\xe9sente les \xe9l\xe9ments sous forme de tableau"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/quicklook.png",alt:"quicklook",height:"25",width:"25"})," pr\xe9sente les donn\xe9es par quicklook")),(0,n.kt)("p",null,"Plusieurs outils vous assisteront dans vos recherches :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Appuyez le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/search.png",alt:"search",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Show search pane"))," afin d'effectuer des recherches sur vos donn\xe9es. Sa disposition d\xe9pendra de la configuration du module."),(0,n.kt)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/filters.png",alt:"filters",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Filters"))," pour filtrer vos donn\xe9es. Vous pouvez \xe9galement filtrer les donn\xe9es par jeu en cliquant sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/filter.png",alt:"filter",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Display data"))," depuis l'onglet ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Datasets")),"."),(0,n.kt)("li",{parentName:"ul"},"Triez vos donn\xe9es en utilisant le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/sort.png",alt:"sort",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Sort"))," depuis la vue ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"List"))," et les fl\xe8ches pr\xe9sentes sur les libell\xe9s des colonnes")),(0,n.kt)("p",null,"Retrouvez les informations li\xe9es aux jeux de donn\xe9es et donn\xe9es en appuyant sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/info.png",alt:"info",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Details"))," pr\xe9sent sur chaque ligne. Un onglet ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Description"))," s'ouvrira pour pr\xe9senter les informations de cet \xe9l\xe9ment."),(0,n.kt)("p",null,"Choisissez les colonnes que vous souhaitez afficher une appuyant sur le bouton ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/columns.png",alt:"columns",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Columns")),"."),(0,n.kt)("p",null,"Il se peut que les onglets suivants apparaissent selon la configuration de vos modules d'interface :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/cart.png",alt:"cart",height:"25",width:"25"})," pour ajouter des donn\xe9es au panier afin de les ",(0,n.kt)("a",{href:"../../order/introduction/"},"commander")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear-wheel",height:"25",width:"25"})," pour appliquer des services ",(0,n.kt)("a",{href:"../../data-services/processing-services/"},"processing")," ou de ",(0,n.kt)("a",{href:"../../data-services/ui-services/"},"visualisation")," aux donn\xe9es")),(0,n.kt)("h2",{id:"-utiliser-la-vue-carte"},(0,n.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Utiliser la vue carte"),(0,n.kt)("p",null,"Si vous avez configur\xe9 un module de type ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"search-results"))," disposant de cartes, vous verrez appara\xeetre cette vue ",(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/map.png",alt:"map",height:"25",width:"25"})," ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Display results over map")),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-map-2D.png",alt:"datasets",width:"800"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-map-3D.png",alt:"datasets",width:"800"})),(0,n.kt)("p",null,"Vous observez :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"la carte dans la partie principale"),(0,n.kt)("li",{parentName:"ul"},"la liste des quicklooks correspondant \xe0 vos donn\xe9es sur la partie de droite"),(0,n.kt)("li",{parentName:"ul"},"une bo\xeete \xe0 outils vous permettant d'effectuer plusieurs actions :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/pick.png",alt:"pick",height:"25",width:"25"})," ",(0,n.kt)("b",null,(0,n.kt)("i",null,"Pick entities")),", permet d'utiliser les simples et les doubles clics. Le simple clic s\xe9lectionne l'entit\xe9 pr\xe9sente sur la carte \xe0 l'endroit du clic, zoome sur celle-ci, ajoute le libell\xe9 dans la barre d'outils et met en surbrillance le quicklook correspondant dans la liste des quicklooks. Le double clic s\xe9lectionne l'entit\xe9 pr\xe9sente sur la carte \xe0 l'endroit du double clic et affiche uniquement les informations li\xe9es \xe0 cette entit\xe9."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/zone.png",alt:"zone",height:"25",width:"25"})," s\xe9lectionne les entit\xe9s contenues dans une zone g\xe9ographique"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/globe.png",alt:"globe",height:"25",width:"25"})," affiche la vue 3D"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/planisphere.png",alt:"planisphere",height:"25",width:"25"})," affiche la vue 2D"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:"/images/user-documentation/regards-icons/user/drop.png",alt:"drop",height:"25",width:"25"})," en cliquant sur ce bouton un curseur appara\xeetra pour r\xe9gler la transparence des layers de superposition (seulement dans le cas o\xf9 vous en avez configur\xe9)"))),(0,n.kt)("li",{parentName:"ul"},"une barre de recherche de toponyme qui permet de filter les r\xe9sultats contenus dans une zone g\xe9ographique")))}p.isMDXComponent=!0}}]);