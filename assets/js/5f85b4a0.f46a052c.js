"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[25618],{8626:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var r=i(74848),n=i(28453);const t={id:"data-services-ui-services",title:"Add UI services",slug:"/user-guide/data-services/ui-services/"},a=void 0,c={id:"user-documentation/data-services/data-services-ui-services",title:"Add UI services",description:"Les services IHM sont des fonctionnalit\xe9s suppl\xe9mentaires du catalogue de donn\xe9es, accessible depuis l'interface utilisateur.",source:"@site/versioned_docs/version-1.13.0/user-documentation/7-data-services/ui-services.md",sourceDirName:"user-documentation/7-data-services",slug:"/user-guide/data-services/ui-services/",permalink:"/docs/1.13.0/user-guide/data-services/ui-services/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/user-documentation/7-data-services/ui-services.md",tags:[],version:"1.13.0",frontMatter:{id:"data-services-ui-services",title:"Add UI services",slug:"/user-guide/data-services/ui-services/"},sidebar:"manual",previous:{title:"Introduction",permalink:"/docs/1.13.0/user-guide/data-services/introduction/"},next:{title:"Add processing services",permalink:"/docs/1.13.0/user-guide/data-services/processing-services/"}},o={},u=[{value:"Configuration des services IHM",id:"configuration-des-services-ihm",level:2},{value:"Application des services IHM",id:"application-des-services-ihm",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"*Les services IHM sont des fonctionnalit\xe9s suppl\xe9mentaires du catalogue de donn\xe9es, accessible depuis l'interface utilisateur. *"}),"\n",(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/6-catalog-consultation/catalog/user-interface-menu.png",alt:"user menu",height:"200"}),"\n",(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/ui-services-cards.png",alt:"ui services cards",height:"200"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"configuration-des-services-ihm",children:"Configuration des services IHM"}),"\n",(0,r.jsxs)(s.p,{children:["La liste des services IHM est configurable dans la partie administration de votre projet, depuis le menu ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"User Interface"})})," et la carte ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Services configuration"})}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Notez que les services existants sont tr\xe8s sp\xe9cifiques et ne vont pas \xeatre maintenus dans des versions ult\xe9rieures de REGARDS.\nIls permettent notamment de g\xe9rer des ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"features"})})," provenant de fem, \xe9tant donn\xe9 que pour le moment, aucune interface d'administration ne permet de les g\xe9rer."]}),"\n",(0,r.jsx)(s.p,{children:"D\xe9veloppez vos propres services IHM pour enrichir l'utilisation du catalogue et proposer d'autres fa\xe7ons de visualiser la donn\xe9e. Vous pourriez par exemple, s\xe9lectionner des donn\xe9es pour les afficher sous forme de graphique et \xe9tudier l'\xe9volution de certaines variables, ou encore afficher un rapport synth\xe9tique pr\xe9sentant des chiffres cl\xe9s et pouvant s'exporter sous le format de votre choix."}),"\n",(0,r.jsxs)(s.p,{children:["Lorsque vous aurez d\xe9velopp\xe9 votre service, ajoutez-le depuis la carte ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Plugin configuration"})})," en appuyant sur le bouton ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Add"})}),".\nPr\xe9cisez ensuite le chemin d'acc\xe8s \xe0 votre script contenant votre plugin, un aper\xe7u des informations du script s'affichera d\xe8s que celui-ci aura \xe9t\xe9 trouv\xe9. Renseignez \xe9galement quel type d'utilisateur aura le droit d'utiliser ce plugin."]}),"\n",(0,r.jsx)(s.p,{children:"Par exemple :"}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/example-service.png",alt:"example service",width:"800"})}),"\n",(0,r.jsxs)(s.p,{children:["Une fois votre plugin cr\xe9\xe9, vous pourrez le voir dans la liste des ",(0,r.jsx)("b",{children:(0,r.jsx)("i",{children:(0,r.jsx)("i",{children:"UI Service plugin list"})})})," accessible depuis la carte ",(0,r.jsx)("b",{children:(0,r.jsx)("i",{children:(0,r.jsx)("i",{children:"Services configuration"})})}),"."]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/services-plugin-list.png",alt:"plugin list",width:"800"})}),"\n",(0,r.jsxs)(s.p,{children:["Chaque bloc repr\xe9sente un type de service. L'\xe9cran accessible depuis le bouton ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Configuration"})})," liste toutes les instances de ce service ; chacune peut se param\xe9trer d'une mani\xe8re sp\xe9cifique. Le bouton ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Create"})})," vous permettra d'ajouter une nouvelle configuration."]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/configuration-list.png",alt:"configuration list",width:"800"})}),"\n",(0,r.jsxs)(s.p,{children:["Vous aurez la possibilit\xe9 d'activer ou non une configuration du service, et de l'associer ou non \xe0 tous les jeux de donn\xe9es existant de votre projet. Vous pouvez \xe9galement activer ce plugin pour un ou plusieurs jeux de donn\xe9es directement depuis le jeu de donn\xe9es, pour cela suivez l'\xe9tape 5 de la section ",(0,r.jsx)(s.a,{href:"/docs/1.13.0/user-guide/data-organization/collections-datasets/",children:"cr\xe9ation d'un jeu de donn\xe9es"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"application-des-services-ihm",children:"Application des services IHM"}),"\n",(0,r.jsxs)(s.p,{children:["Les services IHM sont applicables sur les donn\xe9es du catalogue accessible depuis ",(0,r.jsx)(s.code,{children:"http://<regards host>/user/<project>"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Sur chaque donn\xe9e, vous pouvez appuyer sur le bouton ",(0,r.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"gear wheel",height:"25",width:"25"})," ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Services"})})," pour voir les services associ\xe9s. Cliquez ensuite sur le service IHM que vous souhaitez activer. Vous pouvez \xe9galement les appliquer sur un groupe en cochant plusieurs cases, puis en appuyant sur le bouton qui s'affichera dans la barre au-dessus des donn\xe9es. Cela est uniquement possible lorsque le service le permet."]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/catalog-ui-services.png",alt:"services",width:"800"})}),"\n",(0,r.jsx)(s.p,{children:"Par exemple, le plugin de test affiche une pop-up contenant la r\xe9partition des donn\xe9es par date :"}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/7-data-services/ui-services/catalog-example-service.png",alt:"example service",width:"800"})})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>c});var r=i(96540);const n={},t=r.createContext(n);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);