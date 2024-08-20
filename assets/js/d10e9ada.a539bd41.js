"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66212],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={id:"crawler-aips",title:"Crawl data from OAIS internal datasource",slug:"/user-guide/crawler/configure-datasources/aips/"},o=void 0,i={unversionedId:"user-documentation/crawler/crawler-aips",id:"version-1.15/user-documentation/crawler/crawler-aips",title:"Crawl data from OAIS internal datasource",description:"Peupler le catalogue avec des donn\xe9es interne \xe0 REGARDS depuis le r\xe9f\xe9rentiel de produits OAIS.",source:"@site/versioned_docs/version-1.15/user-documentation/5-crawler/aip.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/aips/",permalink:"/docs/user-guide/crawler/configure-datasources/aips/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/user-documentation/5-crawler/aip.md",tags:[],version:"1.15",frontMatter:{id:"crawler-aips",title:"Crawl data from OAIS internal datasource",slug:"/user-guide/crawler/configure-datasources/aips/"},sidebar:"manual",previous:{title:"Crawl data from opensearch web source",permalink:"/docs/user-guide/crawler/configure-datasources/opensearch/"},next:{title:"Crawl data from GeoJson Feature internal datasource",permalink:"/docs/user-guide/crawler/configure-datasources/fem/"}},l={},u=[],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Peupler le catalogue avec des donn\xe9es interne \xe0 REGARDS depuis le r\xe9f\xe9rentiel de produits OAIS.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Vous devez d\xe9j\xe0 avoir :"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"cr\xe9\xe9 des produits, r\xe9f\xe9rez-vous \xe0 la section ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-guide/import-data/oais-files/introduction/"},"Import data - OAIS files")," si ce n'est d\xe9j\xe0 fait."),(0,n.kt)("li",{parentName:"ul"},"cr\xe9\xe9 ",(0,n.kt)("a",{parentName:"li",href:"/docs/user-guide/data-organization/models/"},"un mod\xe8le de donn\xe9es")," commun de type ",(0,n.kt)("em",{parentName:"li"},"Data")," pour r\xe9f\xe9rencer vos aips"))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Depuis le menu ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Map data sources to internal models"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cliquez sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Add"))," et s\xe9lectionnez l'option ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"crawling GeoJSON SIPs")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips.png",alt:"aips",width:"800"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sur la page ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"AIPs datasource creation")),", compl\xe9tez les champs suivants :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Name"))," nom de la source de donn\xe9es,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Refresh rate (in second)"))," d\xe9termine la dur\xe9e entre deux scans de la datasource. Cela peut s'av\xe9rer utile lorsque vous ajoutez fr\xe9quemment des aips pour les r\xe9f\xe9rencer dans le catalogue,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Data model"))," mod\xe8le de donn\xe9e utilis\xe9 pour aspirer les AIPs,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Sum of AIP files size"))," attribut du mod\xe8le de donn\xe9es dans lequel la somme des fichiers AIPs sera contenue,"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Tag list added to all data crawled"))," correspond aux tags qui seront ajout\xe9s \xe0 vos donn\xe9es aspir\xe9es. Pour rappel, les tags aussi appel\xe9s mots-cl\xe9s sont des informations suppl\xe9mentaires permettant de regrouper des donn\xe9es par th\xe9matique. Vous pourrez ainsi retrouver plus facilement les donn\xe9es dans le catalogue \xe0 l'aide des fonctions de tri."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Only crawl data containing these tags"))," seules les donn\xe9es poss\xe9dant ces tags seront aspir\xe9es. /!\\ Faites attention, si vous ne pr\xe9cisez pas de tags, toutes les donn\xe9es seront aspir\xe9es."),(0,n.kt)("li",{parentName:"ul"},"Pr\xe9cisez ensuite la concordance entre les attributs de REGARDS et ceux du mod\xe8le d'aspiration. Il y a deux types d'attributs les statiques, communs \xe0 toutes les donn\xe9es de REGARDS et les attributs sp\xe9cifiques \xe0 votre mod\xe8le. Pour chacun des attributs, vous devez indiquer le chemin dans le fichier JSON de l'AIP pour r\xe9cup\xe9rer sa valeur. Par exemple :")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips-example.png",alt:"mapping example",width:"1000"})),(0,n.kt)("p",null,"extrait du fichier AIP"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "content": {\n        "id": 956,\n        "aipId": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n        "state": "STORED",\n        "aip": {\n            "providerId": "test-2241-data-01",\n            "sipId": "URN:SIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "version": 1,\n            "ipType": "DATA",\n            "id": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "geometry": null,\n            "normalizedGeometry": null,\n            "properties": {\n                "contentInformations": [...]\n                "descriptiveInformation": {\n                    "creationdate": "2015-10-20T16:21:15Z",\n                    "dataSetType": "chris_harvest_simple_model",\n                    "label": "Simple Model Sip 01",\n                    "doubleValue": 3.141592655,\n                    "longValue": 20100\n                }\n            },\n            "type": "Feature"\n        },\n        [...]\n    }\n    "links": []\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Lorsque vous avez compl\xe9t\xe9 tous les champs, appuyez sur ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Save"))),(0,n.kt)("li",{parentName:"ul"},"V\xe9rifiez que votre source de donn\xe9es se trouve dans la liste"),(0,n.kt)("li",{parentName:"ul"},"Rendez-vous ensuite dans la section ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},(0,n.kt)("a",{parentName:"em",href:"/docs/user-guide/crawler/monitor-crawling/"},"Monitor data crawling")))," pour suivre l'aspiration de vos AIPs.")))}c.isMDXComponent=!0}}]);