"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66586],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),l=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?t.createElement(h,i(i({ref:r},p),{},{components:n})):t.createElement(h,i({ref:r},p))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81660:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={id:"crawler-elasticsearch-shard",title:"Configure ES Shard",slug:"/user-guide/crawler/crawler-elasticsearch-shard"},i=void 0,s={unversionedId:"user-documentation/crawler/crawler-elasticsearch-shard",id:"user-documentation/crawler/crawler-elasticsearch-shard",title:"Configure ES Shard",description:"Elasticsearch a besoin de conna\xeetre le nombre de shard pour chaque tenant avant de cr\xe9er et peupler l'index pour des questions de performance.",source:"@site/docs/user-documentation/5-crawler/shard-elasticsearch.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/crawler-elasticsearch-shard",permalink:"/docs/user-guide/crawler/crawler-elasticsearch-shard",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/shard-elasticsearch.md",tags:[],version:"current",frontMatter:{id:"crawler-elasticsearch-shard",title:"Configure ES Shard",slug:"/user-guide/crawler/crawler-elasticsearch-shard"},sidebar:"manual",previous:{title:"Reset catalog",permalink:"/docs/user-guide/crawler/reset-catalog/"},next:{title:"Introduction",permalink:"/docs/user-guide/catalog/introduction/"}},d={},l=[{value:"R\xe9cup\xe9rer le poids moyen de chaque produit",id:"r\xe9cup\xe9rer-le-poids-moyen-de-chaque-produit",level:2},{value:"Supprimer des donn\xe9es anciennes",id:"supprimer-des-donn\xe9es-anciennes",level:3},{value:"R\xe9cup\xe9rer le poids d&#39;un index",id:"r\xe9cup\xe9rer-le-poids-dun-index",level:3},{value:"M\xe9thode de calcul",id:"m\xe9thode-de-calcul",level:2},{value:"Poids par produit",id:"poids-par-produit",level:3},{value:"Poids de toutes les donn\xe9es d&#39;un projet",id:"poids-de-toutes-les-donn\xe9es-dun-projet",level:3},{value:"Calcul nombre de shard",id:"calcul-nombre-de-shard",level:3},{value:"Enregistrer le nombre de shard souhait\xe9",id:"enregistrer-le-nombre-de-shard-souhait\xe9",level:2}],p={toc:l},u="wrapper";function c(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Elasticsearch a besoin de conna\xeetre le nombre de shard pour chaque tenant avant de cr\xe9er et peupler l'index pour des questions de performance. "),(0,a.kt)("admonition",{title:"Modifier cette valeur",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Une fois l'index cr\xe9\xe9, il n'est pas possible de modifier cette valeur et il sera n\xe9cessaire de r\xe9initialiser le catalogue, modifier les valeurs et r\xe9indexer toutes les donn\xe9es du projet.")),(0,a.kt)("h2",{id:"r\xe9cup\xe9rer-le-poids-moyen-de-chaque-produit"},"R\xe9cup\xe9rer le poids moyen de chaque produit"),(0,a.kt)("h3",{id:"supprimer-des-donn\xe9es-anciennes"},"Supprimer des donn\xe9es anciennes"),(0,a.kt)("p",null,"Il est possible de supprimer des donn\xe9es anciennes d'un index pour minimiser le nombre de produits supprim\xe9s (",(0,a.kt)("inlineCode",{parentName:"p"},"docs.deleted"),").",(0,a.kt)("br",{parentName:"p"}),"\n","La requ\xeate suivante r\xe9alise par exemple ce nettoyage pour un tenant nomm\xe9e ",(0,a.kt)("inlineCode",{parentName:"p"},"projet1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "localhost:9200/projet1/_forcemerge?only_expunge_deletes=true"\n')),(0,a.kt)("admonition",{title:"Acc\xe9der \xe0 ElasticSearch",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Ces commandes peuvent \xeatre ex\xe9cut\xe9es depuis l'int\xe9rieur du container, en utilisant par exemple ",(0,a.kt)("inlineCode",{parentName:"p"},"./exec.sh rs-elasticsearch bash")," si vous avez d\xe9ploy\xe9 REGARDS sous Docker SWARM")),(0,a.kt)("h3",{id:"r\xe9cup\xe9rer-le-poids-dun-index"},"R\xe9cup\xe9rer le poids d'un index"),(0,a.kt)("p",null,"Nous vous conseillons de r\xe9cup\xe9rer dans un premier temps le nombre de donn\xe9es et le poids sur disque par index dans un environnement de qualification :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[admregards@tu-regards-q01 ~]$ curl "localhost:9200/_cat/indices/?pretty&human&v=true&bytes=b"\n index    pri (nombre de shard)    replica     docs.count docs.deleted     store.size   \nprojet1        5                     1             5792          134         13015653   \nprojet2        5                     1          1072726         1165       1302311564   \nprojet3        5                     1             9541           29         14493629   \nprojet4        5                     1             1464         1487         11822627   \nprojet5        5                     1             9727          682         18049712   \nprojet6        5                     1                5            1           209489   \nprojet7        5                     1           101177        96754        462412593   \nprojet8        5                     1              478          410          3222384   \nprojet9        5                     1                0            0             1130   \nprojet10       5                     1             4477           10          9388718   \nprojet11       5                     1             7379         2007         32460573   \nprojet12       5                     1             4347            0         11413269   \nprojet13       5                     1                0            0             1130   \nprojet14       5                     1               88           25          1385672   \nprojet15       5                     1              683            2          1236175   \nprojet16       5                     1              135           32           986165   \nprojet17       5                     1                0            0             1130   \nprojet18       5                     1              337           18          1838735   \nprojet19       1                     1                0            0             7440   \nprojet20       5                     1               33            2           304757   \nprojet21       5                     1                1            0            19660   \nprojet22       5                     1              613           79         17767088   \nprojet23       5                     1             7718          531         10858403   \nprojet24       5                     1             1146           40          4808399   \nprojet25       5                     1             1897           30          4467119   \nprojet26       5                     1               28            1           565170   \nprojet27       5                     1              405            9          3564503   \nprojet28       5                     1          4383957      1025929       7591603769   \nprojet29       5                     1          1009682       251896       1589853552   \nprojet30       5                     1              845            5          1904415   \n')),(0,a.kt)("h2",{id:"m\xe9thode-de-calcul"},"M\xe9thode de calcul"),(0,a.kt)("p",null,"Nous avons bas\xe9 notre calcul du nombre de shard par index \xe0 l'aide de l'outil ",(0,a.kt)("a",{parentName:"p",href:"https://gbaptista.github.io/elastic-calculator/"},"Elaticsearch Calculator"),"."),(0,a.kt)("h3",{id:"poids-par-produit"},"Poids par produit"),(0,a.kt)("p",null,"Avec les donn\xe9es de qualif :",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Poids par produit")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"Taille totale de l'index")," / (",(0,a.kt)("inlineCode",{parentName:"p"},"nb produit")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"nb produits supprim\xe9s"),")"),(0,a.kt)("h3",{id:"poids-de-toutes-les-donn\xe9es-dun-projet"},"Poids de toutes les donn\xe9es d'un projet"),(0,a.kt)("p",null,"Puis calculer le poids de tous les produits",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Poids index de prod (en Gb)")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"Poids par produit")," * ",(0,a.kt)("inlineCode",{parentName:"p"},"Nb produit prod vis\xe9")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"b vers Gb"),"  "),(0,a.kt)("p",null,"Par exemple :",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"1000 octect par produit")," * ",(0,a.kt)("inlineCode",{parentName:"p"},"100 millions de produits")," / 1073741824 = ",(0,a.kt)("inlineCode",{parentName:"p"},"93Go"),(0,a.kt)("br",{parentName:"p"}),"\n","Le poids de cet index en prod serait de 93Go"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Pour rappel : ",(0,a.kt)("inlineCode",{parentName:"p"},"b vers Gb")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1024 x 1024 x 1024")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1073741824")," ")),(0,a.kt)("h3",{id:"calcul-nombre-de-shard"},"Calcul nombre de shard"),(0,a.kt)("p",null,"Il faut que le ",(0,a.kt)("inlineCode",{parentName:"p"},"Poids index de prod")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"nombre de shard")," soit entre 13GB et 28GB  "),(0,a.kt)("p",null,"Si on reprend l'exemple vu pr\xe9c\xe9demment",(0,a.kt)("br",{parentName:"p"}),"\n","93 Go / 4 = 23 Go / shard",(0,a.kt)("br",{parentName:"p"}),"\n","93 Go / 5 = 18 Go / shard",(0,a.kt)("br",{parentName:"p"}),"\n","Donc 4 et 5 sont deux valeurs possible pour ce projet"),(0,a.kt)("h2",{id:"enregistrer-le-nombre-de-shard-souhait\xe9"},"Enregistrer le nombre de shard souhait\xe9"),(0,a.kt)("p",null,"Pour finir, il est n\xe9cessaire d'enregistrer la valeur dans la configuration du microservice DAM."),(0,a.kt)("p",null,"Le nombre de shard (et de r\xe9plicas) peut \xeatre sp\xe9cifi\xe9 en cr\xe9er un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration-shard-projet1.rs-dam.json")," avec le contenu suivant : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "rs-dam",\n  "modules": [\n    {\n      "module": {\n        "id": "dam",\n        "name": "Data Management module",\n        "description": "Manage Entities",\n        "version": "1.6.0",\n        "author": "REGARDS",\n        "legalOwner": "CNES",\n        "documentation": "https://github.com/RegardsOss"\n      },\n      "resetBeforeImport": false,\n      "configuration": [\n        {\n          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",\n          "value": {\n            "name": "index_number_of_shards",\n            "description": "Number of shards used by the current tenant index",\n            "value": "TODO",\n            "defaultValue": "5",\n            "className": "java.lang.Long"\n          }\n        },\n        {\n          "key": "fr.cnes.regards.framework.modules.tenant.settings.domain.DynamicTenantSetting",\n          "value": {\n            "name": "index_number_of_replicas",\n            "description": "Number of replicas of each shard in the current tenant index",\n            "value": "TODO",\n            "defaultValue": "1",\n            "className": "java.lang.Long"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Puis remplacer la valeur ",(0,a.kt)("inlineCode",{parentName:"p"},"TODO")," par la valeur souhait\xe9e.",(0,a.kt)("br",{parentName:"p"}),"\n","Enfin, importer ce fichier de configuration en utilisant l'\xe9cran ",(0,a.kt)("inlineCode",{parentName:"p"},"Import et t\xe9l\xe9chargement de configuration de rs-dam")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Microservices")," > Carte ",(0,a.kt)("inlineCode",{parentName:"p"},"rs-dam")," Action ",(0,a.kt)("inlineCode",{parentName:"p"},"G\xe9rer les backups")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Importer une configuration de ce microservice"),")."))}c.isMDXComponent=!0}}]);