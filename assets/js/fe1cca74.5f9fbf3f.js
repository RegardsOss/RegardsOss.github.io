"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[67261],{69157:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var d=s(74848),n=s(28453);const a={id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},r=void 0,l={id:"development/backend/regards/dam/events/backend-dam-events",title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/versioned_docs/version-1.14/development/backend/regards/dam/events/events.md",sourceDirName:"development/backend/regards/dam/events",slug:"/development/backend/services/dam/events/",permalink:"/docs/1.14/development/backend/services/dam/events/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/regards/dam/events/events.md",tags:[],version:"1.14",frontMatter:{id:"backend-dam-events",title:"Bus message events",slug:"/development/backend/services/dam/events/"},sidebar:"dev",previous:{title:"Datasource",permalink:"/docs/1.14/development/backend/services/dam/plugins/datasource/"},next:{title:"Geospatial features management",permalink:"/docs/1.14/development/backend/services/dam/geo/"}},i={},c=[];function o(e){const t={a:"a",admonition:"admonition",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.admonition,{type:"info",children:(0,d.jsxs)(t.p,{children:["To know more about bus message mechanism look at ",(0,d.jsx)(t.a,{href:"/docs/1.14/development/backend/framework/starters/amqp/",children:"AMQP starter"})]})}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Event"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Target"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Mode"}),(0,d.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/DatasetEvent.java",children:"DatasetEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"MICROSERVICE"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published For each event on a dataset entity (create, update, delete, index, error)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/entities/event/NotDatasetEntityEvent.java",children:"NotDatasetEntityEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"MICROSERVICE"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published For each event on object, collection and document entities (create, update, delete, index, error)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupEvent.java",children:"AccessGroupEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published for user group creation, modification or deletion"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupPublicEvent.java",children:"AccessGroupPublicEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when a public group is defined or removed"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupAssociationEvent.java",children:"AccessGroupAssociationEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when a group is associated to a user"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessgroup/event/AccessGroupDissociationEvent.java",children:"AccessGroupDissociationEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when a group is dissociated to a user"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/dam/dam-domain/src/main/java/fr/cnes/regards/modules/dam/domain/dataaccess/accessright/event/AccessRightEvent.java",children:"AccessRightEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when for access right creation, modification or deletion"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelCreated.java",children:"AttributeModelCreated"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when an attribute is created"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/AttributeModelDeleted.java",children:"AttributeModelDeleted"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when an attribute is deleted"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{style:{textAlign:"left"},children:(0,d.jsx)(t.a,{href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-dam/model/model-domain/src/main/java/fr/cnes/regards/modules/model/domain/event/FragmentDeletedEvent.java",children:"FragmentDeletedEvent"})}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"ALL"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Broadcast"}),(0,d.jsx)(t.td,{style:{textAlign:"left"},children:"Published when a fragment is deleted"})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var d=s(96540);const n={},a=d.createContext(n);function r(e){const t=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(a.Provider,{value:t},e.children)}}}]);