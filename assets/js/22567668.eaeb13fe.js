"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[48775],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},g=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return a?t.createElement(m,s(s({ref:n},g),{},{components:a})):t.createElement(m,s({ref:n},g))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25656:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(58168),r=(a(96540),a(15680));const o={id:"logging-stack",title:"Logging stack",slug:"/setup/swarm/advanced/logging-stack/"},s=void 0,i={unversionedId:"setup/advanced/logging-stack",id:"version-1.14/setup/advanced/logging-stack",title:"Logging stack",description:"This guide allows you to deploy logging and monitoring services thanks to your inventory.",source:"@site/versioned_docs/version-1.14/setup/advanced/swarm-logging-stack.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/logging-stack/",permalink:"/docs/setup/swarm/advanced/logging-stack/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/advanced/swarm-logging-stack.md",tags:[],version:"1.14",frontMatter:{id:"logging-stack",title:"Logging stack",slug:"/setup/swarm/advanced/logging-stack/"},sidebar:"install",previous:{title:"Deploy required microservices",permalink:"/docs/setup/swarm/advanced/microservice-setup"},next:{title:"Posgres database",permalink:"/docs/setup/swarm/advanced/postgres-database/"}},l={},c=[{value:"Active services",id:"active-services",level:2},{value:"Multi-nodes swarm cluster",id:"multi-nodes-swarm-cluster",level:2},{value:"Configure Grafana service",id:"configure-grafana-service",level:2},{value:"SSL",id:"ssl",level:3},{value:"Elasticsearch",id:"elasticsearch",level:3},{value:"Postgres",id:"postgres",level:3}],g={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This guide allows you to deploy logging and monitoring services thanks to your inventory."),(0,r.yg)("h2",{id:"active-services"},"Active services"),(0,r.yg)("p",null,"Add following services inside your inventory file ",(0,r.yg)("inlineCode",{parentName:"p"},"group_vars/regards_nodes/main.yml"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'# COTS\ngroup_docker_cots:\n  [...]\n  elasticsearch_exporter:\n    tag: "{{ group_docker_tags.cots }}"\n  node_exporter:\n    tag: "{{ group_docker_tags.cots }}"\n  telegraf:\n    tag: "{{ group_docker_tags.cots }}"\n    # Telegraf, Node exporter and Fluentbit are global services\n  kafka:\n    tag: "{{ group_docker_tags.cots }}"\n  fluentbit:\n    tag: "{{ group_docker_tags.cots }}"\n  fluentd:\n    tag: "{{ group_docker_tags.cots }}"\n  prometheus:\n    tag: "{{ group_docker_tags.cots }}"\n  loki:\n    tag: "{{ group_docker_tags.cots }}"\n  grafana:\n    tag: "{{ group_docker_tags.cots }}"\n    port: 3000\n')),(0,r.yg)("h2",{id:"multi-nodes-swarm-cluster"},"Multi-nodes swarm cluster"),(0,r.yg)("p",null,"If you have several nodes in your swarm cluster, you need to add ",(0,r.yg)("inlineCode",{parentName:"p"},"node_label_placement_constraint")," to services that uses local disk: ",(0,r.yg)("inlineCode",{parentName:"p"},"Loki")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  [...]\n  prometheus:\n    [...]\n    node_label_placement_constraint:\n      key: type\n      value: logging\n  loki:\n    [...]\n    node_label_placement_constraint:\n      key: type\n      value: logging\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In a multi node swarm cluster, we recommend to dedicate a node for logging and monitoring purpose using Swarm placement constraints")),(0,r.yg)("p",null,"To do that, you need to edit your inventory file ",(0,r.yg)("inlineCode",{parentName:"p"},"hosts")," to add the label used as a ",(0,r.yg)("inlineCode",{parentName:"p"},"node_label_placement_constraint"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# REGARDS\n[regards_nodes]\nregards-slaveX labels=\'{"type": "logging"}\' ansible_host=[...]\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you've updated ",(0,r.yg)("inlineCode",{parentName:"p"},"labels")," on the ",(0,r.yg)("inlineCode",{parentName:"p"},"hosts")," file, you need to patch swarm nodes using ",(0,r.yg)("inlineCode",{parentName:"p"},"delete-swarm.yml")," then ",(0,r.yg)("inlineCode",{parentName:"p"},"setup-vm.yml")," playbooks.")),(0,r.yg)("h2",{id:"configure-grafana-service"},"Configure Grafana service"),(0,r.yg)("h3",{id:"ssl"},"SSL"),(0,r.yg)("p",null,"If you have SSL certificates (like the one used by ",(0,r.yg)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/regards-https/"},"REGARDS frontend service"),"), you can give them to Grafana:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'group_docker_stack_domain: my-regards.cnes.fr\ngroup_docker_cots:\n  [...]\n  grafana:\n    host: "{{ group_docker_stack_domain }}"\n    ssl:\n      crt: "{{ group_docker_stack_domain }}.crt"\n      key: "{{ group_docker_stack_domain }}.key"\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"When SSL informations are provided inside inventory, Grafana is available through HTTPS protocol.")),(0,r.yg)("h3",{id:"elasticsearch"},"Elasticsearch"),(0,r.yg)("p",null,"If you use the REGARDS Elasticsearch service (and not use a mutualised one), you can connect Grafana to see indexes from Elasticsearch server. You need to list indexes like this:  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  [...]\n  grafana:\n    datasources:\n      regards_cots:\n        elasticsearch_indexes:\n          - project1\n          - project2\n          - ...\n          # list here the REGARDS tenant in lower case \n")),(0,r.yg)("h3",{id:"postgres"},"Postgres"),(0,r.yg)("p",null,"If you use a mutualised Postgres, you can configure how Grafana connects to each tenant"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  [...]\n  grafana:\n    datasources:\n      custom:\n        postgres:\n          - name: BD Project <project name>\n            url: <database URL>:<database port>\n            user: <database user>\n            password: <Database password - use Ansible Vault!>\n            databases: \n              - <database name>\n          [...]\n")),(0,r.yg)("p",null,"That's it!"))}u.isMDXComponent=!0}}]);