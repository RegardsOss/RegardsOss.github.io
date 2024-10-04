"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[11743],{63917:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=s(74848),i=s(28453);const t={id:"swarm-mount",title:"Mount volumes, configs...",slug:"/setup/swarm/advanced/swarm-mount"},o=void 0,d={id:"setup/advanced/swarm-mount",title:"Mount volumes, configs...",description:"This guide allows you to describe, inside your inventory, volumes, configs and secrets files containers have access to once they have booted.",source:"@site/versioned_docs/version-1.15/setup/advanced/swarm-volumes.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/swarm-mount",permalink:"/docs/1.15/setup/swarm/advanced/swarm-mount",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/setup/advanced/swarm-volumes.md",tags:[],version:"1.15",frontMatter:{id:"swarm-mount",title:"Mount volumes, configs...",slug:"/setup/swarm/advanced/swarm-mount"},sidebar:"install",previous:{title:"Ansible Vault",permalink:"/docs/1.15/setup/swarm/advanced/ansible-vault"},next:{title:"Networks",permalink:"/docs/1.15/setup/swarm/advanced/swarm-networks"}},a={},c=[{value:"Inventory configuration file",id:"inventory-configuration-file",level:3},{value:"NFS definition",id:"nfs-definition",level:3},{value:"Data inputs",id:"data-inputs",level:3},{value:"Volume definition",id:"volume-definition",level:3},{value:"Mount volume to services",id:"mount-volume-to-services",level:3},{value:"Config and secrets files",id:"config-and-secrets-files",level:3},{value:"Mount configs and secrets to services",id:"mount-configs-and-secrets-to-services",level:3},{value:"Workdir configuration",id:"workdir-configuration",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This guide allows you to describe, inside your inventory, volumes, configs and secrets files containers have access to once they have booted."}),"\n",(0,r.jsx)(n.admonition,{title:"Benefits",type:"info",children:(0,r.jsxs)(n.p,{children:["You should avoid any manual operation that can be fully automated by Ansible : connecting NFS to your container, creating local folders, mounting config and secret files inside services...",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:"All configurations that describe platform deployment should be shared under source control."})]})}),"\n",(0,r.jsx)(n.admonition,{title:"Cons about volume usage",type:"warning",children:(0,r.jsxs)(n.p,{children:["Docker Swarm cannot update volume definitions on-the-fly. If you do ",(0,r.jsx)(n.strong,{children:"an update on an existing Docker Swarm volume"}),", please shutdown the REGARDS stack then run it again using ",(0,r.jsx)(n.code,{children:"regards.yml"}),".",(0,r.jsx)(n.br,{}),"\n","This issue does not concern configs, secrets and new Docker Swarm volume."]})}),"\n",(0,r.jsx)(n.h3,{id:"inventory-configuration-file",children:"Inventory configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The REGARDS convention is to save these information inside :",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/mounts.yml"})]}),"\n",(0,r.jsxs)(n.p,{children:["If you don't have the ",(0,r.jsx)(n.code,{children:"mounts.yml"})," file, you can initiate it with the following code, which is the default mounting if you don't have it yet:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Define volumes, REGARDS volumes, configs and secrets\ngroup_docker_mounts:\n  # Define NFS configurations used by REGARDS volumes\n  nfs: []\n  # Allow some files inside <inventory>/group_vars/regards_nodes/files/... to be attached \n  # to frontend / workers containers as Secret file (read only) \n  secrets: []\n  # Allow some files inside <inventory>/group_vars/regards_nodes/files/... to be attached \n  # to frontend / workers containers as Config file (read only) \n  configs: []\n  volumes: []\n  regards:\n    # Common input folder for dataprovider, fem, ingest and storage\n    data_inputs: []\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default configuration does not use any NFS server, all files are considered to be stored locally on the main server by the playbook. Thus, you should deploy REGARDS on one single node.",(0,r.jsx)(n.br,{}),"\n","If you have more than one server, the default configuration is insufficient: if a running container on ",(0,r.jsx)(n.code,{children:"node1"})," writes some files on its local disk workdir and reboots on ",(0,r.jsx)(n.code,{children:"node2"}),", it won't find its file unless you reboot the service on ",(0,r.jsx)(n.code,{children:"node1"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"nfs-definition",children:"NFS definition"}),"\n",(0,r.jsxs)(n.p,{children:["You can define a list of ",(0,r.jsx)(n.strong,{children:"Network File System servers"})," REGARDS will connect to as following:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'group_docker_mounts:\n  nfs:\n    - name: nfs-regards-qua\n      config:\n        o: rw,relatime,vers=4.0,[...],addr=<nfs server adress>\n        device_prefix: "<nfs domain name when existing>:/path/to/regards/workspace/"\n    - name: nfs-mission1\n      config:\n        o: rw,relatime,vers=4.0,[...],addr=<nfs server adress>\n        device_prefix: "<nfs domain name when existing>:/MISSION1"\n'})}),"\n",(0,r.jsx)(n.p,{children:"This example defines 2 NFS :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a NFS server ",(0,r.jsx)(n.code,{children:"nfs-regards-qua"})," used by REGARDS on the Qualification environment to store its files (cache, workdir..)"]}),"\n",(0,r.jsxs)(n.li,{children:["a NFS server ",(0,r.jsx)(n.code,{children:"nfs-mission1"})," that holds products for the mission ",(0,r.jsx)(n.code,{children:"MISSION1"})]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"Unique identifier of the NFS server"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config.o"}),(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"NFS configuration to connect to"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config.device_prefix"}),(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"Prefix of the path inside the NFS server every volume share. Must be accessible by the REGARDS runtime docker user"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"config.type"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["(Default value ",(0,r.jsx)(n.code,{children:"nfs"}),") - Driver used by Docker swarm"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["You will be able to use the same NFS server, using its name, on several mount definitions. See ",(0,r.jsx)(n.a,{href:"#volume-definition",children:"Volume definition"}),", ",(0,r.jsx)(n.a,{href:"#data-inputs",children:"Data inputs"})," and ",(0,r.jsx)(n.a,{href:"#workdir-configuration",children:"Workdir configuration"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"data-inputs",children:"Data inputs"}),"\n",(0,r.jsxs)(n.p,{children:["Data inputs configuration allow you to define a Docker Swarm volume that is automatically mounted on dataprovider, fem, ingest and storage services.",(0,r.jsx)(n.br,{}),"\n","It allows REGARDS to access to your data."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'group_docker_mounts:\n  [...]\n  regards:\n    data_inputs:\n      - name: local-input-datastore\n        local: true\n        source: "{{ group_workdir_local }}{{ group_stack_name }}/workspace/regards/input"\n        destination: /input\n      - name: mission1-datastore\n        nfs: nfs-mission1\n        device_postfix: ""\n        destination: /data/MISSION1\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"Name of the Docker Swarm volume (must be unique)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"destination"}),(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"Mount path inside the container"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"local"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["(Default value ",(0,r.jsx)(n.code,{children:"false"}),") - Mount a local path from the server"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsxs)(n.td,{children:["When ",(0,r.jsx)(n.code,{children:"local=true"})]}),(0,r.jsx)(n.td,{children:"Mount a local path from a host server to the container"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nfs"}),(0,r.jsxs)(n.td,{children:["When ",(0,r.jsx)(n.code,{children:"local"})," undefined"]}),(0,r.jsxs)(n.td,{children:["Identifier of the NFS server defined in ",(0,r.jsx)(n.code,{children:"group_docker_mounts.nfs"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"device_postfix"}),(0,r.jsxs)(n.td,{children:["When ",(0,r.jsx)(n.code,{children:"nfs"})," provided"]}),(0,r.jsxs)(n.td,{children:["(Default value is an empty string) A postfix path to add to the ",(0,r.jsx)(n.code,{children:"nfs.device_prefix"})," to obtain the path inside the NFS server. ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"final path"})," = ",(0,r.jsx)(n.code,{children:"nfs.device_prefix"})," + ",(0,r.jsx)(n.code,{children:"device_postfix"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"volume-definition",children:"Volume definition"}),"\n",(0,r.jsxs)(n.p,{children:["Volumes allow you to define Docker Swarm volumes. Unlike the Data inputs configuration, you need to explicitly mount these volumes to services. Volume definitions and Data inputs share the same syntax except there is no ",(0,r.jsx)(n.code,{children:"destination"})," property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'group_docker_mounts:\n  [...]\n  volumes: \n    - name: front-public-volume\n      nfs: nfs-regards-qua\n      device_postfix: "regards/www"\n    - name: myworker-workspace-volume\n      local: true\n      source: "{{ group_workdir_local }}{{ group_stack_name }}/workspace/regards/myworker"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mount-volume-to-services",children:"Mount volume to services"}),"\n",(0,r.jsxs)(n.p,{children:["Once Docker swarm volumes are defined, either from ",(0,r.jsx)(n.a,{href:"#volume-definition",children:"Volume definition"})," or ",(0,r.jsx)(n.a,{href:"#data-inputs",children:"Data inputs"}),", you can attach them using the ",(0,r.jsx)(n.code,{children:"volumes"})," property inside any service definition. Data inputs are automatically attached to dataprovider, fem, ingest and storage services."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"group_docker_mservices:\n  front:\n    [...]\n    volumes:\n      - source: front-public-volume\n        destination: /var/www/public/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"config-and-secrets-files",children:"Config and secrets files"}),"\n",(0,r.jsxs)(n.p,{children:["Our playbook allows you to transfer a file located inside your inventory into the main Swarm manager host. Then, when your stack boots, the file is read by Swarm in memory and sent over the network to any host running container requiring the Config or Secret file. Again, the main point is to share configs and secret files (see ",(0,r.jsx)(n.a,{href:"/docs/setup/swarm/advanced/ansible-vault#encrypt-file",children:"Encrypt secrets file using Ansible Vault"}),") under source control.",(0,r.jsx)(n.br,{}),"\n","When you deploy a new version of a config or secret file, any container link to that file will be recreated with the updated version of that file."]}),"\n",(0,r.jsx)(n.admonition,{title:"Cons",type:"warning",children:(0,r.jsxs)(n.p,{children:["The file cannot exceed 500kb",(0,r.jsx)(n.br,{}),"\n","Config and secret file names must be unique"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The first step is to create a folder named ",(0,r.jsx)(n.code,{children:"files"})," inside ",(0,r.jsx)(n.code,{children:"inventories/<your inventory>/group_vars/regards_nodes/"})]}),"\n",(0,r.jsxs)(n.li,{children:["You can create any file tree inside the ",(0,r.jsx)(n.code,{children:"files"})," folder if you have many configs and secrets files"]}),"\n",(0,r.jsx)(n.li,{children:"Copy your files"}),"\n",(0,r.jsx)(n.li,{children:"Now, define the list of configs and secrets like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"group_docker_mounts:\n  secrets:\n    - file: some_secret.key\n      path: private/folder/\n      # Files location is ..regards_nodes/files/private/folder/some_secret.key\n  configs:\n    - file: attributeOrder.properties\n      path: config-extraction\n      # Files location is ..regards_nodes/files/config-extraction/attributeOrder.properties\n    - file: my-background.jpg\n      path: www\n      # Files location is ..regards_nodes/files/www/my-background.jpg\n"})}),"\n",(0,r.jsx)(n.h3,{id:"mount-configs-and-secrets-to-services",children:"Mount configs and secrets to services"}),"\n",(0,r.jsxs)(n.p,{children:["Once configs and secrets are defined, you can attach them using the ",(0,r.jsx)(n.code,{children:"configs"})," and ",(0,r.jsx)(n.code,{children:"secrets"})," property inside any service definition"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"group_docker_mservices:\n  front:\n    [...]\n    configs:\n      - source: my-background.jpg\n        destination: /var/www/background/my-background.jpg\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can attach the same config or secret file to several services."}),"\n",(0,r.jsx)(n.h3,{id:"workdir-configuration",children:"Workdir configuration"}),"\n",(0,r.jsxs)(n.p,{children:["REGARDS is configured by default to use the local disk for all workspaces deployed.",(0,r.jsx)(n.br,{}),"\n","Every workdir configuration shares the same syntax :"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Mandatory"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"local"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["(Default value ",(0,r.jsx)(n.code,{children:"true"}),") - When true, mount a (not configurable) local path from the server to the service"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nfs"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["Identifier of the NFS server defined in ",(0,r.jsx)(n.code,{children:"group_docker_mounts.nfs"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"device_postfix"}),(0,r.jsx)(n.td,{}),(0,r.jsxs)(n.td,{children:["(Default value below) A postfix path to add to the ",(0,r.jsx)(n.code,{children:"nfs.device_prefix"})," to obtain the path inside the NFS server. ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"final path"})," = ",(0,r.jsx)(n.code,{children:"nfs.device_prefix"})," + ",(0,r.jsx)(n.code,{children:"device_postfix"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"device_postfix"})," has a default value that depends of the workdir you are configuring:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.code,{children:"device_postfix"})," value"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elasticsearch.data"}),(0,r.jsx)(n.td,{children:"elasticsearch/data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elasticsearch.backup"}),(0,r.jsx)(n.td,{children:"elasticsearch/backup"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elasticsearch_logs.data"}),(0,r.jsx)(n.td,{children:"elasticsearch/data-logs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"elasticsearch_logs.backup"}),(0,r.jsx)(n.td,{children:"elasticsearch/backup-logs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"postgresql"}),(0,r.jsx)(n.td,{children:"postgresql/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rabbitmq"}),(0,r.jsx)(n.td,{children:"rabbitmq"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minio"}),(0,r.jsx)(n.td,{children:"minio/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.processing"}),(0,r.jsx)(n.td,{children:"regards/processing"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.dam"}),(0,r.jsx)(n.td,{children:"regards/storage/dam"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.workspace"}),(0,r.jsx)(n.td,{children:"regards/workspace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.storage.onlines"}),(0,r.jsx)(n.td,{children:"regards/storage/onlines"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.storage.cache"}),(0,r.jsx)(n.td,{children:"regards/storage/cache"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.logs"}),(0,r.jsx)(n.td,{children:"regards/logs/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"regards.plugins"}),(0,r.jsx)(n.td,{children:"regards/plugins/"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Most of the time, you want to provide a NFS to REGARDS for all its workdir, but you can have a single workdir on its own NFS, dependending of your needs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"  regards:\n    # For DAM documents\n    dam:\n      nfs: nfs-regards-cnes-qua\n    storage:\n      # For online local storages\n      online:\n        nfs: nfs-regards-cnes-qua\n      # For STORAGE cache\n      cache:\n        nfs: nfs-regards-cnes-qua\n    # Common microservices workspace directory\n    workspace:\n      nfs: nfs-regards-cnes-qua\n    processing: \n      nfs: nfs-regards-cnes-qua\n    # Microservices plugins directory\n    plugins:\n      nfs: nfs-regards-cnes-qua\n#  elasticsearch:\n#    data:\n#    backup:\n#  rabbitmq:\n#  minio:\n#  postgresql:\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"Multi node deployment, CoTS and replication",type:"info",children:(0,r.jsxs)(n.p,{children:["You can configure CoTs workdir too, but be careful :",(0,r.jsx)(n.br,{}),"\n","it's preferable to deploy a RabbitMQ cluster than a single instance.",(0,r.jsx)(n.br,{}),"\n","In a RabbitMQ cluster, every RabbitMQ replica needs local disk and not NFS mount."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);