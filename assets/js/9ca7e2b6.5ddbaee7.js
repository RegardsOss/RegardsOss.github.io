"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[29531],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),k=i,b=c["".concat(l,".").concat(k)]||c[k]||m[k]||r;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48057:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"backend-framework-modules-jobs",title:"Jobs",sidebar_label:"Jobs",slug:"/development/backend/framework/modules/jobs/"},l=void 0,p={unversionedId:"development/backend/framework/modules/backend-framework-modules-jobs",id:"development/backend/framework/modules/backend-framework-modules-jobs",title:"Jobs",description:"Jobs module allows to execute tasks in parallel on several microservices.",source:"@site/docs/development/backend/framework/modules/jobs.md",sourceDirName:"development/backend/framework/modules",slug:"/development/backend/framework/modules/jobs/",permalink:"/docs/development/backend/framework/modules/jobs/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/framework/modules/jobs.md",tags:[],version:"current",frontMatter:{id:"backend-framework-modules-jobs",title:"Jobs",sidebar_label:"Jobs",slug:"/development/backend/framework/modules/jobs/"},sidebar:"dev",previous:{title:"Web socket starter",permalink:"/docs/development/backend/framework/starters/web-socket/"},next:{title:"How to create a microservice",permalink:"/docs/development/backend/framework/dev-microservice/"}},d=[{value:"Job creation",id:"job-creation",children:[],level:2},{value:"Job life cycle",id:"job-life-cycle",children:[{value:"Statuses",id:"statuses",children:[],level:3},{value:"AMQP events",id:"amqp-events",children:[],level:3}],level:2},{value:"Completion",id:"completion",children:[],level:2},{value:"Tasks",id:"tasks",children:[{value:"Principle",id:"principle",children:[],level:3},{value:"Conception",id:"conception",children:[],level:3},{value:"Specific microservice implementation",id:"specific-microservice-implementation",children:[],level:3}],level:2}],m={toc:d};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jobs module allows to execute tasks in parallel on several microservices."),(0,r.kt)("p",null,"Jobs module can be used by any microservice. When used, ",(0,r.kt)("inlineCode",{parentName:"p"},"t_job_info")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t_job_parameters")," tables are created into the microservice database/schema."),(0,r.kt)("p",null,"The daemon ",(0,r.kt)("inlineCode",{parentName:"p"},"JobService")," is launched to manage jobs, it permanently searches for jobs to execute following a priority provided by job submitter."),(0,r.kt)("p",null,"To submit a job, it is necessary to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," object containing informations about the job (ie. job parameters, job instantiation class, ...).\n",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," instantiation class must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"IJob")," interface or better, inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractJob")," class."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Job")," object is never manipulated by developers, only ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," is available. ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," contains job status and job informations\nsuch as percent completion, start and end dates...  "),(0,r.kt)("h2",{id:"job-creation"},"Job creation"),(0,r.kt)("p",null,"To create a job, developers must create a ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," object by providing following attributes :  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"locked"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")," means your job will be cleaned by an automatic cleaning process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Job priority")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"parameters"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Set<JobParameter>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Job parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"owner"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The email of the job owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"className"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Job class name to execute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"expirationDate"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"OffsetDateTime")," ",(0,r.kt)("em",{parentName:"td"},"optional")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When provided and reached, ",(0,r.kt)("inlineCode",{parentName:"td"},"JobInfoService")," will mark the job as ",(0,r.kt)("inlineCode",{parentName:"td"},"FAILED"))))),(0,r.kt)("p",null,"Two methods permits ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," creation :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JobInfoService.createAsPending")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JobInfoService.createAsQueued"))),(0,r.kt)("p",null,"There is two job statuses :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PENDING")," means ",(0,r.kt)("inlineCode",{parentName:"li"},"JobInfo")," is only created in database, and will need another manual state change to ",(0,r.kt)("inlineCode",{parentName:"li"},"QUEUED")," to be taken in account by ",(0,r.kt)("inlineCode",{parentName:"li"},"JobService"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"QUEUED")," means ",(0,r.kt)("inlineCode",{parentName:"li"},"JobInfo")," is created in database and will be taken into account by JobService as soon as possible (ie. ",(0,r.kt)("inlineCode",{parentName:"li"},"JobService")," will soon create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Job")," from this ",(0,r.kt)("inlineCode",{parentName:"li"},"JobInfo")," and will execute it).")),(0,r.kt)("p",null,"Every instance of the same microservice will contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"JobService")," that fills its thread pool with jobs from all tenants. If the pool contains an empty slot, it searches for the next tenant having job to do with the highest priority and so on.  "),(0,r.kt)("p",null,"To sum up, here is an example of Job creation :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Set<JobParameter> parameters = Sets.newHashSet();\nparameters.add(new JobParameter(<your job>.SOME_PARAMETER_NAME, "42"));\nJobInfo jobInfo = new JobInfo(false, 0, parameters, authResolver.getUser(), <your job>.class.getName())\njobInfo.setExpirationDate(OffsetDateTime.now().plusDays(40));\njobInfoService.createAsQueued(jobInfo);\nLOGGER.debug("New job scheduled uuid={}", jobInfo.getId().toString());\n')),(0,r.kt)("h2",{id:"job-life-cycle"},"Job life cycle"),(0,r.kt)("h3",{id:"statuses"},"Statuses"),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"JobService")," chooses a ",(0,r.kt)("inlineCode",{parentName:"p"},"QUEUED")," ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo"),", its status becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"TO_BE_RUN"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"JobService")," will prepare the ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," by setting its parameters and eventually creating its workspace, if that's needed. Once finished, the job status becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNING")," and the Job is executed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"JobService")," thread pool.",(0,r.kt)("br",{parentName:"p"}),"\n","If it fails, its status is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED")," and stacktrace is saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfo")," database object.",(0,r.kt)("br",{parentName:"p"}),"\n","If it succeeds, its status is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCEEDED"),".  "),(0,r.kt)("p",null,"It is possible to ask for stopping a job with method ",(0,r.kt)("inlineCode",{parentName:"p"},"JobInfoService.stopJob"),". This method is asynchronous and may be inefficient if job cannot be cancelled or if job has already finished.",(0,r.kt)("br",{parentName:"p"}),"\n","In case job is cancelled, its status is changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"ABORTED"),".",(0,r.kt)("br",{parentName:"p"}),"\n","In case the expiration date, when provided, has been reached whereas job is still in ",(0,r.kt)("inlineCode",{parentName:"p"},"QUEUED")," state, its status becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED")," (provided stacktrace used to indicate JobInfo failed error is then used to indicate expiration date has been reached).  "),(0,r.kt)("h3",{id:"amqp-events"},"AMQP events"),(0,r.kt)("p",null,"Some (important) status changes are notified with an AMQP broadcast event (",(0,r.kt)("inlineCode",{parentName:"p"},"JobEvent"),") :\n",(0,r.kt)("inlineCode",{parentName:"p"},"ABORTED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FAILED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCEEDED"),"."),(0,r.kt)("h2",{id:"completion"},"Completion"),(0,r.kt)("p",null,"Most of jobs will take a long time to finish, so when that's possible, you should implement the job progression."),(0,r.kt)("p",null,"To do so, it is necessary to inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractJob")," (which is a good idea in all cases by the way).\nThen, it is necessary to implement method ",(0,r.kt)("inlineCode",{parentName:"p"},"getCompletionCount")," giving a total ",(0,r.kt)("em",{parentName:"p"},"tick")," count.\nFinally, during job execution ie into ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," method, it is necessary to call method ",(0,r.kt)("inlineCode",{parentName:"p"},"advanceCompletion")," the same number\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"getCompletionCount")," returned one.\nThanks to that, at any time during job execution, it is possible to know progression percentage.\nThis is said, to avoid database saturation, this value is updated into database only one time per second (this value is configurable with ",(0,r.kt)("em",{parentName:"p"},"regards.jobs.completion.update.rate.ms")," property).  "),(0,r.kt)("h2",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"In order to chain jobs, to execute ",(0,r.kt)("em",{parentName:"p"},"Job1")," only when ",(0,r.kt)("em",{parentName:"p"},"Job2")," and ",(0,r.kt)("em",{parentName:"p"},"Job3")," are finished for example, reliant tasks exists."),(0,r.kt)("h3",{id:"principle"},"Principle"),(0,r.kt)("p",null,"The principle of reliant tasks is to provide all complex chain management into objects from rs-microservice and let\nuser just define its specific microservice behavior in its own entities (which inherit provided ones)."),(0,r.kt)("h3",{id:"conception"},"Conception"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AbstractReliantTask")," is an abstract parameterized entity (mapped on ",(0,r.kt)("inlineCode",{parentName:"p"},"t_task")," table with a ",(0,r.kt)("em",{parentName:"p"},"JOINED")," inheritance strategy) having :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an optional ",(0,r.kt)("strong",{parentName:"li"},"OneToOne")," relation to a ",(0,r.kt)("inlineCode",{parentName:"li"},"JobInfo")," (mapped with association table ",(0,r.kt)("inlineCode",{parentName:"li"},"t_task_job_info"),"),"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("strong",{parentName:"li"},"ManyToMany")," relation to several parameterized ",(0,r.kt)("inlineCode",{parentName:"li"},"AbstractReliantTask")," (mapped with association table ",(0,r.kt)("inlineCode",{parentName:"li"},"ta_tasks_reliant_tasks"),"), to specify the dependency between others tasks and the current one.")),(0,r.kt)("p",null,"Of course, this is implementing a tree structure that needs to be stopped. ",(0,r.kt)("inlineCode",{parentName:"p"},"LeafTask")," inherits ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractReliantTask")," to\nspecify a task without reliant tasks."),(0,r.kt)("h3",{id:"specific-microservice-implementation"},"Specific microservice implementation"),(0,r.kt)("p",null,"Here is ",(0,r.kt)("em",{parentName:"p"},"rs-order")," example :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15051).Z,width:"556",height:"382"})),(0,r.kt)("p",null,"An order contains one task per dataset, each of that contains several files tasks. A files task is a task responsible of retrieving several files from ",(0,r.kt)("em",{parentName:"p"},"rs_storage"),". This retrieval is done thanks to a job."),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractReliantTask")," is responsible to provide progress advancement and dependencies between dataset tasks and files tasks, user doesn't need to think about this."),(0,r.kt)("p",null,"In term of mapping, ",(0,r.kt)("inlineCode",{parentName:"p"},"DatasetTask")," is mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"t_dataset_task")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FilesTask")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"t_files_tasks"),", these two tables are joined to ",(0,r.kt)("inlineCode",{parentName:"p"},"t_task")," with a foreign key.\nThis allows to add specific properties to these 2 entities being completely independent to ones defined into ",(0,r.kt)("em",{parentName:"p"},"rs_microservice"),"."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("em",{parentName:"p"},"rs-order"),", which is the root entity, is mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"t_order")," table and defines following ",(0,r.kt)("inlineCode",{parentName:"p"},"NamedEntityGraph")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@NamedEntityGraph(name = "graph.order",\n    attributeNodes = @NamedAttributeNode(value = "datasetTasks", subgraph = "graph.order.datasetTasks"),\n    subgraphs = { @NamedSubgraph(name = "graph.order.datasetTasks",\n            attributeNodes = @NamedAttributeNode(value = "reliantTasks")) })\n')),(0,r.kt)("p",null,"sub graph depth is only 1 because tree has a depth of one and thanks to the use of LeafTask which avoids trying to\naccess reliantTask lazy persistent set (which is empty but throws a lazy exception when accessed).\nPlease, keep that in mind when creating your own entity structure."),(0,r.kt)("p",null,"Simple ",(0,r.kt)("inlineCode",{parentName:"p"},"IOrderRepository")," example (to avoid multiple ",(0,r.kt)("strong",{parentName:"p"},"select")," and load entire tree with one request) :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface IOrderRepository extends JpaRepository<Order, Long> {\n    @EntityGraph("graph.order")\n    Order findOneById(Long id);\n}\n')))}c.isMDXComponent=!0},15051:function(e,t,n){t.Z=n.p+"assets/images/OrderMapping-d4edfed33d83c911740555f44fb2ebe8.png"}}]);