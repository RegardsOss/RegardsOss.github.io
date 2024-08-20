"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[48694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"1.13-to-1.14",title:"V1.13 to V1.14",slug:"/setup/swarm/migration/1.13-to-1.14"},i=void 0,l={unversionedId:"setup/migration/1.13-to-1.14",id:"version-1.15/setup/migration/1.13-to-1.14",title:"V1.13 to V1.14",description:"Steps to migrate REGARDS from version 1.13 to 1.14",source:"@site/versioned_docs/version-1.15/setup/migration/1.13-to-1.14.md",sourceDirName:"setup/migration",slug:"/setup/swarm/migration/1.13-to-1.14",permalink:"/docs/setup/swarm/migration/1.13-to-1.14",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/setup/migration/1.13-to-1.14.md",tags:[],version:"1.15",frontMatter:{id:"1.13-to-1.14",title:"V1.13 to V1.14",slug:"/setup/swarm/migration/1.13-to-1.14"},sidebar:"install",previous:{title:"V1.12 to V1.13",permalink:"/docs/setup/swarm/migration/1.12-to-1.13"},next:{title:"V1.14 to V1.15",permalink:"/docs/setup/swarm/migration/1.14-to-1.15"}},m={},s=[{value:"Breaking change",id:"breaking-change",level:2},{value:"Deprecation",id:"deprecation",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Steps to migrate REGARDS from version 1.13 to 1.14"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download last playbook version and move your inventory inside the new playbook"),(0,r.kt)("li",{parentName:"ul"},"Edit your inventory file ",(0,r.kt)("inlineCode",{parentName:"li"},"group_vars/all/main.yml")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Replace \n  version: 1.13.1\n# Into \n  version: 1.14.3\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When this guide has been written, last version was 1.14.3. Check if there is an updated version available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/orgs/RegardsOss/packages/container/package/rs-authentication"},"here"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a property ",(0,r.kt)("inlineCode",{parentName:"li"},"group_docker_use_log_concentrator")," inside your inventory file ",(0,r.kt)("inlineCode",{parentName:"li"},"group_vars/regards_nodes/main.yml"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\ngroup_docker_network_name: 'regards_{{ group_stack_name }}'\ngroup_docker_network_ip_network: '10.11.7.'\n\ngroup_docker_registry: ghcr.io/regardsoss\n\n# Add here-under new property\ngroup_docker_use_log_concentrator: True\n\n[...]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This property means that you have re-install swarm (you will run ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook -i [...] setup-vm.yml [...]")," at the end of this guide) and now, the log configuration is managed by Docker and not described on services when deployed.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure properties ",(0,r.kt)("inlineCode",{parentName:"li"},"enable_resource_limits"),", inside your inventory file ",(0,r.kt)("inlineCode",{parentName:"li"},"group_vars/regards_nodes/main.yml"),", exists and equals to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots_configuration:\n  enable_healthcheck: true\n\ngroup_config_mservices:\n  enable_healthcheck: true\n")),(0,r.kt)("admonition",{title:"Resource limits are now mandatory!",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you don't provide any resource limit to REGARDS containers, they won't have any memory limit. Before 1.14, they were limited to some amount of memory, but now they use containers limits.",(0,r.kt)("br",{parentName:"p"}),"\n","See ",(0,r.kt)("a",{parentName:"p",href:"#breaking-change"},"Breaking Changes section")," to get more info about this change")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove deprecated logging services ",(0,r.kt)("inlineCode",{parentName:"li"},"elasticsearch_logs"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kibana_logs"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"fluent")," from your stack:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Before\ngroup_docker_cots:\n  [..]\n  elasticsearch_logs:\n    [..]\n  kibana_logs:\n    [..]\n  fluent:\n    [..]\n\n# After\n# Everything related these components is removed\ngroup_docker_cots:\n  [..]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remove ",(0,r.kt)("inlineCode",{parentName:"p"},"group_docker_cots_configuration.elasticsearch_logs")," as you don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch_logs")," service anymore")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Optional:")," Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/logging-stack/"},"logging stack guide to add Grafana, Loki, Prometheus and many other services")," to get started with the new powerful logging and monitoring stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Optional:")," Add following properties inside your inventory file ",(0,r.kt)("inlineCode",{parentName:"p"},"group_vars/docker_nodes/main.yml"),", at the end of the file:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'yum_proxy: "{{ global_proxy.url | default(None) }}"\npython_version: 3\n[...] # add to the end of the file:\n\n# Logging Driver\nlog_driver_type: fluentd\nlog_driver_opts:\n  fluentd-address : 127.0.0.1:24224\n  fluentd-async : "true"\n  fluentd-retry-wait : 15s\n  fluentd-sub-second-precision: "true"\n  cache-max-size: 10m\n  cache-max-file: 10\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Do this step only if you want to use the logging stack. The default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"log_driver_type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"json-file"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shutdown REGARDS using the playbook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards-shutdown.yml [...]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disconnect swarm nodes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] delete-swarm.yml [...]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reinstall swarm nodes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] setup-vm.yml [...]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must do the ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-vm.yml")," step whether you use the logging stack or not")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update REGARDS using the playbook")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook -i [...] regards.yml [...]\n")),(0,r.kt)("h2",{id:"breaking-change"},"Breaking change"),(0,r.kt)("p",null,"REGARDS container were booting with a lot of RAM and CPU reservations using the ",(0,r.kt)("inlineCode",{parentName:"p"},"xmx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"xms")," properties to fix the amount of RAM."),(0,r.kt)("p",null,"Starting with 1.14, the amount of RAM is now a ratio from the container limit (using ",(0,r.kt)("inlineCode",{parentName:"p"},"-XX:MaxRAMPercentage=75"),")."),(0,r.kt)("p",null,"It allows you to adapt the quantity of memory allowed by a service inside your inventory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM ",(0,r.kt)("inlineCode",{parentName:"th"},"version < 1.14")),(0,r.kt)("th",{parentName:"tr",align:null},"RAM  ",(0,r.kt)("inlineCode",{parentName:"th"},"version >= 1.14")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dam")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1920mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1280mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notifier")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1920mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1280mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fem")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1920mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1024mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"catalog")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1536mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1024mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3840mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1536mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2560mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1024mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"order")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1536mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1280mb"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"worker_manager")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2560mb")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1024mb"))))),(0,r.kt)("p",null,"If you want to boot your app without reducing memory, you need to provide a memory limit equivalent to values previously there, like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# Stack\ngroup_docker_mservices:\n  dam:\n    memoryLimit: 1920mb\n  notifier:\n    memoryLimit: 1920mb\n  fem:\n    memoryLimit: 1920mb\n  catalog:\n    memoryLimit: 1536mb\n  ingest:\n    memoryLimit: 3840mb\n  storage:\n    memoryLimit: 2560mb\n  order:\n    memoryLimit: 1536mb\n  worker_manager:\n    memoryLimit: 2560mb\n")),(0,r.kt)("admonition",{title:"How to tune memory limit?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The new logging stack gives you the amount of memory used by a microservice on live, helping you to fix the right amount of memory limit for your environment.")),(0,r.kt)("h2",{id:"deprecation"},"Deprecation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disabling healthcheck and resource limits will removed on 1.15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots_configuration:\n  enable_healthcheck: false\n  enable_resource_limits: false\n\ngroup_config_mservices:\n  enable_healthcheck: false\n  enable_resource_limits: false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The previous logging stack will removed on 1.15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'group_docker_cots:\n  elasticsearch:\n    tag: "{{ group_docker_tags.cots }}"\n  elasticsearch_logs:\n    tag: "{{ group_docker_tags.cots }}"\n  kibana_logs:\n    tag: "{{ group_docker_tags.cots }}"\n    http: 5602\n  fluent:\n    tag: "{{ group_docker_tags.cots }}"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A good configuration of Docker will be required on 1.15 to specify the logging configuration directly on the Docker daemon side.",(0,r.kt)("br",{parentName:"li"}),"For now, you can still omit the ",(0,r.kt)("inlineCode",{parentName:"li"},"group_docker_use_log_concentrator")," or provide the ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value to define the configuration on the service.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_use_log_concentrator: false\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"group_docker_use_log_concentrator: True"),", it means you have defined a log driver inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),":"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    [...]\n    # logging stack activated\n    "log-driver": "fluentd",\n    "log-opts": {\n        "fluentd-async": "true",\n        "cache-max-size": "10m",\n        "cache-max-file": "10",\n        "fluentd-retry-wait": "15s",\n        "fluentd-address": "127.0.0.1:24224"\n    },\n    [OR]\n    # no logging stack\n    "log-driver": "json-file",\n    "log-opts": {\n        "max-size": "10m",\n        "max-file": "10"\n    },\n    [...]\n}\n')),(0,r.kt)("p",{parentName:"admonition"},"On the other hand, inside Docker swarm stack files, there is no need to override the ",(0,r.kt)("inlineCode",{parentName:"p"},"logging")," property to avoid massive disk usage, as this issue is handled directly by the Docker daemon."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# A stack file, ie /opt/regards/regards/stack/regards-stack.yml\nversion: \'3.9\'\nservices:\n  rs-front:\n    [...]\n    logging:\n      options:\n        max-size: "10m"\n        max-file: "10"\n'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property ",(0,r.kt)("inlineCode",{parentName:"li"},"active_mail_on_admin_instance")," will be removed on 1.15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_config_mservices:\n  active_mail_on_admin_instance: true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Property ",(0,r.kt)("inlineCode",{parentName:"li"},"securised")," from frontend service will be removed on 1.15")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_mservices:\n  [...]\n  front:\n    [...]\n    securised: true\n\n")))}u.isMDXComponent=!0}}]);