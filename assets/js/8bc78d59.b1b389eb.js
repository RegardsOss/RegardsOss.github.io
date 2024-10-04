"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[96433],{97064:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453);const t={id:"advanced-introduction",title:"Introduction",slug:"/setup/swarm/advanced/introduction"},i=void 0,a={id:"setup/swarm/advanced/advanced-introduction",title:"Introduction",description:"There is a lot of available configurations that you can customize directly from your inventory, as there are many ways",source:"@site/docs/setup/swarm/advanced/01-advanced-introduction.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/introduction",permalink:"/docs/setup/swarm/advanced/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/01-advanced-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"advanced-introduction",title:"Introduction",slug:"/setup/swarm/advanced/introduction"},sidebar:"install",previous:{title:"Quick setup",permalink:"/docs/setup/"},next:{title:"Deploy required microservices",permalink:"/docs/setup/swarm/advanced/microservice-setup"}},c={},d=[{value:"Guides",id:"guides",level:3},{value:"Run changes after inventory modification",id:"run-changes-after-inventory-modification",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"There is a lot of available configurations that you can customize directly from your inventory, as there are many ways\nto deploy a REGARDS instance on your servers."}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["We assume you have successfully deployed REGARDS using the ",(0,o.jsx)(s.a,{href:"/docs/setup/",children:"Quick setup"})]})}),"\n",(0,o.jsx)(s.h3,{id:"guides",children:"Guides"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/microservice-setup",children:"Deploy required microservices"})," introduces you the REGARDS microservices and the way to\nenable them depending on your needs."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/worker-setup",children:"Worker setup"})," shows you how to activate a Worker"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/plugin-setup",children:"Plugin setup"})," shows you how to activate a Plugin"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/logging-stack/",children:"Logging stack guide"})," shows you how to activate the monitoring stack for logs and metrics. ",(0,o.jsx)(s.strong,{children:"Highly\nrecommended"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/postgres-database/",children:"Postgres Database"})," shows you how to connect microservices to external databases. ",(0,o.jsx)(s.strong,{children:"Highly\nrecommended"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/rabbitmq/",children:"RabbitMQ"})," shows you how to configure RabbitMQ service."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/elasticsearch/",children:"Elasticsearch"})," shows you how to configure ElasticSearch service."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/minio/",children:"MinIO"})," shows you how to deploy a MinIO server for your regards swarm stack."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/optimizations/",children:"Microservices optimizations"})," provides you all the possible inventory configurations to\noptimize microservices."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/ansible-vault",children:"Ansible Vault"})," allows you to crypt passwords inside your inventory and commit them on Git safely. *\n",(0,o.jsx)(s.em,{children:"Highly recommended"}),"*"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/swarm-mount",children:"Mount volumes, configs..."})," allows you to describe volumes, configs and secrets files containers\nhave access to. ",(0,o.jsx)(s.strong,{children:"Highly recommended"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/placement-constraint",children:"Placement constraint"})," shows you how to docker swarm service placement constraint"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/swarm-networks",children:"Network tuning"})," allows you to understand and properly configure network properties."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/regards-https/",children:"Securise using HTTPS"})," allows you to expose the REGARDS API and HMI through HTTPS. ",(0,o.jsx)(s.strong,{children:"Highly\nrecommended"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/setup/swarm/advanced/web-application-firewall/",children:"Web application firewall guide"})," lists URLs you should block access to users on untrusted networks."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"run-changes-after-inventory-modification",children:"Run changes after inventory modification"}),"\n",(0,o.jsx)(s.p,{children:"Once you have edited your inventory, you must execute the following command to update the stack:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# cd regards-docker/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n"})}),"\n",(0,o.jsx)(s.p,{children:"Whatever modifications you have done, this is the only command you need to know!"})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var o=n(96540);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);