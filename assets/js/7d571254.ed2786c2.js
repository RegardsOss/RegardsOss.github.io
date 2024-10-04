"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[26960],{63545:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var s=o(74848),r=o(28453);const t={title:"How it works",sidebar_label:"How it works",slug:"/development/services/access-project/conception",sidebar_position:2},i=void 0,c={id:"development/services/access-project/conception",title:"How it works",description:"Introduction",source:"@site/docs/development/services/access-project/conception.md",sourceDirName:"development/services/access-project",slug:"/development/services/access-project/conception",permalink:"/docs/development/services/access-project/conception",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/access-project/conception.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How it works",sidebar_label:"How it works",slug:"/development/services/access-project/conception",sidebar_position:2},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/services/access-project/overview"},next:{title:"All endpoints (OpenAPI)",permalink:"/docs/development/services/access-project/api-swagger"}},l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Module : uiconfiguration",id:"module--uiconfiguration",level:2},{value:"Module : backend-for-frontend",id:"module--backend-for-frontend",level:2},{value:"Concept",id:"concept",level:3},{value:"Access Search Controller",id:"access-search-controller",level:3},{value:"Recipient Dto Controller",id:"recipient-dto-controller",level:3},{value:"Toponyms Controller",id:"toponyms-controller",level:3},{value:"Module : access-services",id:"module--access-services",level:2},{value:"Project Users Controller",id:"project-users-controller",level:3},{value:"Storage Download Quota Controller",id:"storage-download-quota-controller",level:3},{value:"AccessSettingsController",id:"accesssettingscontroller",level:3},{value:"User Resource Controller",id:"user-resource-controller",level:3},{value:"Registration Controller",id:"registration-controller",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rs-access-project"})," aims several specific responsibilities for each project created in the Regards architecture.\nThis microservice groups together a set of functionalities divided into different modules."]}),"\n",(0,s.jsx)(n.h2,{id:"module--uiconfiguration",children:"Module : uiconfiguration"}),"\n",(0,s.jsxs)(n.p,{children:["This module allows to handle the configuration of the Regards user interface with CRUD operations on the database\nconcerning the UI widgets, layout and themes. All these graphical elements are configured in a configuration\nfile (",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/import-export",children:"Import/export configuration section"}),"),\nwhich lists the ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/packages/lazy-modules/",children:"UI modules"}),", ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/view/theme/",children:"UI theme"}),"\nand used ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/configuration/layout/",children:"UI layout"})," with their specific features, to display the Regards\ninterface with\nthe user role and to display the Regards interface with the administrator role."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the configuration\nof ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/packages/lazy-modules/",children:"UI module"})," for user's\nUI : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/module-controller",children:"Module Controller"})]}),"\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the configuration\nof ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/view/theme/",children:"UI theme"})," for user's\nUI : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/theme-controller",children:"UI Theme Controller"})]}),"\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the configuration\nof ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/configuration/layout/",children:"UI layout"})," for user's\nUI : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/ui-layout-controller",children:"UI Layout Controller"})]}),"\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the UI\nconfiguration : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/ui-layout-controller",children:"UI Configuration Controller"})]}),"\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the search history in the user's\nUI for the search form : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/search-history-controller",children:"Search History Controller"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"module--backend-for-frontend",children:"Module : backend-for-frontend"}),"\n",(0,s.jsx)(n.h3,{id:"concept",children:"Concept"}),"\n",(0,s.jsxs)(n.p,{children:["A part of this microservice is based on an architectural pattern named ",(0,s.jsx)(n.strong,{children:"BFF"})," (Backend-For-Frontend), used in modern\nweb developement to improve the efficiency and flexibility of frontend applications."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rs-Access-Project"})," microservice serves as an\nintermediary layer between the frontend client and multiple backend services, more particulary microservices in Regards.\nThis module allows to organise in a same HTTP request a complex functionality in order to reduce the number of requests\nbetween the browser and the server. Also there will be less response processing and therefore less complexity on the\nbrowser side.",(0,s.jsx)(n.br,{}),"\n","If, moreover, the backend and frontend teams are different, the use of a BFF is clearly a good solution to isolate\nresponsibilities between each team."]}),"\n",(0,s.jsxs)(n.p,{children:["We use a HTTP API client in order to communicate with other microservices.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Feign Client"})," is a Java-based tool used for simplifying HTTP communication in microservices architecture,\nparticularly in systems that use REST APIs. It is commonly used in Spring Boot applications.\nFeign allows you to define REST clients in a declarative way, meaning you can specify how to interact with external\nservices by simply defining an interface with annotated methods.",(0,s.jsx)(n.br,{}),"\n","This eliminates the need for boilerplate code that handles the HTTP request and response.\nUsing Feign Client reduces the amount of code you need to write.",(0,s.jsx)(n.br,{}),"\n","You don\u2019t need to manually write the code for creating HTTP connections, setting headers, serializing requests, or\ndeserializing responses. Feign abstracts all of this, allowing you to focus on the business logic."]}),"\n",(0,s.jsx)(n.h3,{id:"access-search-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/access-search-controller",children:"Access Search Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to search in the Regards catalog and injects services to manipulate the results. Services are\nstored in a\nmemory\ncache. This controller is a proxy controller thanks to :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-catalog"})]}),"\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-access-project"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"recipient-dto-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/recipient-dto-controller",children:"Recipient Dto Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to retrieve all recipients of notification in Regards. This controller is a proxy controller thanks\nto :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-notifier"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"toponyms-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/toponyms-controller",children:"Toponyms Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to search toponyms in the catalog of Regards. This controller is a proxy controller thanks to :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-access-instance"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"module--access-services",children:"Module : access-services"}),"\n",(0,s.jsxs)(n.p,{children:["This module allows to handle the configuration of the Regards user interface with CRUD operations on the database\nconcerning the ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/plugins/",children:"UI plugins"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to handle the configuration\nof ",(0,s.jsx)(n.a,{href:"/docs/development/frontend/plugins/",children:"UI plugins"})," : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/ui-plugin-service-controller",children:"UI Plugin Controller"}),",\n",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/ui-plugin-definition-controller",children:"UI Plugin Definition Controller"}),", ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/ui-plugin-configuration-controller",children:"UI Plugin Configuration Controller"}),",\n",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/link-ui-plugins-datasets-controller",children:"Link UI Plugin s Datasets Controller"})]}),"\n",(0,s.jsxs)(n.li,{children:["Endpoints in order to retrieve aggregations of UI plugins services and ",(0,s.jsx)(n.code,{children:"Catalog"})," (included a feign client to call HTTP\nAPI methods in ",(0,s.jsx)(n.code,{children:"rs-catalog"}),")\nmicroservices : ",(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/services-aggregator-controller",children:"Services Aggregator Controller"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Moreover, this module allows you to manage access, resources and the registration links to project users in Regards(\n=each tenant of Regards) with the Backend-For-Frontend pattern."}),"\n",(0,s.jsx)(n.h3,{id:"project-users-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/project-users-controller",children:"Project Users Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to manage project users in Regards. This controller is a proxy controller thanks to :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-admin"})]}),"\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-storage"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storage-download-quota-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/storage-download-quota-controller",children:"Storage Download Quota Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to indicate quotas concerning the downloaded files in an order in Regards. This controller is a\nproxy\ncontroller thanks to :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-storage"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"accesssettingscontroller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/access-settings-controller",children:"AccessSettingsController"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to manage access global settings in Regards. Accesses are the state of project users during the\nactivation process. This controller is a proxy controller thanks to :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-admin"})]}),"\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-storage"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"user-resource-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/user-resource-controller",children:"User Resource Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to manage ressources for project users in Regards. This controller is a proxy controller thanks\nto :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-admin"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"registration-controller",children:(0,s.jsx)(n.a,{href:"/docs/development/services/access-project/api-swagger#tag/registration-controller",children:"Registration Controller"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows to handle users registration for a project in Regards. This controller is a proxy controller thanks\nto :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["feign client to call HTTP API methods in ",(0,s.jsx)(n.code,{children:"rs-admin"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(96540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);