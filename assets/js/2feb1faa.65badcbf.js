"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[72413],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=t(58168),a=(t(96540),t(15680));const r={id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},s=void 0,i={unversionedId:"user-documentation/catalog-consultation/catalog-toponyms",id:"version-1.13.0/user-documentation/catalog-consultation/catalog-toponyms",title:"Toponyms server",description:"Qu'est-ce qu'un toponyme ?",source:"@site/versioned_docs/version-1.13.0/user-documentation/6-catalog-consultation/toponyms-server.md",sourceDirName:"user-documentation/6-catalog-consultation",slug:"/user-guide/catalog/toponyms/",permalink:"/docs/1.13.0/user-guide/catalog/toponyms/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/user-documentation/6-catalog-consultation/toponyms-server.md",tags:[],version:"1.13.0",frontMatter:{id:"catalog-toponyms",title:"Toponyms server",slug:"/user-guide/catalog/toponyms/"},sidebar:"manual",previous:{title:"Use the catalog",permalink:"/docs/1.13.0/user-guide/catalog/use/"},next:{title:"Interoperability protocols introduction",permalink:"/docs/1.13.0/user-guide/catalog/protocols/introduction"}},l={},u=[{value:"Qu&#39;est-ce qu&#39;un toponyme ?",id:"quest-ce-quun-toponyme-",level:2},{value:"Utilisation des toponymes dans REGARDS",id:"utilisation-des-toponymes-dans-regards",level:2},{value:"Ajout de nouveaux toponymes",id:"ajout-de-nouveaux-toponymes",level:2},{value:"Par ligne de commande",id:"par-ligne-de-commande",level:3},{value:"A partir de l&#39;interface utilisateur",id:"a-partir-de-linterface-utilisateur",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"quest-ce-quun-toponyme-"},"Qu'est-ce qu'un toponyme ?"),(0,a.yg)("p",null,"Un toponyme est un nom permettant de qualifier un lieu repr\xe9sent\xe9 par une zone g\xe9ographique. Les toponymes peuvent \xeatre de tout type comme des pays, des continents, des r\xe9gions ou des lacs par exemple."),(0,a.yg)("h2",{id:"utilisation-des-toponymes-dans-regards"},"Utilisation des toponymes dans REGARDS"),(0,a.yg)("p",null,"Dans le but de faciliter les recherches g\xe9ographiques sur le catalogue de donn\xe9es, REGARDS met \xe0 disposition un serveur de toponymes. Ce serveur de toponymes, d\xe9ploy\xe9 au sein du microservice ",(0,a.yg)("inlineCode",{parentName:"p"},"access-instance"),",  fourni par d\xe9faut des toponymes pour l'ensemble des pays du monde en se basant sur des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es obtenues depuis ",(0,a.yg)("a",{parentName:"p",href:"https://hub.arcgis.com/"},"arcgis"),".\nCe serveur est utilis\xe9 par l'interface utilisateur, sur la partie de repr\xe9sentation g\xe9ographique des donn\xe9es, pour proposer un crit\xe8re de recherche par zone g\xe9ographique correspondant aux toponymes du serveur."),(0,a.yg)("h2",{id:"ajout-de-nouveaux-toponymes"},"Ajout de nouveaux toponymes"),(0,a.yg)("h3",{id:"par-ligne-de-commande"},"Par ligne de commande"),(0,a.yg)("p",null,"Il vous est possible d'ajouter tout type de toponymes dans la base de donn\xe9es associ\xe9e. Pour ce faire nous pr\xe9conisons l'utilisation de ",(0,a.yg)("a",{parentName:"p",href:"https://gdal.org/"},"gdal")," et plus pr\xe9cis\xe9ment ",(0,a.yg)("a",{parentName:"p",href:"https://gdal.org/programs/ogr2ogr.html"},"ogr2ogr")," afin de faciliter l'insertion des donn\xe9es g\xe9or\xe9f\xe9renc\xe9es de type shapefile ou geojson."),(0,a.yg)("p",null,"Les toponymes sont stock\xe9s dans la base de donn\xe9es associ\xe9e lors de l'installation de REGARDS au microservice d'instance dans le schema ",(0,a.yg)("inlineCode",{parentName:"p"},"accessinstance")," et dans la table ",(0,a.yg)("inlineCode",{parentName:"p"},"t_toponyms"),"."),(0,a.yg)("p",null,"Voici ci-dessous la commande \xe0 utiliser avec ogr2ogr pour pouvoir ajouter des donn\xe9es provenant d'un fichier shapefile.",(0,a.yg)("br",null)),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'ogr2ogr -f "PostgreSQL" \\\n-update -append \\\n-lco FID=id \\\n-lco SCHEMA=toponyms \\\n-skipfailures \\\n-nln accessinstance.t_toponyms \\\n"PG:host=<b><db_host> user=<db_user> password=<db_password> dbname=<db_name>" \\\n-lco GEOMETRY_NAME=geom \\\n-nlt GEOMETRY \\\n-sql "SELECT <label_field> AS label,  <label_fr_field> AS label_fr,  <owner_field> as copyright,  <unqiue_id_field> AS bid from <shapeFile>"  \\\n-lco PRECISION=no -nlt PROMOTE_TO_MULTI \\\n<shapeFile>.shp\n')),(0,a.yg)("p",null,"Vous devez remplacer dans cette commande les informations concernant :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"l'acc\xe8s \xe0 la base de donn\xe9es "),(0,a.yg)("li",{parentName:"ul"},"les propri\xe9t\xe9s \xe0 lire dans le fichier shapefile correspondant aux propri\xe9t\xe9s n\xe9cessaires pour la cr\xe9ation d'un toponyme"),(0,a.yg)("li",{parentName:"ul"},"le nom du fichier shapefile")),(0,a.yg)("p",null,"Les informations n\xe9cessaires pour ajouter des toponymes dans la base de donn\xe9es correspondent aux colonnes de la table ",(0,a.yg)("inlineCode",{parentName:"p"},"t_toponyms")," du schema ",(0,a.yg)("inlineCode",{parentName:"p"},"accessinstance")," de la base de donn\xe9es associ\xe9e au microservice ",(0,a.yg)("inlineCode",{parentName:"p"},"acccess-instance")," :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bid")," : Identifiant unique du toponyme"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"label")," : Nom anglais du toponyme. Il s'agit du label qui sera propos\xe9 \xe0 l'IHM lors de la recherche"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"label_fr")," : Nom francais du toponyme."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"copyright")," : Qui est le propri\xe9taire de l'information."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"description")," : ","[Optionel]"," Une description du toponyme."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"geom")," : La g\xe9om\xe9trie au format geo de postgis.")),(0,a.yg)("p",null,"Apr\xe8s avoir ajouter un ou plusieurs toponymes en base de donn\xe9es, vous pouvez interroger le serveur aux adresses :"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Recherche d'un toponyme : ",(0,a.yg)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/{bid}")),(0,a.yg)("li",{parentName:"ul"},"Recherche des toponymes correspond \xe0 une recherche textuelle sur le nom : ",(0,a.yg)("inlineCode",{parentName:"li"},"http://<host>/api/v1/access-instance/toponyms/search?partialLabel=<label to search>"))),(0,a.yg)("h3",{id:"a-partir-de-linterface-utilisateur"},"A partir de l'interface utilisateur"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Les toponymes g\xe9n\xe9r\xe9s pr\xe9c\xe9demment seront conserv\xe9s d\xe9finitivement en base de donn\xe9es. Vous avez \xe9galement la possibilit\xe9 d\u2019ajouter des toponymes temporaires directement \xe0 partir de l'interface IHM utilisateur.")),(0,a.yg)("p",null,"Avoir configur\xe9 une carte (voir ",(0,a.yg)("a",{parentName:"p",href:"configuration#ajouter-des-cartes-%C3%A0-un-module-search-results"},"ajouter des cartes \xe0 un module search-results")," pour plus d'information.md), connectez-vous \xe0 l'interface utilisateur et acc\xe9dez \xe0 la vue carte depuis votre catalogue de donn\xe9es comme ci-dessous. "),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user/catalog-toponyms.png",alt:"toponyms",width:"800"})),(0,a.yg)("p",null,"Glissez et d\xe9posez des fichiers sur la carte aux formats suivants shapefile ZIP, KML, KMZ et GeoJSON. L'emprise d\xe9finie dans le toponyme sera automatiquement zoom\xe9e et son nom s'affichera au dessus de la carte. Depuis celui-ci, vous aurez la possibilit\xe9 de fermer l'affichage du toponyme afin de r\xe9activer la vue par d\xe9faut. "),(0,a.yg)("p",null,"Pour consulter de nouveau votre toponyme, glissez et d\xe9posez le m\xeame fichier."),(0,a.yg)("admonition",{type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"Attention, les fichiers ne doivent contenir qu\u2019une seule feature de type ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"POLYGON"))," ou ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"MULTIPOLYGON")),". Les autres types de g\xe9om\xe9tries ne sont pas prises en charge par REGARDS.")),(0,a.yg)("admonition",{type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"Attention, si vous n'avez pas consult\xe9 le toponyme depuis plus de un mois, il sera automatiquement supprim\xe9.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Exemples de fichiers t\xe9l\xe9chargeables :")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"json au format POLYGON")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "FeatureCollection",\n    "features": [\n      {\n        "type": "Feature",\n        "properties": {},\n        "geometry": {\n          "type": "Polygon",\n          "coordinates": [\n            [\n              [\n                -1.8182373046875,\n                48.26491251331118\n              ],\n              [\n                -1.8058776855468748,\n                48.493857443054395\n              ],\n              [\n                -2.080535888671875,\n                48.66738490890204\n              ],\n              [\n                -2.406005859375,\n                48.50295743049266\n              ],\n              [\n                -2.415618896484375,\n                48.27405352192057\n              ],\n              [\n                -1.8182373046875,\n                48.26491251331118\n              ]\n            ]\n          ]\n        }\n      }\n    ]\n  }\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"json au format MULTIPOLYGON")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "FeatureCollection",\n  "name": "n_tri_chat2014_iso_ht_01fort_s_086",\n  "crs": {\n    "type": "name",\n    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "properties": {},\n      "geometry": {\n        "type": "MultiPolygon",\n        "coordinates": [\n          [\n            [\n              [102.0, 2.0],\n              [103.0, 2.0],\n              [103.0, 3.0],\n              [102.0, 3.0],\n              [102.0, 2.0]\n            ]\n          ],\n          [\n            [\n              [100.0, 0.0],\n              [101.0, 0.0],\n              [101.0, 1.0],\n              [100.0, 1.0],\n              [100.0, 0.0]\n            ],\n            [\n              [100.2, 0.2],\n              [100.8, 0.2],\n              [100.8, 0.8],\n              [100.2, 0.8],\n              [100.2, 0.2]\n            ]\n          ]\n        ]\n      }\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);