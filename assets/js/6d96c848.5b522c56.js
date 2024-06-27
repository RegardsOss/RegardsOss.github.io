"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[87902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),c=s,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||a;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},95408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={id:"order-processing",title:"Add data processing",slug:"/user-guide/order/processing/"},o=void 0,i={unversionedId:"user-documentation/order-data/order-processing",id:"user-documentation/order-data/order-processing",title:"Add data processing",description:"Ajoutez des traitements lors de la commande donn\xe9es.",source:"@site/docs/user-documentation/8-order-data/processing.md",sourceDirName:"user-documentation/8-order-data",slug:"/user-guide/order/processing/",permalink:"/docs/user-guide/order/processing/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/8-order-data/processing.md",tags:[],version:"current",frontMatter:{id:"order-processing",title:"Add data processing",slug:"/user-guide/order/processing/"},sidebar:"manual",previous:{title:"Manage orders",permalink:"/docs/user-guide/order/manage-orders/"},next:{title:"Monitor orders",permalink:"/docs/user-guide/order/monitor-orders/"}},u={},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Ajouter des plugins de traitement',id:"-ajouter-des-plugins-de-traitement",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Appliquer des plugins de traitement',id:"-appliquer-des-plugins-de-traitement",level:2}],d={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Ajoutez des traitements lors de la commande donn\xe9es.")),(0,s.kt)("img",{src:"/images/user-documentation/v1.4/8-order-data/command-menu.png",alt:"user menu",height:"200"}),(0,s.kt)("img",{src:"/images/user-documentation/v1.4/8-order-data/processing-card.png",alt:"user menu",height:"200"}),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Les traitements de donn\xe9es se configurent dans l'interface d'administration depuis le menu ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Commands"))," et la carte ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Processing")),".\nVous pourrez ajouter des traitements et surveiller leur d\xe9roulement lors de la commande de donn\xe9es."),(0,s.kt)("p",null,"Actuellement, il n'existe pas de plugins de traitement de donn\xe9es m\xe9tier dans REGARDS. N'h\xe9sitez pas \xe0 en d\xe9velopper un pour enrichir la commande de donn\xe9es du catalogue. Vous pourriez par exemple transformer les donn\xe9es et les envoyer vers un autre syst\xe8me qui les traitera de mani\xe8re diff\xe9rente."),(0,s.kt)("p",null,"Dans l'exemple suivant, vous serez en mesure d'ajouter un plugin de traitement de donn\xe9es et de l'appliquer lors d'une commande."),(0,s.kt)("h2",{id:"-ajouter-des-plugins-de-traitement"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Ajouter des plugins de traitement"),(0,s.kt)("p",null,"Depuis la carte ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Processing")),", cliquez sur le bouton ",(0,s.kt)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25",width:"25"})," ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Create a processing configuration"))," ."),(0,s.kt)("p",null,"S\xe9lectionnez le plugin que vous avez d\xe9velopp\xe9 (",(0,s.kt)("em",{parentName:"p"},"dans le cas suivant, il s'agira d'un plugin de test"),"), donnez un nom \xe0 cette configuration et remplissez tous les champs n\xe9cessaires. Choisissez ensuite quel type d'utilisateur aura le droit d'utiliser ce plugin. Pour rappel, il y a une section expliquant les r\xf4les de REGARDS dans la page ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-guide/project-configuration/users/"},"Manage project users")," et la section ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"R\xf4les des utilisateurs")),"."),(0,s.kt)("p",null,"Cochez la case ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Associate this process to all datasets"))," pour associer ce process \xe0 tous les jeux de donn\xe9es. Vous pouvez \xe9galement activer ce plugin pour un ou plusieurs jeux de donn\xe9es directement depuis le jeu de donn\xe9es, pour cela suivez l'\xe9tape 5 de la section ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-guide/data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"),"."),(0,s.kt)("p",null,"Une fois la configuration du module termin\xe9e, cliquez sur le bouton ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Create")),". Vous serez alors redirig\xe9 vers l'\xe9cran listant tous les processing configur\xe9s."),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.4/8-order-data/processing/processing-list.png",alt:"processing list",width:"800"})),(0,s.kt)("h2",{id:"-appliquer-des-plugins-de-traitement"},(0,s.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Appliquer des plugins de traitement"),(0,s.kt)("p",null,"Acc\xe9dez \xe0 l'interface user depuis l'adresse ",(0,s.kt)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),". Vous devriez d\xe9j\xe0 avoir cr\xe9\xe9 les modules ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"order-history"))," et ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"order-cart"))," et savoir comment commander des donn\xe9es, si ce n'est pas le cas, cliquez sur la page suivante ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-guide/order/manage-orders/"},"Configure order modules"),"."),(0,s.kt)("p",null,"Ajoutez des donn\xe9es au panier depuis le catalogue de donn\xe9es. Avant de commander, vous pouvez ajouter des plugins de traitements \xe0 toutes les donn\xe9es contenues dans un jeu en cliquant sur le bouton ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"+ Process")),"."),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.4/8-order-data/processing/processing-apply.png",alt:"processing apply",width:"800"})),"Retournez ensuite dans l'interface d'administration, et depuis le menu ",(0,s.kt)("b",null,(0,s.kt)("i",null,(0,s.kt)("i",null,"Commands")))," et la carte ",(0,s.kt)("b",null,(0,s.kt)("i",null,(0,s.kt)("i",null,"Processing")))," cliquez sur le bouton ",(0,s.kt)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"25",width:"25"})," ",(0,s.kt)("b",null,(0,s.kt)("i",null,(0,s.kt)("i",null,"Monitor ongoing processing"))),".",(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.4/8-order-data/processing/processing-monitor.png",alt:"processing monitor",width:"800"})),"Depuis cette page, vous aurez une vision globale de tous les traitements effectu\xe9s dans votre projet. Il peut y en avoir \xe9norm\xe9ment au sein de votre projet, les filtres vous aideront \xe0 retrouver des traitements particuliers soit par :",(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Processing")),", le type de traitement appliqu\xe9 aux donn\xe9es"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"User")),", l'adresse mail de l'utilisateur ayant utilis\xe9 le plugin de traitement"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"From"))," / ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"To")),", p\xe9riode de temps"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"Status")),", l'\xe9tat dans lequel se trouve le traitement. Par d\xe9faut tous les \xe9tats sont coch\xe9s, d\xe9cochez-les en cliquant simplement sur l'intitul\xe9 qui ne vous int\xe9resse pas.")),(0,s.kt)("p",null,"Appuyez sur ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Apply filters"))," ou ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Clear filters"))," pour utiliser les filtres."),(0,s.kt)("p",null,"Vous avez \xe9galement \xe0 votre disposition un bouton ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Refresh"))," pour actualiser l'\xe9tat des traitements."))}m.isMDXComponent=!0}}]);