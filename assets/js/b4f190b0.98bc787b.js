"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[64979],{18961:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(74848),t=s(28453);const o={id:"1.8-to-1.11",title:"V1.8 to V1.11",slug:"/setup/swarm/migration/1.8-to-1.11"},i=void 0,a={id:"setup/migration/1.8-to-1.11",title:"V1.8 to V1.11",description:"Steps to migrate REGARDS from version 1.8 to 1.11",source:"@site/versioned_docs/version-1.14/setup/migration/1.8-to-1.11.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.8-to-1.11",permalink:"/docs/1.14/setup/swarm/migration/1.8-to-1.11",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/migration/1.8-to-1.11.md",tags:[],version:"1.14",frontMatter:{id:"1.8-to-1.11",title:"V1.8 to V1.11",slug:"/setup/swarm/migration/1.8-to-1.11"},sidebar:"install",previous:{title:"Common issues",permalink:"/docs/1.14/setup/swarm/common-issues"},next:{title:"V1.11 to V1.12",permalink:"/docs/1.14/setup/swarm/migration/1.11-to-1.12"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Steps to migrate REGARDS from version 1.8 to 1.11"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Shutdown REGARDS using the playbook"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] regards-shutdown.yml [...]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Download last playbook version and move your inventory inside the new playbook"}),"\n",(0,r.jsxs)(n.li,{children:["Edit your inventory file ",(0,r.jsx)(n.code,{children:"group_vars/all/main.yml"})," :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Replace \n  version: 1.8.1\n# Into \n  version: 1.11.1\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["When this guide has been writen, last version was 1.11.1. Check if there is an updated version available ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication",children:"here"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Edit your inventory file ",(0,r.jsx)(n.code,{children:"group_vars/regards_nodes/main.yml"})," :"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Remove property legacy: true from elasticsearch and elasticsearch_logs\n# Before\ngroup_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n    legacy: true\n#  elasticsearch_logs:\n#    tag: "{{ group_docker_tags.cots }}"\n#    legacy: true\n\n# After \ngroup_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n#  elasticsearch_logs:\n#    tag: "{{ group_docker_tags.cots }}"\n\n# Remove property legacy_spring: true\n# Before\ngroup_config_mservices:\n  legacy_spring: true\n  init_project: "{{ global_regards.project_name }}"\n\n# After \ngroup_config_mservices:\n  init_project: "{{ global_regards.project_name }}"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Remove files from RabbitMQ and Elasticsearch on every node:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /<path/to/regards>/workspace/\nsudo rm -rf elasticsearch/* rabbitmq/*\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Execute the playbook file ",(0,r.jsx)(n.code,{children:"regards.yml"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] regards.yml [...]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(96540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);