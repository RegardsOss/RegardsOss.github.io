"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[55486],{82556:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=n(74848),l=n(28453);const a={id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Tasks",slug:"/setup/ansible-tasks/"},i=void 0,t={id:"setup/playbook/ansible-tasks",title:"Ansible tasks",description:"Ansible tasks",source:"@site/docs/setup/playbook/ansible-tasks.md",sourceDirName:"setup/playbook",slug:"/setup/ansible-tasks/",permalink:"/docs/setup/ansible-tasks/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/playbook/ansible-tasks.md",tags:[],version:"current",frontMatter:{id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Tasks",slug:"/setup/ansible-tasks/"},sidebar:"install",previous:{title:"CoTS Versions",permalink:"/docs/setup/swarm/cots-version/"},next:{title:"Inventory configuration",permalink:"/docs/setup/swarm/advanced-setup/"}},o={},d=[{value:"Ansible tasks",id:"ansible-tasks",level:2},{value:"Docker SWARM",id:"docker-swarm",level:2},{value:"Setup SWARM",id:"setup-swarm",level:3},{value:"setup-vm.yml",id:"setup-vmyml",level:4},{value:"Stop SWARM",id:"stop-swarm",level:3},{value:"delete-swarm.yml",id:"delete-swarmyml",level:4},{value:"REGARDS",id:"regards",level:2},{value:"Setup REGARDS",id:"setup-regards",level:3},{value:"regards.yml",id:"regardsyml",level:4},{value:"regards-config.yml",id:"regards-configyml",level:4},{value:"regards-plugins.yml",id:"regards-pluginsyml",level:4},{value:"regards-stack.yml",id:"regards-stackyml",level:4},{value:"Stop REGARDS",id:"stop-regards",level:3},{value:"regards-shutdown.yml",id:"regards-shutdownyml",level:4},{value:"Erase REGARDS",id:"erase-regards",level:3},{value:"regards-delete.yml",id:"regards-deleteyml",level:4}];function c(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"ansible-tasks",children:"Ansible tasks"}),"\n",(0,r.jsx)(s.admonition,{title:"Sudoer specific parameter",type:"info",children:(0,r.jsxs)(s.p,{children:["If users are not in sudoers you can add ",(0,r.jsx)(s.code,{children:"--ask-become-pass"})," option to an ",(0,r.jsx)(s.code,{children:"ansible-playbook"})," command to become superuser\nwhen required. You should not run any of these tasks using root user."]})}),"\n",(0,r.jsx)(s.admonition,{title:"What's an inventory ?",type:"info",children:(0,r.jsxs)(s.p,{children:["Your inventory is a folder containing a ",(0,r.jsx)(s.code,{children:"hosts"})," file that refers to nodes you want to run the install on, and a\nfolder ",(0,r.jsx)(s.code,{children:"group_vars"})," containing all the specific configuration of your setup."]})}),"\n",(0,r.jsx)(s.h2,{id:"docker-swarm",children:"Docker SWARM"}),"\n",(0,r.jsx)(s.h3,{id:"setup-swarm",children:"Setup SWARM"}),"\n",(0,r.jsx)(s.h4,{id:"setup-vmyml",children:"setup-vm.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task install & configure docker swarm environement on each nodes."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> setup-vm.yml\n"})}),"\n",(0,r.jsx)(s.h3,{id:"stop-swarm",children:"Stop SWARM"}),"\n",(0,r.jsx)(s.h4,{id:"delete-swarmyml",children:"delete-swarm.yml"}),"\n",(0,r.jsxs)(s.p,{children:["This ansible task disconnect all nodes from the docker swarm. You need to execute this task ",(0,r.jsx)(s.strong,{children:"first"})," if you want to\nexecute ",(0,r.jsx)(s.code,{children:"setup-vm.yml"})," again."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> delete-swarm.yml\n"})}),"\n",(0,r.jsx)(s.h2,{id:"regards",children:"REGARDS"}),"\n",(0,r.jsx)(s.h3,{id:"setup-regards",children:"Setup REGARDS"}),"\n",(0,r.jsx)(s.p,{children:"These tasks install REGARDS fully or partially."}),"\n",(0,r.jsx)(s.h4,{id:"regardsyml",children:"regards.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task install & configure & run REGARDS on each nodes. You can run this task as many times you want."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards.yml\n"})}),"\n",(0,r.jsx)(s.h4,{id:"regards-configyml",children:"regards-config.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task update REGARDS deployed stack that refers to the provided inventory."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards-config.yml\n"})}),"\n",(0,r.jsx)(s.h4,{id:"regards-pluginsyml",children:"regards-plugins.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task update REGARDS plugins on all servers. You need to reboot the microservice to let these changes be\nlive."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards-plugins.yml\n"})}),"\n",(0,r.jsx)(s.h4,{id:"regards-stackyml",children:"regards-stack.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task only updates the SWARM files that boots REGARDS. Very effective way to updates a port or remove a\nmicroservice."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards-stack.yml\n"})}),"\n",(0,r.jsx)(s.h3,{id:"stop-regards",children:"Stop REGARDS"}),"\n",(0,r.jsx)(s.h4,{id:"regards-shutdownyml",children:"regards-shutdown.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task shutdown REGARDS that refers to the provided inventory without removing any file."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards-shutdown.yml\n"})}),"\n",(0,r.jsx)(s.h3,{id:"erase-regards",children:"Erase REGARDS"}),"\n",(0,r.jsx)(s.h4,{id:"regards-deleteyml",children:"regards-delete.yml"}),"\n",(0,r.jsx)(s.p,{children:"This ansible task delete REGARDS deployed stack that refers to the provided inventory. This task does not remove data\nfrom external COTS."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"ansible-playbook -i inventories/<your inventory> regards-delete.yml\n"})})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var r=n(96540);const l={},a=r.createContext(l);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);