"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45225],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var g=r.createContext({}),s=function(e){var a=r.useContext(g),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(g.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=n,y=d["".concat(g,".").concat(u)]||d[u]||p[u]||i;return t?r.createElement(y,o(o({ref:a},c),{},{components:t})):r.createElement(y,o({ref:a},c))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var g in a)hasOwnProperty.call(a,g)&&(l[g]=a[g]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53013:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const i={id:"microservice-setup",title:"Deploy required microservices",slug:"/setup/swarm/advanced/microservice-setup"},o=void 0,l={unversionedId:"setup/advanced/microservice-setup",id:"version-1.12.0/setup/advanced/microservice-setup",title:"Deploy required microservices",description:"Update inventory with microservices you need",source:"@site/versioned_docs/version-1.12.0/setup/advanced/swarm-microservice-setup.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/microservice-setup",permalink:"/docs/1.12.0/setup/swarm/advanced/microservice-setup",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/setup/advanced/swarm-microservice-setup.md",tags:[],version:"1.12.0",frontMatter:{id:"microservice-setup",title:"Deploy required microservices",slug:"/setup/swarm/advanced/microservice-setup"},sidebar:"install",previous:{title:"Introduction",permalink:"/docs/1.12.0/setup/swarm/advanced/introduction"},next:{title:"Posgres database",permalink:"/docs/1.12.0/setup/swarm/advanced/postgres-database/"}},g={},s=[{value:"Update inventory with microservices you need",id:"update-inventory-with-microservices-you-need",level:2},{value:"Disable/enable a REGARDS microservice",id:"disableenable-a-regards-microservice",level:3},{value:"Internal catalogs",id:"internal-catalogs",level:3},{value:"Create Ingest product using DataProvider",id:"create-ingest-product-using-dataprovider",level:3},{value:"File management using Storage",id:"file-management-using-storage",level:3},{value:"Internal and external notification management",id:"internal-and-external-notification-management",level:3},{value:"Workers manager",id:"workers-manager",level:3},{value:"Orders management",id:"orders-management",level:3},{value:"Process orders",id:"process-orders",level:3},{value:"Run changes",id:"run-changes",level:2},{value:"Full setup conclusion",id:"full-setup-conclusion",level:3}],c={toc:s},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"update-inventory-with-microservices-you-need"},"Update inventory with microservices you need"),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The next section will describe all REGARDS microservices and how to enable them.")),(0,n.yg)("h3",{id:"disableenable-a-regards-microservice"},"Disable/enable a REGARDS microservice"),(0,n.yg)("p",null,"If you look at your inventory file ",(0,n.yg)("inlineCode",{parentName:"p"},"regards-cnes/group_vars/regards_nodes/main.yml"),", you may see that many microservices are commented."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Stack\ngroup_docker_mservices:\n  access_project:\n    tag: "{{ group_docker_tags.back }}"\n#  notifier:\n#    tag: "{{ group_docker_tags.back }}"\n#  fem:\n#    tag: "{{ group_docker_tags.back }}"\n#  storage:\n#    tag: "{{ group_docker_tags.back }}"\n#  order:\n#    tag: "{{ group_docker_tags.back }}"\n#  ingest:\n#    tag: "{{ group_docker_tags.back }}"\n#  dataprovider:\n#    tag: "{{ group_docker_tags.back }}"\n#  processing:\n#    tag: "{{ group_docker_tags.back }}"\n#  worker_manager:\n#    tag: "{{ group_docker_tags.back }}"\n  front:\n    protocol: http\n')),(0,n.yg)("p",null,"If you uncomment a microservice, like so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Stack\n#  fem:\n#    tag: "{{ group_docker_tags.back }}"\n  storage:\n    tag: "{{ group_docker_tags.back }}"\n#  order:\n#    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"It means to the playbook that the microservice storage will be activate on the next deployment."),(0,n.yg)("h3",{id:"internal-catalogs"},"Internal catalogs"),(0,n.yg)("p",null,"There is 3 types of crawler that lets REGARDS populate its meta-catalog :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the ",(0,n.yg)("em",{parentName:"li"},"internal")," ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/import-data/oais-files/introduction/"},"OAIS catalog")),(0,n.yg)("li",{parentName:"ul"},"the ",(0,n.yg)("em",{parentName:"li"},"internal")," ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/import-data/fem/introduction/"},"GeoJSON catalog")),(0,n.yg)("li",{parentName:"ul"},"or an ",(0,n.yg)("em",{parentName:"li"},"external")," ",(0,n.yg)("a",{parentName:"li",href:"/docs/1.12.0/user-guide/crawler/configure-datasources/"},"datasource")," (an OpenSearch Web source, an external Database....)")),(0,n.yg)("p",null,"All types of crawlers can be active at the same time, but you may not need them on your instance at the same time."),(0,n.yg)("admonition",{title:"Activate microservice carrefully",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"If you activate only the microservices you need, the admin HMI will not show you the configuration and pages related to everything you have desactivated !",(0,n.yg)("br",{parentName:"p"}),"\n","Activate them only if you need them. ")),(0,n.yg)("p",null,"Here is the difference between these two internal catalogs:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:"center"},"OAIS Manager (Ingest)"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Feature Manager (FEM)"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Populate using REST"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Populate using AMQP (faster)"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product deletion"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product update"),(0,n.yg)("td",{parentName:"tr",align:"center"},"No",(0,n.yg)("br",null),"To update a product, use product versionning"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product versionning"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product creation tools"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Scan yours files using ",(0,n.yg)("br",null),(0,n.yg)("a",{parentName:"td",href:"/docs/1.12.0/user-guide/import-data/scanned-files/manage-acquisition-chains/"},"Data acquisition chains"),(0,n.yg)("br",null),"in order to generate SIP"),(0,n.yg)("td",{parentName:"tr",align:"center"},"DIY")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product creation feedback ",(0,n.yg)("br",null),"using AMQP"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product creation feedback",(0,n.yg)("br",null),"using REST API"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product creation feedback",(0,n.yg)("br",null),"using HMI"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Creation payload format"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Strict",(0,n.yg)("br",null),"List of SIP",(0,n.yg)("br",null)," matching ",(0,n.yg)("a",{parentName:"td",href:"/docs/1.12.0/development/appendices/oais/"},"OAIS standard")),(0,n.yg)("td",{parentName:"tr",align:"center"},"Open",(0,n.yg)("br",null),"List of Feature",(0,n.yg)("br",null),"that are valid REGARDS feature")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Creation payload validation"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Model validation"),(0,n.yg)("td",{parentName:"tr",align:"center"},"No validation"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Feature must be valid against REGARDS model")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Product enhancement"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Optional enhancement",(0,n.yg)("br",null),"using custom plugins"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Features can be enhancement by workers and then referenced or updated",(0,n.yg)("br",null),"Enrichment is delegated to the worker system.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Sending product to ",(0,n.yg)("br",null),"microservice Notifier"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Goal"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Perennisation"),(0,n.yg)("td",{parentName:"tr",align:"center"},"A flow between many applications",(0,n.yg)("br",null),"with complex product lifecycle")))),(0,n.yg)("p",null,"Activate the Ingest microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  ingest:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  ingest:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"Activate the Feature Manager microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  fem:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  fem:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"If you want to crawl an external datasource, do not activate any of these internal catalogs.")),(0,n.yg)("h3",{id:"create-ingest-product-using-dataprovider"},"Create Ingest product using DataProvider"),(0,n.yg)("p",null,"The microservice DataProvider allows you to create your products using ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/import-data/scanned-files/manage-acquisition-chains/"},"Data acquisition chains"),". It scans files on disk and creates SIP according to these files.",(0,n.yg)("br",{parentName:"p"}),"\n","Here are some core features of DataProvider :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Regroup several files inside a product (SIP)"),(0,n.yg)("li",{parentName:"ul"},"Scan the folder periodically in order to create new product when they are available"),(0,n.yg)("li",{parentName:"ul"},"When necessary, product generation can be fully customized using dedicated plugin to extract metadata from the filename or the file content ")),(0,n.yg)("p",null,"Activate the DataProvider microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  dataprovider:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  dataprovider:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"This microservice requires : ",(0,n.yg)("inlineCode",{parentName:"p"},"Ingest")),(0,n.yg)("h3",{id:"file-management-using-storage"},"File management using Storage"),(0,n.yg)("p",null,"The Storage microservice can store on ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/project-configuration/storages/"},"different types of storage system"),":"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Online storages : local disk, NFS..."),(0,n.yg)("li",{parentName:"ul"},"Nearline storages : Tape Backup, S3 Glacier...")),(0,n.yg)("p",null,"But it also manages ",(0,n.yg)("em",{parentName:"p"},"external")," files that are already available through an existing REST HTTP(S) server."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"center"}),(0,n.yg)("th",{parentName:"tr",align:"center"},"File already available ",(0,n.yg)("br",null),"through existing REST HTTP(S) server"),(0,n.yg)("th",{parentName:"tr",align:"center"},"File NOT available ",(0,n.yg)("br",null),"through existing REST HTTP(S) server"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"On file indexed inside ",(0,n.yg)("br",null),"internal catalog"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Reference the provided ",(0,n.yg)("br",null),"remote server ",(0,n.yg)("br",null),"file link"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Two possibilities :",(0,n.yg)("br",null),"- copy the file to one/many storage sytems",(0,n.yg)("br",null),"- reference provided file link, as it is ",(0,n.yg)("br",null),"already associated to an existing storage system")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Expose file ",(0,n.yg)("br",null),"through STORAGE REST API"),(0,n.yg)("td",{parentName:"tr",align:"center"},"No",(0,n.yg)("br",null),"Storage does not proxy over ",(0,n.yg)("br",null),"the existing REST HTTP(S) server"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"center"},"Support nearline storage system"),(0,n.yg)("td",{parentName:"tr",align:"center"},"N"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Y")))),(0,n.yg)("p",null,"Once a file is managed by the Storage microservice, its products can be ordered by users."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Any product coming from an internal catalog will use the Storage microservice to reference or store its files")),(0,n.yg)("p",null,"Activate the Storage microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  storage:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  storage:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"This microservice requires : ",(0,n.yg)("inlineCode",{parentName:"p"},"FEM")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Ingest")),(0,n.yg)("h3",{id:"internal-and-external-notification-management"},"Internal and external notification management"),(0,n.yg)("p",null,"The microservice Notifier receives all FEM and Ingest products everytime they change.",(0,n.yg)("br",{parentName:"p"}),"\n","It allows you to emit a notification to any system with a very granular syntax to decide whenever a product must be sent to some destination.",(0,n.yg)("br",{parentName:"p"}),"\n","The Notifier plugin system allows you to adapt the content of the notification sent to match your needs."),(0,n.yg)("p",null,"Activate the Notifier microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  notifier:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  notifier:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"This microservice requires : ",(0,n.yg)("inlineCode",{parentName:"p"},"FEM")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Ingest")),(0,n.yg)("h3",{id:"workers-manager"},"Workers manager"),(0,n.yg)("p",null,"Workers manager is a powerful system designed to handle any type of task on your workflow.",(0,n.yg)("br",{parentName:"p"}),"\n","For example, you can raise a product notification using Notifier microservice to ask a worker to enhance the product.",(0,n.yg)("br",{parentName:"p"}),"\n","The worker can read the file and send an update request into the internal catalog. "),(0,n.yg)("p",null,"As there is no Worker publicly available, you do not need to enable this service yet."),(0,n.yg)("h3",{id:"orders-management"},"Orders management"),(0,n.yg)("p",null,"The microservice Order allows ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/order/introduction/"},"users to make orders"),".",(0,n.yg)("br",{parentName:"p"}),"\n","If this system is not active, orders are not available."),(0,n.yg)("p",null,"Activate the Order microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  order:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  order:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"This microservice requires : ",(0,n.yg)("inlineCode",{parentName:"p"},"Storage")),(0,n.yg)("h3",{id:"process-orders"},"Process orders"),(0,n.yg)("p",null,"The microservice Processing allows you to ",(0,n.yg)("a",{parentName:"p",href:"/docs/1.12.0/user-guide/order/processing/"},"process ordered datafiles"),".",(0,n.yg)("br",{parentName:"p"}),"\n","Once configured, the user can choose to activate a processing on its ordered data :"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Convert the project of a NetCDF file"),(0,n.yg)("li",{parentName:"ul"},"Crop a file"),(0,n.yg)("li",{parentName:"ul"},"Call external processing system"),(0,n.yg)("li",{parentName:"ul"},"...")),(0,n.yg)("p",null,"Activate the Processing microservice : "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'# Replace\n#  processing:\n#    tag: "{{ group_docker_tags.back }}"\n# By\n  processing:\n    tag: "{{ group_docker_tags.back }}"\n')),(0,n.yg)("p",null,"This microservice requires : ",(0,n.yg)("inlineCode",{parentName:"p"},"Order")),(0,n.yg)("h2",{id:"run-changes"},"Run changes"),(0,n.yg)("p",null,"Once you have edited your inventory, you must execute the following command to update the stack:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"# cd regards-docker-master/\nansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>\n")),(0,n.yg)("p",null,"That's it!"),(0,n.yg)("h3",{id:"full-setup-conclusion"},"Full setup conclusion"),(0,n.yg)("p",null,"Congratulations, your REGARDS installation is over."),(0,n.yg)("p",null,"Execute ",(0,n.yg)("inlineCode",{parentName:"p"},"./health.sh all")," and wait all microservices are 200 :"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"$ ./health.sh all\n[200]   fem\n[200]   admin\n[200]   dam\n[200]   processing\n[200]   storage\n[200]   access_project\n[200]   ingest\n[200]   admin_instance\n[200]   order\n[200]   catalog\n[200]   access_instance\n[200]   worker_manager\n[200]   dataprovider\n[200]   notifier\n[200]   authentication\n")))}p.isMDXComponent=!0}}]);