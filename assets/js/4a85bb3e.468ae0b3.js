"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[91255],{71101:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=a(74848),n=a(28453);const r={id:"backend-storage-data-storage-plugins",title:"Data storage plugins",sidebar_label:"Data storage",slug:"/development/backend/services/storage/plugins/data-storage/"},o=void 0,i={id:"development/backend/regards/storage/plugins/backend-storage-data-storage-plugins",title:"Data storage plugins",description:"Overview",source:"@site/versioned_docs/version-1.14/development/backend/regards/storage/plugins/data-storage-plugins.md",sourceDirName:"development/backend/regards/storage/plugins",slug:"/development/backend/services/storage/plugins/data-storage/",permalink:"/docs/1.14/development/backend/services/storage/plugins/data-storage/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/storage/plugins/data-storage-plugins.md",tags:[],version:"1.14",frontMatter:{id:"backend-storage-data-storage-plugins",title:"Data storage plugins",sidebar_label:"Data storage",slug:"/development/backend/services/storage/plugins/data-storage/"},sidebar:"dev",previous:{title:"Allocation strategy",permalink:"/docs/1.14/development/backend/services/storage/plugins/allocation-strategy/"},next:{title:"Security delegation",permalink:"/docs/1.14/development/backend/services/storage/plugins/security-delegation/"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Implementation",id:"implementation",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"This extension point allows to define a new file storage system."})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)("b",{children:"NOTE : "})," There is two types of storage system in REGARDS :"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Online : Files are directly accessible. (Synchronous retrieval)"}),"\n",(0,t.jsx)(s.li,{children:"Nearline : Files are on a long term archive system and needs times to be extracted. (Asynchronous retrieval)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"REGARDS provides many implementation of this extension point :"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/datastorage/local/LocalDataStorage.java",children:"LocalDataStorage"})," : Locak disk storage system."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IDataStorage.java",children:"IDataStorage"})," : Main interface"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IOnlineDataStorage.java",children:"IOnlineDataStorage"})," : Interface for ",(0,t.jsx)(s.code,{children:"Online"})," systems."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/INearlineDataStorage.java",children:"INearlineDataStorage"})," : Interface for ",(0,t.jsx)(s.code,{children:"Nearline"})," systems."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsxs)(s.p,{children:["To learn more about how to create your own plugin see ",(0,t.jsx)(s.a,{href:"/docs/1.14/development/backend/framework/modules/plugins/",children:"Plugins"})]})]})}function g(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>i});var t=a(96540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);