"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[44779],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},i=void 0,u={unversionedId:"user-documentation/crawler/crawler-opensearch",id:"user-documentation/crawler/crawler-opensearch",isDocsHomePage:!1,title:"Crawl data from opensearch web source",description:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch",source:"@site/docs/user-documentation/5-crawler/opensearch.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/opensearch/",permalink:"/fr/docs/user-guide/crawler/configure-datasources/opensearch/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/opensearch.md",tags:[],version:"current",frontMatter:{id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},sidebar:"manual",previous:{title:"Crawl data from external database",permalink:"/fr/docs/user-guide/crawler/configure-datasources/external-databases/"},next:{title:"Crawl data from OAIS internal datasource",permalink:"/fr/docs/user-guide/crawler/configure-datasources/aips/"}},p=[],c={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Avant de pouvoir configurer une source de donn\xe9es depuis une source Opensearch, vous devez obligatoirement avoir ",(0,o.kt)("a",{parentName:"p",href:"../../../data-organization/models/"},"cr\xe9\xe9 un mod\xe8le de donn\xe9es")," de type ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Data")),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Depuis le menu ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Map data sources to internal models"))," et effectuez les actions suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Depuis l'\xe9cran ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Map data sources to internal models")),", cliquez sur ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Add")))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S\xe9lectionnez l'option ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Crawls data from an OpenSearch Web Source")))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-opensearch.png",alt:"opensearch",width:"800"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Crawler configuration")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Crawler name"))," ",(0,o.kt)("em",{parentName:"li"},"[Obligatoire]"),", choisissez le nom de votre source de donn\xe9es."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Refresh rate"))," ",(0,o.kt)("em",{parentName:"li"},"[Obligatoire]"),", la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"OpenSearch descriptor URL"))," ",(0,o.kt)("em",{parentName:"li"},"[Obligatoire]"),", l'URL permettant d'acc\xe9der au descripteur de recherche"),(0,o.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Next"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Query configuration")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Last update parameter"))," ",(0,o.kt)("em",{parentName:"li"},"[Optionnel]"),", s\xe9lectionnez si vous le souhaitez la derni\xe8re date de mise \xe0 jour des m\xe9tadonn\xe9es parmi les attributs du model"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Page size"))," ",(0,o.kt)("em",{parentName:"li"},"[Obligatoire]"),", limite le nombre maximal de donn\xe9es r\xe9cup\xe9r\xe9es, entre 1 et 1000"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"New filter"))," ",(0,o.kt)("em",{parentName:"li"},"[Optionnel]"),", ajoutez de nouveaux filtres pour restreindre les donn\xe9es r\xe9cup\xe9r\xe9es en cliquant sur le bouton ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"New filter")),", s\xe9lectionnez dans la liste d\xe9roulante les attributs du mod\xe8le le crit\xe8re de restriction, appuyez sur le bouton de cr\xe9ation du filtre et remplissez sa valeur. N'h\xe9sitez pas \xe0 appuyer sur le bouton ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Test Query"))," pour valider votre requ\xeate. Dans l'exemple suivant, toutes les donn\xe9es dont le label commence par la lettre A seront r\xe9cup\xe9r\xe9es :",(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-2-example.png",alt:"example",width:"800"}))),(0,o.kt)("li",{parentName:"ul"},"Appuyez sur ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Next"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Results configuration")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Total results fields")),", s\xe9lectionne le nom de l'attribut opensearch contenant le nombre de r\xe9sultats"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Page size field"))," , s\xe9lectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets r\xe9cup\xe9r\xe9s"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Regards Model")),", le mod\xe8le utilis\xe9 pour faire correspondre les r\xe9sultats de la requ\xeate opensearch au catalogue. Renseignez les noms des champs \xe0 r\xe9cup\xe9rer en compl\xe9tant les attributs standards, communs \xe0 toutes les donn\xe9es, les fichiers associ\xe9s et les attributs dynamiques propres au mod\xe8le, par exemple :")))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-3-example.png",alt:"example",width:"800"})),(0,o.kt)("p",null,"Appuyez sur le bouton ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Finish")),", Vous serez redirig\xe9 vers la liste des aspirations de donn\xe9es dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans ",(0,o.kt)("a",{parentName:"p",href:"../../monitor-crawling/"},"Monitoring"),"."))}m.isMDXComponent=!0}}]);