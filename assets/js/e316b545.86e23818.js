"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88812],{88863:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(74848),i=r(28453);const t={id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},c=void 0,a={id:"development/backend/framework/starters/backend-framework-starters-microservice",title:"Microservice starter",description:"Purpose",source:"@site/versioned_docs/version-1.14/development/backend/framework/starters/microservice-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/microservice/",permalink:"/docs/1.14/development/backend/framework/starters/microservice/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/backend/framework/starters/microservice-starter.md",tags:[],version:"1.14",frontMatter:{id:"backend-framework-starters-microservice",title:"Microservice starter",slug:"/development/backend/framework/starters/microservice/"},sidebar:"dev",previous:{title:"Microservice core starter",permalink:"/docs/1.14/development/backend/framework/starters/microservice-core/"},next:{title:"Module starter",permalink:"/docs/1.14/development/backend/framework/starters/module/"}},o={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Maintenance management",id:"maintenance-management",level:3},{value:"Module management",id:"module-management",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"purpose",children:"Purpose"}),"\n",(0,s.jsx)(n.p,{children:"This starter is used to enable microservice maitenance feature and module management feature."}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Add starter dependency to your POM (version depends on the BOM)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards-starter</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Business dependency"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>microservice-regards</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Dependencies :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/1.14/development/backend/framework/starters/multitenant/",children:"Multitenant starter"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/1.14/development/backend/framework/starters/module/",children:"Module starter"})," business package"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Properties :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"# Maintenance mode switch\nregards.microservices.maintenance.enabled=true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,s.jsx)(n.p,{children:"Starter autoconfigures REST API endpoints."}),"\n",(0,s.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,s.jsx)(n.h3,{id:"maintenance-management",children:"Maintenance management"}),"\n",(0,s.jsxs)(n.p,{children:["REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.\nThe maintenance mode is set individually for each tenant on the system.\nA microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a ",(0,s.jsx)(n.code,{children:"403"})," forbidden response status is sent."]}),"\n",(0,s.jsx)(n.p,{children:"API :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /maintenance"})," : get maintenance status"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PUT /maintenance/{tenant}/enable"})," : set maintenance mode for specified tenant"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PUT /maintenance/{tenant}/disable"})," : unset maintenance mode for specified tenant"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"module-management",children:"Module management"}),"\n",(0,s.jsx)(n.p,{children:"API :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/configuration/enabled"})," : ",(0,s.jsx)(n.code,{children:"200"})," if configuration feature is implemented, else ",(0,s.jsx)(n.code,{children:"501"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/configuration"})," : export configuration of all business modules."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"POST /microservice/configuration"})," : import configuration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/ready/enabled"})," : ",(0,s.jsx)(n.code,{children:"200"})," if ready feature is implemented, else ",(0,s.jsx)(n.code,{children:"501"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/ready"})," : Check if all modules of the microservice is ready to run or if there is missing configurations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/restart/enabled"})," : ",(0,s.jsx)(n.code,{children:"200"})," if restart feature is implemented, else ",(0,s.jsx)(n.code,{children:"501"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GET /microservice/restart"})," : Restart microservice modules."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Look at ",(0,s.jsx)(n.a,{href:"/docs/1.14/development/backend/framework/starters/module/",children:"Module starter"})," to know how to implement configuration import/export, ready and restart features at the module level."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var s=r(96540);const i={},t=s.createContext(i);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);