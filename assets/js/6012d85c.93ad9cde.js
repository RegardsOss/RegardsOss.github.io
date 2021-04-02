(window.webpackJsonp=window.webpackJsonp||[]).push([[966],{1039:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(2708)),o={id:"backend-notifier-api",title:"Notifier API",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/api/"},c={unversionedId:"development/backend/regards/notifier/api/backend-notifier-api",id:"development/backend/regards/notifier/api/backend-notifier-api",isDocsHomePage:!1,title:"Notifier API",description:"Overview",source:"@site/docs/development/backend/regards/notifier/api/notifier-api.md",slug:"/development/backend/services/notifier/api/",permalink:"/docs/development/backend/services/notifier/api/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/notifier-api.md",version:"current",sidebar_label:"Notifier",sidebar:"dev",previous:{title:"Notifier microservice",permalink:"/docs/development/backend/services/notifier/overview/"},next:{title:"Notifier configuration",permalink:"/docs/development/backend/services/notifier/api/configuration/"}},b=[{value:"Overview",id:"overview",children:[]},{value:"AMQP API",id:"amqp-api",children:[{value:"Send an event to notifier",id:"send-an-event-to-notifier",children:[]},{value:"Integration with <code>Feature Manager</code> and <code>Ingest</code>",id:"integration-with-feature-manager-and-ingest",children:[]}]}],l={toc:b};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Notifier")," reponsabilities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage rules and recipients configuration,"),Object(i.b)("li",{parentName:"ul"},"Send notifications to external users or components according to its configuration.")),Object(i.b)("p",null,"At the moment, 2 API are available :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A REST API to manage configuration,"),Object(i.b)("li",{parentName:"ul"},"A messaging API (",Object(i.b)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") for the receipt of the requests to be processed.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Notifier architectural concepts",src:n(2741).default})),Object(i.b)("p",null,"This microservice receives requests from ",Object(i.b)("inlineCode",{parentName:"p"},"Feature manager")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Ingest"),"."),Object(i.b)("p",null,"All requests are then processed as they arrive:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All rules are applied to all requests in order to identify target recipients,"),Object(i.b)("li",{parentName:"ul"},"Notifications are then sent to these recipients.")),Object(i.b)("p",null,"Under the hood, all the real work is done by the ",Object(i.b)("strong",{parentName:"p"},"plugins")," :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Plugins to manage the rules for dispatching notifications by recipients,"),Object(i.b)("li",{parentName:"ul"},"Plugins to make the notification.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Format of the notification is totally free as the notification is fully delegated to a plugin."))),Object(i.b)("h2",{id:"amqp-api"},"AMQP API"),Object(i.b)("h3",{id:"send-an-event-to-notifier"},"Send an event to notifier"),Object(i.b)("p",null,"Message has to be published on this exchange : ",Object(i.b)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.notifier.dto.in.NotificationRequestEvent")),Object(i.b)("p",null,"With following properties:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"metadata"),Object(i.b)("td",{parentName:"tr",align:"center"},"A free JSON element")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"payload"),Object(i.b)("td",{parentName:"tr",align:"center"},"A free JSON element")))),Object(i.b)("p",null,"And following headers:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Header"),Object(i.b)("th",{parentName:"tr",align:"center"},"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"regards.tenant"),Object(i.b)("td",{parentName:"tr",align:"center"},"The tenant")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"regards.request.id"),Object(i.b)("td",{parentName:"tr",align:"center"},"String of max 36 characters long")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"regards.request.date"),Object(i.b)("td",{parentName:"tr",align:"center"},"ISO 8601 date")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"regards.request.owner"),Object(i.b)("td",{parentName:"tr",align:"center"},"String of max 128 characters long")))),Object(i.b)("h3",{id:"integration-with-feature-manager-and-ingest"},"Integration with ",Object(i.b)("inlineCode",{parentName:"h3"},"Feature Manager")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"Ingest")),Object(i.b)("p",null,"Creations, updates or deletions of features or AIPs are optionnaly sent to ",Object(i.b)("inlineCode",{parentName:"p"},"Notifier"),", this consist of the ",Object(i.b)("strong",{parentName:"p"},"payload"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"metadata")," is a field allowing ",Object(i.b)("inlineCode",{parentName:"p"},"Ingest")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Feature Manager")," to send additionnal information to ",Object(i.b)("inlineCode",{parentName:"p"},"Notifier")," that rules and notification plugins might use or require."),Object(i.b)("h4",{id:"template-of-notified-feature"},"Template of notified feature"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": "{whatEverIsNeededOrWanted}",\n    "payload": "{feature}"\n}\n')),Object(i.b)("h5",{id:"migration-from-14-to-15"},"Migration from 1.4 to 1.5"),Object(i.b)("p",null,"Notification format using ",Object(i.b)("strong",{parentName:"p"},"RabbitMQSender")," plugin has been updated between version 1.4 and 1.5:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"element")," has been renamed to ",Object(i.b)("inlineCode",{parentName:"li"},"payload")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"action")," has been moved into objet ",Object(i.b)("inlineCode",{parentName:"li"},"metadata")," and is now located at ",Object(i.b)("inlineCode",{parentName:"li"},"$.metadata.action")," instead of ",Object(i.b)("inlineCode",{parentName:"li"},"$.action"))),Object(i.b)("p",null,Object(i.b)("h2",{parentName:"p"},"Notification management"),Object(i.b)("h3",{parentName:"p"},"How to retry notifications that have failed"),Object(i.b)("p",{parentName:"p"},"To retry notifications that have failed, you just need to send a new AMQP event with the same ",Object(i.b)("inlineCode",{parentName:"p"},"regards.request.id")," header. This is a retry method, so event if you fix whatever problem the notification could have contained, by modifying its content, it will be taken into account.")))}p.isMDXComponent=!0},2708:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2741:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/architectural_concepts_notifier-a9ed0cce1c798f8d93bf20170fa9fe97.png"}}]);