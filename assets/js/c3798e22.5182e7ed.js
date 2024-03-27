"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[12100],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={id:"backend-amqp-publish-acknowledge-request",title:"Publish an acknowledge request event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/fem/guides/amqp/publish-acknowledge-request"},i=void 0,g={unversionedId:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-acknowledge-request",id:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-acknowledge-request",title:"Publish an acknowledge request event",description:"This section describes how to publish an acknowledge request event to REGARDS with AMQP message.",source:"@site/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-ack-request.md",sourceDirName:"development/backend/regards/fem/api-guides/amqp",slug:"/development/backend/services/fem/guides/amqp/publish-acknowledge-request",permalink:"/docs/next/development/backend/services/fem/guides/amqp/publish-acknowledge-request",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-ack-request.md",tags:[],version:"current",frontMatter:{id:"backend-amqp-publish-acknowledge-request",title:"Publish an acknowledge request event",sidebar_label:"Publish acknowledge",slug:"/development/backend/services/fem/guides/amqp/publish-acknowledge-request"},sidebar:"dev",previous:{title:"Architecture",permalink:"/docs/next/development/backend/services/fem/architecture/"},next:{title:"Publish product creation",permalink:"/docs/next/development/backend/services/fem/guides/amqp/publish-a-creation-request-event"}},p={},o=[{value:"Exchange",id:"exchange",level:2},{value:"AMQP message format",id:"amqp-message-format",level:2},{value:"Properties",id:"properties",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3}],s={toc:o},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This section describes how to publish an acknowledge request event to REGARDS with AMQP message."),(0,r.yg)("h2",{id:"exchange"},"Exchange"),(0,r.yg)("p",null,"Acknowledge requests have to be published to REGARDS Rabbitmq exchange:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Exchange"),(0,r.yg)("th",{parentName:"tr",align:null},"Virtual host"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fr.cnes.regards.modules.feature.dto.event.in.DisseminationAckEvent")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"regards.multitenant.manager"))))),(0,r.yg)("h2",{id:"amqp-message-format"},"AMQP message format"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"app_id"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to track message origin.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"priority"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Standard RabbitMQ property to sort messages by priority order.")))),(0,r.yg)("h3",{id:"headers"},"Headers"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"regards.tenant": "tenant"\n"regards.request.owner": "owner"\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Tenant name depends on REGARDS instance project configuration.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:"center"},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the request provider.")))),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "urn": "URN:...",\n  "recipientLabel": "xxx"\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"urn"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Product URN to acknowledge")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"recipientLabel"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the recipient to acknowledge")))))}u.isMDXComponent=!0}}]);