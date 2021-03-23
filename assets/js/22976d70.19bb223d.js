(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(2704)),s={id:"glossary",title:"Glossary",slug:"/user-guide/glossary/"},i={unversionedId:"user-documentation/0-overview/glossary",id:"user-documentation/0-overview/glossary",isDocsHomePage:!1,title:"Glossary",description:"Familiarisez-vous avec le vocabulaire utilis\xe9 dans REGARDS",source:"@site/docs/user-documentation/0-overview/glossary.md",slug:"/user-guide/glossary/",permalink:"/docs/user-guide/glossary/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/0-overview/glossary.md",version:"current",sidebar:"manual",previous:{title:"Overview",permalink:"/docs/user-guide/"},next:{title:"Introduction",permalink:"/docs/user-guide/global-configuration/introduction/"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Familiarisez-vous avec le vocabulaire utilis\xe9 dans REGARDS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"AIP"))," (",Object(o.b)("em",{parentName:"li"},"Archival Information Package"),") : document suivant les recommandations OAIS (",Object(o.b)("em",{parentName:"li"},"Open Archival Information System"),") utilis\xe9 pour r\xe9f\xe9rencer des donn\xe9es, des m\xe9tadonn\xe9es et des fichiers associ\xe9s afin de les p\xe9renniser \xe0 long terme. Il ajoute \xe9galement des informations assurant la tra\xe7abilit\xe9 et l'historique des donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Cha\xeene d\u2019acquisition"))," : configuration permettant de g\xe9n\xe9rer des SIPs \xe0 partir de fichiers scann\xe9s. Ils seront ensuite transmis \xe0 une cha\xeene d'ingestion pour leur transformation en AIPs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Cha\xeene d\u2019ingestion"))," : configuration permettent d'ing\xe9rer des SIPs et de les transformer en AIPs pour un stockage \xe0 long terme. Toutes les m\xe9tadonn\xe9es et fichiers associ\xe9s sont \xe9galement sauvegard\xe9s pour assurer la p\xe9rennit\xe9 des donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Catalogue de donn\xe9es"))," : inventaire de donn\xe9es utilis\xe9 pour consulter et d\xe9crire un ensemble de donn\xe9es et de m\xe9tadonn\xe9es, de mani\xe8re structur\xe9e au travers de mod\xe8les, et organis\xe9e gr\xe2ce aux jeux et collections. Il contiendra toutes les donn\xe9es aspir\xe9es depuis diff\xe9rentes sources internes ou externes \xe0 REGARDS."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Collection de donn\xe9es"))," : regroupement de donn\xe9es \xe9troitement li\xe9."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Crawling"))," : aspiration de donn\xe9es depuis des sources internes ou externes \xe0 REGARDS afin de peupler le catalogue de donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Feature"))," : donn\xe9e interne \xe0 REGARDS au format GeoJSON. Elle est g\xe9r\xe9e par le Feature Manager (FEM)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Format OAIS"))," : ensemble de recommandations fourni par le ",Object(o.b)("em",{parentName:"li"},"Consultative Committee for Space Data Systems")," (CCSDS) proposant un guide dans\nla mise en place d'un syst\xe8me ouvert d'archivage d'information (OAIS)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Jeu de donn\xe9es"))," : regroupement de donn\xe9es issues d'une m\xeame source de donn\xe9es. Il propose en plus de la ",Object(o.b)("em",{parentName:"li"},"Collection de donn\xe9es"),", une restriction d'acc\xe8s par groupe utilisateur."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"M\xe9tadonn\xe9es"))," : informations d\xe9crivant la donn\xe9e."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Mod\xe8le de donn\xe9es"))," : repr\xe9sentation conceptuelle permettant de standardiser des donn\xe9es."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Plugin"))," : composant logiciel permettant d'obtenir des fonctionnalit\xe9s suppl\xe9mentaires."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Produit"))," : d\xe9signe l'ensemble form\xe9 par le SIP et l'AIP."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"SIP"))," (",Object(o.b)("em",{parentName:"li"},"Submission Information Package"),") : document suivant les recommandations OAIS (",Object(o.b)("em",{parentName:"li"},"Open Archival Information System"),"), contenant des donn\xe9es, des m\xe9tadonn\xe9es et \xe9ventuellement des fichiers de r\xe9f\xe9rencement. Il est envoy\xe9 au syst\xe8me de stockage par le producteur de donn\xe9es afin qu'il soit transform\xe9 en AIP pour assurer sa p\xe9rennisation.")))}u.isMDXComponent=!0}}]);