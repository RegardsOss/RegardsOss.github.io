"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52779],{74183:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=r(74848),i=r(28453);const o={id:"1.13-to-1.14",title:"V1.13 to V1.14",slug:"/setup/swarm/migration/1.13-to-1.14"},t=void 0,d={id:"setup/migration/1.13-to-1.14",title:"V1.13 to V1.14",description:"Steps to migrate REGARDS from version 1.13 to 1.14",source:"@site/versioned_docs/version-1.15/setup/migration/1.13-to-1.14.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.13-to-1.14",permalink:"/docs/1.15/setup/swarm/migration/1.13-to-1.14",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/setup/migration/1.13-to-1.14.md",tags:[],version:"1.15",frontMatter:{id:"1.13-to-1.14",title:"V1.13 to V1.14",slug:"/setup/swarm/migration/1.13-to-1.14"},sidebar:"install",previous:{title:"V1.12 to V1.13",permalink:"/docs/1.15/setup/swarm/migration/1.12-to-1.13"},next:{title:"V1.14 to V1.15",permalink:"/docs/1.15/setup/swarm/migration/1.14-to-1.15"}},l={},c=[{value:"Breaking change",id:"breaking-change",level:2},{value:"Deprecation",id:"deprecation",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Steps to migrate REGARDS from version 1.13 to 1.14"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Download last playbook version and move your inventory inside the new playbook"}),"\n",(0,s.jsxs)(n.li,{children:["Edit your inventory file ",(0,s.jsx)(n.code,{children:"group_vars/all/main.yml"})," :"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# Replace \n  version: 1.13.1\n# Into \n  version: 1.14.3\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["When this guide has been written, last version was 1.14.3. Check if there is an updated version available ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication",children:"here"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a property ",(0,s.jsx)(n.code,{children:"group_docker_use_log_concentrator"})," inside your inventory file ",(0,s.jsx)(n.code,{children:"group_vars/regards_nodes/main.yml"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"[...]\ngroup_docker_network_name: 'regards_{{ group_stack_name }}'\ngroup_docker_network_ip_network: '10.11.7.'\n\ngroup_docker_registry: ghcr.io/regardsoss\n\n# Add here-under new property\ngroup_docker_use_log_concentrator: True\n\n[...]\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This property means that you have re-install swarm (you will run ",(0,s.jsx)(n.code,{children:"ansible-playbook -i [...] setup-vm.yml [...]"})," at the end of this guide) and now, the log configuration is managed by Docker and not described on services when deployed."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure properties ",(0,s.jsx)(n.code,{children:"enable_resource_limits"}),", inside your inventory file ",(0,s.jsx)(n.code,{children:"group_vars/regards_nodes/main.yml"}),", exists and equals to ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots_configuration:\n  enable_healthcheck: true\n\ngroup_config_mservices:\n  enable_healthcheck: true\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Resource limits are now mandatory!",type:"danger",children:(0,s.jsxs)(n.p,{children:["If you don't provide any resource limit to REGARDS containers, they won't have any memory limit. Before 1.14, they were limited to some amount of memory, but now they use containers limits.",(0,s.jsx)(n.br,{}),"\n","See ",(0,s.jsx)(n.a,{href:"#breaking-change",children:"Breaking Changes section"})," to get more info about this change"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove deprecated logging services ",(0,s.jsx)(n.code,{children:"elasticsearch_logs"}),", ",(0,s.jsx)(n.code,{children:"kibana_logs"}),", and ",(0,s.jsx)(n.code,{children:"fluent"})," from your stack:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# Before\ngroup_docker_cots:\n  [..]\n  elasticsearch_logs:\n    [..]\n  kibana_logs:\n    [..]\n  fluent:\n    [..]\n\n# After\n# Everything related these components is removed\ngroup_docker_cots:\n  [..]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Remove ",(0,s.jsx)(n.code,{children:"group_docker_cots_configuration.elasticsearch_logs"})," as you don't use the ",(0,s.jsx)(n.code,{children:"elasticsearch_logs"})," service anymore"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Optional:"})," Follow the ",(0,s.jsx)(n.a,{href:"/docs/1.15/setup/swarm/advanced/logging-stack/",children:"logging stack guide to add Grafana, Loki, Prometheus and many other services"})," to get started with the new powerful logging and monitoring stack"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Optional:"})," Add following properties inside your inventory file ",(0,s.jsx)(n.code,{children:"group_vars/docker_nodes/main.yml"}),", at the end of the file:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'yum_proxy: "{{ global_proxy.url | default(None) }}"\npython_version: 3\n[...] # add to the end of the file:\n\n# Logging Driver\nlog_driver_type: fluentd\nlog_driver_opts:\n  fluentd-address : 127.0.0.1:24224\n  fluentd-async : "true"\n  fluentd-retry-wait : 15s\n  fluentd-sub-second-precision: "true"\n  cache-max-size: 10m\n  cache-max-file: 10\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Do this step only if you want to use the logging stack. The default value of ",(0,s.jsx)(n.code,{children:"log_driver_type"})," is ",(0,s.jsx)(n.code,{children:"json-file"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Shutdown REGARDS using the playbook"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] regards-shutdown.yml [...]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Disconnect swarm nodes"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] delete-swarm.yml [...]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reinstall swarm nodes"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] setup-vm.yml [...]\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You must do the ",(0,s.jsx)(n.code,{children:"setup-vm.yml"})," step whether you use the logging stack or not"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update REGARDS using the playbook"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i [...] regards.yml [...]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"breaking-change",children:"Breaking change"}),"\n",(0,s.jsxs)(n.p,{children:["REGARDS container were booting with a lot of RAM and CPU reservations using the ",(0,s.jsx)(n.code,{children:"xmx"})," and ",(0,s.jsx)(n.code,{children:"xms"})," properties to fix the amount of RAM."]}),"\n",(0,s.jsxs)(n.p,{children:["Starting with 1.14, the amount of RAM is now a ratio from the container limit (using ",(0,s.jsx)(n.code,{children:"-XX:MaxRAMPercentage=75"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"It allows you to adapt the quantity of memory allowed by a service inside your inventory."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Service"}),(0,s.jsxs)(n.th,{children:["RAM ",(0,s.jsx)(n.code,{children:"version < 1.14"})]}),(0,s.jsxs)(n.th,{children:["RAM  ",(0,s.jsx)(n.code,{children:"version >= 1.14"})]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"dam"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1920mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1280mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"notifier"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1920mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1280mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"fem"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1920mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1024mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"catalog"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1536mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1024mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ingest"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3840mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1536mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"storage"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2560mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1024mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"order"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1536mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1280mb"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"worker_manager"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"2560mb"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"1024mb"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"If you want to boot your app without reducing memory, you need to provide a memory limit equivalent to values previously there, like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\n# Stack\ngroup_docker_mservices:\n  dam:\n    memoryLimit: 1920mb\n  notifier:\n    memoryLimit: 1920mb\n  fem:\n    memoryLimit: 1920mb\n  catalog:\n    memoryLimit: 1536mb\n  ingest:\n    memoryLimit: 3840mb\n  storage:\n    memoryLimit: 2560mb\n  order:\n    memoryLimit: 1536mb\n  worker_manager:\n    memoryLimit: 2560mb\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"How to tune memory limit?",type:"info",children:(0,s.jsx)(n.p,{children:"The new logging stack gives you the amount of memory used by a microservice on live, helping you to fix the right amount of memory limit for your environment."})}),"\n",(0,s.jsx)(n.h2,{id:"deprecation",children:"Deprecation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Disabling healthcheck and resource limits will removed on 1.15"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots_configuration:\n  enable_healthcheck: false\n  enable_resource_limits: false\n\ngroup_config_mservices:\n  enable_healthcheck: false\n  enable_resource_limits: false\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The previous logging stack will removed on 1.15"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'group_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n  elasticsearch_logs:\n    tag: "{{ group_docker_tags.cots }}"\n  kibana_logs:\n    tag: "{{ group_docker_tags.cots }}"\n    http: 5602\n  fluent:\n    tag: "{{ group_docker_tags.cots }}"\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A good configuration of Docker will be required on 1.15 to specify the logging configuration directly on the Docker daemon side.",(0,s.jsx)(n.br,{}),"\n","For now, you can still omit the ",(0,s.jsx)(n.code,{children:"group_docker_use_log_concentrator"})," or provide the ",(0,s.jsx)(n.code,{children:"false"})," value to define the configuration on the service."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_use_log_concentrator: false\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"group_docker_use_log_concentrator: True"}),", it means you have defined a log driver inside ",(0,s.jsx)(n.code,{children:"/etc/docker/daemon.json"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    [...]\n    # logging stack activated\n    "log-driver": "fluentd",\n    "log-opts": {\n        "fluentd-async": "true",\n        "cache-max-size": "10m",\n        "cache-max-file": "10",\n        "fluentd-retry-wait": "15s",\n        "fluentd-address": "127.0.0.1:24224"\n    },\n    [OR]\n    # no logging stack\n    "log-driver": "json-file",\n    "log-opts": {\n        "max-size": "10m",\n        "max-file": "10"\n    },\n    [...]\n}\n'})}),(0,s.jsxs)(n.p,{children:["On the other hand, inside Docker swarm stack files, there is no need to override the ",(0,s.jsx)(n.code,{children:"logging"})," property to avoid massive disk usage, as this issue is handled directly by the Docker daemon."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# A stack file, ie /opt/regards/regards/stack/regards-stack.yml\nversion: \'3.9\'\nservices:\n  rs-front:\n    [...]\n    logging:\n      options:\n        max-size: "10m"\n        max-file: "10"\n'})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Property ",(0,s.jsx)(n.code,{children:"active_mail_on_admin_instance"})," will be removed on 1.15"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_config_mservices:\n  active_mail_on_admin_instance: true\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Property ",(0,s.jsx)(n.code,{children:"securised"})," from frontend service will be removed on 1.15"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_mservices:\n  [...]\n  front:\n    [...]\n    securised: true\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);