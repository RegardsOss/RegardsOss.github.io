"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[38741],{45e3:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var n=i(87462),s=(i(67294),i(3905)),a=i(8849),r=i.n(a),o=i(55317);const u={id:"oais-dissemination",title:"OAIS dissemination",slug:"/user-guide/import-data/oais-files/oais-dissemination/"},d=void 0,l={unversionedId:"user-documentation/4_1-ingest/oais-dissemination",id:"user-documentation/4_1-ingest/oais-dissemination",title:"OAIS dissemination",description:"Le Syst\xe8me REGARDS permet de diffuser tout ou partie des produits OAIS vers des syst\xe8mes externes.",source:"@site/docs/user-documentation/4_1-ingest/oais-dissemination.md",sourceDirName:"user-documentation/4_1-ingest",slug:"/user-guide/import-data/oais-files/oais-dissemination/",permalink:"/docs/user-guide/import-data/oais-files/oais-dissemination/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/4_1-ingest/oais-dissemination.md",tags:[],version:"current",frontMatter:{id:"oais-dissemination",title:"OAIS dissemination",slug:"/user-guide/import-data/oais-files/oais-dissemination/"},sidebar:"manual",previous:{title:"OAIS Settings",permalink:"/docs/user-guide/import-data/oais-files/settings-ingest/"},next:{title:"Introduction",permalink:"/docs/user-guide/import-data/fem/introduction/"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Diffuser des produits OAIS",id:"diffuser-des-produits-oais",level:2},{value:"Acquittement",id:"acquittement",level:2},{value:"Depuis un catalogue REGARDS",id:"depuis-un-catalogue-regards",level:3},{value:"Depuis une application externe",id:"depuis-une-application-externe",level:3}],m={toc:c},g="wrapper";function f(e){let{components:t,...i}=e;return(0,s.kt)(g,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Le Syst\xe8me REGARDS permet de diffuser tout ou partie des produits OAIS vers des syst\xe8mes externes.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"La diffusion de produits OAIS vers des syst\xe8mes externes s'effectue \xe0 l'aide d'un service de notification, qui a pour vocation l'envoi de messages \xe0 divers destinataires.\nVous pouvez consulter le guide sur ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-guide/project-configuration/notifier-configuration"},"le service de Notification")," pour la mise en place."),(0,s.kt)("h2",{id:"diffuser-des-produits-oais"},"Diffuser des produits OAIS"),(0,s.kt)("p",null,"Pour pouvoir diffuser des produits OAIS \xe0 des services externes depuis l'IHM, il faut se rendre sur la vue des\nproduits, dans l'\xe9cran administrateur du projet. La liste des produits est accessibles dans l'onglet ",(0,s.kt)("strong",{parentName:"p"},"ajout de\ndonn\xe9es"),", en cliquant sur l'ic\xf4ne ",(0,s.kt)(r(),{path:o.nOV,size:1.3,mdxType:"Icon"})," dans la cat\xe9gorie ",(0,s.kt)("strong",{parentName:"p"},"Gestionnaire de produits\n(OAIS)")),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.15/2-project-configuration/admin/oais-product-management.png",alt:"group action",width:"400"})),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.15/4_1-ingest/oais_products.png",alt:"group action",width:"800"})),(0,s.kt)("p",null,"Pour diffuser un seul produit, il faut cliquer sur l'ic\xf4ne ",(0,s.kt)(r(),{path:o.NN1,size:1.3,mdxType:"Icon"})," de la\nligne correspondante. Pour diffuser plusieurs produits, il faut s\xe9lectionner les produits puis cliquer sur le bouton\n",(0,s.kt)("strong",{parentName:"p"},"NOTIFY SELECTION"),"."),(0,s.kt)("p",null,"Une bo\xeete de dialogue s'ouvre alors, au sein de laquelle il faut s\xe9lectionner les destinataires de la diffusion."),(0,s.kt)("div",{align:"center"},(0,s.kt)("img",{src:"/images/user-documentation/v1.15/4_1-ingest/list_recipient.png",alt:"group action",width:"800"})),(0,s.kt)("p",null,"Ces destinataires correspondent aux diff\xe9rents param\xe8tres ",(0,s.kt)("strong",{parentName:"p"},"recipientLabel")," qui ont \xe9t\xe9 configur\xe9s\ndans les plugins du service de notification, \xe0 condition que le param\xe8tre ",(0,s.kt)("strong",{parentName:"p"},"directNotificationEnabled")," de ces\nplugins est bien \xe0 ",(0,s.kt)("strong",{parentName:"p"},"true"),".\nPour rappel, la configuration des plugins de notification est d\xe9crite ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/plugins/intro"},"dans cette page")),(0,s.kt)("p",null,"Apr\xe8s validation, les messages AMQP contenant les produits \xe0 diffus\xe9s sont envoy\xe9s aux destinataires choisis. L'\xe9tape suivante consiste en la r\xe9ception des messages d'acquittements de cette diffusion de produits."),(0,s.kt)("h2",{id:"acquittement"},"Acquittement"),(0,s.kt)("p",null,"Apr\xe8s diffusion d'un produit vers un syst\xe8me externe, le catalogue REGARDS s'attend \xe0 recevoir un message d'acquittement depuis ce syst\xe8me externe si la propri\xe9t\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"ackRequired")," est \xe0 true dans la configuration de Notifier. C'est le ",(0,s.kt)("strong",{parentName:"p"},"service d'ingestion")," qui r\xe9cup\xe8re ce message d'acquittement par AMQP et va mettre \xe0 jour l'acquittement des produits dans la base de donn\xe9es."),(0,s.kt)("p",null,"Il faut diff\xe9rencier deux cas pour configurer l'acquittement :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"l'acquittement s'effectue depuis un autre catalogue REGARDS"),(0,s.kt)("li",{parentName:"ul"},"l'acquittement s'effectue depuis une application externe autre que REGARDS")),(0,s.kt)("h3",{id:"depuis-un-catalogue-regards"},"Depuis un catalogue REGARDS"),(0,s.kt)("p",null,"Dans ce cas, l'acquittement peut \xeatre mis en place \xe0 l'aide du plugin sp\xe9cifique ",(0,s.kt)("inlineCode",{parentName:"p"},"DisseminationAckSender")," dans la\nconfiguration du service de notification.\nLa configuration de ce plugin est sp\xe9cifi\xe9e dans le guide des\n",(0,s.kt)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/plugins/recipient-sender#dissemination-ack-sender"},"Recipient sender plugins")),(0,s.kt)("admonition",{title:"Utilisez les bons param\xe8tres",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"Dans le plugin, les deux param\xe8tres \xe0 remplir pour l'acquittement de produits OAIS sont ",(0,s.kt)("inlineCode",{parentName:"p"},"aipDisseminationExchange")," et\n",(0,s.kt)("inlineCode",{parentName:"p"},"aipDisseminationQueueName"))),(0,s.kt)("p",null,"Puisque les 2 REGARDS ont leur propre RabbitMQ, vous devez ensuite mettre en place un shovel entre les 2 REGARDS pour transf\xe9rer l'\xe9v\xe8nement d'acquittement produit et le transf\xe9rer vers\nle REGARDS o\xf9 il sera pris en compte par le catalogue \xe9metteur de la notification et ayant un produit ",(0,s.kt)("strong",{parentName:"p"},"En attente de retour de notification"),"."),(0,s.kt)("h3",{id:"depuis-une-application-externe"},"Depuis une application externe"),(0,s.kt)("p",null,"Votre application externe doit \xeatre capable d'envoyer un message d'acquittement sur l'interface AMQP de REGARDS."),(0,s.kt)("p",null,"Le message \xe0 envoyer, ainsi que les informations \xe0 utiliser sont d\xe9finies dans le\nguide ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/backend/services/ingest/amqp/publish-acknowledge-event"},"Publish OAIS acknowledge request event")))}f.isMDXComponent=!0}}]);