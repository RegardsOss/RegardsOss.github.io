(window.webpackJsonp=window.webpackJsonp||[]).push([[1452],{1522:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(2699)),c={id:"catalog-protocols",title:"Interoperability protocols",slug:"/user-guide/catalog/protocols"},s={unversionedId:"user-documentation/6-catalog-consultation/catalog-protocols",id:"user-documentation/6-catalog-consultation/catalog-protocols",isDocsHomePage:!1,title:"Interoperability protocols",description:"Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos donn\xe9es dans le catalogue. Dans cette page, vous apprendrez \xe0 configurer un protocole de recherche standardis\xe9 bas\xe9 sur OpenSearch, pour effectuer des recherches sur votre catalogue m\xeame depuis l'ext\xe9rieur de REGARDS.",source:"@site/docs/user-documentation/6-catalog-consultation/protocols.md",slug:"/user-guide/catalog/protocols",permalink:"/docs/user-guide/catalog/protocols",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/6-catalog-consultation/protocols.md",version:"current",sidebar:"manual",previous:{title:"Toponyms server",permalink:"/docs/user-guide/catalog/toponyms"},next:{title:"Introduction",permalink:"/docs/user-guide/data-services/introduction"}},i=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Introduction',id:"introduction",children:[]},{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Cr\xe9er un protocole de recherche bas\xe9 sur Opensearch',id:"cr\xe9er-un-protocole-de-recherche-bas\xe9-sur-opensearch",children:[]}],l={toc:i};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Les protocoles de recherches sont indispensables afin de pouvoir explorer efficacement vos donn\xe9es dans le catalogue. Dans cette page, vous apprendrez \xe0 configurer un protocole de recherche standardis\xe9 bas\xe9 sur OpenSearch, pour effectuer des recherches sur votre catalogue m\xeame depuis l'ext\xe9rieur de REGARDS.")),Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/catalog-access-menu.png",alt:"catalog access menu",height:"200"}),Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/search-protocols-card.png",alt:"search protocols card",height:"200"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"introduction"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Introduction"),Object(o.b)("p",null,"La gestion des protocoles de recherche est accessible depuis la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols"))," du menu ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Catalog Access")),".\nCliquez sur le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/list.png",alt:"list",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"List"))," de la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols"))," ."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-update.png",alt:"protocol list",width:"800"})),Object(o.b)("p",null,"Vous constaterez qu'il existe d\xe9j\xe0 un protocole de recherche par d\xe9faut et non supprimable ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"REGARDS search protocol")),". Il est interne \xe0 REGARDS et utilis\xe9 pour faire toutes les recherches dans le catalogue, n\xe9anmoins, il n'est pas interop\xe9rable avec d'autres services web. Si vous avez besoin de le rendre compatible avec des services autres que REGARDS, suivez les \xe9tapes ci-dessous pour cr\xe9er un plugin de recherche bas\xe9 sur un protocole largement utilis\xe9 Opensearch."),Object(o.b)("p",null,"Si vous souhaitez ajouter un autre format de communication, vous pouvez d\xe9velopper votre propre plugin."),Object(o.b)("h2",{id:"cr\xe9er-un-protocole-de-recherche-bas\xe9-sur-opensearch"},Object(o.b)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12"})," Cr\xe9er un protocole de recherche bas\xe9 sur Opensearch"),Object(o.b)("p",null,"Cliquez sur le bouton ",Object(o.b)("img",{src:"/images/user-documentation/regards-icons/admin/add.png",alt:"add",height:"25"})," ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Add"))," de la carte ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Search protocols")),".\nVous serez redirig\xe9 vers l'\xe9cran ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Configure search protocol")),", renseignez les param\xe8tres suivants :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Label"))," la description de votre protocole qui appara\xeetra dans la liste des protocoles"),Object(o.b)("li",{parentName:"ul"},"S\xe9lectionnez ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Use this search protocol for every search on catalog"))," pour que ce protocole soit utilis\xe9 sur l'ensemble des donn\xe9es du catalogue ou ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Use this search protocol only for search on the selected dataset")),", pour restreindre la recherche \xe0 un jeu de donn\xe9es en particulier. Dans ce cas, choisissez-le dans la liste d\xe9roulante."),Object(o.b)("li",{parentName:"ul"},"Cliquez sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Choose a search protocol"))," et appuyez sur ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"opensearch"))," puis ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"New configuration")),", un nouveau bloc de configuration s'affichera.")),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-create.png",alt:"protocol create",width:"800"})),Object(o.b)("p",null,"Remplissez ensuite tous les champs relatifs au protocole Opensearch:"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Pour plus d'informations sur le protocole ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Opensearch")),", lisez la description suivante sur ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md"},"github"),"."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Label"))," ",Object(o.b)("em",{parentName:"p"},"[Obligatoire]"),", le nom de protocole dans REGARDS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Les param\xe8tres du search engine ",Object(o.b)("em",{parentName:"p"},"[Optionnel]")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Title")),", un nom identifiant votre search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Description")),", une br\xe8ve description du search engine. Elle doit faire 1024 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Email")),", le contact en charge du search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Tags"))," , une collection de mots utilis\xe9s pour identifier le search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Short name")),", un nom identifiant votre search engine. Il doit faire 16 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Long name")),", un nom identifiant votre search engine. Il doit faire 48 caract\xe8res ou moins et ne doit pas contenir de HTML ou autre tag."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Image")),", l'ic\xf4ne utilis\xe9e pour votre search engine. Quand cela est possible, ajoutez une image 16x16 de type image/x-icon (comme des /favicon.ico) et une image 64x64 de type image/jpeg ou image/png"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Attribution")),", les organisations que l'on peut citer pour dans le d\xe9veloppement du search engine"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Path of the attribute in data model for the last update date")),", la derni\xe8re date de modification des m\xe9tadonn\xe9es")))),Object(o.b)("p",null,"Rendre les extensions compatibles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search time extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", rend le protocole compatible \xe0 l'extension standard Opensearch ",Object(o.b)("em",{parentName:"li"},"time"),". En cochant cette case, vous devrez renseigner la fa\xe7on de r\xe9cup\xe9rer les param\xe8tres ",Object(o.b)("em",{parentName:"li"},"start")," et ",Object(o.b)("em",{parentName:"li"},"end")," dans le tableau ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration")),". N'h\xe9sitez \xe0 vous appuyer sur les diff\xe9rents tooltips pour vous aidez."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search regards extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", tous les attributs autres que ceux standard au protocole Opensearch sont mapp\xe9s avec l'extension ",Object(o.b)("em",{parentName:"li"},"regards")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Open search media extension"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]"),", ajoute des liens de r\xe9f\xe9rencement \xe0 tous les fichiers associ\xe9s aux donn\xe9es comme les thumbnails, les donn\xe9es brutes, les documents, etc.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Le protocole est compatible \xe0 l'extension geo par d\xe9faut depuis le chemin properties.geometry du mod\xe8le. N\xe9anmoins vous pouvez changer le chemin d'acc\xe8s en le param\xe9trant dans le tableau ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration"))))),Object(o.b)("p",null,"Exemple de configuration de l'extension ",Object(o.b)("em",{parentName:"p"},"time")," dans le tableau ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Parameters configuration"))," :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Depuis le tableau ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Parameters")),", appuyez sur le bouton ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Add"))," :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"ajouter l'attribut start :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Opensearch name of the parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : start"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Name of the extension parameters"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : start"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Namespace of the extension parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : time"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Enable generation of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : False"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Limit number of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : -"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Full json path of the associated REGARDS attribute"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : properties.start_date"))))),Object(o.b)("li",{parentName:"ul"},"ajouter l'attribut end :",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Opensearch name of the parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : end"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Name of the extension parameters"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : end"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Namespace of the extension parameter"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : time"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Enable generation of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : False"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Limit number of possible values"))," ",Object(o.b)("em",{parentName:"li"},"[Optionnel]")," : -"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Full json path of the associated REGARDS attribute"))," ",Object(o.b)("em",{parentName:"li"},"[Obligatoire]")," : properties.stop_date")))),Object(o.b)("p",null,"Une fois votre configuration termin\xe9e, appuyez sur le bouton ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Create"))," et retrouvez votre protocole dans la liste des protocoles de recherche."),Object(o.b)("p",null,"En cliquant sur le bouton info, vous pourrez acc\xe9der au endpoint de recherche afin de v\xe9rifier le fonctionnement du protocole et de r\xe9cup\xe9rer le descripteur."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/6-catalog-consultation/protocols/protocol-info.png",alt:"protocol info",width:"800"})),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Pensez \xe0 rendre vos jeux de donn\xe9es disponibles depuis l'ext\xe9rieur en autorisant l'acc\xe8s aux jeux de donn\xe9es et objets pour le groupe public. Pour plus d'informations, r\xe9f\xe9rez-vous \xe0 la page ",Object(o.b)("a",{parentName:"p",href:"../data-organization/data-access-rights"},"Configure data access rights")))))}b.isMDXComponent=!0},2699:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.a.createElement(d,s(s({ref:t},l),{},{components:a})):n.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);