"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69181],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},68681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=["components"],i={id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},l=void 0,u={unversionedId:"user-documentation/catalog-consultation/catalog-toponyms",id:"user-documentation/catalog-consultation/catalog-toponyms",title:"Toponyms server",description:"Qu'est-ce qu'un toponyme ?",source:"@site/docs/user-documentation/6-catalog-consultation/toponyms-server.md",sourceDirName:"user-documentation/6-catalog-consultation",slug:"/user-guide/catalog/toponyms/",permalink:"/fr/docs/user-guide/catalog/toponyms/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/6-catalog-consultation/toponyms-server.md",tags:[],version:"current",frontMatter:{id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},sidebar:"manual",previous:{title:"Use the catalog",permalink:"/fr/docs/user-guide/catalog/use/"},next:{title:"Interoperability protocols introduction",permalink:"/fr/docs/user-guide/catalog/protocols/introduction"}},p=[{value:"Qu&#39;est-ce qu&#39;un toponyme ?",id:"quest-ce-quun-toponyme-",children:[],level:2},{value:"Utilisation des toponymes dans REGARDS",id:"utilisation-des-toponymes-dans-regards",children:[],level:2},{value:"Ajout de nouveaux toponymes",id:"ajout-de-nouveaux-toponymes",children:[{value:"Par ligne de commande",id:"par-ligne-de-commande",children:[],level:3},{value:"A partir de l&#39;interface utilisateur",id:"a-partir-de-linterface-utilisateur",children:[],level:3}],level:2}],d={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"quest-ce-quun-toponyme-"},"Qu'est-ce qu'un toponyme ?"),(0,r.kt)("p",null,"Un toponyme est un nom permettant de qualifier un lieu repr\xe9sent\xe9 par une zone g\xe9ographique. Les toponymes peuvent \xeatre de tout type comme des pays, des continents, des r\xe9gions ou des lacs par exemple."),(0,r.kt)("h2",{id:"utilisation-des-toponymes-dans-regards"},"Utilisation des toponymes dans REGARDS"),(0,r.kt)("p",null,"Dans le but de faciliter les recherches g\xe9ographiques sur le catalogue de donn\xe9es, REGARDS met \xe0 disposition un serveur de toponymes. Ce serveur de toponymes, d\xe9ploy\xe9 au sein du microservice ",(0,r.kt)("inlineCode",{parentName:"p"},"access-instance"),",  fourni par d\xe9faut des toponymes pour l'ensemble des pays du monde en se basant sur des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es obtenues depuis ",(0,r.kt)("a",{parentName:"p",href:"https://hub.arcgis.com/"},"arcgis"),".\nCe serveur est utilis\xe9 par l'interface utilisateur, sur la partie de repr\xe9sentation g\xe9ographique des donn\xe9es, pour proposer un crit\xe8re de recherche par zone g\xe9ographique correspondant aux toponymes du serveur."),(0,r.kt)("h2",{id:"ajout-de-nouveaux-toponymes"},"Ajout de nouveaux toponymes"),(0,r.kt)("h3",{id:"par-ligne-de-commande"},"Par ligne de commande"),(0,r.kt)("p",null,"Il vous est possible d'ajouter tout type de toponymes dans la base de donn\xe9es associ\xe9e. Pour ce faire nous pr\xe9conisons l'utilisation de ",(0,r.kt)("a",{parentName:"p",href:"https://gdal.org/"},"gdal")," et plus pr\xe9cis\xe9ment ",(0,r.kt)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"ogr2ogr")," afin de faciliter l'insertion des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es de type shapefile ou geojson."),(0,r.kt)("p",null,"Les toponymes sont stock\xe9s dans la base de donn\xe9es associ\xe9e lors de l'installation de REGARDS au microservice d'instance dans le schema ",(0,r.kt)("inlineCode",{parentName:"p"},"accessinstance")," et dans la table ",(0,r.kt)("inlineCode",{parentName:"p"},"t_toponyms"),"."),(0,r.kt)("p",null,"Voici ci-dessous la commande \xe0 utiliser avec ogr2ogr pour pouvoir ajouter des donn\xe9es provenant d'un fichier shapefile.",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" \\\n-update -append \\\n-lco FID=id \\\n-lco SCHEMA=toponyms \\\n-skipfailures \\\n-nln accessinstance.t_toponyms \\\n"PG:host=<b><db_host> user=<db_user> password=<db_password> dbname=<db_name>" \\\n-lco GEOMETRY_NAME=geom \\\n-nlt GEOMETRY \\\n-sql "SELECT <label_field> AS label,  <label_fr_field> AS label_fr,  <owner_field> as copyright,  <unqiue_id_field> AS bid from <shapeFile>"  \\\n-lco PRECISION=no -nlt PROMOTE_TO_MULTI \\\n<shapeFile>.shp\n')),(0,r.kt)("p",null,"Vous devez remplacer dans cette commande les informations concernant :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"l'acc\xe8s \xe0 la base de donn\xe9es "),(0,r.kt)("li",{parentName:"ul"},"les propri\xe9t\xe9s \xe0 lire dans le fichier shapefile correspondant aux propri\xe9t\xe9s n\xe9cessaires pour la cr\xe9ation d'un toponyme"),(0,r.kt)("li",{parentName:"ul"},"le nom du fichier shapefile")),(0,r.kt)("p",null,"Les informations n\xe9cessaires pour ajouter des toponymes dans la base de donn\xe9es correspondent aux colonnes de la table ",(0,r.kt)("inlineCode",{parentName:"p"},"t_toponyms")," du schema ",(0,r.kt)("inlineCode",{parentName:"p"},"accessinstance")," de la base de donn\xe9es associ\xe9e au microservice ",(0,r.kt)("inlineCode",{parentName:"p"},"acccess-instance")," :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bid")," : Identifiant unique du toponyme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label")," : Nom anglais du toponyme. Il s'agit du label qui sera propos\xe9 \xe0 l'IHM lors de la recherche"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label_fr")," : Nom francais du toponyme."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copyright")," : Qui est le propri\xe9taire de l'information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," : ","[Optionel]"," Une description du toponyme."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"geom")," : La g\xe9om\xe9trie au format geo de postgis.")),(0,r.kt)("p",null,"Apr\xe8s avoir ajouter un ou plusieurs toponymes en base de donn\xe9es, vous pouvez interroger le serveur aux adresses :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recherche d'un toponyme : ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/{bid}")),(0,r.kt)("li",{parentName:"ul"},"Recherche des toponymes correspond \xe0 une recherche textuelle sur le nom : ",(0,r.kt)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>"))),(0,r.kt)("h3",{id:"a-partir-de-linterface-utilisateur"},"A partir de l'interface utilisateur"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Les toponymes g\xe9n\xe9r\xe9s pr\xe9c\xe9demment seront conserv\xe9s d\xe9finitivement en base de donn\xe9es. Vous avez \xe9galement la possibilit\xe9 d\u2019ajouter des toponymes temporaires directement \xe0 partir de l'interface IHM utilisateur."))),(0,r.kt)("p",null,"Avoir configur\xe9 une carte (voir ",(0,r.kt)("a",{parentName:"p",href:"../configuration#ajouter-des-cartes-%C3%A0-un-module-search-results"},"ajouter des cartes \xe0 un module search-results")," pour plus d'information), connectez-vous \xe0 l'interface utilisateur et acc\xe9dez \xe0 la vue carte depuis votre catalogue de donn\xe9es comme ci-dessous. "),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-toponyms.png",alt:"toponyms",width:"800"})),(0,r.kt)("p",null,"Glissez et d\xe9posez des fichiers sur la carte aux formats suivants shapefile ZIP, KML, KMZ et GeoJSON. L'emprise d\xe9finie dans le toponyme sera automatiquement zoom\xe9e et son nom s'affichera au dessus de la carte. Depuis celui-ci, vous aurez la possibilit\xe9 de fermer l'affichage du toponyme afin de r\xe9activer la vue par d\xe9faut. "),(0,r.kt)("p",null,"Pour consulter de nouveau votre toponyme, glissez et d\xe9posez le m\xeame fichier."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Attention, les fichiers ne doivent contenir qu\u2019une seule feature de type ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"POLYGON"))," ou ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"MULTIPOLYGON")),". Les autres types de g\xe9om\xe9tries ne sont pas prises en charge par REGARDS."))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Attention, si vous n'avez pas consult\xe9 le toponyme depuis plus de un mois, il sera automatiquement supprim\xe9."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemples de fichiers t\xe9l\xe9chargeables :")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json au format POLYGON")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {},\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                -1.8182373046875,\n                48.26491251331118\n              ],\n              [\n                -1.8058776855468748,\n                48.493857443054395\n              ],\n              [\n                -2.080535888671875,\n                48.66738490890204\n              ],\n              [\n                -2.406005859375,\n                48.50295743049266\n              ],\n              [\n                -2.415618896484375,\n                48.27405352192057\n              ],\n              [\n                -1.8182373046875,\n                48.26491251331118\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json au format MULTIPOLYGON")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "FeatureCollection",\n  "name": "n_tri_chat2014_iso_ht_01fort_s_086",\n  "crs": {\n    "type": "name",\n    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "properties": {},\n      "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [\n          [\n            [\n              [102.0, 2.0],\n              [103.0, 2.0],\n              [103.0, 3.0],\n              [102.0, 3.0],\n              [102.0, 2.0]\n            ]\n          ],\n          [\n            [\n              [100.0, 0.0],\n              [101.0, 0.0],\n              [101.0, 1.0],\n              [100.0, 1.0],\n              [100.0, 0.0]\n            ],\n            [\n              [100.2, 0.2],\n              [100.8, 0.2],\n              [100.8, 0.8],\n              [100.2, 0.8],\n              [100.2, 0.2]\n            ]\n          ]\n        ]\n      }\n    }\n  ]\n}\n')))}c.isMDXComponent=!0}}]);