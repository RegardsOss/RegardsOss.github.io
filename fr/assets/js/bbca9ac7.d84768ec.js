(window.webpackJsonp=window.webpackJsonp||[]).push([[1911],{1983:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),s=(a(0),a(2704)),o={id:"crawler-aips",title:"Crawl data from AIPs",slug:"/user-guide/crawler/configure-datasources/aips/"},i={unversionedId:"user-documentation/5-crawler/crawler-aips",id:"user-documentation/5-crawler/crawler-aips",isDocsHomePage:!1,title:"Crawl data from AIPs",description:"R\xe9f\xe9rencez des aips dans le catalogue de donn\xe9es.",source:"@site/docs/user-documentation/5-crawler/aip.md",slug:"/user-guide/crawler/configure-datasources/aips/",permalink:"/fr/docs/user-guide/crawler/configure-datasources/aips/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/aip.md",version:"current",sidebar:"manual",previous:{title:"Crawl data opensearch web source",permalink:"/fr/docs/user-guide/crawler/configure-datasources/opensearch/"},next:{title:"Craw features from FEM",permalink:"/fr/docs/user-guide/crawler/configure-datasources/fem/"}},c=[],l={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"R\xe9f\xe9rencez des aips dans le catalogue de donn\xe9es.")),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Vous devez d\xe9j\xe0 avoir :"),Object(s.b)("ul",{parentName:"div"},Object(s.b)("li",{parentName:"ul"},"cr\xe9\xe9 des produits, r\xe9f\xe9rez-vous \xe0 la section ",Object(s.b)("a",{parentName:"li",href:"../../../import-data/oais-files/introduction/"},"Import data - OAIS files")," si ce n'est d\xe9j\xe0 fait."),Object(s.b)("li",{parentName:"ul"},"cr\xe9\xe9 ",Object(s.b)("a",{parentName:"li",href:"../../../data-organization/models/"},"un mod\xe8le de donn\xe9es")," commun de type ",Object(s.b)("em",{parentName:"li"},"Data")," pour r\xe9f\xe9rencer vos aips")))),Object(s.b)("hr",null),Object(s.b)("p",null,"Depuis le menu ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Add data"))," et la carte ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Crawling")),", cliquez sur ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"Map data sources to internal models"))),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Cliquez sur ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Add"))," et s\xe9lectionnez l'option ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"crawling GeoJSON SIPs")))),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource-aips.png",alt:"aips",width:"800"})),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Sur la page ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"AIPs datasource creation")),", compl\xe9tez les champs suivants :",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Name"))," nom de la source de donn\xe9es,"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Refresh rate (in second)"))," d\xe9termine la dur\xe9e entre deux scans de la datasource. Cela peut s'av\xe9rer utile lorsque vous ajoutez fr\xe9quemment des aips pour les r\xe9f\xe9rencer dans le catalogue,"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Data model"))," mod\xe8le de donn\xe9e utilis\xe9 pour aspirer les AIPs,"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Sum of AIP files size"))," attribut du mod\xe8le de donn\xe9es dans lequel la somme des fichiers AIPs sera contenue,"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Tag list added to all data crawled"))," correspond aux tags qui seront ajout\xe9s \xe0 vos donn\xe9es aspir\xe9es. Pour rappel, les tags aussi appel\xe9s mots-cl\xe9s sont des informations suppl\xe9mentaires permettant de regrouper des donn\xe9es par th\xe9matique. Vous pourrez ainsi retrouver plus facilement les donn\xe9es dans le catalogue \xe0 l'aide des fonctions de tri."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Only crawl data containing these tags"))," seules les donn\xe9es poss\xe9dant ces tags seront aspir\xe9es. /!\\ Faites attention, si vous ne pr\xe9cisez pas de tags, toutes les donn\xe9es seront aspir\xe9es."),Object(s.b)("li",{parentName:"ul"},"Pr\xe9cisez ensuite la concordance entre les attributs de REGARDS et ceux du mod\xe8le d'aspiration. Il y a deux types d'attributs les statiques, communs \xe0 toutes les donn\xe9es de REGARDS et les attributs sp\xe9cifiques \xe0 votre mod\xe8le. Pour chacun des attributs, vous devez indiquer le chemin dans le fichier JSON de l'AIP pour r\xe9cup\xe9rer sa valeur. Par exemple :")))),Object(s.b)("div",{align:"center"},Object(s.b)("img",{src:"/images/user-documentation/5-crawler/crawler-add-datasource-aips-example.png",alt:"mapping example",width:"1000"})),Object(s.b)("p",null,"extrait du fichier AIP"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-json"},'{\n    "content": {\n        "id": 956,\n        "aipId": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n        "state": "STORED",\n        "aip": {\n            "providerId": "test-2241-data-01",\n            "sipId": "URN:SIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "version": 1,\n            "ipType": "DATA",\n            "id": "URN:AIP:DATA:example:4655fa2b-4070-3836-8e63-b136cadbeff9:V1",\n            "geometry": null,\n            "normalizedGeometry": null,\n            "properties": {\n                "contentInformations": [...]\n                "descriptiveInformation": {\n                    "creationdate": "2015-10-20T16:21:15Z",\n                    "dataSetType": "chris_harvest_simple_model",\n                    "label": "Simple Model Sip 01",\n                    "doubleValue": 3.141592655,\n                    "longValue": 20100\n                }\n            },\n            "type": "Feature"\n        },\n        [...]\n    }\n    "links": []\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Lorsque vous avez compl\xe9t\xe9 tous les champs, appuyez sur ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},"Save"))),Object(s.b)("li",{parentName:"ul"},"V\xe9rifiez que votre source de donn\xe9es se trouve dans la liste"),Object(s.b)("li",{parentName:"ul"},"Rendez-vous ensuite dans la section ",Object(s.b)("strong",{parentName:"li"},Object(s.b)("em",{parentName:"strong"},Object(s.b)("a",{parentName:"em",href:"../../monitor-crawling/"},"Monitor data crawling")))," pour suivre l'aspiration de vos AIPs.")))}u.isMDXComponent=!0},2704:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);