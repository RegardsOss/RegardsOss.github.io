"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[94747],{48601:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>u});var n=r(74848),o=r(28453);const t={id:"configuration-overview",title:"Configuration",slug:"/user-guide/concept/configuration-overview/"},s=void 0,a={id:"user-documentation/z2_concept/configuration-overview",title:"Configuration",description:"La configuration permet \xe0 un administrateur REGARDS de l'adapter \xe0 son besoin (projet, infrastructure...).",source:"@site/docs/user-documentation/0-z2_concept/configuration-overview.md",sourceDirName:"user-documentation/0-z2_concept",slug:"/user-guide/concept/configuration-overview/",permalink:"/docs/user-guide/concept/configuration-overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/0-z2_concept/configuration-overview.md",tags:[],version:"current",frontMatter:{id:"configuration-overview",title:"Configuration",slug:"/user-guide/concept/configuration-overview/"},sidebar:"manual",previous:{title:"Database",permalink:"/docs/user-guide/concept/database-overview/"},next:{title:"Introduction",permalink:"/docs/user-guide/global-configuration/introduction/"}},c={},u=[{value:"Configuration par fichier",id:"configuration-par-fichier",level:3},{value:"Configuration par base de donn\xe9es",id:"configuration-par-base-de-donn\xe9es",level:3}];function d(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"La configuration permet \xe0 un administrateur REGARDS de l'adapter \xe0 son besoin (projet, infrastructure...)."}),"\n",(0,n.jsx)(i.h3,{id:"configuration-par-fichier",children:"Configuration par fichier"}),"\n",(0,n.jsxs)(i.p,{children:["Une petite partie de la configuration est stock\xe9e sur le disque du service de configuration ",(0,n.jsx)(i.code,{children:"rs-config"}),", sous la forme de fichier ",(0,n.jsx)(i.code,{children:"<microservice>.properties"}),".",(0,n.jsx)(i.br,{}),"\n","Ces fichiers de configuration apportent des valeurs communes \xe0 tous tous les microservices d'un m\xeame type, quel que soit leur projet."]}),"\n",(0,n.jsx)(i.p,{children:"Cela permet de :"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"initier les microservices \xe0 leur tout premier d\xe9marrage"}),"\n",(0,n.jsx)(i.li,{children:"adapter REGARDS \xe0 la configuration mat\xe9rielle sur lequel il est d\xe9ploy\xe9 : nombre de t\xe2che r\xe9alisable en parall\xe8le, diverses temporisation, cron, taille de ZIP..."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Vous pouvez consulter la liste ",(0,n.jsx)(i.a,{href:"https://github.com/RegardsOss/regards-docker/tree/master/roles/regards-mconfig/templates",children:"des principales variables ouvertes ici"}),"."]}),"\n",(0,n.jsx)(i.admonition,{title:"Mise \xe0 jour de la configuration",type:"info",children:(0,n.jsx)(i.p,{children:"Une mise \xe0 jour d'un fichier de configuration n\xe9cessite un red\xe9marrage des microservices du type associ\xe9"})}),"\n",(0,n.jsx)(i.h3,{id:"configuration-par-base-de-donn\xe9es",children:"Configuration par base de donn\xe9es"}),"\n",(0,n.jsxs)(i.p,{children:["La majeure partie de la configuration est stock\xe9e dans la base de donn\xe9es du microservice qui le g\xe8re.",(0,n.jsx)(i.br,{}),"\n","Si le microservice est de type Projet, alors la valeur est propre \xe0 chaque projet.",(0,n.jsx)(i.br,{}),"\n","L'administrateur peut modifier cette valeur sans avoir \xe0 red\xe9marrer les microservices associ\xe9s"]}),"\n",(0,n.jsxs)(i.p,{children:["Les informations de configuration d'un projet REGARDS sont visualisables et \xe9ditables depuis ",(0,n.jsx)(i.a,{href:"/docs/user-guide/project-configuration/introduction/",children:"l'administration projet de REGARDS"})]})]})}function l(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>a});var n=r(96540);const o={},t=n.createContext(o);function s(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);