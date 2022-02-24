"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[3853],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19494:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",slug:"/development/backend/framework/starters/amqp-monitoring/"},l="1. Configuration",p={unversionedId:"development/backend/framework/starters/backend-framework-starters-amqp-monitoring",id:"version-1.6.0/development/backend/framework/starters/backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",description:"Add starter dependency to your POM (version depends on the REGARDS BOM)",source:"@site/versioned_docs/version-1.6.0/development/backend/framework/starters/amqp-monitoring-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/amqp-monitoring/",permalink:"/fr/docs/1.6.0/development/backend/framework/starters/amqp-monitoring/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/framework/starters/amqp-monitoring-starter.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-framework-starters-amqp-monitoring",title:"AMQP monitoring starter",slug:"/development/backend/framework/starters/amqp-monitoring/"},sidebar:"version-1.6.0/dev",previous:{title:"Introduction",permalink:"/fr/docs/1.6.0/development/backend/framework/starters/"},next:{title:"AMQP starter",permalink:"/fr/docs/1.6.0/development/backend/framework/starters/amqp/"}},d=[{value:"4.1. How to publish <strong>LogEvent</strong> to the <strong>Metrics</strong> module",id:"41-how-to-publish-logevent-to-the-metrics-module",children:[],level:2},{value:"4.2. How to log events to SYSLOG",id:"42-how-to-log-events-to-syslog",children:[],level:2},{value:"4.3. How to log security events to SYSLOG",id:"43-how-to-log-security-events-to-syslog",children:[],level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,a.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>amqp-monitoring-regards-starter</artifactId>\n</dependency>\n")),(0,a.kt)("h1",{id:"2-autoconfiguration"},"2","."," Autoconfiguration"),(0,a.kt)("p",null,"Starter autoconfigures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regardsAmqpAppender")," is a logback appender. It is responsible to publish some ",(0,a.kt)("strong",{parentName:"li"},"LogEvent")," to a publisher for the current tenant."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IMonitoringLogEvent")," is used subcribe to ",(0,a.kt)("strong",{parentName:"li"},"LogEvent")," form all known tenants.")),(0,a.kt)("h1",{id:"3-the-metrics-module"},"3","."," The ",(0,a.kt)("strong",{parentName:"h1"},"Metrics")," module"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Metrics")," module define a subscriber to subscribe to the ",(0,a.kt)("strong",{parentName:"p"},"LogEvent")," publish for all the tenants. And for each tenant, each ",(0,a.kt)("strong",{parentName:"p"},"LogEvent")," are persisted to the tenant's database. The ",(0,a.kt)("inlineCode",{parentName:"p"},"LogEventHandler")," implements ",(0,a.kt)("inlineCode",{parentName:"p"},"ILogEventHandler")," and define a method ",(0,a.kt)("inlineCode",{parentName:"p"},"handle"),"."),(0,a.kt)("h1",{id:"4-how-to"},"4","."," How to"),(0,a.kt)("h2",{id:"41-how-to-publish-logevent-to-the-metrics-module"},"4.1. How to publish ",(0,a.kt)("strong",{parentName:"h2"},"LogEvent")," to the ",(0,a.kt)("strong",{parentName:"h2"},"Metrics")," module"),(0,a.kt)("p",null,"To publish ",(0,a.kt)("strong",{parentName:"p"},"LogEvent")," to the ",(0,a.kt)("strong",{parentName:"p"},"Metrics")," module, it is necessary to add the logback appender ",(0,a.kt)("strong",{parentName:"p"},"regardsAmqpAppender")," to the logback.xml file. This is done in logback.xml file from each microservice's bootstrap."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<appender name="regardsAmqpAppender"\n  class="ch.qos.logback.ext.spring.DelegatingLogbackAppender">\n  <filter\n    class="fr.cnes.regards.framework.logbackappender.RegardsAmqpAppenderFilter">\n    <level>INFO</level>\n  </filter>\n</appender>\n\n<logger name="fr.cnes.regards" level="INFO" additivity="true">\n  <appender-ref ref="regardsAmqpAppender" />\n</logger>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RegardsAmqpAppenderFilter")," defined a list of package for which each log should be publish to the ",(0,a.kt)("strong",{parentName:"p"},"Metrics")," module."),(0,a.kt)("h2",{id:"42-how-to-log-events-to-syslog"},"4.2","."," How to log events to SYSLOG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL0</facility>\n  <suffixPattern>${SYSLOG_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n<root level="info">\n  <appender-ref ref="SYSLOG" />\n</root>\n')),(0,a.kt)("p",null,"The pattern ",(0,a.kt)("strong",{parentName:"p"},"SYSLOG_PATTERN")," is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."),(0,a.kt)("h2",{id:"43-how-to-log-security-events-to-syslog"},"4.3","."," How to log security events to SYSLOG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<include resource="fr/cnes/regards/framework/logbackappender/defaults.xml" />\n\n<appender name="SYSLOG-SECU" class="ch.qos.logback.classic.net.SyslogAppender">\n  <syslogHost>localhost</syslogHost>\n  <facility>LOCAL1</facility>\n  <suffixPattern>${SYSLOG_SECURITY_PATTERN}</suffixPattern>\n  <port>514</port>\n</appender>\n\n\x3c!-- Log the user request authentication --\x3e\n<logger name="fr.cnes.regards.framework.authentication" level="INFO">\n  <appender-ref ref="SYSLOG-SECU" />\n</logger>\n')),(0,a.kt)("p",null,"The pattern ",(0,a.kt)("strong",{parentName:"p"},"SYSLOG_SECURITY_PATTERN")," is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"fr/cnes/regards/framework/logbackappender/defaults.xml"),"."))}m.isMDXComponent=!0}}]);