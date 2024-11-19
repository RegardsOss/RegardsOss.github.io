"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[68165],{45350:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=s(74848),i=s(28453);const t={id:"order-monitor-orders",title:"Monitor orders",slug:"/user-guide/order/monitor-orders/"},o=void 0,d={id:"user-documentation/order-data/order-monitor-orders",title:"Monitor orders",description:"Suivez les commandes effectu\xe9es dans votre projet",source:"@site/versioned_docs/version-1.15/user-documentation/8-order-data/monitor-orders.md",sourceDirName:"user-documentation/8-order-data",slug:"/user-guide/order/monitor-orders/",permalink:"/docs/1.15/user-guide/order/monitor-orders/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/user-documentation/8-order-data/monitor-orders.md",tags:[],version:"1.15",frontMatter:{id:"order-monitor-orders",title:"Monitor orders",slug:"/user-guide/order/monitor-orders/"},sidebar:"manual",previous:{title:"Add data processing",permalink:"/docs/1.15/user-guide/order/processing/"},next:{title:"Orders settings",permalink:"/docs/1.15/user-guide/order/settings-orders/"}},l={},c=[];function a(e){const n={admonition:"admonition",em:"em",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Suivez les commandes effectu\xe9es dans votre projet"})}),"\n",(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/8-order-data/command-menu.png",alt:"user menu",height:"200"}),"\n",(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/8-order-data/orders-card.png",alt:"user menu",height:"200"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Depuis l'interface d'administration, le menu ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Commands"})})," et la carte ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Orders"})}),", appuyez sur le bouton ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"List"})}),".\nSur l'\xe9cran ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Orders"})}),", vous pouvez visualiser toutes les commandes effectu\xe9es dans votre projet."]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/8-order-data/order/order-list.png",alt:"order list",width:"800"})}),"\n",(0,r.jsx)(n.p,{children:"Les informations suivantes sont indiqu\xe9es :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"User"})}),", l'adresse mail de l'utilisateur ayant effectu\xe9 la commande"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Label"})}),", l'intitul\xe9 qu'il a renseign\xe9 lors de sa commande"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Progress"})}),", le pourcentage de livraison"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Creation"})}),", la date \xe0 laquelle la commande a \xe9t\xe9 cr\xe9\xe9e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Total size"})}),", la taille totale des fichiers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Errors count"})}),", le nombre d'erreurs \xe9ventuellement survenues"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Status"})}),", l'\xe9tat de livraison de la commande parmi :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"waiting user"})}),", une intervention de l'utilisateur est attendue pour terminer le processus de commande"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"done"})}),", la commande a \xe9t\xe9 livr\xe9e et t\xe9l\xe9charg\xe9e avec succ\xe8s"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"pending"})}),", la commande est en attente"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"running"})}),", la commande est en cours de traitement"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"pause"})}),", la commande a \xe9t\xe9 mise en pause lors de son ex\xe9cution"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"expired"})}),", les fichiers associ\xe9s \xe0 la commande ne sont plus t\xe9l\xe9chargeables car la commande a expir\xe9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"failed"})}),", la commande des fichiers a \xe9chou\xe9"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"warning"})}),", la commande s'est correctement termin\xe9e mais avec des warnings"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"removed"})}),", la commande a \xe9t\xe9 supprim\xe9e"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"unknown"})}),", le statut est inconnu"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut les colonnes suivantes ne sont pas affich\xe9es, vous pouvez d\xe9cidez de l'affichage des colonnes en appuyant sur le bouton ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Columns"})}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Expiration"})}),", la date jusqu'\xe0 laquelle les fichiers de la commande sont t\xe9l\xe9chargeables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Objects count"})}),", le nombre d'objets t\xe9l\xe9charg\xe9s"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Vous pourrez t\xe9l\xe9charger ce rapport sous format .csv en appuyant sur le bouton ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"Summary"})}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"A tout moment en tant qu'administrateur, vous avez la possibilit\xe9 de mettre une commande en pause ou l'annuler en appuyant sur les boutons correspondants pr\xe9sents sur chaque ligne."})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["N'h\xe9sitez pas \xe0 utiliser les filtres de tri par ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"User"})})," pour vous aider dans vos recherches."]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);