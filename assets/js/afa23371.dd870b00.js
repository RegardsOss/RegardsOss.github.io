"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[85533],{28334:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453);const a={id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},o=void 0,i={id:"development/backend/regards/storage/events/backend-storage-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.14/development/backend/regards/storage/events/events.md",sourceDirName:"development/backend/regards/storage/events",slug:"/development/backend/services/storage/events/",permalink:"/docs/1.14/development/backend/services/storage/events/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/storage/events/events.md",tags:[],version:"1.14",frontMatter:{id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/services/storage/events/"},sidebar:"dev",previous:{title:"Security delegation",permalink:"/docs/1.14/development/backend/services/storage/plugins/security-delegation/"},next:{title:"Overview",permalink:"/docs/1.14/development/backend/services/worker-manager/overview/"}},d={},l=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["To know more about bus message mechanism look at ",(0,n.jsx)(t.a,{href:"/docs/1.14/development/backend/framework/starters/amqp/",children:"AMQP starter"})]})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Event"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Target"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Mode"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java",children:"AIPEvent"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ONE_PER_MICROSERVICE_TYPE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java",children:"DataFileEvent"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java",children:"DataStorageEvent"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"MICROSERVICE"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unicast"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Published when a file is stored, deleted or restored"})]})]})]})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);