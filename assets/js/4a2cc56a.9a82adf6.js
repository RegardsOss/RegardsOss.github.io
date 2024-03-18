"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[3312],{15680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>c});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,c=g["".concat(u,".").concat(m)]||g[m]||p[m]||s;return n?t.createElement(c,i(i({ref:r},d),{},{components:n})):t.createElement(c,i({ref:r},d))}));function c(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22508:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(58168),a=(n(96540),n(15680));const s={id:"dashboard",title:"Product monitoring dashboard",slug:"/user-guide/monitoring/dashboard"},i=void 0,o={unversionedId:"user-documentation/monitoring/dashboard",id:"version-1.11.0/user-documentation/monitoring/dashboard",title:"Product monitoring dashboard",description:"Le tableau de bord est un outil transverse qui permet de suivre l'ex\xe9cution des cha\xeenes d'acquisition, d'ingestion et d'aspiration de donn\xe9es. Il vous permet d'obtenir de pr\xe9cieuses informations quant \xe0 l'archivage de vos produits, le moissonnage dans le catalogue ainsi que la diffusion aux catalogues externes.",source:"@site/versioned_docs/version-1.11.0/user-documentation/9-monitoring/monitor-session.md",sourceDirName:"user-documentation/9-monitoring",slug:"/user-guide/monitoring/dashboard",permalink:"/docs/1.11.0/user-guide/monitoring/dashboard",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/user-documentation/9-monitoring/monitor-session.md",tags:[],version:"1.11.0",frontMatter:{id:"dashboard",title:"Product monitoring dashboard",slug:"/user-guide/monitoring/dashboard"},sidebar:"manual",previous:{title:"Orders settings",permalink:"/docs/1.11.0/user-guide/order/settings-orders/"}},u={},l=[],d={toc:l},g="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(g,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Le tableau de bord est un outil transverse qui permet de suivre l'ex\xe9cution des cha\xeenes d'acquisition, d'ingestion et d'aspiration de donn\xe9es. Il vous permet d'obtenir de pr\xe9cieuses informations quant \xe0 l'archivage de vos produits, le moissonnage dans le catalogue ainsi que la diffusion aux catalogues externes.")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Si vous ne connaissez pas un de ces concepts, vous pouvez lire les rubriques suivantes pour en savoir plus :")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},(0,a.yg)("a",{parentName:"em",href:"/docs/1.11.0/user-guide/import-data/oais-files/introduction/"},"OAIS Archive"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},(0,a.yg)("a",{parentName:"em",href:"/docs/1.11.0/user-guide/import-data/fem/introduction/"},"GeoJSON Feature Archive"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},(0,a.yg)("a",{parentName:"em",href:"/docs/1.11.0/user-guide/crawler/introduction/"},"Build your catalog")))),(0,a.yg)("p",null,"Depuis ",(0,a.yg)("strong",{parentName:"p"},"Add data")," et la carte ",(0,a.yg)("strong",{parentName:"p"},"Dashboard"),", cliquez le bouton ",(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"25",width:"25"})," ",(0,a.yg)("strong",{parentName:"p"},"Display dashboard"),"."),(0,a.yg)("img",{src:"/images/user-documentation/regards-icons/admin/menu-add-data.png",alt:"menu",height:"200"}),(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-card.png",alt:"dashboard card",height:"200"}),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Le tableau de bord est compos\xe9 de deux parties :"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-sessions.png",alt:"sessions",width:"800"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\xe0 gauche"),", la liste des ",(0,a.yg)("strong",{parentName:"li"},"sources"),", qui identifie le fournisseur de la donn\xe9es. Dans le cas d'ajout de donn\xe9es par scan de fichiers, il s'agira du nom de la cha\xeene d'acquisition. Pour les d\xe9p\xf4ts directs de fichiers (au format OAIS ou GeoJson), le champ ",(0,a.yg)("em",{parentName:"li"},"sessionOwner")," provenant de la requ\xeate en entr\xe9e sera utilis\xe9."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\xe0 droite"),", la liste des ",(0,a.yg)("strong",{parentName:"li"},"sessions")," identifiant toutes les donn\xe9es trait\xe9es lors d'une m\xeame acquisition ou ingestion. La session est utilis\xe9 afin de suivre plus facilement les donn\xe9es import\xe9es dans REGARDS.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Le tableau de bord n'est pas un suivi en temps r\xe9el, il y a un d\xe9calage de quelques secondes avant que l'information soit effective.",(0,a.yg)("br",{parentName:"p"}),"\n","Si vous souhaitez mettre \xe0 jour les informations affich\xe9s, il est n\xe9cessaire d'appuyer sur le bouton de rafra\xeechissement en haut \xe0 droite.")),(0,a.yg)("p",null,"Que ce soit pour les sources et les sessions, vous avez la possibilit\xe9 de les ",(0,a.yg)("strong",{parentName:"p"},"filtrer par nom ou par \xe9tat parmi")," :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"ALL"),", tous les \xe9tats"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Ok"),", les traitements termin\xe9s sans erreur"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Error"),", les traitements en erreur. Dans ce cas, vous verrez une ic\xf4ne ",(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-error-icon.png",alt:"error icon",width:"25"})," indiquant le nombre d'erreurs associ\xe9es"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Running"),", si au moins une demande est en cours de traitement ",(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-running-icon.png",alt:"running icon",width:"25"})),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Waiting")," le nombre de traitements en attente d'une action administrateur ",(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-waiting-icon.png",alt:"running icon",width:"25"}))),(0,a.yg)("p",null,"Vous pouvez \xe9galement cliquer sur une source pour ",(0,a.yg)("strong",{parentName:"p"},"filtrer les sessions li\xe9es \xe0 cette source"),"."),(0,a.yg)("p",null,"Pour voir les ",(0,a.yg)("strong",{parentName:"p"},"d\xe9tails li\xe9s \xe0 une session"),", cliquez sur le nom de la session que vous souhaitez suivre. Vous pourrez ainsi acc\xe9der aux diff\xe9rents traitements appliqu\xe9s aux donn\xe9es parmi, l'",(0,a.yg)("strong",{parentName:"p"},"acquisition"),", l'",(0,a.yg)("strong",{parentName:"p"},"ingestion"),", le ",(0,a.yg)("strong",{parentName:"p"},"stockage")," et la ",(0,a.yg)("strong",{parentName:"p"},"diffusion"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Seules les colonnes et \xe9tapes auquelle une donn\xe9e est effectivement pass\xe9e s'affichent, vous ne verrez donc pas toujours tous les champs")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"/images/user-documentation/v1.6/9-monitoring/dashboard-sessions-details.png",alt:"sessions",width:"800"})),(0,a.yg)("p",null,"Chaque \xe9tape contient une liste de propri\xe9t\xe9es d\xe9coup\xe9es en plusieurs cat\xe9gories :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Acquisition")," donnera des informations sur le fichiers acquis et les produits g\xe9n\xe9r\xe9s, "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Referencing"),", le nombre de requ\xeates envoy\xe9es et les produits r\xe9f\xe9renc\xe9s associ\xe9s (versionn\xe9s ou non), "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Stockage"),", les diff\xe9rents types de requ\xeates envoy\xe9es. Pour rappel, il y a deux fa\xe7ons de stocker des fichiers dans REGARDS, par r\xe9f\xe9rence ou par stockage. Dans le premier cas, les m\xe9tadonn\xe9es du produit g\xe9n\xe9r\xe9 contiendront l'emplacement de stockage du fichier, dans le deuxi\xe8me cas, les fichiers seront en plus stock\xe9es dans un espace configur\xe9 dans REGARDS."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Diffusion"),", le nombre de produits index\xe9s dans le catalogue si une cha\xeene d'aspiration est configur\xe9e.")),(0,a.yg)("p",null,"Des boutons d'actions peuvent \xe9galement s'afficher dans ces \xe9tapes :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Acquisition"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See referenced"),", pour voir les produits r\xe9f\xe9renc\xe9s"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See error requests"),", dans le cas o\xf9 il y aurait des traitements en erreur"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Relaunch error requests"),", pour relancer les traitements en erreur"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Referencing"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See referencing products"),", pour voir les produits r\xe9f\xe9renc\xe9s (sur l'\xe9cran de gestion OAIS ou GeoJson selon le type de produit)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See errors"),", pour voir les traitement en erreur"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Relaunch errors"),", pour relancer les traitements en erreur"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Storage"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See storages"),", pour voir l'ensemble des espaces de stockage et la place occup\xe9e par les fichiers, pour en savoir plus r\xe9f\xe9rez-vous \xe0 la ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/project-configuration/storages/"},"page d\xe9di\xe9e"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Relaunch errors"),", pour essayer de stocker de nouveau les fichiers en erreur"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"Diffusion"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"See detail"),", pour acc\xe9der \xe0 l'\xe9cran de suivi des aspirations de donn\xe9es vers le catalogue dans le cas o\xf9 une ",(0,a.yg)("a",{parentName:"li",href:"/docs/1.11.0/user-guide/crawler/introduction/"},"cha\xeene aurait \xe9t\xe9 configur\xe9e"),". ")))),(0,a.yg)("p",null,"Vous avez \xe9galement la possibilit\xe9 depuis cet \xe9cran de supprimer les produits li\xe9s \xe0 cette session en appuyant sur le bouton ",(0,a.yg)("strong",{parentName:"p"},"Delete Products"),". La session se d\xe9crementera alors du nombre de produits supprim\xe9s."))}p.isMDXComponent=!0}}]);