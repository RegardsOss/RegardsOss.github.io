"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},s=void 0,l={unversionedId:"user-documentation/crawler/crawler-opensearch",id:"version-1.8.1/user-documentation/crawler/crawler-opensearch",title:"Crawl data from opensearch web source",description:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch",source:"@site/versioned_docs/version-1.8.1/user-documentation/5-crawler/opensearch.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/opensearch/",permalink:"/docs/1.8.1/user-guide/crawler/configure-datasources/opensearch/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.1/user-documentation/5-crawler/opensearch.md",tags:[],version:"1.8.1",frontMatter:{id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},sidebar:"manual",previous:{title:"Crawl data from external database",permalink:"/docs/1.8.1/user-guide/crawler/configure-datasources/external-databases/"},next:{title:"Crawl data from OAIS internal datasource",permalink:"/docs/1.8.1/user-guide/crawler/configure-datasources/aips/"}},i={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Avant de pouvoir configurer une source de donn\xe9es depuis une source Opensearch, vous devez obligatoirement avoir ",(0,n.kt)("a",{parentName:"p",href:"../../../data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Depuis le menu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Map data sources to internal models"))," et effectuez les actions suivantes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Depuis l'\xe9cran ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Map data sources to internal models")),", cliquez sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Add")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Crawls data from an OpenSearch Web Source")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-opensearch.png",alt:"opensearch",width:"800"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Crawler configuration")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Crawler name"))," ",(0,n.kt)("em",{parentName:"li"},"[Obligatoire]"),", choisissez le nom de votre source de donn\xe9es."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Refresh rate"))," ",(0,n.kt)("em",{parentName:"li"},"[Obligatoire]"),", la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"OpenSearch descriptor URL"))," ",(0,n.kt)("em",{parentName:"li"},"[Obligatoire]"),", l'URL permettant d'acc\xe9der au descripteur de recherche"),(0,n.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Next"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Query configuration")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Last update parameter"))," ",(0,n.kt)("em",{parentName:"li"},"[Optionnel]"),", s\xe9lectionnez si vous le souhaitez la derni\xe8re date de mise \xe0 jour des m\xe9tadonn\xe9es parmi les attributs du model"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Page size"))," ",(0,n.kt)("em",{parentName:"li"},"[Obligatoire]"),", limite le nombre maximal de donn\xe9es r\xe9cup\xe9r\xe9es, entre 1 et 1000"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"New filter"))," ",(0,n.kt)("em",{parentName:"li"},"[Optionnel]"),", ajoutez de nouveaux filtres pour restreindre les donn\xe9es r\xe9cup\xe9r\xe9es en cliquant sur le bouton ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"New filter")),", s\xe9lectionnez dans la liste d\xe9roulante les attributs du mod\xe8le le crit\xe8re de restriction, appuyez sur le bouton de cr\xe9ation du filtre et remplissez sa valeur. N'h\xe9sitez pas \xe0 appuyer sur le bouton ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Test Query"))," pour valider votre requ\xeate. Dans l'exemple suivant, toutes les donn\xe9es dont le label commence par la lettre A seront r\xe9cup\xe9r\xe9es :",(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-2-example.png",alt:"example",width:"800"}))),(0,n.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Next"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Results configuration")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Total results fields")),", s\xe9lectionne le nom de l'attribut opensearch contenant le nombre de r\xe9sultats"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Page size field"))," , s\xe9lectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets r\xe9cup\xe9r\xe9s"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Regards Model")),", le mod\xe8le utilis\xe9 pour faire correspondre les r\xe9sultats de la requ\xeate opensearch au catalogue. Renseignez les noms des champs \xe0 r\xe9cup\xe9rer en compl\xe9tant les attributs standards, communs \xe0 toutes les donn\xe9es, les fichiers associ\xe9s et les attributs dynamiques propres au mod\xe8le, par exemple :")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-3-example.png",alt:"example",width:"800"})),(0,n.kt)("p",null,"Appuyez sur le bouton ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Finish")),", Vous serez redirig\xe9 vers la liste des aspirations de donn\xe9es dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans ",(0,n.kt)("a",{parentName:"p",href:"../../monitor-crawling/"},"Monitoring"),"."))}m.isMDXComponent=!0}}]);