"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[42222],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var s=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=s.createContext({}),d=function(e){var r=s.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=d(e.components);return s.createElement(i.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},g=s.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),g=a,m=p["".concat(i,".").concat(g)]||p[g]||y[g]||n;return t?s.createElement(m,l(l({ref:r},u),{},{components:t})):s.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,l=new Array(n);l[0]=g;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<n;d++)l[d]=t[d];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48585:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=t(58168),a=(t(96540),t(15680));const n={id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Tasks",slug:"/setup/ansible-tasks/"},l=void 0,o={unversionedId:"setup/ansible-tasks",id:"version-1.14/setup/ansible-tasks",title:"Ansible tasks",description:"Ansible tasks",source:"@site/versioned_docs/version-1.14/setup/ansible-tasks.md",sourceDirName:"setup",slug:"/setup/ansible-tasks/",permalink:"/docs/setup/ansible-tasks/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/ansible-tasks.md",tags:[],version:"1.14",frontMatter:{id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Tasks",slug:"/setup/ansible-tasks/"},sidebar:"install",previous:{title:"CoTS Versions",permalink:"/docs/setup/swarm/cots-version/"},next:{title:"Inventory configuration",permalink:"/docs/setup/swarm/advanced-setup/"}},i={},d=[{value:"Ansible tasks",id:"ansible-tasks",level:2},{value:"Docker SWARM",id:"docker-swarm",level:2},{value:"Setup SWARM",id:"setup-swarm",level:3},{value:"setup-vm.yml",id:"setup-vmyml",level:4},{value:"Stop SWARM",id:"stop-swarm",level:3},{value:"delete-swarm.yml",id:"delete-swarmyml",level:4},{value:"REGARDS",id:"regards",level:2},{value:"Setup REGARDS",id:"setup-regards",level:3},{value:"regards.yml",id:"regardsyml",level:4},{value:"regards-config.yml",id:"regards-configyml",level:4},{value:"regards-plugins.yml",id:"regards-pluginsyml",level:4},{value:"regards-stack.yml",id:"regards-stackyml",level:4},{value:"Stop REGARDS",id:"stop-regards",level:3},{value:"regards-shutdown.yml",id:"regards-shutdownyml",level:4},{value:"Erase REGARDS",id:"erase-regards",level:3},{value:"regards-delete.yml",id:"regards-deleteyml",level:4}],u={toc:d},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,s.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"ansible-tasks"},"Ansible tasks"),(0,a.yg)("admonition",{title:"Sudoer specific parameter",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"If users are not in sudoers you can add ",(0,a.yg)("inlineCode",{parentName:"p"},"--ask-become-pass")," option to an ",(0,a.yg)("inlineCode",{parentName:"p"},"ansible-playbook")," command to become superuser when required. You should not run any of these tasks using root user.")),(0,a.yg)("admonition",{title:"What's an inventory ?",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Your inventory is a folder containing a ",(0,a.yg)("inlineCode",{parentName:"p"},"hosts")," file that refers to nodes you want to run the install on, and a folder ",(0,a.yg)("inlineCode",{parentName:"p"},"group_vars")," containing all the specific configuration of your setup.")),(0,a.yg)("h2",{id:"docker-swarm"},"Docker SWARM"),(0,a.yg)("h3",{id:"setup-swarm"},"Setup SWARM"),(0,a.yg)("h4",{id:"setup-vmyml"},"setup-vm.yml"),(0,a.yg)("p",null,"This ansible task install & configure docker swarm environement on each nodes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> setup-vm.yml\n")),(0,a.yg)("h3",{id:"stop-swarm"},"Stop SWARM"),(0,a.yg)("h4",{id:"delete-swarmyml"},"delete-swarm.yml"),(0,a.yg)("p",null,"This ansible task disconnect all nodes from the docker swarm. You need to execute this task ",(0,a.yg)("strong",{parentName:"p"},"first")," if you want to execute ",(0,a.yg)("inlineCode",{parentName:"p"},"setup-vm.yml")," again."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> delete-swarm.yml\n")),(0,a.yg)("h2",{id:"regards"},"REGARDS"),(0,a.yg)("h3",{id:"setup-regards"},"Setup REGARDS"),(0,a.yg)("p",null,"These tasks install REGARDS fully or partially."),(0,a.yg)("h4",{id:"regardsyml"},"regards.yml"),(0,a.yg)("p",null,"This ansible task install & configure & run REGARDS on each nodes. You can run this task as many times you want."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards.yml\n")),(0,a.yg)("h4",{id:"regards-configyml"},"regards-config.yml"),(0,a.yg)("p",null,"This ansible task update REGARDS deployed stack that refers to the provided inventory."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-config.yml\n")),(0,a.yg)("h4",{id:"regards-pluginsyml"},"regards-plugins.yml"),(0,a.yg)("p",null,"This ansible task update REGARDS plugins on all servers. You need to reboot the microservice to let these changes be live."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-plugins.yml\n")),(0,a.yg)("h4",{id:"regards-stackyml"},"regards-stack.yml"),(0,a.yg)("p",null,"This ansible task only updates the SWARM files that boots REGARDS. Very effective way to updates a port or remove a microservice."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-stack.yml\n")),(0,a.yg)("h3",{id:"stop-regards"},"Stop REGARDS"),(0,a.yg)("h4",{id:"regards-shutdownyml"},"regards-shutdown.yml"),(0,a.yg)("p",null,"This ansible task shutdown REGARDS that refers to the provided inventory without removing any file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-shutdown.yml\n")),(0,a.yg)("h3",{id:"erase-regards"},"Erase REGARDS"),(0,a.yg)("h4",{id:"regards-deleteyml"},"regards-delete.yml"),(0,a.yg)("p",null,"This ansible task delete REGARDS deployed stack that refers to the provided inventory. This task does not remove data from external COTS."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-delete.yml\n")))}y.isMDXComponent=!0}}]);