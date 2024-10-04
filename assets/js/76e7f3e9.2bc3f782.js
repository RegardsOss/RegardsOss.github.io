"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61819],{12981:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453);const o={id:"release-notes-v1.15.0",title:"Version 1.15.0",slug:"/v1.15.0/",sidebar_position:9978},r=void 0,a={id:"notes/release-notes-v1.15.0",title:"Version 1.15.0",description:"Released on : April 2024",source:"@site/release_notes/notes/V1.15.0.md",sourceDirName:"notes",slug:"/v1.15.0/",permalink:"/release-notes/v1.15.0/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9978,frontMatter:{id:"release-notes-v1.15.0",title:"Version 1.15.0",slug:"/v1.15.0/",sidebar_position:9978},sidebar:"release_notes",previous:{title:"Version 1.15.1",permalink:"/release-notes/v1.15.1/"},next:{title:"Version 1.14.9",permalink:"/release-notes/v1.14.9/"}},l={},d=[{value:"Features",id:"features",level:2},{value:"OAIS Catalog notifications and dissemination",id:"oais-catalog-notifications-and-dissemination",level:3},{value:"Data access without Ordering on Nearline storage locations",id:"data-access-without-ordering-on-nearline-storage-locations",level:3},{value:"Web interface (HMI)",id:"web-interface-hmi",level:3},{value:"Breaking change",id:"breaking-change",level:2},{value:"Deployment",id:"deployment",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Bug fixes",id:"bug-fixes",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Released on : ",(0,s.jsx)(n.strong,{children:"April 2024"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://www.gnu.org/licenses/gpl-3.0",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/License-GPLv3-blue.svg",alt:"License: GPL v3"})}),"\n",(0,s.jsx)(n.strong,{children:"Release candidate version"})]}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h3,{id:"oais-catalog-notifications-and-dissemination",children:"OAIS Catalog notifications and dissemination"}),"\n",(0,s.jsxs)(n.p,{children:["REGARDS now provides, on the OAIS Catalog, the ability to disseminate products to Notifier, as FEM catalog can already\ndo.",(0,s.jsx)(n.br,{}),"\n","To do so, admins can select a list of AIPs using search criteria, click on the button ",(0,s.jsx)(n.code,{children:"Disseminate product"}),", select\na list of recipients to send the product to, or let Notifier rules decides where the product should be sent.",(0,s.jsx)(n.br,{}),"\n","Dissemination requests can be monitored on the OAIS requests dashboard and on the main Dashboard.",(0,s.jsx)(n.br,{}),"\n","AIP metadata tracks when and where the AIP have been disseminated, and if an acknowledgment is expected and have been\nreceived."]}),"\n",(0,s.jsx)(n.h3,{id:"data-access-without-ordering-on-nearline-storage-locations",children:"Data access without Ordering on Nearline storage locations"}),"\n",(0,s.jsxs)(n.p,{children:["If your Nearline storage location provides a cache of files on tape, you can now download these files without asking\nREGARDS to put these files into its internal cache.",(0,s.jsx)(n.br,{}),"\n","It allows to download these files threw the catalog REST API directly, with no order made.",(0,s.jsx)(n.br,{}),"\n","To do so, we now provide:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An endpoint to ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/file-restoration-api#check-product-availability-endpoint",children:"check if nearline product files"}),"\nare immediately downloadable"]}),"\n",(0,s.jsxs)(n.li,{children:["An endpoint to ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/file-restoration-api#product-restoration-endpoint",children:"makes nearline product files available"})," to download"]}),"\n",(0,s.jsxs)(n.li,{children:["An exchange to ",(0,s.jsx)(n.a,{href:"/docs/development/backend/services/storage/file-availability-api",children:"be notified when a nearline file is now available"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"web-interface-hmi",children:"Web interface (HMI)"}),"\n",(0,s.jsx)(n.p,{children:"In this new release, we've improved:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The notification interface has been remade to make it more intuitive and allow research among received notifications."}),"\n",(0,s.jsx)(n.li,{children:"On the user app side, users can now save their research to re-use it later."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"breaking-change",children:"Breaking change"}),"\n",(0,s.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsxs)(n.p,{children:["You need to follow the ",(0,s.jsx)(n.a,{href:"/docs/setup/swarm/migration/1.14-to-1.15",children:"Ansible migration guide to update your playbook from V1.14 to V1.15"})]}),"\n",(0,s.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Notification API"})," on ",(0,s.jsx)(n.strong,{children:"Microservice RS-ADMIN"})," and ",(0,s.jsx)(n.strong,{children:"Microservice RS-ADMIN-INSTANCE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["endpoint",(0,s.jsx)(n.code,{children:"/notifications"}),": replace the ",(0,s.jsx)(n.code,{children:"GET"})," endpoint by a ",(0,s.jsx)(n.code,{children:"POST"})," endpoint to allow complex\ncriteria."]}),"\n",(0,s.jsxs)(n.li,{children:["remove endpoint to mark all notification read ",(0,s.jsx)(n.code,{children:"notifications/all/read"})]}),"\n",(0,s.jsxs)(n.li,{children:["remove endpoint to mark all notification unread ",(0,s.jsx)(n.code,{children:"notifications/all/unread"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Microservice RS-STORAGE"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"all queues and exchanges used by Storage to consume and produce messages have been migrated to another package"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Microservice RS-FEM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["criteria ",(0,s.jsx)(n.code,{children:"disseminationPending"})," (type bool) replaced by new criteria ",(0,s.jsx)(n.code,{children:"disseminationStatus"})," (enum with\nvalues ",(0,s.jsx)(n.code,{children:"NONE"}),", ",(0,s.jsx)(n.code,{children:"PENDING"})," or ",(0,s.jsx)(n.code,{children:"DONE"}),") on","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"endpoint search fem product"}),"\n",(0,s.jsx)(n.li,{children:"endpoint delete fem product"}),"\n",(0,s.jsx)(n.li,{children:"endpoint notify fem product"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Microservice RS-DAM"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Add new attribute type ",(0,s.jsx)(n.code,{children:"INTEGER_RANGE"}),", ",(0,s.jsx)(n.code,{children:"DOUBLE_RANGE"}),", ",(0,s.jsx)(n.code,{children:"DATE_RANGE"})," and ",(0,s.jsx)(n.code,{children:"LONG_RANGE"}),".",(0,s.jsx)(n.br,{}),"\n","You should try to replace your ",(0,s.jsx)(n.code,{children:"INTEGER_INTERVAL"}),", ",(0,s.jsx)(n.code,{children:"DOUBLE_INTERVAL"}),", ",(0,s.jsx)(n.code,{children:"DATE_INTERVAL"})," and ",(0,s.jsx)(n.code,{children:"LONG_INTERVAL"}),"\nattributes by these new attributes as their implementation are natives to ElasticSearch (faster research).",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"INTEGER_INTERVAL"}),", ",(0,s.jsx)(n.code,{children:"DOUBLE_INTERVAL"}),", ",(0,s.jsx)(n.code,{children:"DATE_INTERVAL"})," and ",(0,s.jsx)(n.code,{children:"LONG_INTERVAL"})," attributes will be deprecated on 1.16.0\nand their support dropped soon after."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fix file name received when downloading a file, as the filename was the shared with another file with same checksum"}),"\n",(0,s.jsx)(n.li,{children:"When download file with the DownloadPlugin on user app, close the popup instead of showing an error"}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"JobEventHandler"})," on Notifier service"]}),"\n",(0,s.jsx)(n.li,{children:"Fix an issue on DAM microservice that prevents the service to boot with invalid configuration"}),"\n",(0,s.jsx)(n.li,{children:"Improve validation to prevent creation of invalid attribute JsonSchema"}),"\n",(0,s.jsx)(n.li,{children:"Improve Docker Java images as Garbage collector configuration was invalid which leads to bad Heap Size control and OOM"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);