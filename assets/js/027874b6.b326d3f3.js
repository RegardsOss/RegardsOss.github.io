"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[19125],{89603:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(74848),r=n(28453);const i={title:"Notify product",sidebar_label:"Notify product",sidebar_position:4,slug:"/development/backend/services/fem/guides/amqp/publish-a-notification-request"},d=void 0,o={id:"development/services/fem/api-guides/amqp/amqp-publish-notification-request",title:"Notify product",description:"This section describes how to notify a product to recipients with the Feature manager or rs-fem service of",source:"@site/docs/development/services/fem/api-guides/amqp/amqp-publish-notification-request.md",sourceDirName:"development/services/fem/api-guides/amqp",slug:"/development/backend/services/fem/guides/amqp/publish-a-notification-request",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-a-notification-request",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/fem/api-guides/amqp/amqp-publish-notification-request.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Notify product",sidebar_label:"Notify product",sidebar_position:4,slug:"/development/backend/services/fem/guides/amqp/publish-a-notification-request"},sidebar:"dev",previous:{title:"Delete product",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-a-deletion-request"},next:{title:"Acknowledge product",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-acknowledge-request"}},c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"AMQP API",id:"amqp-api",level:2},{value:"How to",id:"how-to",level:3},{value:"Exchange",id:"exchange",level:3},{value:"Request content",id:"request-content",level:3},{value:"Properties",id:"properties",level:4},{value:"Headers",id:"headers",level:4},{value:"Body",id:"body",level:4},{value:"Example for standard notification mode",id:"example-for-standard-notification-mode",level:3},{value:"Example for direct notification mode",id:"example-for-direct-notification-mode",level:3},{value:"Responses format",id:"responses-format",level:3}];function l(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["This section describes how to ",(0,t.jsx)(s.strong,{children:"notify a product"})," to recipients with the ",(0,t.jsx)(s.code,{children:"Feature manager"})," or ",(0,t.jsx)(s.code,{children:"rs-fem"})," service of\nREGARDS with ",(0,t.jsx)(s.strong,{children:"AMQP interfaces"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:["To notify products to one or many recipients ",(0,t.jsx)(s.code,{children:"Feature manager"})," or ",(0,t.jsx)(s.code,{children:"rs-fem"})," microservice relies on ",(0,t.jsx)(s.code,{children:"rs-notifier"}),"\nmicroservice."]}),"\n",(0,t.jsxs)(s.p,{children:["There is two ways to notify products to ",(0,t.jsx)(s.code,{children:"rs-notifier"})," service:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Normal"})," notification : Send the notifications in the ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/fem/conception#products-dissemination",children:"format"})," specific\nto\nthe rs-notifier service and let the service decide, based on its configuration, who to distribute the product to."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Direct"})," notification : Send notifications using the ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/fem/conception#products-dissemination",children:"format"})," specific\nto the rs-notifier service and specify the recipients required."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The diagram below explains the global processing of a new Feature notification request by REGARDS system.",(0,t.jsx)(s.br,{}),"\n","For a REGARDS client using message queuing, responses are sent for each change of your request status:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"DENIED"})," : Your request has been denied (possibly malformed request)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GRANTED"})," : Your request has been granted and will be processed soon"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ERROR"})," : Processing of your granted request finished in error status."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SUCCESS"})," : Processing of your granted request finished with success. Your SIP as been successfully ingest,\nAIP generated and associated files stored."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"sequence",src:n(56846).A+"",width:"617",height:"443"})}),"\n",(0,t.jsxs)(s.p,{children:["Requests and responses are linked with a correlation identifier : ",(0,t.jsx)(s.strong,{children:"requestId"})," provided into notification requests and\nadded in service responses."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["When you submit a Feature notification request you have to ensure that the provided ",(0,t.jsx)(s.strong,{children:"requestId is unique"}),".\nService will respond to your request with this identifier."]})}),"\n",(0,t.jsx)(s.h2,{id:"amqp-api",children:"AMQP API"}),"\n",(0,t.jsx)(s.h3,{id:"how-to",children:"How to"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/development/concepts/amqp-api/",children:"Regards AMQP API concept"})," describe how AMQP interfaces must be\nhandled to\nsubmit events or to subscribe to events."]}),"\n",(0,t.jsx)(s.h3,{id:"exchange",children:"Exchange"}),"\n",(0,t.jsx)(s.p,{children:"Notification requests have to be published to this REGARDS RabbitMQ exchange:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Exchange"}),(0,t.jsx)(s.th,{children:"Virtual host"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureNotificationRequestEvent"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"regards.multitenant.manager"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"request-content",children:"Request content"}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"priority"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"Standard RabbitMQ property to sort messages by priority order."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"content_encoding"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Standard RabbitMQ property for the encoding type of the message"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"content_type"}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"Standard RabbitMQ property for the MIME Type of the message sent"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"delivery_mode"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"Standard RabbitMQ property for the delivery mode (persistent or not)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Header"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Mandatory"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"regards.tenant"}),(0,t.jsxs)(s.td,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/development/concepts/multitenant/",children:"tenant or project"})," to request. It ",(0,t.jsx)(s.strong,{children:"must"})," be an existing Regards tenant."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"regards.request.id"}),(0,t.jsxs)(s.td,{children:["String of max 36 characters long. ",(0,t.jsx)(s.strong,{children:"You must ensure that this id is unique"}),"."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"regards.request.date"}),(0,t.jsxs)(s.td,{children:["ISO 8601 date (",(0,t.jsx)(s.strong,{children:"can be in the future to delay request processing"}),"). ",(0,t.jsx)("br",{}),"See ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/fem/conception#delaying-the-processing-of-requests",children:"How it works section"})," for more information."]}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"regards.request.owner"}),(0,t.jsx)(s.td,{children:"String of max 128 characters long"}),(0,t.jsx)(s.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Use the request date parameter to delay the request processing if you need to by giving a date in the future.\nThe given date, will the execution date of our request.\nIf a past date is provided, request will be processed as soon as possible."})}),"\n",(0,t.jsx)(s.h4,{id:"body",children:"Body"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Mandatory"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"urn"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"String"})}),(0,t.jsx)(s.td,{children:"Product URN to notify."}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"priority"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"String"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"HIGH"}),", ",(0,t.jsx)(s.code,{children:"NORMAL"}),", ",(0,t.jsx)(s.code,{children:"LOW"}),".",(0,t.jsx)("br",{})," See ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/fem/conception#request-priority",children:"How it works section"})," for more information."]}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"recipients"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"set<String>"})}),(0,t.jsxs)(s.td,{children:["List of recipients. To be provided only for ",(0,t.jsx)(s.strong,{children:"direct notification mode"}),"."]}),(0,t.jsx)(s.td,{children:"False"})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"If notification recipients are supplied, they must correspond to existing recipients configured on the rs-notifier\nservice."})}),"\n",(0,t.jsx)(s.h3,{id:"example-for-standard-notification-mode",children:"Example for standard notification mode"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:"title='paylod for notification request'",children:'{\n  "urn": "URN:FEATURE:DATA:project1:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n  "priority": "NORMAL"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"example-for-direct-notification-mode",children:"Example for direct notification mode"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-properties",children:"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:"title='paylod for notification request'",children:'{\n  "urn": "URN:FEATURE:DATA:project1:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n  "priority": "NORMAL",\n  "recipients": [\n    "MISSION-1",\n    "MISSION-2"\n  ]\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"responses-format",children:"Responses format"}),"\n",(0,t.jsxs)(s.p,{children:["To learn how to subscribe to your request responses as described in the introduction\ndiagram see ",(0,t.jsx)(s.a,{href:"/docs/development/backend/services/fem/guides/amqp/subscribe-to-requests-responses",children:"Subscribe to responses"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},56846:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/feature-request-nominal-e89430c18e2e97c99447cca83592a534.png"},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);