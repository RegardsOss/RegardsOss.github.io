"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[96845],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,p=m["".concat(c,".").concat(u)]||m[u]||g[u]||s;return r?t.createElement(p,i(i({ref:n},l),{},{components:r})):t.createElement(p,i({ref:n},l))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67258:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var t=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"swarm-cli",title:"REGARDS Command line interface",sidebar_label:"Administration",slug:"/setup/swarm/cli/"},c=void 0,d={unversionedId:"setup/swarm-cli",id:"version-1.5.0/setup/swarm-cli",isDocsHomePage:!1,title:"REGARDS Command line interface",description:"REGARDS stack Administration tools",source:"@site/versioned_docs/version-1.5.0/setup/swarm-cli.md",sourceDirName:"setup",slug:"/setup/swarm/cli/",permalink:"/fr/docs/1.5.0/setup/swarm/cli/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/setup/swarm-cli.md",tags:[],version:"1.5.0",frontMatter:{id:"swarm-cli",title:"REGARDS Command line interface",sidebar_label:"Administration",slug:"/setup/swarm/cli/"},sidebar:"version-1.5.0/install",previous:{title:"Quick setup",permalink:"/fr/docs/1.5.0/setup/"},next:{title:"Ansible playbook tasks",permalink:"/fr/docs/1.5.0/setup/ansible-tasks/"}},l=[{value:"REGARDS stack Administration tools",id:"regards-stack-administration-tools",children:[]},{value:"Simple debugging",id:"simple-debugging",children:[]}],g={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"regards-stack-administration-tools"},"REGARDS stack Administration tools"),(0,s.kt)("p",null,"Connect to the master node of your stack, and open the REGARDS working directory.",(0,s.kt)("br",{parentName:"p"}),"\n","To do that, you need these two values from your inventories :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"group_workdir_local: /opt/regards/\ngroup_stack_name: 'regards-cnes'\n")),(0,s.kt)("p",null,"It means your stack is installed inside ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/regards/regards-cnes"),"."),(0,s.kt)("p",null,"Open this folder and go to the cli folder:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/regards/regards-cnes/cli\n")),(0,s.kt)("p",null,"Let's look at these scripts :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"exec.sh"),": let you go inside a running container. For advanced debugging."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"logs.sh"),": let you display container logs from a running container. Once the stack is running fine, you should prefer to use Kibana to see logs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"reboot.sh"),": let you reboot a container"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"status.sh"),": display the status of your stack (running container, how many containers are missing, history)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"deploy.sh"),": boot or update the stack using stack files. It checks for updated images on the Docker registry, and track updates on files available on the master node."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"update.sh"),": let you fetch an updated docker image and reboot only that single container. For advanced usage, you should prefer ",(0,s.kt)("inlineCode",{parentName:"li"},"deploy.sh"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"shutdown.sh")," : let you completly shutdown the regards swarm stack."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"health.sh")," : let you retrieve microservices global heathness for a specific tenant.")),(0,s.kt)("p",null,"When you deploy the stack, you should run ",(0,s.kt)("inlineCode",{parentName:"p"},"status.sh")," to see if containers are running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[HISTORY]   5 PREVIOUS CONTAINERS\nnothing found in stack: regards-cnes\n[RUNNING]   25/25\nID      NAME                                               IMAGE                                            NODE                                 [..]  CURRENT STATE      [..]\n86..    regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nnh..    regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n77..    regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest              regards-cnes-d11.myorganisation.com      Running 23 hours ago\nij..    regards-cnes_rs-admin.1                            myregistry/rs-administration:V1.1.0           regards-cnes-d11.myorganisation.com      Running 23 hours ago\nlh..    regards-cnes_rs-postgres.1                         myregistry/regards-database:latest            regards-cnes-d12.myorganisation.com      Running 23 hours ago\nvm..    regards-cnes_rs-phppgadmin.1                       myregistry/regards-phpmyadmin:latest          regards-cnes-d12.myorganisation.com      Running 23 hours ago\n59..    regards-cnes_rs-notifier.1                         myregistry/rs-notifier:V1.1.0                 regards-cnes-d11.myorganisation.com      Running 23 hours ago\n3r..    regards-cnes_rs-logs-elasticsearch.1               myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-kibana.1                           myregistry/regards-kibana:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n3t..    regards-cnes_rs-dam.1                              myregistry/rs-dam:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nir..    regards-cnes_rs-access-instance.1                  myregistry/rs-access-instance:V1.1.0          regards-cnes-d11.myorganisation.com      Running 23 hours ago\npp..    regards-cnes_rs-fem.1                              myregistry/rs-fem:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nlx..    regards-cnes_rs-config.1                           myregistry/rs-config:V1.1.0                   regards-cnes-d11.myorganisation.com      Running 23 hours ago\n2k..    regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\nmh..    regards-cnes_rs-catalog.1                          myregistry/rs-catalog:V1.1.0                  regards-cnes-d12.myorganisation.com      Running 23 hours ago\nqu..    regards-cnes_rs-registry.1                         myregistry/rs-registry:V1.1.0                 regards-cnes-d13.myorganisation.com      Running 23 hours ago\n8m..    regards-cnes_rs-rabbitmq.1                         myregistry/regards-messaging:latest           regards-cnes-d12.myorganisation.com      Running 23 hours ago\nn9..    regards-cnes_rs-maildev.1                          myregistry/regards-maildev:latest             regards-cnes-d13.myorganisation.com      Running 23 hours ago\nm8..    regards-cnes_rs-logs-kibana.1                      myregistry/regards-kibana:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nke..    regards-cnes_rs-elasticsearch.1                    myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\nkw..    regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\n51..    regards-cnes_rs-gateway.1                          myregistry/rs-gateway:V1.1.0                  regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-front.1                            myregistry/rs-front:V1.1.0                    regards-cnes-d13.myorganisation.com      Running 23 hours ago\ny4..    regards-cnes_rs-admin-instance.1                   myregistry/rs-administration-instance:V1.1.0  regards-cnes-d13.myorganisation.com      Running 23 hours ago\n")),(0,s.kt)("p",null,"In the history, there is no container starting again and again every minutes. That's what we're expecting in a production environment.",(0,s.kt)("br",{parentName:"p"}),"\n","Moreover, we display the number of running containers and the number of expected ones. In this exemple everything is fine (",(0,s.kt)("inlineCode",{parentName:"p"},"[RUNNING]\t25/25"),").\nThe current state of these containers is also important. You need to wait 5 to 15 minutes to see if containers succeed to boot, some containers are waiting to others so they usually crash in that short period if there is some files unwritable, COTS not accessible..."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The number of running services depends of your inventory. You may see less actives services than this exemple, but the ",(0,s.kt)("inlineCode",{parentName:"p"},"[RUNNING]\tX/X")," must equals 100%."))),(0,s.kt)("p",null,"You can run the script ",(0,s.kt)("inlineCode",{parentName:"p"},"health.sh")," to check the healthness returned by each microservice of the stack, for a specfic tenant."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./health.sh demo\n[200]   fem\n[200]   admin\n[200]   dam\n[200]   processing\n[200]   storage\n[200]   authentication\n[200]   ingest\n[200]   admin_instance\n[200]   access\n[200]   catalog\n[200]   access_instance\n[200]   order\n[200]   dataprovider\n[200]   notifier\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The microservice healthness is still in a early access and not heavily tested."))),(0,s.kt)("h2",{id:"simple-debugging"},"Simple debugging"),(0,s.kt)("p",null,"Now, let's see how you can debug some microservice.\nFirst, let's remove the elasticsearch:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker service scale regards-cnes_rs-elasticsearch=0\n")),(0,s.kt)("p",null,"Then, reboot dam:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./reboot.sh rs-dam\n")),(0,s.kt)("p",null,"Now we can read logs of the booting dam to see if it succeed to boot without ElasticSearch :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$./logs.sh rs-dam -f\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | 2020-05-12 10:49:54,315 [rs-dam] [main            ] ERROR o.s.boot.SpringApplication []    - Application run failed\n[..]\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | Caused by: java.net.UnknownHostException: rs-elasticsearch: Try again\n")),(0,s.kt)("p",null,"Definitly, it doesn't like it. Now we can restart the ElasticSearch by just running :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),(0,s.kt)("p",null,"Now we can run again ",(0,s.kt)("inlineCode",{parentName:"p"},"status.sh")," :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# ./status.sh \n[HISTORY]   5 PREVIOUS CONTAINERS\nID      NAME                                               IMAGE                                                                     NODE                                  DESIRED STATE CURRENT STATE [..]\n86m..   regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d12.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nnhu..   regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 2 minutes ago\n778..   regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d11.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nty0..   regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0@sha256:875ca2aa[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n7yw..   regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0@sha256:17a0d7e9[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n[RUNNING]   25/25\n[..]\n")),(0,s.kt)("p",null,"We see in the history the last activity starts to be old (2 mins) and there is again 25/25 services deployed."))}m.isMDXComponent=!0}}]);