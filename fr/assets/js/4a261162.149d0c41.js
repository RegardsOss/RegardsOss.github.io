(window.webpackJsonp=window.webpackJsonp||[]).push([[762],{2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var s=t(0),r=t.n(s);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),b=s,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||a;return t?r.a.createElement(m,o(o({ref:n},d),{},{components:t})):r.a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<a;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},837:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var s=t(3),r=t(7),a=(t(0),t(2708)),i={},o={unversionedId:"development/backend/regards/ingest/api/ingest-api-1.2.0",id:"development/backend/regards/ingest/api/ingest-api-1.2.0",isDocsHomePage:!1,title:"ingest-api-1.2.0",description:"Note de mise \xe0 jour d'interface de soumission des SIPs",source:"@site/docs/development/backend/regards/ingest/api/ingest-api-1.2.0.md",slug:"/development/backend/regards/ingest/api/ingest-api-1.2.0",permalink:"/fr/docs/development/backend/regards/ingest/api/ingest-api-1.2.0",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/api/ingest-api-1.2.0.md",version:"current"},c=[{value:"Modification de format des metadonn\xe9es \xe0 envoyer",id:"modification-de-format-des-metadonn\xe9es-\xe0-envoyer",children:[]},{value:"Modification de format des SIPs \xe0 envoyer",id:"modification-de-format-des-sips-\xe0-envoyer",children:[]},{value:"API REST",id:"api-rest",children:[]},{value:"API bus de message AMPQ",id:"api-bus-de-message-ampq",children:[]}],d={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"note-de-mise-\xe0-jour-dinterface-de-soumission-des-sips"},"Note de mise \xe0 jour d'interface de soumission des SIPs"),Object(a.b)("h2",{id:"modification-de-format-des-metadonn\xe9es-\xe0-envoyer"},"Modification de format des metadonn\xe9es \xe0 envoyer"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'    {\n  "metadata" : {\n+   "sessionOwner" : "sessionOwner",\n    "session" : "session",\n+   "ingestChain" : "DefaultProcessingChain",\n-   "processing" : "DefaultProcessingChain",\n+   "storages" : [ {\n+      "pluginBusinessId" : "disk",\n+      "targetTypes" : [ ]\n+   } ],\n+   "categories" : [ "CAT" ]\n  },\n')),Object(a.b)("p",null,"D\xe9sormais il est de la responsabilit\xe9 du fournisseur d'indiquer ou stocker les donn\xe9es dans la section storage avec les informations :   "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pluginBusinessId")," : Nom de l'espace de stockage configur\xe9 dans l'instance REGARDS ou stocker les fichiers de donn\xe9es et de m\xe9tadonn\xe9es associ\xe9s.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"targetTypes")," : ","[RAWDATA|QUICKLOOK_SD|QUICKLOOK_MD|QUICKLOOK_HD|DOCUMENT|THUMBNAIL|OTHER|AIP|DESCRIPTION]"," Ce champ peut \xeare laiss\xe9 vide ou \xeatre une liste vide dans le cas ou tous les types de fichiers sont \xe0 stocker sur cet espace de stockage. Ce param\xe8tre permet uniquement de stocker sur divers espaces de stockage les divers types de fichiers.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"categories")," : Nouveau param\xe8tre permettant d'ajouter des mot-clefs m\xe9tier \xe0 chaque AIP g\xe9n\xe9r\xe9 et catalogu\xe9. Ces mot-clefs peuvent ensuite \xeatre utilis\xe9 pour le regroupement des donn\xe9es dans les jeux de donn\xe9es.  ")),Object(a.b)("h2",{id:"modification-de-format-des-sips-\xe0-envoyer"},"Modification de format des SIPs \xe0 envoyer"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'  {\n    "ipType" : "DATA",\n    "id" : "SIP_001",\n    "geometry" : {... },\n    "normalizedGeometry" : null,\n    "properties" : {\n       "contentInformations" : [ {\n        "representationInformation" : { ... },\n        "dataObject" : {\n          "regardsDataType" : "RAWDATA",\n+          "locations" : [ {\n+            "url" : "file:/app_to_build/ingest/ingest-rest/data1.fits"\n+          } ],\n-         "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],\n-         "reference" : false,\n          "filename" : "data1.fits",\n          "algorithm" : "MD5",\n          "checksum" : "b463726cfbb52d47e432bedf08edbec3",\n          "fileSize" : 12345\n        }\n      } ],\n      "pdi" : { ... }\n    },\n    "type" : "Feature",\n    "bbox" : [ 19.0, 93.0 ]\n  } ],\n  "type" : "FeatureCollection"\n}\n')),Object(a.b)("p",null,"La modification sur le format des SIP concerne la facon de d\xe9finir l'emplacement des fichiers. D\xe9sormais le param\xe8tre ",Object(a.b)("inlineCode",{parentName:"p"},"locations")," permet de d\xe9finir de multiples espaces  ou se trouve le fichier avec :  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," : URL d'acc\xe8s au fichier  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"storage")," : param\xe8tre optionel permettant de pr\xe9ciser un espace de stockage ou le fichier est d\xe9j\xe0 stock\xe9. Lorsque ce param\xe8tre est renseign\xe9, REGARDS ne stockera pas la donn\xe9e consid\xe9rant que la donn\xe9e est d\xe9j\xe0 stock\xe9 \xe0 cette endroit. Dans le cas contraire si ce param\xe8tre n'est pas renseign\xe9, alors REGARDS r\xe9cup\xe9rera le fichier \xe0 partir de l'url fourni pour le stocker sur le ou les espaces de stockage configur\xe9s dans la partie metadata de la requ\xeate.  ")),Object(a.b)("h2",{id:"api-rest"},"API REST"),Object(a.b)("p",null,"Il est toujours possible de soumettre des SIPs au service INGEST de REGARDS par API REST en version 1.2.0. Cette interface sera conserv\xe9e dans les versions ult\xe9rieures de REGARDS.  "),Object(a.b)("p",null,"Le endpoint est https://\\<hote",">","/api/v1/rs-ingest/sips en POST avec le body :  "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": { ... },\n  "features": [ ... ]\n}\n')),Object(a.b)("p",null,"Le traitement de la soumission des SIPs au travers de ce endpoint est asynchrone, de ce fait la r\xe9ponse renvoi l'\xe9tat d'acceptation ou de refus des divers SIP. Pour les SIP accept\xe9s, l'identifiant de la requ\xeate d'ingestion en cours de traitement est fournie. Pour les SIP refus\xe9s la raison du refus est fournie."),Object(a.b)("p",null,"Les retours de cette interface sont :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"code 500 : Erreur interne du service"),Object(a.b)("li",{parentName:"ul"},"code 200 : Demande bien prise en compte avec le body :")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "granted" : {\n    "SIP_001" : "68d5481b-f2ba-4bce-91d0-a3542443daf4"\n  },\n  "denied" : { },\n  "messages" : [ "SIP Collection ingestion scheduled" ],\n  "sessionOwner" : "sessionOwner",\n  "session" : "session"\n}\n')),Object(a.b)("p",null,"Les param\xe8tres du body sont :  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'granted : pour chaque SIP soumis avec succ\xe8s un \xe9l\xe9ment est ajout\xe9 de type "id du SIP fourni" : "Identifiant de la requ\xeate d\'ingestion soumise"  '),Object(a.b)("li",{parentName:"ul"},'denied : pour chaque SIP refus\xe9 un \xe9l\xe9ment est ajout\xe9 de type "providerId" : "raison du refus"  ')),Object(a.b)("h2",{id:"api-bus-de-message-ampq"},"API bus de message AMPQ"),Object(a.b)("p",null,"Depuis la version 1.0.0 de REGARDS il est possbile d\xe9sormais de soummetre les SIPs au service INGEST par bus de message.",Object(a.b)("inlineCode",{parentName:"p"},"Cette solution est d\xe9sormais \xe0 privil\xe9gier car plus performante"),"  "),Object(a.b)("p",null,"Pour ce faire, il faut envoyer un message dans le format d\xe9crit ci-dessous sur la queue d'\xe9change du service RabbitMQ de l'instance de REGARDS :\n",Object(a.b)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.ingest.service.flow.IngestRequestFlowHandler")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Note")," : Pour pouvoir publier sur la queue de messages il faut s'authentifier aupr\xe8s du bus de messages avec le couple login/password configur\xe9 pour REGARDS sur le serveur RabbitMQ. "),Object(a.b)("p",null,"Le corp du message est le m\xeame que pour l'interface REST \xe0 l'exception que ",Object(a.b)("inlineCode",{parentName:"p"},"un seul SIP est associ\xe9 \xe0 un message"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-diff"},'    {\n  "metadata" : {\n   "sessionOwner" : "sessionOwner",\n    "session" : "session",\n   "ingestChain" : "DefaultProcessingChain",\n   "processing" : "DefaultProcessingChain",\n   "storages" : [ {\n      "pluginBusinessId" : "disk",\n      "targetTypes" : [ ]\n   } ],\n   "categories" : [ "CAT" ]\n  },\n- "features" : [ {\n- } ]\n+ "sip": {\n    "ipType" : "DATA",\n    "id" : "SIP_001",\n    "geometry" : { ... },\n    "normalizedGeometry" : null,\n    "properties" : { ... },\n    "type" : "Feature",\n    "bbox" : [ 19.0, 93.0 ]\n+ }\n')))}l.isMDXComponent=!0}}]);