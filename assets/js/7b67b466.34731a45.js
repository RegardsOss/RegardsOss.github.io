"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[85376],{95788:(e,r,t)=>{t.d(r,{Iu:()=>g,yg:()=>u});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},g=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,u=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(u,s(s({ref:r},g),{},{components:t})):n.createElement(u,s({ref:r},g))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12448:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(45072),o=(t(11504),t(95788));const a={id:"backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",slug:"/development/backend/framework/starters/amqp-monitoring/"},s="1. Configuration",l={unversionedId:"development/backend/framework/starters/backend-framework-starters-amqp-monitoring",id:"development/backend/framework/starters/backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",description:"Add starter dependency to your POM (version depends on the REGARDS BOM)",source:"@site/docs/development/backend/framework/starters/amqp-monitoring-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/amqp-monitoring/",permalink:"/docs/development/backend/framework/starters/amqp-monitoring/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/starters/amqp-monitoring-starter.md",tags:[],version:"current",frontMatter:{id:"backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",slug:"/development/backend/framework/starters/amqp-monitoring/"},sidebar:"dev",previous:{title:"Introduction",permalink:"/docs/development/backend/framework/starters/"},next:{title:"AMQP starter",permalink:"/docs/development/backend/framework/starters/amqp/"}},i={},p=[{value:"4.1. How to publish <strong>LogEvent</strong> to the <strong>Metrics</strong> module",id:"41-how-to-publish-logevent-to-the-metrics-module",level:2},{value:"4.2. How to log events to SYSLOG",id:"42-how-to-log-events-to-syslog",level:2},{value:"4.3. How to log security events to SYSLOG",id:"43-how-to-log-security-events-to-syslog",level:2}],g={toc:p},d="wrapper";function c(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.c)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,o.yg)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-monitoring-regards-starter</artifactId>\n</dependency>\n")),(0,o.yg)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),(0,o.yg)("p",null,"Starter autoconfigures:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"regardsAmqpAppender")," is a logback appender. It is responsible to publish some ",(0,o.yg)("strong",{parentName:"li"},"LogEvent")," to a publisher for the current tenant."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"IMonitoringLogEvent")," is used subcribe to ",(0,o.yg)("strong",{parentName:"li"},"LogEvent")," form all known tenants.")),(0,o.yg)("h1",{id:"3-the-metrics-module"},"3","."," The ",(0,o.yg)("strong",{parentName:"h1"},"Metrics")," module"),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Metrics")," module define a subscriber to subscribe to the ",(0,o.yg)("strong",{parentName:"p"},"LogEvent")," publish for all the tenants. And for each tenant, each ",(0,o.yg)("strong",{parentName:"p"},"LogEvent")," are persisted to the tenant's database. The ",(0,o.yg)("inlineCode",{parentName:"p"},"LogEventHandler")," implements ",(0,o.yg)("inlineCode",{parentName:"p"},"ILogEventHandler")," and define a method ",(0,o.yg)("inlineCode",{parentName:"p"},"handle"),"."),(0,o.yg)("h1",{id:"4-how-to"},"4","."," How to"),(0,o.yg)("h2",{id:"41-how-to-publish-logevent-to-the-metrics-module"},"4.1. How to publish ",(0,o.yg)("strong",{parentName:"h2"},"LogEvent")," to the ",(0,o.yg)("strong",{parentName:"h2"},"Metrics")," module"),(0,o.yg)("p",null,"To publish ",(0,o.yg)("strong",{parentName:"p"},"LogEvent")," to the ",(0,o.yg)("strong",{parentName:"p"},"Metrics")," module, it is necessary to add the logback appender ",(0,o.yg)("strong",{parentName:"p"},"regardsAmqpAppender")," to the logback.xml file. This is done in logback.xml file from each microservice's bootstrap."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},'<appender name="regardsAmqpAppender"\n  class="ch.qos.logback.ext.spring.DelegatingLogbackAppender">\n  <filter\n    class="fr.cnes.regards.framework.logbackappender.RegardsAmqpAppenderFilter">\n    <level>INFO</level>\n  </filter>\n</appender>\n\n<logger name="fr.cnes.regards" level="INFO" additivity="true">\n  <appender-ref ref="regardsAmqpAppender" />\n</logger>\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"RegardsAmqpAppenderFilter")," defined a list of package for which each log should be publish to the ",(0,o.yg)("strong",{parentName:"p"},"Metrics")," module."),(0,o.yg)("h2",{id:"42-how-to-log-events-to-syslog"},"4.2","."," How to log events to SYSLOG"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL0</facility>\n  <suffixPattern>${SYSLOG_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n<root level="info">\n  <appender-ref ref="SYSLOG" />\n</root>\n')),(0,o.yg)("p",null,"The pattern ",(0,o.yg)("strong",{parentName:"p"},"SYSLOG_PATTERN")," is defined in ",(0,o.yg)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."),(0,o.yg)("h2",{id:"43-how-to-log-security-events-to-syslog"},"4.3","."," How to log security events to SYSLOG"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG-SECU" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL1</facility>\n  <suffixPattern>${SYSLOG_SECURITY_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n\x3c!-- Log the user request authentication --\x3e\n<logger name="fr.cnes.regards.framework.authentication" level="INFO">\n  <appender-ref ref="SYSLOG-SECU" />\n</logger>\n')),(0,o.yg)("p",null,"The pattern ",(0,o.yg)("strong",{parentName:"p"},"SYSLOG_SECURITY_PATTERN")," is defined in ",(0,o.yg)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."))}c.isMDXComponent=!0}}]);