"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99253],{3243:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=s(74848),i=s(28453);const l={id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},t=void 0,a={id:"user-documentation/crawler/crawler-opensearch",title:"Crawl data from opensearch web source",description:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch",source:"@site/docs/user-documentation/5-crawler/opensearch.md",sourceDirName:"user-documentation/5-crawler",slug:"/user-guide/crawler/configure-datasources/opensearch/",permalink:"/docs/user-guide/crawler/configure-datasources/opensearch/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/5-crawler/opensearch.md",tags:[],version:"current",frontMatter:{id:"crawler-opensearch",title:"Crawl data from opensearch web source",slug:"/user-guide/crawler/configure-datasources/opensearch/"},sidebar:"manual",previous:{title:"Crawl data from external database",permalink:"/docs/user-guide/crawler/configure-datasources/external-databases/"},next:{title:"Crawl data from OAIS internal datasource",permalink:"/docs/user-guide/crawler/configure-datasources/aips/"}},o={},c=[];function d(e){const r={a:"a",admonition:"admonition",em:"em",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Peuplez le catalogue avec les donn\xe9es issues d'une source web Opensearch"})}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsxs)(r.p,{children:["Avant de pouvoir configurer une source de donn\xe9es depuis une source Opensearch, vous devez obligatoirement avoir ",(0,n.jsx)(r.a,{href:"/docs/user-guide/data-organization/models/",children:"cr\xe9\xe9 un mod\xe8le de donn\xe9es"})," de type ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Data"})}),", il servira \xe0 mettre en correspondance vos donn\xe9es et le mod\xe8le utilis\xe9 par le catalogue"]})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:["Depuis le menu ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Add data"})})," et la carte ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Crawling"})}),", cliquez sur ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Map data sources to internal models"})})," et effectuez les actions suivantes :"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Depuis l'\xe9cran ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Map data sources to internal models"})}),", cliquez sur ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Add"})})]}),"\n"]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource.png",alt:"add datasource",width:"800"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["S\xe9lectionnez l'option ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Crawls data from an OpenSearch Web Source"})})]}),"\n"]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-add-datasource-opensearch.png",alt:"opensearch",width:"800"})}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Crawler configuration"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Crawler name"})})," ",(0,n.jsx)(r.em,{children:"[Obligatoire]"}),", choisissez le nom de votre source de donn\xe9es."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Refresh rate"})})," ",(0,n.jsx)(r.em,{children:"[Obligatoire]"}),", la dur\xe9e entre deux rafraichissements en secondes. Celle-ci conditionnera la dur\xe9e entre deux scans de la source de donn\xe9es pour indexer le catalogue. Cela peut s'av\xe9rer utile lorsque des donn\xe9es sont r\xe9guli\xe8rement ajout\xe9es."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"OpenSearch descriptor URL"})})," ",(0,n.jsx)(r.em,{children:"[Obligatoire]"}),", l'URL permettant d'acc\xe9der au descripteur de recherche"]}),"\n",(0,n.jsxs)(r.li,{children:["Appuyez sur ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Next"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Query configuration"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Last update parameter"})})," ",(0,n.jsx)(r.em,{children:"[Optionnel]"}),", s\xe9lectionnez si vous le souhaitez la derni\xe8re date de mise \xe0 jour des m\xe9tadonn\xe9es parmi les attributs du model"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Page size"})})," ",(0,n.jsx)(r.em,{children:"[Obligatoire]"}),", limite le nombre maximal de donn\xe9es r\xe9cup\xe9r\xe9es, entre 1 et 1000"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"New filter"})})," ",(0,n.jsx)(r.em,{children:"[Optionnel]"}),", ajoutez de nouveaux filtres pour restreindre les donn\xe9es r\xe9cup\xe9r\xe9es en cliquant sur le bouton ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"New filter"})}),", s\xe9lectionnez dans la liste d\xe9roulante les attributs du mod\xe8le le crit\xe8re de restriction, appuyez sur le bouton de cr\xe9ation du filtre et remplissez sa valeur. N'h\xe9sitez pas \xe0 appuyer sur le bouton ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Test Query"})})," pour valider votre requ\xeate. Dans l'exemple suivant, toutes les donn\xe9es dont le label commence par la lettre A seront r\xe9cup\xe9r\xe9es :"]}),"\n"]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-2-example.png",alt:"example",width:"800"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Appuyez sur ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Next"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Results configuration"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Total results fields"})}),", s\xe9lectionne le nom de l'attribut opensearch contenant le nombre de r\xe9sultats"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Page size field"})})," , s\xe9lectionne le nom de l'attribut opensearch contenant le nombre maximal d'objets r\xe9cup\xe9r\xe9s"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Regards Model"})}),", le mod\xe8le utilis\xe9 pour faire correspondre les r\xe9sultats de la requ\xeate opensearch au catalogue. Renseignez les noms des champs \xe0 r\xe9cup\xe9rer en compl\xe9tant les attributs standards, communs \xe0 toutes les donn\xe9es, les fichiers associ\xe9s et les attributs dynamiques propres au mod\xe8le, par exemple :"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{src:"/images/user-documentation/v1.4/5-crawler/crawler-opensearch-step-3-example.png",alt:"example",width:"800"})}),"\n",(0,n.jsxs)(r.p,{children:["Appuyez sur le bouton ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Finish"})}),", Vous serez redirig\xe9 vers la liste des aspirations de donn\xe9es dans laquelle vous pourrez retrouver votre configuration. Vous pouvez suivre son traitement dans ",(0,n.jsx)(r.a,{href:"/docs/user-guide/crawler/monitor-crawling/",children:"Monitoring"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>a});var n=s(96540);const i={},l=n.createContext(i);function t(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);