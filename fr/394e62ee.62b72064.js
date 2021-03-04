(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{2701:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=a.a.createContext({}),l=function(e){var n=a.a.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return a.a.createElement(g.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=t,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return r?a.a.createElement(b,i(i({ref:n},g),{},{components:r})):a.a.createElement(b,i({ref:n},g))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var g=2;g<s;g++)o[g]=r[g];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},665:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),s=(r(0),r(2701)),o={id:"swarm-cli",title:"REGARDS Command line interface",sidebar_label:"Administration",slug:"/setup/swarm/cli"},i={unversionedId:"setup/swarm-cli",id:"version-1.4.0/setup/swarm-cli",isDocsHomePage:!1,title:"REGARDS Command line interface",description:"REGARDS stack Administration tools",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/swarm-cli.md",slug:"/setup/swarm/cli",permalink:"/fr/docs/setup/swarm/cli",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/swarm-cli.md",version:"1.4.0",sidebar_label:"Administration",sidebar:"version-1.4.0/install",previous:{title:"Quick setup",permalink:"/fr/docs/setup"},next:{title:"Ansible tasks",permalink:"/fr/docs/setup/ansible-tasks"}},c=[{value:"REGARDS stack Administration tools",id:"regards-stack-administration-tools",children:[]},{value:"Simple debugging",id:"simple-debugging",children:[]}],g={toc:c};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},g,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"regards-stack-administration-tools"},"REGARDS stack Administration tools"),Object(s.b)("p",null,"Connect to the master node of your stack, and open the REGARDS working directory.",Object(s.b)("br",{parentName:"p"}),"\n","To do that, you need these two values from your inventories :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"group_workdir_local: /opt/regards/\ngroup_stack_name: 'regards-cnes'\n")),Object(s.b)("p",null,"It means your stack is installed inside ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/regards/regards-cnes"),"."),Object(s.b)("p",null,"Open this folder and go to the cli folder:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd /opt/regards/regards-cnes/cli\n")),Object(s.b)("p",null,"Let's look at these scripts :"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"exec.sh"),": let you go inside a running container. For advanced debugging."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"logs.sh"),": let you display container logs from a running container. Once the stack is running fine, you should prefer to use Kibana to see logs"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"reboot.sh"),": let you reboot a container"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"status.sh"),": display the status of your stack (running container, how many containers are missing, history)"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"deploy.sh"),": boot or update the stack using stack files. It checks for updated images on the Docker registry, and track updates on files available on the master node."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"update.sh"),": let you fetch an updated docker image and reboot only that single container. For advanced usage, you should prefer ",Object(s.b)("inlineCode",{parentName:"li"},"deploy.sh"),"."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"shutdown.sh")," : let you completly shutdown the regards swarm stack."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"health.sh")," : let you retrieve microservices global heathness for a specific tenant.")),Object(s.b)("p",null,"When you deploy the stack, you should run ",Object(s.b)("inlineCode",{parentName:"p"},"status.sh")," to see if containers are running:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"[HISTORY]   5 PREVIOUS CONTAINERS\nnothing found in stack: regards-cnes\n[RUNNING]   25/25\nID      NAME                                               IMAGE                                            NODE                                 [..]  CURRENT STATE      [..]\n86..    regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nnh..    regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n77..    regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest              regards-cnes-d11.myorganisation.com      Running 23 hours ago\nij..    regards-cnes_rs-admin.1                            myregistry/rs-administration:V1.1.0           regards-cnes-d11.myorganisation.com      Running 23 hours ago\nlh..    regards-cnes_rs-postgres.1                         myregistry/regards-database:latest            regards-cnes-d12.myorganisation.com      Running 23 hours ago\nvm..    regards-cnes_rs-phppgadmin.1                       myregistry/regards-phpmyadmin:latest          regards-cnes-d12.myorganisation.com      Running 23 hours ago\n59..    regards-cnes_rs-notifier.1                         myregistry/rs-notifier:V1.1.0                 regards-cnes-d11.myorganisation.com      Running 23 hours ago\n3r..    regards-cnes_rs-logs-elasticsearch.1               myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-kibana.1                           myregistry/regards-kibana:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago\n3t..    regards-cnes_rs-dam.1                              myregistry/rs-dam:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nir..    regards-cnes_rs-access-instance.1                  myregistry/rs-access-instance:V1.1.0          regards-cnes-d11.myorganisation.com      Running 23 hours ago\npp..    regards-cnes_rs-fem.1                              myregistry/rs-fem:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago\nlx..    regards-cnes_rs-config.1                           myregistry/rs-config:V1.1.0                   regards-cnes-d11.myorganisation.com      Running 23 hours ago\n2k..    regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\nmh..    regards-cnes_rs-catalog.1                          myregistry/rs-catalog:V1.1.0                  regards-cnes-d12.myorganisation.com      Running 23 hours ago\nqu..    regards-cnes_rs-registry.1                         myregistry/rs-registry:V1.1.0                 regards-cnes-d13.myorganisation.com      Running 23 hours ago\n8m..    regards-cnes_rs-rabbitmq.1                         myregistry/regards-messaging:latest           regards-cnes-d12.myorganisation.com      Running 23 hours ago\nn9..    regards-cnes_rs-maildev.1                          myregistry/regards-maildev:latest             regards-cnes-d13.myorganisation.com      Running 23 hours ago\nm8..    regards-cnes_rs-logs-kibana.1                      myregistry/regards-kibana:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago\nke..    regards-cnes_rs-elasticsearch.1                    myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago\nkw..    regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago\n51..    regards-cnes_rs-gateway.1                          myregistry/rs-gateway:V1.1.0                  regards-cnes-d13.myorganisation.com      Running 23 hours ago\njd..    regards-cnes_rs-front.1                            myregistry/rs-front:V1.1.0                    regards-cnes-d13.myorganisation.com      Running 23 hours ago\ny4..    regards-cnes_rs-admin-instance.1                   myregistry/rs-administration-instance:V1.1.0  regards-cnes-d13.myorganisation.com      Running 23 hours ago\n")),Object(s.b)("p",null,"In the history, there is no container starting again and again every minutes. That's what we're expecting in a production environment.",Object(s.b)("br",{parentName:"p"}),"\n","Moreover, we display the number of running containers and the number of expected ones. In this exemple everything is fine (",Object(s.b)("inlineCode",{parentName:"p"},"[RUNNING]\t25/25"),").\nThe current state of these containers is also important. You need to wait 5 to 15 minutes to see if containers succeed to boot, some containers are waiting to others so they usually crash in that short period if there is some files unwritable, COTS not accessible..."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The number of running services depends of your inventory. You may see less actives services than this exemple, but the ",Object(s.b)("inlineCode",{parentName:"p"},"[RUNNING]\tX/X")," must equals 100%.\n{: .tip .info}")),Object(s.b)("p",null,"You can run the script ",Object(s.b)("inlineCode",{parentName:"p"},"health.sh")," to check the healthness returned by each microservice of the stack, for a specfic tenant."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"./health.sh demo\n[200]   fem\n[200]   admin\n[200]   dam\n[200]   processing\n[200]   storage\n[200]   authentication\n[200]   ingest\n[200]   admin_instance\n[200]   access\n[200]   catalog\n[200]   access_instance\n[200]   order\n[200]   dataprovider\n[200]   notifier\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The microservice healthness is still in a early access and not heavily tested.\n{: .tip .info}")),Object(s.b)("h2",{id:"simple-debugging"},"Simple debugging"),Object(s.b)("p",null,"Now, let's see how you can debug some microservice.\nFirst, let's remove the elasticsearch:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"docker service scale regards-cnes_rs-elasticsearch=0\n")),Object(s.b)("p",null,"Then, reboot dam:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"./reboot.sh rs-dam\n")),Object(s.b)("p",null,"Now we can read logs of the booting dam to see if it succeed to boot without ElasticSearch :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"$./logs.sh rs-dam -f\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | 2020-05-12 10:49:54,315 [rs-dam] [main            ] ERROR o.s.boot.SpringApplication []    - Application run failed\n[..]\nregards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | Caused by: java.net.UnknownHostException: rs-elasticsearch: Try again\n")),Object(s.b)("p",null,"Definitly, it doesn't like it. Now we can restart the ElasticSearch by just running :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"./deploy.sh\n")),Object(s.b)("p",null,"Now we can run again ",Object(s.b)("inlineCode",{parentName:"p"},"status.sh")," :"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"# ./status.sh \n[HISTORY]   5 PREVIOUS CONTAINERS\nID      NAME                                               IMAGE                                                                     NODE                                  DESIRED STATE CURRENT STATE [..]\n86m..   regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d12.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nnhu..   regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 2 minutes ago\n778..   regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d11.myorganisation.com   Shutdown      Shutdown 2 minutes ago\nty0..   regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0@sha256:875ca2aa[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n7yw..   regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0@sha256:17a0d7e9[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago\n[RUNNING]   25/25\n[..]\n")),Object(s.b)("p",null,"We see in the history the last activity starts to be old (2 mins) and there is again 25/25 services deployed."))}l.isMDXComponent=!0}}]);