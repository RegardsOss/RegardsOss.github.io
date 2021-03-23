(window.webpackJsonp=window.webpackJsonp||[]).push([[2550],{2622:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(2704)),s={id:"order-monitor-orders",title:"Monitor orders",slug:"/user-guide/order/monitor-orders/"},i={unversionedId:"user-documentation/8-order-data/order-monitor-orders",id:"version-1.4.0/user-documentation/8-order-data/order-monitor-orders",isDocsHomePage:!1,title:"Monitor orders",description:"Suivez les commandes effectu\xe9es dans votre projet",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/user-documentation/8-order-data/monitor-orders.md",slug:"/user-guide/order/monitor-orders/",permalink:"/fr/docs/1.4.0/user-guide/order/monitor-orders/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/user-documentation/8-order-data/monitor-orders.md",version:"1.4.0",sidebar:"version-1.4.0/manual",previous:{title:"Add data processing",permalink:"/fr/docs/1.4.0/user-guide/order/processing/"}},c=[],m={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Suivez les commandes effectu\xe9es dans votre projet")),Object(o.b)("img",{src:"/images/user-documentation/8-order-data/command-menu.png",alt:"user menu",height:"200"}),Object(o.b)("img",{src:"/images/user-documentation/8-order-data/orders-card.png",alt:"user menu",height:"200"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Depuis l'interface d'administration, le menu ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Commands"))," et la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Orders")),", appuyez sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"List")),".\nSur l'\xe9cran ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Orders")),", vous pouvez visualiser toutes les commandes effectu\xe9es dans votre projet."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/8-order-data/order/order-list.png",alt:"order list",width:"800"})),Object(o.b)("p",null,"Les informations suivantes sont indiqu\xe9es :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"User")),", l'adresse mail de l'utilisateur ayant effectu\xe9 la commande"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Label")),", l'intitul\xe9 qu'il a renseign\xe9 lors de sa commande"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Progress")),", le pourcentage de livraison"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Creation")),", la date \xe0 laquelle la commande a \xe9t\xe9 cr\xe9\xe9e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Total size")),", la taille totale des fichiers"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Errors count")),", le nombre d'erreurs \xe9ventuellement survenues"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Status")),", l'\xe9tat de livraison de la commande parmi :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"waiting user")),", une intervention de l'utilisateur est attendue pour terminer le processus de commande"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"done")),", la commande a \xe9t\xe9 livr\xe9e et t\xe9l\xe9charg\xe9e avec succ\xe8s"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"pending")),", la commande est en attente"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"running")),", la commande est en cours de traitement"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"pause")),", la commande a \xe9t\xe9 mise en pause lors de son ex\xe9cution"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"expired")),", les fichiers associ\xe9s \xe0 la commande ne sont plus t\xe9l\xe9chargeables car la commande a expir\xe9"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"failed")),", la commande des fichiers a \xe9chou\xe9"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"warning")),", la commande s'est correctement termin\xe9e mais avec des warnings"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"removed")),", la commande a \xe9t\xe9 supprim\xe9e"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"unknown")),", le statut est inconnu")))),Object(o.b)("p",null,"Par d\xe9faut les colonnes suivantes ne sont pas affich\xe9es, vous pouvez d\xe9cidez de l'affichage des colonnes en appuyant sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Columns")),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Expiration")),", la date jusqu'\xe0 laquelle les fichiers de la commande sont t\xe9l\xe9chargeables"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Objects count")),", le nombre d'objets t\xe9l\xe9charg\xe9s")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Vous pourrez t\xe9l\xe9charger ce rapport sous format .csv en appuyant sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Summary")),"."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A tout moment en tant qu'administrateur, vous avez la possibilit\xe9 de mettre une commande en pause ou l'annuler en appuyant sur les boutons correspondants pr\xe9sents sur chaque ligne."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"N'h\xe9sitez pas \xe0 utiliser les filtres de tri par ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"User"))," pour vous aider dans vos recherches."))))}b.isMDXComponent=!0},2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),b=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=b(n),u=r,d=l["".concat(s,".").concat(u)]||l[u]||p[u]||o;return n?a.a.createElement(d,i(i({ref:t},m),{},{components:n})):a.a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);