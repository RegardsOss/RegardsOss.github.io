"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[50083],{20717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453);const i={id:"microservice-setup",title:"Deploy required microservices",slug:"/setup/swarm/advanced/microservice-setup"},a=void 0,c={id:"setup/swarm/advanced/microservice-setup",title:"Deploy required microservices",description:"Update inventory with microservices you need",source:"@site/docs/setup/swarm/advanced/02-microservice-setup.md",sourceDirName:"setup/swarm/advanced",slug:"/setup/swarm/advanced/microservice-setup",permalink:"/docs/setup/swarm/advanced/microservice-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/setup/swarm/advanced/02-microservice-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"microservice-setup",title:"Deploy required microservices",slug:"/setup/swarm/advanced/microservice-setup"},sidebar:"install",previous:{title:"Introduction",permalink:"/docs/setup/swarm/advanced/introduction"},next:{title:"Plugin setup",permalink:"/docs/setup/swarm/advanced/plugin-setup"}},l={},d=[{value:"Update inventory with microservices you need",id:"update-inventory-with-microservices-you-need",level:2},{value:"Disable/enable a REGARDS microservice",id:"disableenable-a-regards-microservice",level:3},{value:"Active Plugins",id:"active-plugins",level:3},{value:"Active Workers",id:"active-workers",level:3},{value:"Internal catalogs",id:"internal-catalogs",level:3},{value:"Create Ingest product using DataProvider",id:"create-ingest-product-using-dataprovider",level:3},{value:"File management using Storage",id:"file-management-using-storage",level:3},{value:"Internal and external notification management",id:"internal-and-external-notification-management",level:3},{value:"Workers manager",id:"workers-manager",level:3},{value:"Orders management",id:"orders-management",level:3},{value:"Process orders",id:"process-orders",level:3},{value:"Run changes",id:"run-changes",level:2},{value:"Full setup conclusion",id:"full-setup-conclusion",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"update-inventory-with-microservices-you-need",children:"Update inventory with microservices you need"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"The next section will describe all REGARDS microservices and how to enable them."})}),"\n",(0,r.jsx)(n.h3,{id:"disableenable-a-regards-microservice",children:"Disable/enable a REGARDS microservice"}),"\n",(0,r.jsxs)(n.p,{children:["If you look at your inventory file ",(0,r.jsx)(n.code,{children:"regards-cnes/group_vars/regards_nodes/main.yml"}),", you may see that many microservices\nare commented."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Stack\ngroup_docker_mservices:\n  access_project:\n    tag: "{{ group_docker_tags.back }}"\n  #  notifier:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  fem:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  storage:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  order:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  ingest:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  dataprovider:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  processing:\n  #    tag: "{{ group_docker_tags.back }}"\n  #  worker_manager:\n  #    tag: "{{ group_docker_tags.back }}"\n  front:\n    protocol: http\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you uncomment a microservice, like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Stack\ngroup_docker_mservices:\n  #  fem:\n  #    tag: "{{ group_docker_tags.back }}"\n  storage:\n    tag: "{{ group_docker_tags.back }}"\n  #  order:\n  #    tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"It means to the playbook that the microservice storage will be activated on the next deployment."}),"\n",(0,r.jsx)(n.h3,{id:"active-plugins",children:"Active Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["Here is the ",(0,r.jsx)(n.a,{href:"/docs/setup/swarm/advanced/plugin-setup",children:"documentation to add a plugin"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"active-workers",children:"Active Workers"}),"\n",(0,r.jsxs)(n.p,{children:["Here is the ",(0,r.jsx)(n.a,{href:"/docs/setup/swarm/advanced/worker-setup",children:"documentation to add a worker"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"internal-catalogs",children:"Internal catalogs"}),"\n",(0,r.jsx)(n.p,{children:"There is 3 types of crawler that lets REGARDS to populate its meta-catalog :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"internal"})," ",(0,r.jsx)(n.a,{href:"/docs/user-guide/import-data/oais-files/introduction/",children:"OAIS catalog"})]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.em,{children:"internal"})," ",(0,r.jsx)(n.a,{href:"/docs/user-guide/import-data/fem/introduction/",children:"GeoJSON catalog"})]}),"\n",(0,r.jsxs)(n.li,{children:["or an ",(0,r.jsx)(n.em,{children:"external"})," ",(0,r.jsx)(n.a,{href:"/docs/user-guide/crawler/configure-datasources/",children:"datasource"})," (an OpenSearch Web\nsource, an external Database....)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"All types of crawlers can be active at the same time, but you may not need them on your instance at the same time."}),"\n",(0,r.jsx)(n.admonition,{title:"Activate microservice carrefully",type:"info",children:(0,r.jsxs)(n.p,{children:["If you activate only the microservices you need, the admin HMI will not show you the configuration and pages related to\neverything you have desactivated !",(0,r.jsx)(n.br,{}),"\n","Activate them only if you need them."]})}),"\n",(0,r.jsx)(n.p,{children:"Here is the difference between these two internal catalogs:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"OAIS Manager (Ingest)"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Feature Manager (FEM)"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Populate using REST"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Populate using AMQP (faster)"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product deletion"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product update"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["No",(0,r.jsx)("br",{}),"To update a product, use product versionning"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product versionning"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product creation tools"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Scan yours files using ",(0,r.jsx)("br",{}),(0,r.jsx)(n.a,{href:"/docs/user-guide/import-data/scanned-files/manage-acquisition-chains/",children:"Data acquisition chains"}),(0,r.jsx)("br",{}),"in order to generate SIP"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"DIY"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Product creation feedback ",(0,r.jsx)("br",{}),"using AMQP"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Product creation feedback",(0,r.jsx)("br",{}),"using REST API"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Product creation feedback",(0,r.jsx)("br",{}),"using HMI"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Creation payload format"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Strict",(0,r.jsx)("br",{}),"List of SIP",(0,r.jsx)("br",{})," matching ",(0,r.jsx)(n.a,{href:"/docs/development/appendices/oais/",children:"OAIS standard"})]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Open",(0,r.jsx)("br",{}),"List of Feature",(0,r.jsx)("br",{}),"that are valid REGARDS feature"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Creation payload validation"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Model validation"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"No validation"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Feature must be valid against REGARDS model"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Product enhancement"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Optional enhancement",(0,r.jsx)("br",{}),"using custom plugins"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Features can be enhancement by workers and then referenced or updated",(0,r.jsx)("br",{}),"Enrichment is delegated to the worker system."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Sending product to ",(0,r.jsx)("br",{}),"microservice Notifier"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Goal"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Perennisation"}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["A flow between many applications",(0,r.jsx)("br",{}),"with complex product lifecycle"]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Activate the Ingest microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  ingest:\n#    tag: "{{ group_docker_tags.back }}"\n# By\ningest:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Activate the Feature Manager microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  fem:\n#    tag: "{{ group_docker_tags.back }}"\n# By\nfem:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If you want to crawl an external datasource, do not activate any of these internal catalogs."})}),"\n",(0,r.jsx)(n.h3,{id:"create-ingest-product-using-dataprovider",children:"Create Ingest product using DataProvider"}),"\n",(0,r.jsxs)(n.p,{children:["The microservice DataProvider allows you to create your products\nusing ",(0,r.jsx)(n.a,{href:"/docs/user-guide/import-data/scanned-files/manage-acquisition-chains/",children:"Data acquisition chains"}),". It\nscans files on disk and creates SIP according to these files.",(0,r.jsx)(n.br,{}),"\n","Here are some core features of DataProvider :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Regroup several files inside a product (SIP)"}),"\n",(0,r.jsx)(n.li,{children:"Scan the folder periodically in order to create new product when they are available"}),"\n",(0,r.jsx)(n.li,{children:"When necessary, product generation can be fully customized using dedicated plugin to extract metadata from the\nfilename or the file content"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Activate the DataProvider microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  dataprovider:\n#    tag: "{{ group_docker_tags.back }}"\n# By\ndataprovider:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This microservice requires : ",(0,r.jsx)(n.code,{children:"Ingest"})]}),"\n",(0,r.jsx)(n.h3,{id:"file-management-using-storage",children:"File management using Storage"}),"\n",(0,r.jsxs)(n.p,{children:["The Storage microservice can store\non ",(0,r.jsx)(n.a,{href:"/docs/user-guide/project-configuration/storages/",children:"different types of storage system"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Online storages : local disk, NFS..."}),"\n",(0,r.jsx)(n.li,{children:"Nearline storages : Tape Backup, S3 Glacier..."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["But it also manages ",(0,r.jsx)(n.em,{children:"external"})," files that are already available through an existing REST HTTP(S) server."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsxs)(n.th,{style:{textAlign:"center"},children:["File already available ",(0,r.jsx)("br",{}),"through existing REST HTTP(S) server"]}),(0,r.jsxs)(n.th,{style:{textAlign:"center"},children:["File NOT available ",(0,r.jsx)("br",{}),"through existing REST HTTP(S) server"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["On file indexed inside ",(0,r.jsx)("br",{}),"internal catalog"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Reference the provided ",(0,r.jsx)("br",{}),"remote server ",(0,r.jsx)("br",{}),"file link"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Two possibilities :",(0,r.jsx)("br",{}),"- copy the file to one/many storage sytems",(0,r.jsx)("br",{}),"- reference provided file link, as it is ",(0,r.jsx)("br",{}),"already associated to an existing storage system"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["Expose file ",(0,r.jsx)("br",{}),"through STORAGE REST API"]}),(0,r.jsxs)(n.td,{style:{textAlign:"center"},children:["No",(0,r.jsx)("br",{}),"Storage does not proxy over ",(0,r.jsx)("br",{}),"the existing REST HTTP(S) server"]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Support nearline storage system"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"N"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Y"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Once a file is managed by the Storage microservice, its products can be ordered by users."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Any product coming from an internal catalog will use the Storage microservice to reference or store its files"})}),"\n",(0,r.jsx)(n.p,{children:"Activate the Storage microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  storage:\n#    tag: "{{ group_docker_tags.back }}"\n# By\nstorage:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This microservice requires : ",(0,r.jsx)(n.code,{children:"FEM"})," or ",(0,r.jsx)(n.code,{children:"Ingest"})]}),"\n",(0,r.jsx)(n.h3,{id:"internal-and-external-notification-management",children:"Internal and external notification management"}),"\n",(0,r.jsxs)(n.p,{children:["The microservice Notifier receives all FEM and Ingest products everytime they change.",(0,r.jsx)(n.br,{}),"\n","It allows you to emit a notification to any system with a very granular syntax to decide whenever a product must be sent\nto some destination.",(0,r.jsx)(n.br,{}),"\n","The Notifier plugin system allows you to adapt the content of the notification sent to match your needs."]}),"\n",(0,r.jsx)(n.p,{children:"Activate the Notifier microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  notifier:\n#    tag: "{{ group_docker_tags.back }}"\n# By\nnotifier:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This microservice requires : ",(0,r.jsx)(n.code,{children:"FEM"})," or ",(0,r.jsx)(n.code,{children:"Ingest"})]}),"\n",(0,r.jsx)(n.h3,{id:"workers-manager",children:"Workers manager"}),"\n",(0,r.jsxs)(n.p,{children:["Workers manager is a powerful system designed to handle any type of task on your workflow.",(0,r.jsx)(n.br,{}),"\n","For example, you can raise a product notification using Notifier microservice to ask a worker to enhance the product.",(0,r.jsx)(n.br,{}),"\n","The worker can read the file and send an update request into the internal catalog."]}),"\n",(0,r.jsx)(n.p,{children:"As there is no Worker publicly available, you do not need to enable this service yet."}),"\n",(0,r.jsx)(n.h3,{id:"orders-management",children:"Orders management"}),"\n",(0,r.jsxs)(n.p,{children:["The microservice Order allows ",(0,r.jsx)(n.a,{href:"/docs/user-guide/order-data/introduction/",children:"users to make orders"}),".",(0,r.jsx)(n.br,{}),"\n","If this system is not active, orders are not available."]}),"\n",(0,r.jsx)(n.p,{children:"Activate the Order microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  order:\n#    tag: "{{ group_docker_tags.back }}"\n# By\norder:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This microservice requires : ",(0,r.jsx)(n.code,{children:"Storage"})]}),"\n",(0,r.jsx)(n.h3,{id:"process-orders",children:"Process orders"}),"\n",(0,r.jsxs)(n.p,{children:["The microservice Processing allows you\nto ",(0,r.jsx)(n.a,{href:"/docs/user-guide/order-data/processing/",children:"process ordered datafiles"}),".",(0,r.jsx)(n.br,{}),"\n","Once configured, the user can choose to activate a processing on its ordered data :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Convert the project of a NetCDF file"}),"\n",(0,r.jsx)(n.li,{children:"Crop a file"}),"\n",(0,r.jsx)(n.li,{children:"Call external processing system"}),"\n",(0,r.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Activate the Processing microservice :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Replace\n#  processing:\n#    tag: "{{ group_docker_tags.back }}"\n# By\nprocessing:\n  tag: "{{ group_docker_tags.back }}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This microservice requires : ",(0,r.jsx)(n.code,{children:"Order"})]}),"\n",(0,r.jsx)(n.h2,{id:"run-changes",children:"Run changes"}),"\n",(0,r.jsx)(n.p,{children:"Once you have edited your inventory, you must execute the following command to update the stack:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# cd regards-docker/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n"})}),"\n",(0,r.jsx)(n.p,{children:"That's it!"}),"\n",(0,r.jsx)(n.h3,{id:"full-setup-conclusion",children:"Full setup conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Congratulations, your REGARDS installation is over."}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"./health.sh all"})," and wait all microservices are 200 :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ ./health.sh all\n[200]\tfem\n[200]\tadmin\n[200]\tdam\n[200]\tprocessing\n[200]\tstorage\n[200]\taccess_project\n[200]\tingest\n[200]\tadmin_instance\n[200]\torder\n[200]\tcatalog\n[200]\taccess_instance\n[200]\tworker_manager\n[200]\tdataprovider\n[200]\tnotifier\n[200]\tauthentication\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);