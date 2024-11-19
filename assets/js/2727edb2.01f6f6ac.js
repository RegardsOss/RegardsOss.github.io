"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[21404],{99243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(74848),r=n(28453);const s={id:"backend-amqp-publish-notifier-request",title:"Publish a notifier request event",sidebar_label:"Publish a request",slug:"/development/backend/services/notifier/guides/amqp/publish-notifier"},d=void 0,o={id:"development/backend/regards/notifier/api-guides/amqp/backend-amqp-publish-notifier-request",title:"Publish a notifier request event",description:"This section describes how to publish a new notification request event to Notifier with AMQP message.",source:"@site/versioned_docs/version-1.15/development/backend/regards/notifier/api-guides/amqp/amqp-publish-request.md",sourceDirName:"development/backend/regards/notifier/api-guides/amqp",slug:"/development/backend/services/notifier/guides/amqp/publish-notifier",permalink:"/docs/1.15/development/backend/services/notifier/guides/amqp/publish-notifier",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/notifier/api-guides/amqp/amqp-publish-request.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-publish-notifier-request",title:"Publish a notifier request event",sidebar_label:"Publish a request",slug:"/development/backend/services/notifier/guides/amqp/publish-notifier"},sidebar:"dev",previous:{title:"Architecture",permalink:"/docs/1.15/development/backend/services/notifier/architecture/"},next:{title:"Import plugin conf",permalink:"/docs/1.15/development/backend/notifier/guides/rest/import-plugin-configuration"}},a={},l=[{value:"Send an event to notifier",id:"send-an-event-to-notifier",level:3},{value:"Integration with <code>Feature Manager</code> and <code>Ingest</code>",id:"integration-with-feature-manager-and-ingest",level:3},{value:"Template of notified feature",id:"template-of-notified-feature",level:4},{value:"Notification management",id:"notification-management",level:2},{value:"How to retry notifications that failed",id:"how-to-retry-notifications-that-failed",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This section describes how to publish a new notification request event to Notifier with AMQP message."}),"\n",(0,i.jsx)(t.h3,{id:"send-an-event-to-notifier",children:"Send an event to notifier"}),"\n",(0,i.jsxs)(t.p,{children:["Message has to be published on this\nexchange : ",(0,i.jsx)(t.code,{children:"regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationRequestEvent"})]}),"\n",(0,i.jsx)(t.p,{children:"With following properties:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Property"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"metadata"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"A free JSON element"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"payload"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"A free JSON element"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"And following headers:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Header"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"regards.tenant"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"The tenant"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"regards.request.id"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"String of max 36 characters long"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"regards.request.date"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"ISO 8601 date"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"regards.request.owner"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"String of max 128 characters long"})]})]})]}),"\n",(0,i.jsxs)(t.h3,{id:"integration-with-feature-manager-and-ingest",children:["Integration with ",(0,i.jsx)(t.code,{children:"Feature Manager"})," and ",(0,i.jsx)(t.code,{children:"Ingest"})]}),"\n",(0,i.jsxs)(t.p,{children:["Creations, updates or deletions of features or AIPs are optionally sent to ",(0,i.jsx)(t.code,{children:"Notifier"}),", this consist of the ",(0,i.jsx)(t.strong,{children:"payload"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"metadata"})," is a field allowing ",(0,i.jsx)(t.code,{children:"Ingest"})," or ",(0,i.jsx)(t.code,{children:"Feature Manager"})," to send additional information to ",(0,i.jsx)(t.code,{children:"Notifier"})," that rules\nand notification plugins might use or require."]}),"\n",(0,i.jsx)(t.h4,{id:"template-of-notified-feature",children:"Template of notified feature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "metadata": "{whatEverIsNeededOrWanted}",\n  "payload": "{feature}"\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notification-management",children:"Notification management"}),"\n",(0,i.jsx)(t.h3,{id:"how-to-retry-notifications-that-failed",children:"How to retry notifications that failed"}),"\n",(0,i.jsxs)(t.p,{children:["To retry notifications that failed, you need to send a new AMQP event with the same ",(0,i.jsx)(t.code,{children:"regards.request.id"})," header."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If your event does not contain anybody, it will retry the same event"}),"\n",(0,i.jsx)(t.li,{children:"If you provide a body, it will be taken into account before retrying."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);