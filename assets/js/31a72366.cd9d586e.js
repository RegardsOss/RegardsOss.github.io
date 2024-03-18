"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[80930],{15680:(e,r,a)=>{a.d(r,{xA:()=>d,yg:()=>g});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=t.createContext({}),u=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},d=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return a?t.createElement(g,o(o({ref:r},d),{},{components:a})):t.createElement(g,o({ref:r},d))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32827:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=a(58168),n=(a(96540),a(15680));const s={id:"crawler-aips",title:"Crawl data from OAIS internal datasource",slug:"/user-guide/crawler/configure-datasources/aips/"},o=void 0,i={unversionedId:"user-documentation/crawler/crawler-aips",id:"version-1.13.0/user-documentation/crawler/crawler-aips",title:"Crawl data from OAIS internal datasource",description:"Peupler le catalogue avec des donn\xe9es interne \xe0 REGARDS depuis le r\xe9f\xe9rentiel de produits OAIS.",source:"@site/versioned_docs/version-1.13.0/user-documentation/5-crawler/aip.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/aips/",permalink:"/docs/1.13.0/user-guide/crawler/configure-datasources/aips/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/user-documentation/5-crawler/aip.md",tags:[],version:"1.13.0",frontMatter:{id:"crawler-aips",title:"Crawl data from OAIS internal datasource",slug:"/user-guide/crawler/configure-datasources/aips/"},sidebar:"manual",previous:{title:"Crawl data from opensearch web source",permalink:"/docs/1.13.0/user-guide/crawler/configure-datasources/opensearch/"},next:{title:"Crawl data from GeoJson Feature internal datasource",permalink:"/docs/1.13.0/user-guide/crawler/configure-datasources/fem/"}},l={},u=[],d={toc:u},p="wrapper";function c(e){let{components:r,...a}=e;return(0,n.yg)(p,(0,t.A)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Peupler le catalogue avec des donn\xe9es interne \xe0 REGARDS depuis le r\xe9f\xe9rentiel de produits OAIS.")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Vous devez d\xe9j\xe0 avoir :"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"cr\xe9\xe9 des produits, r\xe9f\xe9rez-vous \xe0 la section ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/user-guide/import-data/oais-files/introduction/"},"Import data - OAIS files")," si ce n'est d\xe9j\xe0 fait."),(0,n.yg)("li",{parentName:"ul"},"cr\xe9\xe9 ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.13.0/user-guide/data-organization/models/"},"un mod\xe8le de donn\xe9es")," commun de type ",(0,n.yg)("em",{parentName:"li"},"Data")," pour r\xe9f\xe9rencer vos aips"))),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Depuis le menu ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Add data"))," et la carte ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"Map data sources to internal models"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Cliquez sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Add"))," et s\xe9lectionnez l'option ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"crawling GeoJSON SIPs")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips.png",alt:"aips",width:"800"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Sur la page ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"AIPs datasource creation")),", compl\xe9tez les champs suivants :",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Name"))," nom de la source de donn\xe9es,"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Refresh rate (in second)"))," d\xe9termine la dur\xe9e entre deux scans de la datasource. Cela peut s'av\xe9rer utile lorsque vous ajoutez fr\xe9quemment des aips pour les r\xe9f\xe9rencer dans le catalogue,"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Data model"))," mod\xe8le de donn\xe9e utilis\xe9 pour aspirer les AIPs,"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Sum of AIP files size"))," attribut du mod\xe8le de donn\xe9es dans lequel la somme des fichiers AIPs sera contenue,"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Tag list added to all data crawled"))," correspond aux tags qui seront ajout\xe9s \xe0 vos donn\xe9es aspir\xe9es. Pour rappel, les tags aussi appel\xe9s mots-cl\xe9s sont des informations suppl\xe9mentaires permettant de regrouper des donn\xe9es par th\xe9matique. Vous pourrez ainsi retrouver plus facilement les donn\xe9es dans le catalogue \xe0 l'aide des fonctions de tri."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Only crawl data containing these tags"))," seules les donn\xe9es poss\xe9dant ces tags seront aspir\xe9es. /!\\ Faites attention, si vous ne pr\xe9cisez pas de tags, toutes les donn\xe9es seront aspir\xe9es."),(0,n.yg)("li",{parentName:"ul"},"Pr\xe9cisez ensuite la concordance entre les attributs de REGARDS et ceux du mod\xe8le d'aspiration. Il y a deux types d'attributs les statiques, communs \xe0 toutes les donn\xe9es de REGARDS et les attributs sp\xe9cifiques \xe0 votre mod\xe8le. Pour chacun des attributs, vous devez indiquer le chemin dans le fichier JSON de l'AIP pour r\xe9cup\xe9rer sa valeur. Par exemple :")))),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-aips-example.png",alt:"mapping example",width:"1000"})),(0,n.yg)("p",null,"extrait du fichier AIP"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "content": {\n        "id": 956,\n        "aipId": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n        "state": "STORED",\n        "aip": {\n            "providerId": "test-2241-data-01",\n            "sipId": "URN:SIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "version": 1,\n            "ipType": "DATA",\n            "id": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "geometry": null,\n            "normalizedGeometry": null,\n            "properties": {\n                "contentInformations": [...]\n                "descriptiveInformation": {\n                    "creationdate": "2015-10-20T16:21:15Z",\n                    "dataSetType": "chris_harvest_simple_model",\n                    "label": "Simple Model Sip 01",\n                    "doubleValue": 3.141592655,\n                    "longValue": 20100\n                }\n            },\n            "type": "Feature"\n        },\n        [...]\n    }\n    "links": []\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Lorsque vous avez compl\xe9t\xe9 tous les champs, appuyez sur ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"Save"))),(0,n.yg)("li",{parentName:"ul"},"V\xe9rifiez que votre source de donn\xe9es se trouve dans la liste"),(0,n.yg)("li",{parentName:"ul"},"Rendez-vous ensuite dans la section ",(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},(0,n.yg)("a",{parentName:"em",href:"/docs/1.13.0/user-guide/crawler/monitor-crawling/"},"Monitor data crawling")))," pour suivre l'aspiration de vos AIPs.")))}c.isMDXComponent=!0}}]);