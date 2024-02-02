"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[74904],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>f});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},97880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(45072),i=(t(11504),t(95788));const a={id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},o=void 0,l={unversionedId:"development/backend/regards/notifier/plugins/backend-notifier-plugins",id:"development/backend/regards/notifier/plugins/backend-notifier-plugins",title:"Notifier plugins",description:"Rule matcher plugins",source:"@site/docs/development/backend/regards/notifier/plugins/notifier-plugins.md",sourceDirName:"development/backend/regards/notifier/plugins",slug:"/development/backend/services/notifier/plugins/",permalink:"/docs/development/backend/services/notifier/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/plugins/notifier-plugins.md",tags:[],version:"current",frontMatter:{id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},sidebar:"dev",previous:{title:"Notifier configuration",permalink:"/docs/development/backend/services/notifier/api/configuration/"},next:{title:"Overview",permalink:"/docs/development/backend/services/order/overview/"}},s={},u=[{value:"Rule matcher plugins",id:"rule-matcher-plugins",level:2},{value:"DefaultRuleMatcher",id:"defaultrulematcher",level:3},{value:"LuceneRuleMatcher :",id:"lucenerulematcher-",level:3},{value:"Recipient sender plugins",id:"recipient-sender-plugins",level:2},{value:"RabbitMQSender",id:"rabbitmqsender",level:3},{value:"Recipients / Rules association",id:"recipients--rules-association",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"rule-matcher-plugins"},"Rule matcher plugins"),(0,i.yg)("p",null,"Rules are used to define if a notification should be sent to associated RecipientSenders."),(0,i.yg)("h3",{id:"defaultrulematcher"},"DefaultRuleMatcher"),(0,i.yg)("p",null,"This rule matcher allows to check into notification content if a json property matches a specific value. If so, the notification is sent to associated senders.",(0,i.yg)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"attributeToSeek : attribut name to search for the notification json content. "),(0,i.yg)("li",{parentName:"ul"},"attributeValueToSeek : attribut value to match.")),(0,i.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"DefaultRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"attributeValueToSeek", "type":"STRING", "value":"{attribute to searh for}"},\n      {"name":"attributeToSeek", "type":"STRING", "value":"{value to match}"}\n    ]\n  }\n}      \n')),(0,i.yg)("h3",{id:"lucenerulematcher-"},"LuceneRuleMatcher :"),(0,i.yg)("p",null,"This rule matcher allows to check if the given lucene expression match the notification json object content. If so, the notification is sent to associated senders.\nConfiguration parameters are :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"luceneRule : Lucene expression to seek ",(0,i.yg)("a",{parentName:"li",href:"/docs/development/appendices/lucene-query/"},"example"))),(0,i.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"LuceneRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"luceneRule", "type":"STRING", "value":"{lucene rule}"},\n    ]\n  }\n}      \n')),(0,i.yg)("h2",{id:"recipient-sender-plugins"},"Recipient sender plugins"),(0,i.yg)("p",null,"Senders are used to define how to send notification to recipients."),(0,i.yg)("h3",{id:"rabbitmqsender"},"RabbitMQSender"),(0,i.yg)("p",null,"This sender is used to send notifications on a specific RabbitMQ couple exchange/queue with no transformation applied to the input.",(0,i.yg)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"exchange : Name  of the  exchange to use"),(0,i.yg)("li",{parentName:"ul"},"queueName : Name of the queue to use")),(0,i.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},' {\n     "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n     "value": {\n     "pluginId":"RabbitMQSender",\n     "label":"{label}",\n     "businessId":"{uniqueIdentifier}",\n     "version":"1.0.0",\n     "priorityOrder":0,\n     "active":true,\n     "parameters":[\n       {"name":"exchange", "type":"STRING", "value":"{exchange name to use}"},\n       {"name":"queueName", "type":"STRING", "value":"{queue name to use}"}\n     ]\n   }\n},\n')),(0,i.yg)("h2",{id:"recipients--rules-association"},"Recipients / Rules association"),(0,i.yg)("p",null,"In order to have a functional notification system, the last configuration to make is to associate your recipients to your rules. You can associate one rule too many recipients.\nTo do so, please use the here under configuration block in ",(0,i.yg)("a",{parentName:"p",href:"/docs/development/backend/services/notifier/api/configuration/"},"import module configuration")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n     "ruleId": "{businessId of rule configuration}",\n     "recipientIds" : ["{businessId of recipient configuration}"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);