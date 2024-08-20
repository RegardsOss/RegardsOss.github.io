"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[26240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"backend-amqp-publish-ack",title:"Publish acknowledge event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event"},i=void 0,o={unversionedId:"development/backend/regards/ingest/amqp/backend-amqp-publish-ack",id:"version-1.15/development/backend/regards/ingest/amqp/backend-amqp-publish-ack",title:"Publish acknowledge event",description:"This section describes how to submit acknowledge dissemination of OAIS product thanks to AMQPS interface.",source:"@site/versioned_docs/version-1.15/development/backend/regards/ingest/amqp/ingest-amqp-publish-ack.md",sourceDirName:"development/backend/regards/ingest/amqp",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event",permalink:"/docs/development/backend/services/ingest/amqp/publish-acknowledge-event",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/ingest/amqp/ingest-amqp-publish-ack.md",tags:[],version:"1.15",frontMatter:{id:"backend-amqp-publish-ack",title:"Publish acknowledge event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/ingest/amqp/publish-acknowledge-event"},sidebar:"dev",previous:{title:"Publish OAIS product",permalink:"/docs/development/backend/services/ingest/amqp/publish-a-ingest-request"},next:{title:"REST API",permalink:"/docs/development/backend/services/ingest/api-swagger"}},p={},s=[{value:"Exchange",id:"exchange",level:2},{value:"Request format",id:"request-format",level:2},{value:"Properties",id:"properties",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to submit acknowledge dissemination of OAIS product thanks to AMQPS interface."),(0,r.kt)("h2",{id:"exchange"},"Exchange"),(0,r.kt)("p",null,"Submission requests have to be published to REGARDS Rabbitmq exchange:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Exchange"),(0,r.kt)("th",{parentName:"tr",align:null},"Virtual host"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"regards.broadcast.fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"regards.multitenant.manager"))))),(0,r.kt)("h2",{id:"request-format"},"Request format"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to track message origin.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to sort messages by priority order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property for the encoding type of the message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property for the MIME Type of the message sent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delivery_mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard RabbitMQ property for the delivery mode (persistent or not)")))),(0,r.kt)("h3",{id:"headers"},"Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Tenant name depends on REGARDS instance project configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of content of the message")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of the properties and headers of an Ingest request event message"',title:'"Example',of:!0,the:!0,properties:!0,and:!0,headers:!0,an:!0,Ingest:!0,request:!0,event:!0,'message"':!0},'{\n  "app_id": "{ID of app}",\n  "priority": 1,\n  "delivery_mode": 2,\n  "content_encoding": "UTF-8",\n  "content_type": "application/json",\n  "headers": [\n    {\n      "regards.tenant": "REGARDS",\n      "regards.type": "fr.cnes.regards.modules.ingest.dto.request.event.DisseminationAckEvent"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "urn": "URN:...",\n  "recipientLabel": "xxx"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"urn"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Product URN to acknowledge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recipientLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the recipient to acknowledge")))),(0,r.kt)("admonition",{title:"recipient Label",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is the identifier of the external service from which the acknowledgment message was sent. This\nidentifier matches one of the values that were added in the ",(0,r.kt)("strong",{parentName:"p"},"recipientLabel")," parameter when\nmanual configuration of the notification service plugin.")))}c.isMDXComponent=!0}}]);