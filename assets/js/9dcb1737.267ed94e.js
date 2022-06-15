"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[12273],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71611:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={id:"depracated-faq",title:"Frequently Asked Questions",slug:"/setup/deprecated/faq/"},c=void 0,u={unversionedId:"setup/deprecated/depracated-faq",id:"version-1.7.1/setup/deprecated/depracated-faq",title:"Frequently Asked Questions",description:"Microservices are not accessible using HIMs",source:"@site/versioned_docs/version-1.7.1/setup/deprecated/faq.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/faq/",permalink:"/docs/1.7.1/setup/deprecated/faq/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/setup/deprecated/faq.md",tags:[],version:"1.7.1",frontMatter:{id:"depracated-faq",title:"Frequently Asked Questions",slug:"/setup/deprecated/faq/"}},l={},p=[{value:"Microservices are not accessible using HIMs",id:"microservices-are-not-accessible-using-hims",level:2},{value:"HMIs doesn&#39;t appear",id:"hmis-doesnt-appear",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"microservices-are-not-accessible-using-hims"},"Microservices are not accessible using HIMs"),(0,o.kt)("p",null,"In some cases, when you try to access REGARDS HIMs, you may have trouble to access microservices fonctionalities. It appears with an HMI printing without any theme (blank background) and with an error during authentication like ",(0,o.kt)("inlineCode",{parentName:"p"},"Server not accessible"),"."),(0,o.kt)("p",null,"This maybe due to Cross-origin request. This problem occurs when the domain of the HMIs are different with the domain of the gateway microservice. Indeed, all REGARDS microservices are accessed trough gateway microservice."),(0,o.kt)("p",null,"To correct this issue, you have to configure the REGARDS HMI to ensure that the domain of the gateway microservice is the same as the HMI one."),(0,o.kt)("p",null,"If you access HMI trough ",(0,o.kt)("a",{parentName:"p",href:"http://regards.domain"},"http://regards.domain"),", your gateway microservice must be accessible on the same domain name and you can configure in ",(0,o.kt)("inlineCode",{parentName:"p"},"/install/directory/REGARDS/www/config/StaticConfiguration.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'GATEWAY_HOSTNAME = "http://regards.domain";\n')),(0,o.kt)("p",null,'This web server configuration is done with the step "Reverse Proxy" in our ',"[Server configuration - Reverse Proxy]"," guide. The httpd or Nginx web server supply access to HMI and to Gateway in the same vhost."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ProxyPass "/api/v1/" -> For gateway\nProxyPass "/" -> For HMIs\n')),(0,o.kt)("h2",{id:"hmis-doesnt-appear"},"HMIs doesn't appear"),(0,o.kt)("p",null,"REGARDS use new features of HTML5 and CSS3, so your web browser have to be updated recently. Here under are the minimum version of web browsers compatible :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Google chrome"),": 64.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Firefox")," : 58.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Safari")," : 11.1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft Edge")," : 16.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Microsoft Internet Explorer")," : Not compatible")))}m.isMDXComponent=!0}}]);