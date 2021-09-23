"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11942],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75863:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"depracated-izpack",title:"Deploy with IzPack",slug:"/setup/deprecated/izpack/"},l=void 0,c={unversionedId:"setup/deprecated/depracated-izpack",id:"version-1.4.0/setup/deprecated/depracated-izpack",isDocsHomePage:!1,title:"Deploy with IzPack",description:"For now, the only way to deploy REGARDS on servers is to use an IzPack package.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/setup/deprecated/izpack.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/izpack/",permalink:"/fr/docs/1.4.0/setup/deprecated/izpack/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/setup/deprecated/izpack.md",version:"1.4.0",frontMatter:{id:"depracated-izpack",title:"Deploy with IzPack",slug:"/setup/deprecated/izpack/"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run command",id:"run-command",children:[]},{value:"Step-by-step installation",id:"step-by-step-installation",children:[{value:"Inital configuration",id:"inital-configuration",children:[]},{value:"Mandatory components to install",id:"mandatory-components-to-install",children:[]},{value:"Scalable microservices",id:"scalable-microservices",children:[]},{value:"HMI services",id:"hmi-services",children:[]},{value:"Security",id:"security",children:[]},{value:"General parameters",id:"general-parameters",children:[]},{value:"Microservice configuration",id:"microservice-configuration",children:[]}]}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For now, the only way to deploy REGARDS on servers is to use an ",(0,o.kt)("a",{parentName:"p",href:"http://izpack.org/"},(0,o.kt)("strong",{parentName:"a"},"IzPack")," package"),"."),(0,o.kt)("p",null,"If you don't have compiled the REGARDS IzPack installer, feel free to download it on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-deployment/releases"},"github release page"),"."),(0,o.kt)("p",null,"Ensure you have ","[setup components (COTS) that REGARDS relies on]"," before continuing this tutorial."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to run the Izpack installer, you need these dependencies :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"groovy 1.8.9"),(0,o.kt)("li",{parentName:"ul"},"OpenJDK 1.8")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Notice : ")," Groovy must be accessible from default install path /usr/bin/groovy.\nIf not, you can create a link :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /custom/install/dir/groovy /usr/bin/groovy\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In case of securized installation, the REGARDS installation directory must be owned by the user who run the installation commands.")),(0,o.kt)("h2",{id:"run-command"},"Run command"),(0,o.kt)("p",null,"To run the REGARDS installer, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar REGARDS-OSS-Installer.jar\n")),(0,o.kt)("p",null,"After your first installation, you can provide an XML file to automatically fill the IzPack installer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar REGARDS-OSS-Installer.jar auto-install-values.xml\n")),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-install-values.xml")," can be generated at the end of the manual installation. However IzPack do not save password in the file, you will need to edit the file to add password by yourself."),(0,o.kt)("h2",{id:"step-by-step-installation"},"Step-by-step installation"),(0,o.kt)("h3",{id:"inital-configuration"},"Inital configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Target Path\n------------------------\nSelect the installation path:  [/usr/local/regards]\n")),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/regards")," to override the default value ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/regards"),"."),(0,o.kt)("h3",{id:"mandatory-components-to-install"},"Mandatory components to install"),(0,o.kt)("p",null,"Afterwards, you will need to choose which components you want to install on the current server.\nThese mandatory components cannot be runned in multiples instances, but don't be afraid they don't have that much job to do."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you do not installed them on the current server, you'll need to install them somewhere else.\n{: .tip .plus}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Select Installation Packages\n------------------------\nSelect the packs you want to install:\n\n  [x] Pack 'core' required\n------------------------------------\n  [x] Include optional pack 'config'\n------------------------------------\n")),(0,o.kt)("p",null,"The Configuration server is the first component to start, it provides the global configuration parameters to all REGARDS components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------\n  [x] Include optional pack 'registry'\n--------------------------------------\n")),(0,o.kt)("p",null,"The Registry server is the second component to start, it provides the global components registry. This server is accessed by all REGARDS components to retrieve the adresses of other ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [x] Include optional pack 'gateway'\n-------------------------------------\n")),(0,o.kt)("p",null,"The Gateway is the secured entry point to the REGARDS system. It ensures the authentication system by providing an authentication Service Provider (SP) and redirect the REGARDS services requests to the installed microservices.",(0,o.kt)("br",{parentName:"p"}),"\n","This component also handles load-balancing in order to redirect requests to the least requested instance of a microservice."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------------\n  [x] Include optional pack 'admin-instance'\n--------------------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"admin-instance")," microservice provides services (accounts, notifications, projects...) shared between all REGARDS projects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"-----------------------------------\n  [x] Include optional pack 'admin'\n-----------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," microservice provides services (users rights, users groups...) for each project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"--------------------------------------------\n  [x] Include optional pack 'authentication'\n--------------------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication")," microservice validates users when they log in."),(0,o.kt)("h3",{id:"scalable-microservices"},"Scalable microservices"),(0,o.kt)("p",null,"With our IzPack, you can install ",(0,o.kt)("strong",{parentName:"p"},"multiple instances of each microservice")," on ",(0,o.kt)("strong",{parentName:"p"},"multiple physical or virtual hosts"),". The only requirement is that all these hosts can communicate throught ",(0,o.kt)("strong",{parentName:"p"},"HTTPS protocol"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Start by installing one instance of each needed microservice and if the performances of the system are too low, you can install more instances later.\n{: .tip .plus}")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you choose to not install the Configuration server, you will have to provide an existing Configuration server so that components you are currently installing can connect to it.\n{: .tip .plus}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [ ] Include optional pack 'storage'\n-------------------------------------\n")),(0,o.kt)("p",null,"This is a facultative microservice that stores your data and metadata on a safe storage. If you have already a system that meets this need, you can safely ignore it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"---------------------------------\n  [x] Include optional pack 'dam'\n---------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DataManagement")," microservice handle dynamic modelisation, crawling and indexation. ",(0,o.kt)("strong",{parentName:"p"},"This microservice uses a lot of RAM and CPU.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"-------------------------------------\n  [x] Include optional pack 'catalog'\n-------------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Catalog")," microservice makes REGARDS users research."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"-----------------------------------\n  [ ] Include optional pack 'order'\n-----------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Order")," microservice gathers data ordered by users."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"------------------------------------\n  [ ] Include optional pack 'ingest'\n------------------------------------\n------------------------------------------\n  [ ] Include optional pack 'dataprovider'\n------------------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Ingest")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Data Provider")," are facultatives microservices that scans data lakes and submit them to REGARDS indexation."),(0,o.kt)("h3",{id:"hmi-services"},"HMI services"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"---------------------------------------------\n  [x] Include optional pack 'access-instance'\n---------------------------------------------\n--------------------------------------------\n  [x] Include optional pack 'access-project'\n--------------------------------------------\n--------------------------------------\n  [x] Include optional pack 'frontend'\n--------------------------------------\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," service provides the React interface we've made and these ",(0,o.kt)("inlineCode",{parentName:"p"},"access-*")," services store the HMI customisation and configuration."),(0,o.kt)("h3",{id:"security"},"Security"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"What system security do you want to use?\n\n0  [x] Normal\n1  [ ] Enhanced\nInput selection:\n")),(0,o.kt)("p",null,"If you have correctly followed the ","[Configuration guide]",", you can select the Enhanced security mode. If you don't, just pass to the next section."),(0,o.kt)("p",null,"REGARDS needs to know which users and groups you have setup on your system. You can just accept default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nUser Data\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nSecurity customization\n\nExec user [regards]\n\n\n------------------------------------------\n\nRegards group [regards]\n\nExec group [rsexec]\n\nAdmin group [rsadmin]\n\nRuntime group [rsrun]\n")),(0,o.kt)("h3",{id:"general-parameters"},"General parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"General parameters\n\nThe first project to add [project1]\n")),(0,o.kt)("p",null,"The project name cannot be changed and will be used in the URI and by the API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Public domain to access project: this is the public address users will use to access project user/admin interfaces and services. This address depends on your web server configuration.\nAddress [https://172.26.47.195/user/project1]\n")),(0,o.kt)("p",null,"REGARDS needs to know how future users will be able to access using their browser to the server. You can edit this configuration later on the instance admin panel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Proxy confguration for internet access\nHost []\n\nPort [0]\n")),(0,o.kt)("p",null,"REGARDS can access to files store somewhere else. In that case, it will use that proxy configuration to retrieve the file.",(0,o.kt)("br",{parentName:"p"}),"\n","If you specify the NoProxy option, you need to separate every address by the ",(0,o.kt)("inlineCode",{parentName:"p"},",")," caracter. Every adress is considerated as a regex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Cipher key location[]\n/opt/regards/regards.key\nCipher initialization vector []\n1234567812345678\n")),(0,o.kt)("p",null,"If you followed the ","[Configuration guide]",", the Cipher key location is ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/regards/regards.key"),". The Cipher initialization vector must contain 16 digits."),(0,o.kt)("h3",{id:"microservice-configuration"},"Microservice configuration"),(0,o.kt)("p",null,"For every microservice you want to install, it will ask you :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"<Microservice name> microservice\n\n--\x3e Row 1: Host [0.0.0.0]\nPort [9031]\n")),(0,o.kt)("p",null,"The host value ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," means that every connection, either a local one (",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),") or a foreign one, is accepted."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can provide ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," if you don't install REGARDS on several servers AND you have a reverse proxy (otherwise the gateway would not answer)\n{: .tip .plus}")),(0,o.kt)("p",null,"Moreover, if a microservice depends on RabbitMQ, PostgresSQL or ElasticSearch, it will ask the configuration of the associated COTS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should get the following RabbitMQ configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"User Data\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nMessage broker configuration\n\nRabbitMQ\nHost [localhost]\nPort [5672]\nUsername []\nregards_adm\nPassword\nregards_adm\n\n------------------------------------------\n\nRabbitMQ management\nHost [localhost]\n\nPort [15672]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PostgresSQL configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Cross projects database | OR | First project's database\nUrl [localhost:5432/rs_instance]\n\nUsername []\nrs_postgres\nPassword\n***********\n")),(0,o.kt)("p",null,"You should have two different databases, ",(0,o.kt)("inlineCode",{parentName:"p"},"rs_instance")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rs_project1"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elasticsearch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Elasticsearch\nHost [localhost]\n\nPort [9200]\n")),(0,o.kt)("h4",{id:"rs-config"},"rs-config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"The workspaces basic directory [/opt/regards/workspace]\n")),(0,o.kt)("h4",{id:"rs-admin-instance"},"rs-admin-instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Administration instance microservice properties\n\nInstance admin\nEmail []\nregards@cnes.fr\nPassword\n**********\n")),(0,o.kt)("p",null,"It asks you the id of the most powerfull user of the system. Don't forget its password!"),(0,o.kt)("h4",{id:"rs-storage"},"rs-storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\nCache directory [/opt/regards/rs-storage-cache]\n")),(0,o.kt)("p",null,"Default values are fine to begin with."),(0,o.kt)("h4",{id:"rs-dam"},"rs-dam"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Documents local storage folder\nPath [/opt/regards/rs-dam-document-storage]\n")),(0,o.kt)("p",null,"Store files associated with Documents, Collections and Datasets."),(0,o.kt)("h4",{id:"rs-order"},"rs-order"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nOrders bucket size in Mb [100]\n\nOrders validation period in days [3]\n\nDays before sending mail notification [7]\n\nPassphrase used to generate token [order's passphrase]\nla bonne longueur pour les jambes, c'est quand les pieds touchent bien par terre\nMaximum number of displayable files [5000]\n\nMaximum number of job's order per user [2]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\nPeriodic files availability check (cron format)\nValue [0 23 * * 7 *]\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Passphrase used to generate token")," needs to be long and unique"),(0,o.kt)("h4",{id:"rs-ingest"},"rs-ingest"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Jobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\n\n------------------------------------------\n\nAIPs bulk request size\nSize [1000]\n")),(0,o.kt)("h4",{id:"rs-data-provider"},"rs-data-provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"------------------------------------------\n\nJobs pool size [10]\n\nJobs completion refresh rate\nValue in ms [500000]\n\nJobs period retention in days\nJobs successfully completed [1]\n\nJobs completed with error [30]\n\n\n------------------------------------------\n\nWaitings time\n\nFor ingestion of new SIPs [5000]\n\nFor chains activation [300000]\n\n\nFolders\n\nCycles and ORF configuration [/opt/regards/config/regards/dataprovider]\n\nTranslation files [plugins/translations]\n\nPlugins configuration [plugins/confs]\n\nChain's cycles [/data/cycles]\n\nORF file history [/data/chains/cycles]\n")),(0,o.kt)("p",null,"Let default values"),(0,o.kt)("h4",{id:"rs-admin-instance-1"},"rs-admin-instance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Security\n\nWhich rules should follow the user accounts ?\n\nAccount period of validity in days [30]\n\n\n------------------------------------------\n\nPasswords\nMust match the regex [[a-z0-9]*]\n\nOr else users will receive the message [Password must contain letters or numbers]\n\nPeriod of validity (days) [350]\n\n\n------------------------------------------\n\nWhen connecting\nNumber of attemps before locking the account [5]\nSMTP Configuration\n\nREGARDS keeps you in touch via emails. You can provide a specific SMTP server or leave the default one.\nHost [smtp.gmail.com]\n\nPort [465]\n\nUsername []\n\nPassword\n\nMail address for no reply [regards@noreply.fr]\n")),(0,o.kt)("h4",{id:"rs-frontend"},"rs-frontend"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Gateway\nUrl [http://localhost:8000]\n")),(0,o.kt)("p",null,"Set the public URI of REGARDS"),(0,o.kt)("p",null,"That's it ! You can jump to the ","[CLI guide]"," to launch REGARDS."))}d.isMDXComponent=!0}}]);