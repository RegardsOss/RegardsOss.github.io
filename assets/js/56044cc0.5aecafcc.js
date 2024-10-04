"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[78036],{60433:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var n=i(74848),o=i(28453);const t={id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/",sidebar_position:1},r=void 0,c={id:"development/services/catalog/backend-catalog-overview",title:"REGARDS catalog microservice",description:"Overview",source:"@site/docs/development/services/catalog/overview.md",sourceDirName:"development/services/catalog",slug:"/development/backend/services/catalog/overview/",permalink:"/docs/development/backend/services/catalog/overview/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/services/catalog/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"backend-catalog-overview",title:"REGARDS catalog microservice",sidebar_label:"Overview",slug:"/development/backend/services/catalog/overview/",sidebar_position:1},sidebar:"dev",previous:{title:"Retrieve Configuration",permalink:"/docs/development/backend/services/config/guides/rest/get-configuration"},next:{title:"How it works",permalink:"/docs/development/backend/services/catalog/conception/"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Related REGARDS services",id:"related-regards-services",level:3},{value:"Conception",id:"conception",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Plugins",id:"plugins-1",level:2},{value:"How to configure",id:"how-to-configure",level:2},{value:"How to access through HMI",id:"how-to-access-through-hmi",level:2},{value:"How to access source code",id:"how-to-access-source-code",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Catalog"})," (or ",(0,n.jsx)(s.code,{children:"rs-catalog"}),") microservice is used to consult the\n",(0,n.jsx)(s.a,{href:"/docs/development/functional-overview/meta-catalog-services",children:"meta-catalog"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Several functionalities are enabled by this service:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Searching for ",(0,n.jsx)(s.a,{href:"/docs/development/concepts/products/",children:"products"})," with search criteria, respecting user access rights"]}),"\n",(0,n.jsx)(s.li,{children:"Downloading product files"}),"\n",(0,n.jsx)(s.li,{children:"Retrieving datasets and collections information"}),"\n",(0,n.jsx)(s.li,{children:"Compatibility with search standards like STAC or OpenSearch through dedicated plugins"}),"\n",(0,n.jsx)(s.li,{children:"Performing operations on the products such as restoring, updating or deleting products through dedicated plugins"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"These functionalities ensure that user access rights are respected."}),"\n",(0,n.jsx)(s.h3,{id:"related-regards-services",children:"Related REGARDS services"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Storage"})," : Some operations eventually are under ",(0,n.jsx)(s.code,{children:"Storage"})," service's responsibility. This is the case for\ndownloading, restoring or checking availability of products. When one of these operation is needed, ",(0,n.jsx)(s.code,{children:"Catalog"}),"\ncalls ",(0,n.jsx)(s.code,{children:"Storage"})," through a Storage REST Client."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"conception",children:"Conception"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Concept"}),(0,n.jsx)(s.th,{children:"Compatibility"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../concepts/multitenant",children:"Multitenant"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Can handle multiple tenants/projects"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../concepts/scalability#vertical-scalability",children:"Vertical scalability"})}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:"Does not use jobs system"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"../../../concepts/scalability#horizontal-scalability",children:"Horizontal scalability"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:"Service can be deployed with multiple instances"})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["You can learn how the service works with the ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/conception/",children:"How it works section"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,n.jsxs)(s.p,{children:["You can learn how to ",(0,n.jsx)(s.strong,{children:"operate"})," with the microservice thanks to ",(0,n.jsx)(s.strong,{children:"API Guides"})," :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Legacy"})," Search API ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/legacy-search-api",children:"using REST API"})," shows you how to make search requests\nwith default REGARDS lucene based engine."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"OpenSearch"})," API ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/opensearch-api",children:"using REST API"})," shows you how to make search requests\nwith OpenSearch engine."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"STAC"})," Search API ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/stac-search-api",children:"using REST API"})," shows you how to make search requests\nwith STAC engine."]}),"\n",(0,n.jsxs)(s.li,{children:["Complex Search ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/api-guides/rest/complex-search-api/",children:"using REST API"})," shows you how to elaborate complex requests\non the catalog with many search requests."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Download"})," products ",(0,n.jsx)(s.a,{href:"./api-guides/rest/download-product-file-api",children:"using REST API"})]}),"\n",(0,n.jsxs)(s.li,{children:["Product files ",(0,n.jsx)(s.strong,{children:"restoration"})," ",(0,n.jsx)(s.a,{href:"./api-guides/rest/file-restoration-api",children:"using REST API"})," shows you how to\nmake a product available for downloading if it is not."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsx)(s.h2,{id:"plugins-1",children:"Plugins"}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"/docs/development/services/catalog/plugins/listing",children:"Plugins section"})," to learn how to extend the functionality of the service."]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-configure",children:"How to configure"}),"\n",(0,n.jsxs)(s.p,{children:["To learn how the microservice is configured with ",(0,n.jsx)(s.strong,{children:"static parameters from properties files"}),"\nsee ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/configuration/static-configuration",children:"Configuration section"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["To understand the ",(0,n.jsx)(s.strong,{children:"configuration of specific tenant"})," (aka project)\nsee ",(0,n.jsx)(s.a,{href:"/docs/development/backend/services/catalog/configuration/import-export",children:"Import/export configuration section"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-access-through-hmi",children:"How to access through HMI"}),"\n",(0,n.jsxs)(s.p,{children:["You can follow the ",(0,n.jsx)(s.strong,{children:"User manuel"})," to learn about the administrator HMI related functionalities :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"../../../../user-guide/catalog/use",children:"how to use browse the catalog"}),"."]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"../../../../user-guide/catalog/configuration",children:"How to configure the catalog"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"../../../../user-guide/catalog/protocols/introduction",children:"How to configure search protocols"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-access-source-code",children:"How to access source code"}),"\n",(0,n.jsxs)(s.p,{children:["Microservice source code is available on ",(0,n.jsx)(s.a,{href:"https://github.com/RegardsOss/regards-backend/tree/master/rs-catalog",children:"GitHub"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var n=i(96540);const o={},t=n.createContext(o);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);