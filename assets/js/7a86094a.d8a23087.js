"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[99596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"minio",title:"MinIO",slug:"/setup/swarm/advanced/minio/"},i=void 0,l={unversionedId:"setup/advanced/minio",id:"setup/advanced/minio",title:"MinIO",description:"This guide allows you to deploy a MinIO service thanks to your inventory.",source:"@site/docs/setup/advanced/swarm-minio.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/minio/",permalink:"/docs/setup/swarm/advanced/minio/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/advanced/swarm-minio.md",tags:[],version:"current",frontMatter:{id:"minio",title:"MinIO",slug:"/setup/swarm/advanced/minio/"},sidebar:"install",previous:{title:"Posgres database",permalink:"/docs/setup/swarm/advanced/postgres-database/"},next:{title:"Microservices optimizations",permalink:"/docs/setup/swarm/advanced/optimizations/"}},s={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Single node deployment",id:"single-node-deployment",level:2},{value:"Cluster deployment",id:"cluster-deployment",level:2},{value:"TLS Configuration",id:"tls-configuration",level:2},{value:"Multi-drive deployment",id:"multi-drive-deployment",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide allows you to deploy a ",(0,r.kt)("a",{parentName:"p",href:"https://min.io"},"MinIO service")," thanks to your inventory."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Edit your inventory file ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/main.yml")," to add MinIO information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'group_docker_stack_domain: regards-cnes.host.com\n\ngroup_docker_cots:\n  minio:\n    tag: "{{ group_docker_tags.cots }}"\n    admin: 9001\n    client: 9000\n    ssl:\n      domain: "{{ group_docker_stack_domain }}"\n      crt: "{{ group_docker_stack_domain }}.crt"\n      key: "{{ group_docker_stack_domain }}.key"\n    region: fr-regards-1\n    key: xxxxxxxx\n    secret: xxxxxxxx\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"admin"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port to connect to MinIO admin dashboard"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port to connect to S3 MinIO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ssl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional. To configure TLS certificates for MinIO when accessing through public host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"region"),(0,r.kt)("td",{parentName:"tr",align:"left"},"global region of the MinIO server"),(0,r.kt)("td",{parentName:"tr",align:"left"},"fr-regards-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"root admin user login"),(0,r.kt)("td",{parentName:"tr",align:"left"},"regards")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"root admin user password"),(0,r.kt)("td",{parentName:"tr",align:"left"},"regardspwd")))),(0,r.kt)("h2",{id:"single-node-deployment"},"Single node deployment"),(0,r.kt)("p",null,"If you want to deploy only one node of MinIO and your swarm stack has several nodes, you need to add a nfs disk to MinIO.",(0,r.kt)("br",{parentName:"p"}),"\n","To do so, edit your inventory file ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/mounts.yml")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add nfs definition and add it to minio conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_mounts:\n  nfs: \n    - name: minio-nfs\n      config:\n        [... nfs configuration]\n  [...]\n  minio:\n    - nfs: minio-nfs\n      destination: /data-01\n      [... mount configuration]\n")),(0,r.kt)("p",null,"To learn more about volume configuration, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/swarm-mount"},"Mount volumes, configs... guide")),(0,r.kt)("h2",{id:"cluster-deployment"},"Cluster deployment"),(0,r.kt)("p",null,"If you want to deploy a MinIO cluster on your swarm stack, you need to provide the cluster url pattern as describe in ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#sequential-hostnames"},"MinIO documentation"),"."),(0,r.kt)("p",null,"Here is some example with 4 nodes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"node1 : regards-cnes-01.host.com"),(0,r.kt)("li",{parentName:"ul"},"node2 : regards-cnes-02.host.com"),(0,r.kt)("li",{parentName:"ul"},"node3 : regards-cnes-03.host.com"),(0,r.kt)("li",{parentName:"ul"},"node4 : regards-cnes-04.host.com")),(0,r.kt)("p",null,"With these nodes, cluster url will be : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards-cnes-0{1...4}.host.com/data-01"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  minio:\n    [...]\n    global_service: true\n    cluster_url: regards-cnes-0{1...4}.host.com/data-01\n    [...]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"global_service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True to deploy a MinIO cluster on each swarm nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cluster_url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cluster url pattern as describe in MinIO documentation. Needed when global_service is set to true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\xa0")))),(0,r.kt)("h2",{id:"tls-configuration"},"TLS Configuration"),(0,r.kt)("admonition",{title:"Internal SSL",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You should provide internal SSL certificates to allow MinIO replicates to communicate between each nodes")),(0,r.kt)("p",null,"To generate the internal certificate and key, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/minio/minio/blob/master/docs/tls/README.md#generate-use-self-signed-keys-certificates"},"this MinIO tool"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"generate ssl_internal certificate and key with command : ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./certgen-linux-amd64 -host 'regards-cnes-01.host.com,regards-cnes-02.host.com,regards-cnes-03.host.com,regards-cnes-04.host.com' -duration 8760h0m0s\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"put these files inside folder ",(0,r.kt)("inlineCode",{parentName:"li"},"<inventory>/group_vars/regards_nodes/files/ssl/")),(0,r.kt)("li",{parentName:"ul"},"edit MinIO configuration like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  minio:\n    [...]\n    ssl_internal:\n      ca: minio-nodes.ca.crt\n      crt: minio-nodes.crt\n      key: minio-nodes.key\n    [...]\n")),(0,r.kt)("h2",{id:"multi-drive-deployment"},"Multi-drive deployment"),(0,r.kt)("p",null,"If you want to deploy with multiple drives (max of 2 drives for now) on each nodes, you have to define the local drive source path (identical on each node).",(0,r.kt)("br",{parentName:"p"}),"\n","To do so, edit your inventory file ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your inventory>/group_vars/regards_nodes/mouts.yml")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add drive mount definition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_mounts:\n  [...]\n  minio:\n    - local: true\n      source: /mnt/minio-drive-1\n      destination: /data-01\n    - local: true\n      source: /mnt/minio-drive-2\n      destination: /data-02\n")),(0,r.kt)("p",null,"To learn more about volume configuration, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup/swarm/advanced/swarm-mount"},"Mount volumes, configs... guide")),(0,r.kt)("p",null,"Then, you need to adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_url")," provided to MinIO like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"group_docker_cots:\n  minio:\n    [...]\n    cluster_url: regards-cnes-0{1...4}.host.com/data-0{1...2}\n    [...]\n")),(0,r.kt)("p",null,"MinIO will understand there is 4 nodes and 2 drives with such URL."))}p.isMDXComponent=!0}}]);