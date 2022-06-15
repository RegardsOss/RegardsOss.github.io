"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[14734],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,v=m["".concat(l,".").concat(c)]||m[c]||p[c]||s;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),i=["components"],o={id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Ansible playbook tasks",slug:"/setup/ansible-tasks/"},l=void 0,d={unversionedId:"setup/ansible-tasks",id:"version-1.8.0/setup/ansible-tasks",title:"Ansible tasks",description:"Ansible tasks",source:"@site/versioned_docs/version-1.8.0/setup/ansible-tasks.md",sourceDirName:"setup",slug:"/setup/ansible-tasks/",permalink:"/docs/1.8.0/setup/ansible-tasks/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/setup/ansible-tasks.md",tags:[],version:"1.8.0",frontMatter:{id:"ansible-tasks",title:"Ansible tasks",sidebar_label:"Ansible playbook tasks",slug:"/setup/ansible-tasks/"},sidebar:"install",previous:{title:"Administration",permalink:"/docs/1.8.0/setup/swarm/cli/"},next:{title:"Advanced setup",permalink:"/docs/1.8.0/setup/swarm/advanced-setup/"}},u={},p=[{value:"Ansible tasks",id:"ansible-tasks",level:2},{value:"setup-vm.yml",id:"setup-vmyml",level:3},{value:"delete-swarm.yml",id:"delete-swarmyml",level:3},{value:"regards.yml",id:"regardsyml",level:3},{value:"regards-config.yml",id:"regards-configyml",level:3},{value:"regards-shutdown.yml",id:"regards-shutdownyml",level:3},{value:"regards-delete.yml",id:"regards-deleteyml",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ansible-tasks"},"Ansible tasks"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If users are not in sudoers you can add ",(0,s.kt)("inlineCode",{parentName:"p"},"--ask-become-pass")," option to an ",(0,s.kt)("inlineCode",{parentName:"p"},"ansible-playbook")," command to become superuser when required. You should not run any of these tasks using root user."))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Your inventory is a folder containing a ",(0,s.kt)("inlineCode",{parentName:"p"},"hosts")," file that refers to nodes you want to run the install on, and a folder ",(0,s.kt)("inlineCode",{parentName:"p"},"group_vars")," containing all the specific configuration of your setup."))),(0,s.kt)("h3",{id:"setup-vmyml"},"setup-vm.yml"),(0,s.kt)("p",null,"This ansible task install & configure docker swarm environement on each nodes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> setup-vm.yml\n")),(0,s.kt)("h3",{id:"delete-swarmyml"},"delete-swarm.yml"),(0,s.kt)("p",null,"This ansible task disconnect all nodes from the docker swarm. You need to execute this task if you want to execute ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," again."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> delete-swarm.yml\n")),(0,s.kt)("h3",{id:"regardsyml"},"regards.yml"),(0,s.kt)("p",null,"This ansible task install & configure & run REGARDS on each nodes. You can run this task as many times you want."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards.yml\n")),(0,s.kt)("h3",{id:"regards-configyml"},"regards-config.yml"),(0,s.kt)("p",null,"This ansible task update REGARDS deployed stack that refers to the provided inventory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-config.yml\n")),(0,s.kt)("h3",{id:"regards-shutdownyml"},"regards-shutdown.yml"),(0,s.kt)("p",null,"This ansible task shutdown REGARDS deployed stack that refers to the provided inventory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-shutdown.yml\n")),(0,s.kt)("h3",{id:"regards-deleteyml"},"regards-delete.yml"),(0,s.kt)("p",null,"This ansible task delete REGARDS deployed stack that refers to the provided inventory. This task does not remove data from external COTS."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ansible-playbook -i inventories/<your inventory> regards-delete.yml\n")))}c.isMDXComponent=!0}}]);