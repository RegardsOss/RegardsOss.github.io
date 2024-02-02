"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[1760],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>f});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},99340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(45072),r=(t(11504),t(95788));const a={id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},o=void 0,s={unversionedId:"development/backend/regards/notifier/plugins/backend-notifier-plugins",id:"version-1.13.0/development/backend/regards/notifier/plugins/backend-notifier-plugins",title:"Notifier plugins",description:"Rule matcher plugins",source:"@site/versioned_docs/version-1.13.0/development/backend/regards/notifier/plugins/notifier-plugins.md",sourceDirName:"development/backend/regards/notifier/plugins",slug:"/development/backend/services/notifier/plugins/",permalink:"/docs/1.13.0/development/backend/services/notifier/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/regards/notifier/plugins/notifier-plugins.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-notifier-plugins",title:"Notifier plugins",sidebar_label:"Notifier",slug:"/development/backend/services/notifier/plugins/"},sidebar:"dev",previous:{title:"Notifier configuration",permalink:"/docs/1.13.0/development/backend/services/notifier/api/configuration/"},next:{title:"Overview",permalink:"/docs/1.13.0/development/backend/services/dataprovider/overview/"}},l={},u=[{value:"Rule matcher plugins",id:"rule-matcher-plugins",level:2},{value:"DefaultRuleMatcher",id:"defaultrulematcher",level:3},{value:"LuceneRuleMatcher :",id:"lucenerulematcher-",level:3},{value:"Recipient sender plugins",id:"recipient-sender-plugins",level:2},{value:"RabbitMQSender",id:"rabbitmqsender",level:3},{value:"Recipients / Rules association",id:"recipients--rules-association",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"rule-matcher-plugins"},"Rule matcher plugins"),(0,r.yg)("p",null,"Rules are used to define if a notification should be sent to associated RecipientSenders."),(0,r.yg)("h3",{id:"defaultrulematcher"},"DefaultRuleMatcher"),(0,r.yg)("p",null,"This rule matcher allows to check into notification content if a json property matches a specific value. If so, the notification is sent to associated senders.",(0,r.yg)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"attributeToSeek : attribut name to search for the notification json content. "),(0,r.yg)("li",{parentName:"ul"},"attributeValueToSeek : attribut value to match.")),(0,r.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"DefaultRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"attributeValueToSeek", "type":"STRING", "value":"{attribute to searh for}"},\n      {"name":"attributeToSeek", "type":"STRING", "value":"{value to match}"}\n    ]\n  }\n}      \n')),(0,r.yg)("h3",{id:"lucenerulematcher-"},"LuceneRuleMatcher :"),(0,r.yg)("p",null,"This rule matcher allows to check if the given lucene expression match the notification json object content. If so, the notification is sent to associated senders.\nConfiguration parameters are :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"luceneRule : Lucene expression to seek ",(0,r.yg)("a",{parentName:"li",href:"/docs/1.13.0/development/appendices/lucene-query/"},"example"))),(0,r.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},' {\n  "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n  "value": {\n    "pluginId":"LuceneRuleMatcher",\n    "label":"{label}",\n    "businessId":"{uniqueIdentifier}",\n    "version":"1.0.0",\n    "priorityOrder":0,\n    "active":true,\n    "parameters":[\n      {"name":"luceneRule", "type":"STRING", "value":"{lucene rule}"},\n    ]\n  }\n}      \n')),(0,r.yg)("h2",{id:"recipient-sender-plugins"},"Recipient sender plugins"),(0,r.yg)("p",null,"Senders are used to define how to send notification to recipients."),(0,r.yg)("h3",{id:"rabbitmqsender"},"RabbitMQSender"),(0,r.yg)("p",null,"This sender is used to send notifications on a specific RabbitMQ couple exchange/queue with no transformation applied to the input.",(0,r.yg)("br",{parentName:"p"}),"\n","Configuration parameters are :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"exchange : Name  of the  exchange to use"),(0,r.yg)("li",{parentName:"ul"},"queueName : Name of the queue to use")),(0,r.yg)("p",null,"To configure this plugin, use the here-under configuration block in ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/notifier/api/configuration/"},"import service configuration")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},' {\n     "key": "fr.cnes.regards.framework.modules.plugins.domain.PluginConfiguration",\n     "value": {\n     "pluginId":"RabbitMQSender",\n     "label":"{label}",\n     "businessId":"{uniqueIdentifier}",\n     "version":"1.0.0",\n     "priorityOrder":0,\n     "active":true,\n     "parameters":[\n       {"name":"exchange", "type":"STRING", "value":"{exchange name to use}"},\n       {"name":"queueName", "type":"STRING", "value":"{queue name to use}"}\n     ]\n   }\n},\n')),(0,r.yg)("h2",{id:"recipients--rules-association"},"Recipients / Rules association"),(0,r.yg)("p",null,"In order to have a functional notification system, the last configuration to make is to associate your recipients to your rules. You can associate one rule too many recipients.\nTo do so, please use the here under configuration block in ",(0,r.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/backend/services/notifier/api/configuration/"},"import module configuration")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "fr.cnes.regards.modules.notifier.dto.conf.RuleRecipientsAssociation",\n  "value": {\n     "ruleId": "{businessId of rule configuration}",\n     "recipientIds" : ["{businessId of recipient configuration}"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);