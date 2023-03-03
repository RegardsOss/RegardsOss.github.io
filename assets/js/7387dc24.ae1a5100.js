"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[73640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?a.createElement(m,s(s({ref:t},f),{},{components:r})):a.createElement(m,s({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"backend-framework-starters-staf",title:"STAF starter",slug:"/development/backend/framework/starters/staf/"},s="1. Configuration",o={unversionedId:"development/backend/framework/starters/backend-framework-starters-staf",id:"version-1.7.1/development/backend/framework/starters/backend-framework-starters-staf",title:"STAF starter",description:"Add starter dependency to your POM (version depends on the REGARDS BOM)",source:"@site/versioned_docs/version-1.7.1/development/backend/framework/starters/staf-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/staf/",permalink:"/docs/1.7.1/development/backend/framework/starters/staf/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/framework/starters/staf-starter.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-framework-starters-staf",title:"STAF starter",slug:"/development/backend/framework/starters/staf/"},sidebar:"dev",previous:{title:"Security starter",permalink:"/docs/1.7.1/development/backend/framework/starters/security/"},next:{title:"Swagger starter",permalink:"/docs/1.7.1/development/backend/framework/starters/swagger/"}},l={},c=[{value:"2.1 Initialization",id:"21-initialization",level:2},{value:"2.2 To archive files",id:"22-to-archive-files",level:2},{value:"2.3 To restore files",id:"23-to-restore-files",level:2},{value:"2.4 To delete files",id:"24-to-delete-files",level:2}],f={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"1-configuration"},"1","."," Configuration"),(0,n.kt)("p",null,"Add starter dependency to your POM (version depends on the REGARDS BOM)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>fr.cnes.regards.framework</groupId>\n  <artifactId>staf-starter</artifactId>\n</dependency>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# 1. Restitution properties\n# -----------------------\n# Maximum numbe os staf session for files restitution. A session is opened connection to the STAF system.\nstaf.maxSessionsRestitutionMode=10\n# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files\nstaf.maxSessionStreamsRestitutionMode=10\n# Maximum number of files to retrieve per stream.\nstaf.maxStreamFilesRestitutionMode=10\n\n# 2. Archiving properties\n# --------------------\n# Maximum numbe os staf session for files archiving. A session is opened connection to the STAF system.\nstaf.maxSessionsArchivingMode=10\n# Maximum number of streams per STAF Session. A stream is an action of archving or retrieving a list of files\nstaf.maxSessionStreamsArchivingMode=10\n# Maximum number of files to archive per stream.\nstaf.maxStreamFilesArchivingMode=10\n# Minim file size for archiving into STAF (in octets). Under this limit, files are archive in TAR archives.\nstaf.minFileSize=1000\n# Maximum files size for archiving into STAF (in octets). Above this limit, files are cuted in parts before archiving.\nstaf.maxFileSize=100000\n# Maximum size of an TAR archive into STAF (in octets). Above this limite another TAR archive is initialized.\nstaf.maxTarSize=100000\n# Minimum size of a TAR archive to be stored into STAF (in octets). Under this limit, TAR are locally stored.\nstaf.tarSizeThreshold=50000\n# Above this limit of time (in hours), TAR archive are stored into STAF even if the tarSizeThreshold is not reached.\nstaf.maxTarArchivingHours=1\n# STAF Class used to archive files under the 50Mo\nstaf.littleFileClass=CS3\n# STAF Class used to archive files above the 50Mo\nstaf.biggerFileGenClass=CS3\n\n# 3. Global properties\n# -----------------\n# Number of try before fail during STAF Connection\nstaf.attemptsBeforeFail=3\n# absolute path the executable used to run shell sessions\nstaf.kshExec=/usr/bin/ksh\n# Not mandatory. This parameter is used to run a system shell command before trying to connect to STAF system.\nstaf.initShellCommand=\n")),(0,n.kt)("h1",{id:"2-how-to-use-staf-starter"},"2","."," How to use STAF starter"),(0,n.kt)("h2",{id:"21-initialization"},"2",".","1 Initialization"),(0,n.kt)("p",null,"In order to use staf-starter the first step is to initialize :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"STAF Service from the autowired STAFSessionManager"),(0,n.kt)("li",{parentName:"ul"},"STAF Controller from the previuous initialized STAF Service")),(0,n.kt)("p",null,"The STAF Service is used to initialize the STAF Archive to use.",(0,n.kt)("br",{parentName:"p"}),"\n","The STAF Controller is used to handle STAF file transfer and needs to be initialized with an absolute path the local STAF workspace directory.  "),(0,n.kt)("p",null,"The local STAF Workspace directory is used to :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Store local TAR archives not big enought to be store into STAF System."),(0,n.kt)("li",{parentName:"ul"},"Temporary cut files which are too big to be store into STAF in one part."),(0,n.kt)("li",{parentName:"ul"},"Temporary uncompress TAR archives retrieved from STAF system to retrieve one or many files into archives.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'    /**\n     * STAF connections manager\n     */\n    @Autowired\n    private STAFSessionManager stafManager;\n    \n    public void init() {\n        // Initialize STAF Service\n        STAFService stafService = stafManager.getNewArchiveAccessService(stafArchive);\n        try {\n            stafController = new STAFController(stafManager.getConfiguration(), Paths.get(workspaceDirectory),\n                    stafService);\n            stafController.initializeWorkspaceDirectories();\n        } catch (IOException e) {\n            LOG.error("[STAFDataStorage Plugin] Error during plugin initialization", e);\n        }\n    }\n')),(0,n.kt)("h2",{id:"22-to-archive-files"},"2",".","2 To archive files"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// 1. Sort files to archive per STAF Node\n// key : STAF Node where to archive files in value.\n// value : List of file paths to archive into the associated STAF Node.\nMap<Path, Set<Path> filesToPrepare;\n// 2. Prepare files to store\nSet<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToArchive(filesToPrepare);\n// 3. do store\nstafController.archiveFiles(preparedFiles, false);\n// 4. Get link between original file paths to archive and STAF URL of archived files\nMap<Path, URL> rawArchivedFiles = stafController.getRawFilesArchived(preparedFiles);\n")),(0,n.kt)("h2",{id:"23-to-restore-files"},"2",".","3 To restore files"),(0,n.kt)("p",null,"Note : The restoration can be asynchronous. So to handle files well restored, the STAFController uses a IClientCollectListener object. After each restoration success or fail the IClientCollectListener is notified."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// List of STAF URL of files to restore.\nSet<URL> urls;\n// 1. prepare files to restore\nSet<AbstractPhysicalFile> preparedFiles = stafController.prepareFilesToRestore(urls);\n// 2. do restore\nstafController.restoreFiles(preparedFiles, restorationDirectory, listener);\n")),(0,n.kt)("h2",{id:"24-to-delete-files"},"2",".","4 To delete files"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// List of STAF URL of files to restore.\nSet<URL> urls;\n// 1. prepare files to delete\nSet<AbstractPhysicalFile> filesToDelete = stafController.prepareFilesToDelete(urls);\n// 2. Delete prepared files\nSet<URL> deletedSTAFFiles = stafController.deleteFiles(filesToDelete);\n")),(0,n.kt)("h1",{id:"3-use-a-staf-standalone-executable"},"3","."," Use a STAF standalone executable"),(0,n.kt)("p",null,"The STAF libraby provide a standalone executable jar ",(0,n.kt)("inlineCode",{parentName:"p"},"staf-standalone-<version>-.jar"),".  "),(0,n.kt)("b",null,"Usage to archive files :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java -jar\n  -Dmode=ARCHIVE\n  -Darchive.name=<STAF Archive>\n  -Darchive.password=<STAF Archive password>  \n  -Dnode=<STAF Node where to archive>\n  -Ddir=<Absolute path to directory where to find files to archive>\n  -Dworkspace=<Absolute path to local STAF workspace>\n  staf-standalone--<version>.jar\n")),(0,n.kt)("b",null,"Usage to retrieve files :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java -jar\n  -Dmode=RESTORE\n  -Darchive.name=\\<STAF Archive> \n  -Darchive.password=\\<STAF Archive password>\n  -Dworkspace=\\<Absolute path to local STAF workspace>\n  -Douputdir=\\<Absolute path to directory where to restore files>\n  staf-standalone--\\<version>\\.jar \\[STAF Files to retrieve]\n")),(0,n.kt)("b",null,"Note :")," [STAF Files] : is a list of STAF URL to retrieve (example staf://ARCHIVE/NODE/file)",(0,n.kt)("b",null,"Usage to delete files :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"java -jar \n  -Dmode=DELETE\n  -Darchive.name=\\<STAF Archive>\n  -Darchive.password=\\<STAF Archive password>\n  -Dworkspace=\\<Absolute path to local STAF workspace>\n  staf-standalone--\\<version>.jar [STAF Files to delete]\n")),(0,n.kt)("b",null,"Note :")," [STAF Files] : is a list of STAF URL to delete (exeple staf://ARCHIVE/NODE/file)",(0,n.kt)("b",null,"STAF Files url format"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," - Direct acccess to file : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<FileName>\n - Acccess a file into an archive (tar only) : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<TarFileName>.tar?fileName=\\<fileName>\n - Acccess a file cut in multiple parts : staf://\\<ARCHIVE>/\\<NODE PATH>/\\<FileName>?parts=\\<Number of parts>\n")))}d.isMDXComponent=!0}}]);