"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[24979],{94626:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=n(74848),r=n(28453);const t={},d="Note de mise \xe0 jour d'interface de soumission des SIPs",a={id:"development/backend/regards/ingest/api/ingest-api-1.2.0",title:"Note de mise \xe0 jour d'interface de soumission des SIPs",description:"Modification de format des metadonn\xe9es \xe0 envoyer",source:"@site/versioned_docs/version-1.14/development/backend/regards/ingest/api/ingest-api-1.2.0.md",sourceDirName:"development/backend/regards/ingest/api",slug:"/development/backend/regards/ingest/api/ingest-api-1.2.0",permalink:"/docs/1.14/development/backend/regards/ingest/api/ingest-api-1.2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/ingest/api/ingest-api-1.2.0.md",tags:[],version:"1.14",frontMatter:{}},o={},c=[{value:"Modification de format des metadonn\xe9es \xe0 envoyer",id:"modification-de-format-des-metadonn\xe9es-\xe0-envoyer",level:2},{value:"Modification de format des SIPs \xe0 envoyer",id:"modification-de-format-des-sips-\xe0-envoyer",level:2},{value:"API REST",id:"api-rest",level:2},{value:"API bus de message AMPQ",id:"api-bus-de-message-ampq",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"note-de-mise-\xe0-jour-dinterface-de-soumission-des-sips",children:"Note de mise \xe0 jour d'interface de soumission des SIPs"})}),"\n",(0,i.jsx)(s.h2,{id:"modification-de-format-des-metadonn\xe9es-\xe0-envoyer",children:"Modification de format des metadonn\xe9es \xe0 envoyer"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:'    {\n  "metadata" : {\n+   "sessionOwner" : "sessionOwner",\n    "session" : "session",\n+   "ingestChain" : "DefaultProcessingChain",\n-   "processing" : "DefaultProcessingChain",\n+   "storages" : [ {\n+      "pluginBusinessId" : "disk",\n+      "targetTypes" : [ ]\n+   } ],\n+   "categories" : [ "CAT" ]\n  },\n'})}),"\n",(0,i.jsx)(s.p,{children:"D\xe9sormais il est de la responsabilit\xe9 du fournisseur d'indiquer ou stocker les donn\xe9es dans la section storage avec les informations :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"pluginBusinessId"})," : Nom de l'espace de stockage configur\xe9 dans l'instance REGARDS ou stocker les fichiers de donn\xe9es et de m\xe9tadonn\xe9es associ\xe9s."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"targetTypes"})," : [RAWDATA|QUICKLOOK_SD|QUICKLOOK_MD|QUICKLOOK_HD|DOCUMENT|THUMBNAIL|OTHER|AIP|DESCRIPTION] Ce champ peut \xeare laiss\xe9 vide ou \xeatre une liste vide dans le cas ou tous les types de fichiers sont \xe0 stocker sur cet espace de stockage. Ce param\xe8tre permet uniquement de stocker sur divers espaces de stockage les divers types de fichiers."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"categories"})," : Nouveau param\xe8tre permettant d'ajouter des mot-clefs m\xe9tier \xe0 chaque AIP g\xe9n\xe9r\xe9 et catalogu\xe9. Ces mot-clefs peuvent ensuite \xeatre utilis\xe9 pour le regroupement des donn\xe9es dans les jeux de donn\xe9es."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"modification-de-format-des-sips-\xe0-envoyer",children:"Modification de format des SIPs \xe0 envoyer"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:'  {\n    "ipType" : "DATA",\n    "id" : "SIP_001",\n    "geometry" : {... },\n    "normalizedGeometry" : null,\n    "properties" : {\n       "contentInformations" : [ {\n        "representationInformation" : { ... },\n        "dataObject" : {\n          "regardsDataType" : "RAWDATA",\n+          "locations" : [ {\n+            "url" : "file:/app_to_build/ingest/ingest-rest/data1.fits"\n+          } ],\n-         "urls" : [ "file:/app_to_build/ingest/ingest-rest/data1.fits" ],\n-         "reference" : false,\n          "filename" : "data1.fits",\n          "algorithm" : "MD5",\n          "checksum" : "b463726cfbb52d47e432bedf08edbec3",\n          "fileSize" : 12345\n        }\n      } ],\n      "pdi" : { ... }\n    },\n    "type" : "Feature",\n    "bbox" : [ 19.0, 93.0 ]\n  } ],\n  "type" : "FeatureCollection"\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["La modification sur le format des SIP concerne la facon de d\xe9finir l'emplacement des fichiers. D\xe9sormais le param\xe8tre ",(0,i.jsx)(s.code,{children:"locations"})," permet de d\xe9finir de multiples espaces  ou se trouve le fichier avec :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"url"})," : URL d'acc\xe8s au fichier"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"storage"})," : param\xe8tre optionel permettant de pr\xe9ciser un espace de stockage ou le fichier est d\xe9j\xe0 stock\xe9. Lorsque ce param\xe8tre est renseign\xe9, REGARDS ne stockera pas la donn\xe9e consid\xe9rant que la donn\xe9e est d\xe9j\xe0 stock\xe9 \xe0 cette endroit. Dans le cas contraire si ce param\xe8tre n'est pas renseign\xe9, alors REGARDS r\xe9cup\xe9rera le fichier \xe0 partir de l'url fourni pour le stocker sur le ou les espaces de stockage configur\xe9s dans la partie metadata de la requ\xeate."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"api-rest",children:"API REST"}),"\n",(0,i.jsx)(s.p,{children:"Il est toujours possible de soumettre des SIPs au service INGEST de REGARDS par API REST en version 1.2.0. Cette interface sera conserv\xe9e dans les versions ult\xe9rieures de REGARDS."}),"\n",(0,i.jsx)(s.p,{children:"Le endpoint est https://<hote>/api/v1/rs-ingest/sips en POST avec le body :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "metadata": { ... },\n  "features": [ ... ]\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Le traitement de la soumission des SIPs au travers de ce endpoint est asynchrone, de ce fait la r\xe9ponse renvoi l'\xe9tat d'acceptation ou de refus des divers SIP. Pour les SIP accept\xe9s, l'identifiant de la requ\xeate d'ingestion en cours de traitement est fournie. Pour les SIP refus\xe9s la raison du refus est fournie."}),"\n",(0,i.jsx)(s.p,{children:"Les retours de cette interface sont :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"code 500 : Erreur interne du service"}),"\n",(0,i.jsx)(s.li,{children:"code 200 : Demande bien prise en compte avec le body :"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "granted" : {\n    "SIP_001" : "68d5481b-f2ba-4bce-91d0-a3542443daf4"\n  },\n  "denied" : { },\n  "messages" : [ "SIP Collection ingestion scheduled" ],\n  "sessionOwner" : "sessionOwner",\n  "session" : "session"\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:"Les param\xe8tres du body sont :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'granted : pour chaque SIP soumis avec succ\xe8s un \xe9l\xe9ment est ajout\xe9 de type "id du SIP fourni" : "Identifiant de la requ\xeate d\'ingestion soumise"'}),"\n",(0,i.jsx)(s.li,{children:'denied : pour chaque SIP refus\xe9 un \xe9l\xe9ment est ajout\xe9 de type "providerId" : "raison du refus"'}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"api-bus-de-message-ampq",children:"API bus de message AMPQ"}),"\n",(0,i.jsxs)(s.p,{children:["Depuis la version 1.0.0 de REGARDS il est possbile d\xe9sormais de soummetre les SIPs au service INGEST par bus de message.",(0,i.jsx)(s.code,{children:"Cette solution est d\xe9sormais \xe0 privil\xe9gier car plus performante"})]}),"\n",(0,i.jsxs)(s.p,{children:["Pour ce faire, il faut envoyer un message dans le format d\xe9crit ci-dessous sur la queue d'\xe9change du service RabbitMQ de l'instance de REGARDS :\n",(0,i.jsx)(s.code,{children:"regards.broadcast.fr.cnes.regards.modules.ingest.service.flow.IngestRequestFlowHandler"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Note"})," : Pour pouvoir publier sur la queue de messages il faut s'authentifier aupr\xe8s du bus de messages avec le couple login/password configur\xe9 pour REGARDS sur le serveur RabbitMQ."]}),"\n",(0,i.jsxs)(s.p,{children:["Le corp du message est le m\xeame que pour l'interface REST \xe0 l'exception que ",(0,i.jsx)(s.code,{children:"un seul SIP est associ\xe9 \xe0 un message"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-diff",children:'    {\n  "metadata" : {\n   "sessionOwner" : "sessionOwner",\n    "session" : "session",\n   "ingestChain" : "DefaultProcessingChain",\n   "processing" : "DefaultProcessingChain",\n   "storages" : [ {\n      "pluginBusinessId" : "disk",\n      "targetTypes" : [ ]\n   } ],\n   "categories" : [ "CAT" ]\n  },\n- "features" : [ {\n- } ]\n+ "sip": {\n    "ipType" : "DATA",\n    "id" : "SIP_001",\n    "geometry" : { ... },\n    "normalizedGeometry" : null,\n    "properties" : { ... },\n    "type" : "Feature",\n    "bbox" : [ 19.0, 93.0 ]\n+ }\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>a});var i=n(96540);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);