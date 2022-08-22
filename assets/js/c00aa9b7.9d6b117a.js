"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[67317],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>u});var s=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=s.createContext({}),g=function(e){var n=s.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},l=function(e){var n=g(e.components);return s.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=g(r),u=t,p=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return r?s.createElement(p,o(o({ref:n},l),{},{components:r})):s.createElement(p,o({ref:n},l))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var g=2;g<a;g++)o[g]=r[g];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27853:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>g});var s=r(87462),t=(r(67294),r(3905));const a={id:"swarm-cli",title:"REGARDS Command line interface",sidebar_label:"Administration",slug:"/setup/swarm/cli/"},o=void 0,i={unversionedId:"setup/swarm-cli",id:"version-1.6.0/setup/swarm-cli",title:"REGARDS Command line interface",description:"REGARDS stack Administration tools",source:"@site/versioned_docs/version-1.6.0/setup/swarm-cli.md",sourceDirName:"setup",slug:"/setup/swarm/cli/",permalink:"/docs/1.6.0/setup/swarm/cli/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/setup/swarm-cli.md",tags:[],version:"1.6.0",frontMatter:{id:"swarm-cli",title:"REGARDS Command line interface",sidebar_label:"Administration",slug:"/setup/swarm/cli/"},sidebar:"version-1.6.0/install",previous:{title:"Quick setup",permalink:"/docs/1.6.0/setup/"},next:{title:"Ansible playbook tasks",permalink:"/docs/1.6.0/setup/ansible-tasks/"}},c={},g=[{value:"REGARDS stack Administration tools",id:"regards-stack-administration-tools",level:2},{value:"Simple debugging",id:"simple-debugging",level:2}],l={toc:g};function d(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,s.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"regards-stack-administration-tools"},"REGARDS stack Administration tools"),(0,t.kt)("p",null,"Connect to the master node of your stack, and open the REGARDS working directory.",(0,t.kt)("br",{parentName:"p"}),"\n","To do that, you need these two values from your inventories :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"group_workdir_local: /opt/regards/\ngroup_stack_name: 'regards'\n")),(0,t.kt)("p",null,"It means your stack is installed inside ",(0,t.kt)("inlineCode",{parentName:"p"},"/opt/regards/regards"),"."),(0,t.kt)("p",null,"Open this folder and go to the cli folder:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/regards/regards-cnes/cli\n")),(0,t.kt)("p",null,"Let's look at these scripts :"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"exec.sh"),": let you go inside a running container. For advanced debugging."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"logs.sh"),": let you display container logs from a running container. Once the stack is running fine, you should prefer to use Kibana to see logs"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"reboot.sh"),": let you reboot a container"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"status.sh"),": display the status of your stack (running container, how many containers are missing, history)"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"deploy.sh"),": boot or update the stack using stack files. It checks for updated images on the Docker registry, and track updates on files available on the master node."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"update.sh"),": let you fetch an updated docker image and reboot only that single container. For advanced usage, you should prefer ",(0,t.kt)("inlineCode",{parentName:"li"},"deploy.sh"),"."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"shutdown.sh")," : let you completly shutdown the regards swarm stack."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"health.sh")," : let you retrieve microservices global heathness for a specific tenant.")),(0,t.kt)("p",null,"When you deploy the stack, you should run ",(0,t.kt)("inlineCode",{parentName:"p"},"status.sh")," to see if containers are running:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"[HISTORY]   5 PREVIOUS CONTAINERS\nnothing found in stack: regards-cnes\n[RUNNING]   25/25\nID      NAME                                               IMAGE                                            NODE                                 [..]  CURRENT STATE      [..]\n86..    regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nnh..    regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n77..    regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest              regards-cnes-d11.myorganisation.com      Running 23 hours ago\nij..    regards-cnes_rs-admin.1                            myregistry/rs-administration:V1.1.0           regards-cnes-d11.myorganisation.com      Running 23 hours ago\nlh..    regards-cnes_rs-postgres.1                         myregistry/regards-database:latest            regards-cnes-d12.myorganisation.com      Running 23 hours ago\nvm..    regards-cnes_rs-phppgadmin.1                       myregistry/regards-phpmyadmin:latest          regards-cnes-d12.myorganisation.com      Running 23 hours ago\n59..    regards-cnes_rs-notifier.1                         myregistry/rs-notifier:V1.1.0                 regards-cnes-d11.myorganisation.com      Running 23 hours ago\n3r..    regards-cnes_rs-logs-elasticsearch.1               myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-kibana.1                           myregistry/regards-kibana:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n3t..    regards-cnes_rs-dam.1                              myregistry/rs-dam:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nir..    regards-cnes_rs-access-instance.1                  myregistry/rs-access-instance:V1.1.0          regards-cnes-d11.myorganisation.com      Running 23 hours ago\npp..    regards-cnes_rs-fem.1                              myregistry/rs-fem:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nlx..    regards-cnes_rs-config.1                           myregistry/rs-config:V1.1.0                   regards-cnes-d11.myorganisation.com      Running 23 hours ago\n2k..    regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\nmh..    regards-cnes_rs-catalog.1                          myregistry/rs-catalog:V1.1.0                  regards-cnes-d12.myorganisation.com      Running 23 hours ago\nqu..    regards-cnes_rs-registry.1                         myregistry/rs-registry:V1.1.0                 regards-cnes-d13.myorganisation.com      Running 23 hours ago\n8m..    regards-cnes_rs-rabbitmq.1                         myregistry/regards-messaging:latest           regards-cnes-d12.myorganisation.com      Running 23 hours ago\nn9..    regards-cnes_rs-maildev.1                          myregistry/regards-maildev:latest             regards-cnes-d13.myorganisation.com      Running 23 hours ago\nm8..    regards-cnes_rs-logs-kibana.1                      myregistry/regards-kibana:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nke..    regards-cnes_rs-elasticsearch.1                    myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\nkw..    regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\n51..    regards-cnes_rs-gateway.1                          myregistry/rs-gateway:V1.1.0                  regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-front.1                            myregistry/rs-front:V1.1.0                    regards-cnes-d13.myorganisation.com      Running 23 hours ago\ny4..    regards-cnes_rs-admin-instance.1                   myregistry/rs-administration-instance:V1.1.0  regards-cnes-d13.myorganisation.com      Running 23 hours ago\n")),(0,t.kt)("p",null,"In the history, there is no container starting again and again every minutes. That's what we're expecting in a production environment.",(0,t.kt)("br",{parentName:"p"}),"\n","Moreover, we display the number of running containers and the number of expected ones. In this exemple everything is fine (",(0,t.kt)("inlineCode",{parentName:"p"},"[RUNNING]\t25/25"),").\nThe current state of these containers is also important. You need to wait 5 to 15 minutes to see if containers succeed to boot, some containers are waiting to others so they usually crash in that short period if there is some files unwritable, COTS not accessible..."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"The number of running services depends of your inventory. You may see less actives services than this exemple, but the ",(0,t.kt)("inlineCode",{parentName:"p"},"[RUNNING]\tX/X")," must equals 100%.")),(0,t.kt)("p",null,"You can run the script ",(0,t.kt)("inlineCode",{parentName:"p"},"health.sh")," to check the healthness returned by each microservice of the stack, for a specfic tenant."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"./health.sh demo\n[200]   fem\n[200]   admin\n[200]   dam\n[200]   processing\n[200]   storage\n[200]   authentication\n[200]   ingest\n[200]   admin_instance\n[200]   access\n[200]   catalog\n[200]   access_instance\n[200]   order\n[200]   dataprovider\n[200]   notifier\n")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"The microservice healthness is still in a early access and not heavily tested.")),(0,t.kt)("h2",{id:"simple-debugging"},"Simple debugging"),(0,t.kt)("p",null,"Now, let's see how you can debug some microservice.\nFirst, let's remove the elasticsearch:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker service scale regards-cnes_rs-elasticsearch=0\n")),(0,t.kt)("p",null,"Then, reboot dam:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"./reboot.sh rs-dam\n")),(0,t.kt)("p",null,"Now we can read logs of the booting dam to see if it succeed to boot without ElasticSearch :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$./logs.sh rs-dam -f\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | 2020-05-12 10:49:54,315 [rs-dam] [main            ] ERROR o.s.boot.SpringApplication []    - Application run failed\n[..]\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | Caused by: java.net.UnknownHostException: rs-elasticsearch: Try again\n")),(0,t.kt)("p",null,"Definitly, it doesn't like it. Now we can restart the ElasticSearch by just running :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),(0,t.kt)("p",null,"Now we can run again ",(0,t.kt)("inlineCode",{parentName:"p"},"status.sh")," :"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"# ./status.sh \n[HISTORY]   5 PREVIOUS CONTAINERS\nID      NAME                                               IMAGE                                                                     NODE                                  DESIRED STATE CURRENT STATE [..]\n86m..   regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d12.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nnhu..   regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 2 minutes ago\n778..   regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d11.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nty0..   regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0@sha256:875ca2aa[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n7yw..   regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0@sha256:17a0d7e9[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n[RUNNING]   25/25\n[..]\n")),(0,t.kt)("p",null,"We see in the history the last activity starts to be old (2 mins) and there is again 25/25 services deployed."))}d.isMDXComponent=!0}}]);