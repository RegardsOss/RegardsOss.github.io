"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[97358],{90018:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(74848),i=n(28453);const o={id:"release-notes-v1.14.0",title:"Version 1.14.0",slug:"/v1.14.0/",sidebar_position:9981},t=void 0,l={id:"notes/release-notes-v1.14.0",title:"Version 1.14.0",description:"Released on : December 2023",source:"@site/release_notes/notes/V1.14.0.md",sourceDirName:"notes",slug:"/v1.14.0/",permalink:"/release-notes/v1.14.0/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9981,frontMatter:{id:"release-notes-v1.14.0",title:"Version 1.14.0",slug:"/v1.14.0/",sidebar_position:9981},sidebar:"release_notes",previous:{title:"Version 1.14.7",permalink:"/release-notes/v1.14.7/"},next:{title:"Version 1.13.0",permalink:"/release-notes/v1.13.0/"}},d={},a=[{value:"Features",id:"features",level:2},{value:"Breaking change",id:"breaking-change",level:2},{value:"Deployment",id:"deployment",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Bug fixes",id:"bug-fixes",level:2}];function c(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Released on : ",(0,s.jsx)(r.strong,{children:"December 2023"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"https://www.gnu.org/licenses/gpl-3.0",children:(0,s.jsx)(r.img,{src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})}),"\n",(0,s.jsx)(r.strong,{children:"Operational version"})]}),"\n",(0,s.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"New delivery microservice to allow an user to order and be delivered on a S3 server when order is done."}),"\n",(0,s.jsx)(r.li,{children:"Allow to index a Postgres datasource having an ID field"}),"\n",(0,s.jsx)(r.li,{children:"New log and monitoring system with Graphana/Loki/Prometheus"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"breaking-change",children:"Breaking change"}),"\n",(0,s.jsx)(r.h3,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsx)(r.p,{children:"You need to follow the Ansible migration guide to update your playbook from V1.13 to V1.14"}),"\n",(0,s.jsx)(r.h3,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Microservice rs-catalog"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Search Engine Stac API: add support to search parameter ",(0,s.jsx)(r.code,{children:"sortby"})," (still support ",(0,s.jsx)(r.code,{children:"sortBy"}),") to follow the STAC specification"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Microservice rs-ingest"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["New optional parameter ",(0,s.jsx)(r.code,{children:"replaceErrors"})," in metadata section of SIP submission endpoint body ",(0,s.jsx)(r.code,{children:"/sips"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Microservice rs-order"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["New field ",(0,s.jsx)(r.code,{children:"sizeLimitInBytes"})," in AMQP message to create an order on ",(0,s.jsx)(r.code,{children:"regards.broadcast.fr.cnes.regards.modules.order.amqp.input.OrderRequestDtoEvent"})," ",(0,s.jsx)(r.a,{href:"/docs/development/backend/services/order/guides/create-order-amqp#order-request-format",children:"see api doc"})]}),"\n",(0,s.jsxs)(r.li,{children:["New fields ",(0,s.jsx)(r.code,{children:"totalSubOrders"})," and ",(0,s.jsx)(r.code,{children:"subOrderId"})," in suborder status notification on ",(0,s.jsx)(r.code,{children:"fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent"})," ",(0,s.jsx)(r.a,{href:"/docs/development/backend/services/order/guides/get-order-progress-amqp#suborder-done-response",children:"see api doc"})]}),"\n",(0,s.jsxs)(r.li,{children:["New fields ",(0,s.jsx)(r.code,{children:"errorCode"})," and ",(0,s.jsx)(r.code,{children:"errors"})," in suborder error notification on ",(0,s.jsx)(r.code,{children:"fr.cnes.regards.modules.order.amqp.output.OrderResponseDtoEvent"})," ",(0,s.jsx)(r.a,{href:"/docs/development/backend/services/order/guides/get-order-progress-amqp#invalid-response",children:"see api doc"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Improve Cesium map when there is large geometry."}),"\n",(0,s.jsx)(r.li,{children:"Fix product access rights computation"}),"\n",(0,s.jsx)(r.li,{children:"Improvement of the BD Hikari thread pool (increase waiting time for a connection in relation to the maximum duration of a bd connection)"}),"\n",(0,s.jsx)(r.li,{children:"Correction of the management of access rights and more precisely the right of access to data files."}),"\n",(0,s.jsx)(r.li,{children:"S3 Glacier plugin: separation of storage and restitution thread pools"}),"\n",(0,s.jsx)(r.li,{children:"S3 glacier plugin: correction of a problem on the locking system in the management of small file archives"}),"\n",(0,s.jsx)(r.li,{children:"S3 Glacier plugin: Fixed a memory problem when storing"}),"\n",(0,s.jsx)(r.li,{children:"Job management in the case where an error occurs on a tenant preventing to process other tenants"}),"\n",(0,s.jsx)(r.li,{children:"LTA parameters in the LTA request (geometry, tags, storePath) are now optional"}),"\n",(0,s.jsx)(r.li,{children:"Fixed an error when deleting erroneous ingest requests if the request was associated with a product with multiple versions"}),"\n",(0,s.jsx)(r.li,{children:"Error during CSV export of orders with filters"}),"\n",(0,s.jsx)(r.li,{children:"Fixed a postgres BD connection error if the size of the username field is too long"}),"\n",(0,s.jsx)(r.li,{children:"Fixed an error which caused all error logs on the catalog service to be recommended as coming from the STAC plugin"}),"\n",(0,s.jsx)(r.li,{children:"Add an index to OAIS AIP table to increase crawling on last update field"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);