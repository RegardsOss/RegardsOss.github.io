"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[20792],{15680:(e,r,n)=>{n.d(r,{xA:()=>m,yg:()=>y});var a=n(96540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var g=a.createContext({}),l=function(e){var r=a.useContext(g),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=l(e.components);return a.createElement(g.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,g=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=t,y=u["".concat(g,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(y,s(s({ref:r},m),{},{components:n})):a.createElement(y,s({ref:r},m))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var g in r)hasOwnProperty.call(r,g)&&(i[g]=r[g]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20269:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(58168),t=(n(96540),n(15680));const o={id:"order-manage-orders",title:"Manage orders",slug:"/user-guide/order/manage-orders/"},s=void 0,i={unversionedId:"user-documentation/order-data/order-manage-orders",id:"version-1.12.0/user-documentation/order-data/order-manage-orders",title:"Manage orders",description:"G\xe9rez les modules de commande et commandez des donn\xe9es",source:"@site/versioned_docs/version-1.12.0/user-documentation/8-order-data/manage-orders.md",sourceDirName:"user-documentation/8-order-data",slug:"/user-guide/order/manage-orders/",permalink:"/docs/1.12.0/user-guide/order/manage-orders/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/user-documentation/8-order-data/manage-orders.md",tags:[],version:"1.12.0",frontMatter:{id:"order-manage-orders",title:"Manage orders",slug:"/user-guide/order/manage-orders/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.12.0/user-guide/order/introduction/"},next:{title:"Add data processing",permalink:"/docs/1.12.0/user-guide/order/processing/"}},g={},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Configurer les modules de type <strong><em>order</em></strong>',id:"-configurer-les-modules-de-type-order",level:2},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Commander des donn\xe9es',id:"-commander-des-donn\xe9es",level:2}],m={toc:l},u="wrapper";function d(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,a.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"G\xe9rez les modules de commande et commandez des donn\xe9es")),(0,t.yg)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user-interface-menu.png",alt:"user menu",height:"200"}),(0,t.yg)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/ui-modules-card.png",alt:"ui modules card",height:"200"}),(0,t.yg)("hr",null),(0,t.yg)("p",null,"Pour pouvoir commander des donn\xe9es, vous aurez besoin de configurer deux types de modules :"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"order-cart")),", un panier dans lequel vous pourrez ajouter les donn\xe9es que vous souhaitez commander et \xe9ventuellement d\xe9cider de leur appliquer des traitements."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"order-history")),", pour retrouver l'\xe9tat d'avancement de la commande et l'historique de vos commandes")),(0,t.yg)("h2",{id:"-configurer-les-modules-de-type-order"},(0,t.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Configurer les modules de type ",(0,t.yg)("strong",{parentName:"h2"},(0,t.yg)("em",{parentName:"strong"},"order"))),(0,t.yg)("p",null,"Depuis l'IHM d'administration du projet, cliquez sur l'onglet ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"User Interface"))," du menu, puis sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Add"))," de la carte ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"UI modules")),"."),(0,t.yg)("p",null,"Cr\xe9er le module ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"order-history"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Module type"))," : ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"order-history"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Description"))," : elle appara\xeetra dans la liste des modules configur\xe9s. Dans l'exemple suivant, il s'appellera ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"My orders")),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Layout container"))," : ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"page-content-module (dynamic)"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Activate modules"))," : coch\xe9e"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Page settings"))," : choisissez ou non de d\xe9finir ce module comme page d'accueil de l'interface utilisateur et configurez l'ic\xf4ne du module"),(0,t.yg)("li",{parentName:"ul"},"Donnez un titre en anglais et en fran\xe7ais au module dans l'interface user."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Module settings")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Initially expanded")),", le module sera initialement ouvert"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Initially collapsed")),", le module sera initialement ferm\xe9"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Always expanded")),", le module sera toujours ouvert")))),(0,t.yg)("p",null,"Cr\xe9er le module ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"order-cart"))),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Module type"))," : ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"order-cart"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Description"))," : elle appara\xeetra dans la liste des modules configur\xe9s. Dans l'exemple suivant, il s'appellera ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"My cart")),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Layout container"))," : ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"page-content-module (dynamic)"))),(0,t.yg)("li",{parentName:"ul"},"case ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Activate modules"))," : coch\xe9e"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Page settings"))," : configurez l'ic\xf4ne du module et choisissez si vous souhaitez d\xe9finir ce module comme page d'accueil dans l'interface user"),(0,t.yg)("li",{parentName:"ul"},"Donnez un titre en anglais et en fran\xe7ais au module dans l'interface user."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Module settings")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Initially expanded")),", le module sera initialement ouvert"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Initially collapsed")),", le module sera initialement ferm\xe9"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Always expanded")),", le module sera toujours ouvert"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Display settings")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"case ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Display datasets"))," pour afficher les donn\xe9es par jeu de donn\xe9es dans le panier")))),(0,t.yg)("p",null,"\xc9ditez le module ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Menu"))," accessible depuis la liste des UI modules."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"V\xe9rifiez que la case ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Display cart link"))," est bien coch\xe9e. Si ce n'est pas le cas, cochez-la."),(0,t.yg)("li",{parentName:"ul"},"Editez votre module de type ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"order-cart"))," et s\xe9lectionnez la visibilit\xe9 cach\xe9e (",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Display"))," > ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Never")),"). Ainsi votre module s'affichera uniquement depuis l'ic\xf4ne cart ",(0,t.yg)("img",{src:"/images/user-documentation/regards-icons/user/cart.png",alt:"cart",height:"25",width:"25"})),(0,t.yg)("li",{parentName:"ul"},"Cliquez sur le bouton ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"Update module")))),(0,t.yg)("h2",{id:"-commander-des-donn\xe9es"},(0,t.yg)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Commander des donn\xe9es"),(0,t.yg)("p",null,"Acc\xe9dez \xe0 l'interface user depuis l'adresse ",(0,t.yg)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),", les modules ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"order-history"))," et ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"order-cart"))," sont \xe0 pr\xe9sent disponibles. Commandez les donn\xe9es depuis un module de type ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},(0,t.yg)("a",{parentName:"em",href:"/docs/1.12.0/user-guide/catalog/configuration/"},"search-result"))),", appel\xe9 ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Catalog"))," dans l'image ci-dessous."),(0,t.yg)("p",null,"Pour commander des donn\xe9es, ajoutez les une par une \xe0 l'aide de l'ic\xf4ne ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Add item to my cart"))," affich\xe9 sur chaque ligne ou s\xe9lectionnez un groupe de donn\xe9es et ajoutez-les en appuyant sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Add to Basket"))," sur la barre principale du ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Catalog")),"."),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"/images/user-documentation/v1.4/8-order-data/order/order-data.png",alt:"order data",width:"800"})),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"Vous ne pourrez pas ajouter de donn\xe9es au panier dans les cas suivants :"),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"Si vous n'\xeates pas connect\xe9. En suivant la configuration de base tout utilisateur ayant au moins un r\xf4le ",(0,t.yg)("strong",{parentName:"li"},(0,t.yg)("em",{parentName:"strong"},"REGISTERED USER"))," peut se connecter"),(0,t.yg)("li",{parentName:"ul"},"Si vous avez un acc\xe8s limit\xe9 aux donn\xe9es"),(0,t.yg)("li",{parentName:"ul"},"S'il n'y pas d'acc\xe8s permis \xe0 l'espace de stockage"))),(0,t.yg)("p",null,"Une fois que vous aurez ajout\xe9 un \xe9l\xe9ment, une ic\xf4ne s'affichera sur l'\xe9cran pour vous indiquer s'ils ont correctement \xe9t\xe9 ajout\xe9s.\nCliquez ensuite sur l'ic\xf4ne ",(0,t.yg)("img",{src:"/images/user-documentation/regards-icons/user/cart.png",alt:"cart",width:"25"})," ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"My cart"))," , et pr\xe9parez les donn\xe9es que vous souhaitez commander."),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"/images/user-documentation/v1.4/8-order-data/order/order-cart.png",alt:"order cart",width:"800"})),(0,t.yg)("p",null,"La s\xe9lection est tri\xe9e par jeux de donn\xe9es (si vous avez coch\xe9 la case ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Display datasets"))," du module ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"order-cart")),"), dans lesquels vous trouverez les donn\xe9es choisies, le nombre d'objets et la taille associ\xe9e lorsque celle-ci est disponible. Appuyez sur le bouton en forme de loupe ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Shows added object list"))," pour avoir le d\xe9tail des donn\xe9es. Appliquez des ",(0,t.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/order/processing/"},"traitements")," si n\xe9cessaire en appuyant sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Process")),". Vous pouvez retirer des \xe9l\xe9ments en appuyant sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Clear"))," qui videra tout le panier, ou en appuyant sur les boutons de suppression des jeux de donn\xe9es ou des donn\xe9es."),(0,t.yg)("p",null,"Une fois que vous aurez termin\xe9, appuyez sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Order")),". Donnez \xe9ventuellement un nom de commande, que vous retrouverez dans l'historique des commandes ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"My orders")),"."),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"/images/user-documentation/v1.4/8-order-data/order/order-action.png",alt:"order action",width:"800"})),(0,t.yg)("p",null,"Cliquez ensuite dans l'onglet ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"My orders"))," et observez la progression du t\xe9l\xe9chargement de vos donn\xe9es au travers des colonnes ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Progress"))," et ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Status")),". Vous pourrez le mettre en pause ou l'annuler en appuyant respectivement sur les boutons ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Pause order"))," et ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Cancel order")),". A la fin du t\xe9l\xe9chargement, cliquez sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Download available files order as zip"))," pour sauvegarder vos donn\xe9es."),(0,t.yg)("div",{align:"center"},(0,t.yg)("img",{src:"/images/user-documentation/v1.4/8-order-data/order/order-module.png",alt:"order",width:"800"})),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"Il se peut que la commande soit automatiquement s\xe9par\xe9e en sous-commandes. Cela peut par exemple arriver lorsqu'il y a beaucoup de donn\xe9es \xe0 t\xe9l\xe9charger, ou si les donn\xe9es ne sont pas toutes accessibles imm\xe9diatement. Dans ce cas, la barre de progression s'arr\xeatera temporairement durant le t\xe9l\xe9chargement pour r\xe9cup\xe9rer les donn\xe9es. D\xe8s qu'elles seront disponibles, le statut prendra la valeur ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"waiting user"))," et vous pourrez cliquer sur le bouton ",(0,t.yg)("img",{src:"/images/user-documentation/regards-icons/user/download.png",alt:"download",width:"25"})," ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Download available files order as zip")),", qui vous pr\xe9cisera \xe9galement le nombre d'objets dans le zip. La progression reprendra ensuite et s'arr\xeatera autant de fois que n\xe9cessaire.")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Pour \xe9viter une solicitation r\xe9guli\xe8re de l'utilisateur lors de sous-commandes, il existe un moyen automatique de g\xe9rer le t\xe9l\xe9chargement de donn\xe9es REGARDS en utilisant l'outil ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"REGARDS Downloader")),", que vous pouvez obtenir en suivant ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/RegardsDownloader"},"ce lien"),". Une fois install\xe9, vous n'aurez qu'\xe0 fournir le fichier Metalink que vous pouvez obtenir lors du lancement de la commande dans REGARDS en appuyant sur le bouton ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"Download order metalink file"))," depuis l'onglet ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"My orders")),".")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Il est recommand\xe9 d'utiliser l'outil ",(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("em",{parentName:"strong"},"REGARDS Downloader"))," dans le cas de commandes volumineuses.")),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Vous pourrez \xe9galement retrouver toutes vos commandes depuis l'interface d'administration. R\xe9f\xe9rez-vous \xe0 la page ",(0,t.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/order/monitor-orders/"},"Monitor orders")," pour en savoir plus.")))}d.isMDXComponent=!0}}]);