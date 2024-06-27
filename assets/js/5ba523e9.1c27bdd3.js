"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,f=l["".concat(o,".").concat(m)]||l[m]||c[m]||a;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[l]="string"==typeof e?e:r,s[1]=u;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={id:"fem-features-dissemination",title:"Feature dissemination",slug:"/user-guide/import-data/fem/features-dissemination/"},s=void 0,u={unversionedId:"user-documentation/4_3-fem/fem-features-dissemination",id:"user-documentation/4_3-fem/fem-features-dissemination",title:"Feature dissemination",description:"Diffusion des produits",source:"@site/docs/user-documentation/4_3-fem/feature-dissemination.md",sourceDirName:"user-documentation/4_3-fem",slug:"/user-guide/import-data/fem/features-dissemination/",permalink:"/docs/user-guide/import-data/fem/features-dissemination/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/4_3-fem/feature-dissemination.md",tags:[],version:"current",frontMatter:{id:"fem-features-dissemination",title:"Feature dissemination",slug:"/user-guide/import-data/fem/features-dissemination/"},sidebar:"manual",previous:{title:"Manage features",permalink:"/docs/user-guide/import-data/fem/manage-features/"},next:{title:"FEM Settings",permalink:"/docs/user-guide/import-data/fem/manage-features-settings/"}},o={},d=[{value:"Diffusion des produits",id:"diffusion-des-produits",level:2},{value:"Acquittement des produits",id:"acquittement-des-produits",level:2},{value:"Depuis un catalogue REGARDS",id:"depuis-un-catalogue-regards",level:3},{value:"Depuis une application externe",id:"depuis-une-application-externe",level:3}],p={toc:d},l="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"diffusion-des-produits"},"Diffusion des produits"),(0,r.kt)("p",null,"Le Syst\xe8me REGARDS permet de diffuser tout ou partie des produits ajout\xe9s, modifi\xe9s ou supprim\xe9s de l'archive de\nproduits GeoJson vers des syst\xe8mes externes."),(0,r.kt)("p",null,"Pour ce faire, un service de notification est d\xe9di\xe9 \xe0 l'envoi de messages \xe0 divers destinaires.",(0,r.kt)("br",{parentName:"p"}),"\n","Ce service permet via un ensemble de plugins de d\xe9finir :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le format du message \xe0 envoyer"),(0,r.kt)("li",{parentName:"ul"},"Le moyen de diffusion du message"),(0,r.kt)("li",{parentName:"ul"},"Les destinataires du message"),(0,r.kt)("li",{parentName:"ul"},"Les r\xe8gles de diffusion des messages aux diff\xe9rents destinataires")),(0,r.kt)("p",null,"Pour comprendre ce fonctionnement en d\xe9tail, vous pouvez vous r\xe9f\xe9rer \xe0\nla ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/overview/"},"description du service notifier"),"."),(0,r.kt)("h2",{id:"acquittement-des-produits"},"Acquittement des produits"),(0,r.kt)("p",null,"Apr\xe8s diffusion d'un produit vers un syst\xe8me externe, le catalogue REGARDS s'attend \xe0 recevoir un message d'acquittement depuis ce syst\xe8me externe si la propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"ackRequired")," est \xe0 true dans la configuration de Notifier. C'est le ",(0,r.kt)("strong",{parentName:"p"},"service de produit GeoJSON")," qui r\xe9cup\xe8re ce message d'acquittement par AMQP et va mettre \xe0 jour l'acquittement des produits dans la base de donn\xe9es.\nIl faut diff\xe9rencier deux cas pour configurer l'acquittement :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"l'acquittement s'effectue depuis un autre catalogue REGARDS"),(0,r.kt)("li",{parentName:"ul"},"l'acquittement s'effectue depuis une application externe autre que REGARDS")),(0,r.kt)("h3",{id:"depuis-un-catalogue-regards"},"Depuis un catalogue REGARDS"),(0,r.kt)("p",null,"Dans ce cas, l'acquittement peut \xeatre mis en place \xe0 l'aide du plugin sp\xe9cifique ",(0,r.kt)("inlineCode",{parentName:"p"},"DisseminationAckSender")," dans la\nconfiguration du service de notification.\nLa configuration de ce plugin est sp\xe9cifi\xe9e dans le guide des\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/plugins/recipient-sender#dissemination-ack-sender"},"Recipient sender plugins")),(0,r.kt)("admonition",{title:"Utilisez les bons param\xe8tres",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Dans le plugin, les deux param\xe8tres \xe0 remplir pour l'acquittement de features sont ",(0,r.kt)("inlineCode",{parentName:"p"},"featureDisseminationExchange")," et\n",(0,r.kt)("inlineCode",{parentName:"p"},"featureDisseminationQueueName"))),(0,r.kt)("p",null,"Puisque les 2 REGARDS ont leur propre RabbitMQ, vous devez ensuite mettre en place un shovel entre les 2 REGARDS pour transf\xe9rer l'\xe9v\xe8nement d'acquittement produit et le transf\xe9rer vers\nle REGARDS o\xf9 il sera pris en compte par le catalogue \xe9metteur de la notification et ayant un produit ",(0,r.kt)("strong",{parentName:"p"},"En attente de retour de notification"),"."),(0,r.kt)("h3",{id:"depuis-une-application-externe"},"Depuis une application externe"),(0,r.kt)("p",null,"Votre application externe doit \xeatre capable d'envoyer un message d'acquittement sur l'interface AMQP de REGARDS."),(0,r.kt)("p",null,"Le message \xe0 envoyer, ainsi que les informations \xe0 utiliser sont d\xe9finies dans le\nguide ",(0,r.kt)("a",{parentName:"p",href:"/docs/development/backend/services/fem/guides/amqp/publish-acknowledge-request"},"Publish an acknowledge request event")))}c.isMDXComponent=!0}}]);