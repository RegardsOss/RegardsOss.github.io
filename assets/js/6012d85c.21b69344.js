"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[17893],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"backend-notifier-api",title:"Notifier API",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/api/"},p=void 0,d={unversionedId:"development/backend/regards/notifier/api/backend-notifier-api",id:"development/backend/regards/notifier/api/backend-notifier-api",isDocsHomePage:!1,title:"Notifier API",description:"Overview",source:"@site/docs/development/backend/regards/notifier/api/notifier-api.md",sourceDirName:"development/backend/regards/notifier/api",slug:"/development/backend/services/notifier/api/",permalink:"/docs/development/backend/services/notifier/api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/notifier-api.md",tags:[],version:"current",frontMatter:{id:"backend-notifier-api",title:"Notifier API",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/api/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/notifier/overview/"},next:{title:"Notifier configuration",permalink:"/docs/development/backend/services/notifier/api/configuration/"}},s=[{value:"Overview",id:"overview",children:[]},{value:"AMQP API",id:"amqp-api",children:[{value:"Send an event to notifier",id:"send-an-event-to-notifier",children:[]},{value:"Integration with <code>Feature Manager</code> and <code>Ingest</code>",id:"integration-with-feature-manager-and-ingest",children:[]}]}],c={toc:s};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manage rules and recipients configuration,"),(0,i.kt)("li",{parentName:"ul"},"Send notifications to external users or components according to its configuration.")),(0,i.kt)("p",null,"At the moment, 2 API are available :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A REST API to manage configuration,"),(0,i.kt)("li",{parentName:"ul"},"A messaging API (",(0,i.kt)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") for the receipt of the requests to be processed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Notifier architectural concepts",src:n(41741).Z})),(0,i.kt)("p",null,"This microservice receives requests from ",(0,i.kt)("inlineCode",{parentName:"p"},"Feature manager")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingest"),"."),(0,i.kt)("p",null,"All requests are then processed as they arrive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All rules are applied to all requests in order to identify target recipients,"),(0,i.kt)("li",{parentName:"ul"},"Notifications are then sent to these recipients.")),(0,i.kt)("p",null,"Under the hood, all the real work is done by the ",(0,i.kt)("strong",{parentName:"p"},"plugins")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plugins to manage the rules for dispatching notifications by recipients,"),(0,i.kt)("li",{parentName:"ul"},"Plugins to make the notification.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Format of the notification is totally free as the notification is fully delegated to a plugin."))),(0,i.kt)("h2",{id:"amqp-api"},"AMQP API"),(0,i.kt)("h3",{id:"send-an-event-to-notifier"},"Send an event to notifier"),(0,i.kt)("p",null,"Message has to be published on this exchange : ",(0,i.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationRequestEvent")),(0,i.kt)("p",null,"With following properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A free JSON element")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"payload"),(0,i.kt)("td",{parentName:"tr",align:"center"},"A free JSON element")))),(0,i.kt)("p",null,"And following headers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Header"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regards.tenant"),(0,i.kt)("td",{parentName:"tr",align:"center"},"The tenant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regards.request.id"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String of max 36 characters long")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regards.request.date"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ISO 8601 date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"regards.request.owner"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String of max 128 characters long")))),(0,i.kt)("h3",{id:"integration-with-feature-manager-and-ingest"},"Integration with ",(0,i.kt)("inlineCode",{parentName:"h3"},"Feature Manager")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Ingest")),(0,i.kt)("p",null,"Creations, updates or deletions of features or AIPs are optionnaly sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifier"),", this consist of the ",(0,i.kt)("strong",{parentName:"p"},"payload"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"metadata")," is a field allowing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingest")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Feature Manager")," to send additionnal information to ",(0,i.kt)("inlineCode",{parentName:"p"},"Notifier")," that rules and notification plugins might use or require."),(0,i.kt)("h4",{id:"template-of-notified-feature"},"Template of notified feature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": "{whatEverIsNeededOrWanted}",\n    "payload": "{feature}"\n}\n')),(0,i.kt)("h5",{id:"migration-from-14-to-15"},"Migration from 1.4 to 1.5"),(0,i.kt)("p",null,"Notification format using ",(0,i.kt)("strong",{parentName:"p"},"RabbitMQSender")," plugin has been updated between version 1.4 and 1.5:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"element")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"payload")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"action")," has been moved into objet ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," and is now located at ",(0,i.kt)("inlineCode",{parentName:"li"},"$.metadata.action")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"$.action"))),(0,i.kt)("p",null,(0,i.kt)("h2",{parentName:"p"},"Notification management"),(0,i.kt)("h3",{parentName:"p"},"How to retry notifications that failed"),(0,i.kt)("p",{parentName:"p"},"To retry notifications that failed, you need to send a new AMQP event with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"regards.request.id")," header.  "),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"If your event does not contain any body, it will retry the same event"),(0,i.kt)("li",{parentName:"ul"},"If you provides a body, it will be taken into account before retrying."))))}m.isMDXComponent=!0},41741:function(e,t,n){t.Z=n.p+"assets/images/architectural_concepts_notifier-a9ed0cce1c798f8d93bf20170fa9fe97.png"}}]);