"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[47913],{46353:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(74848),s=i(28453);const r={id:"backend-notifier-architecture",title:"How it works",sidebar_label:"How it works",slug:"/development/backend/services/notifier/architecture/",sidebar_position:2},o=void 0,a={id:"development/services/notifier/backend-notifier-architecture",title:"How it works",description:"Introduction",source:"@site/docs/development/services/notifier/conception.md",sourceDirName:"development/services/notifier",slug:"/development/backend/services/notifier/architecture/",permalink:"/docs/development/backend/services/notifier/architecture/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/notifier/conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"backend-notifier-architecture",title:"How it works",sidebar_label:"How it works",slug:"/development/backend/services/notifier/architecture/",sidebar_position:2},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/notifier/overview/"},next:{title:"Publish a request",permalink:"/docs/development/backend/services/notifier/guides/amqp/publish-notifier"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Notification format",id:"notification-format",level:2},{value:"Configure recipients",id:"configure-recipients",level:2},{value:"Example",id:"example",level:3},{value:"Configure dispatching rules",id:"configure-dispatching-rules",level:2},{value:"GeoJson Product rule configuration example",id:"geojson-product-rule-configuration-example",level:3},{value:"OAIS Product rule configuration example",id:"oais-product-rule-configuration-example",level:3},{value:"Associate rules and recipients",id:"associate-rules-and-recipients",level:2},{value:"Example",id:"example-1",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Notifier"})," responsibilities:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Manage rules and recipients configuration,"}),"\n",(0,t.jsx)(n.li,{children:"Send notifications to external users or components according to its configuration."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The service only has one module. This one receives the notifications, mainly from GeoJSON and OAIS catalogs.\nThen, these notifications pass through rules and, if they match the rules, jobs are launched to send notification\nthanks to various plugins."}),"\n",(0,t.jsxs)(n.p,{children:["Configuration is an important part of this service, as the rules and the plugins are defined through the\n",(0,t.jsx)(n.code,{children:"Notifier"})," service configuration."]}),"\n",(0,t.jsx)(n.p,{children:"At the moment, 2 API are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A REST API to manage configuration"}),"\n",(0,t.jsxs)(n.li,{children:["A messaging API (",(0,t.jsx)(n.a,{href:"https://www.amqp.org/",children:"AMQP"}),") for the receipt of the requests to be processed"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Notifier architectural concepts",src:i(9220).A+"",width:"1135",height:"395"})}),"\n",(0,t.jsxs)(n.p,{children:["This microservice receives requests from ",(0,t.jsx)(n.code,{children:"Feature manager"})," and ",(0,t.jsx)(n.code,{children:"Ingest"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"All requests are then processed as they arrive:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All rules are applied to all requests in order to identify target recipients"}),"\n",(0,t.jsx)(n.li,{children:"Notifications are then sent to these recipients"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Under the hood, all the real work is done by the ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/intro",children:"plugins"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"notification-format",children:"Notification format"}),"\n",(0,t.jsx)(n.p,{children:"The notifier microservice allows you to forward any type of notification with any type of content, as long as you\ncomply with the specific format indicated below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "metadata": {},\n  "payload": {}\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Section"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Mandatory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Metadata"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Set of metadata describing the notification (can be empty)"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Payload"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"Content of the notification to be distributed."}),(0,t.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For example, you can find the format of the notifications sent by the ",(0,t.jsx)(n.code,{children:"FeatureManager"})," and ",(0,t.jsx)(n.code,{children:"Ingest"})," microservices as\npart of the respective functional groups ",(0,t.jsx)(n.a,{href:"/docs/development/functional-overview/geojson-catalog-services/",children:"GeoJson catalog services"}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/development/functional-overview/oais-catalog-services/",children:"OAIS Catalog services"})," in the documentation for each of the\ntwo services:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[Products notification format sent by Feature manager service]"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/development/backend/services/ingest/conception/#products-notification-format",children:"Products notification format sent by Ingest service"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-recipients",children:"Configure recipients"}),"\n",(0,t.jsxs)(n.p,{children:["The first thing to do when configuring the ",(0,t.jsx)(n.code,{children:"rs-notifier"})," microservice is to define the recipients to whom notifications\nwill be sent. To do this, you need to ask yourself:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Which component do I want to notify?"}),"\n",(0,t.jsx)(n.li,{children:"What notification format does the component expect?"}),"\n",(0,t.jsx)(n.li,{children:"Is there a plugin available for this type of notification?"}),"\n",(0,t.jsx)(n.li,{children:"Will the recipient acknowledge receipt of the notification?"}),"\n",(0,t.jsx)(n.li,{children:"Do I authorise the system administrators to manually notify this recipient?"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"REGARDS provides plugins to :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["broadcast notifications without modification on\na ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender#rabbitmqsender",children:"RabbitMQ message bus"})]}),"\n",(0,t.jsxs)(n.li,{children:["broadcast notifications to internal components such\nas ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender#worker-manager-sender",children:"WorkerManager"}),"\nor ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender#lta-request-sender",children:"LTAManager"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more on plugins and configuration see ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender",children:"recipient plugins section"}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/configuration/import-export",children:"configuration section"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Let's say we want to send notifications to a recipient named external-system-1 via a RabbitMQ message bus without\nmodifying the content."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Which component do I want to notify?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"}),": external-system-1"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": What notification format does the component expect?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"}),": An event sent to Regards RabbitMQ server on a dedicated exchange named ",(0,t.jsx)(n.strong,{children:"external.system-1.dissemination"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Is there a plugin available for this type of notification?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"}),": Yes, the ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender#rabbitmqsender",children:"RabbitMQSender"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Will the recipient acknowledge receipt of the notification?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"}),": No, my external system is unable to acknowledge."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),":Do"," I authorise the system administrators to manually notify this recipient?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"}),":Yes"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "RabbitMQSender",\n    "label": "External system one",\n    "businessId": "external-system-1",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "exchange",\n        "type": "STRING",\n        "value": "external.system-1.dissemination"\n      },\n      {\n        "name": "queueName",\n        "type": "STRING",\n        "value": "external.system-1.dissemination"\n      },\n      {\n        "name": "recipientLabel",\n        "type": "STRING",\n        "value": "external-system-1"\n      },\n      {\n        "name": "ackRequired",\n        "type": "BOOLEAN",\n        "value": false\n      },\n      {\n        "name": "description",\n        "type": "STRING",\n        "value": "Send notification to external-system-1"\n      },\n      {\n        "name": "directNotificationEnabled",\n        "type": "BOOLEAN",\n        "value": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configure-dispatching-rules",children:"Configure dispatching rules"}),"\n",(0,t.jsxs)(n.p,{children:["After determining who will receive the notifications sent by the ",(0,t.jsx)(n.code,{children:"Notify"})," microservice, you then need to determine the\nrules\nfor selecting the notifications that will be broadcast."]}),"\n",(0,t.jsx)(n.p,{children:"To do this, you need to ask yourself:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Which notifications do I want to forward to my recipient?"}),"\n",(0,t.jsx)(n.li,{children:"Is there a rules plugin that allows me to select these notifications?"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["REGARDS provides two rule plugins ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/rule-matcher#lucene-rule-matcher",children:"lucene"})," and\n",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/rule-matcher#default-rule-matcher",children:"default"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more on plugins and configuration see ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/rule-matcher",children:"rules plugins section"}),"\nand ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/configuration/import-export",children:"configuration section"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"geojson-product-rule-configuration-example",children:"GeoJson Product rule configuration example"}),"\n",(0,t.jsx)(n.p,{children:"For example, let's imagine that we want to send to recipients all GeoJson product notifications indicating the creation\nof a new product and whose is_valid property is equal to true."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Which notifications do I want to forward to my recipient?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"})," : GeoJson (or rs-fem) product notification. Format of these notifications is defined in the\n",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/fem/conception",children:"Feature Manager documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Is there a rules plugin that allows me to select these notifications?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"})," : Yes, the ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/rule-matcher#lucene-rule-matcher",children:"lucene plugin"}),"\nallows me to make a selection rule in the metadata section for the type of\nnotification indicating the creation of a new product and in the payload section to only notify products with\nthe is_valid attribute set to true."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='Notifier rule configuration example'",children:'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "LuceneRuleMatcher",\n    "label": "FEM new created valid products rule",\n    "businessId": "fem-valid-products-rule",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "payload_rule",\n        "type": "STRING",\n        "value": "properties.is_valid: true"\n      },\n      {\n        "name": "metadata_rule",\n        "type": "STRING",\n        "value": "action: CREATED"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"oais-product-rule-configuration-example",children:"OAIS Product rule configuration example"}),"\n",(0,t.jsx)(n.p,{children:"For example, let's imagine that we want to send to recipients all OAIS product notifications indicating the creation\nof a new product and whose is_valid property is equal to true."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Which notifications do I want to forward to my recipient ?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"})," : OAIS product notification. Format of these notifications is defined in the\n",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/ingest/conception/#products-notification-format",children:"ingest documentation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": Is there a rules plugin that allows me to select these notifications?",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Response"})," : Yes, the ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/plugins/rule-matcher#lucene-rule-matcher",children:"lucene plugin"}),"\nallows me to make a selection rule in the metadata section for the type of\nnotification indicating the creation of a new product and in the payload section to only notify products with\nthe is_valid attribute set to true."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='Notifier rule configuration example'",children:'{\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId": "LuceneRuleMatcher",\n    "label": "OAIS new created valid products rule",\n    "businessId": "oais-valid-products-rule",\n    "version": "1.0.0",\n    "priorityOrder": 0,\n    "active": true,\n    "parameters": [\n      {\n        "name": "payload_rule",\n        "type": "STRING",\n        "value": "aip.properties.descriptiveInformation.is_valid: true"\n      },\n      {\n        "name": "metadata_rule",\n        "type": "STRING",\n        "value": "action: INGEST"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"associate-rules-and-recipients",children:"Associate rules and recipients"}),"\n",(0,t.jsxs)(n.p,{children:["The last thing to do to configure the ",(0,t.jsx)(n.code,{children:"Notifier"})," microservice is to associate the broadcast rules with the recipients.\nThis means that any notification that respects a configured rule will be broadcast to one or more configured recipients."]}),"\n",(0,t.jsxs)(n.p,{children:["To lean more on how to configure the service see ",(0,t.jsx)(n.a,{href:"/docs/development/backend/services/notifier/configuration/import-export",children:"configuration section"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Let's say I want to associate the rule in the example for distributing new valid OAIS products with\nthe external-system-1 recipient presented in the previous examples."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:"title='Notifier configuration example'",children:'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n    "ruleId": "oais-valid-products-rule",\n    "recipientIds": [\n      "external-system-1"\n    ]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9220:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/architectural_concepts_notifier-a9ed0cce1c798f8d93bf20170fa9fe97.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);