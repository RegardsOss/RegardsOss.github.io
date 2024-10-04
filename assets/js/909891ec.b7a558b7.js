"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88405],{44375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453);const r={id:"minio",title:"MinIO",slug:"/setup/swarm/advanced/minio/"},o=void 0,l={id:"setup/advanced/minio",title:"MinIO",description:"This guide allows you to deploy a MinIO service thanks to your inventory.",source:"@site/versioned_docs/version-1.14/setup/advanced/swarm-minio.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/minio/",permalink:"/docs/1.14/setup/swarm/advanced/minio/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/advanced/swarm-minio.md",tags:[],version:"1.14",frontMatter:{id:"minio",title:"MinIO",slug:"/setup/swarm/advanced/minio/"},sidebar:"install",previous:{title:"Posgres database",permalink:"/docs/1.14/setup/swarm/advanced/postgres-database/"},next:{title:"Microservices optimizations",permalink:"/docs/1.14/setup/swarm/advanced/optimizations/"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Single node deployment",id:"single-node-deployment",level:2},{value:"Cluster deployment",id:"cluster-deployment",level:2},{value:"TLS Configuration",id:"tls-configuration",level:2},{value:"Multi-drive deployment",id:"multi-drive-deployment",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This guide allows you to deploy a ",(0,s.jsx)(n.a,{href:"https://min.io",children:"MinIO service"})," thanks to your inventory."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Edit your inventory file ",(0,s.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/main.yml"})," to add MinIO information:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'group_docker_stack_domain: regards-cnes.host.com\n\ngroup_docker_cots:\n  minio:\n    tag: "{{ group_docker_tags.cots }}"\n    admin: 9001\n    client: 9000\n    ssl:\n      domain: "{{ group_docker_stack_domain }}"\n      crt: "{{ group_docker_stack_domain }}.crt"\n      key: "{{ group_docker_stack_domain }}.key"\n    region: fr-regards-1\n    key: xxxxxxxx\n    secret: xxxxxxxx\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Properties"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"admin"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Port to connect to MinIO admin dashboard"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"client"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Port to connect to S3 MinIO"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ssl"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Optional. To configure TLS certificates for MinIO when accessing through public host name"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"region"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"global region of the MinIO server"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"fr-regards-1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"key"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"root admin user login"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"regards"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"secret"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"root admin user password"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"regardspwd"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"single-node-deployment",children:"Single node deployment"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to deploy only one node of MinIO and your swarm stack has several nodes, you need to add a nfs disk to MinIO.",(0,s.jsx)(n.br,{}),"\n","To do so, edit your inventory file ",(0,s.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/mounts.yml"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add nfs definition and add it to minio conf"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_mounts:\n  nfs: \n    - name: minio-nfs\n      config:\n        [... nfs configuration]\n  [...]\n  minio:\n    - nfs: minio-nfs\n      destination: /data-01\n      [... mount configuration]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about volume configuration, see ",(0,s.jsx)(n.a,{href:"/docs/1.14/setup/swarm/advanced/swarm-mount",children:"Mount volumes, configs... guide"})]}),"\n",(0,s.jsx)(n.h2,{id:"cluster-deployment",children:"Cluster deployment"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to deploy a MinIO cluster on your swarm stack, you need to provide the cluster url pattern as describe in ",(0,s.jsx)(n.a,{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#sequential-hostnames",children:"MinIO documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here is some example with 4 nodes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"node1 : regards-cnes-01.host.com"}),"\n",(0,s.jsx)(n.li,{children:"node2 : regards-cnes-02.host.com"}),"\n",(0,s.jsx)(n.li,{children:"node3 : regards-cnes-03.host.com"}),"\n",(0,s.jsx)(n.li,{children:"node4 : regards-cnes-04.host.com"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["With these nodes, cluster url will be : ",(0,s.jsx)(n.code,{children:"regards-cnes-0{1...4}.host.com/data-01"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  minio:\n    [...]\n    global_service: true\n    cluster_url: regards-cnes-0{1...4}.host.com/data-01\n    [...]\n"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Properties"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"global_service"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"True to deploy a MinIO cluster on each swarm nodes"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0false"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"cluster_url"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Cluster url pattern as describe in MinIO documentation. Needed when global_service is set to true"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"\xa0"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"tls-configuration",children:"TLS Configuration"}),"\n",(0,s.jsx)(n.admonition,{title:"Internal SSL",type:"info",children:(0,s.jsx)(n.p,{children:"You should provide internal SSL certificates to allow MinIO replicates to communicate between each nodes"})}),"\n",(0,s.jsxs)(n.p,{children:["To generate the internal certificate and key, you can use ",(0,s.jsx)(n.a,{href:"https://github.com/minio/minio/blob/master/docs/tls/README.md#generate-use-self-signed-keys-certificates",children:"this MinIO tool"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"generate ssl_internal certificate and key with command :"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./certgen-linux-amd64 -host 'regards-cnes-01.host.com,regards-cnes-02.host.com,regards-cnes-03.host.com,regards-cnes-04.host.com' -duration 8760h0m0s\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["put these files inside folder ",(0,s.jsx)(n.code,{children:"<inventory>/group_vars/regards_nodes/files/ssl/"})]}),"\n",(0,s.jsx)(n.li,{children:"edit MinIO configuration like this:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  minio:\n    [...]\n    ssl_internal:\n      ca: minio-nodes.ca.crt\n      crt: minio-nodes.crt\n      key: minio-nodes.key\n    [...]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"multi-drive-deployment",children:"Multi-drive deployment"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to deploy with multiple drives (max of 2 drives for now) on each nodes, you have to define the local drive source path (identical on each node).",(0,s.jsx)(n.br,{}),"\n","To do so, edit your inventory file ",(0,s.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/mouts.yml"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"add drive mount definition"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_mounts:\n  [...]\n  minio:\n    - local: true\n      source: /mnt/minio-drive-1\n      destination: /data-01\n    - local: true\n      source: /mnt/minio-drive-2\n      destination: /data-02\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about volume configuration, see ",(0,s.jsx)(n.a,{href:"/docs/1.14/setup/swarm/advanced/swarm-mount",children:"Mount volumes, configs... guide"})]}),"\n",(0,s.jsxs)(n.p,{children:["Then, you need to adapt the ",(0,s.jsx)(n.code,{children:"cluster_url"})," provided to MinIO like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"group_docker_cots:\n  minio:\n    [...]\n    cluster_url: regards-cnes-0{1...4}.host.com/data-0{1...2}\n    [...]\n"})}),"\n",(0,s.jsx)(n.p,{children:"MinIO will understand there is 4 nodes and 2 drives with such URL."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);