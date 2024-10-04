"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[62758],{18938:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),t=n(28453);const i={id:"crawler-external-databases",title:"Crawl data from external database",slug:"/user-guide/crawler/configure-datasources/external-databases/"},a=void 0,l={id:"user-documentation/crawler/crawler-external-databases",title:"Crawl data from external database",description:"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS",source:"@site/docs/user-documentation/5-crawler/database.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/external-databases/",permalink:"/docs/user-guide/crawler/configure-datasources/external-databases/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/database.md",tags:[],version:"current",frontMatter:{id:"crawler-external-databases",title:"Crawl data from external database",slug:"/user-guide/crawler/configure-datasources/external-databases/"},sidebar:"manual",previous:{title:"Configure datasources introduction",permalink:"/docs/user-guide/crawler/configure-datasources/"},next:{title:"Crawl data from opensearch web source",permalink:"/docs/user-guide/crawler/configure-datasources/opensearch/"}},o={},d=[];function c(e){const s={a:"a",admonition:"admonition",em:"em",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Peuplez le catalogue avec les donn\xe9es contenues dans une base externe \xe0 REGARDS"})}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["Avant de pouvoir configurer une source de donn\xe9es depuis une base externe, vous devez obligatoirement avoir ",(0,r.jsx)(s.a,{href:"/docs/user-guide/data-organization/models/",children:"cr\xe9\xe9 un mod\xe8le de donn\xe9es"})," de type ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Data"})}),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue"]})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsxs)(s.p,{children:["Dans la carte ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Crawling"})}),", cliquez sur ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Map datasources to internal models"})})," puis sur ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Add"})}),"."]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["S\xe9lectionnez ensuite le mode ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"crawl data from an external data source"})}),"."]}),"\n"]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-database.png",alt:"database",width:"800"})}),"\n",(0,r.jsx)(s.p,{children:"Vous entrez ensuite l'\xe9diteur de cr\xe9ation d'une source de donn\xe9es compos\xe9 de trois \xe9tapes successives."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Select a connection"})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Choisissez dans la liste d\xe9roulante la connexion que vous venez de configurer puis appuyez\nsur ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Next"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Specify datasource attributes"})})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Configurez ensuite les attributs correspondants \xe0 votre source de donn\xe9es :","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"entrez le libell\xe9 de votre choix,"}),"\n",(0,r.jsx)(s.li,{children:"la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es,"}),"\n",(0,r.jsx)(s.li,{children:"choisissez ensuite le mod\xe8le que vous avez pr\xe9c\xe9demment import\xe9,"}),"\n",(0,r.jsxs)(s.li,{children:["le type de plugin pour d\xe9finir la mani\xe8re dont les donn\xe9es de la base de donn\xe9es externe vont \xeatre mapp\xe9es. Il y a actuellement deux types de mappings. Le plugin ",(0,r.jsx)(s.em,{children:"postgresql-datasource"})," permet de lier plusieurs attributs de plusieurs tables externes au mod\xe8le de donn\xe9es et ",(0,r.jsx)(s.em,{children:"postgresql-datasource-single-table"}),", permettant de lier les attributs d'une seule table."]}),"\n",(0,r.jsx)(s.li,{children:"Vous pouvez associer si vous le voulez une liste de tags aux donn\xe9es qui seront aspir\xe9es. Ils pourront faciliter les recherches dans le catalogue."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Data mapping"})})," :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"C'est sur cet \xe9cran que le mapping entre les donn\xe9es de la base externe et le mod\xe8le de REGARDS s\u2019effectue."}),"\n"]}),"\n",(0,r.jsx)("div",{align:"center",children:(0,r.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-database-step-3.png",alt:"database",width:"800"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Dans le bloc ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Connection browser"})})," vous pouvez visualiser les tables externes."]}),"\n",(0,r.jsxs)(s.li,{children:["Quel que soit le plugin de mapping que vous utilisez :","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["vous devrez faire la correspondance des attributs dans la section ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Links between model attributes and the connection"})}),"."]}),"\n",(0,r.jsx)(s.li,{children:"dans la premi\xe8re colonne, vous trouverez les attributs communs \xe0 toutes les donn\xe9es dans REGARDS et les attributs sp\xe9cifiques au mod\xe8le que vous avez import\xe9."}),"\n",(0,r.jsx)(s.li,{children:"dans la deuxi\xe8me colonne, vous devez remplir l'attribut correspondant dans votre table. Il y a des sp\xe9cificit\xe9s en fonction du plugin que vous avez choisi :"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Si vous avez choisi le plugin ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"postgresql-datasource"})})," :","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"tout d'abord, s\xe9lectionnez les tables qui seront mapp\xe9es par REGARDS dans la clause FROM, WHERE, [GROUP BY et HAVING]"}),"\n",(0,r.jsx)(s.li,{children:"ensuite, s\xe9lectionnez chaque attribut individuellement avec la clause SELECT"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Si vous avez choisi le plugin ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"postgresql-datasource-single-table"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"s\xe9lectionnez la table qui sera utilis\xe9e pour le mapping."}),"\n",(0,r.jsxs)(s.li,{children:["la section ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Links between model attributes and the connection"})}),", vous propose deux mani\xe8res de s\xe9lectionner les attributs. Vous pouvez directement choisir l'attribut de la table gr\xe2ce \xe0 la liste d\xe9roulante ou cocher la case ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Use SQL"})})," pour \xe9crire la clause du SELECT."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Cliquez ensuite sur le bouton ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"Save"})}),". Vous serez ensuite redirig\xe9 vers la liste des aspirations de donn\xe9es."]}),"\n",(0,r.jsxs)(s.li,{children:["V\xe9rifiez la cr\xe9ation de votre aspiration de donn\xe9es. Une fois l'aspiration cr\xe9\xe9e vous pouvez suivre son traitement dans ",(0,r.jsx)(s.a,{href:"/docs/user-guide/crawler/monitor-crawling/",children:"Monitoring"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var r=n(96540);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);