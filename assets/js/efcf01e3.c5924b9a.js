"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93200],{27380:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=i(74848),r=i(28453);const n={id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},a=void 0,o={id:"development/backend/regards/storage/backend-storage-overview",title:"REGARDS storage microservice",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/storage/storage.md",sourceDirName:"development/backend/regards/storage",slug:"/development/backend/services/storage/overview/",permalink:"/docs/1.14/development/backend/services/storage/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/storage/storage.md",tags:[],version:"1.14",frontMatter:{id:"backend-storage-overview",title:"REGARDS storage microservice",sidebar_label:"Overview",slug:"/development/backend/services/storage/overview/"},sidebar:"dev",previous:{title:"Processing",permalink:"/docs/1.14/development/backend/services/processing/plugins/"},next:{title:"API",permalink:"/docs/1.14/development/backend/services/storage/api-swagger"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Store AIP",id:"store-aip",level:3},{value:"Retrive AIP files",id:"retrive-aip-files",level:3},{value:"Available Extension points",id:"available-extension-points",level:2},{value:"Bus message events",id:"bus-message-events",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Storage"})," reponsabilities:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Store/Delete/Monitor AIPs."}),"\n",(0,t.jsx)(s.li,{children:"Add/remove tag(s) on AIPs."}),"\n",(0,t.jsx)(s.li,{children:"Makes AIP files available in cache system for retrieval."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(8359).A+"",width:"483",height:"264"})}),"\n",(0,t.jsx)(s.h3,{id:"store-aip",children:"Store AIP"}),"\n",(0,t.jsxs)(s.p,{children:["The schema here under shows the main process of AIP storing. ",(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/allocation-strategy/",children:"Allocation strategy"})," and ",(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/data-storage/",children:"Data storages"})," are designed as extension points to allow developer to create their own businness needs."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(62649).A+"",width:"910",height:"387"})}),"\n",(0,t.jsx)(s.h3,{id:"retrive-aip-files",children:"Retrive AIP files"}),"\n",(0,t.jsxs)(s.p,{children:["In order to optimize files access time, REGARDS handle a cache storage system. When a file is asked to be retrieve, if the file is not directly accessible from disk storage ",(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/data-storage/",children:"Online Data storages"})," the file is temporarly copied in cache system. The expiration date of a file in this cache system is configurable in the retrieve access request."]}),"\n",(0,t.jsx)(s.h2,{id:"available-extension-points",children:"Available Extension points"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/allocation-strategy/",children:"Allocation strategy plugins"})," : Strategy to dispatch files in available storage systems."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/data-storage/",children:"Data storage plugins"})," : Storage systems"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/plugins/security-delegation/",children:"Security delegation plugins"})," : Delegate access rights to stored files"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"bus-message-events",children:"Bus message events"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/services/storage/events/",children:"Events"})}),"\n"]})]})}function v(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8359:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/storage-6a04f3ba9b5014967890ff56afade41c.svg"},62649:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/sto-store-aip-simple-f1d5424f7a47c2d9b49a46bda421ce74.png"},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var t=i(96540);const r={},n=t.createContext(r);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);