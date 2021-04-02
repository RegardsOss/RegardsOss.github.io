(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{1190:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(2708)),o={id:"order-processing",title:"Add data processing",slug:"/user-guide/order/processing/"},i={unversionedId:"user-documentation/8-order-data/order-processing",id:"user-documentation/8-order-data/order-processing",isDocsHomePage:!1,title:"Add data processing",description:"Ajoutez des traitements lors de la commande donn\xe9es.",source:"@site/docs/user-documentation/8-order-data/processing.md",slug:"/user-guide/order/processing/",permalink:"/fr/docs/user-guide/order/processing/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/8-order-data/processing.md",version:"current",sidebar:"manual",previous:{title:"Manage orders",permalink:"/fr/docs/user-guide/order/manage-orders/"},next:{title:"Monitor orders",permalink:"/fr/docs/user-guide/order/monitor-orders/"}},u=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Ajouter des plugins de traitement',id:"ajouter-des-plugins-de-traitement",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Appliquer des plugins de traitement',id:"appliquer-des-plugins-de-traitement",children:[]}],c={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Ajoutez des traitements lors de la commande donn\xe9es.")),Object(s.b)("img",{src:"/images/user-documentation/8-order-data/command-menu.png",alt:"user menu",height:"200"}),Object(s.b)("img",{src:"/images/user-documentation/8-order-data/processing-card.png",alt:"user menu",height:"200"}),Object(s.b)("hr",null),Object(s.b)("p",null,"Les traitements de donn\xe9es se configurent dans l'interface d'administration depuis le menu ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Commands"))," et la carte ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Processing")),".\nVous pourrez ajouter des traitements et surveiller leur d\xe9roulement lors de la commande de donn\xe9es."),Object(s.b)("p",null,"Actuellement, il n'existe pas de plugins de traitement de donn\xe9es m\xe9tier dans REGARDS. N'h\xe9sitez pas \xe0 en d\xe9velopper un pour enrichir la commande de donn\xe9es du catalogue. Vous pourriez par exemple transformer les donn\xe9es et les envoyer vers un autre syst\xe8me qui les traitera de mani\xe8re diff\xe9rente."),Object(s.b)("p",null,"Dans l'exemple suivant, vous serez en mesure d'ajouter un plugin de traitement de donn\xe9es et de l'appliquer lors d'une commande."),Object(s.b)("h2",{id:"ajouter-des-plugins-de-traitement"},Object(s.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Ajouter des plugins de traitement"),Object(s.b)("p",null,"Depuis la carte ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Processing")),", cliquez sur le bouton ",Object(s.b)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25"})," ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Create a processing configuration"))," ."),Object(s.b)("p",null,"S\xe9lectionnez le plugin que vous avez d\xe9velopp\xe9 (",Object(s.b)("em",{parentName:"p"},"dans le cas suivant, il s'agira d'un plugin de test"),"), donnez un nom \xe0 cette configuration et remplissez tous les champs n\xe9cessaires. Choisissez ensuite quel type d'utilisateur aura le droit d'utiliser ce plugin. Pour rappel, il y a une section expliquant les r\xf4les de REGARDS dans la page ",Object(s.b)("a",{parentName:"p",href:"../../project-configuration/users/"},"Manage project users")," et la section ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"R\xf4les des utilisateurs")),"."),Object(s.b)("p",null,"Cochez la case ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Associate this process to all datasets"))," pour associer ce process \xe0 tous les jeux de donn\xe9es. Vous pouvez \xe9galement activer ce plugin pour un ou plusieurs jeux de donn\xe9es directement depuis le jeu de donn\xe9es, pour cela suivez l'\xe9tape 5 de la section ",Object(s.b)("a",{parentName:"p",href:"../../data-organization/collections-datasets/"},"cr\xe9ation d'un jeu de donn\xe9es"),"."),Object(s.b)("p",null,"Une fois la configuration du module termin\xe9e, cliquez sur le bouton ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Create")),". Vous serez alors redirig\xe9 vers l'\xe9cran listant tous les processing configur\xe9s."),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/8-order-data/processing/processing-list.png",alt:"processing list",width:"800"})),Object(s.b)("h2",{id:"appliquer-des-plugins-de-traitement"},Object(s.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Appliquer des plugins de traitement"),Object(s.b)("p",null,"Acc\xe9dez \xe0 l'interface user depuis l'adresse ",Object(s.b)("inlineCode",{parentName:"p"},"http://<regards host>/user/<project>"),". Vous devriez d\xe9j\xe0 avoir cr\xe9\xe9 les modules ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"order-history"))," et ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"order-cart"))," et savoir comment commander des donn\xe9es, si ce n'est pas le cas, cliquez sur la page suivante ",Object(s.b)("a",{parentName:"p",href:"../manage-orders/"},"Configure order modules"),"."),Object(s.b)("p",null,"Ajoutez des donn\xe9es au panier depuis le catalogue de donn\xe9es. Avant de commander, vous pouvez ajouter des plugins de traitements \xe0 toutes les donn\xe9es contenues dans un jeu en cliquant sur le bouton ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"+ Process")),"."),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/8-order-data/processing/processing-apply.png",alt:"processing apply",width:"800"})),"Retournez ensuite dans l'interface d'administration, et depuis le menu ",Object(s.b)("b",null,Object(s.b)("i",null,Object(s.b)("i",null,"Commands")))," et la carte ",Object(s.b)("b",null,Object(s.b)("i",null,Object(s.b)("i",null,"Processing")))," cliquez sur le bouton ",Object(s.b)("img",{src:"/images/user-documentation/regards-icons/admin/monitor.png",alt:"monitor",height:"25"})," ",Object(s.b)("b",null,Object(s.b)("i",null,Object(s.b)("i",null,"Monitor ongoing processing"))),".",Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/8-order-data/processing/processing-monitor.png",alt:"processing monitor",width:"800"})),"Depuis cette page, vous aurez une vision globale de tous les traitements effectu\xe9s dans votre projet. Il peut y en avoir \xe9norm\xe9ment au sein de votre projet, les filtres vous aideront \xe0 retrouver des traitements particuliers soit par :",Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Processing")),", le type de traitement appliqu\xe9 aux donn\xe9es"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"User")),", l'adresse mail de l'utilisateur ayant utilis\xe9 le plugin de traitement"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"From"))," / ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"To")),", p\xe9riode de temps"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Status")),", l'\xe9tat dans lequel se trouve le traitement. Par d\xe9faut tous les \xe9tats sont coch\xe9s, d\xe9cochez-les en cliquant simplement sur l'intitul\xe9 qui ne vous int\xe9resse pas.")),Object(s.b)("p",null,"Appuyez sur ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Apply filters"))," ou ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Clear filters"))," pour utiliser les filtres."),Object(s.b)("p",null,"Vous avez \xe9galement \xe0 votre disposition un bouton ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Refresh"))," pour actualiser l'\xe9tat des traitements."))}l.isMDXComponent=!0},2708:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||s;return r?a.a.createElement(b,i(i({ref:t},c),{},{components:r})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);