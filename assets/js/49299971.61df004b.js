"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33491],{83489:(s,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=o(74848),n=o(28453);const r={id:"swarm-common-issues",title:"Common issues",slug:"/setup/swarm/common-issues"},i=void 0,a={id:"setup/swarm-common-issues",title:"Common issues",description:"Here is some issues you may encounter while deploying REGARDS using our playbook.",source:"@site/versioned_docs/version-1.13.0/setup/swarm-common-issues.md",sourceDirName:"setup",slug:"/setup/swarm/common-issues",permalink:"/docs/1.13.0/setup/swarm/common-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/setup/swarm-common-issues.md",tags:[],version:"1.13.0",frontMatter:{id:"swarm-common-issues",title:"Common issues",slug:"/setup/swarm/common-issues"},sidebar:"install",previous:{title:"Administration",permalink:"/docs/1.13.0/setup/swarm/cli/"},next:{title:"V1.8 to V1.11",permalink:"/docs/1.13.0/setup/swarm/migration/1.8-to-1.11"}},c={},u=[];function m(s){const e={a:"a",code:"code",p:"p",strong:"strong",...(0,n.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Here is some issues you may encounter while deploying REGARDS using our playbook."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"[ISSUE] All my containers are restarting few minutes after I've started them"})}),"\n",(0,t.jsx)(e.p,{children:"You don't have enough ressources to deploy REGARDS on your VM. Your Docker daemon just died."}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"[ISSUE] My container fails to reach another container if both are not located on the same server"})}),"\n",(0,t.jsxs)(e.p,{children:["You should look for your Docker Swarm network configuration. You can view where packets are dropped using a tool like ",(0,t.jsx)(e.a,{href:"https://hub.docker.com/r/nicolaka/netshoot",children:"nicolaka/netshoot"}),"."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"[ISSUE] The container rs-admin-instance fails to start again and again"})}),"\n",(0,t.jsxs)(e.p,{children:["This is the first REGARDS container to boot that requires to connect to Postgres and RabbitMQ. Check its logs using ",(0,t.jsx)(e.code,{children:"./logs.sh rs-admin-instance -f"})," to see the root cause."]})]})}function d(s={}){const{wrapper:e}={...(0,n.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(m,{...s})}):m(s)}},28453:(s,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var t=o(96540);const n={},r=t.createContext(n);function i(s){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function a(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:i(s.components),t.createElement(r.Provider,{value:e},s.children)}}}]);