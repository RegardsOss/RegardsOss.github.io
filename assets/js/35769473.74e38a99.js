"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99253],{15680:(e,r,a)=>{a.d(r,{xA:()=>p,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),u=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},p=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,d=c["".concat(i,".").concat(m)]||c[m]||g[m]||o;return a?t.createElement(d,s(s({ref:r},p),{},{components:a})):t.createElement(d,s({ref:r},p))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52528:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=a(58168),n=(a(96540),a(15680));const o={id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},s=void 0,l={unversionedId:"user-documentation/crawler/crawler-opensearch",id:"user-documentation/crawler/crawler-opensearch",title:"Crawl data from opensearch web source",description:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch",source:"@site/docs/user-documentation/5-crawler/opensearch.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/opensearch/",permalink:"/docs/next/user-guide/crawler/configure-datasources/opensearch/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/opensearch.md",tags:[],version:"current",frontMatter:{id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},sidebar:"manual",previous:{title:"Crawl data from external database",permalink:"/docs/next/user-guide/crawler/configure-datasources/external-databases/"},next:{title:"Crawl data from OAIS internal datasource",permalink:"/docs/next/user-guide/crawler/configure-datasources/aips/"}},i={},u=[],p={toc:u},c="wrapper";function g(e){let{components:r,...a}=e;return(0,n.yg)(c,(0,t.A)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Avant de pouvoir configurer une source de donn\xe9es depuis une source Opensearch, vous devez obligatoirement avoir ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/user-guide/data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Depuis le menu ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Map data sources to internal models"))," et effectuez les actions suivantes :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Depuis l'\xe9cran ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Map data sources to internal models")),", cliquez sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Add")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Crawls data from an OpenSearch Web Source")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-opensearch.png",alt:"opensearch",width:"800"})),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Crawler configuration")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Crawler name"))," ",(0,n.yg)("em",{parentName:"li"},"[Obligatoire]"),", choisissez le nom de votre source de donn\xe9es."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Refresh rate"))," ",(0,n.yg)("em",{parentName:"li"},"[Obligatoire]"),", la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"OpenSearch descriptor URL"))," ",(0,n.yg)("em",{parentName:"li"},"[Obligatoire]"),", l'URL permettant d'acc\xe9der au descripteur de recherche"),(0,n.yg)("li",{parentName:"ul"},"Appuyez sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Next"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Query configuration")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Last update parameter"))," ",(0,n.yg)("em",{parentName:"li"},"[Optionnel]"),", s\xe9lectionnez si vous le souhaitez la derni\xe8re date de mise \xe0 jour des m\xe9tadonn\xe9es parmi les attributs du model"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Page size"))," ",(0,n.yg)("em",{parentName:"li"},"[Obligatoire]"),", limite le nombre maximal de donn\xe9es r\xe9cup\xe9r\xe9es, entre 1 et 1000"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"New filter"))," ",(0,n.yg)("em",{parentName:"li"},"[Optionnel]"),", ajoutez de nouveaux filtres pour restreindre les donn\xe9es r\xe9cup\xe9r\xe9es en cliquant sur le bouton ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"New filter")),", s\xe9lectionnez dans la liste d\xe9roulante les attributs du mod\xe8le le crit\xe8re de restriction, appuyez sur le bouton de cr\xe9ation du filtre et remplissez sa valeur. N'h\xe9sitez pas \xe0 appuyer sur le bouton ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Test Query"))," pour valider votre requ\xeate. Dans l'exemple suivant, toutes les donn\xe9es dont le label commence par la lettre A seront r\xe9cup\xe9r\xe9es :",(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-2-example.png",alt:"example",width:"800"}))),(0,n.yg)("li",{parentName:"ul"},"Appuyez sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Next"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Results configuration")),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Total results fields")),", s\xe9lectionne le nom de l'attribut opensearch contenant le nombre de r\xe9sultats"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Page size field"))," , s\xe9lectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets r\xe9cup\xe9r\xe9s"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Regards Model")),", le mod\xe8le utilis\xe9 pour faire correspondre les r\xe9sultats de la requ\xeate opensearch au catalogue. Renseignez les noms des champs \xe0 r\xe9cup\xe9rer en compl\xe9tant les attributs standards, communs \xe0 toutes les donn\xe9es, les fichiers associ\xe9s et les attributs dynamiques propres au mod\xe8le, par exemple :")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-3-example.png",alt:"example",width:"800"})),(0,n.yg)("p",null,"Appuyez sur le bouton ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Finish")),", Vous serez redirig\xe9 vers la liste des aspirations de donn\xe9es dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/user-guide/crawler/monitor-crawling/"},"Monitoring"),"."))}g.isMDXComponent=!0}}]);