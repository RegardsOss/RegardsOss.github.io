"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[5174],{49961:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var r=s(74848),n=s(28453);const d={id:"backend-amqp-publish-deletion-request",title:"Publish a deletion request event",sidebar_label:"Publish deletion request",slug:"/development/backend/services/fem/guides/amqp/publish-a-deletion-request"},i=void 0,a={id:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-deletion-request",title:"Publish a deletion request event",description:"Feature deletion request",source:"@site/versioned_docs/version-1.15/development/backend/regards/fem/api-guides/amqp/amqp-publish-delete-product-request.md",sourceDirName:"development/backend/regards/fem/api-guides/amqp",slug:"/development/backend/services/fem/guides/amqp/publish-a-deletion-request",permalink:"/docs/1.15/development/backend/services/fem/guides/amqp/publish-a-deletion-request",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/fem/api-guides/amqp/amqp-publish-delete-product-request.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-publish-deletion-request",title:"Publish a deletion request event",sidebar_label:"Publish deletion request",slug:"/development/backend/services/fem/guides/amqp/publish-a-deletion-request"},sidebar:"dev",previous:{title:"Publish product creation",permalink:"/docs/1.15/development/backend/services/fem/guides/amqp/publish-a-creation-request-event"},next:{title:"Publish patch request",permalink:"/docs/1.15/development/backend/services/fem/guides/amqp/publish-a-patch-request"}},l={},o=[{value:"Feature deletion request",id:"feature-deletion-request",level:3},{value:"Example",id:"example",level:4}];function c(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"feature-deletion-request",children:"Feature deletion request"}),"\n",(0,r.jsxs)(t.p,{children:["Request has to be published on this exchange : ",(0,r.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"priority"}),(0,r.jsxs)(t.td,{children:["(look at ",(0,r.jsx)(t.a,{href:"#metadatappt",children:"description above"}),")"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"urn"}),(0,r.jsx)(t.td,{children:"Unique identifier of the feature"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"With following headers:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.tenant"}),(0,r.jsx)(t.td,{children:"The tenant"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.request.id"}),(0,r.jsx)(t.td,{children:"String of max 36 characters long"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.request.date"}),(0,r.jsx)(t.td,{children:"ISO 8601 date"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regards.request.owner"}),(0,r.jsx)(t.td,{children:"String of max 128 characters long"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=78938463-023a-4488-b58c-52af3f7e9446\nregards.request.owner=owner\nregards.request.date=2020-03-17T12:24:05.995Z\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "priority": "NORMAL",\n    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1"\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var r=s(96540);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);