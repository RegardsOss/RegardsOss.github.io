"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[48775],{2475:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=s(74848),o=s(28453);const t={id:"logging-stack",title:"Logging stack",slug:"/setup/swarm/advanced/logging-stack/"},r=void 0,c={id:"setup/advanced/logging-stack",title:"Logging stack",description:"This guide allows you to deploy logging and monitoring services thanks to your inventory.",source:"@site/versioned_docs/version-1.14/setup/advanced/swarm-logging-stack.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/logging-stack/",permalink:"/docs/1.14/setup/swarm/advanced/logging-stack/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/advanced/swarm-logging-stack.md",tags:[],version:"1.14",frontMatter:{id:"logging-stack",title:"Logging stack",slug:"/setup/swarm/advanced/logging-stack/"},sidebar:"install",previous:{title:"Deploy required microservices",permalink:"/docs/1.14/setup/swarm/advanced/microservice-setup"},next:{title:"Posgres database",permalink:"/docs/1.14/setup/swarm/advanced/postgres-database/"}},i={},d=[{value:"Active services",id:"active-services",level:2},{value:"Multi-nodes swarm cluster",id:"multi-nodes-swarm-cluster",level:2},{value:"Configure Grafana service",id:"configure-grafana-service",level:2},{value:"SSL",id:"ssl",level:3},{value:"Elasticsearch",id:"elasticsearch",level:3},{value:"Postgres",id:"postgres",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This guide allows you to deploy logging and monitoring services thanks to your inventory."}),"\n",(0,a.jsx)(n.h2,{id:"active-services",children:"Active services"}),"\n",(0,a.jsxs)(n.p,{children:["Add following services inside your inventory file ",(0,a.jsx)(n.code,{children:"group_vars/regards_nodes/main.yml"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'# COTS\ngroup_docker_cots:\n  [...]\n  elasticsearch_exporter:\n    tag: "{{ group_docker_tags.cots }}"\n  node_exporter:\n    tag: "{{ group_docker_tags.cots }}"\n  telegraf:\n    tag: "{{ group_docker_tags.cots }}"\n    # Telegraf, Node exporter and Fluentbit are global services\n  kafka:\n    tag: "{{ group_docker_tags.cots }}"\n  fluentbit:\n    tag: "{{ group_docker_tags.cots }}"\n  fluentd:\n    tag: "{{ group_docker_tags.cots }}"\n  prometheus:\n    tag: "{{ group_docker_tags.cots }}"\n  loki:\n    tag: "{{ group_docker_tags.cots }}"\n  grafana:\n    tag: "{{ group_docker_tags.cots }}"\n    port: 3000\n'})}),"\n",(0,a.jsx)(n.h2,{id:"multi-nodes-swarm-cluster",children:"Multi-nodes swarm cluster"}),"\n",(0,a.jsxs)(n.p,{children:["If you have several nodes in your swarm cluster, you need to add ",(0,a.jsx)(n.code,{children:"node_label_placement_constraint"})," to services that uses local disk: ",(0,a.jsx)(n.code,{children:"Loki"})," and ",(0,a.jsx)(n.code,{children:"Prometheus"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  [...]\n  prometheus:\n    [...]\n    node_label_placement_constraint:\n      key: type\n      value: logging\n  loki:\n    [...]\n    node_label_placement_constraint:\n      key: type\n      value: logging\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"In a multi node swarm cluster, we recommend to dedicate a node for logging and monitoring purpose using Swarm placement constraints"})}),"\n",(0,a.jsxs)(n.p,{children:["To do that, you need to edit your inventory file ",(0,a.jsx)(n.code,{children:"hosts"})," to add the label used as a ",(0,a.jsx)(n.code,{children:"node_label_placement_constraint"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'# REGARDS\n[regards_nodes]\nregards-slaveX labels=\'{"type": "logging"}\' ansible_host=[...]\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you've updated ",(0,a.jsx)(n.code,{children:"labels"})," on the ",(0,a.jsx)(n.code,{children:"hosts"})," file, you need to patch swarm nodes using ",(0,a.jsx)(n.code,{children:"delete-swarm.yml"})," then ",(0,a.jsx)(n.code,{children:"setup-vm.yml"})," playbooks."]})}),"\n",(0,a.jsx)(n.h2,{id:"configure-grafana-service",children:"Configure Grafana service"}),"\n",(0,a.jsx)(n.h3,{id:"ssl",children:"SSL"}),"\n",(0,a.jsxs)(n.p,{children:["If you have SSL certificates (like the one used by ",(0,a.jsx)(n.a,{href:"/docs/1.14/setup/swarm/advanced/regards-https/",children:"REGARDS frontend service"}),"), you can give them to Grafana:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'group_docker_stack_domain: my-regards.cnes.fr\ngroup_docker_cots:\n  [...]\n  grafana:\n    host: "{{ group_docker_stack_domain }}"\n    ssl:\n      crt: "{{ group_docker_stack_domain }}.crt"\n      key: "{{ group_docker_stack_domain }}.key"\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"When SSL informations are provided inside inventory, Grafana is available through HTTPS protocol."})}),"\n",(0,a.jsx)(n.h3,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,a.jsx)(n.p,{children:"If you use the REGARDS Elasticsearch service (and not use a mutualised one), you can connect Grafana to see indexes from Elasticsearch server. You need to list indexes like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  [...]\n  grafana:\n    datasources:\n      regards_cots:\n        elasticsearch_indexes:\n          - project1\n          - project2\n          - ...\n          # list here the REGARDS tenant in lower case \n"})}),"\n",(0,a.jsx)(n.h3,{id:"postgres",children:"Postgres"}),"\n",(0,a.jsx)(n.p,{children:"If you use a mutualised Postgres, you can configure how Grafana connects to each tenant"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  [...]\n  grafana:\n    datasources:\n      custom:\n        postgres:\n          - name: BD Project <project name>\n            url: <database URL>:<database port>\n            user: <database user>\n            password: <Database password - use Ansible Vault!>\n            databases: \n              - <database name>\n          [...]\n"})}),"\n",(0,a.jsx)(n.p,{children:"That's it!"})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var a=s(96540);const o={},t=a.createContext(o);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);