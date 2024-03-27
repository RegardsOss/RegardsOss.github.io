"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[64649],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),p=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=p(a),s=n,u=y["".concat(g,".").concat(s)]||y[s]||d[s]||i;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},18114:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const i={id:"optimizations",title:"Microservices optimizations",slug:"/setup/swarm/advanced/optimizations/"},l=void 0,o={unversionedId:"setup/advanced/optimizations",id:"version-1.14/setup/advanced/optimizations",title:"Microservices optimizations",description:"Introduction",source:"@site/versioned_docs/version-1.14/setup/advanced/swarm-optimizations.md",sourceDirName:"setup/advanced",slug:"/setup/swarm/advanced/optimizations/",permalink:"/docs/setup/swarm/advanced/optimizations/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/setup/advanced/swarm-optimizations.md",tags:[],version:"1.14",frontMatter:{id:"optimizations",title:"Microservices optimizations",slug:"/setup/swarm/advanced/optimizations/"},sidebar:"install",previous:{title:"MinIO",permalink:"/docs/setup/swarm/advanced/minio/"},next:{title:"Ansible Vault",permalink:"/docs/setup/swarm/advanced/ansible-vault"}},g={},p=[{value:"Introduction",id:"introduction",level:3},{value:"Ingest optimization",id:"ingest-optimization",level:3},{value:"FEM optimization",id:"fem-optimization",level:3},{value:"Notifier optimization",id:"notifier-optimization",level:3},{value:"Storage optimization",id:"storage-optimization",level:3},{value:"Data Management optimization",id:"data-management-optimization",level:3},{value:"Order optimization",id:"order-optimization",level:3},{value:"Dataprovider optimization",id:"dataprovider-optimization",level:3},{value:"Worker Manager optimization",id:"worker-manager-optimization",level:3},{value:"Processing optimization",id:"processing-optimization",level:3},{value:"LTA Manager optimization",id:"lta-manager-optimization",level:3}],m={toc:p},y="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"REGARDS provides several type of configurations in order to optimize its performances:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"the number of parallel processes that can be run by microservice - this global thread pool will be ",(0,n.yg)("strong",{parentName:"li"},"shared by all tenants")," on every instance of microservice (",(0,n.yg)("inlineCode",{parentName:"li"},"regards.jobs.pool.size"),")"),(0,n.yg)("li",{parentName:"ul"},"the number of parallel database connections permitted ",(0,n.yg)("strong",{parentName:"li"},"by tenant")," and by microservice - a connection pool is created for every tenant on every instance of microservice (",(0,n.yg)("inlineCode",{parentName:"li"},"regards.jpa.multitenant.maxPoolSize"),")"),(0,n.yg)("li",{parentName:"ul"},"the number of entities handled inside a microservice process. Every REGARDS process exposes a property to override the number of entities handled ",(0,n.yg)("em",{parentName:"li"},"on a bulk"))),(0,n.yg)("admonition",{title:"Important",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Usually, it is more efficient to configure each service to allow:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"a large number of parallel processes"),(0,n.yg)("li",{parentName:"ul"},"a small number of entities to process on every parallel process")),(0,n.yg)("p",{parentName:"admonition"},"But it depends on how many resources you can allocate to REGARDS services. ")),(0,n.yg)("admonition",{title:"Implications",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"When you increase the number of parallel processes:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"you need to increase database connections"),(0,n.yg)("li",{parentName:"ul"},"you use more CPU,or vCPU, of your server")),(0,n.yg)("p",{parentName:"admonition"},"When you add more entities to handle by job/thread:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"you increase the amount of memory used on the server"),(0,n.yg)("li",{parentName:"ul"},"you increase the duration of the database commit"))),(0,n.yg)("p",null,"Default microservice configurations:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Microservice"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default RAM"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default job pool size (shared)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Default DB pool size (by tenant)"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-config"),(0,n.yg)("td",{parentName:"tr",align:"left"},"128m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-registry"),(0,n.yg)("td",{parentName:"tr",align:"left"},"128m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-admin"),(0,n.yg)("td",{parentName:"tr",align:"left"},"512m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-admin-instance"),(0,n.yg)("td",{parentName:"tr",align:"left"},"512m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-access-project"),(0,n.yg)("td",{parentName:"tr",align:"left"},"512m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-access-instance"),(0,n.yg)("td",{parentName:"tr",align:"left"},"512m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-dam"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1280m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"None"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-ingest"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1536m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-fem"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1024m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-notifier"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1280m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-storage"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1024m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-dataprovider"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1024m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-catalog"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1024m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-order"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1280m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-worker-manager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1024m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-processing"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2048m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"50"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"rs-lta-manager"),(0,n.yg)("td",{parentName:"tr",align:"left"},"512m"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5 per tenant of the instance")))),(0,n.yg)("admonition",{title:"Many CPU adaptation",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"If your server(s) has a lot of CPU, or vCPU, we recommend you to increase on each microservice the value of job pool size and DB pool size.",(0,n.yg)("br",{parentName:"p"}),"\n","Don't forget to ",(0,n.yg)("strong",{parentName:"p"},"increase these properties together")," to avoid DB connection starvation during microservice processes.")),(0,n.yg)("h3",{id:"ingest-optimization"},"Ingest optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.ingest.configuration.jobs_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of ingestion processes (ingest, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.ingest.configuration.database_max_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.ingest.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.client.response.batch.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of storage request response to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"500")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.ingest.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.ingest.aips.scan.iteration-limit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one ingestion process (ingest, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100")))),(0,n.yg)("h3",{id:"fem-optimization"},"FEM optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.fem.configuration.jobs_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of FEM processes (ingest, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.fem.configuration.database_max_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.fem.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.fem.batch.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of FEM requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.fem.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.fem.max.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one FEM process (create, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")))),(0,n.yg)("h3",{id:"notifier-optimization"},"Notifier optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.notifier.configuration.jobs_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of Notifier processes (ingest, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.notifier.configuration.database_max_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.notifier.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.notifier.batch.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of AMQP Notifier requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.fem.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.notifier.max.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one Notifier process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")))),(0,n.yg)("h3",{id:"storage-optimization"},"Storage optimization"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Note")," : It is recommended to not set a big value to the ",(0,n.yg)("inlineCode",{parentName:"p"},"read_batch_size")," property for storage microservice. Recommended value between ",(0,n.yg)("inlineCode",{parentName:"p"},"10 and 100"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.jobs_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of Storage processes (store, delete, copy...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.database_max_pool_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.availability.items.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of file availibility requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.copy.items.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of copy requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.deletion.items.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of deletion requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.reference.items.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of file reference requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.read_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.store.items.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of store requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.cache.requests.per.job")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of file availibility requests to handle in one Storage process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.deletion.requests.per.job")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of deletion requests to handle in one Storage process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.storage.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.storage.storage.requests.per.job")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of files to store requests to handle in one Storage process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100")))),(0,n.yg)("h3",{id:"data-management-optimization"},"Data Management optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dam.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dam.configuration.crawler_batch_size"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.crawler.max.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to request at a time from the data source to harvest"),(0,n.yg)("td",{parentName:"tr",align:"left"},"10000")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dam.configuration.crawler_rate_delay_ms"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.ingester.rate.ms")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Time elapsed in milliseconds between two scans of configured crawlers to check if a datasource can be harvest"),(0,n.yg)("td",{parentName:"tr",align:"left"},"60000")))),(0,n.yg)("h3",{id:"order-optimization"},"Order optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.order.configuration.jobs_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of order processes"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.order.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.order.configuration.entities_per_job")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.order.batch.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one Order process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")))),(0,n.yg)("h3",{id:"dataprovider-optimization"},"Dataprovider optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dataprovider.configuration.jobs_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of Dataprovider processes"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dataprovider.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.dataprovider.configuration.entities_per_job")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.acquisition.batch.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one Dataprovider process"),(0,n.yg)("td",{parentName:"tr",align:"left"},"100")))),(0,n.yg)("h3",{id:"worker-manager-optimization"},"Worker Manager optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.worker_manager.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.worker_manager.configuration.read_batch_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.worker_manager.request.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of Worker Manager requests to handle at a time"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")))),(0,n.yg)("h3",{id:"processing-optimization"},"Processing optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.processing.configuration.jobs_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of Processing processes"),(0,n.yg)("td",{parentName:"tr",align:"left"},"50")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.processing.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")))),(0,n.yg)("h3",{id:"lta-manager-optimization"},"LTA Manager optimization"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Properties"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,n.yg)("th",{parentName:"tr",align:"left"},"default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.lta_manager.configuration.jobs_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jobs.pool.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of LTA Manager processes"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.lta_manager.configuration.database_max_pool_size")," ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.jpa.multitenant.maxPoolSize")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Maximum number of parallel database connections usable"),(0,n.yg)("td",{parentName:"tr",align:"left"},"5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Ansible property: ",(0,n.yg)("br",null),(0,n.yg)("inlineCode",{parentName:"td"},"group_docker_mservices.lta_manager.configuration.entities_per_job"),"  ",(0,n.yg)("br",null)," REGARDS property:",(0,n.yg)("br",null)," ",(0,n.yg)("inlineCode",{parentName:"td"},"regards.ltamanager.request.bulk.size")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number of entities to handle in one process (create, delete, update...)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"1000")))))}d.isMDXComponent=!0}}]);