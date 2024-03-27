"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[35321],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},y=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,u=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return a?n.createElement(u,i(i({ref:t},y),{},{components:a})):n.createElement(u,i({ref:t},y))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={id:"web-application-firewall",title:"Web Application Firewall",slug:"/setup/swarm/advanced/web-application-firewall/"},i=void 0,g={unversionedId:"setup/advanced/web-application-firewall",id:"setup/advanced/web-application-firewall",title:"Web Application Firewall",description:"Microservices",source:"@site/docs/setup/advanced/firewall-guide.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/web-application-firewall/",permalink:"/docs/next/setup/swarm/advanced/web-application-firewall/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/firewall-guide.md",tags:[],version:"current",frontMatter:{id:"web-application-firewall",title:"Web Application Firewall",slug:"/setup/swarm/advanced/web-application-firewall/"},sidebar:"install",previous:{title:"Securise using HTTPS",permalink:"/docs/next/setup/swarm/advanced/regards-https/"},next:{title:"Administration",permalink:"/docs/next/setup/swarm/cli/"}},p={},o=[{value:"Microservices",id:"microservices",level:3},{value:"Endpoints",id:"endpoints",level:3}],y={toc:o},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h3",{id:"microservices"},"Microservices"),(0,r.yg)("p",null,"If you have a Web Application Firewall between REGARDS and the Internet, you can use the following table to set up a\nwhitelist\nor a blacklist to restrict access to microservices that are not used by users while they browse the User app."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"REGARDS MicroServices"),(0,r.yg)("th",{parentName:"tr",align:null},"Reachable by browsing on User app"),(0,r.yg)("th",{parentName:"tr",align:null},"Should be blocked by firewall"),(0,r.yg)("th",{parentName:"tr",align:null},"Not proxyfied"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-config"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-registry"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-gateway"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-admin-instance"),(0,r.yg)("td",{parentName:"tr",align:null},"Partially"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-admin"),(0,r.yg)("td",{parentName:"tr",align:null},"Partially"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-dam"),(0,r.yg)("td",{parentName:"tr",align:null},"Partially"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-notifier"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-fem"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-catalog"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-access-instance"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-access-project"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-storage"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-order"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-ingest"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-dataprovider"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-worker-manager"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-delivery"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-lta-manager"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-processing"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-file-catalog"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-file-access"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rs-file-packager"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"If a microservice should be blocked by the Web Application Firewall, you can add ",(0,r.yg)("inlineCode",{parentName:"p"},"/<microservice name>/")," to your\nblacklist, which will block any call to ",(0,r.yg)("inlineCode",{parentName:"p"},"https://host.com/api/v1/<microservice name>/some/path"),"."),(0,r.yg)("p",null,"Microservices marked as reachable by browsing on ",(0,r.yg)("strong",{parentName:"p"},"User app")," means they expose an alternative microservice\nname ",(0,r.yg)("inlineCode",{parentName:"p"},"/<microservice name>-public/"),", which means users on the User app side will reach\n",(0,r.yg)("inlineCode",{parentName:"p"},"https://host.com/api/v1/<microservice name>-public/some/path")," and\nnot ",(0,r.yg)("inlineCode",{parentName:"p"},"https://host.com/api/v1/<microservice name>/some/path")," (notice the ",(0,r.yg)("inlineCode",{parentName:"p"},"-public")," postfix).",(0,r.yg)("br",{parentName:"p"}),"\n","You can safely blacklist ",(0,r.yg)("inlineCode",{parentName:"p"},"/<microservice name>/")," as users on User app are hitting ",(0,r.yg)("inlineCode",{parentName:"p"},"/<microservice name>-public/"),"."),(0,r.yg)("admonition",{title:"Unproxyfied services",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Microservices CONFIG and REGISTRY are not available through the gateway as only REGARDS microservices needs to contact\nthem.")),(0,r.yg)("h3",{id:"endpoints"},"Endpoints"),(0,r.yg)("p",null,"You should block the following path in your Web Application Firewall:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Endpoint path"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"/actuator/"),(0,r.yg)("td",{parentName:"tr",align:null},"Provides prometheus statistics, healthiness")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"/swagger-ui/"),(0,r.yg)("td",{parentName:"tr",align:null},"Provides endpoints descriptor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"/admin/"),(0,r.yg)("td",{parentName:"tr",align:null},"REGARDS Admin HMI")))))}s.isMDXComponent=!0}}]);