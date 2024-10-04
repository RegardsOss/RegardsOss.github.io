"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[18133],{85868:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(74848),i=r(28453);const o={title:"OAIS Catalog Services",sidebar_label:"OAIS catalog services",slug:"/development/functional-overview/oais-catalog-services/"},t=void 0,a={id:"overview/functional-overview/oais-catalog-services",title:"OAIS Catalog Services",description:"OAIS Catalog Services are a set of facultative REGARDS services that allows to create a data source of products with",source:"@site/docs/overview/functional-overview/03-oais-catalog-services.md",sourceDirName:"overview/functional-overview",slug:"/development/functional-overview/oais-catalog-services/",permalink:"/docs/development/functional-overview/oais-catalog-services/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/overview/functional-overview/03-oais-catalog-services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"OAIS Catalog Services",sidebar_label:"OAIS catalog services",slug:"/development/functional-overview/oais-catalog-services/"},sidebar:"overview",previous:{title:"Meta Catalog services",permalink:"/docs/development/functional-overview/meta-catalog-services"},next:{title:"GeoJson catalog services",permalink:"/docs/development/functional-overview/geojson-catalog-services/"}},c={},d=[{value:"Populate using Ingest API",id:"populate-using-ingest-api",level:2},{value:"Populate through DataProvider",id:"populate-through-dataprovider",level:2},{value:"Populate through LTA Manager and Worker",id:"populate-through-lta-manager-and-worker",level:2},{value:"Populate using another REGARDS GeoJSON catalog",id:"populate-using-another-regards-geojson-catalog",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["OAIS Catalog Services are a set of ",(0,n.jsx)(s.strong,{children:"facultative REGARDS services"})," that allows to create a data source of products with\nmetadata recommended by the ",(0,n.jsx)(s.a,{href:"https://public.ccsds.org",children:"CCSDS"}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"This data source is recommended for long-term archive catalog"})}),"\n",(0,n.jsx)(s.p,{children:"To allow administrators to manage OAIS products, you need to use these microservices :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/development/backend/services/ingest/overview/",children:"rs-ingest"})," : Manage OAIS formated products data source"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/development/backend/services/storage/overview/",children:"rs-storage"})," : Manage files references and stored files"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/notifier/overview/",children:"rs-notifier"})," : Highly configurable notification\nsystem. Can be used to inform external and internal components when an OAIS product is created or deleted."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(898).A+"",width:"963",height:"417"})}),"\n",(0,n.jsxs)(s.p,{children:["Thanks to rs-ingest microservice, administrator can manage a new data source with OAIS formated products. To learn more\nabout ",(0,n.jsx)(s.strong,{children:"rs-ingest"})," microservice see ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/ingest/overview/",children:"Ingest architecture"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This data\nsource ",(0,n.jsx)(s.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"can be used as one of the data sources crawled by the data management service"}),"\nthanks to DataManagement ",(0,n.jsx)(s.a,{href:"/docs/development/services/dam/plugins/overview",children:"OAIS Data Source Plugin"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"To create products on the OAIS catalog, you can use these microservices :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/dataprovider/overview/",children:"rs-data-provider"})," : Scan files on file\nsystem and send OAIS Submission Information Package requests to OAIS catalog (rs-ingest)."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/lta-manager/overview/",children:"rs-lta-manager"})," : Long term Archive system.\nSimplified\ninterface to add products into the OAIS catalog (rs-ingest). Requires rs-worker-manager microservice."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/services/worker-manager/overview",children:"rs-worker-manager"})," : Manager to handle\nregards ",(0,n.jsx)(s.a,{href:"/docs/development/concepts/workers/",children:"workers"}),".\nTo use ",(0,n.jsx)(s.strong,{children:"rs-lta-manager"}),", worker manager is mandatory with a worker that receives simplified products format and send\nSubmission Information Package requests to OAIS catalog (rs-ingest)."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"populate-using-ingest-api",children:"Populate using Ingest API"}),"\n",(0,n.jsxs)(s.p,{children:["The diagram below explains how to fulfill the OAIS products data source directly using ",(0,n.jsx)(s.strong,{children:"rs-ingest"})," :"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(32556).A+"",width:"681",height:"246"})}),"\n",(0,n.jsx)(s.p,{children:"This design uses:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/ingest/overview/",children:"rs-ingest"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/storage/overview/",children:"rs-storage"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/notifier/overview/",children:"rs-notifier"})]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This design is easy to start, but you should consider the usage of\nthe ",(0,n.jsx)(s.a,{href:"#populate-through-lta-manager-and-worker",children:"LTA Manager and Worker"})," as these services simplifies the\ninterface to add products into the OAIS catalog."]})}),"\n",(0,n.jsx)(s.h2,{id:"populate-through-dataprovider",children:"Populate through DataProvider"}),"\n",(0,n.jsxs)(s.p,{children:["The diagram below explains how the ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/dataprovider/overview/",children:"rs-data-provider"}),"\nscan files on file system and send OAIS Submission Information Package requests to OAIS catalog"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(14320).A+"",width:"583",height:"241"})}),"\n",(0,n.jsx)(s.p,{children:"This design uses:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/ingest/overview/",children:"rs-ingest"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/storage/overview/",children:"rs-storage"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/dataprovider/overview/",children:"rs-data-provider"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/notifier/overview/",children:"rs-notifier"})]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"DataProvider is a no-code solution that scans the file system to add products to the OAIS catalog."})}),"\n",(0,n.jsx)(s.h2,{id:"populate-through-lta-manager-and-worker",children:"Populate through LTA Manager and Worker"}),"\n",(0,n.jsxs)(s.p,{children:["The diagram below explains the microservices interaction to fulfill the OAIS products data source with ",(0,n.jsx)(s.strong,{children:"LTA Manager"}),"\nmicroservice and a ",(0,n.jsx)(s.strong,{children:"Worker"})," to create the SIP request."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(24726).A+"",width:"1059",height:"558"})}),"\n",(0,n.jsx)(s.p,{children:"This design uses:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/ingest/overview/",children:"rs-ingest"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/storage/overview/",children:"rs-storage"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/backend/services/lta-manager/overview/",children:"rs-lta-manager"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/development/services/worker-manager/overview",children:"rs-worker-manager"})}),"\n",(0,n.jsx)(s.li,{children:"Some worker that receives simplified products format and send\nSubmission Information Package requests to OAIS catalog (rs-ingest)"}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Optional"})," ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/notifier/overview/",children:"rs-notifier"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"populate-using-another-regards-geojson-catalog",children:"Populate using another REGARDS GeoJSON catalog"}),"\n",(0,n.jsx)(s.p,{children:"The diagram below explains how to populate the OAIS catalog using another GeoJSON REGARDS catalog."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:r(54030).A+"",width:"1297",height:"534"})}),"\n",(0,n.jsx)(s.p,{children:"This design uses:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["on the ",(0,n.jsx)(s.strong,{children:"REGARDS B"})," side, same services than the ones describes in\nthe ",(0,n.jsx)(s.a,{href:"#populate-through-lta-manager-and-worker",children:"LTA Manager and Worker section"})]}),"\n",(0,n.jsxs)(s.li,{children:["on the ",(0,n.jsx)(s.strong,{children:"REGARDS A"})," side, you need\nthe ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/notifier/plugins/recipient-sender#lta-request-sender",children:"LTA Request Sender Notifier plugin"}),"\ninstalled"]}),"\n",(0,n.jsxs)(s.li,{children:["a shovel on ",(0,n.jsx)(s.strong,{children:"REGARDS B"})," that retrieves ",(0,n.jsx)(s.code,{children:"LTA requests"})," stored on a ",(0,n.jsx)(s.strong,{children:"REGARDS A"})," queue"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},898:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/ingest_workflow-d50a7e1eafcfbe22638d47be72745449.png"},14320:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/ingest_workflow_dataprovider-0c90ce70f31d9ed3a6f52438535bd313.png"},32556:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/ingest_workflow_direct-557d7339892c5caa77b43df4f9cefefa.png"},24726:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/ingest_workflow_lta-a356c1d566e25a4c4c25539481744827.png"},54030:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/ingest_workflow_regards_to_regards-39df806d430b2f4c77031af2b495ecf4.png"},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>a});var n=r(96540);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);