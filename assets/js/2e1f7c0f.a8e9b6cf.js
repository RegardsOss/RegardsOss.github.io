"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[68461],{56251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(74848),r=t(28453);const i={id:"backend-amqp-publish-ack",title:"Publish acknowledge event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event"},d=void 0,a={id:"development/backend/regards/ingest/amqp/backend-amqp-publish-ack",title:"Publish acknowledge event",description:"This section describes how to submit acknowledge dissemination of OAIS product thanks to AMQPS interface.",source:"@site/versioned_docs/version-1.15/development/backend/regards/ingest/amqp/ingest-amqp-publish-ack.md",sourceDirName:"development/backend/regards/ingest/amqp",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event",permalink:"/docs/1.15/development/backend/services/ingest/amqp/publish-acknowledge-event",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/ingest/amqp/ingest-amqp-publish-ack.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-publish-ack",title:"Publish acknowledge event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event"},sidebar:"dev",previous:{title:"Publish OAIS product",permalink:"/docs/1.15/development/backend/services/ingest/amqp/publish-a-ingest-request"},next:{title:"REST API",permalink:"/docs/1.15/development/backend/services/ingest/api-swagger"}},c={},o=[{value:"Exchange",id:"exchange",level:2},{value:"Request format",id:"request-format",level:2},{value:"Properties",id:"properties",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This section describes how to submit acknowledge dissemination of OAIS product thanks to AMQPS interface."}),"\n",(0,s.jsx)(n.h2,{id:"exchange",children:"Exchange"}),"\n",(0,s.jsx)(n.p,{children:"Submission requests have to be published to REGARDS Rabbitmq exchange:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Exchange"}),(0,s.jsx)(n.th,{children:"Virtual host"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"regards.broadcast.fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"regards.multitenant.manager"})})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"request-format",children:"Request format"}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"app_id"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Standard RabbitMQ property to track message origin."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"priority"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Standard RabbitMQ property to sort messages by priority order."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content_encoding"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Standard RabbitMQ property for the encoding type of the message"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"content_type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Standard RabbitMQ property for the MIME Type of the message sent"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"delivery_mode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"Standard RabbitMQ property for the delivery mode (persistent or not)"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"regards.tenant"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Tenant name depends on REGARDS instance project configuration."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"regards.type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Type of content of the message"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example of the properties and headers of an Ingest request event message"',children:'{\n  "app_id": "{ID of app}",\n  "priority": 1,\n  "delivery_mode": 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": [\n    {\n      "regards.tenant": "REGARDS",\n      "regards.type": "fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "urn": "URN:...",\n  "recipientLabel": "xxx"\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"urn"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Product URN to acknowledge"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recipientLabel"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Name of the recipient to acknowledge"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"recipient Label",type:"info",children:(0,s.jsxs)(n.p,{children:["This is the identifier of the external service from which the acknowledgment message was sent. This\nidentifier matches one of the values that were added in the ",(0,s.jsx)(n.strong,{children:"recipientLabel"})," parameter when\nmanual configuration of the notification service plugin."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);