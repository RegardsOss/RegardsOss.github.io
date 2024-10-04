"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[75187],{33714:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var r=t(74848),i=t(28453);const d={id:"web-application-firewall",title:"Web Application Firewall",slug:"/setup/swarm/advanced/web-application-firewall/",sidebar_position:12},n=void 0,c={id:"setup/swarm/advanced/web-application-firewall",title:"Web Application Firewall",description:"Microservices",source:"@site/docs/setup/swarm/advanced/firewall-guide.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/web-application-firewall/",permalink:"/docs/setup/swarm/advanced/web-application-firewall/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/firewall-guide.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"web-application-firewall",title:"Web Application Firewall",slug:"/setup/swarm/advanced/web-application-firewall/",sidebar_position:12},sidebar:"install",previous:{title:"Securise using HTTPS",permalink:"/docs/setup/swarm/advanced/regards-https/"},next:{title:"Elasticsearch",permalink:"/docs/setup/swarm/advanced/elasticsearch/"}},l={},a=[{value:"Microservices",id:"microservices",level:3},{value:"Endpoints",id:"endpoints",level:3}];function o(e){const s={admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"microservices",children:"Microservices"}),"\n",(0,r.jsx)(s.p,{children:"If you have a Web Application Firewall between REGARDS and the Internet, you can use the following table to set up a\nwhitelist\nor a blacklist to restrict access to microservices that are not used by users while they browse the User app."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"REGARDS MicroServices"}),(0,r.jsx)(s.th,{children:"Reachable by browsing on User app"}),(0,r.jsx)(s.th,{children:"Should be blocked by firewall"}),(0,r.jsx)(s.th,{children:"Not proxyfied"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-config"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-registry"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-gateway"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-admin-instance"}),(0,r.jsx)(s.td,{children:"Partially"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-admin"}),(0,r.jsx)(s.td,{children:"Partially"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-authentication"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-dam"}),(0,r.jsx)(s.td,{children:"Partially"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-notifier"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-fem"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-catalog"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-access-instance"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-access-project"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-storage"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-order"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-ingest"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-dataprovider"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-worker-manager"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-delivery"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-lta-manager"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-processing"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-file-catalog"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-file-access"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"rs-file-packager"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["If a microservice should be blocked by the Web Application Firewall, you can add ",(0,r.jsx)(s.code,{children:"/<microservice name>/"})," to your\nblacklist, which will block any call to ",(0,r.jsx)(s.code,{children:"https://host.com/api/v1/<microservice name>/some/path"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Microservices marked as reachable by browsing on ",(0,r.jsx)(s.strong,{children:"User app"})," means they expose an alternative microservice\nname ",(0,r.jsx)(s.code,{children:"/<microservice name>-public/"}),", which means users on the User app side will reach\n",(0,r.jsx)(s.code,{children:"https://host.com/api/v1/<microservice name>-public/some/path"})," and\nnot ",(0,r.jsx)(s.code,{children:"https://host.com/api/v1/<microservice name>/some/path"})," (notice the ",(0,r.jsx)(s.code,{children:"-public"})," postfix).",(0,r.jsx)(s.br,{}),"\n","You can safely blacklist ",(0,r.jsx)(s.code,{children:"/<microservice name>/"})," as users on User app are hitting ",(0,r.jsx)(s.code,{children:"/<microservice name>-public/"}),"."]}),"\n",(0,r.jsx)(s.admonition,{title:"Unproxyfied services",type:"info",children:(0,r.jsx)(s.p,{children:"Microservices CONFIG and REGISTRY are not available through the gateway as only REGARDS microservices needs to contact\nthem."})}),"\n",(0,r.jsx)(s.h3,{id:"endpoints",children:"Endpoints"}),"\n",(0,r.jsx)(s.p,{children:"You should block the following path in your Web Application Firewall:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Endpoint path"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/actuator/"}),(0,r.jsx)(s.td,{children:"Provides prometheus statistics, healthiness"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/swagger-ui/"}),(0,r.jsx)(s.td,{children:"Provides endpoints descriptor"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"/admin/"}),(0,r.jsx)(s.td,{children:"REGARDS Admin HMI"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>c});var r=t(96540);const i={},d=r.createContext(i);function n(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);